import Link from "next/link";

import verseStyle from "../css/module/verse.module.css";

export default function Verse({ verse, link, address }) {
  return (
    <div className={verseStyle.verse}>
      <p>&quot;{verse}&quot;</p>
      <Link href={link}>{address}</Link>
    </div>
  );
}
