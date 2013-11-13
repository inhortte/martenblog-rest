var EntryCountController = Ember.ObjectController.extend({
  counts: function() {
    return this.store.find('entry_count');
  }.property('model', 'App.EntryCount')
});

module.exports = EntryCountController;
