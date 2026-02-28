import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import NoteState from "./context/notes/NoteState.jsx";
import Alert from "./components/Alert.jsx";

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Alert message={"note added"} />
        <div className="container mt-3">
          <Outlet />
        </div>
      </NoteState>
    </>
  );
}

export default App;
