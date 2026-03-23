import { createContext, useContext } from "react";

interface ThemeContextType {
  isLightTheme: boolean;
  toggleTheme: () => void;
}
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeContext provider");
  }
  return context;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);