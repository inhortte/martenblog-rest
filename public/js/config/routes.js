var App = require('./app');

App.Router.map(function() {
  // this.resource('topics', {path: '/topics'}, function() {
  //  this.route('all');
  // });
  // this.resource('topics', {path: '/topics'});
  this.resource('entries', {path: '/entries'});
  this.resource('entry', {path: '/entries/:entry_id'});
});
