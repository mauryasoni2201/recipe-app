import Section from "@/components/Section/Section";

const RecipeCategory = () => {
  return (
    <Section>
      <h1 className="h1">Category</h1>
    </Section>
  );
};
export default RecipeCategory;

export async function getServerSideProps(context: { params: { category: string } }) {
  const category = context.params.category;
  console.log(category);
  const response = await fetch(`${process.env.NEXT_RECIPES_API_URL}/meal-type/${category}`);
  const data = await response.json();
  console.log(data);
}
