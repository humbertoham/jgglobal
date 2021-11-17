import React, { useState } from "react";

import { Nav, Logo, Hamburger, Menu, MenuLink, LogoN } from "./Header.styles";

import JgGlobal from "../../images/jgglobal.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo href="/">
        <LogoN src={JgGlobal} />
      </Logo>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="/" className="primero">
          Inicio
        </MenuLink>
        <hr class="menu" />

        <MenuLink href="/empleados" className="segundo">
          Empleados
        </MenuLink>
        <hr class="menu" />
        <MenuLink href="/propuestadeinversion" className="tercero">
          Propuesta de inversión
        </MenuLink>
        <hr class="menu" />
      </Menu>
    </Nav>
  );
};

export default Header;
