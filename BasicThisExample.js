function identify() {
    return this.name.toUpperCase();
}

function speak() {
    var greeting = "Hello, i'm " + identify.call(this);
    console.log(greeting);
}

var me = {
    name: 'Kartik'
}

var you = {
    name: 'Stranger'
}

// identify.call(me);
// identify.call(you);

speak.call(me);
speak.call(you);