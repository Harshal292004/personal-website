"use client";
import { useEffect, useState } from "react";
import { getBlogs } from "../../../actions/blogs.actions";
import { IBlog } from "../types";

const useGetBlogs = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsLoading(true);
        const result = await getBlogs();
        setBlogs(result?.blogs || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);
  return { blogs, isLoading };
};

export default useGetBlogs;
