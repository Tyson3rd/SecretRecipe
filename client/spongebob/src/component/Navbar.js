import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <section className="nav-left" aria-label="logo">
        <h3 className="nav-item">
          <Link to="/home">The Krusty Krab</Link>
        </h3>
      </section>
      <section className="nav-right" aria-label="navigation tabs">
        <h5 className="nav-item">
          <Link to="/home">Home</Link>
        </h5>
        <h5 className="nav-item">
          <Link to="/about">About</Link>
        </h5>
        <h5 className="nav-item">
          <Link to="/menu">Menu</Link>
        </h5>
        <h5 className="nav-item">
          <Link to="/specials">Specials</Link>
        </h5>
        <h5 className="nav-item">
          <Link to="/events">Events</Link>
        </h5>
        <h5 className="nav-item">
          <Link to="/chefs">Chefs</Link>
        </h5>
        <h5 className="nav-item">
          <Link to="/gallery">Gallery</Link>
        </h5>
        <h5 className="nav-item">
          <Link to="/register">Register</Link>
        </h5>
        <h5 className="nav-item">
          <Link to="/login">Login</Link>
        </h5>
      </section>
    </nav>
  );
}
