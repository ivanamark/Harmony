/* $ stringMultiply(“123”, “456”)
$ “56088” */
function stringMultiply(str1,str2) {
    const json = {a:str1, b:str2};
const obj = JSON.parse(str1 * str2);
    
    return obj + '';
}

console.log(stringMultiply('123','456'));
console.log(typeof(stringMultiply('123','456')));
