import Ember from 'ember';

export default Ember.Route.extend({
	
     model(params){

return({ id:params.admin_id,name:params.admin_name});
     }
  
  
});
