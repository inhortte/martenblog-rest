var TopicsController = Ember.ArrayController.extend({
  needs: ['topicFilter'],
  all_topics: function() {
    return this.store.find('topic');
  }.property('model', 'App.Topic.@each'),
  actions: {
    addTopicFilter: function(t) {
      App.__container__.lookup('controller:topicFilter').send('addTopicFilter', t);
    }
  }
});

module.exports = TopicsController;
