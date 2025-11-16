import User from "../models/user.schema.js";
import TempUser from "../models/tempuser.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { sendConfirmationEmail } from "../email/email.js";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

const createTokenEmail = (email) => {
  return jwt.sign({ email }, process.env.SECRET_KEY, { expiresIn: "900s" });
};
// nodemailer
// export const register = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;
//     const existingUserMail = await User.findOne({ email });
//     const existingUserPseudo = await User.findOne({ username });
//     const existingTempUserMail = await TempUser.findOne({ email });
//     const existingTempUserPseudo = await TempUser.findOne({ username });

//     if (existingUserMail || existingUserPseudo) {
//       return res.status(400).json({ message: "Déjà inscrit" });
//     } else if (existingTempUserMail || existingTempUserPseudo) {
//       return res.status(400).json({ message: "Vérifiez vos email" });
//     }

//     const token = createTokenEmail(email);
//     await sendConfirmationEmail(email, token);

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const tempUser = new TempUser({
//       username,
//       email,
//       password: hashedPassword,
//       token,
//     });
//     await tempUser.save();
//     res.status(200).json({
//       message:
//         "Veuillez confirmer votre inscription en consultant votre boite mail",
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// sendgrid
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUserMail = await User.findOne({ email });
    const existingUserPseudo = await User.findOne({ username });
    const existingTempUserMail = await TempUser.findOne({ email });
    const existingTempUserPseudo = await TempUser.findOne({ username });
    if (existingUserMail || existingUserPseudo) {
      return res.status(400).json({ message: "Déjà inscrit" });
    } else if (existingTempUserMail || existingTempUserPseudo) {
      return res.status(400).json({ message: "Vérifiez vos emails" });
    }
    const token = createTokenEmail(email);
    const hashedPassword = await bcrypt.hash(password, 10);
    const tempUser = new TempUser({
      username,
      email,
      password: hashedPassword,
      token,
    });
    await tempUser.save();
    console.log("TempUser enregistré en DB", tempUser);
    try {
      await sendConfirmationEmail(email, token);
      console.log("Email envoyé avec SendGrid à:", email);
    } catch (mailError) {
      console.error(
        "Erreur envoi email:",
        mailError.response?.body || mailError
      );
    }
    res.status(200).json({
      message: "Utilisateur enregistré en attente de confirmation email",
    });
  } catch (error) {
    console.error("Erreur REGISTER: ", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

export const login = async (req, res) => {
  const { data, password } = req.body;
  console.log(req.body);

  let user;

  const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (emailRegex.test(data)) {
    user = await User.findOne({ email: data });
  } else {
    user = await User.findOne({ username: data });
  }

  if (!user) {
    return res
      .status(400)
      .json({ message: "Email ou nom d'utilisateur incorrect" });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(400).json({ message: "Mot de passe incorrect" });
  }

  if (user.isDeleted) {
    return res.status(403).json({ message: "Ce compte a été supprimé" });
  }

  const token = jwt.sign({}, process.env.SECRET_KEY, {
    subject: user._id.toString(),
    expiresIn: "7d",
    algorithm: "HS256",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.MODE === "development" ? false : true,
    sameSite: process.env.MODE === "development" ? "Lax" : "None",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  // Si tout est bon
  res.status(200).json({ user, message: "Connexion réussie" });
};

export const verifyMail = async (req, res) => {
  const { token } = req.params;
  console.log(token);

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const tempUser = await TempUser.findOne({ email: decoded.email, token });
    console.log(tempUser);

    if (!tempUser) {
      return res.redirect(
        `${
          process.env.MODE === "development"
            ? process.env.CLIENT_URL
            : process.env.DEPLOY_FRONT_URL
        }/login?message=error`
      );
    }

    const newUser = new User({
      username: tempUser.username,
      email: tempUser.email,
      password: tempUser.password,
    });
    await newUser.save();
    await TempUser.deleteOne({ email: tempUser.email });
    res.redirect(
      `${
        process.env.MODE === "development"
          ? process.env.CLIENT_URL
          : process.env.DEPLOY_FRONT_URL
      }/login?message=success`
    );
  } catch (error) {
    console.log(error);
    if (error.name === "TokenExpiredError") {
      return res.redirect(
        `$${
          process.env.MODE === "development"
            ? process.env.CLIENT_URL
            : process.env.DEPLOY_FRONT_URL
        }/login?message=error`
      );
    }
  }
};

export const currentUser = async (req, res) => {
  const { token } = req.cookies;
  console.log(token);
  if (token) {
    try {
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      console.log(decodedToken);
      const currentUser = await User.findById(decodedToken.sub);
      console.log(currentUser);

      if (currentUser && !currentUser.isDeleted) {
        return res.status(200).json(currentUser);
      } else {
        return res.status(400).json(null);
      }
    } catch (error) {
      return res.status(400).json(null);
    }
  } else {
    console.log("test current");
    return res.status(400).json(null);
  }
};

export const logoutUser = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.MODE === "development" ? false : true,
    sameSite: process.env.MODE === "development" ? "Lax" : "None",
  });
  res.status(200).json({ message: "Déconnexion réussie" });
};

export const getUsers = async (req, res) => {
  try {
    const getUser = await User.find();
    res.status(200).json(getUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUsers = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(deleteUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const detailsUser = async (req, res) => {
  try {
    const getUser = await User.findById(req.params.id);
    res.status(200).json(getUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const googleAuth = async (req, res) => {
  const { token } = req.body;

  try {
    const response = await fetch(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const profile = await response.json();

    if (profile.error) {
      return res.status(400).json({ message: "Token Google invalide" });
    }

    const { sub, email, name, picture } = profile;

    // vérification si l'utilisateur existe
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        username: name,
        email,
        avatar: picture,
        provider: "google",
        googleId: sub,
      });
    }

    if (user.provider !== "google") {
      return res
        .status(400)
        .json({ message: "Email déjà utilisé avec un autre méthode" });
    }

    const jwtToken = jwt.sign({}, process.env.SECRET_KEY, {
      subject: user._id.toString(),
      expiresIn: "7d",
      algorithm: "HS256",
    });

    res.cookie("token", jwtToken, {
      httpOnly: true,
      secure: process.env.MODE === "production",
      sameSite: "None",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Echec authentification google" });
  }
};

export const confirmPassword = async (req, res) => {
  const password = req.body.password;
  try {
    const fullUser = await User.findById(req.user._id);

    const isValid = await bcrypt.compare(password, fullUser.password);
    if (!isValid) {
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }
    const randomHex = crypto.randomBytes(4).toString("hex");

    await User.findByIdAndUpdate(req.user._id, {
      email: `deleted_${randomHex}@deleted.com`,
      password: null,
      username: "delete_user_" + randomHex,
      googleId: null,
      isDeleted: true,
      deletedAt: new Date(),
    });

    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.MODE !== "development",
      sameSite: process.env.MODE === "development" ? "Lax" : "None",
      path: "/",
    });
    res.status(200).json("Compte supprimé");
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Erreur serveur" });
  }
};
