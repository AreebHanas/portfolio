import Toolbar from "../Components/Toolbar/Topbar.js";
import Home from "../Pages/Home-page/Home.js";
import About from "../Pages/About-page/About.js";
import Skills from "../Pages/Skills-page/Skills.js";
import Portfolio from "../Pages/Portfolio-page/Portfolio.js";
import Contact from "../Pages/Contact-page/Contact.js";
import Lenis from "lenis";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useHashScroll from "../Hooks/useHashUpdater.js"; // 👈 new hook!
import "lenis/dist/lenis.css";
import Footer from "../Components/Footer/Footer.js";

gsap.registerPlugin(ScrollTrigger);

function Layout() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('button[href^="#"]') || e.target.closest('a[href^="#"]');
      if (anchor) {
        const targetId = anchor.getAttribute("href").substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          lenis.scrollTo(targetEl, {
            offset: -150,
            duration: 1.2,
            easing: (t) => 1 - Math.pow(1 - t, 3),
          });
          window.history.pushState(null, "", `#${targetId}`);
        }
      }
    };

    gsap.utils.toArray(".section").forEach((section) => {
      gsap.fromTo(section, 
        { autoAlpha: 0, y: 0 }, 
        {
          autoAlpha: 1,
          y: 0,
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reset"
          }
        }
      );
    });

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(lenis.raf);
      lenis.destroy();
    };
  }, []);

  useHashScroll(["home", "about", "skills", "portfolio", "contact"]);

  return (
    <div className="scroll-container">
      <Toolbar />
      <section className="section"><Home /></section>
      <section className="section"><About /></section>
      <section className="section"><Skills /></section>
      <section className="section"><Portfolio /></section>
      <section className="section"><Contact /></section>
      <Footer />
    </div>
  );
}

export default Layout;
