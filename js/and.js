//1 inline comment

//This is an example of one line comment in js

//2 multiline comment

/* this is an example of multiline comment
in js
*/
//3 variable

// note NaN stands for Not a Number
// var c = document.getElementById("master-post");
// var b = document.querySelectorAll('h1');
// var y = hello();

//4 Constants
const H = 4;
const PI = 3.14;

//function expression
var hei = function () {
	return "hei daras";
};

var g = hei;

console.log(g);

//function statement
function hello() {
	return "hello daras";
}

//function expression
var sum = function () {
	var i, total = 0;
	for (i = 0; i < arguments.length; i += 1) {
		total += arguments[i];
	}
	return total;
};

//function expression
var looper = function (x,y) {
	if (x%5===0) { return; }
	console.log(x);
};

// IIFE (Immediately Invoked Function Expression)
(function callMe(){
	console.log("\nandriawan from callme func\n");
})();


// Exercise

var validateDataForAge = function(data) {
	person = data();
	console.log(person);
	if (person.age < 1 || person.age > 99) { return true; }
	else { return false; }
};

var errorHandleForAge = function (error) {
	console.log("Error while processing age");
};

var generateDataFromScientist = function () {
	return {name: "Andriawan", age: Math.floor(Math.random() * (100 - 1)) + 1,};
};

var generateDataForComposer = function() {
	return { name: "J S Bach",age : Math.floor(Math.random() * (100 - 1)) + 1,};
};

function parseReq(data, validateData, errorHandler) {
	var error = validateData(data);
	if (!error) { console.log("no errors");}
	else{ errorHandler();}
}

//parse

parseReq(generateDataFromScientist, validateDataForAge, errorHandleForAge);
parseReq(generateDataForComposer, validateDataForAge, errorHandleForAge);

// DOM Acessing

//global scope
var ax = 1;

function scopeTest(){
	var ax = 3;
	console.log(ax);
	function pug(){
		a = 5 + 3;
		console.log(typeof a);
	}
}

(function iife(){
	var a = 2;
	console.log(a);
	console.log("hero");
})();

scopeTest();
console.log(ax);
