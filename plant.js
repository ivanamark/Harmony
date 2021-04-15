/* This week’s question:
Given an array of 0s and 1s that represent a garden, where 0 is a plot that hasn’t been planted on, and 1 is a plot that has been planted on, return true if n plants can be planted without touching another plant.

Example:

garden = [1,0,0,0,1]

$ canPlant(garden, 1)
$ true // plant at position 2
$ canPlant(garden, 4)
$ false // there are only 3 plots, and two of them can't be planted on
 */
var garden=[1,0,0,0,1]
function canPlant(garden,inte) {
    var countArray=[]
    for(var i=0;i<garden.length;i++){
        if(garden[i]==0){
            var e=garden[i]
            countArray.push(e);
             
        if(countArray.length > inte-1){
    
            return true
        }
        }
    }
            return false;
    }
     
 console.log(canPlant(garden, 4));
 console.log(canPlant(garden, 3));
 console.log(canPlant(garden, 2));
 