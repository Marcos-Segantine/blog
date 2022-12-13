import db from "./database/db";

export default async function getDataToHome(req, res) {
    const visits = 30
    const article = req.body

    db.query(
    `UPDATE articles SET visits=? WHERE articles_url=?`, [visits, article],
    (err, result) => {
      res.status(200).json(result);
    }
  );  
}
