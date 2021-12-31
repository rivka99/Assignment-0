function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let unionSet = new Set()
  for(let i=0; i<args.length; i++){
    let holdSet = args[i]
    for(let item of holdSet){
      if(!unionSet.has(item)){
        unionSet.add(item)
      }

    }
  }
  return unionSet
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;