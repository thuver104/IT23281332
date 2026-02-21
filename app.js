const fs = require('fs');

fs.readFile('file.txt', 'utf8', function (err, data) {
  if (err) throw err;
  console.log(data);
});
const myModule = require('./my-module.js');
console.log(myModule.myFunction());
const condition = true;

const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('Success!');
  } else {
    reject('Failure!');
  }
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.log(error));
