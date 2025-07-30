import { useEffect, useState } from "react";
import MetaDataProps from "@/models/MetaDataProps";
import CommonHead from "@/components/CommonHead/CommonHead";
import Section from "@/components/Section/Section";
import { useSelector } from "react-redux";
import store from "@/store/store";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("@/components/Loader/Loader"), {
  ssr: false,
});

const Favorites = dynamic(() => import("@/components/RecipeListing/RecipeListing"), {
  loading: () => <Loader />,
  ssr: false,
});

const RecipeFavorites = () => {
  const [isClient, setIsClient] = useState(false);
  const favoriteRecipe = useSelector((state: ReturnType<typeof store.getState>) => state.favoriteRecipe);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const meta: MetaDataProps = {
    metaData: {
      title: "Freshly | Your Favorites",
      description:
        "Browse your favorite saved recipes all in one place. Find quick meals, healthy options, and comfort food you love.",
      keywords: "favorite recipes, saved recipes, quick meals, healthy recipes, comfort food, meal ideas",
      og: {
        title: "Freshly | Your Favorites",
        description: "Easily access and cook the recipes you've saved as favorites.",
        image: `https://${process.env.NEXT_RECIPES_API_DOMAIN}/recipe-images/3.webp`,
      },
    },
  };
  return (
    <>
      <CommonHead metaData={meta.metaData} />
      <Section>
        <h1 className="h1 text-center pb-large">Favorites</h1>
        {!isClient ? (
          <Loader />
        ) : favoriteRecipe.length ? (
          <Favorites removeRecipeItem={true} recipes={favoriteRecipe} />
        ) : (
          <p className="text-center">No favorites added yet.</p>
        )}
      </Section>
    </>
  );
};

export default RecipeFavorites;
