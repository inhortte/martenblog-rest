exports.find = function(req, res) {
  res.send([{topic: 'radiation'}, {topic: 'panentropy'}]);
};

exports.findOne = function(req, res) {
  res.send({id: req.params.id, topic: 'radiation'});
};
