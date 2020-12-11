window.onload = function () {
    document.getElementById('commentBtn').onclick = validateForm;
}

function validateForm() {
    let formValid = true;

    let name = document.querySelector('#name');
    let namepatern = /^[a-zA-Z]{2,20}$/;

    name.nextElementSibling.innerHTML = "";
    if (name.value == "") {
        name.nextElementSibling.innerHTML = "please enter name";
        formValid = false;
    } else if (!namepatern.test(name.value)) {
        name.nextElementSibling.innerHTML = "please enter name with letter only";
        formValid = false;
    } 


    let email = document.querySelector('#email');
    const emailpattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    email.nextElementSibling.innerHTML = "";
    if (email.value == "") {
        email.nextElementSibling.innerHTML = "please enter email";
        formValid = false;
    } else if (!emailpattern.test(email.value)) {
        email.nextElementSibling.innerHTML = "please enter valid email";
        formValid = false;
    } 

    const maxLength = 100;
    let commentMsg = document.querySelector('#comment');
    commentMsg.nextElementSibling.innerHTML = "";
    if (commentMsg.value.length > maxLength) {
        commentMsg.nextElementSibling.innerHTML = "Max length 100 characters only!";
        formValid = false;
    }

    if (formValid) {
        addComment();
    }
}

function addComment() {
    let name = document.getElementById('name').value;
    let comment = document.getElementById('comment').value;
    let email = document.getElementById('email').value;

    document.getElementById('nameText').textContent = name;
    document.getElementById('commentText').textContent = comment;
    document.getElementById('emailText').textContent = email;

    document.getElementById('hiddenItem').style.display = "grid";

    //clear form data
    document.getElementById("commentForm").reset();
}