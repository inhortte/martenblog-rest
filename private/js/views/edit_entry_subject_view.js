App.EditEntrySubjectView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

Ember.Handlebars.helper('edit-entry-subject', App.EditEntrySubjectView);
