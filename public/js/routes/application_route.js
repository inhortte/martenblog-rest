var ApplicationRoute = Ember.Route.extend({
  renderTemplate: function() {
    this._super();
    var topicsController = this.controllerFor('topics');
    var topicFilterController = this.controllerFor('topic_filter');
    this.render('topics', {outlet: 'topics', controller: topicsController, into: 'application'});
    this.render('topic_filter', {outlet: 'topic_filter', controller: topicFilterController, into: 'application'});
  },
  actions: {
    volver: function(tids) {
      console.log('volver -> ' + "__" + tids.join(',') + "__ yah " + JSON.stringify(tids));
      this.transitionTo('entries', 1, {queryParams: {t: tids.join(',')}});
    }
  }
});

module.exports = ApplicationRoute;
