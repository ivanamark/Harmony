//given an array of integers,for each posision i,search among previous positions 
//for the last(from the left) position that contains a smaller value
//store that valueat position i in the answer.If no such value can be found,store -1 instead
function arrayPreviousLess(nums) {
var newarr=[];


    for(var i=0;i<=nums.length-1;i++){
       // console.log(nums[i]);
        
        if(nums[i]>nums[i-1]){
            var element=nums[i-1]
            newarr.push(element)
        }else{
            element=-1
            newarr.push(element)
        }
    }
   return newarr
    
}
console.log(arrayPreviousLess([3, 5, 2, 4, 5]))

        