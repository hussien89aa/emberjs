import Ember from 'ember';
 
 var  branch=[{ name:'west avn', Address:'west baghdad'}
,
{ name:'east avn', Address:'east baghdad'}
,
{ name:'south avn', Address:'south baghdad'}
,
{ name:'south avn', Address:'south baghdad'}
 ];
 var  clients=[{ name:'hussein', Address:' baghdad'}
,
{ name:'ahmed', Address:'  baghdad'}
,
{ name:'jasim', Address:' baghdad'}
,
{ name:'mohammed', Address:' baghdad'}
 ]; 
export default Ember.Route.extend({
  //beforeModel() {
 //this.transitionTo('home');},

  model(){
 return Ember.RSVP.hash({
br:branch,
cl:clients 
 });
  }  
  
  // afterModel(model, transition) {} 

});
