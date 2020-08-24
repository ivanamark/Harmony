function numChars(str,char){
    var counter=0;
    for(var i=0;i<str.length;i++){
        var element=str[i];
        if(element==char){
            counter++
        }
    }
    return counter;
}
console.log(numChars('oh heavens' ,'h'));