import carrosel from "../css/module/carrosel.module.css";

import Image from "next/image";

import leftArrow from "../images/icons/left-arrow.png";
import rightArrow from "../images/icons/right-arrow.png";

export default function Carrosel() {
  return (
    <div className={carrosel.carrosel}>
      <div className={carrosel.carrosel__banner}>
        {/* <Image src="" alt="" /> */}
        
      </div>
      <div className={carrosel.carrosel__controllers}>
        <Image src={leftArrow} alt="" />
        <Image src={rightArrow} alt="" />
      </div>
    </div>
  );
}
