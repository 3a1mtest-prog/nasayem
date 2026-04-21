import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import Container from "../Container";
import rightImg from "../../assets/hero/right.png";
import leftImg from "../../assets/hero/left.png";
import watermark from "../../assets/branding/hero-watermark.png";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language.startsWith("ar");
  const heroRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.set("[data-hero-left]", {
        transformOrigin: "left center",
        scale: 0,
        autoAlpha: 0,
        yPercent: -50,
      });
      gsap.set("[data-hero-right]", {
        transformOrigin: "right center",
        scale: 0,
        autoAlpha: 0,
        yPercent: -50,
      });
      gsap.set("[data-hero-watermark]", {
        autoAlpha: 0,
        y: -20,
      });

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .to("[data-hero-left], [data-hero-right]", {
          scale: 1,
          autoAlpha: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "back.out(1.7)",
        })

        .to(
          "[data-hero-watermark]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.5,
          },
          "-=1",
        )
        .from(
          "[data-hero-title]",
          { y: 52, autoAlpha: 0, duration: 0.8 },
          "-=0.4",
        )
        .from(
          "[data-hero-sub]",
          { y: 30, autoAlpha: 0, duration: 0.6 },
          "-=0.35",
        )
        .from(
          "[data-hero-tag]",
          { y: 22, autoAlpha: 0, duration: 0.5 },
          "-=0.3",
        )
        .from(
          "[data-hero-cta]",
          { y: 24, autoAlpha: 0, duration: 0.5 },
          "-=0.25",
        )
        .to("[data-hero-left], [data-hero-right]", {
          autoAlpha: 0.4,
          duration: 1.2,
          stagger: 0.2,
          ease: "back.out(1.7)",
        });
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="relative min-h-[calc(100vh-65px)] flex items-center justify-center "
    >
      <div
        data-hero-left
        className="absolute left-0 top-1/2 w-32 md:w-[250px] pointer-events-none z-0"
      >
        <img
          src={leftImg}
          alt="Brand decorative element left"
          className="w-full h-auto object-contain"
        />
      </div>
      <div
        data-hero-right
        className="absolute right-0 top-1/2 w-32 md:w-[250px] pointer-events-none z-0"
      >
        <img
          src={rightImg}
          alt="Brand decorative element right"
          className="w-full h-auto object-contain"
        />
      </div>
      <div
        data-hero-watermark
        className="absolute -right-20 md:right-10 -top-20 md:-top-40 w-64 md:w-[650px] pointer-events-none z-0"
      >
        <img
          src={watermark}
          alt="Logo"
          className="w-full h-auto object-contain"
        />
      </div>

      <Container className="relative z-10 text-center max-w-4xl pt-12 md:pt-0">
        <h1
          data-hero-title
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 bg-linear-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent"
        >
          {t("hero.titleLine1")} <br />
          {t("hero.titleLine2")}
        </h1>

        <p
          data-hero-sub
          className={`text-base md:text-xl text-gray-400 font-light tracking-wide mb-4 ${isArabic ? "leading-loose md:leading-loose" : ""}`}
        >
          <strong className="text-inherit font-medium">
            {t("hero.sublineStrong")}
          </strong>{" "}
          {t("hero.sublineRest")}
        </p>

        <p
          data-hero-tag
          className={`text-[10px] md:text-xs text-gray-500 mb-12 ${isArabic ? "leading-loose tracking-[0.12em]" : "tracking-[0.3em] uppercase"}`}
        >
          {t("hero.tagline")}
        </p>

        <div data-hero-cta className="flex justify-center">
          <a
            href="#cta"
            className=" cursor-pointer relative px-6 py-3 md:px-10 md:py-4 rounded-full text-xs md:text-sm tracking-[0.2em] font-bold text-black transition-all group overflow-hidden flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#d4c4c0_0%,#1a1a1a_100%)] opacity-90 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 rounded-full border border-[#d4c4c0]/40" />
            <span className="relative z-10">{t("hero.cta")}</span>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
