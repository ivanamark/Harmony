/* This week's question:
Write a function duplicate that takes in an array arr and an int n, and returns an array that duplicates arr n times.

Example:
> duplicate([1,2,3,4,5], 2); // [1,2,3,4,5,1,2,3,4,5] */
function duplicate(arr,number){
  var de=[];
    for(var j=1;j<number+1;j++){
        for(var i=0;i<arr.length;i++){
        var e=arr[i];
        de.push(e)
    }
      
    }
    
    return  de ;
}
var result=duplicate([1,2,3,4,5], 2);
console.log(result);
 