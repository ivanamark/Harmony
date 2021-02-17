/* Design a hashmap without using any built-in libraries. You should include the following functions:

put(key, value): Insert a (key, value) pair into the hashmap. If the value already exists, update the value.
get(key): Returns the value to which key is mapped, or -1 if this map contains nothing for key.
remove(key): Remove the mapping for the value in key if it exists. */
let scores= new Map();
scores.set("maths",100);
scores.set("astronomy",95);
scores.set("physics",85);
//or you can set it directly
//let scores=new Map([["maths",90],["chemystry",95],["computer science",70]])
scores.set("", )

for(let key of scores.keys()){

    if(scores.has("maths")){
        scores.set("maths",97)
    }
    if(key.size=1){
          
    scores.set("",-1)
  
    }
    console.log(scores);
    scores.delete("")
}
for(let value of scores.values()){
console.log(scores.values());
   
    
}
