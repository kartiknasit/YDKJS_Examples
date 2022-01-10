// function foo() {
//     console.log(this.a);
// }

// var obj = {
//     a: 2,
//     foo: foo
// }

// var a = 5;
// obj.foo();
// Above examples is just works fine
// Because foo is called using context of obj which has a = 2
// So indirectly obj.foo() is treated as obj.a in console.log in function foo

// function foo() {
//     console.log(this.a);
// }

// var obj = {
//     a: 2,
//     foo: foo
// }

// var a = 5;
// var bar = obj.foo;
// bar();
// Print undefined instead of value as it is not able to bind a to bar() function call assuming it is not in the scope

function foo() {
    console.log(this.a);
}

function doFoo(fn) {
    fn();
}

var obj = {
    a: 2,
    foo: foo
}

var a = 5;

doFoo(obj.foo);