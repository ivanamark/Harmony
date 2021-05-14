/* This week’s question:
Given an integer n, return true if n^3 and n have the same set of digits.

Example:

$ sameDigits(1) // true
$ sameDigits(10) // true
$ sameDigits(251894) // true
$ sameDigits(251895) // false
 */
function sameDigits(n) {
var r=(n**3); 
var arra=[];
r=r+'';
for(var i=0;i<r.length;i++){
    var element=r[i];
    arra.push(element)
}
arra.sort((a,b)=>a-b)
var uniqueArray = [...new Set(arra)]
var mystring='';
for(var j=0;j<uniqueArray.length;j++){
    var e=uniqueArray[j];
    mystring+=e;

}
var q=n+'';
var qarray=[];
for(i=0;i<q.length;i++){
 qarray.push(q[i]);
 qarray.sort((a,b)=>a-b);

}

secondstring='';
for(j=0;j<qarray.length;j++){
    secondstring+=qarray[j]
}

if(mystring==secondstring){
    console.log(true);
}else{
    console.log(false);
}
}
 sameDigits(251894)
 sameDigits(251895)
 sameDigits(1)
 sameDigits(10)