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
      
        for(var j=1;j<triangle[i].length;j+=2){
            var elementY= triangle[i][j];
             console.log(elementX)
              xu.push(Math.max(elementY))
               var maxY=Math.max(...xu)
        var minY=Math.min(...xu)
           
        }
        
        for(var k=0;k<triangle[i].length;k+=2){
            var elementX= triangle[i][k];
           
             yu.push(Math.max(elementX))
            var maxX=Math.max(...yu)
         var minX=Math.min(...yu)
         
        
        }
        

        

    if(((minX<=spot[0])&&(spot[1]+spot[0]<=maxY)) && ((minY<=spot[1])&&(Math.abs(spot[1]-spot[0])<=maxX))){
       
        console.log(true) 
       
    } else{
        console.log(false) 
    }
        }
        }
     //var result=isInTriangle([ [0,0], [0,3], [4,0] ], [3,2])

var result=isInTriangle([ [0,0], [0,3], [4,0] ], [2,1])
//var result=isInTriangle([ [0,0], [0,9], [8,0] ], [4,4])
//var result=isInTriangle([ [0,0], [0,9], [8,0] ], [7,1]) 
//var result=isInTriangle([ [0,0], [0,9], [8,0] ], [2,9])
//var result=isInTriangle([ [0,0], [0,6], [2,0] ], [1,3])