Ember.Handlebars.helper('formatDate', function(epochish) {
  return App.Moment(epochish).format('ddd, D MMM, YYYY HH.mm');
});
Ember.Handlebars.helper('formatDateAbbr', function(epochish) {
  return App.Moment(epochish).format('D MMM HH.mm');
});
Ember.Handlebars.helper('formatDay', function(epochish) {
  return App.Moment(epochish).format('D MMM');
});
