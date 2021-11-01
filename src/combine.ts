// setting up data types for union that is a variable having more than one data type
type Combinable = number | string;
// you can also create a type for object
type User = {name: string, dob: Combinable};

function combine(intput1: number | string, input2: number | string) {
  let result;

  if (typeof intput1 === "number" && typeof input2 === "number") {
    result = intput1 + input2;
  } else {
    result = intput1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 50);
console.log(combineAges);

const combineNames = combine("Sam ", "Oben");
console.log(combineNames);
