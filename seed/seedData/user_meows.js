const usersData = require('../users');
const meowsData = require('../meows');

exports.seed = function(knex, Promise) {
  return knex('meows').del()
    .then(() => {
      return knex('users').del();
    })
    .then(() => {
      return knex('users').insert(usersData);
    })
    .then(() => {
      let meowsPromises = [];
      meowsData.forEach((meow) => {
        let user = meow.user;
        meowsPromises.push(createMeow(knex, meow, user));
      });

      return Promise.all(meowsPromises);
    });
};

const createMeow = (knex, meow, user) => {
  return knex('users').where('handle', user).first()
  .then((userRecord) => {
    return knex('meows').insert({
      text: meow.text,
      created_at: meow.created_at,
      user_id: userRecord.id
    });
  });
};
