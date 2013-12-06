var EntryCountView = Ember.View.extend({
  click: function(evt) {
  },
  needToRefresh: function() {
  }.observes('this.controller.hasChanged')
});

module.exports = EntryCountView;
