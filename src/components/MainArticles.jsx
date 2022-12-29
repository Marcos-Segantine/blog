import article from "../css/module/mainArticles.module.css";

import Link from "next/link";

export function MainArticles({ linkUrl, title, meta }) {

  const text = meta.split('').length > 250 ? meta.split('').slice(0, 250).join('') + "..." : meta

  return (
    <div className={article.article}>
      <Link href={linkUrl}>
        <h5>{title}</h5>
      </Link>

      <Link href={linkUrl}>
        <p>
          {text}
        </p>
      </Link>
    </div>
  );
}
