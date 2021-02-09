/* Implement a ProductList class that has two methods, add(n) (which pushes the value n to 
the back of the list) and product(m) (which returns the product of the last m numbers in the list). 


Usage:
ProductList p = new ProductList();
p.add(7);         // [7]
p.add(0);         // [7,0]
p.add(2);         // [7,0,2]
p.add(5);         // [7,0,2,5]
p.add(4);         // [7,0,2,5,4]
p.product(3);     // return 40 because 2 * 5 * 4 */
var arra=[];
function ProductList(){
    this.arra=arra; 
}
ProductList.prototype.add=function(n){
    arra.push(n)
    return arra
    console.log(arra) 
}
ProductList.prototype.product=function(k){
    var newarra=[];
    for(var i=arra.length-1;i>=arra.length-k;i--){
        var el=arra[i]
       newarra.push(el)
    }
    return newarra.reduce((a,b)=>a*b);
    console.log(newarra.reduce((a,b)=>a*b));
    
}
var p=new ProductList();
console.log(p.add(7));

console.log(p.add(0));         // [7,0]
console.log(p.add(2));         // [7,0,2]
console.log(p.add(5));         // [7,0,2,5]
console.log(p.add(4));         // [7,0,2,5,4]
console.log(p.product(3));     // return 40 because 2 * 5 * 4 */