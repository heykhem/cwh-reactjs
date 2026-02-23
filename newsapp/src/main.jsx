import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import App from "./App";
import News from "./components/News";
import NotFoundPage from "./components/NotFoundPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        exact
        index
        element={
          <News key="general" pageSize={6} country="us" category="general" />
        }
      />
      <Route
        exact
        path="business"
        element={
          <News key="business" pageSize={6} country="us" category="business" />
        }
      />
      <Route
        exact
        path="entertainment"
        element={
          <News
            key="entertainment"
            pageSize={6}
            country="us"
            category="entertainment"
          />
        }
      />
      <Route
        exact
        path="health"
        element={
          <News key="health" pageSize={6} country="us" category="health" />
        }
      />
      <Route
        exact
        path="science"
        element={
          <News key="science" pageSize={6} country="us" category="science" />
        }
      />
      <Route
        exact
        path="sports"
        element={
          <News key="sports" pageSize={6} country="us" category="sports" />
        }
      />
      <Route
        exact
        path="technology"
        element={
          <News
            key="technology"
            pageSize={6}
            country="us"
            category="technology"
          />
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Route>,
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
