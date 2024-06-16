import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="logo kasa" className="header-logo" />

      <nav className="header-navbar">
         <NavLink to="/" className={(link)=> (link.isActive ? "header-navbar--active": "header-navbar--item")}>
         Accueil
         </NavLink>

         <NavLink to="/about" className={(link)=> (link.isActive ? "header-navbar--active" : "header-navbar--item")}>
         À Propos
         </NavLink>


         
        </nav>
    </header>
  );
}

export default Header;
