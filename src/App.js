import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <div className="container">
      <FontAwesomeIcon icon={faUser} />
      <Navbar />

      <Footer />
    </div>
  );
}
