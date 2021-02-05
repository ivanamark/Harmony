/* This week's question:
Given an array of points that represent the 3 vertices of a triangle, and a point K, return true if K is inside the triangle.

Example:
let triangle = [ [0,0], [0,3], [4,0] ]

isInTriangle(triangle, [2,1])
> true

isInTriangle(triangle, [3,2])
> false */
function isInTriangle(triangle,spot){
    var xu=[];
    var yu=[];
    for(var i=0;i<triangle.length;i++){
        console.log(triangle[i])
       if(triangle[i].sort().toString() == spot.sort().toString()){

       console.log(true)
       break;
        }else{     
        for(var j=1;j<triangle[i].length;j+=2){
            var elementY= triangle[i][j];
              xu.push(Math.max(elementY))
               
             
        }
        var maxY=Math.max(...xu)
        var minY=Math.min(...xu)
        for(var k=0;k<triangle[i].length;k+=2){
            var elementX= triangle[i][k];
           // console.log(elementX)
             yu.push(Math.max(elementX))
           
        }
        }
         var maxX=Math.max(...yu)
         var minX=Math.min(...yu)
/* console.log((spot[1]<=xu/2))
console.log((spot[0]<=yu/2) )
     */ 
    if((spot[0]<=(maxX+minX)/2) && (spot[1]<=(maxY+minY)/2)){
           console.log(true) 
       
       }else{   
           console.log(false)
       }
    } 
   
   
    
}
var result=isInTriangle([ [4,3], [4,5], [6.5,4] ], [4.5,3.5])
//console.log(result)