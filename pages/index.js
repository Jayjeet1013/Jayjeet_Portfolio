import Contact from "../components/Contact";
import Experience from "../components/Experience";
import HomePage from "../components/HomePage";
import Me from "../components/Me";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import Head from "next/head";
import { useEffect } from "react";
import ReactGA from "react-ga";

export default function Home() {
  useEffect(() => {
    ReactGA.initialize("G-42CDFZZ1TL");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <>
      <Head>
        <title>Jayjeet Kumar</title>
        <meta
          name="description"
          content="Welcome to the professional portfolio of Jayjeet Kumar, a Frontend developer specializing in Next.js, React, and Tailwind CSS. Discover projects, skills, and experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Jayjeet Kumar, Jayjeet Portfolio, Frontend Developer, Next.js, React, Tailwind CSS, Web Developer, AI Engineer,Web3 Developer,Software Engineer"
        />
        <meta name="author" content="Jayjeet Kumar" />
        <link rel="icon" href="/assets/avatar.webp" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      <div>
        <HomePage />
        <Portfolio />
        <Experience />
        {/* <Me /> */}
        <Contact />
        <Footer />
      </div>
    </>
  );
}
