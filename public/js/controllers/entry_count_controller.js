var EntryCountController = Ember.ObjectController.extend({
  counts: function() {
    var re = /\#\/(\d+)\//;
    var res = re.exec(window.location.href);
    var promisearray = this.store.find('entry_count', { pagina: res[1] });
    return promisearray;
    /*
    console.log('what am i? ' + promisearray);
    console.log('am i pending? ' + promisearray.get('isPending'));
    var promise = promisearray.get('promise');
    promisearray.then(function(ecs) {
      console.log('count load succeded... ' + JSON.stringify(ecs));
      return(ecs[0].get('entryCount'));
    }, function(err) {
      console.log('count load error... ' + JSON.stringify(err) + '... ' + err2);
      return(err);
    });
     */
  }.property('model', 'EntryCount')
});

module.exports = EntryCountController;
