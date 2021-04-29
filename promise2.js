
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
async function getUserDataWithPromise() {
  var xhr = new XMLHttpRequest();
  return new Promise(function(resolve, reject) {
   xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        if (xhr.status >= 300) {
          reject("Error, status code = " + xhr.status)
        } else {
          resolve(xhr.responseText);
        }
      }
    }//https://pokeapi.co/api/v2/pokemon?limit=50
    //https://api.github.com/users/webdevj
    xhr.open('get', 'https://pokeapi.co/api/v2/pokemon?limit=50', true)
    xhr.send();
  });
}
 async function logUserData() {
  try {
    let user = await getUserDataWithPromise()
    console.log(user)
  } catch (err) {
    console.log(err)
  }
}
//logUserData()

module.exports = {
   logUserData
}