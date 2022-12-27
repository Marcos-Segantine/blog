import article from "../css/module/mainArticles.module.css";

import Link from "next/link";

export function MainArticles({ linkUrl, title, meta }) {
  return (
    <div className={article.article}>
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
