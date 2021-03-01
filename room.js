/* This week’s question:
Given a room size, and the square footage a paint can can cover, 
return how many cans of paint you need to buy to paint a room. 
Assume the room has four walls. If you’d like to expand this, you can add doors, windows, 
or any other room features that might make the problem interesting to solve.

Example:
room = { length: 12, width: 10, height: 9 }
canCoverage = 200
$ numberOfCans(room, canCoverage) $ 2 // (1292)+(1092) = 396, so two cans will cover it
 */
function canCaverage(obj){
     var a=obj.length;
     var b=obj.width;
     var c=obj.height;
     var canCoverage = 200
     var arearoom=2*c*b+2*a*c
    
return Math.ceil(arearoom/canCoverage);
 }
console.log(canCaverage({ length: 12, width: 10, height: 9 }));
 
