// by default, persist application data to localStorage.
// require('../vendor/localstorage_adapter');

/*
module.exports = DS.Store.extend({
  revision: 11,
  //adapter: DS.RESTAdapter.create()
  adapter: DS.LSAdapter.create()
});
*/

module.exports = DS.Store.extend({
  // adapter: DS.FixtureAdapter.create()
//  adapter: DS.RESTAdapter.create()
});
