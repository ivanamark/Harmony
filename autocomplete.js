function simpleAutocomplete(str) {
    var result=[];
    var dict=['apple','banana','cranberry','strawberry'];
    for(var word of dict){
        for(var i=0;i<word.length;i++){
            if(str==word.substring(i) || str==word.substring(0,i)){
                result.push(word)
            }
        }
    }
    console.log(result);
    return result
}
simpleAutocomplete('berry');
simpleAutocomplete('app');
simpleAutocomplete('fart');