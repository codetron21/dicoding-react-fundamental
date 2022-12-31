import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NotesScreen from "./pages/NotesScreen";
import DetailNoteScreen from "./pages/DetailNoteScreen";
import HeaderNote from "./components/HeaderNote";
import NotFoundScreen from "./pages/NotFoundScreen";
import CreateNoteScreen from "./pages/CreateNoteScreen";
import Spacer from "./components/Spacer";
import LoginScreen from "./pages/LoginScreen";
import RegisterScreen from "./pages/RegisterScreen";
import MainMenu from "./components/MainMenu";
import AuthMenu from "./components/AuthMenu";
import ThemeMenu from "./components/ThemeMenu";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TokenProvider } from "./contexts/TokenContext";
import { putAccessToken, getAccessToken } from "./utils/network-data";

const NotesApp = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "Light"
  );

  const [token, setToken] = useState(() => getAccessToken() || null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "Light" ? "Dark" : "Light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const saveToken = (token) => {
    setToken(token);
    putAccessToken(getAccessToken());
  };

  const deleteToken = () => {
    putAccessToken(null);
    setToken(getAccessToken());
  };

  const contextValue = React.useMemo(() => {
    return {
      theme,
      toggleTheme,
    };
  }, [theme]);

  const tokenValue = React.useMemo(() => {
    return {
      token,
      saveToken,
      deleteToken,
    };
  }, [token]);

  return (
    <ThemeProvider value={contextValue}>
      <TokenProvider value={tokenValue}>
        <header>
          <ThemeMenu />
          {token == null ? <AuthMenu /> : <MainMenu />}
          <HeaderNote title="Notes" />
          <Spacer v={20} />
        </header>
        <main>
          {token == null ? (
            <Routes>
              <Route path="/*" element={<LoginScreen />} />
              <Route path="/register" element={<RegisterScreen />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/*" element={<NotesScreen />} />
              <Route path="/create-note" element={<CreateNoteScreen />} />
              <Route path="/detail-note/:id" element={<DetailNoteScreen />} />
              <Route path="*" element={<NotFoundScreen />} />
            </Routes>
          )}
        </main>
      </TokenProvider>
    </ThemeProvider>
  );
};

export default NotesApp;
