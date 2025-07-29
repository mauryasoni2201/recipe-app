import CategoryListing from "@/components/CategoryListing/CategoryListing";
import CommonHead from "@/components/CommonHead/CommonHead";
import MetaDataProps from "@/models/MetaDataProps";

const CategoryPage = ({ data }: { data: { categories: string[] } }) => {
  const meta: MetaDataProps = {
    metaData: {
      title: "Recipe Categories | Explore Meals by Type",
      description:
        "Browse recipes by category. Whether you're looking for breakfast, lunch, dinner, or snacks, discover delicious ideas for every meal.",
      keywords: "recipe categories, meal types, breakfast recipes, lunch ideas, dinner recipes, snacks, food types",
      og: {
        title: "Discover Recipe Categories",
        description:
          "Explore a variety of recipes sorted by meal types. Find your next dish by category and start cooking today!",
        image: `https://${process.env.NEXT_RECIPES_API_DOMAIN}/recipe-images/3.webp`,
      },
    },
  };
  return (
    <>
      <CommonHead metaData={meta.metaData} />
      <CategoryListing categories={data.categories} />
    </>
  );
};

export default CategoryPage;

export async function getStaticProps() {
  try {
    const response: Response = await fetch(`${process.env.NEXT_RECIPES_API_URL}?limit=50`);
    const data = await response.json();
    const filteredCategory = [...new Set(data.recipes.flatMap((recipe: { mealType: string }) => recipe.mealType))];
    return {
      props: {
        data: { categories: filteredCategory },
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return {
      props: {
        data: { categories: [] },
      },
      revalidate: 3600,
    };
  }
}
