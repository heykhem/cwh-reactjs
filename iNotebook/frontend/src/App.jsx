import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import NoteState from "./context/notes/NoteState.jsx";

function App() {
  return (
    <>
      <NoteState>
        <Navbar />
        <div className="container mt-5">
          <Outlet />
        </div>
      </NoteState>
    </>
  );
}

export default App;
