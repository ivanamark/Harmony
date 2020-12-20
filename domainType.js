//write a function that labels the domains as a "commercial",
//"organization","network" or "information" for .com,.org,.net,.info respectively.
//for the given list of domains return the list of their labels.

function domainType(domains) {
    var counter=0;
    var newarr=[];
    var respond="";
    for(var i=0;i<domains.length;i++){
        var element=domains[i].split(".").pop();
        newarr.push(element)
    }
        
       // console.log(newarr)
       for(var j=0;j<newarr.length;j++){  
           var elem=newarr[j];
           var arr=[];
         if(elem = "org"){
              respond = "organization"
             arr.push(respond);
         }if(elem = "com"){
              respond ="commercial"
             arr.push(respond);
         }if(elem =" net"){
              respond="network"
             arr.push(respond);
         } if(elem = "info"){
              respond="information"
              arr.push(respond);
         }
         }
         
    
   return arr;
}
console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]))


