// Creating a dummy review in the local storage
if (localStorage.getItem('reviews') == null) {
  var reviews = [];
  review = {
    "description": "I have come for my celebrating my wedding anniversary. The arrangements are good in the room!",
    "title": "Excellent",
    "name": "Paras Arora",
    "rating": "4"
  }
  reviews.push(review);
  localStorage.setItem('reviews', JSON.stringify(reviews));
}

window.onload = function() {
  document.getElementById('register').onclick = saveReview;
}

// Addition of a review by user
function saveReview(e) {

  // Validation check
  let validateDesc = document.querySelector('#issueDescInput');
  let validateName = document.querySelector('#issueNameInput');
  let validateTitle = document.querySelector('#issueEmailInput');

  if (validateTitle.value == "" || validateDesc.value == "" || validateName.value == "") {
    if (validateTitle.value == "") {
      validateTitle.nextElementSibling.innerHTML = "Please enter title of the review";
    } else {
      validateTitle.nextElementSibling.innerHTML = "";  
    }
    if (validateName.value == "") {
      validateName.nextElementSibling.innerHTML = "Please enter your full name";
    } else {
      validateName.nextElementSibling.innerHTML = "";  
    }
    if (validateDesc.value == "") {
      validateDesc.nextElementSibling.innerHTML = "Please enter your review";
    } else {
      validateDesc.nextElementSibling.innerHTML = "";  
    }
  } else {
    validateTitle.nextElementSibling.innerHTML = "";
    validateName.nextElementSibling.innerHTML = "";
    validateDesc.nextElementSibling.innerHTML = "";
    var reviewDesc = document.getElementById('issueDescInput').value;
    var reviewSeverity = document.getElementById('issueSeverityInput').value;
    var reviewAssignedTo = document.getElementById('issueNameInput').value;
    var reviewTitle = document.getElementById('issueEmailInput').value;
  
    var review = {
      title: reviewTitle,
      description: reviewDesc,
      rating: reviewSeverity,
      name: reviewAssignedTo
    }
  
    var reviews = JSON.parse(localStorage.getItem('reviews'));
    reviews.push(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    document.getElementById('issueInputForm').reset();
  
    fetchReviews();
    e.preventDefault();
  }

}

// Initiating the listing of reviews call
fetchReviews()

function fetchReviews() {
  var reviews = JSON.parse(localStorage.getItem('reviews'));
  reviewsList.innerHTML = ''

  const starTotal = 5;
  for (var i = 0; i < reviews.length; i++) {
    var desc = reviews[i].description;
    var rating = reviews[i].rating;
    var name = reviews[i].name;
    var title = reviews[i].title;

    // Calculation of rating system into star icons
    const starPercentage = (rating / starTotal) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;

    reviewsList.innerHTML +=   '<div class="well">'+
                              '<div class="review-heading"><div><span class="fa fa-3x fa-user-circle"></span><p class="review-title"> ' + name + '</p></div><div class="stars-outer"> <div class="stars-inner" style='+ 'width:' + starPercentageRounded +'></div></div></div>'+
                              '<h2 class="well-heading"><span class="label label-info">' + title + '</span></h2>'+
                              '<h3>' + desc + '</h3>'
                              '</div>';
  }
}