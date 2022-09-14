import smallArticle from "../css/module/smallArticle.module.css";

import Link from "next/link";

export default function SmallArticle(props) {
  return (
    <div className={smallArticle.small_article}>
      <div className={smallArticle.small_article__img}>
        <div></div>
      </div>
      <Link href={`/${props.link}`}>
        <a>
          <div className={smallArticle.small_article__contet}>
            <h3>{props.title}</h3>
            <div>
              <p>{props.subTitle}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
