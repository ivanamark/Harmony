//transform a givan sentence into a new one with dashes between each two consecutivs lettes.
//For input="aba caba" 
//output should be "a-b-a c-a-b-a"
function insertDashes(arr) {
    let arr1=arr.split(" ");
    let a=arr1[0];
    let b=arr1[1];
    let c=a.split("").join("-");
    console.log(c);
    let d=b.split("").join("-");
    return `${c} ${d}` 

}
console.log(insertDashes("aba caba"));