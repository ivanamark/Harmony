/* This week’s question:
Given a positive or negative real number, round it to the next whole integer closer to zero. This means if it’s positive, round down, and if it’s negative, round up. Try to do this in as few characters possible!

Test cases:

 1.7    =>  1
-2.1    => -2
 500.4  =>  500
-369.5  => -369
 150    =>  150
-350    => -350 */
function roundClose(numb) {
    var m=numb%1
    var result=numb-m
    console.log(result);
    
}
roundClose(1.7)
roundClose(-2.1)
roundClose(500.4)
roundClose(-369.5)
roundClose(150)
roundClose(-350)