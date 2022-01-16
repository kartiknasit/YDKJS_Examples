var myObject = {
    get a() {
        return 2;
    }
}
myObject.a = 5;
console.log(myObject.a);

// We can define the getter just like getter in java
// But once it declared it will always returns same value even we changed