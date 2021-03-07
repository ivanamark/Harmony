/* This week's question:
Given a string of characters with a bunch of
 opening and closing parenthesis, remove the excess parenthesis.

Example:
balance('4-3)+5+)6+(5+9)*(8)+9(')
> 4-3+5+6+(5+9)*(8)+9
  */



function balance(onestring) {
   var array=[];
   var str1=[];
    for(var j=0;j<10;j++){
       if(onestring[j]!=')')
           str1.push(onestring[j]);

   }

   for(var i=0;i<onestring.length;i++){
       
           array.push(onestring[i]);

   }
   console.log(array);
   for(var a=array.length-1;a>=0;a--){ 
   if(array[a] == '(' ){
       var el=array[a]
       array.pop()
   }if(array[0] != '(' ){
       array.shift()
   }if(array[0] != '('){
       array.shift()
   }
   }
   var sre=str1.concat(array);
   var sentence=''
   for(var d=0;d<sre.length;d++){
       sentence+=sre[d]
   }
   console.log(sentence);

      
  }
  balance('4-3)+5+)6+(5+9)*(8)+9(')