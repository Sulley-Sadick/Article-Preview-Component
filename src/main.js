// imported style.css
import "./style.css";

// Activate strict mode
("use strict");

// Selecting Elements
const bodyEl = document.body;
const shareButton = document.querySelector(".share-button");
const infoContainer = document.querySelector(".info-div");
const personInfo = document.querySelector(".person-info");
const shareIcons = document.querySelector(".share-icons");
const screenWidth = window.innerWidth;

const mobileShareButton = document.querySelector(".mobile-share-button");

// hiding the shareIcons when the page loads
shareIcons.classList.add("hidden");

shareButton.addEventListener("click", () => {
  if (screenWidth >= "768") {
    bodyEl.style.backgroundColor = "hsl(174, 77%, 80%)";
    shareIcons.classList.toggle("hidden");
  } else {
    shareIcons.classList.toggle("hidden");
    infoContainer.classList.add("hidden");
    bodyEl.style.backgroundColor = "hsl(224, 65%, 95%)";
  }
});

mobileShareButton.addEventListener("click", () => {
  shareIcons.classList.add("hidden");
  infoContainer.classList.remove("hidden");
});
