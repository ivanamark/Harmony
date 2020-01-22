//Given a number n, find the sum of all n-digit palindromes.

//> nPalindromes(2)
//> 495 // 11 + 22 + 33 + 44 + 55 + 66 + 77 + 88 + 99

function sumNumbers(){  
var sum=0;

for(var i=10;i<100;i++){
    
    if (i % 11===0){
        var num=i;
        sum+=num;
       
        //console.log(num);
        //console.log(sum);
    } 
     }
     return sum;
    }
    console.log(sumNumbers());
    



 

