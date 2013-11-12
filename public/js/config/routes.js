var App = require('./app');

App.Router.map(function() {

  this.resource('entries', {path: '/entries'});
  this.resource('entry', {path: '/entries/:entry_id'});
});
