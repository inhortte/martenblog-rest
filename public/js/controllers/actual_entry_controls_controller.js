var ActualEntryControlsController = Ember.Controller.extend({
  needs: ['entry'],
  entry: function() {
           this.get('controllers.entry').get('model');
  }.property()
});

module.exports = ActualEntryControlsController;
