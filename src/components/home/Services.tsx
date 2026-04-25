import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import Container from "../Container";

import newaImg from "/src/assets/services/newa.png";
import almoganImg from "/src/assets/services/almogan.png";
import vImg from "/src/assets/services/v.png";
import nasayemImg from "/src/assets/services/nasayem.png";
import footerWatermark from "/src/assets/branding/footer-watermark.png";

const Services = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);

  const services = [
    {
      id: "logo",
      title: t("servicesData.logoTitle"),
      align: "left",
      image: newaImg,
      description: t("servicesData.logoDesc"),
      link: "https://www.behance.net/gallery/247818409/Newa-Decoration-Brand-Identity-Visual-Physics",
    },
    {
      id: "visual",
      title: t("servicesData.visualTitle"),
      align: "right",
      image: almoganImg,
      description: t("servicesData.visualDesc"),
      link: "https://www.behance.net/gallery/247707801/AL-MURGAN-IDENTITY?tracking_source=project_owner_other_projects",
    },
    {
      id: "brand",
      title: t("servicesData.strategyTitle"),
      align: "left",
      image: vImg,
      description: t("servicesData.strategyDesc"),
      link: "https://www.behance.net/gallery/240432225/Brand-Identity-Guidelines",
    },
    {
      id: "art",
      title: t("servicesData.artTitle"),
      align: "right",
      image: nasayemImg,
      description: t("servicesData.artDesc"),
      link: "https://www.behance.net/gallery/247823739/Nasayem-Personal-Identity-Visual-Branding",
    },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-services-animate]",
        { autoAlpha: 0, y: 30 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 74%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 md:py-32 relative border-t border-white/5 bg-transparent text-white"
    >
      <img
        src={footerWatermark}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none select-none z-0 opacity-[0.08] w-[78%] max-w-4xl left-1/2 -translate-x-1/2 -bottom-20"
      />
      <Container>
        <div
          data-services-animate
          className="relative z-10 mb-16 md:mb-24 md:w-1/2 md:ml-auto text-start"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            {t("services.heading")}
          </h2>
          <p className="text-sm md:text-base font-light leading-relaxed text-gray-400">
            <strong className="font-medium text-white">
              {t("home.servicesIntroStrong")}
            </strong>{" "}
            {t("home.servicesIntroText")}
          </p>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              data-services-animate
              className={`group flex flex-col md:flex-row gap-0 items-stretch ${service.align === "right" ? "md:flex-row-reverse" : ""}`}
            >
              {/* Title Box */}
              <a
                href={service.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full md:w-1/2 h-28 md:h-36 bg-gradient-rose flex items-center px-8 md:px-12 cursor-pointer hover:brightness-110 transition-all no-underline"
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-lg md:text-2xl tracking-widest font-light text-inherit uppercase">
                    {service.title}
                  </span>
                  <ArrowRight className="w-5 h-5 text-inherit opacity-0 group-hover:opacity-100 -translate-x-3 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </a>

              {/* Info Box */}
              <div className="w-full md:w-1/2 border-gradient bg-dark-bg/30 relative overflow-hidden flex flex-col justify-between p-6 md:p-8 h-[168px] md:h-[216px]">
                <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed max-w-xs">
                  {service.description}
                </p>

                <div className="flex items-center mt-4">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-rose-gold hover:text-white transition-colors"
                  >
                    {t("services.viewDetails")}
                  </a>

                  {/* Logo — now next to the link */}
                  <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] opacity-40 pointer-events-none transition-all duration-300 group-hover:opacity-70 group-hover:scale-110 group-hover:-translate-y-1">
                    <img
                      src={service.image}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div className="hidden md:block absolute right-6 bottom-6 text-[10px] text-gray-600 tracking-widest">
        03
      </div>
    </section>
  );
};

export default Services;
