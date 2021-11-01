function add(input1: number, input2: number) {
    return input1 + input2;
  }
  
  function printData(input1: number) {
    console.log(input1);
  }
  
  let addFunction: (a: number, b: number) => number;
  
  addFunction = add;
  
  // addFunction = printData;
  
  function subtract(
    input1: number,
    input2: number,
    cb: (num: number) => void
  ): number {
    const result = input1 + input2;
    cb(result);
    return result;
  }
  
  subtract(13, 45, (result) => {
    console.log('result: ', result);
  });
  