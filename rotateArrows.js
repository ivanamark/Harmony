/* This week’s question:
Given a string of brackets, return a rotation of those brackets that is balanced. The numbers of opening and closing brackets will always be equal, so [ or ][] won’t be given as inputs.

Example:
$ rotateBrackets(‘]][][[‘)
$ ‘[[]][]’ // First rotation yields ‘[]][][‘. Second one yields ‘[[]][]’. */
function rotateBrackets(str) {
    var result=[];
    var stri=[];
    var nuy=str.length-1;
    for(var i=0;i<str.length;i++){
       var element=str[i];
       stri.push(element);
       var last=str[nuy];
       
    }
    stri.pop();
    result.push(last);
    var f=result.concat(stri);
    var rotated='';
    for(var j=0;j<f.length;j++){
        rotated+=f[j];

    }
    console.log(rotated);
    return rotated;

    
}
rotateBrackets(']][][[');
rotateBrackets('[]][][');