import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";
import Container from "../Container";
import aboutImg from "../../assets/about/about.png";

const About = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        "[data-about-animate]",
        { autoAlpha: 0, y: 26 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.09,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 md:py-32 relative border-t border-text/10 overflow-hidden"
    >
      <Container>
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div
            data-about-animate
            className="order-2 md:order-1 relative aspect-square max-h-64 md:max-h-none p-4 md:p-8 flex items-center justify-center overflow-hidden bg-dark-bg/50 border border-text/10 rounded-2xl"
          >
            <img
              src={aboutImg}
              alt="About Nasayem"
              className="relative z-10 w-full h-full object-contain"
            />
          </div>

          <div className="order-1 md:order-2 space-y-8 md:space-y-12">
            <h2
              data-about-animate
              className="text-3xl md:text-4xl font-display font-bold mb-4 md:mb-8"
            >
              {t("about.heading")}
            </h2>

            <div data-about-animate>
              <h3 className="text-lg md:text-xl tracking-widest font-light text-gray-400 mb-2 uppercase">
                {t("home.aboutRole")}
              </h3>
              <h4 className="text-base md:text-lg tracking-widest font-medium text-inherit mb-6 md:mb-12 uppercase">
                {t("home.name")}
              </h4>
            </div>

            <div data-about-animate>
              <h5 className="text-[10px] md:text-sm tracking-widest text-rose-gold mb-3 md:mb-4">
                [01] {t("home.aboutOperationalTitle")}
              </h5>
              <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                {t("about.body")}
              </p>
            </div>

            <div data-about-animate>
              <h5 className="text-[10px] md:text-sm tracking-widest text-rose-gold mb-3 md:mb-4">
                [02] {t("home.aboutCoreTitle")}
              </h5>
              <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                <li>
                  <strong className="text-inherit font-medium">
                    {t("home.aboutPoint1Title")}
                  </strong>{" "}
                  {t("home.aboutPoint1Body")}
                </li>
                <li>
                  <strong className="text-inherit font-medium">
                    {t("home.aboutPoint2Title")}
                  </strong>{" "}
                  {t("home.aboutPoint2Body")}
                </li>
                <li>
                  <strong className="text-inherit font-medium">
                    {t("home.aboutPoint3Title")}
                  </strong>{" "}
                  {t("home.aboutPoint3Body")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
