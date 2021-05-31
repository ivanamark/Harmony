/* This week’s question:
Given a list, return a list of all its prefixes in ascending order of their length. You’re essentially implementing the inits function in Haskell!

Example:

$ inits([4, 3, 2, 1])
$ [[], [4], [4,3], [4,3,2], [4,3,2,1]]

$ inits([144])
$ [[], [144]] */
function inits(_array) {
    var result=[]; 
    var pre=[[]];
    for(var i=0;i<_array.length;i++){
    [result.push(_array[i])]
    pre.push([...result])
    }
console.log(pre);
return(pre);   
}
inits([4, 3, 2, 1])
inits([144])