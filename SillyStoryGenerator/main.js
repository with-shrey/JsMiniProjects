var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var storyDiv = document.querySelector('.story');

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

var insertX = [
'Willy the Goblin',
'Big Daddy',
'Father Christmas'

]

var insertY = [
'the soup kitchen',
'Disneyland',
'the White House',
]

var insertZ = [
'spontaneously combusted',
'melted into a puddle on the sidewalk',
'turned into a slug and crawled away',
]

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

randomize.addEventListener('click', result);

function result() {
	var story = storyText;
	var itemX = randomValueFromArray(insertX);
	var itemY = randomValueFromArray(insertY);
	var itemZ = randomValueFromArray(insertZ);

	story = story.replace(':insertx:',itemX);
	story = story.replace(':insertx:',itemX);
	story = story.replace(':inserty:',itemY);
	story = story.replace(':insertz:',itemZ);

  if(customName.value !== '') {
    var name = customName.value;
    story = story.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300/14) + ' stone';
    var temperature =  Math.round((94 - 32) * 5/9) + ' centigrade';
    story = story.replace('94 fahrenheit',temperature);
	story = story.replace('300 pounds',weight);

  }

  storyDiv.textContent = story;
  storyDiv.style.visibility = 'visible';
}