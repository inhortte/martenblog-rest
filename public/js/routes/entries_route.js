var EntriesRoute = Ember.Route.extend({
  model: function(params, queryParams) {
    return this.store.find('entry', {pagina: params.pagina, t: queryParams.t});
  },
  renderTemplate: function() {
    console.log('EntriesRoute::renderTemplate being called');
    var entryCountController = this.controllerFor('entry_count');
    entryCountController.set('hasChanged', !entryCountController.get('hasChanged'));
    this.render({outlet: 'entries'});
    this.render('entry_count', {outlet: 'entry_count', controller: entryCountController, into: 'entries'});
  }
});

module.exports = EntriesRoute;
