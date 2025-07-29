import CommonHead from "@/components/CommonHead/CommonHead";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import RecipeListing from "@/components/RecipeListing/RecipeListing";
import Section from "@/components/Section/Section";
import Recipe from "@/models/RecipeProps";
import MetaDataProps from "@/models/MetaDataProps";
import RecipeSlider from "@/models/RecipeSlider";

export default function Home({
  data: { recipes, underThirtyMinutesRecipes, topRatedRecipes },
}: {
  data: { recipes: RecipeSlider[]; underThirtyMinutesRecipes: Recipe[]; topRatedRecipes: Recipe[] };
}) {
  const meta: MetaDataProps = {
    metaData: {
      title: "Freshly | Home",
      description:
        "Discover mouth-watering recipes, cooking tips, and flavorful food categories that will inspire your next meal.",
      keywords: "delicious recipes, food blog, easy meals, cooking tips, recipe ideas, foodie hub",
      og: {
        title: "Freshly | Home",
        description:
          "Explore a variety of curated recipes and cooking tips perfect for any occasion. Welcome to your new go-to food destination!",
        image: `https://${process.env.NEXT_RECIPES_API_DOMAIN}/recipe-images/3.webp`,
      },
    },
  };
  return (
    <>
      <CommonHead metaData={meta.metaData} />
      <HomeSlider recipes={recipes} />
      <Section className="pb-none">
        <h2 className="h2 pb-large">Top Rated Recipes</h2>
        <RecipeListing recipes={topRatedRecipes} />
      </Section>
      <Section>
        <h2 className="h2 pb-large">Under 30 Minutes</h2>
        <RecipeListing recipes={underThirtyMinutesRecipes} />
      </Section>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response: Response = await fetch(`${process.env.NEXT_RECIPES_API_URL}?limit=50`);
    const data = await response.json();
    const topRatedRecipes = data.recipes.filter((element: { rating: number }) => element.rating > 4.7);
    const underThirtyMinutesRecipes = data.recipes.filter(
      (element: { prepTimeMinutes: number; cookTimeMinutes: number }) =>
        element.prepTimeMinutes + element.cookTimeMinutes < 30
    );
    return {
      props: {
        data: {
          recipes: data.recipes,
          topRatedRecipes,
          underThirtyMinutesRecipes,
        },
      },
    };
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
}
