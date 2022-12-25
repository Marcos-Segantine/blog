import db from "./database/db";

export default async function getDataToHome(req, res) {
  db.query(
    `SELECT id, title, tags, createdAt, visits, articles_url, resume FROM articles `,
    (err, result) => {
      res.status(200).json(result);
    }
  );
}
