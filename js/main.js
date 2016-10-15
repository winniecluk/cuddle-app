// data
window.onload = function() {
var questions;
var choices;
var responses;
var images;

  // Questions
questions = ["Where would you like to cuddle?",
"What would you like to snack on while you cuddle?",
"Who would you like to cuddle with?",
"What do you want to say to her?"];

  // Choices
choices = [
  {
    item1: "on the couch",
    item2: "on the floor",
    item3: "on the bed (ohohohoho)"
  },
  {
    item1: "Cheezits",
    item2: "Doritos",
    item3: "fruit and vegetable plate -- I'm healthy!"
  },
  {
    item1: "Winnie",
    item2: "Winnie (hint: there might be a reason why I appear more than once)",
    item3: "Paris Hilton"
  },
];

  // Responses from Winnie
responses = ["That's nice, dear. Why don't you go eat some pie?",
"How could you say that to me with a straight face?",
"Wouldn't you rather do something more interesting? ;)"];

  // image links
images = [
  {
    placeImage1: "link",
    placeImage2: "link2",
    placeImage3: "link3"
  },
  {
    snackImage1: "link",
    snackImage2: "link2",
    snackmage3: "link3"
  },
  {
    personImage1: "link",
    personImage2: "link",
    personImage3: "link"
  }
];

// controller
  // when you click on Cuddle With Me button
  // Cuddle with me button will be replaced by next button
  // question 1 will pop up
  // three choices will pop up


// once I have window.onload, these variables are no longer available in the console
  // eventlistener, will run function that makes everything disappear and question 1 pop up
var startButton = document.querySelector('#start-button');
var questionWindow = document.querySelector('.question-window');
var outputWindow = document.querySelector('.output-window');
var buttonWindow = document.querySelector('.button-window');
var answerWindow = document.querySelector('.answer-window');
var question1Choices = document.querySelector('#question1choices');


// new elements
var nextButton = document.createElement('button');
var nextText = document.createTextNode('Next');
nextButton.appendChild(nextText);

startButton.addEventListener('click', transition);

// this function inserts the next button into the page. it will only be run once
function transition(evt){
  questionAppear(0);
  changeStartButton();
  insertChoices(question1Choices, 0);
}

// this function makes the Start button in the button window disappear and the next button reappear. This will only happen once
function changeStartButton(){
  buttonWindow.innerHTML = '';
  buttonWindow.appendChild(nextButton);
}

  // make question 1 pop up
function questionAppear(idx){
  questionWindow.innerHTML = questions[idx];
}

// if I didn't have window.onload, this would be null instead of returning a document-fragment
// function insertChoices(){
//   // you can create a clone first and then modify the clone and append
//   // or modify the original template and then clone and append the clone
//   // returns array of Nodes (spans)
//   var span = question1Choices.content.querySelectorAll('span');
//   span[0].textContent = choices[0].item1;
//   span[1].textContent = choices[0].item2;
//   span[2].textContent = choices[0].item3;
//   // importNode creates copy of node from possibly external doc that can be inserted into current doc
//   var clone = document.importNode(question1Choices.content, true);
//   answerWindow.appendChild(clone);
// }

function insertChoices(templateID, idx){
  var span = templateID.content.querySelectorAll('span');
  // for (var i = 0; i < span.length; i++)
  span[0].textContent = choices[idx].item1;
  span[1].textContent = choices[idx].item2;
  span[2].textContent = choices[idx].item3;
  var clone = document.importNode(templateID.content, true);
  answerWindow.appendChild(clone);
}



}; //onload

  // you get asked question 1 about places
  // answer1 will produce placeImage1, answer 2 will produce placeImage2, etc.
  // where question 1 used to be, now question 2 will appear


  // question 2 about snacks
  // answer1 will produce snackImage1, answer2 will produce snackImage2, etc.

  // question3 about the person, answers1and2 will produce that image, no answer etc.

  // question 4 is not linked to anything

// Document.createElement creates a HTML element specified by tag name
// Document.createElement('div')
// document.createTextNode('text here')
//
// appendChild appends a child element
// div.appendChild(whatever)

// getElementById
// insertBefore(newDiv, current)
// insert new Div before current div
