import Backbone from 'backbone';

const Blog = Backbone.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/gabeBlog',
});

export default Blog;
