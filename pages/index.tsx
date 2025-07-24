import CategoryListing from "@/components/CategoryListing/CategoryListing";
import CommonHead from "@/components/CommonHead/CommonHead";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import RecipeListing from "@/components/RecipeListing/RecipeListing";
import Section from "@/components/Section/Section";
import HomeSliderProps from "@/models/HomeSliderProps";
import MetaDataProps from "@/models/MetaDataProps";

export default function Home({ data }: HomeSliderProps) {
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
      },
    },
  };
  return (
    <>
      <CommonHead metaData={meta.metaData} />
      <HomeSlider recipes={data.recipes} />
      <CategoryListing categories={data.categories} />
      <Section className="pt-none">
        <h2 className="h2 pb-large">Top Rated Recipes</h2>
        <RecipeListing recipes={data.topRatedRecipes} />
      </Section>
      <Section className="pt-none">
        <h2 className="h2 pb-large">Under 30 Minutes</h2>
        <RecipeListing recipes={data.underThirtyMinutesRecipes} />
      </Section>
    </>
  );
}

export async function getServerSideProps() {
  const response: Response = await fetch(`${process.env.NEXT_RECIPES_API_URL}`);
  const data = await response.json();
  const filteredCategory = [...new Set(data.recipes.flatMap((recipe: { mealType: string }) => recipe.mealType))];
  const topRatedRecipes = data.recipes.filter((element: { rating: number }) => element.rating > 4.5);
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
        categories: filteredCategory,
      },
    },
  };
}
