import { ThemeContext } from "@/components/ThemeContext";
import { Colors } from "@/styles/theme";
import { useContext } from "react";

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const colors = Colors[theme as keyof typeof Colors];

  return {
    theme,
    toggleTheme,
    colors,
  };
}
