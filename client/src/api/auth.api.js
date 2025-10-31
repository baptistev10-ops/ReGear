import { BASE_URL } from "../utils/url";

/**
 * Création d’un utilisateur
 */
export async function signUp(values) {
  try {
    const response = await fetch(`${BASE_URL}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
      mode: "cors", // ✅ important sur Safari
      credentials: "include",
    });
    return await response.json();
  } catch (error) {
    console.error("Erreur inscription:", error);
  }
}

/**
 * Connexion utilisateur
 */
export async function signIn(values) {
  try {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
      mode: "cors", // ✅ indispensable pour Safari iOS
      credentials: "include", // ✅ permet l’envoi/stockage du cookie
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || "Erreur lors de la connexion");
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur connexion:", error);
    return null;
  }
}

/**
 * Récupération de l’utilisateur courant
 */
export async function getCurrentUser() {
  try {
    const response = await fetch(`${BASE_URL}/user/current`, {
      method: "GET",
      mode: "cors", // ✅ iOS fix
      credentials: "include",
    });

    if (!response.ok) return null;
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur getCurrentUser:", error);
    return null;
  }
}

/**
 * Déconnexion utilisateur
 */
export async function signOut() {
  try {
    // ⚠️ correspond à ton controller logoutUser (pas deleteToken)
    const response = await fetch(`${BASE_URL}/user/logoutUser`, {
      method: "POST", // ou GET si tu veux, mais pas DELETE sur un cookie
      mode: "cors",
      credentials: "include",
    });
    return await response.json();
  } catch (error) {
    console.error("Erreur déconnexion:", error);
  }
}

/**
 * Authentification Google
 */
export async function authGoogle(values) {
  try {
    const response = await fetch(`${BASE_URL}/user/auth-google`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: values.access_token }),
      mode: "cors",
      credentials: "include",
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(err.message || "Erreur Google Auth");
    }

    return await response.json();
  } catch (error) {
    console.error("Erreur Google Auth:", error);
    return null;
  }
}
