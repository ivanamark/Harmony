/* You are given a snapshot of a queue of stocks that have changing prices coming in from a stream. Remove the outdated stocks from the queue.

Example:
$ snapshot = [
  { sym: ‘GME’, cost: 280 },
  { sym: ‘PYPL’, cost: 234 },
  { sym: ‘AMZN’, cost: 3206 },
  { sym: ‘AMZN’, cost: 3213 },
  { sym: ‘GME’, cost: 325 }
]
$ stockQueue(snapshot)
$ [{ sym: ‘PYPL’, cost: 234 },
   { sym: ‘AMZN’, cost: 3213 },
   { sym: ‘GME’, cost: 325 }]
   */

    function stockQueue(snapshot){
      var newarr=[];
      var arra=[];
      var niz=[];
      var result=[];
      var allProperties=Object.keys(snapshot);
     for(var i=allProperties.length-1;i>-1;i--){
        niz.push(snapshot[allProperties[i]]);
        newarr.push(snapshot[allProperties[i]].sym)
     
     }
    
     
       arra=[... new Set(newarr)];
      
      
       
        for( i=allProperties.length-1;i>-1;i--){
        for(var k=0;k<arra.length;k++){ 
           if(( !(!arra[k]==snapshot[allProperties[i]].sym) && i==k)){
    
          const found=newarr.find(e=>  e== arra[k])
       
      
          const r=niz.find(a=>a.sym==found)
     
          result.push(r);
     
        }
        
          }
       
           }  
      
     console.log(result);   
     
   }
  
   stockQueue([
  { sym: 'GME', cost: 280 },
  { sym: 'PYPL', cost: 234 },
  { sym: 'AMZN', cost: 3206 },
  { sym: 'AMZN', cost: 3213 },
  { sym: 'GME', cost: 325 }
  
])