var EntryController = Ember.ObjectController.extend({
  nextEntryLink: function() {
                   var nextEntry = this.get('model.nextEntry');
                   return nextEntry ? "/#/entry/" + nextEntry.id : null;
  }.property('model.nextEntry'),
  prevEntryLink: function() {
                   var prevEntry = this.get('model.prevEntry');
                   return prevEntry ? "/#/entry/" + prevEntry.id : null;
  }.property('model.prevEntry')
});

module.exports = EntryController;
