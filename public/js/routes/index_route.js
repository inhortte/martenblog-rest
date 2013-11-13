var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('entries', 1);
  }
});

module.exports = IndexRoute;
