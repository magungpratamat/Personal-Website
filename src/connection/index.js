const { Pool } = require("pg");

const dbPool = new Pool({
  user: "postgres",
  database: "personal_web",
  password: "Zyrant08",
  port: 5432,
});

module.exports = dbPool;

