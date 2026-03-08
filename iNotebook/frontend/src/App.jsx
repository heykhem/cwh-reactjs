import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Alert from "./components/Alert.jsx";
import NoteState from "./context/notes/NoteState.jsx";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2200);
  };

  return (
    <>
      <NoteState showAlert={showAlert}>
        <Navbar />
        <Alert alert={alert} />
        <div className="container mt-3">
          <Outlet context={{ alert, showAlert }} />
        </div>
      </NoteState>
    </>
  );
}

export default App;
