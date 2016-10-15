// ask specifically for advice about
// - organization
// - how to name things
// - further generalization of code

// data
window.onload = function() {
var questions;
var choices;
var responses;
var images;
var counter = 0;
var clientResponses = [];

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
    image1: "image1",
    image2: "image2",
    image3: "image3"
  },
  {
    image1: "image1",
    image2: "image2",
    image3: "image3"
  },
  {
    image1: "image1",
    image2: "image2",
    image3: "image3"
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
var outputWindow = document.querySelector('.output-window');
var questionWindow = document.querySelector('.question-window');
var answerWindow = document.querySelector('.answer-window');
var choice1 = document.querySelector('#choice1');
var choice2 = document.querySelector('#choice2');
var choice3 = document.querySelector('#choice3');

// new elements

startButton.addEventListener('click', transition);

choice1.addEventListener('click', makeChoice1);
choice2.addEventListener('click', makeChoice2);
choice3.addEventListener('click', makeChoice3);

document.addEventListener('click', submitData);
// this function inserts the next button into the page. it will only be run once
// can I modify a built-in callback so that it accepts another parameter? no, most likely not

// why does it only register once
// I don't think I completely understand evt listeners
// function console(evt){
//   console.log('hey');
// }


function submitData(evt){
  var el = evt.target;
  if (el.id == 'submit'){
    console.log('submitted');
  }
  // display response
  console.log(evt);
}


function transition(evt){
  questionAppear(0);
  answerAppear(0);
}

function makeChoice1(evt){
  if (counter == 0){
    questionAndAnswer(questionAppear, answerAppear, displayImage1, counter + 1);
    counter++;
  } else if (counter == 1){
    questionAndAnswer(questionAppear, answerAppear, displayImage1, counter + 1);
    counter++;
  } else if (counter == 2){
    displayImage1(2);
    questionAppear(3);
    addInputBox();
    counter++;
  }
}

function makeChoice2(evt){
  if (counter == 0){
    questionAndAnswer(questionAppear, answerAppear, displayImage2, counter + 1);
    counter++;
  } else if (counter == 1){
    questionAndAnswer(questionAppear, answerAppear, displayImage2, counter + 1);
    counter++;
  } else if (counter == 2){
    displayImage2(2);
    questionAppear(3);
    addInputBox();
    counter++;
  }
}

function makeChoice3(evt){
  if (counter == 0){
    questionAndAnswer(questionAppear, answerAppear, displayImage3, counter + 1);
    counter++;
  } else if (counter == 1){
    questionAndAnswer(questionAppear, answerAppear, displayImage3, counter + 1);
    counter++;
  } else if (counter == 2){
    displayImage3(2);
    questionAppear(3);
    addInputBox();
    counter++;
  }
}


function questionAndAnswer(cb1, cb2, cb3, idx){
  cb1(idx);
  cb2(idx);
  cb3(idx - 1);
}

//this displays image1 for all choice1 answers
function displayImage1(idx){
  outputWindow.innerHTML = images[idx].image1;
}

// this displays image2 for all choice2 answers
function displayImage2(idx){
  outputWindow.innerHTML = images[idx].image2;
}

// this displays image3 for all choice2 answers
function displayImage3(idx){
  outputWindow.innerHTML = images[idx].image3;
}

// this blows out the answer window every turn
function answerAppear(idx){
  choice1.innerHTML = choices[idx].item1;
  choice2.innerHTML = choices[idx].item2;
  choice3.innerHTML = choices[idx].item3;
}

// Make question pop up
function questionAppear(idx){
  questionWindow.innerHTML = questions[idx];
}

// what it says on the tin
function addInputBox(){
  var inputField = document.querySelector('#input');
  var clone = document.importNode(inputField.content, true);
  console.log(inputField);
  questionWindow.appendChild(clone);
}

}; //onload


// function insertChoices(templateID, idx){
//   var span = templateID.content.querySelectorAll('span');
//   // for (var i = 0; i < span.length; i++)
//   span[0].textContent = choices[idx].item1;
//   span[1].textContent = choices[idx].item2;
//   span[2].textContent = choices[idx].item3;
//   // ask someone -- should I make the below a callback?
//   var clone = document.importNode(templateID.content, true);
//   answerWindow.appendChild(clone);
// }

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

// var nextButton = document.createElement('button');
// var nextText = document.createTextNode('Next');
// nextButton.appendChild(nextText);
// nextButton.setAttribute('id', 'next');

// how do I iterate over variable names
// function changeAttrNextButton(num){
//   nextButton.setAttribute('id', 'next' + num);
//   next1Button = document.querySelector('#next' + num);
//   // this is bad. how do I get out of this? promise?
//   next1Button.addEventListener('click', transition2);
// }



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
