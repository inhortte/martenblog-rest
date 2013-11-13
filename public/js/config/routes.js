var App = require('./app');

App.Router.map(function() {
//  this.resource('entries', {path: '/entries'}, function() {
//    this.resource('entry', {path: '/:entry_id'});
//  });
  this.resource('entries');
  this.resource('entry', {path: '/entries/:entry_id'});
});
