const express = require('express')
const app = express(); 

app.use(express.json())

app.get('/hi', (req, res) => {
 res.send('Welcome to the home page')
})
app.listen(3000, () => {
 console.log("Server running just fine");
})


