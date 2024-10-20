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
        <title>Jayjeet Kumar | Frontend Developer & Web3 Engineer</title>
        <meta
          name="description"
          content="Explore the portfolio of Jayjeet Kumar, a skilled Frontend Developer proficient in Next.js, React, Tailwind CSS, and Web3 technologies. Check out his projects, experience, and contact details."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Jayjeet Kumar, Frontend Developer, React, Next.js, Tailwind CSS, Web Developer, Web3 Developer, Software Engineer, Jayjeet Portfolio"
        />
        <meta name="author" content="Jayjeet Kumar" />
        <link rel="icon" href="/assets/avatar.webp" />

        {/* Open Graph Meta Tags for Social Media */}
        <meta
          property="og:title"
          content="Jayjeet Kumar | Frontend Developer & Web3 Engineer"
        />
        <meta
          property="og:description"
          content="Discover the work and projects of Jayjeet Kumar, a talented frontend developer with expertise in modern web technologies."
        />
        <meta property="og:image" content="/assets/avatar.webp" />
        <meta property="og:url" content="https://your-portfolio-url.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Jayjeet Kumar | Frontend Developer & Web3 Engineer"
        />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Jayjeet Kumar, showcasing projects and skills in modern web technologies like React, Next.js, and Web3."
        />
        <meta name="twitter:image" content="/assets/avatar.webp" />

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
