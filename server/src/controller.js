const controller = {
  verify: (req, res) => {
    console.log('hi')
    return res.send('Welcome to the home page')
  },
  register: (req, res) => {
    const register_json = req.body;
    console.log(register_json.username, register_json.password.length);
    //Making a mock test for username taken or not
    if (register_json.username === true && register_json.password.length >= 8) {
      res.send('This name is already taken try something different')
    } else {
      res.send('Congratulations! You are our newest member on Teebay. Welcome to the community')
    }
},
  logIn: (req, res) => {
    const login_json = req.body;
    console.log(login_json);
    res.send("We have recieved your login data")
  },
  profile: (req, res) => {
    res.send(`Your profile`)
  },
  myproducts: (req, res) => {
    res.send(`Products that you have uploaded so far`)
  },
  myproductupdate: (req, res) => {
    const update_json = req.body;
    console.log(update_json);
    res.send(`Your product ........ info was updated`)
  },
  myproductdelete: (req, res) => {
    const delete_json = req.body
    console.log(delete_json)
    res.send(`The product ........ was deleted`)
  },
  myproductadd: (req, res) => {
    const add_json = req.body;
    console.log(add_json);
    res.send(`New product ........ has been uploaded`)
  },
  allproducts: (req, res) => {

    res.send(`Showing all the products available to buy or rent`)
  },
  allproductbuy: (req, res) => {
    res.send(`Your purchase was successful`)
  },
  allproductrent: (req, res) => {
    res.send(`You rent was successful`)
  },
  mystats: (req, res) => {
    res.send(`Your stats for the things you bought, borrowed, sold, rented`)
  },
}

module.exports.controller = controller;