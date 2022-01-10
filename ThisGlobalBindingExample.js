// function foo(num) {
//     console.log("foo: " + num);
//     this.count++;
// }

// foo.count = 0;

// var i;
// for (i = 0; i < 5; i++) {
//     foo(i);
// }

// console.log(foo.count);

function foo(num) {
    console.log("foo: " + num);
    this.count++;
}

foo.count = 0;

var i;

function test() {
    for (i = 0; i < 5; i++) {
        foo(i);
    }
}

test();
console.log(foo.count);