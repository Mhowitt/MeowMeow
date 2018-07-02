const bookshelf =require('../../config/bookshelf')

const Post = bookshelf.Model.extend({
  tableName: 'posts',
  user: function() {
    return this.belongsTo('User');
  },
});

const Posts = bookshelf.Collection.extend({
  model: Post
});

module.exports = {
  Post,
  Posts
}
