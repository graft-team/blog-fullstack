"use client";

import { Blog } from "@/utils/types";
import SingleBlog from "../single-blog";
import { useEffect, useState } from "react";

export default function BlogList({ lists }: { lists: Blog[] }) {
  const [data, setData] = useState<Blog[]>([]);

  useEffect(() => {
    setData(lists || []);
  }, [lists]);

  function handleDelete(id: number) {
    const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    const updated = blogs.filter((b: any) => b.id !== id);
    localStorage.setItem("blogs", JSON.stringify(updated));
    setData((prev) => prev.filter((b) => b.id !== id));
  }

  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="container">
        <div className="-mx-4 grid grid-cols-3 gap-2">
          {data && data.length
            ? data.map((listItem: Blog) => (
                <div className="px-4" key={listItem.id}>
                  <SingleBlog handleDelete={handleDelete} blogItem={listItem} />
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
