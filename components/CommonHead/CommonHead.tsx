import Head from "next/head";
import MetaDataProps from "@/models/MetaDataProps";

const CommonHead = ({ metaData }: MetaDataProps) => {
  const { title, description, keywords, og } = metaData;
  
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      <meta property="og:image" content={og.image} />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default CommonHead;
