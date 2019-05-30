import DS from 'ember-data';
const {
  Model,
  attr
} = DS;

export default Model.extend({
  name: attr('string'),
  email: attr('string'),
  dogName: attr('string'),
  dogDescription: attr('string'),
  picRef: attr('string'),
  match: attr('boolean')
});
