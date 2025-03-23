// gallery.js

window.addEventListener("load", () => {
    const outer = document.querySelector(".outer");
  
    // Duplicate the contents for infinite effect
    outer.innerHTML += outer.innerHTML;
  
    let scrollSpeed = 10; // Adjust speed (higher = faster)
    function autoScroll() {
      outer.scrollLeft += scrollSpeed;
  
      // Reset to start once halfway (original set length) is reached
      if (outer.scrollLeft >= outer.scrollWidth / 2) {
        outer.scrollLeft = 0;
      }
  
      requestAnimationFrame(autoScroll);
    }
  
    autoScroll();
  });
  