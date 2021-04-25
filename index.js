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

myFunctions1.logUserData()
/*Results
{
  JSON response from promise
}
*/
//////////////////////////////////////////
