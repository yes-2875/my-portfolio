const showDetailsList = document.getElementsByClassName("showDetails");

function showDetails(event) {
    let btn = event.currentTarget;
    let detailsElement = btn.parentElement.querySelector(".extraDetails");
    
    if (detailsElement.getAttribute("class") === "extraDetails hidden") {
        detailsElement.setAttribute("class", "extraDetails");
    } else {
        detailsElement.setAttribute("class", "extraDetails hidden");
    }
}

for (let button of showDetailsList) {
    button.addEventListener("click", showDetails);
}