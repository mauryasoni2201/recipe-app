import Link from "next/link";

const CategoryCard = ({ category }: { category: string }) => {
  return (
    <div className="category-card">
      <div className="content-wrapper">
        <Link className="category-link" href={`/recipes/category/${category.toLowerCase()}/`}></Link>
        <div className="content">
          <p className="text">{category}</p>
        </div>
      </div>
    </div>
  );
};
export default CategoryCard;
