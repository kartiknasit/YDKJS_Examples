// function CoolModule() {
//     var a = "cool";
//     var b = ['1', '2', '3'];

//     function something() {
//         console.log(a);
//     }

//     function doSomething() {
//         console.log(b.join(';'));
//     }

//     return {
//         doSomething: doSomething,
//         something: something
//     }
// }

// var moduleTest = CoolModule();
// moduleTest.doSomething();
// moduleTest.something();

// Module Pattern using Immediately Invoked Function Expression
// var foo = (function CoolModule() {
//     var a = "a";
//     var b = "b";

//     function f1() {
//         console.log(a);
//     }

//     function f2() {
//         console.log(b);
//     }

//     return {
//         f1: f1,
//         f2: f2
//     }
// })();

// foo.f1();
// foo.f2();