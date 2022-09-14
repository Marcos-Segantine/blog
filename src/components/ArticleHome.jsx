import averageArticle from "../css/module/articleHome.module.css";
import tagStyle from "../css/module/tags.module.css";

import Link from "next/link";
import Image from "next/image";

import imgTest from "../images/img-test.jpg";

export default function ArticleHome(props) {
  const date = props.createdAt.split("/").reverse().join("/");

  const tagsArray = props.tags.split(",");

  return (
    <div
      className={
        props.isBigger
          ? averageArticle.bigger_article
          : averageArticle.average_article
      }
    >
      <Link href={props.linkUrl}>
        <a>
          <Image src={imgTest} layout="responsive" height={2800} />
        </a>
      </Link>

      <div className={tagStyle.article__info__tag}>
        {tagsArray.map((data, index) => {
          return <span key={index}>{data}</span>;
        })}

        {/* <span>HTML</span> */}
      </div>

      <div>
        <Link href={props.linkUrl}>
          <a>
            <h5>{props.title}</h5>
          </a>
        </Link>
      </div>

      <div className={averageArticle.article__date_author}>
        <span>{date}</span>
        <span>Marcos Segantine</span>
      </div>
    </div>
  );
}
