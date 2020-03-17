function numbOfLetters(str1){
    var counter=0;
    var counter1=0;
    var counter2=0;
    var ar=[];
    var ak=[];
    for(var i=0;i<str1.length;i++){
        
        console.log(str1[i]) //s
        ar.push(str1[i]);
    i++
    console.log(i);//1
    console.log(counter);//0
    
    
        counter ++;
        console.log(i);//1
        console.log(counter);//1
        
        
      // ;
      ar.push(str1[i]);
      
       console.log(ar);//['b','b']
       
       console.log(counter);//1
    
       console.log(i);

      
        
    }
    
        //console.log(elem);
      
        if((counter-i-1)%2 === 0){
            //counter ++
           // i ++
            return console.log(0);
            
        }else{
            return console.log(i-1-counter);
            
        }
        

        for(var j=0;j<ar.length;j++){
            console.log(ar[j]);
            let firs=ar[j]
            console.log(firs);
            
            ak.push(firs);
            j++;
            counter1 ++;
            console.log(ar[j]);
           
            //ak.push(ar[j]);
            console.log(ar);
        
            for(let al of ar){  
            console.log(al);
    
            if(al===ar[j]){
                var same1=al;
                
               console.log(same1);
               counter2 ++;
               //j++;
               console.log(same1);
               console.log(counter2);
            
            }
            
            }
                //console.log(same1);
                
            }
        
     
        if(counter2 % 2!==0){ console.log(0);  }
    
    else{
        
        console.log(same1);
        
    }
          return  counter1 & counter & counter2;
          
        
        
    
    
}

console.log(numbOfLetters('aabbc'));
