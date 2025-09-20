import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const extractQuery = url.searchParams.get("query");

    // Get posts from localStorage
    let posts = [];
    if (typeof window !== 'undefined') {
      const storedPosts = localStorage.getItem('posts');
      posts = storedPosts ? JSON.parse(storedPosts) : [];
    }

    // Filter posts based on search query
    const searchPostList = posts.filter((post: any) => {
      const titleMatch = post.title.toLowerCase().includes((extractQuery || '').toLowerCase());
      const descriptionMatch = post.description.toLowerCase().includes((extractQuery || '').toLowerCase());
      return titleMatch || descriptionMatch;
    });

    if (searchPostList) {
      return NextResponse.json({
        success: true,
        data: searchPostList,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to search results",
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
