
var pushed = false 
var targetInt; 
var spinningElem = document.getElementById('spinning'); 


document.getElementById("buttonPressed").addEventListener("click", buttonPressed);


function buttonPressed(){
    pushed = true;
}


function setTargetInt(){
    var targetElem = document.getElementById('targetNum');
    targetInt=Math.floor(Math.random() * 101)
    targetElem.innerHTML = targetInt;
}


const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}




const spin = async () => {
    for(var i=0;i< 101;i++){
        if (pushed=== true){
            stop(i);
            break;
        }else{
            spinningElem.innerHTML=i;
             await sleep(200)
        }
    }
   
  
}


function stop(i){
    
    var result = document.getElementById('result'); 
        if(i == targetInt+1){
            result.innerHTML="SUCCESS"
        }else{
            result.innerHTML="Please,try again"
        }
}



setTargetInt();
spin()