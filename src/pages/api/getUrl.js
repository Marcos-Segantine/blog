import db from "./database/db";

export default async function getUrl(req, res) {
  db.query(
    `SELECT articles_url FROM articles `,
    (err, result) => {
      res.status(200).json(result);
    }
  );
}
