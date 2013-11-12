var TopicsController = Ember.ArrayController.extend({
  buttock: "Topics, vole",
  all_topics: function() {
    return this.store.find('topic');
  }.property('model', 'App.Topic.@each')
});

module.exports = TopicsController;
