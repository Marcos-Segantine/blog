import Image from "next/image";
import Head from "next/head";

import allArticles from "../css/layout/allArticles.module.css";
import input from "../css/module/input.module.css";

import Article from '../components/ArticleHome'
import Categories from "../components/Categories";

import searchIcon from "../images/icons/icon-search.png";
import arrowUp from '../images/icons/arrow-up.png';

import React, { useEffect, useState } from "react";

import programmerGif from '.././assets/Programmer.gif'

export default function AllArticles({ data }) {
  const [tag, setTag] = useState("");
  const [searchArticle, setSearchArticle] = useState("")

  const [btnBackToTop, setBtnBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      const scroll = window.scrollY;

      if (scroll > 1200) setBtnBackToTop(true);
      else setBtnBackToTop(false);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleInput = (e) => {
    setSearchArticle(e.target.value)
  }

  return (
    <>
      <div className={allArticles.all_articles}>
        <Head>
          <title>Todos os Artigos</title>
        </Head>

        <div className={allArticles.gif}>
          <Image src={programmerGif} priority loading="eager" />
        </div>

        <a id="back-to-top"></a>
        <div className={allArticles.all_articles__input}>
          <input
            className={input.header__input}
            type="text"
            placeholder="Procurar por artigo"
            onChange={handleInput}
          />
          <button>
            <Image
              src={searchIcon}
              alt="Icone para fazer uma pesquisa no site"
            />
          </button>
        </div>

        <div className={allArticles.articles}>
          {data.map((data) => {
            if (data.title.toLowerCase().includes(searchArticle.toLowerCase().trim()) || data.tags.toLowerCase().includes(searchArticle.toLowerCase().trim()) || tag === data.tags) {
              return (
                <Article
                  key={data.id}
                  linkUrl={data.articles_url}
                  title={data.title}
                  tags={data.tags}
                />
                );
              }
              else return 
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

