// Select the <nav> element and the scroll-to-top button link
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Listen to window scroll event to toggle sticky navbar and scroll button visibility
window.onscroll = function () {
  // If user has scrolled down more than 20px from the top
  if (document.documentElement.scrollTop > 20) {
    // Add 'sticky' class to navbar to change its style
    nav.classList.add("sticky");
    // Show the scroll-to-top button
    scrollBtn.style.display = "block";
  } else {
    // Remove 'sticky' class when user is near the top
    nav.classList.remove("sticky");
    // Hide the scroll-to-top button
    scrollBtn.style.display = "none";
  }
};

// Select body, navbar container, menu button, and cancel button elements
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Function to open side navigation menu
menuBtn.onclick = function () {
  // Add 'active' class to navbar to show side menu
  navBar.classList.add("active");
  // Hide the menu button by reducing opacity and disabling pointer events
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  // Disable page scroll while menu is open
  body.style.overflow = "hidden";
  // Disable pointer events on scroll button to prevent interaction
  scrollBtn.style.pointerEvents = "none";
};

// Function to close side navigation menu and restore states
const hideNavMenu = () => {
  // Remove 'active' class to hide side menu
  navBar.classList.remove("active");
  // Show the menu button again
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  // Enable page scroll again
  body.style.overflow = "auto";
  // Enable pointer events on scroll button
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation when cancel button is clicked
cancelBtn.onclick = hideNavMenu;

// Select all navigation menu links
let navLinks = document.querySelectorAll(".menu li a");

// Add event listener to each menu link to close side menu on click
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});