import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import Container from '../Container';
import vibrantecsImage from '../../assets/Grid/vibrantecs.png';
import vibrantecsVideo from '../../assets/Grid/vibrantecs.mp4';
import nasayemImage from '../../assets/Grid/nasayem.png';
import nasayemVideo from '../../assets/Grid/nasayem.mp4';
import newaImage from '../../assets/Grid/newa.png';
import newaVideo from '../../assets/Grid/newa.mp4';
import almorganImage from '../../assets/Grid/almorgan.png';
import almorganVideo from '../../assets/Grid/almorgan.mp4';

// Complete border gradient — same rose-gold palette, covers all 4 edges
const BORDER_GRADIENT = 'linear-gradient(135deg, #a38a84, #5e4f4b)';

const Work = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const projects = [
    {
      id: 1,
      title: 'VIBRANTEC',
      desc: t('home.workProject1Desc'),
      area: 'vibrantec',
      aspect: 'aspect-9/16',
      mobileAspect: 'aspect-9/16',
      gradient: BORDER_GRADIENT,
      image: vibrantecsImage,
      video: vibrantecsVideo,
    },
    {
      id: 2,
      title: 'NASAYEM STUDIO',
      desc: t('home.workProject2Desc'),
      area: 'nasayem',
      aspect: 'aspect-16/9',
      mobileAspect: 'aspect-16/9',
      gradient: BORDER_GRADIENT,
      image: nasayemImage,
      video: nasayemVideo,
    },
    {
      id: 3,
      title: 'NEWA',
      desc: t('home.workProject3Desc'),
      area: 'newa',
      aspect: 'aspect-square',
      mobileAspect: 'aspect-square',
      gradient: BORDER_GRADIENT,
      image: newaImage,
      video: newaVideo,
    },
    {
      id: 4,
      title: 'AL-MORGAN',
      desc: t('home.workProject4Desc'),
      area: 'almorgan',
      aspect: 'aspect-square',
      mobileAspect: 'aspect-square',
      gradient: BORDER_GRADIENT,
      image: almorganImage,
      video: almorganVideo,
    },
  ];

  const playVideo = (id: number) => {
    const video = videoRefs.current[id];
    if (!video) return;
    video.currentTime = 0;
    void video.play().catch(() => undefined);
  };

  const stopVideo = (id: number) => {
    const video = videoRefs.current[id];
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  const renderProjectCard = (projectId: number, titleClass: string, descClass: string) => {
    const project = projects.find((item) => item.id === projectId);
    if (!project) return null;

    return (
      <div
        key={project.id}
        data-work-item
        className="group cursor-pointer flex flex-col"
        onMouseEnter={() => playVideo(project.id)}
        onMouseLeave={() => stopVideo(project.id)}
        onFocus={() => playVideo(project.id)}
        onBlur={() => stopVideo(project.id)}
      >
        <div className={`w-full ${project.aspect} relative overflow-hidden mb-4`}>
          <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
          <video
            ref={(el) => {
              videoRefs.current[project.id] = el;
            }}
            src={project.video}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
          />
          {/* Border overlay — p-px + WebkitMask trick keeps only the 1px frame visible */}
          <div
            className="absolute inset-0 z-10 pointer-events-none p-px transition-all duration-500 group-hover:brightness-150"
            style={{
              background: project.gradient,
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />
          <div className="absolute inset-0 bg-linear-to-br from-[#8a948c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <h4 className={titleClass}>{project.title}</h4>
        <p className={descClass}>{project.desc}</p>
      </div>
    );
  };

  const vibrantecProject = projects.find((item) => item.id === 1);

  useGSAP(
    () => {
      gsap.fromTo(
        '[data-work-item]',
        { autoAlpha: 0, y: 34 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.55,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef} id="work" className="py-24 md:py-32 relative border-t border-[#8a948c]/10">
      <Container>
        <div className="mb-10 md:mb-20 md:w-1/2 md:ml-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t('home.workHeading')}</h2>
          <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">{t('home.workBody')}</p>
        </div>

        <div className="w-full">
          {/* Mobile Layout: Single column */}
          <div className="md:hidden flex flex-col gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                data-work-item
                className="group cursor-pointer flex flex-col"
                onMouseEnter={() => playVideo(project.id)}
                onMouseLeave={() => stopVideo(project.id)}
                onFocus={() => playVideo(project.id)}
                onBlur={() => stopVideo(project.id)}
              >
                <div className={`w-full ${project.mobileAspect} relative overflow-hidden mb-4`}>
                  <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />
                  <video
                    ref={(el) => {
                      videoRefs.current[project.id] = el;
                    }}
                    src={project.video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
                  />
                  <div
                    className="absolute inset-0 z-10 pointer-events-none p-px transition-all duration-500 group-hover:brightness-150"
                    style={{
                      background: project.gradient,
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-br from-[#8a948c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-[10px] tracking-widest font-medium uppercase mb-1">{project.title}</h4>
                <p className="text-[10px] text-gray-500">{project.desc}</p>
              </div>
            ))}
          </div>

          {/* Desktop Layout: left composite + right vertical */}
          <div className="hidden md:grid w-full max-w-[940px] mx-auto gap-8 items-stretch grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            <div className="min-w-0 flex flex-col gap-8">
              {renderProjectCard(2, 'text-xs tracking-widest font-medium uppercase mb-1', 'text-xs text-gray-500')}
              <div className="flex gap-8">
                <div className="flex-1 min-w-0">
                  {renderProjectCard(4, 'text-xs tracking-widest font-medium uppercase mb-1', 'text-xs text-gray-500')}
                </div>
                <div className="flex-1 min-w-0">
                  {renderProjectCard(3, 'text-xs tracking-widest font-medium uppercase mb-1', 'text-xs text-gray-500')}
                </div>
              </div>
            </div>

            {vibrantecProject && (
              <div className="min-w-0 self-stretch">
                <div
                  data-work-item
                  className="group cursor-pointer h-full grid grid-rows-[1fr_auto_auto]"
                  onMouseEnter={() => playVideo(vibrantecProject.id)}
                  onMouseLeave={() => stopVideo(vibrantecProject.id)}
                  onFocus={() => playVideo(vibrantecProject.id)}
                  onBlur={() => stopVideo(vibrantecProject.id)}
                >
                  <div className="w-auto h-full max-w-full aspect-9/16 mx-auto relative overflow-hidden mb-4">
                    <img
                      src={vibrantecProject.image}
                      alt={vibrantecProject.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <video
                      ref={(el) => {
                        videoRefs.current[vibrantecProject.id] = el;
                      }}
                      src={vibrantecProject.video}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
                    />
                    <div
                      className="absolute inset-0 z-10 pointer-events-none p-px transition-all duration-500 group-hover:brightness-150"
                      style={{
                        background: vibrantecProject.gradient,
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-br from-[#8a948c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h4 className="text-xs tracking-widest font-medium uppercase mb-1">{vibrantecProject.title}</h4>
                  <p className="text-xs text-gray-500">{vibrantecProject.desc}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
      <div className="hidden md:block absolute right-6 bottom-6 text-[10px] text-gray-600 tracking-widest">02</div>
    </section>
  );
};

export default Work;
