import CategoryCard from "../CategoryCard/CategoryCard";
import Section from "../Section/Section";

const CategoryListing = ({ categories }: { categories: string[] }) => {
  return (
    <Section>
      <h1 className="h1 pb-large">Recipes Categories</h1>
      <div className="category-listing">
        {categories.map((category: string) => (
          <CategoryCard key={category} category={category} />
        ))}
      </div>
    </Section>
  );
};
export default CategoryListing;
