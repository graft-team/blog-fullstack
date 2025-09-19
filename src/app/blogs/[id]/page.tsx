"use client";

import BlogDetailsHome from "@/components/blogs/blog-details";
import { useEffect, useState } from "react";

interface Param {
  id: string;
}

export default function BlogDetails({ params }: { params: Param }) {
  const { id } = params;
  const [mounted, setMounted] = useState(false);
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    setMounted(true);
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const numericId = typeof id === 'string' ? Number(id) : id;
    const blog = blogs.find((b: any) => b.id === numericId);
    setBlogData(blog);
  }, [id]);

  if (!mounted) return null;
  if (!blogData) return <div>Loading...</div>;

  return <BlogDetailsHome blogData={blogData} />;
}
