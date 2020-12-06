const strs = ["abc", "", "aaa", "a", "zz"];

function sortByLength(strs) {
    
    return strs.sort(function(a,b){
         return a.length-b.length
});

}
console.log(sortByLength(strs));


