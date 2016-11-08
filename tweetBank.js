/*jshint esversion: 6 */

// Clone is analogous to Pass By Reference while DeepClone is analogous to Pass By Value.
//
// When you are cloning, just a pointer is being created to the already existing record/collection. Any changes that you do on Clone are applied on Original too and vice-versa (actually the record/collection is just 1 while the pointers are 2).
// In DeepClone, an exact replica of the record/collection is being created somewhere else in memory, changes to the deepClone or the original are independent of each other and would not reflect on the other.

const _ = require('lodash');

let data = [{name: 'Colin Jaffe', content: 'I love Fullstack!!!'}];

function add (name, content) {
  data.push({ name: name, content: content });
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  let fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  let fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  let awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}
console.log(data);
console.log(find({content: 'I love Fullstack!!!'}));
