## NextBlog (LocalStorage version)

This project is a Next.js blog demo that uses dummy data stored in `localStorage` (no database, no session, no API). You can create, search, filter by category, view details, and delete posts entirely on the client.

### Quick Start

```bash
npm install
npm run dev
# open http://localhost:3000
```

### Key Behavior
- Data source: `localStorage.blogs`
- First load seeds dummy posts automatically
- You can reset to the dummy data from the Blogs page button

### Pages
- `/` Home: Landing with link to Blogs
- `/blogs` Blogs: List all posts from localStorage; includes “Reset to Dummy Data”
- `/blogs/[id]` Blog Detail: Shows a post by id
- `/category/[id]` Category: Filters posts by category
- `/search` Search: Filters by title/description; supports delete
- `/create` Create: Adds a new post to localStorage

### How It Works
- Seeding: `src/context/index.tsx` writes `DUMMY_BLOGS` to localStorage if empty
- Dummy data: `DUMMY_BLOGS` in `src/utils/index.ts`
- CRUD:
  - Create: `src/app/create/page.tsx` pushes to `localStorage.blogs`
  - Read: Pages/components read from `localStorage.blogs`
  - Delete: `src/components/blogs/blog-list/index.tsx` updates localStorage and local state

### Hydration Safety
Next.js SSR can mismatch when reading browser-only APIs. This project avoids it by:
- Using `"use client"` on pages/components that access `localStorage`
- Adding mounted guards (render nothing until mounted) on pages that read localStorage
- Using `<html suppressHydrationWarning>` in `src/app/layout.tsx`
- Mount guard in theme toggler to avoid icon swap during hydration

### Tech Used
- Next.js App Router, TailwindCSS classes
- next-themes (dark/light), react-icons
- No backend dependencies are required at runtime

### Common Issues
- See “Hydration failed…”: Hard refresh and ensure you’re on the Blogs page, click “Reset to Dummy Data”
- Old posts remain: Use the Reset button on the Blogs page to replace stored data with the dummy set
