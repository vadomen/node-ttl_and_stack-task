const NodeTtl = require("node-ttl");
const ttl = new NodeTtl();

module.exports.addKeyValue = async (req, res, next) => {
  let key = req.body.key;
  let value = req.body.value;
  let ttl = req.body.ttl ? req.body.ttl : null;

  ttl.push(key, value, null, ttl);
}

module.exports.getKeyValue = async (req, res, next) => {
  let key = req.params.key;
  ttl.get(key);
}

module.exports.deleteKeyValue = async (req, res, next) => {
  let key = req.params.key;
  ttl.del(key);
}
