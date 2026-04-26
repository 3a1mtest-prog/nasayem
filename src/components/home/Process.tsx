import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Container from '../Container';

import analysisIcon from "../../assets/process/analysis.png";
import formulationIcon from "../../assets/process/formulation.png";
import engineeringIcon from "../../assets/process/engineering.png";
import calibrationIcon from "../../assets/process/calibration.png";

const Process = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);

  const steps = [
    {
      num: '01',
      title: t('steps.analysisTitle'),
      icon: analysisIcon,
      desc: t('steps.analysisDesc'),
    },
    {
      num: '02',
      title: t('steps.formulationTitle'),
      icon: formulationIcon,
      desc: t('steps.formulationDesc'),
    },
    {
      num: '03',
      title: t('steps.engineeringTitle'),
      icon: engineeringIcon,
      desc: t('steps.engineeringDesc'),
    },
    {
      num: '04',
      title: t('steps.calibrationTitle'),
      icon: calibrationIcon,
      desc: t('steps.calibrationDesc'),
    },
  ];

  useGSAP(
    () => {
      gsap.fromTo(
        '[data-process-step]',
        { autoAlpha: 0, y: 38 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.65,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
          },
        }
      );
    },
    { scope: sectionRef }
  );

  // لون الويب سايت (زهري غامق) حسب الصورة
  const brandColor = '#937c77';

  return (
    <section
      ref={sectionRef}
      id="process"
      className="py-24 md:py-32 relative border-t border-text/10 bg-dark-bg"
    >
      <Container>
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-16 md:mb-32 text-center tracking-widest text-end">
          {t('process.heading')}
        </h2>

        <div className="grid md:grid-cols-2 gap-x-24 gap-y-16 md:gap-y-24 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.num} data-process-step className="flex flex-col">
              <div className="text-[7rem] md:text-[10rem] lg:text-[12rem] font-display font-bold bg-linear-to-b from-gray-300 via-gray-600 to-black bg-clip-text text-transparent select-none leading-none tracking-tighter -mb-4">
                {step.num}
              </div>
              <div className="pl-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative flex items-center justify-center w-6 h-6">
                    <img src={step.icon} alt="" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-xl md:text-2xl tracking-widest font-medium text-gray-300 uppercase">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed max-w-sm">
                  {step.desc}
                </p>

                {/* زر See the Praxis notes يظهر فقط تحت رقم 04 */}
                {step.num === '04' && (
                  <div className="mt-8">
                    <Link
                      to="/blog"
                      className="group inline-flex items-center gap-2 text-sm uppercase tracking-wider
                                 text-gray-400 border-b transition-all duration-300 pb-0.5 font-medium"
                      style={{
                        borderBottomColor: brandColor,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = brandColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '';
                      }}
                    >
                      <span>See the Praxis notes</span>
                      <span className="text-base transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Process;
