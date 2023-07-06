import React, { useContext } from "react";
import { ThemeContextType, Theme } from "../@types/theme";
import { themeContext } from "../context/themeContext";
interface Props {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<Props> = ({ children }) => {
  const { theme, changeTheme } = useContext(themeContext) as ThemeContextType;

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    changeTheme(event.target.value as Theme);
  };
  return (
    <div className="Theme-wrapper" data-theme={theme}>
      <select
        className="Theme-toggler"
        name="toggleTheme"
        onChange={handleThemeChange}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      {children}
    </div>
  );
};

export default ThemeWrapper;
