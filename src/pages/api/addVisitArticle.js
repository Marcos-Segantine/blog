import db from "./database/db";

export default async function addVisitArticle(req, res) {
  // const { article_url } = req.query

  db.query(
    `UPDATE articles SET visits=10 WHERE articles_url="hoisting-no-javascript-var-let-e-const";`
  
  );
}
