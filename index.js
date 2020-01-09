function longSuffix(word){
  var firstString = "";
  
  if(word.slice(0,1) == "a" || word.slice(0,1) == "e" || word.slice(0,1) == "i" || word.slice(0,1) == "o" || word.slice(0,1) == "u"){
    
    firstString = "";
    
  } else{
    
    
      for(var j = 0; j <= word.length; j++){
          
        if(word.slice(j, j+1) == "a" || word.slice(j, j+1) == "e" || word.slice(j, j+1) == "i" || word.slice(j, j+1) == "o" || word.slice(j, j+1) == "u"){
          break;
        }
        
        firstString = firstString + word.slice(j, j+1);
        console.log(firstString);
      }
    
    // while(word.charAt(i) !== "a" || word.charAt(i) !== "e" || word.charAt(i) !=="i" || word.charAt(i) !== "o" || word.charAt(i) !== "u"){
    //   firstString = firstString + word.charAt(i);
    //   console.log("got here!");
    //   i++;
    // }
  }
  firstString = firstString + "ay";
  return firstString;
}

function longBody(word){
  var body = "";
  
  for(var j = 0; j <= word.length; j++){
          
    if(word.slice(j, j+1) == "a" || word.slice(j, j+1) == "e" || word.slice(j, j+1) == "i" || word.slice(j, j+1) == "o" || word.slice(j, j+1) == "u"){
          
      body = word.slice(j, word.length);
      break;
    }
  }
     
  return body; 
}

function pigLatinWord(word){
  var bodyWord = longBody(word);
  var suffixWord = longSuffix(word);
  var fullWord = bodyWord + suffixWord;
  // fullWord.slice(0, 1).value.toUpperCase();
  return fullWord;
}

function fullSentence(sentenceString){
  var numWords = sentenceString.split(" ");
  
  for(var i = 0; i < numWords.length; i++){
    numWords[i] = " " + pigLatinWord(numWords[i]);
  }
  
  
  // for(var i = 0; i<numWords.length; i++){
  //   var 
  // }
  return numWords.join(" ");
}

//works
// $("body").click(function(){
//   console.log("got here incorrectly");
//   let word = $("input").val();
//   var result = fullSentence(word);
//   $("#result").text(result);
// }); 

//Doesn't Work
$("#button").click(function(){
  console.log("got here incorrectly");
   let word = $("input").val();
   var result = fullSentence(word);
   $("#result").text(result);
}); 