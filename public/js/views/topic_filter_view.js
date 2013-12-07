var TopicFilterView = Ember.View.extend({
  topicFiltersObserver: function() {
    var thiz = this;
    console.log('from view.... topicFilters has changed');
    thiz.rerender();
  }.observes('this.controller.topicFilters.[]')
  // topicFiltersBinding: 'controller.topicFilters'
});

module.exports = TopicFilterView;
