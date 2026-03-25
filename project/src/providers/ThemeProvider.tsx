import {  useState } from "react";
import type { LayoutProps } from "../types";
import { ThemeContext } from "../utils/provider";



export default function ThemeProvider({ children }: LayoutProps) {
  const [isLightTheme, setIsLightTheme] = useState(() =>{
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme === "light" : true;
  });

  function toggleTheme() {
    setIsLightTheme((prev) => !prev);
    localStorage.setItem("theme", !isLightTheme ? "light" : "dark");
  }

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
