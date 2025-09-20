import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const extractPostData = await request.json();

    // Get existing posts from localStorage or initialize empty array
    let existingPosts = [];
    if (typeof window !== 'undefined') {
      const storedPosts = localStorage.getItem('blogPosts');
      if (storedPosts) {
        existingPosts = JSON.parse(storedPosts);
      }
    }

    // Add new post with generated ID
    const newPost = {
      id: Date.now().toString(), // Simple ID generation
      ...extractPostData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    existingPosts.push(newPost);

    // Save back to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
    }

    console.log(extractPostData, "extractPostData");

    return NextResponse.json({
      success: true,
      message: "New blog post added successfully",
      post: newPost
    });

  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}
