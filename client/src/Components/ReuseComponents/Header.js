import React from 'react';
import '../../Styles/Header.css'; 
import Logo from "../../Images/Logo.png"

function Header() {
  return (
    <header className="header">
      <div className="logo_container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
    </header>
  );
}

export default Header;
