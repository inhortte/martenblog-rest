var Topic = DS.Model.extend({
  topic: DS.attr('string'),
  entryCount: DS.attr('number')
});

Topic.FIXTURES = [
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

module.exports = Topic;
