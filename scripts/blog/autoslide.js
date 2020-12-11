var myImagesArray = ["../images/blog/hotel2.jpg", "../images/blog/hotel.jpg", "../images/blog/hotel3.jpg", "../images/blog/hotel4.jpg"];
var premiumImagesArray = ["../images/rooms/premium/premium1.jpg", "../images/rooms/premium/premium2.jpg", "../images/rooms/premium/premium3.jpg", "../images/rooms/premium/premium2.jpg"];

var ImageNumber = 0;
var difference = myImagesArray.length - 1;

var delay = 5000;

setInterval("ChangeImages(-1)", delay);

function ChangeImages(direction) {

    ImageNumber = ImageNumber + direction;

    if (ImageNumber > difference) {
        ImageNumber = 0;
    }

    if (ImageNumber < 0) {
        ImageNumber = difference;
    }

    if (document.getElementById('slideshow') != null) {
        document.getElementById('slideshow').src = myImagesArray[ImageNumber];
    }

    if (document.getElementById('premiumslideshow') != null) {
        document.getElementById('premiumslideshow').src = premiumImagesArray[ImageNumber];
    }
}