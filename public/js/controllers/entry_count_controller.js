var EntryCountController = Ember.ObjectController.extend({
  counts: function() {
    var re = /\#\/(\d+)\//;
    var res = re.exec(window.location.href);
    var promisearray = this.store.find('entry_count', { pagina: res[1] });
    return promisearray;
  }.property(),
  pending: function() {
    var pendings = [ 'Vacillating...', 'Ululating...', 'Oscillating...', 'Undulating...' ];
    return pendings[Math.floor(Math.random() * pendings.length)];
  }.property(),
  fulfilled: function() {
    console.log('am i fulfilled? ' + this.get('counts').get('isFulfilled'));
    var ecs = this.get('counts').map(function(ec) {
      return {id: ec.get('id'), entryCount: ec.get('entryCount'), hasChanged: ec.get('hasChanged')};
    });

    var re = /\#\/(\d+)\//;
    var res = re.exec(window.location.href);
    var pagina = parseInt(res[1]);
    var count = parseInt(ecs[0].entryCount);
    var pages = [];
    var lp = (count % 11 > 0) ? Math.floor(count / 11) + 1 : Math.floor(count / 11);
    if(pagina > 1) {
      pages.push("<li><a href=\"/index.html#/" + (pagina - 1) + "/entries\">&laquo;</a></li>");
    }
    for(var i = 1; i <= lp; i++) {
      var ec_html;
      ec_html = "<li";
      if(i == pagina) {
        ec_html += " class=\"active disabled\"";
      }
      ec_html += "><a href=\"/index.html#/" + i + "/entries\">" + i + "</a></li>";
      pages.push(ec_html);
    }
    if(pagina < lp) {
      pages.push("<li><a href=\"/index.html#/" + (pagina + 1) + "/entries\">&raquo;</a></li>");
    }

    return pages.join('');
  }.property(),
  actions: {
  }
});

module.exports = EntryCountController;
