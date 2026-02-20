import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
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

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode is Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled", "success");
    }
  };

  const customMode = (color) => {
    if (color === "blue") {
      setMode("dark");
      document.body.style.backgroundColor = "#001d3d";
    } else if (color === "green") {
      setMode("dark");
      document.body.style.backgroundColor = "#003d0e";
    }
  };

  return (
    <div className="parent">
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        customMode={customMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm
          showAlert={showAlert}
          heading="Enter the text to analyze below"
          mode={mode}
        />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
