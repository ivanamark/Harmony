/*This week’s question:
Write a function that determines
if all the characters in a given
string are unique. 
Can you do this without making any
new variables?
You choose if you want to 
include capitalization in your
consideration for this one, 
as a fun challenge.

Example:

> allUnique('Cassidy')
> false

> allUnique('cat & dog')
> false

> allUnique('cat+dog')
> true*/

function allUnique(str){
   for(let i=0;i<str.length;i++){
   
      for(let a=i+1;a<str.length;a++){
       if(!!(str[i]==str[a])){
          return false
       }  
   }
   }
  return true
}
//allUnique('cat &dog');
//allUnique('cat & dog');
//allUnique('Cassidy')
allUnique('cat+dog')
