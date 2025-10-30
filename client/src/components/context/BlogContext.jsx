import { createContext, useState } from "react";
import { useAuth } from "./AuthContext";
import { createBlog, getBlogs } from "../../api/blog.api";
import { useContext } from "react";
import { useEffect } from "react";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [blogs, setBlogs] = useState([]);
  const { userConnected } = useAuth();

  const addBlogs = async (values) => {
    console.log({ values });

    try {
      const newBlog = await createBlog(values);
      setBlogs((prev) => [newBlog, ...prev]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, addBlogs }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  return useContext(BlogContext);
}
