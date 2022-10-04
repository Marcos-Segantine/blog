import footer from "../css/layout/footer.module.css";

import Image from "next/image";
import Link from "next/link";

import githubIcon from "../images/icons/github-icon.png";
import instagramIcon from "../images/icons/instagram-icon.png";
import linkedinIcon from "../images/icons/linkedin-icon.png";

export default function Footer() {
  return (
    <div className={footer.footer}>
      <section className={footer.networks}>
        <Link href="https://github.com/Marcos-Segantine">
          <a>
            <Image src={githubIcon} width={35} height={35} alt="" />
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/marcossegantine/">
          <a>
            <Image src={linkedinIcon} width={35} height={35} alt="" />
          </a>
        </Link>
        <Image src={instagramIcon} width={35} height={35} alt="" />
      </section>
    </div>
  );
}
