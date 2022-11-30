import smallArticle from "../css/module/smallArticle.module.css";

import Link from "next/link";

export default function SmallArticle({ link, title, subTitle }) {
  return (
    <div className={smallArticle.small_article}>
      <div className={smallArticle.small_article__img}>
        <div></div>
      </div>
      <Link href={`/${link}`}>
          <div className={smallArticle.small_article__contet}>
            <h3>{title}</h3>
            <div>
              <p>{subTitle}</p>
            </div>
          </div>
      </Link>
    </div>
  );
}
