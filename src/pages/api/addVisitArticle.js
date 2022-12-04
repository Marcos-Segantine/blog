import db from "./database/db";

export default async function addVisitArticle(req, res) {
  db.query(
    `SELECT visit FROM articles`,
    (err, result) => {
      if (err) return console.log(err, "ERRO");
      console.log(result, "<< VISITAS NUMERO");
      
      res.status(200).json(result);
    }
  );
}
