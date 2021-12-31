function titleCaseEdit(title) {
  // Insert code here;

  let holdTitle = ""
  holdTitle += title.charAt(0).toUpperCase()
  for(let i=1; i<title.length; i++){
    if(title.charAt(i)===' '){
      holdTitle += " " + title.charAt(i +1).toUpperCase()
      i++
    } else{
      holdTitle += title.charAt(i)
    }

  }
  return holdTitle
}

// Do not edit this line;
module.exports = titleCaseEdit;