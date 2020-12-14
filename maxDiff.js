//Given an array of integers find maximal adjacent difference 
function arrayMaximalAdjacentDifference(nums) {
    var newArr=[];
    var ka=[];
    var counter=0;
    for(var i=0;i<nums.length;i++){
        var el=Math.abs(nums[i]-nums[i+1])
        counter ++;
        //console.log(el)
        newArr.push(el);
       // console.log(newArr);
        
        
    }
        ka=newArr.pop()
        console.log(newArr)
        var result= Math.max.apply(0,newArr);
    return result;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]))
console.log(arrayMaximalAdjacentDifference([2, 9, 1, 0]))

