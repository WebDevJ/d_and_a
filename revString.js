//////////////////////////////////////////
//3 ways to reverse a string
var rev0 = (string)=>{
  return string.split("").reverse().join();
}
//console.log(rev0("james"))

var rev1 = (string)=>{
  var result = [];
  var split = string.split("")
  var rev = split.forEach(el=>{
    //result.push(el)
  })

  for(i= 0 ; i<string.length; i++ ){
    //console.log(string[i])
  }

  for(i= string.length-1 ; i>=0; i-- ){
    //console.log(string[i])
    result.push(string[i])
  }
  return result.join("");
}
console.log(rev1("james"))

var strArr = ["o"]
var o = "o"
var obj = {}
if(strArr[0] == o){
    if(obj.o === undefined)obj.o = 1;
    else obj.o ++;
}
    console.log(strArr[0])
    console.log(o)
    console.log(obj.o)
        console.log(obj)

// el.match(/[aeiou]/gmi)

/*if(["james"].match(/[aeiou]/gmi)){
    if(obj.o === undefined)obj.o = 1;
    else obj.o ++;
}*/
    console.log(strArr[0])
    console.log(o)
    console.log(obj.o)
        console.log(obj)