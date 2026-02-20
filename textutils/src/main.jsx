import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import About from "./components/About.jsx";
import Home from "./Home.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route exact path="about" element={<About />} />
      </Route>
    </>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
