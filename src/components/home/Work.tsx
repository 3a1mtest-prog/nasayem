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

// Exact border gradient from the reference image (rose‑gold)
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
      aspect: 'aspect-9/16',
      mobileAspect: 'aspect-9/16',
      image: vibrantecsImage,
      video: vibrantecsVideo,
    },
    {
      id: 2,
      title: 'NASAYEM STUDIO',
      desc: t('home.workProject2Desc'),
      aspect: 'aspect-16/9',
      mobileAspect: 'aspect-16/9',
      image: nasayemImage,
      video: nasayemVideo,
    },
    {
      id: 3,
      title: 'NEWA',
      desc: t('home.workProject3Desc'),
      aspect: 'aspect-square',
      mobileAspect: 'aspect-square',
      image: newaImage,
      video: newaVideo,
    },
    {
      id: 4,
      title: 'AL-MORGAN',
      desc: t('home.workProject4Desc'),
      aspect: 'aspect-square',
      mobileAspect: 'aspect-square',
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

  // Shared border overlay component for consistency
  const BorderOverlay = () => (
    <div
      className="absolute inset-0 z-10 pointer-events-none p-0.5 px transition-all duration-500 group-hover:brightness-150"
      style={{
        background: 'linear-gradient(135deg, #a38a84, transparent 40%, transparent 60%, #5e4f4b)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
      }}
    />
  );

  // Render a single project card (used on both mobile & desktop)
  const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
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
        {/* Static image */}
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Video on hover */}
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
        {/* Identical border overlay for both states */}
        <BorderOverlay />
        <div className="absolute inset-0 bg-linear-to-br from-[#8a948c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h4 className="text-[10px] tracking-widest font-medium uppercase mb-1">{project.title}</h4>
      <p className="text-[10px] text-gray-500">{project.desc}</p>
    </div>
  );

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

  const vibrantecProject = projects[0];
  const nasayemProject = projects[1];
  const almorganProject = projects[3];
  const newaProject = projects[2];

  return (
    <section ref={sectionRef} id="work" className="py-24 md:py-32 relative border-t border-[#8a948c]/10">
      <Container>
        <div className="mb-10 md:mb-20 md:w-1/2 md:ml-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">{t('home.workHeading')}</h2>
          <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">{t('home.workBody')}</p>
        </div>

        <div className="w-full">
          {/* Mobile Layout: single column */}
          <div className="md:hidden flex flex-col gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Desktop Layout: left composite (nasayem + bottom row) + right (vibrantec) */}
          <div className="hidden md:grid w-full max-w-[1100px] mx-auto gap-8 items-stretch grid-cols-[minmax(0,2fr)_minmax(0,1.333fr)]">
            <div className="min-w-0 flex flex-col gap-8">
              {/* Nasayem (tall) */}
              <ProjectCard project={nasayemProject} />
              <div className="flex gap-8">
                <div className="flex-1 min-w-0">
                  <ProjectCard project={almorganProject} />
                </div>
                <div className="flex-1 min-w-0">
                  <ProjectCard project={newaProject} />
                </div>
              </div>
            </div>

            {/* Vibrantec (right column) */}
            <div className="min-w-0 flex-1 self-stretch">
              <ProjectCard project={vibrantecProject} />
            </div>
          </div>
        </div>
      </Container>
      <div className="hidden md:block absolute right-6 bottom-6 text-[10px] text-gray-600 tracking-widest">02</div>
    </section>
  );
};

export default Work;
