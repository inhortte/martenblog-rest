var EntryCount = DS.Model.extend({
//  entryCount: DS.attr('string')
  entryCount: DS.attr('number'),
  hasChanged: DS.attr('boolean')
});

module.exports = EntryCount;
