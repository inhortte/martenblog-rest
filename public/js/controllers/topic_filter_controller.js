var TopicFilterController = Ember.ObjectController.extend({
  topicFilters: Ember.A(),
  actions: {
    addTopicFilter: function(t) {
      var topicFilters = this.get('topicFilters');
      if(!topicFilters.contains(t)) {
        topicFilters.pushObject(t);
      }
      var tids = this.topicFilters.map(function(t) { return parseInt(t.id); });
      this.get('target').send('volver', tids);
    },
    removeTopicFilter: function(t) {
      var topicFilters = this.get('topicFilters');
      topicFilters.removeObject(t);
      var tids = topicFilters.map(function(t) { return parseInt(t.id); });
      this.get('target').send('volver', tids);
    }
  }
});

module.exports = TopicFilterController;
