import Logo from "../../assets/Logo.png";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="logo kasa" className="header-logo" />

      <nav className="header-navbar">
         <div>Accueil</div>
         <div>À Propos</div>

         
        </nav>
    </header>
  );
}

export default Header;
