function countVowelConsonant(str) {
    var newarray=[];
    let element=str.split('');
    console.log(element);
    for(var i=0;i<element.length;i++){
        var el=element[i]
        console.log(el);
        if(
            (el=='a') || (el=='e')  || (el=='i') || (el=='o') || (el=='u')
        ){ 
        el = 1;
        console.log(el);
    } 
    else{
        el = 2;
    }
    newarray.push(el);
    console.log(newarray);
    
    }
    return newarray.reduce((previous, current) => {
         return previous + current;
  });
}

 console.log(countVowelConsonant('abcde')); 



 /* function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10
 */