import Link from "next/link";

import verse from "../css/module/verse.module.css";

export default function Verse(props) {
  return (
    <div className={verse.verse}>
      <p>"{props.verse}"</p>
      <Link href={props.link}>{props.address}</Link>
    </div>
  );
}
