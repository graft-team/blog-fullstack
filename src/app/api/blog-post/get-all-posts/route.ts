import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    let existingPosts = [];
    if (typeof window !== 'undefined') {
      const storedPosts = localStorage.getItem('blogPosts');
      if (storedPosts) {
        existingPosts = JSON.parse(storedPosts);
      }
    }

    return NextResponse.json({
      success: true,
      data: existingPosts
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Terjadi kesalahan saat mengambil semua post"
    });
  }
}