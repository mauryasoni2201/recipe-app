import Header from "@/components/Header/Header";
import "@/scss/index.scss";
import type { AppProps } from "next/app";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={spaceGrotesk.className}>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
