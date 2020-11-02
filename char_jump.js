function  charactetJump(n,array) {
    for(var i=0;i<array.length;i++){
        for(var k=1;k<array.length;k++){
            if(i=n*k){
                var element = array[i];
                if(element == 0){
                    return true;
                }else{
                    return false;
                }
            }
        }
    }
}
var result=charactetJump(3,[0,1,0,0,0,1,0])
console.log(result);
var resultb=charactetJump(4,[0,1,1,0,1,0,0,0,0])
console.log(resultb);
