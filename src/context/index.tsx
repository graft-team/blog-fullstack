"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { Blog, BlogFormData } from "@/utils/types";
import { DUMMY_BLOGS, initialBlogFormData } from "@/utils";
import { useEffect } from "react";

type ContextType = {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  formData: BlogFormData;
  setFormData: Dispatch<SetStateAction<BlogFormData>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  searchResults: Blog[];
  setSearchResults: Dispatch<SetStateAction<Blog[]>>;
};

const initialState = {
  loading: false,
  setLoading: () => {},
  formData: initialBlogFormData,
  setFormData: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
  searchResults: [],
  setSearchResults: () => {},
};

export const GlobalContext = createContext<ContextType>(initialState);

export default function GlobalState({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialBlogFormData);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Blog[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let blogs = JSON.parse(localStorage.getItem("blogs") || "null");
    if (!Array.isArray(blogs) || blogs.length === 0) {
      localStorage.setItem("blogs", JSON.stringify(DUMMY_BLOGS));
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        loading,
        setLoading,
        formData,
        setFormData,
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
