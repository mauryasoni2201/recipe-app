import Link from "next/link";

const NotFound = () => {
  return (
    <section className="not-found">
      <div className="container">
        <div className="not-found-content-wrapper">
          <h1 className="h1 text-center">Page Not Found</h1>
          <p className="p text-center">
            Oops! You seem to have lost your way. Click below to find your favourite recipe.
          </p>
          <div className="link text-center">
            <Link className="btn btn-primary" href={"/"}>
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default NotFound;
