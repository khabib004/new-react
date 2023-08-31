import { Fragment } from "react";

import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";
import Services from "../components/services/Services";
import Portfolio from "../components/portfolio/Portfolio";

// import { Hero } from "../components/hero/Hero";
// import { Header } from "../components/header/Header";

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Portfolio />
      <Footer />
    </Fragment>
  );
};

export default HomePage;
