//Check if the given string is a correct time representation of the 24 hour clock

function validTime(str) {
    counter=0;
    str = str.replace(/[:]/g, "");
    var num = parseInt(str);
    num= num+"";
    console.log(num); 
    console.log(num.length) 
    if (num.length < 4)  {
        num = "0" + num;
    }

    var elem1=(num.toString().substring(0,2));
    var elem2=(num.toString().substring(2,4));
    console.log(elem1);
    console.log(elem2);
    elem1=! (!(elem1 < 60));
    elem2=! (!(elem2 < 60));
    return  elem1 && elem2;
   
    
    
}

console.log(validTime('13:47'));
console.log(validTime('78:47'));
console.log(validTime('02:86'));
console.log(validTime('02:06'));