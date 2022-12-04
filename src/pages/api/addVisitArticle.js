import db from "./database/db";

export default async function addVisitArticle(req, res) {
  db.query(
    `UPDATE articles SET visits=${2} WHERE id=2;`,
    (err, result) => {
      res.status(200).json(result);
    }
  );
}
