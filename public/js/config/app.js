// require other, dependencies here, ie:
// require('./vendor/moment');

require('../vendor/jquery');
require('../vendor/handlebars');
require('../vendor/ember');
require('../vendor/ember-data'); // delete if you don't want ember-data

var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});

App.ApplicationAdapter = DS.RESTAdapter.extend({
  find: function(store, type, id) {
    console.log('(find) type.typeKey: ' + type.typeKey);
    return this.ajax(this.buildURL(type.typeKey, id), 'GET');
  },
  findAll: function(store, type, sinceToken) {
    console.log('(findAll) type.typeKey: ' + type.typeKey);
    var query;
    if(sinceToken) { query = { since: sinceToken}; }
    var url;
    return this.ajax(this.buildURL(type.typeKey), 'GET', { data: query });
  },
  findQuery: function(store, type, query) {
    console.log('(findQuery) type.typeKey: ' + type.typeKey);
    console.log('(findQuery) query: ' + query.pagina);
    var url;
    if(type.typeKey === 'entry') {
      url = '/' + query.pagina + '/entries';
      console.log('find url: ' + url);
      return this.ajax(url, 'GET');
    } else {
      url = this.buildURL(type.typeKey);
      return this.ajax(url, 'GET', { data: query });
    }
  }
});

// App.Store = require('./store'); // delete if you don't want ember-data
Ember.Inflector.inflector.irregular('entry', 'entries');
Ember.Inflector.inflector.uncountable('entry_count');

module.exports = App;
