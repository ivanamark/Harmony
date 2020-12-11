function avoidObstacles(nums) {
    var ni=[];
     for(var i=0;i<nums.length;i++){
         var el=Math.abs(nums[i] - nums[i+1]);
         ni.push(el);

         
     }
     
         console.log(ni);
         var outNan=ni.pop();
         console.log(ni)
         
   var result=Math.max.apply(0,ni)  
   return result+1;



};
console.log(avoidObstacles([5, 3, 6, 7, 9]))


function avoidObstacles(nums, i = 1) {
    return nums.every(num => num % i !== 0) ? i : avoidObstacles(nums, i + 1)
}

