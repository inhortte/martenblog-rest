/*
 * martenblog-rest
 * https://github.com/inhortte/martenblog_node
 *
 * Copyright (c) 2013 Bob Shelton
 * Licensed under the MIT license.
 */

'use strict';
var express = require("express");
var entries = require("./routes/entries");
var topics = require("./routes/topics");

var app = express();

app.configure(function() {
  app.use(app.router);
  console.log(__dirname);
  app.use(express.static(__dirname + '/../public'));
});

// app.get('/topics/entries', topics.findEntriesByTopics);
app.get('/:year/:month/:day', entries.ymd);
app.get('/rss', entries.rss);
app.get('/atom', entries.atom);
app.get('/events', entries.bicCalendarEvents)
app.get('/:pagina/entries', entries.find);
app.get('/topics', topics.find);
app.get('/entries/:id', entries.findOne);
app.get('/topics/:id', topics.findOne);
// app.get('/topics/:id/entries', topics.findEntriesByTopic);
app.get('/entries/:id/topics', entries.findTopicsByEntry);
app.get('/entry_count', entries.countEntries);

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log("Thurking on port " + port + " in an elegant mode, vole.");
});
