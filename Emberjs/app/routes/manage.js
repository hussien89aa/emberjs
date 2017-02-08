import Ember from 'ember';

export default Ember.Route.extend({
	 /*
     model(params){
return(
 
//return({ id:params.admin_id,name:params.admin_name});
     }
  */
   model(){
 return this.store.findAll('myorder'); //Get /myorders
   }
});
