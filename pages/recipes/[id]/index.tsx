import { RecipeDetailProps } from "@/models/RecipeProps";
import CommonHead from "@/components/CommonHead/CommonHead";
import RecipeDetail from "@/components/RecipeDetail/RecipeDetail";
import MetaDataProps from "@/models/MetaDataProps";

const RecipeDetailPage = ({ recipeDetail }: { recipeDetail: RecipeDetailProps }) => {
  const meta: MetaDataProps = {
    metaData: {
      title: `${recipeDetail.name}`,
      description: `${recipeDetail.instructions.map((instruction) => `${instruction}`)}`,
      keywords: `${recipeDetail.tags.map((tag) => `${tag}`)}`,
      og: {
        title: `${recipeDetail.name}`,
        description: `${recipeDetail.instructions.map((instruction) => `${instruction}`)}`,
        image: recipeDetail.image,
      },
    },
  };
  return (
    <>
      <CommonHead metaData={meta.metaData} />
      <RecipeDetail recipeDetail={recipeDetail} />
    </>
  );
};
export default RecipeDetailPage;

export async function getServerSideProps(context: { params: { id: string } }) {
  try {
    const id = context.params.id;
    const response: Response = await fetch(`${process.env.NEXT_RECIPES_API_URL}/${id}`);
    const data = await response.json();
    if (response.status === 404) {
      return {
        notFound: true,
      };
    }
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }
    return {
      props: {
        recipeDetail: data,
      },
    };
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
}
