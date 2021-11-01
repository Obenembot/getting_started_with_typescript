
// When called it will cratched the app. so we need to wrapped it in a try catch
function generateError(message:string, code: number){
  throw {message: message, code: code}
}

try{
const result = generateError('An Error Occured', 501);

console.log('Result', result);
}catch(error){
  console.log('error: ', error);
}

console.log('Done!')

