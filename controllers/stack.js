const stack = [];

module.exports.addToStack = async (req, res, next) => {
  if(req.body.value){
    stack.push(req.body.value);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end('Successfully added');
  } else {
    res.writeHead(502, {"Content-Type": "text/plain"});
    res.end('Please add value');
  }
}

module.exports.getFromStack = async (req, res, next) => {
  res.writeHead(200, {"Content-Type": "text/plain"});
  res.end(stack.pop());
}
