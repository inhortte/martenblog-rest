var db = require('mongojs')('mongodb://localhost:27017/martenblog', ['entry', 'topic']);
var us = require('underscore-node');
var async = require('async');

exports.find = function(req, res) {
  var pagina = req.query['pagina'] || 1;
  db.entry.find().sort({created_at: -1}).skip((pagina - 1) * 11).limit(11, function(err, es) {
    if(err) { throw err; }
    us.each(es, function(el, i, arr) {
      console.log(JSON.stringify(el.subject));
    });
    res.send(es);
  });
};

exports.findOne = function(req, res) {
  db.entry.findOne({_id: parseInt(req.params.id)}, function(err, e) {
    if(err) { throw err; }
    console.log(JSON.stringify(e.subject));
    res.send(e);
  });
};

exports.findTopicsByEntry = function(req, res) {
  db.entry.findOne({_id: parseInt(req.params.id)}, function(err, e) {
    if(err) { throw err; }
    if(e) {
      async.map(e.topic_ids, function(tid, cb) {
        db.topic.findOne({_id: tid}, function(err, t) {
          if(err) { throw err; }
          cb(null, t);
        });
      }, function(err, ts) {
        if(err) { throw err; }
        ts.sort();
        res.send(ts);
      });
    } else {
      res.send([]);
    }
  });
};
