import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import header from "../css/layout/header.module.css";
import button from "../css/module/buttonMenuMobile.module.css";

import logo from "../images/DEV Segantine.png";
import closeIcon from "../images/icons/icon-close-menu-mobile.png";

export default function Header() {
  const [menuMobile, setMenuMobile] = useState(false);

  function buttonMobileMenu() {
    setMenuMobile(!menuMobile);

    const controlMenu = document.querySelector("#control-menu");
    const controlMenu__AriaLabel = controlMenu.getAttribute("aria-label");

    controlMenu__AriaLabel === "Fechar Menu"
      ? controlMenu.setAttribute("aria-label", "Abrir Menu")
      : controlMenu.setAttribute("aria-label", "Fechar Menu");
  }

  return (
    <header className={header.header}>
      <nav
        className={
          menuMobile ? header.header__nav_active : header.header__nav_inactive
        }
        role="navegation"
      >
        <ul role="menu">
          <li
            id="header__nav--btn--mobile"
            className={header.header__nav__btnInNav}
            onClick={buttonMobileMenu}
          >
            <Image src={closeIcon} alt="Icone para fechar o menu" />
          </li>
          <li onClick={buttonMobileMenu}>
            <Link href="/all-articles">Todos os Artigos</Link>
          </li>
          <li onClick={buttonMobileMenu}>
            <Link href="/about">Sobre</Link>
          </li>
          <li>
            <Link href="/">Portifolio</Link>
          </li>
        </ul>
      </nav>

      <button
        id="control-menu"
        className={button.header__nav__btn_mobile}
        aria-label="Abrir Menu"
        aria-haspopup="true"
        aria-controls="menu"
        onClick={buttonMobileMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div>
        <h1>
          <Link href="/">
            <a>
              <Image priority src={logo} alt="Logo" />
            </a>
          </Link>
        </h1>
      </div>
    </header>
  );
}
