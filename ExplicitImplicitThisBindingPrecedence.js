function foo() {
    console.log(this.a);
}

var obj1 = {
    a: 3,
    foo: foo
}

var obj2 = {
    a: 5,
    foo: foo
}

obj1.foo(); // 3
obj2.foo(); // 5

obj1.foo.call(obj2); // 5
obj2.foo.call(obj1); // 3

// So from above example we can see that explicit binding takes precedence over implicit binding