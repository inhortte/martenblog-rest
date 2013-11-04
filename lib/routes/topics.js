var db = require('mongojs')('mongodb://localhost:27017/martenblog', ['topic', 'entry']);
var us = require('underscore-node');
var async = require('async');

exports.find = function(req, res) {
  db.topic.aggregate([{$unwind: "$entry_ids"}, {$group: {_id: {_id: "$_id", topic: "$topic"} , entryCount: {$sum: 1}}}, {$sort: {entryCount: -1}}], function(err, ts) {
    us.each(ts, function(el, i, arr) {
      console.log(JSON.stringify(el._id.topic));
    });
    res.send(ts);
  });
};

exports.findOne = function(req, res) {
  db.topic.findOne({_id: parseInt(req.params.id)}, function(err, t) {
    console.log(JSON.stringify(t.topic))
    res.send(t);
  });
};

exports.findEntriesByTopic = function(req, res) {
  db.topic.findOne({_id: parseInt(req.params.id)}, function(err, t) {
    if(err) { throw err; }
    if(t) {
      async.map(t.entry_ids, function(eid, cb) {
        db.entry.findOne({_id: eid}, function(err, e) {
          if(err) { throw err; }
          cb(null, e);
        });
      }, function(err, es) {
        if(err) { throw err; }
        es.sort(function(a, b) { return b.created_at - a.created_at });
        res.send(es);
      });
    } else {
      res.send([]);
    }
  })
};
