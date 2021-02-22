/* This week’s question:
Given a string str containing only the characters x and y, 
change it into a string such that there are no matching adjacent characters. 
You’re allowed to delete zero or more characters in the string. 
Find the minimum number of required deletions.

Example:
$ everyOther(‘xxyxxy’)
$ 2 // str becomes ‘xyxy’
$ everyOther(‘yyyyy’) $ 4 // str becomes ‘y’ */
function everyOther(str){
    var newarray=[];
    var newString='';
    var sum=''
    for(var i=0;i<str.length;i++){
        var element=str[i]
        newarray.push(element)
    }
    var unique=[... new Set(newarray)]
    //console.log(unique);
    for(var j=0;j<unique.length;j++){
       newString+=unique[j]
    }
    //console.log(newString);
    var elem=str.split(newString)
    for(var k=0;k<elem.length;k++){
        var element=elem[k];
        sum+=element
       
    }
     //console.log(sum);
     var m=sum.length
     //console.log(m);
     if(m==0){
         var result=str.length-1
     }else{
         result=m
     }
     console.log(result);
     return result
    }


everyOther('yy')
everyOther('xxyxxy')
everyOther('xxxxyyyyyxxxxxxxxxxy')
everyOther('xxxx')
everyOther('xxxyxyxyxyyyyyyyyyyyxyxxxxxxyyyy')
