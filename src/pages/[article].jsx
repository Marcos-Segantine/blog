import Head from "next/head";
import Image from "next/image";
import Script from "next/script";

import article from "../css/layout/article.module.css";

import React from "react";

import htmlReactParser, { DOMNode } from "html-react-parser";

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
          <h2>Hosting - var, let e const</h2>

          <Tags data={data[0].tags} />

          <span className={article.article__content__info__date}>{date}</span>
        </div>

        <div className={article.article__content__body}>
          {/* {body} */}

          <p>
            Hoisting é o padrão do JavaScript de colocar ao topo do escopo
            variaveis declaradas com var e funções.
          </p>

          <br />
          <br />
          <p>EXEMPLO DE CODIGO DO HOINSTING COM VAR</p>
          <br />
          <br />

          <p>
            O código acima não gera nenhum erro por conta deste hointing, no
            momento da execução, a declaração da variavel é elevada ao topo e é
            inicializada com undefined.
          </p>
          <br />

          <p>
            Ao declarar uma variavel com var você pode declarar e atualizar ela
            novamente no mesmo escopo sem gerar um erro.
          </p>
          <br />

          <br />
          <br />
          <p>EXEMPLO DE CODIGO DO HOINSTING COM VAR</p>
          <br />
          <br />

          <p>
            Não podemos esquecer que o var tem escopo global(quando declarada
            fora de uma função) ou escopo de função(quando declarada dentro de
            uma função), e isso é importante pois a variavel sofre hointing em
            seu respectivo escopo.
          </p>

          <p>O seguinte código irá gerar um erro.</p>

          <br />
          <p>EXEMPLO DE CODIGO DO HOINSTING COM VAR</p>
          <br />

          <p>
            O erro é lançado porque o escopo da variavel é de função e não
            global. Variaveis declaradas dentro de uma função não são visiveis
            globalmente.
          </p>

          <h3>Diferença entre var, let e const</h3>
          <p>
            Let e const possui escopo de bloco, ou seja tudo que estiver dentro
            de {"{}"}. Ao contrario do var o let pode ser atualizado mas não
            declarado mais de uma vez, já o const deve ser inicializado ao
            declara-lo e não pode ser atualizado.
          </p>
          <br />

          <p>
            Declaraçoes feitas com let ou const so serão visiveis apenas dentro
            desse bloco em que elas foram criadas seja em uma função, if, for
            etc. Elas também sofrem hosting porém, ao contrario de var, não são
            inicializadas com undefined.
          </p>

          <br />
          <br />
          <p>EXEMPLO DE CODIGO DO HOINSTING COM VAR</p>
          <br />
          <br />

          <p>
            <strong>n
              Disso podemos ver que não é uma boa pratica usar o var pois ele
              abre portas para varios bugs, de preferencia use sempre o const e
              caso o valor tenha que ser atualizado use o let.
            </strong>
          </p>
          <br />

          <p>Confrira alguns exemplos para ver a diferença entre eles:</p>

          <br />
          <br />
          <p>EXEMPLO DE CODIGO DO HOINSTING COM VAR</p>
          <br />
          <br />
        </div>

        <Verse
          verse={data[0].verse}
          address={data[0].address_verse}
          link={data[0].verse_link}
        />
        <Sources sorces={data[0].sorces} address={data[0].address_sorces} />
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
