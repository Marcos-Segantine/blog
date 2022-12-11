import portfolio from "../css/module/portfolio.module.css";

import Image from "next/image";
import Link from "next/link";

import sigoLogo from '../assets/portifolio/SIGO-logo.svg'

export const Portfolio = () => {
  return (
    <div className={portfolio.portfolio}>
      <div className={portfolio.portfolio__text_about}>
        <h3 className={portfolio.portfolio__text_about__title}>
          Meu Portfolio
        </h3>
        <p className={portfolio.portfolio__text_about__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          aperiam provident, quasi a id recusandae!
        </p>
      </div>
      <div className={portfolio.portfolio__projects}>
        <ul>
            <li>
              <Image className={portfolio.portfolio__projects__img} src={sigoLogo}  />
              <Link className={portfolio.portfolio__projects__overlay} href="https://github.com/victorl1m/SIGO">
                <span>SIGO</span>
              </Link>
            </li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
            <li>&nbsp;</li>
        </ul>
      </div>
    </div>
  );
};
