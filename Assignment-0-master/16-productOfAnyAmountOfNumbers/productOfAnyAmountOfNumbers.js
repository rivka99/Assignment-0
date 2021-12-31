function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let result = args[0]
  for(let i=1; i<args.length; i++){
    result *= args[i]
  }
  return result
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;