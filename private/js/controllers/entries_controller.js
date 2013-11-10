App.EntriesController = Ember.ArrayController.extend({
  expanded: function() {
    return this.filterBy('truncated', false).get('length');
  }.property('@each.truncated'),
  inflection: function() {
    var expanded = this.get('expanded');
    return expanded === 1 ? 'entry' : 'entries';
  }.property('expanded')
});

App.EntryController = Ember.ObjectController.extend({
  actions: {
    expand: function() {
      this.set('truncated', false);
    },
    contract: function() {
      this.set('truncated', true);
    },
    subedit: function() {
      this.set('subedit', !this.get('subedit'));
    },
    acceptChanges: function() {
      this.set('subedit', false);
      this.get('model').save();
    },
    expunge: function() {
      var entry = this.get('model');
      entry.deleteRecord();
      entry.save();
    }
  }
});
