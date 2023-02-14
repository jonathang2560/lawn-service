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
 