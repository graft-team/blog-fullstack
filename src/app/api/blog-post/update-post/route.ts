import { NextRequest, NextResponse } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const extractData = await request.json();

    let existingPosts = [];
    if (typeof window !== 'undefined') {
      const storedPosts = localStorage.getItem('blogPosts');
      if (storedPosts) {
        existingPosts = JSON.parse(storedPosts);
      }
    }

    const updatedPosts = existingPosts.map((post: any) => {
      if (post.id === extractData.id) {
        return {
          ...post,
          ...extractData,
          updatedAt: new Date().toISOString()
        };
      }
      return post;
    });

    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));

    return NextResponse.json({
      success: true,
      message: "Post berhasil diperbarui"
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Terjadi kesalahan saat memperbarui post"
    });
  }
}