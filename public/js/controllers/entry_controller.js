var EntryController = Ember.ObjectController.extend({
  nextEntryLink: function() {
                   return "/#/entry/" + this.get('model.nextEntry').id;
  }.property('model.nextEntry'),
  prevEntryLink: function() {
                   console.log('EntryController.prevEntryLink ... ' + this.get('model.prevEntry').id);
                   return "/#/entry/" + this.get('model.prevEntry').id;
  }.property('model.prevEntry')
});

module.exports = EntryController;
