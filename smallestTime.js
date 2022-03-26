/* This week’s question:
Given a list of times in a 24-hour period, return the smallest interval between two times in the list. Hint: you can do this in O(n) time! Assume the list is unsorted.

Example:

$ smallestTimeInterval(['01:00', '08:15', '11:30', '13:45', '14:10', '20:05'])
$ '25 minutes' */
function smallestTimeInterval(arr) {
    var newarr=[];
    for (var i=0;i<arr.length;i++){
        var e=arr[i];
        var a=e.split(':');
        for(var j=0;j<a.length;j++){  
        var m=parseInt(a[0])+parseInt(a[1])/60
        newarr.push(m)
    }
}
    var resultarr=[];
    newarr.sort((a,b)=>a-b);
    for(var k=0;k<newarr.length;k++){
        var s=newarr[k+1]-newarr[k];
        resultarr.push(s);
        var myArray=resultarr.filter(Boolean);
        var min=Math.min(...myArray)
    }
        
    
   return Math.round(min*60) 
}
console.log(smallestTimeInterval(['01:00', '08:15', '11:30', '13:45', '14:10', '20:05']))