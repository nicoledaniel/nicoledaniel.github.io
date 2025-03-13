/*Modification Log
#Original Author: Nicole Daniel
#Date Created: 
#Version: 0.0
#Modified By: Nicole Daniel
#Modification Log:

Version 0.0 - 02/19/2025 - Added a file connected to cast.html file that rotates the images in a picture carasol.
Version 0.1 - 03/03/2025 - attepted to add TypeScript to cast.js
*/

"use strict";
const image_elements = [
    "images/DraculaD.png", 
    "images/GibsonTheGhost.png", 
    "images/LagoonLarry.png", 
    "images/Sully.png", 
    "images/Sickly.png"
];
// code the get element function
document.addEventListener("DOMContentLoaded", () => {
    // get the elements from the DOM
    const imageElements = document.querySelectorAll("main img");

    // click event listener for the Left button
    document.querySelector("#left_button").addEventListener("click", evt => {
        // shift the items in the array to the left
        let first = image_elements.shift();
        image_elements.push(first);


        // display the first three images
        for (let i = 0; i < imageElements.length; ++i) {
            imageElements[i].src = image_elements[i];
        }
    });

    // click event listener for the Right button
    document.querySelector("#right_button").addEventListener("click", evt => {
        // shift the elements in the array
        let last = image_elements.pop();
        image_elements.unshift(last);


        // display the first three images
        for (let i = 0; i < imageElements.length; ++i) {
            imageElements[i].src = image_elements[i];
        }
    });
});
