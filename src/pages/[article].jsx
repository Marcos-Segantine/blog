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

import SyntaxHighlighter from "react-syntax-highlighter";

export default function Article({ data }) {
  const codeString = ` 
  <h4>*</h4>
  <p>Seleciona todos os elementos de um container.</p>
    <div class="container-code" style=" margin: 2rem 0">
      <code translate="no">
        &#60;<span style="color: #ef5955">p</span
        >&#62;<span>Texto</span>&#60;/<span style="color: #ef5955">p</span>&#62;
        <br />
        <br />
        &#60;<span style="color: #ef5955">div</span>&nbsp;<span
          style="color: #d89844"
          >id</span
        >=<span style="color: #98c379">"id-name"</span>&#62;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;<span style="color: #ef5955">p</span
        >&#62;<span>Um elemento dentro de #id-name</span>&#60;/<span
          style="color: #ef5955"
          >p</span
        >&#62;
        <br />
        &#60;/<span style="color: #ef5955">div</span>&#62;
      </code>
    </div>

    <div class="container-code" style="margin: 2rem 0">
      <code translate="no">
        <span style="color: #ef5955">*</span
        >&nbsp;&nbsp;<span style="color: #f1d710">&#123;</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          >color:&nbsp;</span
        ><span style="color: #d89844">red</span>
        <br />
        <span style="color: #f1d710">&#125;</span>
        <br /><br />
        <span style="color: #d89844">#element</span>&nbsp;&nbsp;<span
          style="color: #ef5955"
          >*</span
        >&nbsp;&nbsp;<span style="color: #f1d710">&#123;</span><br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
          >border:&nbsp;</span
        ><span style="color: #d89844"
          >solid 2<span style="color: #ef5955">px&nbsp;</span>green</span
        >;
        <br />
        <span style="color: #f1d710">&#125;</span>
      </code>
    </div>

    <h4>id</h4>
    <p>Seleciona um elemento pelo seu <code translate="no">id</code>.</p>

    <div class="container-code" style=" margin: 2rem 0">
      <code translate="no">
        &#60;<span style="color: #ef5955">div</span>&nbsp;<span style="color: #d89844">id</span>=<span style="color: #98c379">"id-name"</span>&#62;<span>Div com um id</span>&#60;/<span style="color: #ef5955">div</span>&#62;
      </code>
    </div>
    <div class="container-code" style=" margin: 2rem 0">
      <code translate="no">
        <span style="color: #d89844">#id-name</span>&nbsp;&nbsp;<span style="color: #f1d710">&#123;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>color</span>:&nbsp;<span style="color: #ef5955">red</span>;
        <br>
        <span style="color: #f1d710">&#125;</span>
      </code>
    </div>

    <h4>class</h4>
    <p>Seleciona elemento(s) pela <code>class</code>.</p>
    <div class="container-code" style=" margin: 2rem 0">
      <code>
        &#60;<span style="color: #ef5955">p</span>&#62;<span style="color: #d89844">id</span>=<span style="color: #98c379">"class-name"</span><span>Div com uma class</span>
        &#60;/<span style="color: #ef5955">div</span>&#62;
      </code>
    </div>

    <div class="container-code" style=" margin: 2rem 0">
      <code>
        <span style="color: #d89844">.class-name</span>&nbsp;&nbsp;<span style="color: #f1d710">&#123;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>font-size:</span>&nbsp;<span style="color: #d89844">10</span><span style="color: #ef5955">px</span>;
        <br>
        <span style="color: #f1d710">&#125;</span>
      </code>
    </div>

    <h4>elemento</h4>
    <p>Seleciona um elemento pelo nome de sua <span translate="no">tag</span>.</p>
    <div class="container-code" style=" margin: 2rem 0">
      <code>
        &#60;<span style="color: #ef5955">a</span>&#62;<span>Tag a</span>&#60;/<span style="color: #ef5955">a</span>&#62;
        <br>
        &#60;<span style="color: #ef5955">p</span>&#62;<span>Tag p</span>&#60;/<span style="color: #ef5955">p</span>&#62;
        <br>
        &#60;<span style="color: #ef5955">button</span>&#62;<span>Tag button</span>&#60;/<span style="color: #ef5955">button</span>&#62;
      </code>
    </div>

    <div class="container-code" style=" margin: 2rem 0">
      <code>
      <span style="color: #ef5955">a</span>&nbsp;&nbsp;<span style="color: #f1d710">&#123;</span><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>text-decoration:</span>&nbsp;<span style="color: #d89844">none</span>;
      <br>
      <span style="color: #f1d710">&#125;</span>
      <br><br>
      <span style="color: #ef5955">p</span>&nbsp;&nbsp;<span style="color: #f1d710">&#123;</span><br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>color:</span>&nbsp;<span style="color: #d89844">red</span>;
      <br>
      <span style="color: #f1d710">&#125;</span>
      </code>
    </div>

    <h4>elemento elemento</h4>
    <p>Seleciona os filhos de um elemento.</p>
    <div class="container-code" style=" margin: 2rem 0">
      <code>
        &#60;<span style="color: #ef5955">div</span>&nbsp;<span style="color: #d89844">class</span>=<span style="color: #98c379">"class-name"</span>&#62;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;<span style="color: #ef5955">p</span>&nbsp;<span style="color: #d89844">class</span>=<span style="color: #98c379">"child"</span>&#62;<span>Tag com class =	&quot;child&quot;</span>&#60;/<span style="color: #ef5955">p</span>&#62;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;<span style="color: #ef5955">p</span>&nbsp;<span style="color: #d89844">class</span>=<span style="color: #98c379">"paragraf"</span>&#62;<span>Tag com class =	&quot;paragraf&quot;</span>&#60;/<span style="color: #ef5955">p</span>&#62;<br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#60;<span style="color: #ef5955">p</span>&nbsp;<span style="color: #d89844">id</span>=<span style="color: #98c379">"id-name"</span>&#62;<span>Tag com id =	&quot;id-name&quot;</span>&#60;/<span style="color: #ef5955">p</span>&#62;<br>
        &#60/<span style="color: #ef5955">div</span>&#62;
      </code>
    </div>
    

    <div class="container-code" style=" margin: 2rem 0">
      <code>
        <span style="color: #ef5955">div</span>&nbsp;&nbsp;<span style="color: #ef5955">p</span>&nbsp;&nbsp;<span style="color: #f1d710">&#123;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>color:</span>&nbsp;<span style="color: #d89844">blue</span>;<br>
        <span style="color: #f1d710">&#125;</span>
        <br><br>
        <span style="color: #d89844">.class-name</span>&nbsp;&nbsp;<span style="color: #d89844">.child</span>&nbsp;&nbsp;<span style="color: #f1d710">&#123;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>color:</span>&nbsp;<span style="color: #d89844">red</span>;
        <br>
        <span style="color: #f1d710">&#125;</span>
      </code>
    </div>

    <h4>elemento.class</h4>
    <p>Seleciona todos os elementos que tiverem uma determinada <code translate="no">class</code> ou <code translate="no">id</code>.</p>
    <div class="container-code" style=" margin: 2rem 0">
      <code>
        &#60;<span style="color: #ef5955">button</span>&#62;<span>Tag button</span>&#60;/<span style="color: #ef5955">button</span>&#62;<br>
        &#60;<span style="color: #ef5955">button</span>&nbsp;<span style="color: #d89844">class</span>=<span style="color: #98c379">"class-name"</span>&#62;<span>Tag button com class</span>&#60;/<span style="color: #ef5955">button</span>&#62;<br>
        &#60;<span style="color: #ef5955">button</span>&nbsp;<span style="color: #d89844">id</span>=<span style="color: #98c379">"id-name"</span>&#62;<span>Tag button com id</span>&#60;/<span style="color: #ef5955">button</span>&#62;<br>
      </code>
    </div>

    <div class="container-code" style=" margin: 2rem 0">
      <code>
        <span style="color: #ef5955">button</span><span style="color: #d89844">.class-name</span>&nbsp;&nbsp;<span style="color: #f1d710">&#123;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>background-color:</span>&nbsp;<span style="color: #d89844">transparent</span>;
        <br><br>
        <span style="color: #ef5955">button</span><span style="color: #d89844">#id-name</span>&nbsp;&nbsp;<span style="color: #f1d710">&#123;</span><br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>border:</span>&nbsp;<span style="color: #d89844">solid 1<span style="color: #ef5955">px</span>&nbsp;red</span>;<br>
        <span style="color: #f1d710">&#125;</span>
      </code>
    </div>
  `;
  const body = htmlReactParser(codeString);

  const date = data[0].createdAt.split("/").reverse().join("/");

  return (
    <div className={article.article}>
      <Head>
        <title>{data[0].title}</title>
      </Head>

      <div className={article.article__img}></div>

      <div className={article.article__content}>
        <div className={article.article__content__info}>
          <h2>{data[0].title}</h2>

          <Tags data={data[0].tags} />

          <span className={article.article__content__info__date}>{date}</span>
        </div>

        <div className={article.article__content__body}>{body}</div>
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
