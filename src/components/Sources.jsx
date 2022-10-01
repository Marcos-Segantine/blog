import Link from "next/link";

import sources from "../css/module/sources.module.css";

export default function Sources({ sorces, address }) {
  const sorcesArray = sorces.split(",");
  const sorcesAddress = String(address).split(" ")
  
  return (
    <div className={sources.sources}>
      <h4>Fontes</h4>
      <ul>
          {sorcesArray.map((data, index) => {
            return (
              <li key={index}>
                <Link href={sorcesAddress[index] ?? ''}>{data}</Link>  
              </li>
            )
          })}
      </ul>
    </div>
  );
}
