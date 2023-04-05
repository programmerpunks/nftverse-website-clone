import Head from "next/head";

import Hero from "@/components/Hero/hero";
import About from "@/components/About/about";
import Benefit from "@/components/Benefit/benefit";

export default function Home() {
  return (
    <>
      <Head>
        <title>NFTVERSE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <About />
      <Benefit />
    </>
  );
}
