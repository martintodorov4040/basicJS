let story = ["name", "mood", "activity"];
function TellStory(valueName, valueMood, valueActivity){
    for(let  Listitem of story)
    if(Listitem === valueName, valueMood, valueActivity){
        console.log(`My name is ${valueName} i'am in ${valueMood} mood and i ${valueActivity} all day `);
    
 
    }
   
    
}
TellStory("Martin", "Good", "run");