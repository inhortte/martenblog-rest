var EntriesRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('entry', {pagina: params.pagina});
  },
  renderTemplate: function() {
    this.render({outlet: 'rutabaga'});
  }
});

module.exports = EntriesRoute;
