/* This week's question:
Given an array of unsorted integers, return the mean, median, and mode. */
function unsortedIntegers(array){
    var sum=0
    var nume=array.length
    var b=array.length-1
    var counter=0;
    var ret=1
    var item; 
    for(var i=0;i<array.length;i++){
        var element=array[i];
        sum+=element;
       for(var j=i;j<array.length;j++){
           if(array[i]==array[j])
           counter++;
           if(ret<counter){
             ret=counter;
             item=array[i]

           }
       }
       counter=0
     
   
    }
  
    if(nume%2==1){
        var a=(nume-1)/2;
     
        var median=array[a];
    }
    if(nume%2==0){
       var c=nume/2-1
        var first=array[c]
        var second=array[b]
        median=(first+second)/2

    }
    var mean=sum/nume;
    
return `mode is most popular number and that is ${item}, median is ${median} ,and mean is average and that is ${mean}`

}
console.log(unsortedIntegers([2,21,5,89,25,21,4,36,1,2,7,2,1]));