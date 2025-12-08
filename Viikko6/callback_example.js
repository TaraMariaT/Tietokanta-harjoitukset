setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");

setTimeout(function() {
    console.log("Using an anonymous function as callback");
}, 2000);

console.log("Anonymous function example started");

setTimeout(() => {
    console.log("Using an arrow function as callback");
}, 2000);

console.log("Arrow function example started");