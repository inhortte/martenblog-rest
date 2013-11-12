var TopicsRoute = Ember.Route.extend({
  /*
  setupController: function(controller, model) {
    console.log('TopicsRoute setupController function called...');
    controller.set('model', this.store.find('topic'));
  },
  renderTemplate: function(controller, context) {
    this._super(controller, context);
    this.render('topics');
  }
  */
  model: function() {
    console.log(JSON.stringify(App.Router.router.recognizer.names));
    return this.store.find('topic');
  }
});

module.exports = TopicsRoute;
