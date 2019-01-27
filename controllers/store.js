const NodeTtl = require("node-ttl");
const ttl = new NodeTtl();

module.exports.addKeyValue = async (req, res, next) => {
  let key = req.body.key;
  let value = req.body.value;
  let ttlTime = req.body.ttl ? req.body.ttl : null;

  ttl.push(key, value, null, ttlTime);
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end('Successfully added');
}

module.exports.getKeyValue = async (req, res, next) => {
  let key = req.query.key;
  let result = ttl.get(key);
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end(result);
}

module.exports.deleteKeyValue = async (req, res, next) => {
  let key = req.params.key;
  ttl.del(key);
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end('Successfully deleted');
}
