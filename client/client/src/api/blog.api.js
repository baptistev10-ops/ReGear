import { BASE_URL } from "../utils/url";

// créer un blog

export async function createBlog(data) {
  const response = await fetch(`${BASE_URL}/blog/publish`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    console.error("Backend error details ❌:", result);
    throw new Error(result.message || "Erreur création blog");
  }

  return result;
}

export async function getBlogs() {
  const response = await fetch(`${BASE_URL}/blog`);
  try {
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

export async function getBlogById(blogId) {
  try {
    const response = await fetch(`${BASE_URL}/blog/blog/${blogId}`, {
      credentials: "include",
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
}
