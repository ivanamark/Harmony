function numBalanced(str) {
    
    let str1='';
    for(let char of str){ 
        if(char=='('){
        char=1;
        }else(char=-1)
        console.log(str1+=char)
    
    } 
   const regex=/[-]/g;
    const reg=/[1]/g
    const found = str1.match(regex);
    const min = str1.match(reg);

   return (Math.abs((found.length-(min.length - found.length))))
}
numBalanced('))()))))()')
