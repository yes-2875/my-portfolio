const showDetailsList = document.getElementsByClassName("showDetails");

function showDetails(event) {
    let btn = event.currentTarget;
    let detailsElement = btn.parentElement.querySelector(".extraDetails");
    
    if (detailsElement.getAttribute("class") === "extraDetails hidden") {
        detailsElement.setAttribute("class", "extraDetails");
        btn.innerHTML = "<img src=\"images/iconoir_eye-solid.svg\"> Hide Details";
    } else {
        detailsElement.setAttribute("class", "extraDetails hidden");
        btn.innerHTML = "<img src=\"images/iconoir_eye-solid.svg\"> Show Details";
    }
}

for (let button of showDetailsList) {
    button.addEventListener("click", showDetails);
}