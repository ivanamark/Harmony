/* function fibonacci(num) {
    if (num <=1) return 1
    return fibonacci(num-1) + fibonacci(num-2)
}
console.log(fibonacci(10));
 */
/* function sumOddFibonacciNumbers(num) {
    if(num===1){
        return[0,1];
    }else{
        var s=sumOddFibonacciNumbers(num-1);
        s.push(s[s.length-1]+s[s.length-2]);
        return s;
    }
}
console.log(sumOddFibonacciNumbers(10))*/
function sumOddFibonacciNumbers(num) { 
var arr = [1,2];
var sum=0;

for (var i = arr.length - 1; i < num+1; i++) {
    //console.log(i)
    var element = arr[arr.length - 1] + arr[arr.length - 2];
     arr.push(element);
}
    /* if ((element <= num) && element%2==1) {
      console.log(element) */
     
      /* console.log(arr); */
      
   /*  } */
    for(var j=0;j<arr.length;j++){
        var arre=[];
        var el=arr[j];
        if(el%2==1  && el<=num){
            arre.push(el);
            //console.log(arre)
            sum=sum+el;
        }
       
    }



return sum+1;
}
    

console.log(sumOddFibonacciNumbers(1000))

    

