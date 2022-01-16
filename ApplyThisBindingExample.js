function foo(something) {
    console.log(this.a, something);
    return this.a + something;
}

function bar() {

}
bar(5);
foo();