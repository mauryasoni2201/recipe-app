import { RecipeDetailProps } from "@/models/RecipeProps";
import Section from "../Section/Section";
import Link from "next/link";
import Image from "next/image";

const RecipeDetail = ({ recipeDetail }: { recipeDetail: RecipeDetailProps }) => {
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
      <div className="recipe-image">
        <Image src={recipeDetail.image} fill alt={recipeDetail.name} />
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
