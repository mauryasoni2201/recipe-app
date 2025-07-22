import Link from "next/link";

const NotFound = () => {
  return (
    <section className="not-found">
        <div className="container">
          <div className="not-found-content-wrapper pb-large">
            <h1 className="h1 text-center">
                Page Not Found
            </h1>
            <p className="p text-center pt-large">
                Oops! You seem to have lost your way. Click below to find your way to home.
            </p>
          <div className="link text-center pt-large">
              <Link className="btn btn-primary" href={'/'}>Back To Home</Link>
          </div>
          </div>
        </div>
    </section>
  )
}
export default NotFound;