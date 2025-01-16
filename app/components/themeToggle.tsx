import { useState, useEffect } from "react";
import "../assets/css/theme-toggle.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      root.setAttribute("data-theme", systemTheme);
    } else {
      root.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === "light") return "dark";
      if (prevTheme === "dark") return "system";
      return "light";
    });
  };

  return (
    <button className={`theme-toggle ${theme}`} onClick={toggleTheme}>
      <div className="theme-icon"></div>
      <div className="text lg:hidden">
        Toggle Mode - {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </div>
    </button>
  );
}
