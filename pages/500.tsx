import Error from "@/components/Error/Error";
import Section from "@/components/Section/Section";
import { NextPageContext } from "next";

function ErrorPage({ message }: { message: string }) {
  return (
    <Section>
      <Error message={message} />
    </Section>
  );
}

ErrorPage.getInitialProps = ({ err }: NextPageContext) => {
  const message = err?.message ?? "Unexpected error occurred.";
  return { message };
};

export default ErrorPage;
