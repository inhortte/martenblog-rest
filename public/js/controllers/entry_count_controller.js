var EntryCountController = Ember.ObjectController.extend({
  hasChanged: false,
  counts: function() {
    var re_t = /t=([\d,\%C]+)$/;
    var res_t = re_t.exec(window.location.href);
    var params = {};
    if(res_t) {
      params['ts'] = res_t[1];
      console.log('EntryCountController res_t -> ' + JSON.stringify(params));
    }
    var promisearray = this.store.find('entry_count', params);
    return promisearray;
  }.property('hasChanged'),
  pending: function() {
    var pendings = [ 'Vacillating...', 'Ululating...', 'Oscillating...', 'Undulating...' ];
    return pendings[Math.floor(Math.random() * pendings.length)];
  }.property(),
  fulfilled: function() {
    var ecs = this.get('counts').map(function(ec) {
      return {id: ec.get('id'), entryCount: ec.get('entryCount'), hasChanged: ec.get('hasChanged')};
    });

    var re_t = /t=([\d,\%C]+)$/;
    var res_t = re_t.exec(window.location.href);
    var query = '';
    if(res_t) {
      console.log('there is a query!');
      query += '?t=' + res_t[1];
    }
    var re_pagina = /\#\/(\d+)\//;
    var res_pagina = re_pagina.exec(window.location.href);
    var pagina = parseInt(res_pagina[1]);
    var count = parseInt(ecs[0].entryCount);
    var pages = [];
    var lp = (count % 11 > 0) ? Math.floor(count / 11) + 1 : Math.floor(count / 11);
    if(pagina > 1) {
      pages.push("<li><a href=\"/index.html#/" + (pagina - 1) + "/entries" + query + "\">&laquo;</a></li>");
    }
    for(var i = 1; i <= lp; i++) {
      var ec_html;
      ec_html = "<li";
      if(i == pagina) {
        ec_html += " class=\"active disabled\"";
      }
      ec_html += "><a href=\"/index.html#/" + i + "/entries" + query + "\">" + i + "</a></li>";
      pages.push(ec_html);
    }
    if(pagina < lp) {
      pages.push("<li><a href=\"/index.html#/" + (pagina + 1) + "/entries" + query + "\">&raquo;</a></li>");
    }

    return pages.join('');
  }.property('counts'),
});

module.exports = EntryCountController;
