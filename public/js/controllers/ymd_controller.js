var YmdController = Ember.ArrayController.extend({
  entries: [],
  getEntries: function() {
                var params = this.params;
                var that = this;
                return $.getJSON('/entries/' + params.year + '/' + params.month + '/' + params.day).then(function(response) {
                         that.set('entries', response.entries);
                         return response.entries;
                       });
              }.property('params'),
  nextDay: function() {
    var e = this.get('entries')[0];
    return(e && e.nextEntry);
  }.property('entries'),
  prevDay: function() {
    var e = this.get('entries')[0];
    return(e && e.prevEntry);
  }.property('entries'),
  nextDayLink: function() {
                 var e = this.get('entries')[0];
                 return(e && e.nextEntry && ("/#/entries/" + App.Moment(e.nextEntry.created_at).format('YYYY/M/D')));
               }.property('entries'),
  prevDayLink: function() {
                 var e = this.get('entries')[0];
                 return(e && e.prevEntry && ("/#/entries/" + App.Moment(e.prevEntry.created_at).format('YYYY/M/D')));
               }.property('entries')
});

module.exports = YmdController;
