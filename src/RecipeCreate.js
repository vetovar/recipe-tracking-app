import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.

  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // create new recipe object
    const newRecipe = {
      id: Math.random(),
      name,
      cuisine,
      photo,
      ingredients,
      preparation,
    };
    // reset form inputs
    addRecipe(newRecipe);
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
            </td>
            <td>
              <input
                type="text"
                value={cuisine}
                name="cuisine"
                onChange={(e) => setCuisine(e.target.value)}
                placeholder="Cuisine"
                required
              />
            </td>
            <td>
              <input
                type="url"
                value={photo}
                name="photo"
                onChange={(e) => setPhoto(e.target.value)}
                placeholder="URL"
                required
              />
            </td>
            <td>
              <textarea
                type="text"
                value={ingredients}
                name="ingredients"
                onChange={(e) => setIngredients(e.target.value)}
                placeholder="Ingredients"
                required
              />
            </td>
            <td>
              <textarea
                type="text"
                value={preparation}
                name="preparation"
                onChange={(e) => setPreparation(e.target.value)}
                placeholder="Preparation"
                required
              />
            </td>
            {/* Add more input fields for other recipe properties */}
            <td colSpan="2">
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
