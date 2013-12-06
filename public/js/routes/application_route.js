var ApplicationRoute = Ember.Route.extend({
  renderTemplate: function() {
    this._super();
    var controller = this.controllerFor('topics');
    this.render('topics', {outlet: 'topics', controller: controller, into: 'application'});
  },
  actions: {
  }
});

module.exports = ApplicationRoute;
