import Link from "next/link";

const CategoryCard = ({ category }: { category: string }) => {
  return (
    <div className="category-card">
      <Link className="content-wrapper" href={`recpies/category/${category.toLowerCase()}`}>
        <div className="content">
          <p className="text">{category}</p>
        </div>
      </Link>
    </div>
  );
};
export default CategoryCard;
