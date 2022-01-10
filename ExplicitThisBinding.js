// function foo() {
//     console.log(this.a);
// }

// var obj = {
//     a: 5
// }

// var a = 10;

// foo.call(obj);
// In above example call is the prototype property which every 
// Function in javascript inherit like Object in java
// So when we use call this in function foo points to object we passed in call argument

// function foo() {
//     console.log(this.a);
// }

// var obj = {
//     a: 3
// }

// var a = 5;

// function bar() {
//     foo.call(obj);
// }

// var b = bar;
// b();
// As we can see from the above example
// Binding using Call access this property of object being passed in Call
// Even though variable is globally created and function called globally