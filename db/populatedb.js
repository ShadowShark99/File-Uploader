require('dotenv').config();
const {Client} = require("pg");

//NEED TO ADD NULL TYEP
const SQL=`
  CREATE TABLE IF NOT EXISTS file_users(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    email VARCHAR (255),
    password VARCHAR (255), 
    username VARCHAR (255),
    member BOOLEAN DEFAULT FALSE,
    animal VARCHAR (255),
    admin BOOLEAN NULL
  );

  CREATE TABLE IF NOT EXISTS files(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR (255),
    filename VARCHAR (255), 
    space INTEGER, 
    time DATE NOT NULL DEFAULT CURRENT_DATE
  );

  INSERT INTO file_users (email, username, password, member, admin)
  VALUES
    ('admin', 'admin', '67', TRUE, TRUE);
`;

async function main (){
  console.log("seeding...");
  const client = new Client({
    host: "localhost", // or wherever the db is hosted
    user: "kaden",
    database: "top_users",
    port: 5432 // The default port
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("finish");
}

main();