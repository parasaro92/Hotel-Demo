// Deluxe Room Services

var ds1 = [{
  'img': 'service4.png',
  'title': "No Smoking"
  }, {
  'img': 'service5.png',
  'title': "Bike Rental"
  }, {
  'img': 'service6.png',
  'title': "Swimming Pool"
  }, {
  'img': 'service7.png',
  'title': "King Beds"
  }
]

result = '';
for(s in ds1){
  result += '<div class="room_help"><img src="../images/rooms/' + ds1[s].img + '"alt="" width="25" ><p>' + ds1[s].title + '</p></div>';
}

document.getElementById('setting').innerHTML = result

// Refund Policies
var ds2 = [{
  'refund1': 'Refund before 5 Days -',
  'refund2': "Request Refund before 5 Days and you will get 80 % back as a refund of the order."
  }, {
  'refund1': 'Refund before 10 days -',
  'refund2': "Request a Refund before 10 Days and you will get 70 % back as a refund of the order."
  }, {
  'refund1': 'Refund before 15 Days -',
  'refund2': "Request a Refund before 15 Days and you will get 60 % back as a refund of the order."
  }, {
  'refund1': 'Refund before 20 Days -',
  'refund2': "Request a Refund before 20 Days and you will get 50 % back as a refund of the order."
  }
]

result = '';
for(s in ds2){
  result += '<div class="hotel_refund"><i class="circle-small">o</i><b>' + ds2[s].refund1 + '</b>'+ ds2[s].refund2 + '</div>';
}

document.getElementById('refund_info').innerHTML = result

// Hotel Features
var features = [{
  'name': 'Business Services'
  }, {
  'name': 'Business Center'
  }, {
  'name': 'Board room'
  }, {
  'name': 'Fax Machine'
  }, {
  'name': 'Internet Access'
  }, {
  'name': 'Complementry'
  }, {
  'name': 'Transfer Available'
  }, {
  'name': 'Welcome Drinks'
  }, {
  'name': 'DiscoTheatre'
  }, {
  'name': 'Casino'
  }, {
  'name': 'Amphitheatre'
  }, {
  'name': 'Mini Theatre'
  }
]

result = '';
for(s in features){
  result += '<div class="hotel_services"><i class="circle-small">o</i>'+ features[s].name + '</div>';
}

document.getElementById('room_info_content').innerHTML = result

// Room Services
var room_info = [{
  'img': 'service1.svg',
  'title': "2 Guests"
  }, {
  'img': 'service2.svg',
  'title': "50 ft"
  }, {
  'img': 'service3.svg',
  'title': "100 $ / per night"
  }
]

result = '';
for(s in room_info){
  result += '<div class="service-help"><img width="40" src="../images/rooms/'+ room_info[s].img +'" alt=""><p class="pad10 secondary">'+ room_info[s].title + '</p></div>';
}

document.getElementById('room_info').innerHTML = result