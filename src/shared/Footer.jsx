import footer from "../css/layout/footer.module.css";

import Image from "next/image";

import githubIcon from "../images/icons/github-icon.png";
import instagramIcon from "../images/icons/instagram-icon.png";
import linkedinIcon from "../images/icons/linkedin-icon.png";

export default function Footer() {
  return (
    <div className={footer.footer}>
      <section className={footer.networks}>
        <Image src={githubIcon} width={35} height={35} alt="" />
        <Image src={linkedinIcon} width={35} height={35} alt="" />
        <Image src={instagramIcon} width={35} height={35} alt="" />
      </section>
    </div>
  );
}
