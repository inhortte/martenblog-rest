var EntriesRoute = Ember.Route.extend({
  model: function(params, queryParams) {
    console.log('EntriesRoute model hook queryParams -> ' + JSON.stringify(queryParams.t));
    return this.store.find('entry', {pagina: params.pagina, queryParams: queryParams});
  },
  renderTemplate: function() {
    var entryCountController = this.controllerFor('entry_count');
    this.render({outlet: 'entries'});
    this.render('entry_count', {outlet: 'entry_count', controller: entryCountController, into: 'entries'});
  }
});

module.exports = EntriesRoute;
