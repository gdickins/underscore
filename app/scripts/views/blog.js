import $ from 'jquery';
import Blog from '../models/blog';
import router from '../router';

function blogPost() {
  let $blogForm = $(`
    <form>
      <input type="text" id="titleInput" placeholder="Title">
      <input type="text" id="bodyInput" placeholder="Body">
      <input type="submit">
    </form>
  `);

  $blogForm.find('input[type="submit"]').on('click', function(evt) {
    evt.preventDefault();
    var post = new Blog({
      title: $('#titleInput').val(),
      body : $('#bodyInput').val()
    });
    post.save(null, {
      success: function() {
        router.navigate('blog', {trigger: true});
      }
    });
  });
  return $blogForm;
}

export default blogPost;
