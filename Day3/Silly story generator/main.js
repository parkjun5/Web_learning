const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText ="It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";



const insertX = [ "Willy the Goblin",
                "Big Daddy",
                "Father Christmas"];
const insertY = [ "the soup kitchen",
                "Disneyland",
                "the White House"];

const insertZ = ["spontaneously combusted",
                "melted into a puddle on the sidewalk",
                 "turned into a slug and crawled away"]

randomize.addEventListener('click', result);

function result() {
//    let storyArr = storyText.split(" ");
    let newStory = storyText;
    let ranX = randomValueFromArray(insertX);
    let ranY = randomValueFromArray(insertY);
    let ranZ = randomValueFromArray(insertZ);
    
  if(customName.value !== '') {
    let name = customName.value;
    storyArr[storyArr.indexOf("Bob")] = name
  }
    
  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/2.204622621849);
      
   
    let temperature =  Math.round((94-32) *5/9);

      newStory  =newStory.replace('fahrenheit',"temperature" );
      newStory  =newStory.replace('94',String(temperature)+" centigrade" );
      newStory  =newStory.replace('pounds',"weight" );
      newStory  =newStory.replace('300',String(weight)+" stone");
//      storyArr[storyArr.indexOf("fahrenheit")] = "temperature";
//      storyArr[storyArr.indexOf("94")] = String(temperature);
//      storyArr[storyArr.indexOf("pounds")] = "weight";
//      storyArr[storyArr.indexOf("300")] = String(weight);
//      
  };
    
      newStory  =newStory.replace(':insertx:',ranX);
      newStory  =newStory.replace(':inserty:',ranY);
      newStory  =newStory.replace(':insertz:',ranZ);
      newStory  =newStory.replace(':insertx:',ranX);
//    storyArr[storyArr.indexOf(":inserty:")].replace(":inserty:", randomValueFromArray(insertY));
//      storyArr[storyArr.indexOf(":insertz:")] = randomValueFromArray(insertZ);
//    while(storyArr.indexOf(":insertx:") != -1){
//         storyArr[storyArr.indexOf(":insertx:")] = randomValueFromArray(insertX);
//    }
////      storyArr[storyArr.indexOf(":insertx:")] = randomValueFromArray(insertX);
//      
//    
  story.textContent = newStory ;
  story.style.visibility = 'visible';
    customName.value ="";
    customName.focus();
};