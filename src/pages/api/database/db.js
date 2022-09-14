import mysql from "mysql2";

const db = mysql.createConnection(
  'mysql://g93q583fem5poynspy89:pscale_pw_trJ5ChxxxESlwKDW5Yg0XmvgepQbCEVIVI0KCIE9nVr@aws-sa-east-1.connect.psdb.cloud/blog?ssl={"rejectUnauthorized":true}'
);

export default db;
