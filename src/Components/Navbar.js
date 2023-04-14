import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // const [dark, setDark] = useState({
  //   color: "white",
  //   backgroundColor: "black",
  // });
  // const darkMode = () => {
  //   if (dark.color == "white") {
  //     setDark({
  //       color: "dark",
  //       backgroundColor: "light",
  //     });
  //   }
  // };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark" >
        <Link className="navbar-brand" to="#" style={{color:"white"}}>
          Navbar
        </Link >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={{color:"white"}}>
                Home <span className="sr-only">(current)</span>
              </Link >
            </li>
            
            <li className="nav-item"><Link className="nav-link" to="/business" style={{color:"white"}}>Business</Link ></li>
            <li className="nav-item"><Link className="nav-link" to="/entertainment" style={{color:"white"}}>Entertainment</Link ></li>
            <li className="nav-item"><Link className="nav-link" to="/general" style={{color:"white"}}>General</Link ></li>
            <li className="nav-item"><Link className="nav-link" to="/health" style={{color:"white"}}>Health</Link ></li>
            <li className="nav-item"><Link className="nav-link" to="/science" style={{color:"white"}}>Science</Link ></li>
            <li className="nav-item"><Link className="nav-link" to="/sports" style={{color:"white"}}>Sports</Link ></li>
            <li className="nav-item"><Link className="nav-link" to="/technology" style={{color:"white"}}>Technology</Link ></li>
            
          </ul>
        </div>
        {/* <button onClick={darkMode}>Dark Mode</button> */}
      </nav>
    </div>
  );
}
