
function  perfectSquare(numb) {
    for(var i=0;i<numb;i++){
        var element=i;
        let result = ((element==element) && (element*element==numb))
        //console.log(result);
        if (result){
            return true;
        }     
    }
    
            return false; 
}  

console.log(perfectSquare(25));
console.log(perfectSquare(9));
console.log(perfectSquare(21));
console.log(perfectSquare(36));
console.log(perfectSquare(6));
