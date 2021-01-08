/* You’re trying to build an IoT mesh network. Signals can only travel the maximum of 5 units. You’re given coordinates for the switch, the light, and the mesh hubs (which capture and forward signals). Return true if the switch can successfully toggle the light.

Example:
let network = { switch: [0,1], hub: [[2,1], [2,5]], light: [1,6] }
$ canToggle(network)
$ true */


function  canToggle1() {
    var network1={};
    network1.switch=[0,1];
    network1.hub=[[2,1],[2,5]];
    network1.light=[1,6]
    for(var i=0;i<network1.hub.length;i++){
        var elem=network1.hub[i];
        console.log(elem)
        var elem1=Math.sqrt((elem[0]-network1.switch[0])^2 + (elem[1]-network1.switch[1])^2);
         var elem2=Math.sqrt((elem[0]-network1.light[0])^2 + (elem[1]-network1.light[1])^2);
         
         var distance=(Math.sqrt((elem[0][0]-elem[0][1])^2 + (elem[1][0]-elem[1][1])^2))
         
         console.log(elem1)
         console.log(elem2)
         
         console.log(distance);
         if(!(!elem1) && !(!elem2)){ 
    var big=Math.max(elem1,elem2);
    console.log(big)
    }
    }
  
    if(distance <= 5*big){
        return true;
    }else{
        return false;
    }
}
var result=canToggle1();
console.log(result);

