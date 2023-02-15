// Save the scroll position on before unload event
window.addEventListener('beforeunload', function() {
    localStorage.setItem('scrollPos', window.scrollY);
  });
  
  // Restore the scroll position on load event
  window.addEventListener('load', function() {
    let scrollPos = localStorage.getItem('scrollPos');
    if (scrollPos) {
      window.scrollTo(0, scrollPos);
    }
  });




  // -----------live typing------------
// Set up an array to hold the texts to be typed
const texts = ["Residential Properties", "Commercial Properties", "everything else!"];

// Set up some variables to keep track of the current text and the current index
let currentTextIndex = 0;
let currentText = texts[currentTextIndex];
let index = 0;
let isDeleting = false;

// Get a reference to the typing-text element
const typingText = document.getElementById("typing-text");

// Use setInterval to repeatedly update the text
setInterval(() => {
  // Get the current substring
  const substring = currentText.substring(0, index);

  // Update the text in the element
  typingText.textContent = "We work with " + substring;

  // Increment or decrement the index depending on whether we are typing or deleting
  if (index < currentText.length && !isDeleting) {
    index++;
  } else {
    isDeleting = true;
    if (index > 0) {
      index--;
    } else {
      isDeleting = false;
      currentTextIndex = (currentTextIndex + 1) % texts.length;
      currentText = texts[currentTextIndex];
      setTimeout(() => {
        isDeleting = false;
      }, 2000); // Wait for 2 seconds before starting to delete
    }
  }
}, 120);






// -----------------scrolling----------------------

// Select all navigation links
const navLinks = document.querySelectorAll('nav a');

// Loop through each link and add an event listener
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // prevent default link behavior
    const sectionID = this.getAttribute('href'); // get the ID of the target section
    const section = document.querySelector(sectionID); // select the target section
    const sectionPosition = section.offsetTop; // get the position of the target section
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth'
    }); // smooth scroll to the target section
  });
});
