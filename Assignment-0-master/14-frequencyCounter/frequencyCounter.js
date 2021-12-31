function frequencyCounter(word) {
  // Insert code here;
  let holdFreq = {}
  for(let i=0; i<word.length; i++){
    if(word[i] in holdFreq){
      holdFreq[word[i]] += 1
    } else{
      holdFreq[word[i]] = 1
    }
  }
  return holdFreq
}


// Do not edit this line;
module.exports = frequencyCounter;