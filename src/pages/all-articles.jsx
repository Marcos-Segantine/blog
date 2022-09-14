  import Image from "next/image";
import Head from "next/head";

import allArticles from "../css/layout/allArticles.module.css";
import input from "../css/module/input.module.css";

import Carrosel from "../components/Carrosel";
import SmallArticle from "../components/SmallArticle";
import Categories from "../components/Categories";

import searchIcon from "../images/icons/icon-search.png";
import rightArrow from "../images/icons/right-arrow.png";
import leftArrow from "../images/icons/left-arrow.png";

import { useEffect, useState } from "react";

export default function AllArticles({ data }) {
  const [tag, setTag] = useState("");

  return (
    <>
      <div className={allArticles.all_articles}>
        <Head>
          <title>Todos os Artigos</title>
        </Head>

        <Carrosel />

        <div className={allArticles.all_articles__input}>
          <input
            className={input.header__input}
            type="text"
            placeholder="Procurar por artigo"
            onChange={(e) => {
              setTag(e.target.value.toLowerCase());
            }}
          />
          <button>
            <Image
              src={searchIcon}
              alt="Icone para fazer uma pesquisa no site"
            />
          </button>
        </div>

        <div className={allArticles.all_articles__smal_articles}>
          {data.map((data) => {
            if (
              data.tags.toLowerCase().includes(tag) ||
              data.title.toLowerCase().includes(tag)
            ) {
              return (
                <SmallArticle
                  key={data.id}
                  title={data.title}
                  subTitle={data.sub_title}
                  link={data.articles_url}
                />
              );
            }
          })}
        </div>
      </div>

      <Categories setTag={setTag} />
    </>
  );
}

export async function getServerSideProps() {
  // const res = await fetch("http://localhost:3000/api/getDataToAllArticlesPage");
  
  const res = await fetch(
    "https://www.segantine.dev/api/getDataToAllArticlesPage"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
