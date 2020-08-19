//Given an array of random integers, 
//move all the zeros in the array to the end of the array.

let array=[1,2,0,1,0,0,3,6];
function sArray(array){
    
    var newArray=[];
    var counter=0;
    for(var i =0;i<=array.length-1;i++){
        
        if (array[i]===0){ 
        
         newArray.push(array[i]);
        
    }
        
    
    counter++
    }
    return newArray;

}
let result=sArray(array);
//console.log(result);


function kArray(array){
    var firstArray=[]
    
    var counter=0;
    for(var i =0;i<=array.length-1;i++){
        
        
        if (array[i]!==0){
            firstArray.push(array[i])
        }
    
    counter++
    }
    return firstArray;

}
let result1=kArray(array);
//console.log(result1);

var children = result1.concat(result);

console.log(children);