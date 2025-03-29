document.addEventListener("DOMContentLoaded", function () {
  const innerContainer = document.querySelector(".Gallery__container .inner");

  // Fetch the JSON file
  fetch("../assets/data/gallery.json")
      .then(response => response.json())
      .then(data => {
          if (data.images && innerContainer) {
              let imagesHTML = "";

              // Loop through images and create img elements
              data.images.forEach(image => {
                  imagesHTML += `<img src="${image.src}" alt="${image.alt}">`;
              });

              // Duplicate the images for infinite scrolling effect
              imagesHTML += imagesHTML;

              // Inject into inner container
              innerContainer.innerHTML = imagesHTML;
          }
      })
      .catch(error => console.error("Error loading gallery images:", error));
});
