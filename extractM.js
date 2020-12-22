//given a rectangular matrix and an integer column,return an array containing
//the elements of yhe columnth column of given matrix
function extractMatrixColumn(matrix, column) {
    var newarrey=[];
    for( i=0;i<matrix.length;i++){
        var elements=matrix[i];
        //console.log(elements);
        for(j=0;j<elements.length;j++){
            if(j == column){
               var ned=elements[j];
               newarrey.push(ned);
            //console.log(newarrey)
            /* newarrey.push(ned)
            return newarrey; */
        }
    }
        

    }
    return newarrey;
    
    
}
console.log(extractMatrixColumn([[1, 1, 1, 2], [0, 5, 0, 4], [2, 1, 3, 6]],2))