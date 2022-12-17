/*
Traverse the DOM treee using querySelector() and  querySelectorAll()
*/

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
    "Everyday Backpack",
    30,
    "gray",
    15,
    26,
    26,
    false,
    "16 December 2022",
    "../assets/images/everyday.svg",
);

const main = document.querySelector(".maincontent");
// document.body.innerHTML = con;

// Template Literals
const content = `
<article class="backpack" id="everyday">
    <figure class="backpack__image">
        <img src="${everydayPack.image}" alt=""/>
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
        <li class="backpack__volume">Volume: <span>${everydayPack.volume}</span></li>
        <li class="color">Color: <span>${everydayPack.color}</span></li>
        <li class="backpack__age">Age: <span>${everydayPack.backpackAge()} days old</span></li>
        <li class="backpack__pockets">Number of pockets: <span>${everydayPack.pocketNum}</span></li>
        <li class="backpack__strap">Left strap length: <span>${everydayPack.strapLength.left}</span> inches</li>
        <li class="backpack__strap">Right strap length: <span>${everydayPack.strapLength.right}</span> inches</li>
        <li class="backpack__lid">Lid Status: <span>${everydayPack.lidOpen}</span></li>
    </ul>
</article>
`;

main.innerHTML = content;