var App = require('./app');

App.Router.map(function() {
  this.resource('entries', {path: '/:pagina/entries', queryParams: ['t']});
  this.resource('entry', {path: '/entries/:entry_id'});
  this.resource('entry_count');
  this.resource('topic_filters');
});
