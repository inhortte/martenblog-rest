var TopicFilterController = Ember.ObjectController.extend({
  topicFilters: Ember.A(),
  actions: {
    addTopicFilter: function(t) {
      var topicFilters = this.get('topicFilters');
      if(!topicFilters.contains(t)) {
        topicFilters.pushObject(t);
      }
      console.log('topicFilters -> ' + JSON.stringify(this.topicFilters));
    },
    removeTopicFilter: function(t) {
      this.topicFilters.removeObject(t);
      console.log('topicFilters -> ' + JSON.stringify(this.topicFilters));
    }
  }
});

module.exports = TopicFilterController;
