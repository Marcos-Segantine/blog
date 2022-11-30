import averageArticle from "../css/module/articleHome.module.css";

import Link from "next/link";

export default function ArticleHome({ linkUrl, title }) {
  return (
    <div className={averageArticle.average_article}>
      <Link href={linkUrl}>
        <h5>{title}</h5>
      </Link>

      <Link href={linkUrl}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit fugit
          voluptatem saepe pariatur facilis assumenda reiciendis commodi sit
          tempore aliquid?
        </p>
      </Link>
    </div>
  );
}
