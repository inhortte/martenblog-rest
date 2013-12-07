var TopicFilterController = Ember.Controller.extend({
  topicFilters: Ember.A([ ]),
  areTopicFilters: function() {
    console.log('topicFilters.length -> ' + this.topicFilters.length);
    return this.topicFilters.length > 0;
  }.property(),
  getTopicFilters: function() {
    console.log('getTopicFilters....');
    return this.store.findByIds('topic', this.topicFilters);
  }.property(),
  actions: {
    addTopicFilter: function(t) {
      if(this.topicFilters.indexOf(parseInt(t)) == -1) {
        this.topicFilters.pushObject(parseInt(t));
      }
      // this.topicFilters.add(parseInt(t));
      console.log('topicFilters -> ' + JSON.stringify(this.topicFilters));
    },
    removeTopicFilter: function(t) {
      this.topicFilters.removeObject(parseInt(t));
      console.log('topicFilters -> ' + JSON.stringify(this.topicFilters));
    }
  }
});

module.exports = TopicFilterController;
