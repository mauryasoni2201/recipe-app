import Recipe from "@/models/RecipeProps";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeListing = ({ recipes }: { recipes: Recipe[] }) => {
  return (
    <div className="recipe-listing">
      {recipes.map((recipe: Recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeListing;
