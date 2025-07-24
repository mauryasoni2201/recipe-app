import CommonHead from "@/components/CommonHead/CommonHead";
import Section from "@/components/Section/Section";
import MetaDataProps from "@/models/MetaDataProps";
import Link from "next/link";

const NotFound = () => {
  const meta: MetaDataProps = {
    metaData: {
      title: "Page not found.",
      description: "Page not found",
      keywords: "not found,page does not exist",
      og: {
        title: "Page not found.",
        description: "Page not found.",
      },
    },
  };
  return (
    <>
      <CommonHead metaData={meta.metaData} />
      <Section className="not-found">
        <div className="not-found-content-wrapper">
          <h1 className="h1 text-center">Not Found!</h1>
          <p className="p text-center">
            Oops! You seem to have lost your way. Click below to find your favourite recipe.
          </p>
          <div className="link text-center">
            <Link className="btn btn-primary" href={"/"}>
              Back To Home
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
};

export default NotFound;
