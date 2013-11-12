// require other, dependencies here, ie:
// require('./vendor/moment');

require('../vendor/jquery');
require('../vendor/handlebars');
require('../vendor/ember');
require('../vendor/ember-data'); // delete if you don't want ember-data

var App = Ember.Application.create({
  LOG_TRANSITIONS: true
});
App.Store = require('./store'); // delete if you don't want ember-data
Ember.Inflector.inflector.irregular('entry', 'entries');

module.exports = App;
