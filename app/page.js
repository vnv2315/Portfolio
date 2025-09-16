'use client'
import Navbar from "./components/Navbar";
import HomePage from "./components/Home.jsx";
import About from "./components/About";
import Project from "./components/Project";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>

      <Navbar/>
      <HomePage/>
      <About/>
      <Project/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  );
}
