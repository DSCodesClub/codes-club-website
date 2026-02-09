import { createBrowserRouter } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Home from "../homepagecomponents/Home";
import About from "../homepagecomponents/About";
import Pillars from "../homepagecomponents/Pillars";
import Impact from "../homepagecomponents/Impact";
import Contact from "../homepagecomponents/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      { index: true, element: <Home /> }, // "/"
      { path: "about", element: <About /> },
      { path: "pillars", element: <Pillars /> },
      { path: "impact", element: <Impact /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
