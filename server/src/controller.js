const controller = {
  verify: (req, res) => {
    console.log('hi')
    return res.send('Welcome to the home page')
  },
  userId: (req, res) => {
    console.log('/user')
    return res.send('What do you wish to buy today')
  },
}

module.exports.controller = controller;