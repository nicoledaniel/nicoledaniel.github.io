"use strict";

const image_elements: string[] = [
  "images/dracula.png",
  "images/ghost.jpg",
  "images/lagoon.jpg",
  "images/scarecrow.webp",
  "images/skeleton.jpg"
];

// code the get element function


document.addEventListener("DOMContentLoaded", () => {
  // get the elements from the DOM
  const imageElements: NodeListOf<HTMLImageElement> = document.querySelectorAll("img");

  // click event listener for the Left button
  document.querySelector("#left_button")!.addEventListener("click", evt => {
    // shift the items in the array to the left
    let first: string | undefined = image_elements.shift();
    if (first !== undefined) {
      image_elements.push(first);
    }
    // display the first three images
    for (let i = 0; i < imageElements.length; ++i) {
      imageElements[i].src = image_elements[i];
    }
  });

  // click event listener for the Right button
  document.querySelector("#right_button")!.addEventListener("click", evt => {
    // shift the elements in the array
    let last: string | undefined = image_elements.pop();
    if (last !== undefined) {
      image_elements.unshift(last);
    }
    // display the first three images
    for (let i = 0; i < imageElements.length; ++i) {
      imageElements[i].src = image_elements[i];
    }
  });
});
