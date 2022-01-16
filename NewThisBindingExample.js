function foo(a) {
    this.a = a;
}

var b = new foo(3);
console.log(b.a);