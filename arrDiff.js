
var arr=[1,2,3,4]
var numb=1;
function pairs(arr) {
    
    var dubs = [],
        s = arr.length;
    for(var i=0; i<s; ++i)
        for(var j=i+1; j<s; ++j)
            dubs.push([arr[i], arr[j]]);
    return dubs;
}
pairs(arr).forEach(function(pair){
    //console.log(pair);
    const min = Math.min(...pair)
    const max=Math.max(...pair)
    var result=max-min;
    var newArray=[];
     //console.log(result);
    var eqalty = (numb==result)
   if (eqalty){
        
        
        newArray.push(eqalty);
         
         
      console.log(pair);
      
};
     
    
 


  



});



