import MainLayout from "@/layouts/Layout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Provider } from "react-redux";
import { client } from "@/utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Space_Grotesk } from "next/font/google";
import { useEffect } from "react";
import store from "@/store/store";
import AOS from "aos";
import "@/scss/index.scss";
import "aos/dist/aos.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <main className={spaceGrotesk.className}>
      <Provider store={store}>
        <QueryClientProvider client={client}>
          <SpeedInsights />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </QueryClientProvider>
      </Provider>
    </main>
  );
}
