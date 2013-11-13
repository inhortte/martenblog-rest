var App = require('./app');

App.Router.map(function() {
//  this.resource('entries', {path: '/entries'}, function() {
//    this.resource('entry', {path: '/:entry_id'});
//  });
  this.resource('entries', {path: '/:pagina/entries'});
  this.resource('entry', {path: '/entry/:entry_id'});
  this.resource('entry_count');
});
