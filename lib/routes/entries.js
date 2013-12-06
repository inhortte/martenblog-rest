var db = require('mongojs')('mongodb://localhost:27017/martenblog', ['entry', 'topic']);
var us = require('underscore-node');
var async = require('async');
var showdown = require('showdown');
var converter = new showdown.converter();

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

exports.countEntries = function(req, res) {
  var pagina = req.query.pagina && parseInt(req.query.pagina) || 1;

  db.runCommand({count: 'entry'}, function(err, c) {
    /*
    var pages = [];
    var lp = (c.n % 11 > 0) ? Math.floor(c.n / 11) + 1 : Math.floor(c.n / 11);
    if(pagina > 1) {
      pages.push("<li><a href=\"/index.html#/" + (pagina - 1) + "/entries\">&laquo;</a></li>");
    }
    for(var i = 1; i <= lp; i++) {
      var ec_html;
      ec_html = "<li";
      if(i == pagina) {
        ec_html += " class=\"active disabled\"";
      }
      ec_html += "><a href=\"/index.html#/" + i + "/entries\">" + i + "</a></li>";
      pages.push({id: Math.floor(Math.random() * Math.pow(2, 24)), entryCount: ec_html});
    }
    if(pagina < lp) {
      pages.push("<li><a href=\"/index.html#/" + (pagina + 1) + "/entries\">&raquo;</a></li>");
    }
    res.send({entry_count: pages});
    console.log(c);
    res.send({entry_count: [{id: 49898, entryCount: c.n}]});
     */
    res.send({entry_count: [{id: 49898, entryCount: c.n, hasChanged: false}]});
  });
};

exports.find = function(req, res) {
  var pagina = req.params['pagina'] || 1;
  db.entry.find().sort({created_at: -1}).skip((pagina - 1) * 11).limit(11, function(err, es) {
    if(err) { throw err; }
    async.map(es, function(e, cb) {
      e['id'] = e['_id'];
      delete e['_id'];
      e['entry'] = converter.makeHtml(e['entry']);
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
};

exports.findOne = function(req, res) {
  db.entry.findOne({_id: parseInt(req.params.id)}, function(err, e) {
    if(err) { throw err; }
    e['id'] = e['_id'];
    delete e['_id'];
    e['entry'] = converter.makeHtml(e['entry']);
    ftbe(e['id'], function(ts) {
      async.map(ts, function(t, cb) {
        cb(null, t.topic);
      }, function(err, topicList) {
        e['topicList'] = topicList.join(", ");
        res.send({"entry": e, "topics": ts});
      });
    });
  });
};

exports.findTopicsByEntry = function(req, res) {
    ftbe(parseInt(req.params.id), function(ts) {
      res.send(ts);
    });
};
