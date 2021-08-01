/* This week’s question:
Given a positive integer n, write a function that finds the number of zeros at the end of n! in base 10.

Example:

$ zerosEndingFactorial(1)
$ 0

$ zerosEndingFactorial(5)
$ 1

$ zerosEndingFactorial(100)
$ 24 */
function zerosEndingFactorial(num) {
     
    if(num%10!=0){   
       var counter='';
       var multi=1;
    for(var i=1;i<num+1;i++){
       var multi=i*multi;
       
        } 
    }
        multi=multi+'';
    for(var j=multi.length-1;j>-1;j--){
        var a =multi[j];
        if(a==0){
        counter+=a;
        console.log(counter.length);
       }
        
    }if(num%10==0){
       var da=[]
    var a=num/5;
    var ka=Math.floor(a);
    da.push(ka);
  
    if(ka>4){
        var element=Math.floor(ka/5);
        da.push(element)
    }
    if(element>4){
        element=Math.floor(element/5)
        da.push(element)
    }
        var result=da.reduce((a,b)=>a+b,0);
        console.log(result);
        return result;
   
}
   
}
zerosEndingFactorial(5)
zerosEndingFactorial(100);
zerosEndingFactorial(300);
zerosEndingFactorial(400);