App.Topic = DS.Model.extend({
  topic: DS.attr('string')
});

App.Topic.FIXTURES = [
  {
    id: 1,
    topic: 'radiation'
  }, {
    id: 2,
    topic: 'malaria'
  }, {
    id: 3,
    topic: 'scabies'
  }, {
    id: 4,
    topic: 'fibrosis'
  }
];
