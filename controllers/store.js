const NodeTtl = require("node-ttl");
const ttl = new NodeTtl();

module.exports.addKeyValue = async (req, res, next) => {
  let key = req.body.key;
  let value = req.body.value;
  let ttlTime = req.body.ttl ? req.body.ttl : null;
  if(key, value){
    ttl.push(key, value, null, ttlTime);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end('Successfully added');
  } else {
    res.writeHead(502, {"Content-Type": "text/plain"});
    res.end('Please add required fields');
  }
}

module.exports.getKeyValue = async (req, res, next) => {
  let key = req.query.key;
  if(key){
    let result = ttl.get(key);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end(result);
  } else {
    res.writeHead(502, {"Content-Type": "text/plain"});
    res.end('Please add required fields');
  }
}

module.exports.deleteKeyValue = async (req, res, next) => {
  let key = req.query.key;
  if(key){
    ttl.del(key);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end('Successfully deleted');
  } else {
    res.writeHead(502, {"Content-Type": "text/plain"});
    res.end('Please add required fields');
  }
}
