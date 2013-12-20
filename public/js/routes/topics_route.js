// unused

var TopicsRoute = Ember.Route.extend({
  model: function(params, queryParams) {

  },
  renderTemplate: function() {
    this.render({outlet: 'topics'});
  }
});

module.exports = TopicsRoute;
