// ============================================================
// النسخة v8 — السكشن كلها (صورة + كلام) تطلع سوا بحركة سموذي موحّدة
// ============================================================

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "react-i18next";
import Container from "../Container";
import aboutImg from "../../assets/about/about.png";

gsap.registerPlugin(ScrollTrigger);

// ✅ إحداثيات دقيقة من الصورة الأصلية (1153×1920)
const DOTS = [
  { id: 1, top: "3.75%", left: "10.21%" },
  { id: 2, top: "51.03%", left: "28.79%" },
  { id: 3, top: "51.03%", left: "88.89%" },
  { id: 4, top: "57.92%", left: "40.26%" },
  { id: 5, top: "57.93%", left: "31.48%" },
  { id: 6, top: "59.55%", left: "28.79%" },
  { id: 7, top: "62.18%", left: "33.16%" },
  { id: 8, top: "62.19%", left: "10.21%" },
  { id: 9, top: "80.24%", left: "40.25%" },
];

const ORANGE_BASE = "rgba(255, 153, 51, 0.85)";
const ORANGE_SOFT = "rgba(255, 153, 51, 0.55)";
const ORANGE_HOT = "rgba(255, 170, 80, 1)";

const About = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [hoveredDot, setHoveredDot] = useState<number | null>(null);

  useGSAP(
    () => {
      // 🎬 السكشن كاملة (صورة + كلام) كتلة وحدة — مخفية بالبداية
      gsap.set(wrapperRef.current, {
        autoAlpha: 0,
        y: 60,
        filter: "blur(14px)",
      });
      gsap.set("[data-about-dot]", { autoAlpha: 0, scale: 0 });

      // 🌊 حركة وحدة موحّدة — كل شي يطلع سوا بنعومة جبارة
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });

      // كل السكشن (الصورة + الكلام) يطلعو سوا
      tl.to(wrapperRef.current, {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.7,
        ease: "power3.out",
      })
        // النقاط تنبثق بعدها بنعومة
        .to(
          "[data-about-dot]",
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.6)",
            stagger: 0.06,
          },
          "-=0.8",
        );

      // 💫 نبض مستمر للنقاط بعد ما تظهر
      gsap.to("[data-about-dot]", {
        scale: 1.18,
        duration: 2.2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.2, from: "random" },
        delay: 2.2,
      });
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
        {/* 👇 الغلاف الموحّد — كل المحتوى جواه يتحرك سوا بنعومة */}
        <div
          ref={wrapperRef}
          style={{ willChange: "transform, opacity, filter" }}
        >
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* الحاوية الخارجية للصورة */}
            <div className="order-2 md:order-1 relative aspect-square max-h-64 md:max-h-none p-4 md:p-8 flex items-center justify-center overflow-hidden bg-dark-bg/50 border border-text/10 rounded-2xl">
              <div
                className="relative h-full"
                style={{
                  aspectRatio: "1153 / 1920",
                  maxWidth: "100%",
                }}
              >
                <img
                  src={aboutImg}
                  alt="About Nasayem"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />

                {DOTS.map((dot) => {
                  const isHovered = hoveredDot === dot.id;
                  return (
                    <span
                      key={dot.id}
                      data-about-dot
                      onMouseEnter={() => setHoveredDot(dot.id)}
                      onMouseLeave={() => setHoveredDot(null)}
                      style={{
                        position: "absolute",
                        top: dot.top,
                        left: dot.left,
                        width: isHovered ? "16px" : "8px",
                        height: isHovered ? "16px" : "8px",
                        borderRadius: "50%",
                        transform: "translate(-50%, -50%)",
                        background: isHovered ? ORANGE_HOT : ORANGE_BASE,
                        boxShadow: isHovered
                          ? `0 0 14px 6px ${ORANGE_SOFT}, 0 0 32px 14px rgba(255,153,51,0.35), 0 0 60px 20px rgba(255,153,51,0.18)`
                          : `0 0 6px 2px rgba(255,153,51,0.35)`,
                        transition:
                          "width 0.4s cubic-bezier(0.34,1.56,0.64,1), height 0.4s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease, box-shadow 0.4s ease",
                        cursor: "pointer",
                        zIndex: 20,
                        willChange: "transform, opacity",
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* عمود الكلام */}
            <div className="order-1 md:order-2 space-y-8 md:space-y-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 md:mb-8">
                {t("about.heading")}
              </h2>
              <div>
                <h3 className="text-lg md:text-xl tracking-widest font-light text-gray-400 mb-2 uppercase">
                  {t("home.aboutRole")}
                </h3>
                <h4 className="text-base md:text-lg tracking-widest font-medium text-inherit mb-6 md:mb-12 uppercase">
                  {t("home.name")}
                </h4>
              </div>
              <div>
                <h5 className="text-[10px] md:text-sm tracking-widest text-rose-gold mb-3 md:mb-4">
                  [01] {t("home.aboutOperationalTitle")}
                </h5>
                <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                  {t("about.body")}
                </p>
              </div>
              <div>
                <h5 className="text-[10px] md:text-sm tracking-widest text-rose-gold mb-3 md:mb-4">
                  [02] {t("home.aboutCoreTitle")}
                </h5>
                <ul className="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                  <li><strong className="text-inherit font-medium">{t("home.aboutPoint1Title")}</strong> {t("home.aboutPoint1Body")}</li>
                  <li><strong className="text-inherit font-medium">{t("home.aboutPoint2Title")}</strong> {t("home.aboutPoint2Body")}</li>
                  <li><strong className="text-inherit font-medium">{t("home.aboutPoint3Title")}</strong> {t("home.aboutPoint3Body")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
