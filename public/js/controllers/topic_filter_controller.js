var TopicFilterController = Ember.Controller.extend({
  topicFilters: new Ember.Set(),
  areTopicFilters: function() {
    console.log('topicFilters.length -> ' + this.topicFilters.length);
    return this.topicFilters.length > 0;
  }.property(),
  getTopicFilters: function() {
    return this.store.findByIds('topic', this.topicFilters.toArray());
  }.property(),
  actions: {
    addTopicFilter: function(t) {
      this.topicFilters.add(parseInt(t));
      console.log('topicFilters -> ' + JSON.stringify(this.topicFilters));
    },
    removeTopicFilter: function(t) {
      this.topicFilters.remove(parseInt(t));
      console.log('topicFilters -> ' + JSON.stringify(this.topicFilters));
    }
  }
});

module.exports = TopicFilterController;
