"use strict";
function combine(intput1, input2) {
    var result;
    if (typeof intput1 === "number" && typeof input2 === "number") {
        result = intput1 + input2;
    }
    else {
        result = intput1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 50);
console.log(combineAges);
var combineNames = combine("Sam ", "Oben");
console.log(combineNames);
//# sourceMappingURL=combine.js.map