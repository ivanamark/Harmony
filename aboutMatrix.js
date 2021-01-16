function areaMatrix(matrix){ 
     var ar=[];
     var sum=0;
     var arearec=1;
     var area1=[];
     var area2=[];
     var area3=[];
     var area4=[];
      var newarray=[];
      var newarray1=[];
      var newarray11=[];
      var newarray2=[];
      var newarray21=[];
      var newarray3=[];
      var newarray31=[];
      var newarray4=[];
    for(var i=0;i < matrix.length;i++){
        var t=matrix.length
        var c = matrix[i].length;
       
           for(var j=0;j < matrix[i].length;j++){
                 
             var ind=matrix[i].indexOf('1',j);
       
       ar.push(ind);
        
          }
          
    }
      
       newarray4=ar.slice(0,5);
      
       newarray1=ar.slice(5,10)
       
       newarray2=ar.slice(10,15)
       
       newarray3=ar.slice(15,20)
      

       for(let k=0;k<newarray4.length;k++){
         var al=newarray4[k];
        
       
         newarray.push(al)
       
       }
       
         var maxelem=newarray.sort((a,b)=>a-b).pop();
       
         var maxelem1=newarray.sort((a,b)=>a-b).pop();

       
         var maxelem2=newarray.sort((a,b)=>a-b).pop();
        
          var maxelem3=newarray.sort((a,b)=>a-b).pop();
         
         if(maxelem1==maxelem-1){
            var second=maxelem1;
            
        
         }
         if(maxelem2==second-1){
            var third=maxelem2;
            
         
         }
         if(maxelem3==third-1){
            var forth=maxelem3;
            
         
         }

         area1.push(maxelem,second,third,forth);
         area1=area1.filter(Boolean);
         
       for(let k=0;k<newarray1.length;k++){
         var  ali=newarray1[k];
        
       
         newarray11.push(ali)
       
       }
       
         var maxelemA=newarray1.sort((a,b)=>a-b).pop();
        
         var maxelem1A=newarray1.sort((a,b)=>a-b).pop();

       
         var maxelem2A=newarray1.sort((a,b)=>a-b).pop();
         
          var maxelem3A=newarray1.sort((a,b)=>a-b).pop();
          
         if(maxelem1A==maxelemA-1){
            var secondA=maxelem1A;
            
        
         }
         if(maxelem2A==secondA-1){
            var thirdA=maxelem2A; 
            
        
         
         if(maxelem3A==thirdA-1){
            var forthA=maxelem3A;
            
         
         } 
         area2.push(maxelemA,secondA,thirdA,forthA);
         area2=area2.filter(Boolean)
       
  
        for(let k=0;k<newarray2.length;k++){
          var ala=newarray2[k];
        

         newarray21.push(ala)
       
        }
     
         var maxelemB=newarray21.sort((a,b)=>a-b).pop();
         
        
         var maxelem1B=newarray21.sort((a,b)=>a-b).pop();

        
         var maxelem2B=newarray21.sort((a,b)=>a-b).pop();
            
          var maxelem3B=newarray21.sort((a,b)=>a-b).pop();
         
         if(maxelemB == maxelem1B+1){
            var secondB=maxelem1B;
            
         
         }
         if(secondB == maxelem2B + 1){
            var thirdB=maxelem2B;
            
         
         }
        if(maxelem3B == thirdB-1){
            var forthB=maxelem3B;
            
        
         
         } 
        
         area3.push(maxelemB,secondB,thirdB,forthB);
        
         area3=area3.filter(Boolean);
         
  
        for(let k=0;k<newarray3.length;k++){
         var alas=newarray3[k];
        
         
         newarray31.push(alas)
         
       
        }
        var maxelemC=newarray31.sort((a,b)=>a-b).pop();
        
        
         var maxelem1C=newarray31.sort((a,b)=>a-b).pop();

        
         var maxelem2C=newarray31.sort((a,b)=>a-b).pop();
       
          var maxelem3C=newarray31.sort((a,b)=>a-b).pop();
         
         if(maxelem1C == maxelemC-1){
            var secondC=maxelem1C;
            
        
         }
         if(maxelem2C == secondC-1){
            var thirdC=maxelem2C;
            
       
         }
        if(maxelem3C == thirdC-1){
            var forthC=maxelem3C;
            
       
         
         } 
         area4.push(maxelemC,secondC,thirdC,forthC);
         area4=area4.filter(Boolean)
       
         for(let r in area1){
if(area1[r]==area2[r]){
        
    area1[r]=1;
       sum+=area1[r];
        arearec=sum*2;
         }
         }
         for(let r in area2){
if(area2[r]==area3[r]){
  
   
    area2[r]=1;
       sum+=area2[r];
        arearec=sum*2;
       
         }
         }
        for(let r in area3){
if(area3[r]==area4[r]){
         
    area3[r]=1;
       sum+=area3[r];
        arearec=sum*2;
         }
         }      
         }
         return arearec;
         }
     
        

console.log(areaMatrix([
   
  ['1','0','1','0','0'],
  ['1','0','1','1','1'],
  ['1','1','0','1','1'],
  ['1','0','0','1','0']
  
  ])
);
console.log(areaMatrix([
   
  ["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]
  ])
);
