import CommonHead from "@/components/CommonHead/CommonHead";
import RecipeListing from "@/components/RecipeListing/RecipeListing";
import Section from "@/components/Section/Section";
import RecipeCardProps from "@/models/RecipeProps";
import MetaDataProps from "@/models/MetaDataProps";
import { GetServerSideProps } from "next";

const RecipeTag = ({ recipes, tag }: { recipes: RecipeCardProps[]; tag: string }) => {
  const capitalizedTag = tag.charAt(0).toUpperCase() + tag.slice(1);
  const meta: MetaDataProps = {
    metaData: {
      title: `Delicious ${capitalizedTag} Recipes | Easy & Tasty Ideas`,
      description: `Explore a curated collection of the best ${tag.toLowerCase()} recipes. Find easy, flavorful, and quick meal ideas to suit your ${tag.toLowerCase()} cravings.`,
      keywords: `easy ${tag.toLowerCase()} recipes, best ${tag.toLowerCase()} meals, how to cook ${tag.toLowerCase()}, quick ${tag.toLowerCase()} ideas, ${tag.toLowerCase()} dishes`,
      og: {
        title: `Top ${capitalizedTag} Recipes to Try Today`,
        description: `Discover flavorful ${tag.toLowerCase()} recipes perfect for any occasion. Step-by-step instructions and inspiration for your next meal.`,
        image: `${process.env.NEXT_RECIPES_API_IMAGE_URL}/3.webp`,
      },
    },
  };
  return (
    <>
      <CommonHead metaData={meta.metaData} />
      <Section>
        <h1 className="h1 text-center pb-large">
          Recipes Tagged With <span className="capitalize">{tag}</span>
        </h1>
        <RecipeListing recipes={recipes} />
      </Section>
    </>
  );
};

export default RecipeTag;

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const tag = context.params?.tag as string;
    const response = await fetch(`${process.env.NEXT_RECIPES_API_URL}/tag/${tag}`);
    const data = await response.json();
    const recipes: RecipeCardProps[] = data.recipes;
    if (!Array.isArray(recipes) || recipes.length === 0) {
      return { notFound: true };
    }
    return {
      props: {
        recipes,
        tag: tag.charAt(0).toUpperCase() + tag.slice(1),
      },
    };
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};
