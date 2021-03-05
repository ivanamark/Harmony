//Given a number n, return the number of 1s in the binary representation of n.
function numOfn(num) {
    var counter=0;
    var element=(num >>> 0).toString(2)
    console.log(element);
    for(var i=0;i<element.length;i++){
        if(element[i]==1){
            counter++
        }
          
    }
    console.log(counter);
    return counter;
  
}
numOfn(-258)