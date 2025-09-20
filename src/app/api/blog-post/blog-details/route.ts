import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const blogID = url.searchParams.get("blogID");

    // Get blog posts from localStorage
    let blogPosts = [];
    if (typeof window !== 'undefined') {
      const storedPosts = localStorage.getItem('blogPosts');
      blogPosts = storedPosts ? JSON.parse(storedPosts) : [];
    }

    // Find the specific blog post
    const blogDetails = blogPosts.find((post: any) => post.id === Number(blogID));

    if (blogDetails) {
      return NextResponse.json({
        success: true,
        data: blogDetails,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to fetch the blog details ! Please try again",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}
