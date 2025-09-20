"use client";

import BlogList from "@/components/blogs/blog-list";
import { useEffect, useState } from "react";
import Button from "@/components/button";
import { DUMMY_BLOGS } from "@/utils";
import { Blog } from "@/utils/types";

export default function Blogs() {
  const [mounted, setMounted] = useState(false);
  const [blogPostsList, setBlogPostsList] = useState<Blog[]>([]);

  useEffect(() => {
    setMounted(true);
    const blogs: Blog[] = JSON.parse(localStorage.getItem('blogs') || '[]');
    if (!Array.isArray(blogs) || blogs.length === 0) {
      localStorage.setItem('blogs', JSON.stringify(DUMMY_BLOGS));
      setBlogPostsList(DUMMY_BLOGS);
    } else {
      setBlogPostsList(blogs);
    }
  }, []);

  function handleResetToDummy() {
    localStorage.setItem('blogs', JSON.stringify(DUMMY_BLOGS));
    setBlogPostsList(DUMMY_BLOGS);
  }

  if (!mounted) return null;

  return (
    <div>
      <div className="pt-[120px] pb-[60px] md:pt-[140px] md:pb-[80px] flex items-center justify-center">
        <Button text="Reset to Dummy Data" onClick={handleResetToDummy} />
      </div>
      <BlogList lists={blogPostsList} />
    </div>
  );
}
