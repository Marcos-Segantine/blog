import Head from "next/head";
import { useRouter } from "next/router";

import article from "../css/layout/article.module.css";

import React from "react";

import htmlReactParser from "html-react-parser";

import Sources from "../components/Sources";
import Verse from "../components/Verse";
import Tags from "../components/Tags";

export default function Article({ data }) {
  const body = htmlReactParser(data.body);
  const verse = htmlReactParser(data.verse);

  const date = data.createdAt.split("/").reverse().join("/");

  return (
    <div className={article.article}>
      <Head>
        <title>{data.title}</title>
      </Head>

      <div className={article.article__content}>
        <div className={article.article__content__info}>
          <h2>{data.title}</h2>

          <Tags data={data.tags} />

          <span className={article.article__content__info__date}>{date}</span>
        </div>

        <div className={article.article__content__body}>{body}</div>
        <Verse
          verse={verse}
          address={data.address_verse}
          link={data.verse_link}
        />
        <Sources sorces={data.sorces} address={data.address_sorces} />
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const result = await fetch(`https://www.segantine.dev/api/${params.article}`)
  const data = await result.json();

  const visits= data[0].visits

  await fetch(`https://www.segantine.dev/api/post/${visits}?article=${params.article}`)

  return {
    props: {
      data: data[0]
    },
  };
}
