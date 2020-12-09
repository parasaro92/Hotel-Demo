// Room section heading

var room_list = [{'heading': 'Our Rooms', 'title': 'Families travelling with kids will find Amboseli national park a safari destination matched to no other, with less tourist traffic, breathtaking open space.'}]

result = '';
for(s in room_list){
  result += '<p class="tm-block" id="display">' + room_list[s].heading + '</p><p class="tm-desc">' + room_list[s].title + "</p>";
}
document.getElementById('our_rooms').innerHTML = result

// Types of Rooms

var rooms = [
  {
    feature1: '2 Bed',
    feature2: 'Complimentary liquor',
    feature3: 'Free Wifi',
    price: '$ 1999.99',
    img: 'luxury.png',
    room: 'Pool Suite',
    details: './deluxe-room.html'
  },
  {
    feature1: '2 Bed',
    feature2: 'Luxorious interior',
    feature3: 'Free Wifi',
    price: '$ 1599.99',
    img: 'delux.png',
    room: 'Deluxe Suite',
    details: './deluxe-room.html'
  }
]

result = '';
for(room in rooms){
  result += '<div class="tm-room1 tm-room2"><div class="tm-trans"><div><p>' + rooms[room].feature1 + '</p><p>' + rooms[room].feature2 + '</p><p>' + rooms[room].feature3 + '</p></div><div><p>Only for</p><p class="bold">' + rooms[room].price + '</p></div></div><img class="tm-roomimage " src="../images/rooms/' + rooms[room].img + '"><div class="room-book"><p class="s">' + rooms[room].room + '</p><a class="btn btn-default button custom_btn" href="' + rooms[room].details + '"><span>more details</span></a></div></div>';
}
document.getElementById('tm_roomsection').innerHTML = result

var rooms2 = [
  {
    feature1: '1 Bed',
    feature2: 'Fresh Towels',
    feature3: 'Less costly',
    price: '$ 399.99',
    img: 'deluxroom.png',
    room: 'Delux Room',
    details: './deluxe-room.html'
  },
  {
    feature1: '2 Bed',
    feature2: 'Luxorious interior',
    feature3: 'Less costly',
    price: '$ 599.99',
    img: 'premiumroom.png',
    room: 'Premium Room',
    details: './premium-room.html'
  }
]

result = '';
for(room in rooms2){
  result += '<div class="tm-room1 tm-room2"><div class="tm-trans"><div><p>' + rooms2[room].feature1 + '</p><p>' + rooms2[room].feature2 + '</p><p>' + rooms2[room].feature3 + '</p></div><div><p>Only for</p><p class="bold">' + rooms2[room].price + '</p></div></div><img class="tm-roomimage " src="../images/rooms/' + rooms2[room].img + '"><div class="room-book"><p class="s">' + rooms2[room].room + '</p><a class="btn btn-default button custom_btn" href="' + rooms2[room].details + '"><span>more details</span></a></div></div>';
}
document.getElementById('tm_roomsection2').innerHTML = result


// Service section

var list = [{'heading': 'Our Services', 'title': 'Families travelling with kids will find Amboseli national park a safari destination matched to no other, with less tourist traffic, breathtaking open space.'}]

result = '';
for(s in list){
  result += '<p class="tm-block" id="display">' + list[s].heading + '</p><p class="tm-desc">' + list[s].title + "</p>";
}
document.getElementById('tm-heading').innerHTML = result

var services = [{
  'img': 'bell.png',
  'title': "Room Service",
  'desc': 'Enjoy your stay with excellent and timely room service'
  }, {
  'img': 'coffee.png',
  'title': "Free Breakfast",
  'desc': "Enjoy Free breakfast every morning"
  }
]
var services1 = [{
  'img': 'spa.png',
  'title': "Free Parking",
  'desc': "No need to pay any extra charges to park your vehicle"
  }, {
  'img': 'car-front.png',
  'title': "Free Spa",
  'desc': "Relax at the inhouse Spa once every day of your stay"
  }
]

result = '';
for(s in services){
  result += '<div class="tm-service" id="tm-service"><img class="tm-image" src="../images/rooms/' + services[s].img + '">';
  result += '<div class="tm-services"><p class="b">' + services[s].title + '</p><p>' + services[s].desc + '</p></div></div>';
}

document.getElementById('tm-facility').innerHTML = result

result = '';
for(s in services1){
  result += '<div class="tm-service" id="tm-service"><img class="tm-image" src="../images/rooms/' + services1[s].img + '">';
  result += '<div class="tm-services"><p class="b">' + services1[s].title + '</p><p>' + services1[s].desc + '</p></div></div>';
}
document.getElementById('tm-facility1').innerHTML = result