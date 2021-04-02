/* This week’s question:
Given a string, return true if the string represents a valid number. A valid number can include integers, a ., -, or +.

Examples of valid numbers: “7”, “0011”, “+3.14”, “4.”, “-.9”, “-123.456”, “-0.1”

Examples of invalid numbers: “abc”, “1a”, “e8”, “–6”, “-+3”, “95x54e53.”
 */


 function ifValid(str){
     var includer=str.substring(0,1);
     var ina=str.substring(0,2);
     var l=str.substring(str.length-1)
    for(var i=0;i<str.length;i++){
       var element=str[i];
       var e=/[0-9]/ig;
       var nix=/[a-z]/ig
       let result=str.match(e);
       let res=str.match(nix);
       if(res != null){
           console.log(false);
           console.log(str);
           return false
       }
       if(result != null && result.length==str.length ){
           console.log(true);
           console.log(str);
           return true
       }
       if(ina=='+-' || ina == "-+" ){
               console.log(false);
               console.log(str);
               return false
           }
      
       
           if(includer == "+" || includer == "-" || includer == "." || l == '.'){
            console.log(true);
            console.log(str);
           return true   
           
           }else{
               console.log(false);
               console.log(str);
               return false
           }
       }

    }
    
 
 ifValid('0011');
 ifValid('95x54e53.');
 ifValid('+3.14');
 ifValid('-123.456');
 ifValid('-0.1');
 ifValid('abc');
 ifValid('4.');
 ifValid('–6');
 ifValid('7');
 ifValid('-+3');
 ifValid('e8');
