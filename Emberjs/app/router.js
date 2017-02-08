import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contact');
  this.route('home' );
  this.route('manage',{path: '/manage/:admin_id/:admin_name'} );
  this.route('order');
  this.route('page-not-found', { path: '/*wildcard' });
});



export default Router;
