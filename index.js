
//'use strict';
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
 

const fetch2 = require('node-fetch');
const fetch = require('fetch');

//var xhr = new XMLHttpRequest();

function getPromise(URL) {
  let promise = new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", URL);
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject("There is an Error!");
      }
    };
    req.send();
  }).catch((error) => console.log(error));
  return promise;
}

//https://pokeapi.co/api/v2/pokemon/1/
const ALL_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/1/';
const ALL_POKEMONS_URL2 = 'https://pokeapi.co/api/v2/pokemon?limit=50';

// We have discussed this function already!
let promise = getPromise(ALL_POKEMONS_URL);

const consumer = () => {

  // Fetch ( "https://pokeapi.co/API/v2/Pokemon/1") 
  // .then ( response => response.json ()) 
  // .then ( console.log );

    promise.then(
        (result) => {
            //console.log(JSON.parse(result).results[0].url); // Log the result of 50 Pokemons

            // console.log(JSON.stringify(result))

            console.log(JSON.parse(this.result.results))
        },
        (error) => {
            // As the URL is a valid one, this will not be called.
            console.log('We have encountered an Error!'); // Log an error
    }).catch((error) => console.log(error+" aahhhh"));

}

consumer(); // result

//JSON.parse(result).results[0].url;//


/*const promises = [];
for (let i = 1; i <= 2; i++) {
  const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
  promises.push(fetch(url).then(res => res.json()));
}
Promise.all(promises).then(results => {
  console.log(results);
});*/

