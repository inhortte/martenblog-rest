var EntryCountController = Ember.ObjectController.extend({
  counts: function() {
    var re = /\#\/(\d+)\//;
    var res = re.exec(window.location.href);
    return this.store.find('entry_count', { pagina: res[1] });
  }.property('model', 'App.EntryCount')
});

module.exports = EntryCountController;
