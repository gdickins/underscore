import $ from 'jquery';
import Person from '../models/person';
import router from '../router';

function personPost() {
  let $personForm = $(`
    <form>
      <input type="text" id="firstName" placeholder="First Name">
      <input type="text" id="lastName" placeholder="Last Name">
      <input type="text" id="address" placeholder="Address">
      <input type="text" id="phone" placeholder="Phone">
      <input type="submit">
    </form>
  `);

  $personForm.find('input[type="submit"]').on('click', function(evt) {
    evt.preventDefault();
    var person = new Person({
      firstName : $('#firstName').val(),
      lastName  : $('#lastName').val(),
      address   : $('#address').val(),
      phone     : $('#phone').val()
    });
    person.save(null, {
      success: function() {
        router.navigate('person', {trigger: true});
      }
    });
  });
  return $personForm;
}

export default personPost;
