import Link from "next/link";
import Image from "next/image";
import { RecipeDetailProps } from "@/models/RecipeProps";
import { Rating } from "@mui/material";
import Section from "../Section/Section";
import { useDispatch, useSelector } from "react-redux";
import store from "@/store/store";
import { recipeStoreActions } from "@/store/slices/recipeSlice";
import Swal from "sweetalert2";

const RecipeDetail = ({ recipeDetail }: { recipeDetail: RecipeDetailProps }) => {
  const dispatch = useDispatch();
  const { favoriteRecipe } = useSelector(store.getState);
  const handleAddToFavorites = () => {
    const recipe = {
      id: recipeDetail.id,
      name: recipeDetail.name,
      image: recipeDetail.image,
      tags: recipeDetail.tags,
    };
    const findRecipeInFavorites = favoriteRecipe.some(({ id }) => id == recipe.id);
    if (!findRecipeInFavorites) {
      dispatch(
        recipeStoreActions.addRecipe({
          id: recipeDetail.id,
          name: recipeDetail.name,
          image: recipeDetail.image,
          tags: recipeDetail.tags,
        })
      );
      return Swal.fire({
        title: "Recipe added to your favorites successfully!",
        icon: "success",
      });
    }
    return Swal.fire({
      title: "This recipe is already in your favorites.",
      icon: "error",
    });
  };
  return (
    <Section className="recipe-detail">
      <h1 className="h1 pb-medium">{recipeDetail.name}</h1>
      <div className="tags">
        {recipeDetail.tags.map((tag) => (
          <div key={`${tag}`} className="tag-wrapper">
            <Link href={`/recipes/tag/${tag.toLowerCase()}`} className="tag">
              {tag}
            </Link>
          </div>
        ))}
      </div>
      <div className="review-and-actions">
        <div className="rating-and-reviews">
          <Rating name="half-rating-read" defaultValue={recipeDetail.rating} precision={0.5} readOnly />
          <div className="review-count">({recipeDetail.reviewCount})</div>
        </div>
        <div className="add-to-favorites">
          <button onClick={handleAddToFavorites} className="btn btn-primary">
            Add to Favorites
          </button>
        </div>
      </div>
      <div className="recipe-image">
        <Image src={recipeDetail.image} fill alt={recipeDetail.name} loading="lazy" />
      </div>
      <h2 className="h2 pb-medium">Details</h2>
      <ul className="details">
        <li>⏲️ Prep time: {recipeDetail.prepTimeMinutes}</li>
        <li>🍳 Cook time: {recipeDetail.cookTimeMinutes}</li>
        <li>🍽️ Servings: {recipeDetail.servings}</li>
      </ul>
      <h2 className="h2 pb-medium">Ingredients</h2>
      <ul className="details">
        {recipeDetail.ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
      <h2 className="h2 pb-medium">Instructions</h2>
      <ul className="details instructions">
        {recipeDetail.instructions.map((instruction) => (
          <li key={instruction}>{instruction}</li>
        ))}
      </ul>
    </Section>
  );
};
export default RecipeDetail;
