const stack = [];

module.exports.addToStack = async (req, res, next) => {
  if(req.body.value){
    stack.push(req.body.value);
    res.status(200).send('Successfully added');
  } else {
    res.status(502).send('Please add value');
  }
}

module.exports.getFromStack = async (req, res, next) => {
  res.status(200).send(stack.pop());
}
