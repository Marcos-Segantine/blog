import db from "./database/db";

export default async function getDataToHome(req, res) {
    const {visits} = req.query
    const {article} = req.query

    db.query(
    `UPDATE articles SET visits=? WHERE articles_url=?`, [visits, article],
    (err, result) => {
      res.status(200).json(result);
    }
  );
}
