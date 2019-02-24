let user, host, database, password;
if (process.env.NODE_ENV === "production") {
  user = "hpkszrcfbjhnft"

  host = "ec2-54-204-41-109.compute-1.amazonaws.com"

  database = "dd1pld5keve1c6"

  password = process.env.DB_PASSWORD
} else {
  user = "node_user"
  host = "localhost"
  database = "usersdb"
  password = "node_password"
}

module.exports = { user, host, database, password, port: 5432 }
