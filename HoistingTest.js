// a = 2;
// console.log(a);
// above code works
// because compiler hoist the a = 2 statement as var a; a = 2;

// console.log(a);
// a = 2;
// above code not works because before console.log or any function invocation
// that uses a variable we need to define a
//  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