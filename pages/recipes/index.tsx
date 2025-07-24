import CommonHead from "@/components/CommonHead/CommonHead";
import MetaDataProps from "@/models/MetaDataProps";

const Recipes = () => {
  const meta: MetaDataProps = {
    metaData: {
      title: "Freshly | Recipes",
      description:
        "Discover mouth-watering recipes, cooking tips, and flavorful food categories that will inspire your next meal.",
      keywords: "delicious recipes, food blog, easy meals, cooking tips, recipe ideas, foodie hub",
      og: {
        title: "Freshly | Recipes",
        description:
          "Explore a variety of curated recipes and cooking tips perfect for any occasion. Welcome to your new go-to food destination!",
      },
    },
  };
  return (
    <>
      <CommonHead metaData={meta.metaData} />
    </>
  );
};
export default Recipes;
