

let userInput: unknown;
let userName: string;

userInput = 'Sam';
// This will failed
// userName = userInput;

if(typeof userInput === 'string'){
  userName = userInput;
}