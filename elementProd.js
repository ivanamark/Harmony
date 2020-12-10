function adjacentElementsProduct(nums) {
    let ne=[];
    counter=0;
    for(var i=0;i<nums.length;i++){
       var el=nums[i]*nums[i+1];
      
       ne.push(el);
    }
    var popi=ne.pop();
    return Math.max.apply(0, ne);
}
console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));