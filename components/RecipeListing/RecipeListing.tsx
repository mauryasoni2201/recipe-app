import Recipe from "@/models/RecipeProps";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeListing = ({ recipes, noAnimate }: { recipes: Recipe[]; noAnimate?: boolean }) => {
  return (
    <div className="recipe-listing">
      {recipes.map((recipe: Recipe) => (
        <RecipeCard noAnimation={noAnimate} key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeListing;
