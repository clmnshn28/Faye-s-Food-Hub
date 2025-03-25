
document.addEventListener('DOMContentLoaded', () => {
    fetch('../assets/data/recipes.json')
        .then(response => response.json())
        .then(recipeData => {
        const specificRecipes = extractSpecificRecipes(recipeData);
        updateRecipeHTML(specificRecipes);
        })
        .catch(error => console.error('Error loading recipes:', error));
});


function extractSpecificRecipes(data) {
  
    const specificRecipes = [];
    
    // in here check/fetch the data in the JSON 
    const porkAdobo = data.pork.find(recipe => recipe.name === "Pork Adobo");
    if (porkAdobo) specificRecipes.push(porkAdobo);
    
    const spaghetti = data.pasta.find(recipe => recipe.name === "Filipino-Style Spaghetti");
    if (spaghetti) specificRecipes.push(spaghetti);

    const menudo = data.pork.find(recipe => recipe.name === "Menudo");
    if (menudo) specificRecipes.push(menudo);

    const carbonara = data.pasta.find(recipe => recipe.name === "Filipino-Style Carbonara");
    if (carbonara) specificRecipes.push(carbonara);
    
    const bulalo = data.beef.find(recipe => recipe.name === "Bulalo");
    if (bulalo) specificRecipes.push(bulalo);

    const sinampalukangManok = data.chicken.find(recipe => recipe.name === "Sinampalukang Manok");
    if (sinampalukangManok) specificRecipes.push(sinampalukangManok);
    
    
    return specificRecipes;
  }
  

function updateRecipeHTML(recipes) {
    const recipeList = document.querySelector('.Home__recipe-list');
    recipeList.innerHTML = ''; // Clear previous content
  
    recipes.forEach((recipe, index) => {
      recipeList.innerHTML += `
        <div class="Home__recipe-item">
          <div class="Home__recipe-image-container">
            <img 
              class="Home__main-recipe-image" 
              src="${recipe.images}" 
              alt="${recipe.name}"
              style="cursor: pointer;"
              data-index="${index}"
            >
            <span class="Home__favorite-container">
              <img 
                class="Home__favorite-icon" 
                src="../assets/images/unfilled-favorite.svg" 
                alt="favorite"
                data-index="${index}" 
                data-favorite="false"
                style="cursor: pointer;"
              >
            </span>
          </div>
          <h3 class="Home__recipe-item-title">${recipe.name}</h3>
          <p class="Home__recipe-item-description">${recipe.description}</p>
        </div>
      `;
    });

    
  // Add event listener to images for opening the modal
  document.querySelectorAll(".Home__main-recipe-image").forEach((image, index) => {
    image.addEventListener("click", () => {
        showRecipeModal(recipes[index]);
    });
});



  // interactive of favorite icon (heart icon)
  const favoriteIcon = document.querySelectorAll(".Home__favorite-icon");
  favoriteIcon.forEach( icon =>{
    icon.addEventListener("click", () =>{

      // Add zoom effect class
      icon.classList.add("zoom-effect");

      // Remove it after animation (200ms)
      setTimeout(() => {
        icon.classList.remove("zoom-effect");
      }, 200);


      const isFavorite = icon.getAttribute('data-favorite') === "true";

      if(isFavorite){
        icon.src = "../assets/images/unfilled-favorite.svg";
        icon.setAttribute('data-favorite', 'false');
      }else{
        icon.src = "../assets/images/filled-favorite.svg";
        icon.setAttribute('data-favorite', 'true');
      }
    })
  })

}


// modal

// Show recipe modal with details
function showRecipeModal(recipe) {
  const modal = document.querySelector(".Recipes__overlay-modal");
  const modalImage = modal.querySelector(".Recipes__modal-left-container img");
  const modalTitle = modal.querySelector(".Recipes__modal-left-container h1");
  const modalDescription = modal.querySelector(".Recipes__modal-left-container p");
  const ingredientsList = modal.querySelector(".Recipes__modal-ingredients-container ul");
  const instructionsList = modal.querySelector(".Recipes__modal-ingredients-container ol");
  
  // Update modal content
  modalImage.src = recipe.images;
  modalImage.alt = recipe.name;
  modalTitle.textContent = recipe.name;
  modalDescription.textContent = recipe.description;
  
  // Update ingredients list
  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach(ingredient => {
      const li = document.createElement("li");
      li.textContent = ingredient;
      ingredientsList.appendChild(li);
  });
  
  // Update instructions list
  instructionsList.innerHTML = "";
  recipe.instructions.forEach(instruction => {
      const li = document.createElement("li");
      li.textContent = instruction;
      instructionsList.appendChild(li);
  });
  
  // Show the modal
  modal.style.display = "flex";

  // Close modal when clicking the close button
  document.querySelector(".Recipes__modal-close-icon").addEventListener("click", () => {
      modal.style.display = "none";
  });

  // Close modal when clicking outside the modal content
  // modal.addEventListener("click", (event) => {
  //   if (event.target === modal) {
  //       modal.style.display = "none";
  //   }
  // });
}


  

// ALTERNATIVE TO NG updateRecipeHTML() ETO NASA BABA

//   // update the HTML with the extracted recipes
//   function updateRecipeHTML(recipes) {

//     const recipeList = document.querySelector('.Home__recipe-list');
//     recipeList.innerHTML = '';

//     // Add each recipe to the HTML
//     recipes.forEach(recipe => {
//       const recipeItem = document.createElement('div');
//       recipeItem.className = 'Home__recipe-item';
      
//       // Create the image container
//       const imageContainer = document.createElement('div');
//       imageContainer.className = 'Home__recipe-image-container';
      
//       // Create the main image
//       const mainImage = document.createElement('img');
//       mainImage.className = 'Home__main-recipe-image';
//       mainImage.src = recipe.image || recipe.images;
//       mainImage.alt = recipe.name;
      
//       // Create the favorite container
//       const favoriteContainer = document.createElement('span');
//       favoriteContainer.className = 'Home__favorite-container';
      
//       // Create the favorite icon
//       const favoriteIcon = document.createElement('img');
//       favoriteIcon.className = 'Home__favorite-icon';
//       favoriteIcon.src = '../assets/images/unfilled-favorite.svg';
//       favoriteIcon.alt = 'favorite';
      
//       // Append the image elements
//       favoriteContainer.appendChild(favoriteIcon);
//       imageContainer.appendChild(mainImage);
//       imageContainer.appendChild(favoriteContainer);
      
//       // Create the title
//       const title = document.createElement('h3');
//       title.className = 'Home__recipe-item-title';
//       title.textContent = recipe.name;
      
//       // Create the description
//       const description = document.createElement('p');
//       description.className = 'Home__recipe-item-description';
//       description.textContent = recipe.description;
      
//       // Append all elements to the recipe item
//       recipeItem.appendChild(imageContainer);
//       recipeItem.appendChild(title);
//       recipeItem.appendChild(description);
      
//       // Append the recipe item to the recipe list
//       recipeList.appendChild(recipeItem);
//     });
//   }
