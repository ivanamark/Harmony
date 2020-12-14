//Given a list of folders in a filesystem and a 
//name of a folder to remove,return the new list of folders to remove
/* $ removeFolder([“/a”,”/a/b”,”/c/d”,”/c/d/e”,”/c/f”, “/c/f/g”], ‘c’)
$ [“/a”,”/a/b”]
$ removeFolder([“/a”,”/a/b”,”/c/d”,”/c/d/e”,”/c/f”, “/c/f/g”], ‘d’) $ [“/a”,”/a/b”,”/c”,”/c/f”, “/c/f/g”] */
function removeFolder(array,el){
    el="/"+el
    var eklk=[]
   
    var rg = new RegExp(el);
   
    var counter=0;
    for(var i =0;i<array.length;i++){
        var element=array[i];
        counter++;
        var pos=element.indexOf(el);
       
        var result=element.match(rg); 
        
        var n=element.startsWith(el);
         var cleanString='';
    
        
        
        if ( !result ){
            eklk.push(element);
       
    }
    
        if ( result ){
   
           cleanString = element.substring(0,pos);
          
            eklk.push(cleanString);
           }
        
        
    }
    var uniq = [...new Set(eklk)];
    return uniq.filter(x=>x!="");
    
}
console.log(removeFolder(["/a","/a/b","/c/d","/c/d/e","/c/f","/c/f/g"],'c'));
console.log(removeFolder(['/a','/a/b','/c/d','/c/d/e','/c/f','/c/f/g'],'d'));