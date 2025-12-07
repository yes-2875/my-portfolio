
/* ----- Show Details button functionality in project cards ----- */
const showDetailsList = document.getElementsByClassName("showDetails");

function showDetails(event) {
    let btn = event.currentTarget;
    let detailsElement = btn.parentElement.querySelector(".extraDetails");
    
    if (detailsElement.getAttribute("class") === "extraDetails hidden") {
        detailsElement.setAttribute("class", "extraDetails");
        
        // Setting the innerText variable replaces the entire innerHTML for some reason, so I'm doing this.
        btn.innerHTML = "<img src=\"images/iconoir_eye-solid.svg\"> Hide Details";
    } else {
        detailsElement.setAttribute("class", "extraDetails hidden");
        
        // Setting the innerText variable replaces the entire innerHTML for some reason, so I'm doing this.
        btn.innerHTML = "<img src=\"images/iconoir_eye-solid.svg\"> Show Details";
    }
}

// Add the showDetails function to every "Show Details" button on the website on click
for (let button of showDetailsList) {
    button.addEventListener("click", showDetails);
}

/* ----- Additional contact form validation using JavaScript ----- */

const form = document.querySelector("form");
const nameValue = document.getElementById("name");
const nameError = document.getElementById("nameError");

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

const message = document.getElementById("message");
const messageError = document.getElementById("messageError");

const submitButton = document.getElementById("submit");

function showNameError() {
    if (nameValue.validity.valueMissing) {
        nameError.innerHTML = "Please give your name.";
        
    } else if (nameValue.validity.tooLong) {
        nameError.innerHTML = `Name given is too long, must be at or under ${nameValue.maxLength} characters.`;
        
    } else if (nameValue.validity.tooShort) {
        nameError.innerHTML = `Name given is too short, must be at least ${nameValue.minLength} characters.`;
    }
    
    //console.log("Name error active");
    nameError.className = "error active";
}

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.innerHTML = "Please give your email.";
    
    } else if (email.validity.typeMismatch) {
        emailError.innerHTML = "Write a valid email, please. Something in the format of email@example.com, perhaps?";
        
    } else if (email.validity.tooLong) {
        emailError.innerHTML = `Email is way too long, must be at or under ${email.maxLength} characters.`;
        
    } else if (email.validity.tooShort) {
        emailError.innerHTML = `That's too short to be an email address, must be at least ${email.minLength} characters.`;
    }
    
    emailError.className = "error active";
}

function showMessageError() {
    if (message.validity.valueMissing) {
        messageError.innerHTML = "Please write a message. That's what you're here for, no?";
        
    } else if (message.validity.tooLong) {
        messageError.innerHTML = `This is way too long for a message, should be at at or under ${message.maxLength} characters.`;
        
    } else if (message.validity.tooShort) {
        messageError.innerHTML = `Under ${message.minLength} characters? You wrote basically nothing worth my time.`;
    }
    
    messageError.className = "error active";
}

function nameInputEvent(event) {
    if (nameValue.validity.valid) {
        nameError.innerHTML = "";
        nameError.className = "error";
        //console.log("Name error inactive");
    }
    else {
        showNameError();
    }
    checkValidityForButton();
}

function emailInputEvent(event) {
    if (email.validity.valid) {
        emailError.innerHTML = "";
        emailError.className = "error";
    }
    else {
        showEmailError();
    }
    checkValidityForButton();
}

function messageInputEvent(event) {
    if (message.validity.valid) {
        messageError.innerHTML = "";
        messageError.className = "error";
    }
    else {
        showMessageError();
    }
    checkValidityForButton();
}

function checkValidityForButton() {
    if (nameValue.validity.valid && email.validity.valid && message.validity.valid) {
        submitButton.disabled = false;
        //console.log("Button un-disabled");
    } else {
        submitButton.disabled = true;
        //console.log("Button disabled");
    }
}

nameValue.addEventListener("input", nameInputEvent);
email.addEventListener("input", emailInputEvent);
message.addEventListener("input", messageInputEvent);

// Dark/Light Mode Toggle
const themeToggleButton = document.querySelector(".theme-toggle");
const contentDiv = document.querySelector(".content");
const header = document.getElementById("startHeader");

function toggleTheme() {
    if (themeToggleButton.className == "theme-toggle dark") {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        themeToggleButton.className = "theme-toggle light";
            
    } else if (themeToggleButton.className == "theme-toggle light") {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        themeToggleButton.className = "theme-toggle dark";
    }
    contentDiv.classList.toggle("light");
    
}

themeToggleButton.addEventListener("click", toggleTheme);