/* This week’s question:
You’re given two integer arrays (n and m), and an integer k. Using the digits from n and m, return the largest number you can of length k.

Example:
n = [3,4,6,5]
m = [9,0,2,5,8,3]
k = 5
$ maxNum(n, m, k)
$ 98653 */

function maxNum(n,m,k) {
var mynumber='';
n.push(m);

n=n.flat();

var u = [...new Set(n)]

u.sort((a,b) => b-a);
var un=u.slice(0,k);

for(var i=0;i<un.length;i++){
  mynumber+=un[i];
}
    return mynumber
}
var result=maxNum([3,4,6,5],[9,0,2,5,8,3],5)
console.log(result);
 
