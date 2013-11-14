Ember.Handlebars.helper('formatDate', function(epochish) {
  return App.Moment(epochish).format('ddd, D MMM, YYYY HH.mm');
});
