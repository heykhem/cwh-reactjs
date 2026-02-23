import { useState } from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Navbar />
      <LoadingBar color="#f11946" height={3} progress={progress} />
      <Outlet context={{ setProgress: setProgress }} />
    </>
  );
}

export default App;
