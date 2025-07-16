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

// Function: To update User interface based on screeen size of the window
const isMobiie = () => {
  return window.innerWidth <= 768;
};

//Function: To show or hide the shareIcons and infoContainer based on the screen size or when the page loads
const updateUserInterface = () => {
  // mobile view
  if (isMobiie()) {
    infoContainer.classList.toggle("hidden");
    shareIcons.classList.remove("hidden");
  } else {
    // desktop view
    infoContainer.classList.remove("hidden");
    shareIcons.classList.toggle("hidden");
  }
};

// calling the updateUserInterface function so it works when the page loads
updateUserInterface();

// add EvenListener to the shareButton
shareButton.addEventListener("click", updateUserInterface);

//upddte user interface based on the screen size
window.addEventListener("resize", updateUserInterface);

// close share icons
closeShareButton.addEventListener("click", () => {
  infoContainer.classList.remove("hidden");
  shareIcons.classList.add("hidden");
});
