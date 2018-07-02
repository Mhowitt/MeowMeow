const express = require('express')
const router = express.Router();
const { User } = require('../../models')

router.route('').post((req, res) => {
  User.where( 'handle', req.body.handle )
  .fetch()
  .then((user) => {
    if(user) {
      res.status(200).send(user);
  } else {
    res.status(400).send('Invalid Handle');
  }
}).catch(error => res.status(401).send(`Error: ${error}`))
})

module.exports = router;