const { config } = require('dotenv')
config()

const env = {
  port: process.env.PORT || 1337,
}
module.exports.env = env
