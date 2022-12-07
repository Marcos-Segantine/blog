import db from "./database/db";

export default async function addVisitArticle(req, res) {
  const {Visit} = req.query

    db.query(
    "UPDATE articles SET visits=?;", [Visit],
    (err, result) => {
      res.status(200).json(result);
    }
  );
}
