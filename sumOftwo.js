//you have two integer arrays,a and b,and an integer target value v.Determine whethwr there is a pair of numbers
//where one number is taken from a and the other from b,
//that can be added together to get a sum of v.Return true if such a pair exists,
//otherwise return false
function sumOfTwo(nums1, nums2, value) {
    var counter=0;
    for(var i=0;i<nums1.length;i++){ 
         var el1=nums1[i];  
         console.log(el1);
    
    for(var j=0;j<nums2.length;j++){ 
    
    var el2=nums2[j];
    console.log(el2)
    var sum=el1 + el2;
    counter++
    console.log(sum)
    if(sum == value){
        return !(2 != 2) ;
    }
    }
    
    }
    if(sum != value){ 
        return !(3 != 4);
    
    }
    
}



console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42));
console.log(sumOfTwo([5,6,8,9], [1,2,5,6,9,12],6));
console.log(sumOfTwo([1, 2], [10, 20, 30], 81))

/**
* Test Suite 
*/
/* describe('sumOfTwo()', () => {
    it('returns true if a value can be found that by adding one number from each list', () => {
        // arrange
        const nums1 = [1, 2, 3];
        const nums2 = [10, 20, 30, 40];
        const value = 42;
        
        // act
        const result = sumOfTwo(nums1, nums2, value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(true);
    });
}); */
