import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from "next/link";
import RecipeSlider from "@/models/RecipeSlider";

const HomeSlider = ({ recipes }: { recipes: RecipeSlider[] }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    pauseOnFocus: false,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {recipes.map((recipe: RecipeSlider) => {
        return (
          <Link key={recipe.id} className="slider-link" href={`/recipes/${recipe.id}`}>
            <div className="slider-image-wrapper">
              <Image src={recipe.image} alt={recipe.name} fill />
            </div>
          </Link>
        );
      })}
    </Slider>
  );
};
export default HomeSlider;
