const express = require('express');
const router = express.Router();

const { Post, Posts } = require('../../models')



router
  .route('')
  .get((req, res) => {
    Posts.forge()
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
    Post.forge({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      handle: req.body.handle
    })
    .save()
    .then(function (post) {
      res.json({error: false, data: {id: post.get('id')}});
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  })

router
  .route('/:id')
  .get((req, res) => {
    Post.forge({id: req.params.id})
    .fetch()
    .then(function (post) {
      if (!post) {
        res.status(404).json({error: true, data: {}});
      }
      else {
        res.json({error: false, data: post.toJSON()});
      }
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
  })
  .delete((req, res) => {
    Post.forge({id: req.params.id})
    .fetch({require: true})
    .then(function (post) {
      post.destroy()
      .then(function () {
        res.json({error: true, data: {message: 'Post successfully deleted'}});
      })
      .catch(function (err) {
        res.status(500).json({error: true, data: {message: err.message}});
      });
    })
  })


module.exports = router;