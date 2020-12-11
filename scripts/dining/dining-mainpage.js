//
// For image in circular shape
//
// Declaring an array of images
var imageArrayItalian = ["../images/dining/italian3_1.jpg", "../images/dining/italian3_2.jpg", "../images/dining/italian3_3.jpg", "../images/dining/italian3_4.jpg"];
var imageArrayIndian = ["../images/dining/indian1_1.jpg", "../images/dining/indian1_2.jpg", "../images/dining/indian1_3.jpg", "../images/dining/indian1_4.jpg"];
var imageArrayBakery = ["../images/dining/bakery2_1.jpeg", "../images/dining/bakery2_2.jpg", "../images/dining/bakery2_3.jpg", "../images/dining/bakery2_4.jpg"];

//Clicking slider function for images
var imgNumber = 0;

//Setting topLimit variable for each array
var topLimitItalian = imageArrayItalian.length - 1;
var topLimitIndian = imageArrayIndian.length - 1;
var topLimitBakery = imageArrayBakery.length - 1;

//For italian dining
function changeImagesItalian(direction)
{
    imgNumber = imgNumber + direction;
    if(imgNumber > topLimitItalian)
    {
        imgNumber = 0;
    }

    if(imgNumber < 0)
    {
        imgNumber = topLimitItalian;
    }
    document.getElementById('slideshowItalian').src = imageArrayItalian[imgNumber];
}

//For indian dining
function changeImagesIndian(direction)
{
    imgNumber = imgNumber + direction;
    if(imgNumber > topLimitIndian)
    {
        imgNumber = 0;
    }

    if(imgNumber < 0)
    {
        imgNumber = topLimitIndian;
    }
    document.getElementById('slideshowIndian').src = imageArrayIndian[imgNumber];
}

//For Bakery
function changeImagesBakery(direction)
{
    imgNumber = imgNumber + direction;
    if(imgNumber > topLimitItalian)
    {
        imgNumber = 0;
    }

    if(imgNumber < 0)
    {
        imgNumber = topLimitItalian;
    }
    document.getElementById('slideshowBakery').src = imageArrayBakery[imgNumber];
}



//
//For 'Reserve Seat' Form Submission
//
function createTicket(){
    //Read values from form
    let firstname = document.getElementById("fname").value;
    let lastname = document.getElementById("lname").value;
    let contact = document.getElementById("contact").value;
    let timing = document.getElementById("timing").value;

    //Create a random ticket number
    let ticketNum = Math.floor((Math.random() * 100000) + 1);

    //Create a p element to show in webpage
    let para = document.createElement("p");
    let text1 = document.createTextNode("Your reservations with reference number: " + ticketNum + " have been successfully made under the name '" + firstname + " " + lastname + "' on " + timing);
    let text2 = document.createTextNode("Please enter all the details");

    //Checks to make sure no field is blank
    if(fname!='' && lname!='' && contact!='' && timing!=''){
        para.appendChild(text1);
    }
    else{
        para.appendChild(text2);
    }

    let ticketDiv = document.getElementById("displayTicket");
    //On each click, first empty the contents in div, then append child
    ticketDiv.innerHTML = '';
    ticketDiv.appendChild(para);
}