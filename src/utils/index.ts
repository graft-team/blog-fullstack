import { Blog, FormControlItem, MenuItem, Option } from "./types";

export const menuItems: MenuItem[] = [
  {
    id: "home",
    label: "Home",
    path: "/",
  },
  {
    id: "category",
    label: "Category",
    path: "/category/application",
  },
  {
    id: "blogs",
    label: "Blogs",
    path: "/blogs",
  },
  {
    id: "search",
    label: "Search",
    path: "/search",
  },
];

export const categories: Option[] = [
  {
    value: "application",
    label: "Application",
  },
  {
    value: "data",
    label: "Data",
  },
  {
    value: "software",
    label: "Software",
  },
  {
    value: "tech",
    label: "Technology",
  },
  {
    value: "science",
    label: "Science",
  },
];

export const formControls: FormControlItem[] = [
  {
    id: "title",
    label: "Title",
    placeholder: "Enter Blog Title",
    type: "text",
    component: "input",
    options: [],
  },
  {
    id: "description",
    label: "Description",
    placeholder: "Enter Blog Description",
    type: "text",
    component: "textarea",
    options: [],
  },
  {
    id: "category",
    label: "Category",
    placeholder: "Choose Blog Category",
    type: "",
    component: "select",
    options: categories,
  },
];

export const firebaseConfig = {
  apiKey: "AIzaSyBlCooWO0lmd0JNEgeAfI2aCs1tA3hZNo8",
  authDomain: "blog-app-97d34.firebaseapp.com",
  projectId: "blog-app-97d34",
  storageBucket: "blog-app-97d34.appspot.com",
  messagingSenderId: "980489662763",
  appId: "1:980489662763:web:56af6495955d00bed7d56e",
  measurementId: "G-D8QK3X4RR6"
};

export const initialBlogFormData = {
 title :  '',
 description : '',
 image : '',
 category : '' 
}

export const DUMMY_BLOGS: Blog[] = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description:
      "Learn how to build modern web applications with Next.js, a powerful React framework.",
    category: "tech",
    userid: "anonymous",
    userimage: "",
    comments: [],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
  },
  {
    id: 2,
    title: "The Future of AI",
    description:
      "Exploring the latest advancements in artificial intelligence and their impact on society.",
    category: "science",
    userid: "anonymous",
    userimage: "",
    comments: [],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400",
  },
  {
    id: 3,
    title: "Building Scalable Applications",
    description:
      "Best practices for developing applications that can handle growth and high traffic.",
    category: "software",
    userid: "anonymous",
    userimage: "",
    comments: [],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400",
  },
];
