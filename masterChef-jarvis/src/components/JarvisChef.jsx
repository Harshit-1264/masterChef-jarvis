import { useState } from "react";
import { askJarvisChef } from "../utils/askJarvisChef";

const JarvisChef = () => {

    const [recipeMessage, setRecipeMessage] = useState("");
    const [recipe, setRecipe] = useState("");
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        setRecipeMessage(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res_recipe = await askJarvisChef(recipeMessage);
        setRecipe(res_recipe);
        setLoading(false);
    }

  return (
    <>
      <h1>Ask your recipes</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={recipeMessage}
          onChange={handleInputChange}
          placeholder="Ask your recipes"
        />
        <button>{loading ? "Cooking..." : "Ask"}</button>
      </form>
      {recipe ? (
        <pre>{recipe}</pre>
      ) : (
        <p className="placeholder-text">Your recipe will appear here 🍳</p>
      )}

      <footer>
        Built with ❤️ by Harshit 
      </footer>
    </>
  );
};

export default JarvisChef;
