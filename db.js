const { Pool } = require("pg")
const db_config =require('./secrets/db_configuration')

const pool = new Pool(db_config)

// debug purposes:
// pool.query("SELECT * FROM users", (err, res) => {
//   if (err) return console.log(err)
//
//   console.log(res)
// })

module.exports = pool
