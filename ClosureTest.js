// function foo() {
//     var a = 2;

//     function bar(a) {
//         console.log(a);
//     }
//     return bar;
// }

// var baz = foo();
// baz(4);

// function foo() {
//     var a = 2;

//     function baz() {
//         console.log(a);
//     }
//     bar(baz);
// }

// function bar(fn) {
//     fn();
// }

// foo();

// var fn;

// function foo() {
//     var a = 2;

//     function baz() {
//         console.log(a);
//     }
//     fn = baz;
// }

// function bar() {
//     fn();
// }

// foo();
// bar();

// for (var i = 0; i < 5; i++) {
//     setTimeout(function timer() {
//         console.log(i)
//     }, i * 1000);
// }
// Only prints 5 for each iteration as it is being shared all call for setTimeout

// for (var i = 0; i < 5; i++) {
//     (function() {
//         setTimeout(function timer() {
//             console.log(i)
//         }, i * 1000);
//     })();
// }
// Still not works as Function expression will be still in the same scope

// for (var i = 0; i < 5; i++) {
//     (function() {
//         var j = i;
//         setTimeout(function timer() {
//             console.log(j)
//         }, j * 1000);
//     })();
// }
// So need to add another local variable to scope of inline function expression
// That way it will be separate for each iteration calls

// for (let i = 0; i < 5; i++) {
//     setTimeout(function timer() {
//         console.log(i)
//     }, i * 1000);
// }
// let allows to define variable for block scope even in closure also