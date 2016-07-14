import $ from 'jquery';
import Backbone from 'backbone';
import blogPost from './views/blog';
import personPost from './views/person';

const Router = Backbone.Router.extend({
  routes: {
    blog       : 'blogFunction',
    person     : 'personFunction',
    '*path'    : 'blogFunction'
  },
  blogFunction: function() {
    console.log('blog');
    var $blogForm = blogPost();
    $('.container').empty().append($blogForm);
    console.log($blogForm);
  },
  personFunction: function() {
    console.log('person');
    var $personForm = personPost();
    $('.container').empty().append($personForm);
    console.log($personForm);
  },
});

const router = new Router();

export default router;
