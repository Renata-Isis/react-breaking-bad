import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <nav style={{background: "#0E2317", paddingTop:"20px"}}>
        <NavLink to="/">Home</NavLink>
    </nav>
   
  )
}

export default NavBar;
