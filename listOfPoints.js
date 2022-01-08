/* listOfPoints = [
  { name: "A", connections: ["B", "C"] },
  { name: "B", connections: ["A", "E"] },
  { name: "C", connections: ["A", "D"] },
  { name: "D", connections: ["C"] },
  { name: "E", connections: ["B", "F"] },
  { name: "F", connections: ["E"] },
]

$ pathBetweenPoints(listOfPoints, "A", "F")
$ A -> B -> E -> F

$ pathBetweenPoints(listOfPoints, "D", "B")
$ D -> C -> A -> B */



var listOfPoints = [
  { name: "A", connections: ["B", "C"] },
  { name: "B", connections: ["A", "E"] },
  { name: "C", connections: ["A", "D"] },
  { name: "D", connections: ["C"] },
  { name: "E", connections: ["B", "F"] },
  { name: "F", connections: ["E"] },
]
function pathBetweenPoints(listOfPoints, str1, str2){
    for(var i=0;i<listOfPoints.length;i++){
        var element=listOfPoints[i];
        if (element.name==str1){   
        var res1=element.connections[0]
        }
        if (element.name==str2){   
        var res2=element.connections[0]
        }
    }
    return `${str1} -> ${res1} -> ${res2} -> ${str2}`;
}
console.log(pathBetweenPoints(listOfPoints, "D", "B"));
console.log(pathBetweenPoints(listOfPoints, "A", "F"));

