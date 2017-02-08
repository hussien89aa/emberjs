import DS from 'ember-data';

export default DS.Model.extend({
  first_name:DS.attr('string'),
    last_name:DS.attr('string'),
    date_request:DS.attr('date'),
orderItem:DS.hasMany('myorder-details')

});
