//FUNCTIONS:functions are set of statements wrapped inside the block that perform some actions or task

// 1.Normal function:functions without parameter

function greet() {
    console.log("Hello, how are you?");
}
greet()

// 2.parameter function:functions with parameter 

function add(x, y) {
    var result = x + y;
    console.log(result)
}
add(5, 6)
add(2, 7)

// 3.anonymous function:A function without name 
const greett = function () {
    console.log("hello")
}
greett()

// 4.return function 
function adding(x, y) {
    return x + y
}
console.log(adding(5, 6))

//5.arrow function:short way to write a function using the => arrow symbol

const sub = (x, y) => {
    console.log(x - y)
}
sub(5, 6)

const sqr = x => x * x
console.log(sqr(5))

const mul = (x, y) => {
    var res = x ** y
    console.log(res)
}
mul(2, 3)

//6.Callback function:A function passed as an argument to another function

function gret(name, callback) {
    console.log("hello" + name)
    callback()
}
function saybye() {
    console.log("bye")
}
gret("shiva", saybye)

//7.High-Order-Function:take another function as a parameter and return a function
function sayhello() {
    console.log("hello shiva kumar")
}
function greetuser(callback) {
    callback()
}
greetuser(sayhello)