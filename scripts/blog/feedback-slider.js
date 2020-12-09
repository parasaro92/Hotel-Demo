
var feedbackArray = [
    '"I recently spent the night in the Premium room. The quality of the interior and the view seen outside from the window have convinced me to return again soon!"',
    '"Good relaxing break! Friendly, welcoming staff. Very good location for city centre and local transport. Overall an enjoyable stay!"',
    '"Thank you for this experience! Amazing friendly staff and clean rooms. The breakfast is tasty as well. Also thank you for making for my Mother an early breakfast take away! We surely Will Come back to your hotel!"'
];

var lowerLimit = 0;
var upperLimit = feedbackArray.length - 1;

//setInterval('changeImage(-1)',1000)
function changeFeedback(direction) {
    lowerLimit = lowerLimit + direction;
    if (lowerLimit > upperLimit) {
        lowerLimit = 0;
    }
    if (lowerLimit < 0) {
        lowerLimit = upperLimit;
    }
    console.log(feedbackArray);
    document.getElementById('feedbackslider').innerHTML = feedbackArray[lowerLimit];
    }

