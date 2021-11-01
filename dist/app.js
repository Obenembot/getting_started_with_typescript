"use strict";
function generateError(message, code) {
    throw { message: message, code: code };
}
try {
    var result_1 = generateError('An Error Occured', 501);
    console.log('Result', result_1);
}
catch (error) {
    console.log('error: ', error);
}
console.log('Done!');
//# sourceMappingURL=app.js.map