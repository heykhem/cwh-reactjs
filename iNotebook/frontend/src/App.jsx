import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Alert from "./components/Alert.jsx";
import NoteState from "./context/notes/NoteState.jsx";

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
