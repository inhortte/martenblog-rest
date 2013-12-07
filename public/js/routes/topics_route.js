// Currently unused (see ApplicationRoute)

var TopicsRoute = Ember.Route.extend({
  /*
    model: function() {
    return this.store.find('topic');
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    console.log('TopicsRoute - controller set.');
  },
   */
  renderTemplate: function() {
    this.render({outlet: 'topics'});
  }
});

module.exports = TopicsRoute;
