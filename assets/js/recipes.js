let allRecipes = {};
let currentCategory = "pork";

document.addEventListener("DOMContentLoaded", () => {
    fetch('../assets/data/recipes.json')
        .then(response => response.json())
        .then(data => {
            allRecipes = data;
            renderRecipesByCategory("pork"); // default view
            setupCategoryClick();
            setupModalClose();

        })
        .catch(error => console.error("Error loading recipes:", error));
});

// Render recipes for a specific category
function renderRecipesByCategory(category) {
    currentCategory = category.toLowerCase();
    const recipeGrid = document.querySelector(".recipe-grid");
    recipeGrid.innerHTML = "";

    const recipes = allRecipes[currentCategory] || [];

    recipes.forEach((recipe, index) => {
        recipeGrid.innerHTML += `
            <div class="Recipes__recipe-item">
                <div class="Recipes__recipe-image-container">
                    <img class="Recipes__main-recipe-image" src="${recipe.images}" alt="${recipe.name}">
                    <span class="Recipes__favorite-container">
                        <img 
                            class="Recipes__favorite-icon" 
                            src="../assets/images/unfilled-favorite.svg" 
                            alt="favorite"
                            data-index="${index}" 
                            data-favorite="false"
                            style="cursor: pointer;"
                        >
                    </span>
                </div>
                <div class="Recipes__recipe-content">
                    <h3 class="Recipes__recipe-item-title">${recipe.name}</h3>
                    <p class="Recipes__recipe-item-description">${recipe.description}</p>
                </div>    
                <button class="Recipes__view-ingredients-btn" data-index="${index}">Ingredients</button>
            </div>
        `;
    });

    // Interactive of favorite icon (heart icon)
    setupFavoriteIcons();

    // Setup ingredients button clicks
    setupIngredientsButtons();
}


// Handle category clicks
function setupCategoryClick() {
    const categories = document.querySelectorAll(".category-menu span");

    categories.forEach(span => {
        span.addEventListener("click", () => {
            categories.forEach(s => s.classList.remove("active-menu"));
            span.classList.add("active-menu");

            const selectedCategory = span.textContent.trim().toLowerCase();
            renderRecipesByCategory(selectedCategory);
        });
    });
}



// Setup favorite icons functionality
function setupFavoriteIcons() {
    const favoriteIcon = document.querySelectorAll(".Recipes__favorite-icon");
    favoriteIcon.forEach(icon => {
        icon.addEventListener("click", () => {
            const isFavorite = icon.getAttribute('data-favorite') === "true";

            if(isFavorite) {
                icon.src = "../assets/images/unfilled-favorite.svg";
                icon.setAttribute('data-favorite', 'false');
            } else {
                icon.src = "../assets/images/filled-favorite.svg";
                icon.setAttribute('data-favorite', 'true');
            }
        });
    });
}


// Setup ingredients buttons functionality
function setupIngredientsButtons() {
    const buttons = document.querySelectorAll(".Recipes__view-ingredients-btn");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const index = button.getAttribute('data-index');
            showRecipeModal(index);
        });
    });
}


// Show recipe modal with details
function showRecipeModal(index) {
    const recipes = allRecipes[currentCategory] || [];
    const recipe = recipes[index];
    
    if (!recipe) return;
    
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
}


// Setup modal close functionality
function setupModalClose() {
    const closeIcon = document.querySelector(".Recipes__modal-close-icon");
    const overlay = document.querySelector(".Recipes__overlay-modal");
    
    if (closeIcon) {
        closeIcon.addEventListener("click", () => {
            overlay.style.display = "none";
        });
    }
    
    // Optional clicking outside the modal
    // overlay.addEventListener("click", (event) => {
    //     if (event.target === overlay) {
    //         overlay.style.display = "none";
    //     }
    // });
}