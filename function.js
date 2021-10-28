"use strict";
function add(input1, input2) {
    return input1 + input2;
}
function printData(input1) {
    console.log(input1);
}
var addFunction;
addFunction = add;
// addFunction = printData;
function subtract(input1, input2, cb) {
    var result = input1 + input2;
    cb(result);
    return result;
}
subtract(13, 45, function (result) {
    console.log('result: ', result);
});
