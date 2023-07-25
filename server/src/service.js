const { db } = require("./db_file")

const service = {
 createUser:async (userName, email, password) => {
  await db.user.create({
   data:{name:userName, email:email, password:password}
  })
 },
}
module.exports.service = service;