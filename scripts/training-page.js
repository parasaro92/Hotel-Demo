

var myImageArray = [
  
  '../images/event/meeting-room-with-a-view-of-dtla.jpg',
  '../images/event/Conference-Room-Etiquettes.jpg',
  '../images/event/conference_room_2020.jpg'
];

//Code for image slider
var lowerLimit = 0;
var upperLimit = myImageArray.length - 1;

setInterval('plusSlides(-1)',1500);

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