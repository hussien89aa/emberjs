import Ember from 'ember';

export default Ember.Component.extend({
 msg:'welcome into our system',
  actions: {
 
    contract: function() {
var orders = this.store.createRecord('myorder', {
  firstName: this.get('firstName'),
  lastName: this.get('lastname') 
});
orders.save();
   this.set('msg', 'saved'); 
    }
  }
});
