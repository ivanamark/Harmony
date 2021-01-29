/* This week’s question:
Given an n x n array, rotate it 90 degrees without making a new array.

Example:
$ rotate90([[1,2,3],[4,5,6],[7,8,9]])
$ [[7,4,1],[8,5,2],[9,6,3]] */
function rotate90(arr){
  var i=0;
  arr.reverse();
  var s=arr[i].length
  
   for(i;i<arr.length;i++){
  
     for( var j=0;j<arr.length;j++){
   
   if(j==0){
    var element=arr[i][j]
    arr[0].push(element)
    
   //console.log(arr[0])
   }
     if(j==1){
     var elementa=arr[i][j]
    arr[1].push(elementa)
    
  // console.log(arr[1])
    
     }
    if(j==2){
     var elemento=arr[i][j]
    arr[2].push(elemento)
    
  // console.log(arr[2])
    
   }
    
   }
   arr[i]=arr[i].slice(s)
  
   }
  return arr
  

   }
var res=rotate90([[1,2,3,],[4,5,6],[7,8,9]])
console.log(res);