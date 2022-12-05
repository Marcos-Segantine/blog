import db from "./database/db";

export default async function addVisitArticle(req, res) {
  const { article_url } = req.query

  db.query(
    `UPDATE articles SET visits=20 WHERE articles_url="hoisting-no-javascript-var-let-e-const";`,
    (err, result) => {
      result.status(200);
    }
  );
}
