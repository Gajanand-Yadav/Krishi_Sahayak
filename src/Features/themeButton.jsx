import React from "react";
import "./themeButton.css";

// Import icons
import moonIcon from "../assets/moon.png";
import sunWhiteIcon from "../assets/sunwhitelogo.jpg";

const ThemeToggleButton = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        // Light mode → show moon (switch to dark)
        <img
          src={moonIcon}
          alt="Switch to dark mode"
          className="theme-icon moon"
        />
      ) : (
        // Dark mode → show sun (switch to light)
        <img
          src={sunWhiteIcon}
          alt="Switch to light mode"
          className="theme-icon sun"
        />
      )}
    </button>
  );
};

export default ThemeToggleButton;
