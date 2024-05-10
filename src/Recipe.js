import React from "react";

function Recipe({ recipe, deleteRecipe }) {
  const handleDelete = () => {
    deleteRecipe(recipe.id);
  };

  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        {recipe.photo && (
          <img
            src={recipe.photo}
            alt={recipe.name}
            style={{ width: "100px" }}
          />
        )}
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Recipe;
