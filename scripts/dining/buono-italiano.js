//
// For image banner
//
// Declaring an array of images
var imageArray = ["../images/dining/italian1_1.jpg", "../images/dining/italian1_2.jpg", "../images/dining/italian1_3.jpg", "../images/dining/italian1_4.jpg", "../images/dining/italian1_5.jpg", "../images/dining/italian1_6.jpg"];
//Automatic slider for images
var imgNumber = 0;
var topLimit = imageArray.length - 1;
//milliseconds    1sec=1000milliseconds
var delay = 2500; 

//-1 to show the slide backwards
//1 to show the slide forwards
setInterval("ChangeImages(-1)", delay);

function ChangeImages(direction)
{
    imgNumber = imgNumber + direction;
    if(imgNumber > topLimit)
    {
        imgNumber = 0;
    }

    if(imgNumber < 0)
    {
        imgNumber = topLimit;
    }
    document.getElementById('slideshow').src = imageArray[imgNumber];
}



//
// For menu items
//
//MenuImage
function showHideMenu(){
    //variable to hold an element
    let x = document.getElementById("menuImages");
    
    //variable to hold src attributes value
    let y = document.getElementById("menuImagesItem").getAttribute("src");

    //if image is not visible, make it visible
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("menuImagesItem").setAttribute("src", "../images/dining/italian2.jpg");
        window.location='#menuImages';
    }
    //if drinks menu is visible, hide that and show eatables menu
    else if( x.style.display === "block" && y === "../images/dining/wine2.jpg" ){
        document.getElementById("menuImagesItem").setAttribute("src", "../images/dining/italian2.jpg");
        //Jumps to a div in webpage
        window.location='#menuImages';
    }
    //if eatables menu is visible, hide it
    else{
        x.style.display = "none";
    }
}

//DrinksImage
function showHideDrinks(){
    //variable to hold an element
    let x = document.getElementById("menuImages");
    
    //variable to hold src attributes value
    let y = document.getElementById("menuImagesItem").getAttribute("src");
    
    //if image is not visible, make it visible
    if (x.style.display === "none") {
        x.style.display = "block";
        document.getElementById("menuImagesItem").setAttribute("src", "../images/dining/wine2.jpg");
        //Jumps to a div in webpage
        window.location='#menuImages';
    }
    //if eatables menu is visible, hide that and show drinks menu
    else if( x.style.display === "block" && y === "../images/dining/italian2.jpg" ){
        document.getElementById("menuImagesItem").setAttribute("src", "../images/dining/wine2.jpg");
        window.location='#menuImages';
    }
    //if drinks menu is visible, hide it
    else{
        x.style.display = "none";
    }
}