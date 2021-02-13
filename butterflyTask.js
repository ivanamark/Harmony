/* This week's question:
Write a function that returns the longest number in a string.

Example:
longestNum('cassidy543is000always12091so232hungry')
> 12091 */
 function longestNum(str) {
     var arr=[]
     var newstr=" ";
     for(var i=0;i<=str.length-1;i++){
         var el=str[i];
       
        if((el == "1") || (el == "0")|| (el == "2")|| (el=="3")||(el=="4")||(el=="5")||(el=="6")||(el=="7")||(el=="8")||(el=="9")){
             newstr+=el;
        
         }else{
              newstr+=" "
         }
     }
    var ar=newstr.split(" ")
    ar=ar.filter(Boolean)
  
    for(var j=0;j<ar.length;j++){
            var char=ar[j];
            
            arr.push(char)
         }
         
     var biggest=arr.reduce((a,b)=>(a.length)>(b.length)?a:b)
     return biggest;         
       
 }
 var result=longestNum('cassidy543is000always12091so232hungry')
 console.log(result);