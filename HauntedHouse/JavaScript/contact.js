/*Modification Log
#Original Author: Nicole Daniel
#Date Created: 
#Version: 0.0
#Modified By: Nicole Daniel
#Modification Log:

Version 0.0 - 02/19/2025 - created a file that is connected to the contact.html file and validates wether or not the input is valid. 
Version 0.1 - 03/03/2025 - attepted to add TypeScript to contact.js
Version 0.2 - 03/09/2025 - added Regex to validation (/\S+@\S+\.\S+/)
*/

//Get Data
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

// Validate Data
function validateForm() {

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
    }

    if(message.value.length < 1) {
        errorNodes[2].innerText = "Please enter message";
        message.classList.add("error-border");
        errorFlag = true;
    }

    if(!errorFlag){
        success.innerText = "Success!";
    }
}

//clear error / success messages
function clearMessages() {
    for(let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}

//check if email is validw
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}