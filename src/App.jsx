// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./ErrorPages/NotFound";
import Layout from "./Layout/Layout";
import { routes } from './routes';
import React from 'react';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: routes
    }
  ]);

  return <RouterProvider router={router} />;
}
export default App;
