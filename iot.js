/* You’re trying to build an IoT mesh network. Signals can only travel the maximum of 5 units. You’re given coordinates for the switch, the light, and the mesh hubs (which capture and forward signals). Return true if the switch can successfully toggle the light.

Example:
let network = { switch: [0,1], hub: [[2,1], [2,5]], light: [1,6] }
$ canToggle(network)
$ true */
function  canToggle() {
    var network={};
    network.switch=[0,1];
    network.hub=[[2,1],[2,5]];
    network.light=[1,6]
    var elem=Math.sqrt((2-0)^2 + (1-1)^2);
    console.log(elem);
    var elem2=Math.sqrt((2-1)^2+(5-6)^2);
    console.log(elem2);
    var big=Math.max(elem,elem2);
    var distance=Math.sqrt((2-2)^2 + (5-1)^2)
    if(distance <= 5*big){
        return true;
    }else{
        return false;
    }
}
var result=canToggle();
console.log(result);