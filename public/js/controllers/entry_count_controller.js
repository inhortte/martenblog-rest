var EntryCountController = Ember.ObjectController.extend({
  counts: function() {
    var re = /\#\/(\d+)\//;
    var res = re.exec(window.location.href);
    var promisearray = this.store.find('entry_count', { pagina: res[1] });
    return promisearray;
  }.property(),
  actions: {
  }
});

module.exports = EntryCountController;
