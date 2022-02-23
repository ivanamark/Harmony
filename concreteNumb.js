/* This week’s question:
Given an array of integers, find the length of the 
longest sub-sequence such that elements in the sub-sequence are consecutive integers, 
the consecutive numbers can be in any order.

Example:

$ longestSubSeq([1, 9, 87, 3, 10, 4, 20, 2, 45])
$ 4 // 1, 3, 4, 2

$ longestSubSeq([36, 41, 56, 35, 91, 33, 34, 92, 43, 37, 42])
$ 5 // 36, 35, 33, 34, 37 */
function longestSubSeq(array) {
   var newarray=[];
   var newarray1=[];

      for(var i=0;i<array.length;i++){
       
        var n=array[i]
          if(array.includes(n && n+1 && n+2 && n+3 && n+4))  {
             newarray.push(n,n+1,n+2,n+3,n+4)
             break;
            }if(array.includes(n && n-1 && n-2 && n-3)){
             newarray.push(n-3,n-2,n-1,n)
     }
        }
   var result=array.filter(x=>newarray.includes(x));
   console.log(result.length);
   return result
   
}
console.log(longestSubSeq([1, 9, 87, 3, 10, 4, 20, 2, 45]));
console.log(longestSubSeq([36, 41, 56, 35, 91, 33, 34, 92, 43, 37, 42]));



