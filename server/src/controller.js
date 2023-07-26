const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const controller = {
  //Home page route
  verify: (req, res) => {
    console.log('hi')
    return res.send('Welcome to the home page')
  },

  //register route
  register: async (req, res) => {
    console.log(req.body)
    try {
    const { username, email, password } = req.body;
    console.log(typeof price, typeof rentalPrice, typeof category);
    const userAdding = await prisma.product.create({
      data: {
        username, 
        email,
        password,
      },
    })
    
    res.send({
      name: userAdding.name,
      email: userAdding.email,
      password: userAdding.password,
    })
    
  //Making a mock test for username taken or not

    // if (register_json.email == `rafidelahi.dev@gmail.com`) {
    //   res.send('This name is already taken try something different')
    // } else if (register_json.password.length < 8) {
    //   res.send(`Password length is too short`)
    // } else
    //   res.send(
    //     `Congratulations! You are our newest member on Teebay. Welcome to the community`
    //   )
  }
  catch (error) {
    console.log(error);
    res.status(500).send('Failed to add the product.');
  }
},

//i want to add new products route
  myproductadd: async (req, res) => {
  console.log(req.body);
  try {
    const { name, price, rentalPrice, category } = req.body;
    console.log(typeof price, typeof rentalPrice, typeof category);
    const newPrice = parseInt(price)
    const newRentalPrice = parseInt(rentalPrice)
    const productAdding = await prisma.product.create({
      data: {
        name,
        price: newPrice,
        rentalPrice : newRentalPrice,
        category,
        image: "",
      },
    });

    res.send({
      name: productAdding.name,
      price: price,
      rentalPrice: rentalPrice,
      category: productAdding.category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send('Failed to add the product.');
  }
},

  //logIn route
  logIn: (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    //Assuming rafid11elahi@gmail.com and password is 12345678
    if (email == `rafid11elahi@gmail.com`) {
      password == `12345678`
        ? res.send('You can enter Your profile')
        : res.send('Your password was incorrect')
    } else {
      res.send(
        `The password is incorrect. If you are new to Teebay. Please Register First`
      )
    }
  },

  //my profile route
  profile: (req, res) => {
    res.send(`Your profile`)
  },

  //my products route
  myproducts: (req, res) => {
    res.send(`Products that you have uploaded so far`)
  },

  //i want to update my products route
  myproductupdate: (req, res) => {
    const update_json = req.body
    console.log(update_json)
    res.send(`Your product ........ info was updated`)
  },

  //i want to delete my products route
  myproductdelete: (req, res) => {
    const delete_json = req.body
    console.log(delete_json)
    res.send(`The product ........ was deleted`)
  },

  




//i want to see all the other products route
  allproducts: (req, res) => {
    res.send(`Showing all the products available to buy or rent`)
  },
    
 
  //i want to buy a products route
  allproductbuy: (req, res) => {
    res.send(`Your purchase was successful`)
  },

  //i want to rent a products route
  allproductrent: (req, res) => {
    res.send(`You rent was successful`)
  },

  //i want to see my stats route
  mystats: (req, res) => {
    res.send(`Your stats for the things you bought, borrowed, sold, rented`)
  },
}


module.exports.controller = controller
