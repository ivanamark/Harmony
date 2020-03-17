function multiplier(factor){
    return function(x){
        return x*factor;
    }
}
let duo=multiplier(2);
let tripler=multiplier(4);
console.log(duo(4));
console.log(tripler(4));

