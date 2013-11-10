var App = require('./app');

App.Router.map(function() {
  this.resource('rutabaga', {path: '/'}, function() {
  });
  this.resource('topics', {path: '/topics'});
});

App.RutabagaRoute = Ember.Route.extend({
//  model: function() {
//  }
});

App.RutabagaIndexRoute = Ember.Route.extend({
  model: function() {
//    return this.modelFor('entry');
    return this.store.find('entry');
  }
});

App.TopicsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('topic');
  }
});
