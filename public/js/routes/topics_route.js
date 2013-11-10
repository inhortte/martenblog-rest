var TopicsRoute = Ember.Route.extend({
  model: function() {
    console.log('TopicsRoute model function called...');
    return this.store.find('topic');
  }
});

module.exports = TopicsRoute;
