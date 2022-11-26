import smallArticle from "../css/module/smallArticle.module.css";

import Link from "next/link";

export default function SmallArticle(props) {
  return (
    <div className={smallArticle.small_article}>
      <div className={smallArticle.small_article__img}>
        <div></div>
      </div>
      <Link href={`/${props.link}`}>
          <div className={smallArticle.small_article__contet}>
            <h3>{props.title}</h3>
            <div>
              <p>{props.subTitle}</p>
            </div>
          </div>
      </Link>
    </div>
  );
}
