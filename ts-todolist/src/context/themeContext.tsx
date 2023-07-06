import React, { ReactNode, createContext, useState } from "react";
import { Theme, ThemeContextType } from "../@types/theme";

export const themeContext = createContext<ThemeContextType | null>(null);

interface Props {
  children: ReactNode;
}

const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<Theme>("light");
  return (
    <themeContext.Provider
      value={{ theme: themeMode, changeTheme: setThemeMode }}
    >
      {children}
    </themeContext.Provider>
  );
};
export default ThemeProvider;
