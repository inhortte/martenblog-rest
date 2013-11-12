var MartenTopicComponent = Ember.Component.extend({
  tagName: 'li',
  classNames: ['clear'],
  actions: {
    showId: function() {
      this.toggleProperty('isShowingId');
    }
  }
});

module.exports = MartenTopicComponent;
