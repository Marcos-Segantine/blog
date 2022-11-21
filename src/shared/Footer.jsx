import footer from "../css/layout/footer.module.css";

import Image from "next/image";
import Link from "next/link";

import githubIcon from "../images/icons/github-icon.png";
import instagramIcon from "../images/icons/instagram-icon.png";
import linkedinIcon from "../images/icons/linkedin-icon.png";

export default function Footer() {
  return (
    <div className={footer.footer}>
      <address>
        <h5>Email</h5>
        <p>msegantine8@gmail.com</p>

        <h5>Celular</h5>
        <p>{"(34)"} 99679-2346</p>
      </address>

      <section className={footer.networks}>
        <Link href="https://github.com/Marcos-Segantine">
          <a>
            <Image src={githubIcon} width={45} height={45} alt="" />
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/marcossegantine/">
          <a>
            <Image src={linkedinIcon} width={45} height={45} alt="" />
          </a>
        </Link>
        <Link href="">
          <a>
            <Image src={instagramIcon} width={45} height={45} alt="" />
          </a>
        </Link>
      </section>
    </div>
  );
}
