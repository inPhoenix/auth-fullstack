const app = require("../app")
const chalk = require("chalk")
const log = console.log

const port = process.env.PORT || 5000

app.listen(port, () => log(chalk.blue(`listening on the port ${port}`)))
