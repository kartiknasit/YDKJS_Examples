var foo = (function CoolModule(id) {
    function identify1() {
        console.log(id);
    }

    function identify2() {
        console.log(id.toUpperCase());
    }

    function change() {
        publicAPI.identify = identify2;
    }

    var publicAPI = {
        identify: identify1,
        change: change
    }
    return publicAPI;
})("foo module");

foo.identify();
foo.change();
foo.identify();