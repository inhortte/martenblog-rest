var db = require('mongojs')('mongodb://localhost:27017/martenblog', ['topic', 'entry']);
var us = require('underscore-node');
var async = require('async');

function febt(tid, cb) {
  db.topic.findOne({_id: tid}, function(err, t) {
    if(err) { throw err; }
    if(t) {
      async.map(t.entry_ids, function(eid, cb) {
        db.entry.findOne({_id: eid}, function(err, e) {
          if(err) { throw err; }
          e['id'] = e['_id'];
          e['topics'] = e['topic_ids'];
          delete e['_id'];
          delete e['topic_ids'];
          cb(null, e);
        });
      }, function(err, es) {
        if(err) { throw err; }
        es.sort(function(a, b) { return b.created_at - a.created_at });
        cb(es);
      });
    } else {
      cb([]);
    }
  });
};

exports.find = function(req, res) {
  db.topic.aggregate([{$unwind: "$entry_ids"}, {$group: {_id: {_id: "$_id", topic: "$topic"} , entryCount: {$sum: 1}}}, {$sort: {entryCount: -1}}], function(err, ts) {
    if(err) { throw err; }
    async.map(ts, function(t, cb) {
      if(err) { throw err; }
      cb(null, { id: t['_id']['_id'],
                 topic: t['_id']['topic'],
                 entryCount: t.entryCount });
    },function(err, ts) {
      res.send({"topics": ts});
    });
  });
};

exports.findOne = function(req, res) {
  db.topic.findOne({_id: parseInt(req.params.id)}, function(err, t) {
    if(err) { throw err; }
    t['id'] = t['_id'];
    t['entries'] = t['entry_ids'];
    delete t['_id'];
    delete t['entry_ids'];
    febt(t['id'], function(es) {
      res.send({"topic": t, "entries": es});
    });
  });
};

exports.findEntriesByTopic = function(req, res) {
  febt(parseInt(req.params.id), function(es) {
    res.send(es);
  });
};
