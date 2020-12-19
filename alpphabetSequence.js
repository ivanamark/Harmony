//Check weather the given string is subsequence of the plain text alphabet
function alphabetSubsequence(str) {
 var arr=[];
 
    var alphabetRegex="abcdefghigklmnopqrstuwxyz";

    for(var i=0;i<alphabetRegex.length;i++){
        var elem= { a:alphabetRegex[i],b:i }
     
         for(var j=0;j<str.length;j++){
             var emy={c:str[j],d:j}
            
           if((elem.a)==(emy.c)){
    
            //console.log(elem.b);
            arr.push(elem.b)
            
             
        }   
        }
        
    }
    var condition = new Set(arr).size === arr.length//checking for duplicate elements

       var arr1=arr.sort((a, b) => b - a);
         if((arr=arr1) && (condition)){
             return true
         }else{
             return false
         }
       
   

      
         
} 
    
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('ace'))
//var alphabetRegex="abcdefghigklmnopqrstuwxyz";
