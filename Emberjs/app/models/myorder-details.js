import DS from 'ember-data';

export default DS.Model.extend({
  ordeItemDetails:DS.belongsTo('myorder'),
  itemName:DS.attr('string')
});
