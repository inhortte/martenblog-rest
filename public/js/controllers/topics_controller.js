var TopicsController = Ember.ArrayController.extend({
  needs: ['topicFilter'],
  all_topics: function() {
    this.store.find('topic');
    return this.store.all('topic');
  }.property(),
  actions: {
    addTopicFilter: function(t) {
      this.get('controllers.topicFilter').send('addTopicFilter', t);
    }
  }
});

module.exports = TopicsController;
