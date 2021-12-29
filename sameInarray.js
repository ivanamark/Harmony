/* This week’s question:
You’re in charge of the fireworks display, and you have a list of fireworks to shoot off.
 You want to make sure you don’t fire the same colors twice in a row. Given an array of fireworks, return a valid firing order.
  You decide how you want an impossible solution to work!

Example:

$ orderFireworks(['green','green','green','red','red','blue'])
$ ['green','red','green','red','green','blue'] */
function orderFireworks(array){
    var new1=[];
    var new2=[];
    var new3=[];
    var new4=[];
    for (var i=0;i<array.length;i++){
        
        if(array[i]==array[i+1]){
            new1.push(array[i])}
                else{
                    new2.push(array[i])
                }
       

            }
        for ( i=0;i<new1.length;i++){
        
            if(new1[i]!=new1[i+1]){
               new3.push(new1[i])
                }else{
                 new4.push(new1[i])
            }
            }
    return new2.concat(new3).concat(new4)
}
   
  console.log(orderFireworks(['green','green','green','red','red','blue']));

