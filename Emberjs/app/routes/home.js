import Ember from 'ember';
/*
var  items=[
{ info:'Burger', details:'Lorem ipsum dolor sit amet Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',urlimg:'images/burger.jpg'} ,
{ info:'Burger full', details:'it provide by test stuff,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',urlimg:'images/Fast-Food.jpg'} ,
{ info:'Frase', details:'Ut enim ad minim veniam, quis nostrud exercitation Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',urlimg:'images/fastfood-diet.jpg'} ,
{ info:'full order Rise', details:'it provide by test stuff,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',urlimg:'images/chiken.jpeg'} ,
{ info:'chiken', details:'Lorem ipsum dolor sit amet, Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',urlimg:'images/beef.jpeg'} ,
{ info:'Bezza', details:'it provide by test stuff,Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris',urlimg:'images/pica.jpg'} 
 ];*/

export default Ember.Route.extend({
 model(){
 	return $.getJSON('/food.json').then(data=>{
 	return data.items;	
 	});
    }
});


/*
 $.getJSON('URL').then(data => {
   
    })
*/
