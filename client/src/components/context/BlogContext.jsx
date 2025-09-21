import { createContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { getBlogsFromApi } from "../../api/blog.api";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState([]);
  const { userConnected } = useAuth();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogsFromApi;
        setBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBlogs();
  }, []);
}
