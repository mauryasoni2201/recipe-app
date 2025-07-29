import Link from "next/link";

const CategoryCard = ({ category }: { category: string }) => {
  return (
    <div className="category-card" data-aos-delay="600" data-aos="fade-up">
      <div className="content-wrapper">
        <Link
          aria-label={category.toLowerCase()}
          className="category-link"
          href={`/categories/${category.toLowerCase()}/`}
        ></Link>
        <div className="content">
          <p className="text">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
