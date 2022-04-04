/*This week’s question:
Given a string that represents items as asterisks (*)
 and compartment walls as pipes (|), a start index, and an end index, return the number of items in a closed compartment.

Example:

let str = '|**|*|*'

> containedItems(str, 0, 5)
> 2

> containedItems(str, 0, 6)
> 3

> containedItems(str, 1, 7)
> 1
*/



function containedItems(str,x,y){
    var m=[];
    var counter =0;
    var str1='';
    for(var i=x;i<y;i++){
        var element=str[i];
        str1+=element
    }
    for(i=0;i<str1.length;i++){
        if(str1[i]=='|'){
            m.push(i)
        }
    }
    var first=m[0];
    var last=m[m.length-1];
    var result=str1.substring(first,last);
    for(i=0;i<result.length;i++){
        if(result[i]=='*'){
            counter++
        }
    }
    console.log(counter);
}
containedItems('|**|*|*', 0, 5)
containedItems('|**|*|*', 0, 6)
containedItems('|**|*|*', 1, 7)