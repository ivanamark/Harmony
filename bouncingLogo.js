function cornerHit(a,b,c){
    var x1=a[0]+b[0];
    var y1=a[1]+b[1];
    var x2=c[0]
    var y2=(x2-x1)+y1
    if(y2==c[1]){
        return true;
    }else{
        return false;
    }

    
}
cornerHit([5,5], [45,70], [400,200]);
cornerHit([5,5], [0,0], [100,100]);
