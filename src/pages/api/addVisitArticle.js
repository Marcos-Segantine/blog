import db from "./database/db";

export default async function addVisitArticle(req, res) {
    const { article } = req.query

    const { visits } = req.query

    const visitsCount = db.query(
        `SELECT visits FROM articles where articles_url="${article}";`
        );

    db.query(
    `UPDATE articles SET visits=${visits + 1} where articles_url="${article}";`,
    (err, result) => {
      res.status(200).json(result);
    }
  );
}
