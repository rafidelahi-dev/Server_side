const express = require('express')
const app = express(); 
const cors = require('cors');
const { controller } = require('./controller');

app.use(cors({origin:['*'], credentials:true}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/', controller.verify)

app.get('/login', controller.userId )
app.get('/register', )

app.listen(1337, () => {
  console.log('Server running just fine')
})