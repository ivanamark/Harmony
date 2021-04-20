/* This week’s question:
Given an integer array, move all 0s to the end of it while maintaining the relative order of the non-zeroes. Bonus: do this without making a copy of the array!

Example:

$ moveZeroes([0,2,0,3,8])
$ [2,3,8,0,0] */
function moveZeroes(arr) {
    var newArr=[]
    var l=arr.length
    for(var i=0;i<l;i++){
        var element=arr[i];
        if(element!=0){
            newArr.push(element)
        }
        var s=newArr.length
        

    }
    for(var j=0;j<l-s;j++){
            newArr.push(0);
        }
    return newArr
}
console.log(moveZeroes([0,2,0,3,8]));