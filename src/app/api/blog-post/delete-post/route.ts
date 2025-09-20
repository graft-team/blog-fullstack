import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const extractIdOfBlogItemToBeDeleted = url.searchParams.get("id");

    let existingPosts = [];
    if (typeof window !== 'undefined') {
      const storedPosts = localStorage.getItem('blogPosts');
      if (storedPosts) {
        existingPosts = JSON.parse(storedPosts);
      }
    }

    const updatedPosts = existingPosts.filter((post: any) => post.id !== extractIdOfBlogItemToBeDeleted);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));

    return NextResponse.json({
      success: true,
      message: "Post berhasil dihapus"
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      success: false,
      message: "Terjadi kesalahan saat menghapus post"
    });
  }
}