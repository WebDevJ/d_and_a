// find vowels in a string 3 ways
// I will show the bigO notation on all of these soon.

 function vowels(string){
  var result = [];
  //split
  var split = string.split('');
  //find vowels
  split.forEach(el=>{

  if(el === "a" | el === "e" | el === "i" | el === "o" | el === "u"){
  
    result.push(el)
   }else{
  
   }
   
  })
    console.log(result,"result0")

  return result
}
//vowels("jaamees")


function vowels1(string){
  var result = [];
  //split
  var split = string.split('');
  //find vowels
  split.forEach(el=>{

  if(["a", "e", "i", "o", "u"].includes(el)){
  
    result.push(el)
   }else{
  
   }
   
  })
  console.log(result,"result1")
  return result
}
//vowels1("james")

//////////////
function vowels2(string){
  var result = [];
  //split
  var split = string.split('');
  //find vowels
  split.forEach(el=>{

  if(el.match(/[aeiou]/gmi)){
  
    result.push(el)
   }else{
  
   }
   
  })
    console.log(result,"result2")

  return result
}
//vowels2("jamesiou")

/*
vowels("jamesiou")

if("james".match(/[aeiou]/gmi)){
  var result = []
   if("james".match(/[aeiou]/gmi)){

   }
   return result;
}else{
  console.log("IDK")
}

*/

module.exports.getUser = () => {
    // Code here
}
const isVowel = (char) => ["a", "e", "i", "o", "u"].includes(char);

module.exports = {
   vowels,
   vowels1,
   vowels2,
   isVowel
}