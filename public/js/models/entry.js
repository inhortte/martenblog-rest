var Entry = DS.Model.extend({
  created_at: DS.attr('number'),
  subject: DS.attr('string'),
  truncated: DS.attr(),
  entry: DS.attr(),
  topicList: DS.attr('string'),
  topics: DS.hasMany('topic', {async: true}),
  nextEntry: DS.attr(),
  prevEntry: DS.attr(),
  nextEntryLink: function() {
                   var nextEntry = this.get('nextEntry');
                   return nextEntry ? "/#/entry/" + nextEntry.id: null;
  }.property('nextEntry'),
  prevEntryLink: function() {
                   var prevEntry = this.get('prevEntry');
                   return prevEntry ? "/#/entry/" + prevEntry.id: null;
  }.property('prevEntry'),
  nextDayLink: function() {
                 var nextEntry = this.get('nextEntry');
                 if(nextEntry) {
                   var concubine = App.Moment(nextEntry.created_at);
                   return(concubine.format('/#/YYYY/M/D'));
                 } else {
                   return null;
                 }
  }.property('nextEntry'),
  prevDayLink: function() {
                 var prevEntry = this.get('prevEntry');
                 if(prevEntry) {
                   var concubine = App.Moment(prevEntry.created_at);
                   return(concubine.format('/#/YYYY/M/D'));
                 } else {
                   return null;
                 }

  }.property('prevEntry')
});

module.exports = Entry;
