import CommonHead from "@/components/CommonHead/CommonHead";
import Section from "@/components/Section/Section";
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
      <Section>
        <h1 className="h1 text-center pb-medium">Recipes</h1>
      </Section>
    </>
  );
};
export default Recipes;
