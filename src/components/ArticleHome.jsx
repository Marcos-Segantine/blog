import averageArticle from "../css/module/articleHome.module.css";

import Link from "next/link";

export default function ArticleHome({ linkUrl, title, meta }) {
  return (
    <div className={averageArticle.average_article}>
      <Link href={linkUrl}>
        <h5>{title}</h5>
      </Link>

      <Link href={linkUrl}>
        <p>
          {meta}
        </p>
      </Link>
    </div>
  );
}
