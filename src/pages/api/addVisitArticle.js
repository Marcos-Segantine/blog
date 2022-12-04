import db from "./database/db";

export default async function addVisitArticle(req, res) {
  db.query(
    `UPDATE articles SET visits=${2} WHERE id=${parseInt(res[0].visits) + 1};`,
    (err, result) => {
      res.status(200).json(result);
    }
  );
}
