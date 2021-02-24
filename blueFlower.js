/* This week's question:
Given a list of ordered integers with some
 of the numbers missing (and with possible duplicates), 
 find the missing numbers.

Example:
> missingInts([1, 3, 3, 3, 5, 6])
> 2, 4

> missingInts([1, 2, 3, 4, 4, 7, 7])
> 5, 6 */
function missingInts(array) {
    var n=array.length
    var array1=[];
    var result=[];
    var first=array[0];
    for(var j=first;j<n;j++){

    for(var i=0;i<array.length;i++){
        var element=array[i];
    
        if((j==i+1)&&(element != j) ){
            var diff=j
            result.push(diff)    
            }
        }
     
    }
    return  result
}
console.log(missingInts([1, 2, 3, 4, 4, 7, 7]));
console.log(missingInts([1, 3, 3, 3, 5, 6]));


