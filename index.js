const myFunctions0 = require('./vowels');
const myFunctions1 = require('./promise2');

myFunctions0.vowels("kjndflaf");
myFunctions0.vowels1("iueiuewkj");
myFunctions0.vowels2("mnsdmndyuyu");
console.log(myFunctions0.isVowel("a"))

/*Results
[ 'a' ] result0
[ 'i', 'u', 'e', 'i', 'u', 'e' ] result1
[ 'u', 'u' ] result2
true
*/
//////////////////////////////////////////
//PROMISE
//myFunctions1.logUserData()
/*Results
{
  JSON response from promise
}
*/


function countVowels(string){
  var result = [];
  //split
  var split = string.split('');
  //find vowels
  var obj = {}

  split.forEach(el=>{

    if(el.match(/[aeiou]/gmi)){
      if(obj.a === undefined ){
        obj.a = 1;
      }else if(obj.a != undefined){obj.a ++;}

      if(obj.e === undefined){
        obj.e = 1;
      }else if(obj.a != undefined){obj.a ++;}

    }
  })
    //console.log(result,"result2")
        console.log(obj,"result2")

  return obj
}

countVowels("james")


/////////
var voweler = function (str) {
  var strArr = str.toLowerCase().split('');
  var obj = {};
  strArr.forEach(function(el) {
    if ('aeiou'.indexOf(el) !== -1) {
      obj[el] = (obj[el] || 0 ) + 1;
    }
  });
  return obj;
}
console.log(voweler("This is a test"));
// Object {i: 2, a: 1, e: 1}
