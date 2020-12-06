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

function reverseAString2(str2) {
    var newstr2='';
    for(var l=str2.length-1;l>=0;l--){
        newstr2+=str2[l];
    }
    return newstr2;
}
console.log(reverseAString2("Hello"));

function reverseAString3(str3) {
    return str3.split('').reverse().join('')
}
console.log(reverseAString3("Hello"));

(str3)=> str3.split('').reverse().join('')

console.log(reverseAString3("Hello"));
function reverseAString(str) {
    //  write code here.
    let reversed = "";
    
    for(let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
        
    }
    return reversed;
}
console.log(reverseAString("Hello"));