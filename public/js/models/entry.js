var Entry = DS.Model.extend({
  created_at: DS.attr('number'),
  subject: DS.attr('string'),
  truncated: DS.attr(),
  entry: DS.attr()
});

Entry.FIXTURES = [
  {
    id: 1,
    created_at: 1204952400000,
    subject: 'Sumless configuration',
    subedit: false,
    truncated: true,
    entry: "I was just pondering lack of sleep and that sometimes you must make\nup for your downtime with uptime which dissolves, like salt does to\nwater, whatever downtime you have made. Though the saline permeates, it\ncan be driven away by other measures, such as piloting to the sea.\n\nThough I don't know if that is for me.\nI wonder how far the sea is right now.\nThe UK.\nHello, home.\n\nMy parents say that I only care about myself. But, actually, they care\nabout me caring about them, which is caring about themselves. It is\nselfish beyond anything I have ever experienced. They are enslaving\ntheir young. They are the infants now craving young to care for\nthem. It is a recipricol cycle.\n\nIt's gone.\n"
  }, {
    id: 2,
    created_at: 1358903820000,
    subject: 'Ill nightly leprosy',
    subedit: false,
    truncated: true,
    entry: "I pain myself at the moment, as people beg my pleasure. I am immaculate. I stand proud to be loved. Or at least wanted. Or at least questioned. Well, what is the difference, really?\r\n\r\nI encouraged Christián to create a blog. He will not because he craves immediate satisfaction. Oh... I know that I do, as well, but he is more adept at it and that is why it is easier for him to fail."
  }, {
    id: 3,
    created_at: 1135466700000,
    subject: 'Intermission',
    truncated: true,
    entry: "I have drunk so much green tea that I doubt very seriously if I could sleep even if I wished to do so.\r\n\r\nThings progress slowly in this lazy land. The days ooze lethargically from morning to night. They seem to echo each other, yet time still drags. Today was punctuated with one oddity. And a disturbing oddity it was. My parents took me out to the local cemetery to show me where my grandparents on my father's side are buried. Surely I have been there before, but the wash of bleakness the graveyard presented piqued no recognition. There was a nagging similarity, however, to the one in Pecos in which a certain Lee Tarver rots."
  }
];

module.exports = Entry;
