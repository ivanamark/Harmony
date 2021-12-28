/* Interview question of the week
Implement a function rotateArray(int[] arr, n) which rotates an array by n places.

Example: [1, 2, 3, 4, 5] rotated by 2 gives [4, 5, 1, 2, 3].

 */
 function rotateArray(arr, n) {
     var first=[];
     var second=[];
     var s=arr.length-(n+1)
     for(var i=s+1;i<arr.length;i++){
        var element=arr[i];
        first.push(element)


     }
     for( i=0;i<=s;i++){
        var elementa=arr[i];
        second.push(elementa)


     }
     var result=first.concat(second);
     return result
 }
 console.log(rotateArray([1, 2, 3, 4, 5], 2));
 