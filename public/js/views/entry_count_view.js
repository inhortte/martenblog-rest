var EntryCountView = Ember.View.extend({
  click: function(evt) {
    this.rerender();
  }

});

module.exports = EntryCountView;
