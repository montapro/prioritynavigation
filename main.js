// Create variables
// header
var header = document.getElementById("header");
var headerWidth = header.offsetWidth;
// logo
var logo = document.getElementById("logo");
var logoWidth = logo.offsetWidth;
// nav
var nav = document.getElementById("nav");
var navWidth = nav.offsetWidth;
// nav elements
var navElements;
var navLastElement;
// dropnav
var dropnav = document.getElementById("nav-dropdown");
// dropnav elements
var dorpnavElements;
var dropnavFirstElement;
var dropnavFirstElementWidth;
// width dependencies
var innerElementWidth;
var potentialInnerElementWidth;

// Update variables and check navigation when window is loaded
window.addEventListener("load", function() {
  updateVariables();
  checkNavi();
});

// Update variables and check navigation when window is resized
window.addEventListener("resize", function() {
  updateVariables();
  checkNavi();
});

// Check how nav and dropnav elemnts divide
function checkNavi() {
  // Move elemnts to dropnav and update variables when inner elements not fit
  while (isTooBig()) {
    moveElToDropdown();
    updateVariables();
  }
  // Move elemnts to nav and update variables when inner elemnts fit
  while (isTooSmall()) {
    moveElToNav();
    updateVariables();
  }
}

// If inner elemnts bigger than header it returns true
var isTooBig = function() {
  if (innerElementWidth > headerWidth && navElements.length > 0) {
    return true;
  } else {
    return false;
  }
};

// If inner elemnts smaller than header it returns true
var isTooSmall = function() {
  if (potentialInnerElementWidth < headerWidth && dorpnavElements.length > 0) {
    return true;
  } else {
    return false;
  }
};

// Update variables
function updateVariables() {
  headerWidth = header.offsetWidth;
  logoWidth = logo.offsetWidth;
  navWidth = nav.offsetWidth;
  navElements = document.querySelectorAll("#nav > li");
  dorpnavElements = document.querySelectorAll("#nav-dropdown > li");
  innerElementWidth = logoWidth + navWidth;
  potentialInnerElementWidth = logoWidth + navWidth + dropnavFirstElementWidth;
  navLastElement = navElements[navElements.length - 1];
  dropnavFirstElement = dorpnavElements[0];
  // Update variables if dropnav elements exist
  if (dorpnavElements.length > 0) {
    dropnavFirstElementWidth = dropnavFirstElement.offsetWidth;
  }
}

// Move nav elements to dropnav
function moveElToDropdown() {
  dropnav.prepend(navLastElement);
}

// Move dropnav elements to nav
function moveElToNav() {
  nav.appendChild(dropnavFirstElement);
}
