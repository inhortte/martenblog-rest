var TopicFilterView = Ember.View.extend({
  topicFiltersObserver: function() {
    console.log('from view.... topicFilters has changed');
    this.rerender();
  }.observes('this.controller.topicFilters.[]')
});

module.exports = TopicFilterView;
