"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { BsSunFill } from "react-icons/bs";

export default function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {
          mounted
            ? (theme === 'dark' ? <BsSunFill size={30} /> : <MdDarkMode size={30} />)
            : <MdDarkMode size={30} />
        }
    </button>
  );
}
