var Entry = DS.Model.extend({
  created_at: DS.attr('number'),
  subject: DS.attr('string'),
  truncated: DS.attr(),
  entry: DS.attr(),
  topicList: DS.attr('string'),
  topics: DS.hasMany('topic', {async: true}),
  nextEntry: DS.attr(),
  prevEntry: DS.attr()
});

module.exports = Entry;
