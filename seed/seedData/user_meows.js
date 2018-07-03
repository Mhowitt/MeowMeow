const usersData = require('../users');
const postsData = require('../posts');

exports.seed = function(knex, Promise) {
  return knex('posts').del()
    .then(() => {
      return knex('users').del();
    })
    .then(() => {
      return knex('users').insert(usersData);
    })
    .then(() => {
      let postsPromises = [];
      postsData.forEach((post) => {
        let user = post.user;
        postsPromises.push(createPost(knex, post, user));
      });

      return Promise.all(postsPromises);
    });
};

const createPost = (knex, post, user) => {
  return knex('users').where('handle', user).first()
  .then((userRecord) => {
    return knex('posts').insert({
      text: post.text,
      created_at: post.created_at,
      user_id: userRecord.id
    });
  });
};
