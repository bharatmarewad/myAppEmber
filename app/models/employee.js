import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  middleName: DS.attr('string'),
  lastName: DS.attr('string'),
  emailAddress: DS.attr('string'),
  phoneNumber: DS.attr('string')
});
