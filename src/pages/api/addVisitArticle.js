import db from "./database/db";

export default async function getUrl(req, res) {
  db.query(
    `UPDATE articles SET visits=50 where id=5;`,
    (err, result) => {
      res.status(200).json(result);
    }
  );
}
