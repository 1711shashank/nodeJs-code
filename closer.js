// closer
function outer() {
    var a = 10;
    function inner() {
        console.log(a);
    }
    return inner;
}

z = outer();

console.log(z);     // print the y()
z();               // we get the value of a although its not there inside the y()

//Advantage 
// Data Hiding
// Disadvantage 
// memory usage
function Counter() {
    var count = 0, a = 10;
    this.incrementFn = function () {
        count++;
        console.log(count, a);
    }
    this.decrementFn = function () {
        count--;
        console.log(count);
    }
}

var counter1 = new Counter();

counter1.incrementFn();
counter1.incrementFn();
counter1.decrementFn();
counter1.decrementFn();

