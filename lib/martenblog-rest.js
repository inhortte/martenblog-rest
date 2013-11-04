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

app.get('/entries', entries.find);
app.get('/topics', topics.find);
app.get('/entries/:id', entries.findOne);
app.get('/topics/:id', topics.findOne);
app.get('/topics/:id/entries', topics.findEntriesByTopic);
app.get('/entries/:id/topics', entries.findTopicsByEntry);

app.listen(3000, function() {
  console.log("Thurking on port 3000 in an elegant mode, vole.");
});
