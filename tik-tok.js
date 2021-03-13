/* This week’s question:
Given a string array representing a tic-tac-toe board, return true if and only if
 it’s possible to reach this board position during the course of a valid tic-tac-toe game. 
 You can assume the first player will always play X first, and players will only fill in blank spaces.
  The game will end if there is 3 in a row, column, or diagonal, or if the board is full.

Example:
$ validTTTPosition(['XOX', ' X ', '   '])
$ false
$ validTTTPosition(['XOX', 'O O', 'XOX'])
$ true
$ validTTTPosition(['OOO', '   ', 'XXX'])
$ false
$ validTTTPosition(['  O', '   ', '   '])
$ false */
function validTTTPosition(array) {
  var newarr=[];
      for(var i=0;i<array.length;i++){
          if(array[i]=="XXX" || array[i]=="OOO"){
             return false;
          }else{   
      for(var j=0;j<array.length;j++){
        
        newarr.push(array[i][j]) 
          }
    
      for(var k=0;k<newarr.length;k++){
          if(newarr[k]==' '){
        newarr[k]='X';
        break;
          }
        }
      for(var t=0;t<newarr.length;t++){
          if((newarr[0] && newarr[4] && newarr[8]=='X') || (newarr[2] && newarr[4] && newarr[6]=='X')){
            return true;
          }
        }
      } 
  
    }
  
    return false;     
}
console.log(validTTTPosition(['XOX', 'O O', 'XOX']));
console.log(validTTTPosition(['XOX', ' X ', '   ']));
console.log(validTTTPosition(['OOO', '   ', 'XXX']));
console.log(validTTTPosition(['  O', '   ', '   ']));