import Backbone from 'backbone';

const Person = Backbone.Model.extend({
  urlRoot: 'https://tiny-za-server.herokuapp.com/collections/gabePerson',
});

export default Person;
