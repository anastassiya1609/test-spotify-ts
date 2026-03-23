import {  useState } from "react";
import type { LayoutProps } from "../types";
import { ThemeContext } from "../utils/provider";



export default function ThemeProvider({ children }: LayoutProps) {
  const [isLightTheme, setIsLightTheme] = useState(false);

  function toggleTheme() {
    setIsLightTheme((prev) => !prev);
  }

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
