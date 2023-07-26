const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const express = require('express')
const app = express()
const cors = require('cors')
const { controller } = require('./controller')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', controller.verify)

app.post('/login', controller.logIn)
app.post('/register', controller.register)

app.get('/name', controller.profile)

app.get('/name/myproducts', controller.myproducts)
app.put('/name/myproducts/update', controller.myproductupdate)
app.delete('/name/myproducts/delete', controller.myproductdelete)
app.post('/name/myproducts/add', controller.myproductadd)

app.get('/name/allproducts', controller.allproducts)
app.post('/name/allproducts/buy', controller.allproductbuy)
app.post('/name/allproducts/rent', controller.allproductrent)

app.get('/name/mystats', controller.mystats)

app.post('/api/data', (req, res) => {
  const jsonData = req.body
  console.log(jsonData)
  res.send(`Data received successfully`)
})

app.listen(1337, () => {
  console.log('Server running just fine')
})
