//implementing slice without builtin-method
function chunkyMonkey (values, size) {
    var firstarray=[];
    var secondarray=[];
       for(var i=0;i<=size-1;i++){
           var element=values[i];
          // console.log(element);
           firstarray.push(element)
           //console.log(firstarray);
       }
       for(var i=size;i<values.length;i++){
           var element2=values[i];
           //console.log(element2);
           secondarray.push(element2)
           //console.log(secondarray);
       }
       return [firstarray,secondarray];
}
console.log(chunkyMonkey(["a", "b", "c", "d"],2))
function chunk (val,size){
    var newArr2=val.slice(size)
    var newSrr1=val.slice(0,size)
    return [newSrr1,newArr2]
}
console.log(chunk(["a", "b", "c", "d"],2));
