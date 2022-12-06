import db from "./database/db";

export default async function addVisitArticle(req, res) {
  const { article } = req.query
  let { atualVisits } = req.query

    db.query(
    "UPDATE articles SET visits=20 where id=2;",
    (err, result) => {
      res.status(200).json(result);
    }
  );
}
