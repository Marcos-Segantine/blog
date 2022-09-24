import Head from "next/head";

import article from "../css/layout/article.module.css";

import React from "react";

import htmlReactParser from "html-react-parser";

import Sources from "../components/Sources";
import Verse from "../components/Verse";
import RelatedArticle from "../components/RelatedArticle";
import Tags from "../components/Tags";

export default function Article({ data }) {
  const body = htmlReactParser(data[0].body);

  const date = data[0].createdAt.split("/").reverse().join("/");

  return (
    <div className={article.article}>
      <Head>
        <title>{data[0].title}</title>
      </Head>

      <div className={article.article__img}></div>

      <div className={article.article__content}>
        <div className={article.article__content__info}>
          <h2>
            {/* {data[0].title} */}
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam molestiae cum, nulla, iure possimus eum enim voluptatum eaque voluptates perferendis quia sapiente dignissimos. Odit, consequatur ducimus rem veniam nesciunt quo.
          </h2>

          <Tags data={data[0].tags} />

          <span className={article.article__content__info__date}>{date}</span>
        </div>

        <div className={article.article__content__body}>
          {/* {body} */}
          
        </div>

        <Verse verse={data[0].verse} address={data[0].address_verse} />
        <Sources sorces={data[0].sorces} />
        {/* <RelatedArticle /> */}
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  // const res = await fetch("http://localhost:3000/api/getUrl");
  const res = await fetch("https://www.segantine.dev/api/getUrl");
  const data = await res.json();

  const paths = data.map((url) => ({
    params: { article: url.articles_url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // const result = await fetch(`http://localhost:3000/api/${params.article}`);
  const result = await fetch(`https://www.segantine.dev/api/${params.article}`);
  const data = await result.json();

  return {
    props: {
      data,
    },
  };
}
