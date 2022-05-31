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
    str=str.toLowerCase();
  console.log(str)
    const obj={};
    for(var char of str){ 
     if(obj[char]>0){
         obj[char]++
        
     }else{
         obj[char]=1
     }
        
       
    }
    for (const [key, value] of Object.entries(obj)) {
  console.log(`${value}`==1);
}

}
allUnique('catT & dog')
