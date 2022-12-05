import db from "./database/db";

export default async function addVisitArticle(req, res) {
    const { article } = req.query
    let { visits } = JSON.parse(req.query)

    db.query(
    `UPDATE articles SET visits=50 where articles_url="${article}";`,
    (err, result) => {
      res.status(200).json(result);
    }
  );
}
