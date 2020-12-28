/* ou’re given a string of characters that are only 2s and 0s. 
Return the index of the first occurrence of “2020” without using the indexOf (or similar) function,
 and -1 if it’s not found in the string.

Example:
$ find2020(‘2220000202220020200’)
$ 14 */
function find20201(str1){
    var elem='2020';
    for(var x=0;x<str1.length;x++){ 
        var y= x+elem.length
    if(str1.substring(x,y) == elem){
        return x;
    }
    }
    return -1;
}
var result9=find20201('2220000202220020200')
console.log(result9)


function find2020(str){
    var myRegex=/2020/;
    if(myRegex.test(str)== false){
        return -1
    }
    var result1=str.match(myRegex);
    return result1.index;
    
    
}

var result=find2020('2220000202220020200')
console.log(result)
