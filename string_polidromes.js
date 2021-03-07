/* This week's question:
Write a function that takes in a string and 
returns all palindromes that can be formed with that string if you rearrange the letters. */

function polidromes(str){
    var negative='there is no result'
    var uniq=[...new Set(str)]
    var reversed=[]
    for(var i=uniq.length-1;i>=0;i--){
    
        reversed.push(uniq[i]);
    }
    
if((str.length/uniq.length)%2==0){
    let array3 = uniq.concat(reversed);
    var sentence=array3.join('').toString()
    console.log(sentence);
    return sentence
}else{
    console.log(negative);
    return negative;
    
}

}
polidromes('aabbkklsl')
polidromes('aabbkklsls')