var mongojs = require('mongojs');
var db;
if(process.env.MONGOLAB_URI) {
  console.log('using MONGOLAB_URI -> ' + process.env.MONGOLAB_URI);
  db = mongojs(process.env.MONGOLAB_URI, ['entry', 'topic']);
} else {
  db = mongojs('mongodb://localhost:27017/martenblog', ['entry', 'topic']);
}
var us = require('underscore-node');
var qs = require('querystring');
var async = require('async');
var marked = require('marked');
marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true
});
var renderer = new marked.Renderer();
renderer.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += ' class="img-rounded">';
  return out;
};
var Feed = require('feed');

// var showdown = require('showdown');
// var converter = new showdown.converter();

function ftbe(eid, cb) {
  db.entry.findOne({_id: eid}, function(err, e) {
    if(err) { throw err; }
    if(e) {
      async.map(e.topic_ids, function(tid, cb) {
        db.topic.findOne({_id: tid}, function(err, t) {
          if(err) { throw err; }
          t['id'] = t['_id'];
          delete t['_id'];
          cb(null, t);
        });
      }, function(err, ts) {
        if(err) { throw err; }
        ts.sort();
        cb(ts);
      });
    } else {
      cb([]);
    }
  });
}

function martenifyEntry(e, cb) {
}

function getEntries(eids, cb) {
  db.entry.find({$or: eids.map(function(eid) { return {_id: eid}; })}, function(err, es) {
    async.map(es, function(e, cb) {
      e['id'] = e['_id'];
      delete e['_id'];
//      e['entry'] = converter.makeHtml(e['entry']);
      e['entry'] = marked(e['entry'], {renderer: renderer});
      e['truncated'] = e['entry'].replace(/<[^>]+>/g, "").split(/\s+/).slice(0, 57).join(' ') + '...';
      async.map(e['topic_ids'], function(t_id, cb) {
        db.topic.findOne({_id: t_id}, function(err, t) {
          if(err) { throw err; }
          cb(null, t ? t.topic : 'unknown');
        });
      }, function(err, ts) {
        if(err) { throw err; }
        e['topicList'] = ts.join(", ");
        delete e['topic_ids'];
        cb(null, e);
      });
    }, function(err, es) {
      if(err) { throw err; }
      es.sort(function(a, b) { return b.created_at - a.created_at; });
      cb(es);
    });
  });
}

function findEntriesByTopics(req, res, pagina, query) {
  var tids = query.split(',').map(function(t) {
    return parseInt(t);
  }) || [];
  async.reduce(tids, [], function(eids, tid, cb) {
    db.topic.findOne({_id: tid}, function(err, t) {
      if(err) { throw err; }
      cb(null, us.union(eids, t.entry_ids));
    });
  }, function(err, eids) {
    if(err) { throw err; }
    getEntries(eids, function(es) {
      res.send({"entries": es.slice((pagina - 1) * 11, pagina * 11)});
    });
  });
};

exports.countEntries = function(req, res) {
  var ts = req.query['ts'];
  if(ts) {
    var ts_int = us.map(qs.unescape(ts).split(","), function(t) { return parseInt(t); });
    var entries = db.entry.find({}, {topic_ids: 1}, function(err, entries) {
      var es = us.filter(entries, function(e) {
        return us.some(ts_int, function(t) {
          var alli = us.contains(e.topic_ids, t);
          return alli;
        });
      });
      res.send({entry_count: [{id: 98989, entryCount: es.length}]});
    });
  } else {
    db.runCommand({count: 'entry'}, function(err, c) {
      res.send({entry_count: [{id: 49898, entryCount: c.n, hasChanged: false}]});
    });
  }
};

exports.find = function(req, res) {
  var pagina = req.params['pagina'] || 1;
  var ts = req.query.t;
  if(ts !== undefined && parseInt(ts) !== NaN && ts !== "true") {
    findEntriesByTopics(req, res, pagina, qs.unescape(ts));
  } else {
    db.entry.find().sort({created_at: -1}).skip((pagina - 1) * 11).limit(11, function(err, es) {
      if(err) { throw err; }
      async.map(es, function(e, cb) {
        e['id'] = e['_id'];
        delete e['_id'];
//        e['entry'] = converter.makeHtml(e['entry']);
        e['entry'] = marked(e['entry'], {renderer: renderer});
        e['truncated'] = e['entry'].replace(/<[^>]+>/g, "").split(/\s+/).slice(0, 57).join(' ') + '...';
        async.map(e['topic_ids'], function(t_id, cb) {
          db.topic.findOne({_id: t_id}, function(err, t) {
            if(err) { throw err; }
            cb(null, t ? t.topic : 'unknown');
          });
        }, function(err, ts) {
          if(err) { throw err; }
          e['topicList'] = ts.join(", ");
          delete e['topic_ids'];
          cb(null, e);
        });
      }, function(err, es) {
        res.send({"entries": es});
      });
    });
  }
};

exports.findOne = function(req, res) {
  db.entry.findOne({_id: parseInt(req.params.id)}, function(err, e) {
    if(err) { throw err; }
    e['id'] = e['_id'];
    delete e['_id'];
    e['entry'] = marked(e['entry'], {renderer: renderer});
    async.parallel({
      next_entry: function(cb) {
        db.entry.find({created_at: {$gt: e.created_at}}, {_id: 1, created_at: 1}).limit(1, function(err, next_entry) {
          if(err || next_entry.length === 0) {
            cb(null, null);
          } else {
            next_entry[0].id = next_entry[0]._id;
            delete next_entry[0]._id;
            cb(null, next_entry[0]);
          }
        });
      },
      prev_entry: function(cb) {
        db.entry.find({created_at: {$lt: e.created_at}}, {_id: 1, created_at: 1}).sort({created_at: -1}).limit(1, function(err, prev_entry) {
          if(err || prev_entry.length === 0) {
            cb(null, null);
          } else {
            prev_entry[0].id = prev_entry[0]._id;
            delete prev_entry[0]._id;
            cb(null, prev_entry[0]);
          }
        });
      }
    }, function(err, surrounding_entries) {
         if(err) { throw err; }
         e['nextEntry'] = surrounding_entries.next_entry;
         e['prevEntry'] = surrounding_entries.prev_entry;
         ftbe(e['id'], function(ts) {
           async.map(ts, function(t, cb) {
             cb(null, t.topic);
           }, function(err, topicList) {
                e['topicList'] = topicList.join(", ");
                res.send({"entry": e, "topics": ts});
              });
         });
       });
  });
};

exports.findTopicsByEntry = function(req, res) {
    ftbe(parseInt(req.params.id), function(ts) {
      res.send(ts);
    });
};

exports.rss = function(req, res) {
  var feed = new Feed({
    title:          'Martenblog',
    description:    'Los veinte entradas de Martenblog más recientes.',
    link:           'http://blog.thinklikeamink.net/rss',
    copyright:      'All rights reserved 2014, Bob Shelton',

    author: {
      name:       'Bob Shelton',
      email:      'inhortte@gmail.com',
      link:       'http://blog.thinklikeamink.net'
    }
  });
  db.entry.find().sort({created_at: -1}).limit(22, function(err, entries) {
    if(err) {
      console.log('Error getting entries for feed');
      res.send(404, 'eh?');
    }
    us.each(entries, function(e) {
      feed.addItem({
        title:          e.subject,
        description:    marked(e.entry, {renderer: renderer}),
        author: [
            {
              name:   'Bob Shelton',
              email:  'inhortte@gmail.com',
              link:   'http://blog.thinklikeamink.net'
            }
        ],
        date: new Date(e.created_at)
      });
    });
    res.send(200, feed.render('rss-2.0'));
  });
};

exports.atom = function(req,res) {
}
