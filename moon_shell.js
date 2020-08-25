function numChars(s,c){
    let counter=0;
    for(let sc of s){
        var element=sc;
        if(element==c){
            counter++
        }
    }
    return counter;
}
console.log(numChars('oh heavens' ,'h'));