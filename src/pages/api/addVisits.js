import db from "./database/db";

export default async function getDataToHome(req, res) {
    const visits = JSON.parse(req.query.addVisits.visits)
    const article = JSON.parse(req.query.addVisits.article)

    db.query(
    `UPDATE articles SET visits=? WHERE articles_url=?`, [visits, article],
    (err, result) => {
      res.status(200).json(result);
    }
  );
}
