// imported style.css
import "./style.css";

// Activate strict mode
("use strict");

// Selecting Elements
const shareButton = document.querySelector(".share-button");
const infoContainer = document.querySelector(".info-div");
const shareIcons = document.querySelector(".share-icons");
const closeShareButton = document.querySelector(".mobile-share-button");

// hiding the shareIcons when the page loads
shareIcons.classList.add("hidden");

// Function: To get the screen width dynamically
const isMobiie = () => {
  return window.innerWidth <= 768;
};

// ToggleVisibility: Show user info panel and hide social share icons
const toggleInfoAndShareIcons = () => {
  infoContainer.classList.remove("hidden");
  shareIcons.classList.add("hidden");
};

// Add Eventlistener to the shareButton
shareButton.addEventListener("click", () => {
  if (isMobiie()) {
    // mobile view
    infoContainer.classList.add("hidden");
    shareIcons.classList.toggle("hidden");
  } else {
    // desktop view
    infoContainer.classList.remove("hidden");
    shareIcons.classList.toggle("hidden");
  }
});

// Adding eventListener to the closeShareButton
closeShareButton.addEventListener("click", () => {
  shareIcons.classList.add("hidden");
  infoContainer.classList.remove("hidden");
});

// Adding eventlistener to the window element to change the user interface based on the screen size
window.addEventListener("resize", () => {
  if (!isMobiie()) {
    toggleInfoAndShareIcons();
  } else {
    toggleInfoAndShareIcons();
  }
});
