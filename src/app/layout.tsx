"use client";
import Footer from "@/layout/footer/Footer";
import "../styles/index.css";
import Header from "@/layout/headers/Header";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import DocumentArea from "@/components/common/DocumentArea";
import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { SpeedInsights } from "@vercel/speed-insights/next";

const ALCHEMY_KEY = process.env.ALCHEMY_ID || "";
const { chains, publicClient } = configureChains(
  [mainnet],
  [
    alchemyProvider({
      apiKey: "qSLiFF0odiy-OqMCvaHeleOBv4UniGse",
    }),
    publicProvider(),
  ]
);
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const body = Outfit({
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--tg-body-font-family",
});

const heading = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tg-heading-font-family",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="$BOOKY - Be The Booky" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body
        suppressHydrationWarning={true}
        className={` ${body.variable} ${heading.variable}`}
      >
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains}>
            <Header />
            {children}
            <SpeedInsights />
            <DocumentArea />
            <Footer />
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
