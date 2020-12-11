

var myImageArray = [

  '../images/event/meeting-room-with-a-view-of-dtla.jpg',
  '../images/event/Conference-Room-Etiquettes.jpg',
  '../images/event/conference_room_2020.jpg'
];

//Code for image slider
var lowerLimit = 0;
var upperLimit = myImageArray.length - 1;

setInterval('plusSlides(-1)', 3000);

function plusSlides(direction) {
  lowerLimit = lowerLimit + direction;
  if (lowerLimit > upperLimit) {
    lowerLimit = 0;
  }
  if (lowerLimit < 0) {
    lowerLimit = upperLimit;
  }
  document.getElementById('myimage1').src = myImageArray[lowerLimit];
}

document.getElementById('test').innerHTML = 'Planning an Event?';


// Code for validating form and submitting
function validateForm() {
  let fullname = document.querySelector('#fullname');


  if (fullname.value == "" || phone.value == "" || email.value == "" || room_book.value == "" || visitors.value == "" || eventspace.value == "") {

    if (fullname.value == "") {
      fullname.nextElementSibling.innerHTML = "please enter fullname";
    } else {
      fullname.nextElementSibling.innerHTML = "";
    }



    let phone = document.querySelector('#phone');

    if (phone.value == "") {
      phone.nextElementSibling.innerHTML = "please enter mobile number";
    } else {
      phone.nextElementSibling.innerHTML = "";
    }


    let email = document.querySelector('#email');

    if(email.value == ""){
      email.nextElementSibling.innerHTML = "please enter email address";
    } else {
      email.nextElementSibling.innerHTML = "";
    }

    let room_book = document.querySelector('#room_book');

    if(room_book.value == ""){
      room_book.nextElementSibling.innerHTML = "please enter preferred date";
    } else {
      room_book.nextElementSibling.innerHTML = "";
    }


    let visitors = document.querySelector('#guest');

    if (visitors.value == "") {
      visitors.nextElementSibling.innerHTML = "please enter number of guests";
    } else {
      visitors.nextElementSibling.innerHTML = "";
    }

    let eventspace = document.querySelector('#eventspace');

    if (eventspace.value == "") {
      eventspace.nextElementSibling.innerHTML = "please enter chosen facility";
      return false
    } else {
      eventspace.nextElementSibling.innerHTML = "";
    }
  }

  return true;
}

