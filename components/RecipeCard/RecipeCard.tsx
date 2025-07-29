import RecipeProps from "@/models/RecipeProps";
import Image from "next/image";
import Link from "next/link";

const RecipeCard = ({ recipe, noAnimation }: { recipe: RecipeProps; noAnimation?: boolean }) => {
  return (
    <div
      className="recipe-card"
      {...(noAnimation ? { "data-aos": "", "data-aos-delay": "" } : { "data-aos": "fade-up", "data-aos-delay": "600" })}
    >
      <div className="card-wrapper">
        <div className="card-image-and-content">
          <Image fill src={recipe.image} alt={recipe.name} />
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
