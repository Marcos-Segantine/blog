import db from "./database/db";

export default async function getDataToHome(req, res) {
    const visits = 50

    db.query(
    `UPDATE articles SET visits=?`, [visits],
    (err, result) => {
      res.status(200).json(result);
    }
  );
}
