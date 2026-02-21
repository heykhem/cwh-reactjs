import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");

    const applyTheme = (isDark) => {
      const theme = isDark ? "dark" : "light";
      setMode(theme);
      document.documentElement.setAttribute("data-bs-theme", theme);
      document.body.style.backgroundColor = isDark ? "black" : "white";
    };

    // Initial OS theme
    applyTheme(media.matches);

    // Listen for OS theme changes
    const handleChange = (e) => applyTheme(e.matches);
    media.addEventListener("change", handleChange);

    // Cleanup
    return () => media.removeEventListener("change", handleChange);
  }, []);

  const toggleMode = (e) => {
    const isDark = e.target.checked;
    const nextMode = isDark ? "dark" : "light";

    setMode(nextMode);
    document.documentElement.setAttribute("data-bs-theme", nextMode);
    document.body.style.backgroundColor = isDark ? "black" : "white";
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Outlet context={{ mode, showAlert }} />
      </div>
    </>
  );
}

export default App;
