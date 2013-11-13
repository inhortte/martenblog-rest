var TopicsRoute = Ember.Route.extend({
  model: function() {
    console.log(JSON.stringify(App.Router.router.recognizer.names));
    return this.store.find('topic');
  }
});

module.exports = TopicsRoute;
