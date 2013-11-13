var Topic = DS.Model.extend({
  topic: DS.attr('string'),
  entryCount: DS.attr('number'),
  entries: DS.hasMany('entry', {async: true})
});

module.exports = Topic;
