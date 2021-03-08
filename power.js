//Implement a power function to raise a double to an int power, including negative powers.​
function toPower(double,int){
    var resulta=1
    var result=1
    if(int==0){
       result=1
    } 
if(int>0){   
    for(var i=1;i<int+1;i++){
         result=result*double;
    } 

    }
 if(int<0){
     var k=int*(-1);
    
     for( var j=1;j<k+1;j++){
     resulta=resulta*double;
         
    } 

    result=1/resulta;
 }   
    console.log(result);
    return result
}
toPower(2.5,2)
toPower(2.5,0)
toPower(2.5,-5)
toPower(2.5,-1)