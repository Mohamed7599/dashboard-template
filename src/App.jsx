import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./ErrorPages/NotFound";
import Layout from "./Layout/Layout";
import Analytics from './views/Analytics';
import Discover from './views/Discover';
import Sales from './views/Sales/Sales';
import Automotive from './views/Automotive';
import SmartHome from './views/SmartHome';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        { path: "analytics", element: <Analytics /> },
        { path: "discover", element: <Discover /> },
        { path: "sales", element: <Sales /> },
        { path: "automotive", element: <Automotive /> },
        { path: "smart-home", element: <SmartHome /> }
      ]

    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;