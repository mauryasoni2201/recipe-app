import CommonHead from "@/components/CommonHead/CommonHead";
import Section from "@/components/Section/Section";
import RecipeCardProps from "@/models/RecipeProps";
import MetaDataProps from "@/models/MetaDataProps";
import RecipeListing from "@/components/RecipeListing/RecipeListing";

const RecipeCategory = ({ recipes, category }: { recipes: RecipeCardProps[]; category: string }) => {
  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);
  const lowerCategory = category.toLowerCase();
  const meta: MetaDataProps = {
    metaData: {
      title: `${capitalizedCategory} Recipes | Easy, Healthy & Tasty ${capitalizedCategory} Dishes`,
      description: `Looking for delicious ${lowerCategory} recipes? Discover quick, healthy, and family-approved ${lowerCategory} dishes to make today.`,
      keywords: `${lowerCategory} recipes, healthy ${lowerCategory} ideas, quick ${lowerCategory} meals, easy ${lowerCategory} recipes, ${lowerCategory} dishes for dinner`,
      og: {
        title: `Best ${capitalizedCategory} Recipes for Any Occasion`,
        description: `Explore our top-rated ${lowerCategory} recipes for flavorful and easy cooking. Great for any meal and every taste.`,
      },
    },
  };
  return (
    <>
      <CommonHead metaData={meta.metaData} />
      <Section>
        <h1 className="h1 text-center pb-large">
          Best <span className="capitalize">{category}</span> Recipes to Try
        </h1>
        <RecipeListing recipes={recipes} />
      </Section>
    </>
  );
};
export default RecipeCategory;

export async function getServerSideProps(context: { params: { category: string } }) {
  try {
    const category = context.params.category;
    const response = await fetch(`${process.env.NEXT_RECIPES_API_URL}/meal-type/${category}`);
    const data = await response.json();
    const recipes: RecipeCardProps[] = data.recipes;
    if (!recipes || recipes.length === 0) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        category: `${category.charAt(0).toUpperCase() + category.slice(1)}`,
        recipes: recipes,
      },
    };
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return {
      notFound: true,
    };
  }
}
