function reverseAString(str) {
    var newstr=[];
    var counter=0;
    var n=str.length-1;
    for(var i=n;i>=0;i--){
        var element=str[i];
        counter--;
        console.log(element);
        newstr.push(element);
        
    }
    return newstr.join('');
}
console.log(reverseAString("Hello"));