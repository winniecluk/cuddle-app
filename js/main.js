// data
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
    place1: "on the couch",
    place2: "on the floor",
    place3: "on the bed (ohohohoho)"
  },
  {
    snack1: "Cheezits",
    snack2: "Doritos",
    snack3: "fruit and vegetable plate -- I'm healthy!"
  },
  {
    person1: "Winnie",
    person2: "Winnie (hint: there might be a reason why I appear more than once)",
    person3: "Paris Hilton"
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
  // question 1 will pop up


  // eventlistener, will run function that makes everything disappear and question 1 pop up
var startButton = document.querySelector('#start-button');
var questionWindow = document.querySelector('.question-window');
var outputWindow = document.querySelector('.output-window');
var buttonWindow = document.querySelector('.button-window');



// new elements
var nextButton = document.createElement('button');
var nextText = document.createTextNode('Next');
nextButton.appendChild(nextText);

startButton.addEventListener('click', changeStartButton);

// this function inserts the next button into the page. it will only be run once
function changeStartButton(evt){
  disappear();
  buttonWindow.appendChild(nextButton);
}

// this function makes the button in the button window disappear
function disappear(){
  buttonWindow.innerHTML = '';
}


  // make question 1 pop up

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
