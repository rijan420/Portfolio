import React from "react";
import { Routes, Route, Outlet , BrowserRouter} from "react-router-dom";

import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Project from "./Project.jsx";
import Contact from "./Contact.jsx";
import "./index.css";
import ScrollToTop from "./ScrolltoTop.jsx";

function Layout() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}

export default function App() {
  return (
<BrowserRouter>
<ScrollToTop/>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Route>
    </Routes>

</BrowserRouter>
  );
}