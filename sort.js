const strs = ["abc", "", "aaa", "a", "zz"];

function sortByLength(strs) {
    
    return strs.sort((a,b)=> a.length-b.length)

}
console.log(sortByLength(strs));


