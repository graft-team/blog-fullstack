"use client";

import CategoryList from "@/components/category";
import { useEffect, useState } from "react";

export default function Category({ params }: { params: any }) {
  const { id } = params;
  const [mounted, setMounted] = useState(false);
  const [getAllList, setGetAllList] = useState([]);

  useEffect(() => {
    setMounted(true);
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    const filtered = blogs.filter((b: any) => b.category === id);
    setGetAllList(filtered);
  }, [id]);

  if (!mounted) return null;

  return <CategoryList list={getAllList} />;
}
