/* This week’s question:
Imagine your users are all typing slightly incorrectly, in that they shifted their hands one key to the right. Write a function that translates what they mean to say.

Example:

$ translateShift(';p; epe')
"lol wow"

$ translateShift('vtsmnrttu')
"cranberry"
 */
 function translateShift(str) {
     var dict='qwertyuiop[asdfghjkl;zxcvbnm,';
     var result='';
     for(var i=0;i<str.length;i++){
         for(var j=0;j<dict.length;j++){
             if(str[i]==dict[j]){
                 var element=dict[j-1];
                 result+=element;
             }
         }
     }
     return result;
 }
 console.log(translateShift('vtsmnrttu'));