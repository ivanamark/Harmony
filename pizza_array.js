/* Given an array of people objects (where each person has a name and a number of pizza slices they’re hungry for) and a number for the number of slices that the pizza can be sliced into, return the number of pizzas you need to buy.

Example:
$ arr = [{ name: Joe, num: 9 }, { name: Cami, num: 3 }, { name: Cassidy, num: 4 }]
$ gimmePizza(arr, 8)
$ 2 // 16 slices needed, pizzas can be sliced into 8 pieces, so 2 pizzas should be ordered */
/* function gimmePizza(){ */
function gimmePizza(arr, x){  
     var newarr=[];
   for(var i=0;i<arr.length;i++){
        var myobj=arr[i].num
   
        newarr.push(myobj);
       var summing=newarr.reduce((a,b)=>a+b);
    }
   return summing/x
   
}
  
    
 
var result=gimmePizza([{ name: 'Joe', num: 9 }, { name: 'Cami', num: 3 }, { name: 'Cassidy', num: 4 }],8);
console.log(result) 