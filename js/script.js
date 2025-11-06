
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

const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
