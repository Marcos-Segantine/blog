import Link from "next/link";

import header from "../css/layout/header.module.css";

export default function Header() {
  return (
    <header className={header.header}>
      <nav>
        <ul role="menu">
          <li className={header.pageSelectedLink}>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all-articles">Todos os Artigos</Link>
          </li>
          <li>
            <Link href="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
