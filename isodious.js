/* This week’s question:
An “odious number” is a non-negative number that has an odd number of 1s in its binary expansion. Write a function that returns true if a given number is odious.

Example:

$ isOdious(14)
$ true

$ isOdious(5)
$ false */
function isOdious(num) {
    var binary=num.toString(2);
    console.log(binary);
    var str=''
    for (let index = 0; index < binary.length; index++) {
        const element = binary[index];
        if(element==1){
            str+=element;
        }
        
    }
    if(str.length % 2 != 0){
        console.log(true);
        return true;
    }else{ 
        console.log(false);
        return false;
    }
    
}
isOdious(14);
isOdious(5);