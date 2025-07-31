import Head from "next/head";
import { useRouter } from "next/router";
import MetaDataProps from "@/models/MetaDataProps";

const CommonHead = ({ metaData }: MetaDataProps) => {
  const { title, description, keywords, og } = metaData;
  const router = useRouter();
  const baseUrl = "https://recipe-app-ms.vercel.app";
  const canonicalUrl = `${baseUrl}${router.asPath.split("?")[0]}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="google-site-verification" content="VlNYaSNCxXfOvMA4zHHwIUiH7i_qWBpF2fSV_38U6yE" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      <meta property="og:image" content={og.image} />
      <meta property="og:type" content="website" />
      <link rel="canonical" href={canonicalUrl} />
      <script
        defer
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "${title}",
                "url": "${canonicalUrl}"
              }
            `.trim(),
        }}
      />
    </Head>
  );
};

export default CommonHead;
