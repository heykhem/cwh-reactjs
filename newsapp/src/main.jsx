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
import NewsWithContext from "./components/NewsWithContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        exact
        index
        element={
          <NewsWithContext
            key="general"
            pageSize={6}
            country="us"
            category="business"
          />
        }
      />
      <Route
        exact
        path="business"
        element={
          <NewsWithContext
            key="business"
            pageSize={6}
            country="us"
            category="business"
          />
        }
      />
      <Route
        exact
        path="entertainment"
        element={
          <NewsWithContext
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
          <NewsWithContext
            key="health"
            pageSize={6}
            country="us"
            category="health"
          />
        }
      />
      <Route
        exact
        path="science"
        element={
          <NewsWithContext
            key="science"
            pageSize={6}
            country="us"
            category="science"
          />
        }
      />
      <Route
        exact
        path="sports"
        element={
          <NewsWithContext
            key="sports"
            pageSize={6}
            country="us"
            category="sports"
          />
        }
      />
      <Route
        exact
        path="technology"
        element={
          <NewsWithContext
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
