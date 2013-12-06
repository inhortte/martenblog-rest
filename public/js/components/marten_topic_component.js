var MartenTopicComponent = Ember.Component.extend({
  tagName: 'li',
  classNames: ['clear'],
  actions: {
    addTopicFilter: function(id) {
      console.log('um.... ' + this.controller);
    }
  }
});

module.exports = MartenTopicComponent;
