import { Link } from "react-router-dom";
import "../styles/navbar.css";

export default function Layout({ children }) {
  return (
    <nav className="navbar">
      <div className="navbar-container container">
        <input type="checkbox" name id />
       <Link to="/"> <h3 className="logo">Covid Tracker - India</h3></Link>
      </div>
    </nav>
  );
}
