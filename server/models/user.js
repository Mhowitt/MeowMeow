const bookshelf = require('../../config/bookshelf')
const Post = require('./post')

const User = bookshelf.Model.extend({
  tableName: 'users',
  hasTimestamps: false,
  posts: function () {
    return this.hasMany('Post');
  },

  verifyHandle: function(handle) {
    return this.get('handle') === handle;
  }
  }, {
  byHandle: function(handle) {
    return this.forge().query({where: { handle: handle }}).fetch();
  },

});

const Users = bookshelf.Collection.extend({
  model: User
});

module.exports = {
  User,
  Users
}