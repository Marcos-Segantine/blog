import { useRouter } from "next/router";
import Link from "next/link";

import header from "../css/layout/header.module.css";

export default function Header() {
  const router = useRouter()

  console.log(router.pathname);

  return (
    <header className={header.header}>
      <nav>
        <ul role="menu">
          <li className={router.pathname === '/' ? header.pageSelectedLink : ''}>
            <Link href="/" >Home</Link>
          </li>
          <li className={router.pathname === '/all-articles' ? header.pageSelectedLink : ''}>
            <Link href="/all-articles">Artigos</Link>
          </li>
          <li className={router.pathname === '/about' ? header.pageSelectedLink : ''}>
            <Link href="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
