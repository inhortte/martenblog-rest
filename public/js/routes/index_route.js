var IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('entries');
  }
});

module.exports = IndexRoute;
