import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Books from "./pages/Books.jsx";
import Register from "./pages/Register.jsx";
import User from "./pages/User.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

import "./index.css";
import TodoList from "./components/TodoList.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <TodoList /> },
      {
        path: "/Books",
        element: <Books />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/user",
        element: <User />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
