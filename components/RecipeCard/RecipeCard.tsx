import RecipeProps from "@/models/RecipeProps";
import { recipeStoreActions } from "@/store/slices/recipeSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

const RecipeCard = ({
  recipe,
  noAnimation,
  removeRecipeFromFavorites,
}: {
  recipe: RecipeProps;
  noAnimation?: boolean;
  removeRecipeFromFavorites?: boolean;
}) => {
  const dispatch = useDispatch();
  const handleRemoveItemsFromFavorites = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Recipe removed from favorites successfully.",
          icon: "success",
        });
        dispatch(recipeStoreActions.removeRecipe(recipe.id));
      }
    });
  };
  return (
    <div
      className="recipe-card"
      {...(noAnimation ? { "data-aos": "", "data-aos-delay": "" } : { "data-aos": "fade-up", "data-aos-delay": "600" })}
    >
      <div className="card-wrapper">
        <div className="card-image-and-content">
          <Image fill src={recipe.image} alt={recipe.name} />
          {removeRecipeFromFavorites && (
            <div className="remove-from-favorites">
              <button onClick={handleRemoveItemsFromFavorites} className="btn btn-primary">
                Remove From Favorites
              </button>
            </div>
          )}
          <Link aria-label={recipe.name} className="recipe-link" href={`/recipes/${recipe.id}`} />
          <div className="card-overlay-content">
            <h3 className="h3 title">{recipe.name}</h3>
            <div className="tags">
              {recipe.tags.map((element: string) => (
                <div key={element} className="tag-wrapper">
                  <Link aria-label={recipe.name} className="tag" href={`/recipes/tag/${element.toLowerCase()}`}>
                    {element}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="overlay"></div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
