import Image from "next/image";
import Head from "next/head";

import allArticles from "../css/layout/allArticles.module.css";
import input from "../css/module/input.module.css";

import SmallArticle from "../components/SmallArticle";
import Categories from "../components/Categories";

import searchIcon from "../images/icons/icon-search.png";
import arrowUp from '../images/icons/arrow-up.png'

import React from "react";
import { useEffect, useRef, useState } from "react";

export default function AllArticles({ data }) {
  const [tag, setTag] = useState("");
  const [btnBackToTop, setBtnBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      const scroll = window.scrollY;

      if (scroll > 1200) setBtnBackToTop(true);
      else setBtnBackToTop(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={allArticles.all_articles}>
        <Head>
          <title>Todos os Artigos</title>
        </Head>

        <a id="back-to-top"></a>
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

      <a
        className={
          btnBackToTop
            ? allArticles.allArticles__btn_backToTop_display
            : allArticles.allArticles__btn_backToTop_display_none
        }
        href="#back-to-top"
      >
        <Image src={arrowUp} width={35} height={30} />
      </a>
    </>
  );
}

export async function getStaticProps() {
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

