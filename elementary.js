/* Implement a word search. Given a 2D array of letters and a word to find,
 return the 2D array with the found word’s letters replaced with an asterisk (*). 
 If you can’t find a word, just return the 2D array or “not found”.

Example:

let grid = [['a','a','q','t'],
            ['x','c','w','e'],
            ['r','l','e','p']]

$ findWord(grid, 'ace')
$ [['*','a','q','t'],
   ['x','*','w','e'],
   ['r','l','*','p']]
 */
 let grid = [['a','a','q','t'],
            ['x','c','w','e'],
            ['r','l','e','p']]
            var newArr=[];
 function findWord(grid, str) {
     for(var i=0,j=0;i<grid.length,j<str.length;i++,j++){
         var sep=grid[i];
         var pes=str[j];
         var numb=sep.indexOf(pes)
         console.log(numb);
        newArr=sep.map((x,index)=>{
          if(index==numb){
            return '*'
          }
          return x
        });
         
          console.log(sep,pes,newArr);       
}      
       }
 findWord(grid, 'ace')