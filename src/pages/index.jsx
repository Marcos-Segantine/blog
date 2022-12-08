import Head from "next/head";

import { useState } from "react";

import homeMain from "../css/module/homeMain.module.css";

import Article from "../components/ArticleHome";
import { IntroHome } from "../components/IntroHome";
import { Portfolio } from "../components/Portfolio";
import { ArticlesLanguages } from "../components/ArticlesLanguages";

export default function Home({ data }) {
  const [mostSeen, setMostSeen] = useState(false)
  
  return (
    <>
      <Head>
        <title>Marcos Segantine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <IntroHome />

      <main className={homeMain.home__main}>
        <div className={homeMain.lineTop}></div>
        <div className={homeMain.home__main__filter}>
        </div>
        <div className={homeMain.home__main__articles}>

          {data.map((data) => {
            return (
              <Article
                key={data.id}
                id={data.id}
                linkUrl={data.articles_url}
                title={data.title}
              />
            );
          })}
        </div>
        
        <ArticlesLanguages data={data} />
        <Portfolio />
      </main>
    </>
  );
}

export async function getStaticProps() {
  // const res = await fetch("http://localhost:3000/api/getDataToHome");
  const res = await fetch("https://www.segantine.dev/api/getDataToHome");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
