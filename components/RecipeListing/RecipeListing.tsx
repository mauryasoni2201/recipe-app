import Recipe from "@/models/RecipeProps";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeListing = ({
  recipes,
  noAnimate,
  removeRecipeItem,
}: {
  recipes: Recipe[];
  noAnimate?: boolean;
  removeRecipeItem?: boolean;
}) => {
  return (
    <div className="recipe-listing">
      {recipes.map((recipe: Recipe) => (
        <RecipeCard
          removeRecipeFromFavorites={removeRecipeItem}
          noAnimation={noAnimate}
          key={recipe.id}
          recipe={recipe}
        />
      ))}
    </div>
  );
};
export default RecipeListing;
