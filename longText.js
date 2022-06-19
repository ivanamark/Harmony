/*This week’s question:
Create a loooong teeeext generator that takes in a string and an integer n, and multiplies the vowels in the string by n.

Example:

$ longText('hello world', 3)
$ 'heeellooo wooorld'

$ longText('lol', 10)
$ 'looooooooool'*/
function longText(str,n){
    var newstr='';
    for(var char of str){
        char=char.toLowerCase();
        if(/[aeion]/gi.test(char)){
           var nchar=char.repeat(n);
            newstr+=nchar;
        }else{
            newstr+=char
        }
    }
    return newstr
}
longText('lol', 10)
