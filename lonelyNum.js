/* This week’s question:
Given three numbers, return their product. But, if one of the numbers is the same as another, it does not count: If two numbers are similar, return the lonely number. If all numbers are same, return 1.

Example:

$ lonelyNumber(1,2,3)
$ 6

$ lonelyNumber(6,6,4)
$ 4

$ lonelyNumber(7,7,7)
$ 1 */
function lonelyNumber(a,b,c) {
    
    if(a==b && b==c){
         console.log(1);
        return 1;
       
    }if(a==b && a!=c) {
         console.log(c);
        return c;
       
    }
     if(a==c && a!=b){
        console.log(b);
    }else{
        console.log(a+b+c);
        return a+b+c;
       
    }
}
lonelyNumber(1,2,3);
lonelyNumber(6,6,4);
lonelyNumber(7,7,7);


function lonelyNumbera(a,b,c) {
    
    if(a^b && b^c){
         console.log(a+b+c);
        
       
    }if((!(a^b)) && a^c) {
         console.log(c);
        //return b;
       
    }
     if((!(a^c)) && a^b){
        console.log(b);
    }if((!(a^b) && !(b^c))){
        {
         console.log(1);
       
    }
    }
}
lonelyNumbera(1,2,3);
lonelyNumbera(6,6,4);
lonelyNumbera(7,7,7);
