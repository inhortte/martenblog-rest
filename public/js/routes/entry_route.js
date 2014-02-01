var EntryRoute = Ember.Route.extend({
  model: function(params) {
    console.log('EntryRoute... params: ' + JSON.stringify(params));
    return this.store.find('entry', params.entry_id);
  },
  setupController: function(controller, model) {
    model.reload();
    controller.set('model', model);
  },
  renderTemplate: function() {
    console.log('EntryRoute.renderTemplate');
    this.render('entry', {outlet: 'entries'}); // , into: 'application'});
  }
});

module.exports = EntryRoute;
