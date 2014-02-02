var YmdRoute = Ember.Route.extend({
  model: function(params, queryParams) {
    // console.log('YmdRoute.model');
    return params;
  },
  setupController: function(controller, model) {
    // console.log('Ymd.setupController');
    controller.set('params', model);
  },
  renderTemplate: function() {
    // console.log('Ymd.renderTemplate');
    this.render('ymd', {outlet: 'entries'});
  }
});

module.exports = YmdRoute;
