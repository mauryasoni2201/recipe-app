import MainLayout from "@/layouts/Layout";
import "@/scss/index.scss";
import { client } from "@/utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Space_Grotesk } from "next/font/google";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import store from "@/store/store";
import { Provider } from "react-redux";

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
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </QueryClientProvider>
      </Provider>
    </main>
  );
}
