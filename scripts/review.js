document.getElementById('issueInputForm').addEventListener('submit', saveReview);
var some = document.getElementsByClassName('stars-inner');

// Creating a dummy review in the local storage
if (localStorage.getItem('issues') == null) {
  var issues = [];
  issue = {
    "description": "I have come for my celebrating my wedding anniversary. The arrangements are good in the room!",
    "title": "Excellent",
    "name": "Paras Arora",
    "rating": "4"
  }
  issues.push(issue);
  localStorage.setItem('issues', JSON.stringify(issues));
}

// Addition of a review by user
function saveReview(e) {
  var reviewDesc = document.getElementById('issueDescInput').value;
  var reviewSeverity = document.getElementById('issueSeverityInput').value;
  var reviewAssignedTo = document.getElementById('issueNameInput').value;
  var reviewTitle = document.getElementById('issueEmailInput').value;

  var issue = {
    title: reviewTitle,
    description: reviewDesc,
    rating: reviewSeverity,
    name: reviewAssignedTo
  }

  // var issues = JSON.parse(localStorage.getItem('issues'));
  issues.push(issue);
  localStorage.setItem('issues', JSON.stringify(issues));
  document.getElementById('issueInputForm').reset();

  fetchReviews();
  e.preventDefault();
}

// Initiating the listing of reviews call
fetchReviews()

function fetchReviews() {
  var issues = JSON.parse(localStorage.getItem('issues'));
  issuesList.innerHTML = ''

  const starTotal = 5;
  for (var i = 0; i < issues.length; i++) {
    var desc = issues[i].description;
    var rating = issues[i].rating;
    var name = issues[i].name;
    var title = issues[i].title;

    // Calculation of rating system into star icons
    const starPercentage = (rating / starTotal) * 100;
    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)}%`;
    document.querySelector(`.stars-inner`).style.width = starPercentageRounded;
    document.querySelector(`.stars-outer`).style.display = 'none';

    issuesList.innerHTML +=   '<div class="well">'+
                              '<div class="review-heading"><div><span class="fa fa-3x fa-user-circle"></span><p class="review-title"> ' + name + '</p></div><div class="stars-outer"> <div class="stars-inner" style='+ 'width:' + starPercentageRounded +'></div></div></div>'+
                              '<h2 class="well-heading"><span class="label label-info">' + title + '</span></h2>'+
                              '<h3>' + desc + '</h3>'
                              '</div>';
  }
}