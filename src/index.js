const myFunction = require('./functions.js');
const conFigure = require('./config.js');

const [min, max] = conFigure.minMaxArray;
const { myArray } = conFigure;
const { myString } = conFigure;
const { arrayOfStrings } = conFigure;
const [a, b] = conFigure.type;
console.log(myFunction.random(min, max));
console.log(myFunction.minIntegerFromArray(myArray));
console.log(myFunction.minIntegerFromString(myString));
console.log(myFunction.concatStringsByLength(arrayOfStrings, a));
console.log(myFunction.concatStringsByLength(arrayOfStrings, b));
