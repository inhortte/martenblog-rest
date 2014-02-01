var RecenttracksController = Ember.ObjectController.extend({
  firstTrack: {},
  recentTracks: function() {
                  var that = this;
                  // console.log('RecenttracksController...');
                  return $.getJSON('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=inhortte&api_key=4d9d38032cb68351994d53a6622d5db7&format=json').then(function(response) {
                           // console.log('RecenttracksController, promise - then');
                           that.set('firstTrack', response.recenttracks.track[0]);;
                           return response.recenttracks.track[0];
                         });
  }.property(),
  fulfilled: function() {
               this.get('recentTracks');
               if(this.get('firstTrack').artist === undefined) {
                 var pendings = [ 'Vacillating...', 'Ululating...',
                                  'Oscillating...', 'Undulating...' ];
                 return pendings[Math.floor(Math.random() * pendings.length)];
               } else {
                 var track = this.get('firstTrack');
                 // console.log(track);
                 return {artist: track.artist['#text'],
                         name: track.name,
                         album: track.album['#text']};
//                 return(track.artist['#text'] + " - " +
//                        track.name + " - " + track.album['#text']);
               }
  }.property('firstTrack', 'recentTracks')
});

module.exports = RecenttracksController;
