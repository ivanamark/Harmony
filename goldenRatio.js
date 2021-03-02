/* This week’s question:
Given two numbers X and Y, write a function to check that X and Y are in golden ratio.

Two numbers are in the golden ratio if their ratio is the same as the ratio of their 
sum to the larger of the two quantities. Check out the formula here. */

function goldenRatio(x,y) {
    if((x==1) &&((y==1)||(y==2))){
        return true;

        }if((y==1) &&((x==1)||(x==2))){
        return true;
    }if(x>y && x==Math.round(((1+Math.sqrt(5))/2)*y)){
        return true;
    }if(y>x && y==Math.round(((1+Math.sqrt(5))/2)*x)){
       
        
         return true;
    }else{
         return false;
    }
     
    }

console.log(goldenRatio(5,8));
console.log(goldenRatio(1,2));
console.log(goldenRatio(1,1));
console.log(goldenRatio(8,13));
console.log(goldenRatio(21,13));
console.log(goldenRatio(88,8));