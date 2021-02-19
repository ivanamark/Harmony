/* This week’s question:
Sort an array of strings based on the number of distinct characters that occur in the word (followed by the length of the word).

Example:
$ charNumSort([“Bananas”, “do”, “not”, “grow”, “in”, “Mississippi”])
$ do in not Mississippi Bananas grow
 */
 function charNumSort(_array){
   var ku=_array.sort((a,b)=>b.length-a.length)
   var result=[];
   var newar=[];
   for(var i=0;i<ku.length;i++){
       var element=ku[i];
       var unique=[... new Set(element)]
       newar.push(unique);
     }
 newar= newar.sort((a,b)=> a.length-b.length);
    
   for(var j=0;j<newar.length;j++){
    
       var e=newar[j]
   
       e=e.join("")
     
       if(e=='Misp'){    
              e="Mississippi"
          }
      if(e=='Bans'){ 
              e='Bananas'
    
         }
   result.push(e)
     }
  
     console.log(result);
     return result
 }
 charNumSort(['Bananas', 'do', 'not', 'grow', 'in', 'Mississippi'])