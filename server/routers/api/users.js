const express = require('express');
const { User, Users } = require('../../models')
const router = express.Router();


router
  .route('')
  .get((req, res) => {
    Users.forge()
    .fetch()
    .then(function (collection) {
      res.json({error: false, data: collection.toJSON()});
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  })
  .post((req, res) => {
    const { firstName, lastName, handle } = req.body
    const data = { firstName, lastName, handle }
    return new User(data)
    .save()
    .then((user) => {
       res.status(200).json({ user });
    })
    .catch(err => {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  })

router
  .route('/:handle')
  .get((req, res) => {
    User.forge({handle: req.params.handle})
    .fetch()
    .then(function (user) {
      if (!user) {
        res.status(404).json({error: true, data: {}});
      }
      else {
        res.json({error: false, data: user.toJSON()});
      }
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  })
  .delete((req, res) => {
    User.forge({handle: req.params.handle})
    .fetch({require: true})
    .then(function (user) {
      user.destroy()
      .then(function () {
        res.json({error: true, data: {message: 'User successfully deleted'}});
      })
      .catch(function (err) {
        res.status(500).json({error: true, data: {message: err.message}});
      });
    })
  })



module.exports = router;