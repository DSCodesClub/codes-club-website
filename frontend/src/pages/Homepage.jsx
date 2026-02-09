import Navbar from "../components/navbar";
// import About from "./homepagecomponents/About";
// import Contact from "./homepagecomponents/Contact";
// import Impact from "./homepagecomponents/Impact";
// import Pillars from "./homepagecomponents/Pillars";
import { Outlet } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Homepage;
