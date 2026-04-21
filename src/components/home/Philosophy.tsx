import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import Container from '../Container';
import philosophyImg from "../../assets/philosophy/philosophy.png";

const Philosophy = () => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        '[data-philosophy-image]',
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        },
      );

      gsap.fromTo(
        '[data-philosophy-text] > *',
        { autoAlpha: 0, x: 36 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.08,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="philosophy" className="py-24 md:py-32 relative border-t border-text/10">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div data-philosophy-image className="relative">
            <div className="relative z-10 ">
              <img
                src={philosophyImg}
                alt="Nasayem Sweidan"
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl md:rounded-none"
              />
            </div>
          </div>

          <div data-philosophy-text className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-2">{t('home.name')}</h2>
            <p className="text-xs md:text-sm tracking-[0.2em] text-gray-400 uppercase mb-8 md:mb-12">{t('home.philosophyRole')}</p>

            <h3 className="text-xl md:text-3xl font-light text-gray-400 mb-6 leading-snug">
              {t('home.philosophyLeadLine1')} <br />
              <span className="font-medium text-inherit">{t('home.philosophyLeadLine2')}</span>
            </h3>

            <p className="text-gray-500 tracking-wide uppercase text-xs md:text-sm mb-4">{t('home.philosophyBodyLine1')}</p>
            <div className="text-gray-400 text-base md:text-lg font-light mb-12 space-y-2">
              <p>{t('home.philosophyBodyLine2a')}</p>
              <p>{t('home.philosophyBodyLine2b')}</p>
            </div>

            <div className="border-t border-text/10 pt-6">
              <p className="text-xs md:text-sm text-gray-500">
                {t('home.philosophyPrompt')} <br />
                <a href="#about" className="text-inherit hover:text-rose-gold transition-colors inline-flex items-center gap-2 mt-2">
                  {t('home.philosophyLink')} <ArrowRight className="w-3 h-3" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Decorative tracking elements - adjusted for mobile */}
      <div className="hidden md:block absolute right-4 md:right-6 bottom-4 md:bottom-6 text-[10px] text-gray-600 tracking-widest">
        01
      </div>
      <div
        className="hidden md:block absolute left-4 md:left-6 bottom-4 md:bottom-6 text-[10px] text-gray-600 tracking-widest transition-all duration-300 cursor-default hover:scale-110 hover:text-rose-gold origin-bottom-left"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? '07' : '05'} {t('home.yearsExp')}
      </div>
    </section>
  );
};

export default Philosophy;
