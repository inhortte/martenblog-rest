var EntryRoute = Ember.Route.extend({
  setupController: function(controller, entry) {
    controller.set('model', entry);
  }
});

module.exports = EntryRoute;
