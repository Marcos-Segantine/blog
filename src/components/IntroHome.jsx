import Image from "next/image";

import introHome from "../css/module/introHome.module.css";

import programmerHome from '../assets/programmer-home.svg'

export function IntroHome() {
  return (
    <div className={introHome.introHome}>
      <h1>Dev Segantine</h1>
        <Image className={introHome.intro_home__programmer} src={programmerHome} priority width={600} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil optio
          fugit vero est dicta qui doloremque quidem placeat eius expedita!
        </p>
    </div>
  );
}
