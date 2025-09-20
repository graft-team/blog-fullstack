import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const extractCategoryID = searchParams.get("categoryID");

    // Get posts from localStorage
    let posts = [];
    if (typeof window !== 'undefined') {
      const storedPosts = localStorage.getItem('posts');
      posts = storedPosts ? JSON.parse(storedPosts) : [];
    }

    // Filter posts by category
    const getBlogPostListBasedOnCurrentCategoryID = posts.filter(
      (post: any) => post.category === (extractCategoryID || "")
    );

    if (getBlogPostListBasedOnCurrentCategoryID) {
      return NextResponse.json({
        success: true,
        data: getBlogPostListBasedOnCurrentCategoryID,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to fetch data ! Please try again",
      });
    }
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}
