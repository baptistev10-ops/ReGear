import { BASE_URL } from "../utils/url";

export async function signUp(values) {
  try {
    const response = await fetch(`${BASE_URL}/user`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const newUserMessage = await response.json();
    return newUserMessage;
  } catch (error) {
    console.log(error);
  }
}

export async function signIn(values) {
  try {
    const response = await fetch(`${BASE_URL}/user/login`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const userConnected = await response.json();
    return userConnected;
  } catch (error) {
    console.log(error);
  }
}

export async function getCurrentUser() {
  try {
    const response = await fetch(`${BASE_URL}/user/current`, {
      method: "GET",
      credentials: "include",
    });
    if (response.ok) {
      return await response.json();
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function signOut() {
  await fetch(`${BASE_URL}/user/deleteToken`, {
    method: "DELETE",
    credentials: "include",
  });
}

export async function authGoogle(values) {
  const token = values.access_token;
  try {
    const response = await fetch(`${BASE_URL}/user/auth-google`, {
      method: "POST",
      body: JSON.stringify({ token }),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    const newUserMessage = await response.json();
    return newUserMessage;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(id) {
  try {
    const response = await fetch(`${BASE_URL}/user/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function confirmDeleteUser(confirmDelete) {
  try {
    const response = await fetch(`${BASE_URL}/user/confirm-delete`, {
      method: "POST",
      body: JSON.stringify({ password: confirmDelete }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
