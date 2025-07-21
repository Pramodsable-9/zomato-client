import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import "../Styles/Navbar.css";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">🍽️ Zomato Clone</Link>
      </div>
      
      <div className="search-box">
        <h2>
          When Hunger Strikes Zomato Arrives ...!!
        </h2>
      </div>

      <div className="nav-links">
        {user ? (
          <>
            <span className="username">👤 {user.name}</span>
            <button className="logout-btn" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-button">Login</Link>
            <Link to="/signup" className="nav-button signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
