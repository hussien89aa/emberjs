import DS from 'ember-data';
 
export default DS.RESTAdapter.extend({
	host: 'http://localhost:3000' // node js server   http://localhost:3000/myorders
});
