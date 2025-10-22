const pool = require("./pool");

async function addUser(email, username, password, animal) {
  await pool.query("INSERT INTO file_users (email, username, password, animal) VALUES ($1, $2, $3, $4) ", [email, username, password, animal]);
}

module.exports = {
  addUser,
};