//given a string find the number of different characters in it
function differentSymbolsNaive(str) {
    var newa=[];
    for(var i=0;i<str.length;i++){
        var counter=0;
        if(str[i]!==str[i+1]){
            var elem=str[i];
            newa.push(elem);
            counter++;
        }
    }
    var uniq = [...new Set(newa)];//filters unique characters
    return uniq.length;
}
console.log(differentSymbolsNaive("cabca"))