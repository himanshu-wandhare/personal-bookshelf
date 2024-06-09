import "./App.css";

import HomePage from "./pages/HomePage";
import MyBookshelfPage from "./pages/MyBookshelf";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/my-bookshelf",
    element: <MyBookshelfPage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
