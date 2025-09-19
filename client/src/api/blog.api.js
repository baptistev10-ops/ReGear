import { BASE_URL } from "../utils/url";

export async function getBlogsFromApi() {
  try {
    const response = await fetch(`${BASE_URL}/blog`);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
