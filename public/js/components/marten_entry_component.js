var MartenEntryComponent = Ember.Component.extend({
  actions: {
    bloat: function() {
      this.toggleProperty('bloated');
    }
  }
});

module.exports = MartenEntryComponent;
