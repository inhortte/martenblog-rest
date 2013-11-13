var EntriesRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('entry', {pagina: params.pagina});
  }
});

module.exports = EntriesRoute;
