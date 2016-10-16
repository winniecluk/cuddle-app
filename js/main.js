
// ask specifically for advice about
// - organization
// - how to name things
// - further generalization of code

//firstChild - property
//nodeValue
//preventDefault();

// data
window.onload = function() {
var questions;
var choices;
var responses;
var images;
var counter = 0;
var clientResponses = [];

// understand do while loops
// what does the below do?
//   if (counter++){
//   console.log(counter);
// }

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
"Wouldn't you rather do something more interesting? ;)",
"I want to go try that Aussie meat pie place in Westwood. Care to join?",
"Your face looks like a blueberry pie. Mmm, blueberries.",
"Ohohohoho. I really hope what you just said was a joke."];

  // image links
  // this should have been a nested array to make it easier to manipulate, but I want to practice with
  // an array of objects

  // can hotlink in view but not in js file
  // if it's being loaded in index, we're counting from index, not main.js?
images = [
  {
    image1: "images/couch.png",
    image2: "images/floor.jpg",
    image3: "images/bed.png"
  },
  {
    image1: "images/cheezit.png",
    image2: "images/doritos.png",
    image3: "images/vegetables.jpg"
  },
  {
    image1: "",
    image2: "",
    image3: ""
  },
  {
    saying: "That is the wrong answer. Try again, darling :)"
  }
];

// create array of imgNodes
var imgNodeArr = images.map(function(obj, idx, arr){
  rObj = {};
  for (var i = 0; i < Object.keys(obj).length; i++) {
    var imgNode = document.createElement('img');
    imgNode.setAttribute('src', obj["image" + (i + 1)]);
    rObj["image" + (i + 1)] = imgNode;
  }
  return rObj;
});

// imgNodeArr.forEach(function(el, idx, arr){
//   for (var i = 0; i < Object.keys(el).length; i++){
//     el['image' + (i + 1)].setAttribute('class', 'turn' + (i + 1));
//   }

// function insertClass(arr){
//   for (var i = 0; i < arr.length; i++){
//     for (var j = 0; j < Object.keys(arr[0]).length; j++){
//       arr[i]["image" + (j + 1)].setAttribute('class', 'turn' + i);
//     }
//   }
// }

function insertClass(arr){
  for (var i = 0; i < Object.keys(arr[0]).length; i++){
    arr[0]["image" + (i + 1)].setAttribute('class', 'turn1');
  }
  for (var i = 0; i < Object.keys(arr[1]).length; i++){
    arr[1]["image" + (i + 1)].setAttribute('class', 'turn2');
  }
  for (var i = 0; i < Object.keys(arr[2]).length; i++){
    arr[2]["image" + (i + 1)].setAttribute('class', 'turn3');
  }
}

insertClass(imgNodeArr);

  // for first obj, set one class
  // for second object, set diff class
  // for third object, set third class


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



// routes

startButton.addEventListener('click', transition);

choice1.addEventListener('click', makeChoice1);
choice2.addEventListener('click', makeChoice2);
choice3.addEventListener('click', makeChoice3);

document.addEventListener('click', submitData);
document.addEventListener('keypress', submitDataWithKeypress);

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
    afterInputData();
  }
}

function submitDataWithKeypress(evt){
  if (evt.keyCode == 13){
    afterInputData();
  }
}

function afterInputData(){
  clientResponses.push(document.querySelector('#input-text').value);
  makeRandomResponseAppear();
}

function transition(evt){
  questionAndAnswer(questionAppear, answerAppear, clearOutput, counter);
}

function makeChoice1(evt){
  if (counter == 0){
    questionAndAnswer(questionAppear, answerAppear, displayImage1, counter + 1);
    counter++;
  } else if (counter == 1){
    questionAndAnswer(questionAppear, answerAppear, displayImage1, counter + 1);
    counter++;
  } else if (counter == 2){
    questionAndAnswer(questionAppear, answerDisappear, displayImage2, counter + 1);
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
    questionAndAnswer(questionAppear, answerDisappear, displayImage2, counter + 1);
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
    // remember what I learned about parameters by doing this -- how do you write functions with optional parameters?
    //  remember that rn, when I try putting in an additional argument (e.g., four arguments in a function defined w/ 3 parameters), the function just ignores the fourth argument -- it doesn't exist
    // if I write a function that takes 5 callbacks/arguments, but in some instances of using the function, I only need 4 and need it to run without breaking, I can just pass in a useless argument/callback -- like a console.log
    // remember -- you can't pass in fewer than the number of arguments already defined in a function YOU wrote, but you can pass in more -- however, passing in more is useless/pointless
    // questionAndAnswer(howDareYouChooseParis, answerDisappear, displayImage3, counter + 1);
    // addInputBox();
    // counter++;
    howDareYouChooseParis();
    choice3.removeEventListener('click', makeChoice3);
  }
}

function howDareYouChooseParis(responses){
  createParisNode(images);
  // how do they not have insertAfter? I guess appendChild is insertAfter
  // why does appending a textNode to parisDiv make it a node all of a sudden?
  questionWindow.appendChild(parisDiv);
}

function createParisNode(arr){
  var idx = arr.length - 1;
  var lastObject = arr[idx];
  var keyArr = Object.keys(lastObject);
  // I could have just done [0] -- there's only one key/value pair, and I would probably append k/v pairs to that object, not prepend -- but I wanted the challenge of retrieving the last key/value pair from the last object of an array
  textNode = document.createTextNode(lastObject[keyArr[keyArr.length - 1]]);
  // you CANNOT appendChild parisDiv -- you can only appendChild nodes and <img> -- add node as a last child of parent node
  parisDiv = document.createElement('div');
  // you have to appendChild textNode -- that's all I can do w/ nodes rn
  parisDiv.appendChild(textNode);
}

// is there an object.length?

function answerDisappear(){
  answerWindow.innerHTML = '';
}

function questionAndAnswer(cb1, cb2, cb3display, idx){
  cb1(idx);
  cb2(idx);
  cb3display(idx - 1);
}

//this displays image1 for all choice1 answers
function displayImage1(idx){
  outputWindow.appendChild(imgNodeArr[idx].image1);
}

// this displays image2 for all choice2 answers
function displayImage2(idx){
  outputWindow.appendChild(imgNodeArr[idx].image2);
}

// this displays image3 for all choice3 answers
function displayImage3(idx){
  outputWindow.appendChild(imgNodeArr[idx].image3);
}

function clearOutput(){
  outputWindow.innerHTML = "";
}

function makeRandomResponseAppear(){
  questionWindow.innerHTML = randomResponse(getRandomNumber, responses);
}

// this blows out the answer window every turn
function answerAppear(idx){
  choice1.innerHTML = choices[idx].item1;
  choice2.innerHTML = choices[idx].item2;
  choice3.innerHTML = choices[idx].item3;
}



function randomResponse(cb, arr){
  var idx = cb(arr);
  return 'Winnie replies, "' + responses[idx] + '"';
}

// below is broken
function getRandomNumber(arr){
  return Math.floor(Math.random() * arr.length);
}

// Make question pop up
function questionAppear(idx){
  questionWindow.innerHTML = questions[idx];
}

// what it says on the tin
function createInputBox(){
  var inputField = document.querySelector('#input');
  clone = document.importNode(inputField.content, true);
}

// scope -- does not seem to matter if I call the function in global or inside another fnction -- clone still not available
  // createInputBox();

function addInputBox(){
  createInputBox();
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
