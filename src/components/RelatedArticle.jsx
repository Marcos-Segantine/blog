import relatedArticles from "../css/module/relatedArticle.module.css";

import AverageArticle from "../components/ArticleHome";

export default function RelatedArticle() {
  return (
    <div className={relatedArticles.related_articles}>
      <h4 className="h4">Artigos Relacionados</h4>
      <div className={relatedArticles.related_articles__articles}>
        <AverageArticle />
      </div>
    </div>  
  );
}
