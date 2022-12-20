// Adding Event listeners

import backpackObjectArray from "./components/data.js";

// Add event Listener to the lid-toggle button
const lidToggle = function (event, button, newArg) {
    console.log(event)
    console.log(newArg)

    // Find the current backpack object in backpackObjectArray
    let backpackObject = backpackObjectArray.find(
        ({id}) => id === button.parentElement.id
    );

    // Toggle lid open status
    backpackObject.lidOpen == true ? backpackObject.lidOpen = false : backpackObject.lidOpen = true;

    // Toggle button text
    button.innerText == "Open Lid" ? button.innerText = "Closed Lid" : button.innerText = "Open Lid";

    // set visible property status text
    let status = button.parentElement.querySelector(".backpack__lid span");
    status.innerText == "Closed" ? status.innerText = "Open" : status.innerText = "Closed"
};

// Strap length functionality - Intermidate level
const newStrapLength = (strapArray) => {
    // loop through each element on the list
    strapArray.forEach((listElement) => {
        let side = listElement.getAttribute("data-side");

        // Create a new form element
        const lengthForm = document.createElement("form");
        lengthForm.classList.add(`${side}length`);

        // Populate form with an input and a button
        lengthForm.innerHTML = `
        <input type="number" name="${side}length" placeholder="New ${side} length">
        <button>Update</button>
        `;

        // Add event listener
        lengthForm.addEventListener("submit", (e) => {
            // stop from reloading the page
            e.preventDefault();

            // Get the value from the input
            let newValue = lengthForm.querySelector("input").value;

            // set the value of the field
            listElement.querySelector("span").innerHTML = `${newValue} inches`;
            
            // clear the form input
            lengthForm.querySelector("input").value = "";
        });

        //Add form to end of list element
        listElement.append(lengthForm); 
    });
};

// map throught the array and make a new array
const content = backpackObjectArray.map((backpack) => {
    // 'backpack' now hold single backpack object

    // Create a new article
    let backpackArticle = document.createElement("article");
    backpackArticle.classList.add("backpack");

    // set article to the backpack.id property
    backpackArticle.setAttribute("id",backpack.id);

    // set the innerHTML of the backpackArticle using the backpack objects.
    backpackArticle.innerHTML = `
    <figure class="backpack__image">
        <img src=${backpack.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
        <li class="feature backpack__volume">Volume: <span>${backpack.volume}</span></li>
        <li class="feature backpack__color">Color: <span>${backpack.color}</span></li>
        <li class="feature backpack__age">Age: <span>${backpack.backpackAge()} days old</span></li>
        <li class="feature backpack__pockets">Number of pockets: <span>${backpack.pocketNum}</span></li>
        <li class="feature backpack__strap" data-side="left">Left strap length: <span>${backpack.strapLength.left} inches</span></li>
        <li class="feature backpack__strap" data-side="right">Right strap length: <span>${backpack.strapLength.right} inches</span></li>
        <li class="feature backpack__lid">Lid Status: <span>${backpack.lidOpen ? 'Open' : 'Closed'}</span></li>
    </ul>
    <button class="lid-toggle">Open lid</button>
    `;

    let strapLengths = backpackArticle.querySelectorAll(".backpack__strap");
    newStrapLength(strapLengths);

    let button = backpackArticle.querySelector(".lid-toggle");
    // const status = backpackArticle.querySelector('.backpack__lid span');
    let newArg = "The argument I want to pass to the callback function!"

    // Add event listener
    button.addEventListener("click", (event) => {
        lidToggle(event, button, newArg)
    });
        // console.log(event)
        // this.innerText === "Open lid" ? this.innerText = "Closed lid" : this.innerText = "Open lid"
        // status.innerText === "Open" ? status.innerText = "Closed" : status.innerText = "Open";

    // return the backpaclArticle to the content array
    return backpackArticle;
});

// Get the main
const main = document.querySelector(".maincontent");

// Loop through the content array to append each backpack article
content.forEach((backpack) => {
    main.append(backpack)
});