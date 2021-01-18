/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it would in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// Write your code here 👇

var butto = document.querySelector(".button");
var dot = document.querySelector(".dot"); 

var die = document.querySelector(".dice"); 
var array=['one','two','three','four','five','six']
butto.addEventListener('click',function(){
var random=Math.floor(Math.random() * array.length);
var dice=array[random];
diceResult(dice);
document.querySelectorAll(".dice").forEach(di => {
   di.classList.add("rot")
   
});
console.log(dice);

})
function diceResult(dice){
    if(dice =='two'){ 
    dot.innerHTML = `
    <div class="dice">
<div class="dot"> 
 </div>
<div class="dot"> 
</div> </div>`
    }else if(dice == 'one'){
         dot.innerHTML = `
    <div class="dice">
               
               <div class="dot"> 
                   </div>
                   </div> `}else if(dice == 'three'){
         dot.innerHTML = `
    <div class="dice"><div class="dot"> 
                   </div>
               
               <div class="dot"> 
                   </div>
    
<div class="dot"> 
                   </div> </div>`}else if(dice == 'four'){
         dot.innerHTML = `
    <div class="dice"><div class="dot"> 
                   </div><div class="dot"> 
                   </div>
               
               <div class="dot"> 
                   </div>
    
<div class="dot"> 
                   </div> </div>`}else if(dice == 'five'){
         dot.innerHTML = `
    <div class="dice"><div class="dot"> 
                   </div><div class="dot"> 
                   </div><div class="dot"> 
                   </div>
               
               <div class="dot"> 
                   </div>
    
<div class="dot"> 
                   </div> </div>`}else if(dice == 'six'){
         dot.innerHTML = `
    <div class="dice"><div class="dot"> 
                   </div><div class="dot"> 
                   </div><div class="dot"> 
                   </div>
               
               <div class="dot"> 
                   </div>
    
<div class="dot"> 
                   </div> </div>`}

};







/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/