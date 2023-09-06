// This is going to be the module for the entire model
// MVC architecture

import { async } from 'regenerator-runtime';

// This state object will contain the recipe and into which the controller grabs and takes the recipe out of there
// The live connection between export and import will make this possible
export const state = {
  recipe: {},
};

// loadRecipe - responsible for fetching recipe data of fokify API
export const loadRecipe = async function (id) {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}?key=6318471a-b263-4b40-bcec-87bfd80b04b8`
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message}`);

    const { recipe } = data.data;
    // let recipe = data.data.recipe; destructured

    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(state.recipe);
  } catch (err) {
    alert(err);
  }
};
