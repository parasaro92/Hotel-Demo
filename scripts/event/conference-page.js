var imageArrayComfortable = ["../../images/event/dummy1_1.jpg", "../../images/event/dummy1_2.jpg"];
var imageArrayStylish = ["../../images/event/dummy2_1.jpg", "../../images/event/dummy2_2.jpg"];
var imageArrayElegant = ["../../images/event/dummy3_2.jpg", "../../images/event/dummy3_1.jpg"];
var imageArrayModular = ["../../images/event/dummy4_2.jpg", "../../images/event/dummy4_1.jpg"];
var imageArrayLit = ["../../images/event/dummy5_1.jpg", "../../images/event/dummy5_2.jpg"];


var imgNumber = 0;
//TopLimit will be same for all arrays as length is same for each array
var topLimit = imageArrayLit.length - 1;
//milliseconds    1sec=1000milliseconds
var delay = 2000; 

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

    document.getElementById('slideshowStylish').src = imageArrayStylish[imgNumber];
    document.getElementById('slideshowLit').src = imageArrayLit[imgNumber];
    document.getElementById('slideshowComfortable').src = imageArrayComfortable[imgNumber];
    document.getElementById('slideshowElegant').src = imageArrayElegant[imgNumber];
    document.getElementById('slideshowModular').src = imageArrayModular[imgNumber];
}


//
//Get Quotation Form functionality
//
function displayMessage(){
    //Read values from form
    let name = document.getElementById("name").value;
    let contact = document.getElementById("contact").value;
    let email = document.getElementById("email").value;

    //Create a p element to show in webpage
    let para = document.createElement("p");
    let text1 = document.createTextNode("Thank you for reaching out to us " + name + ". One of our representative will reach out to you within 24 hours on your contact no. " + contact);
    let text2 = document.createTextNode("Please enter all the details");

    if(name!='' && contact!='' && email!=''){
        para.appendChild(text1);
    }
    else{
        para.appendChild(text2);
    }
    // para.appendChild(text);
    let message = document.getElementById("displayMessage");
    message.innerHTML = '';
    message.appendChild(para);
}