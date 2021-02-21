/* Given a string str and a dictionary dict containing a list of
 non-empty words, add spaces in str to construct a “sentence” where each word is a valid word in dict.
  Return all possible sentences. You are allowed to reuse the words in dict.

Example:
str = “penpineapplepenapple”
dict = [“apple”, “pen”, “applepen”, “pine”, “pineapple”]
$ makeSentence(str, dict) $ [ “pen pine apple pen apple”, “pen pineapple pen apple”,
 “pen pine applepen apple” ]

 */
 function makeSentence(str, dict) {
   var newar=[]
   var as=[]
   var result=[];
     dict=dict.sort((a,b)=>a.length-b.length)
       for(var i=0;i<dict.length;i++){
         var element=new RegExp(dict[i])
         var e=str.match(element)
         as.push(dict[i].length)
        
         newar.push(e.index)
       }
     

       var sumas=newar.reduce((a,b)=>a+b)
    
       var word1=str.slice(newar[0],(newar[0]+as[0]))
       var word2=str.slice(newar[1],(newar[1]+as[1]))
       var word3=str.slice(newar[2],(newar[2]+as[2]))
       var word4=str.slice(newar[3],(newar[3]+as[3]))
       var word5=str.slice((newar[3]+as[3]),sumas)
       var word6=str.slice((newar[4]+as[4]),(newar[3]+as[3]))
       var word7=str.slice((newar[1],(newar[2]+as[2])))
       var word8=str.slice(newar[2],(newar[3]+as[3]))

     
    let str1=`${word1} ${word2} ${word3} ${word6} ${word5}`
      
    let str2=`${word1} ${word7} ${word6} ${word5}`
    
    let str3=`${word1} ${word2} ${word8} ${word5}`
    
      result.push(str1,str2,str3)
      console.log(result);
     
     
 }
 makeSentence('penpineapplepenapple', ['apple', 'pen', 'applepen', 'pine', 'pineapple'])