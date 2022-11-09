import averageArticle from "../css/module/articleHome.module.css";

import Link from "next/link";

export default function ArticleHome(props) {
  const date = props.createdAt.split("/").reverse().join("/");

  const tagsArray = props.tags.split(",");

  return (
    <div className={averageArticle.average_article}>
      <Link href={props.linkUrl}>
        <h5>{props.title}</h5>
      </Link>

      <Link href={props.linkUrl}>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit fugit
          voluptatem saepe pariatur facilis assumenda reiciendis commodi sit
          tempore aliquid?
        </p>
      </Link>
    </div>
  );
}
