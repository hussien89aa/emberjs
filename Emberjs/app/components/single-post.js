import Ember from 'ember';
 
export default Ember.Component.extend({
 
  isExpanded: false,
 msg:'welcome into our system',
  actions: {
    expand: function() {
      this.set('isExpanded', true);
    },

    contract: function() {
      this.set('isExpanded', false);
       this.set('msg', this.get('firstName'));

    }
  }
	 
});
