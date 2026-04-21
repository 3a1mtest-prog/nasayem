import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Hero from '../components/home/Hero';
import Philosophy from '../components/home/Philosophy';
import Work from '../components/home/Work';
import Services from '../components/home/Services';
import About from '../components/home/About';
import Process from '../components/home/Process';
import BannersMarquee from '../components/home/BannersMarquee';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <BannersMarquee />
      <Work />
      <Services />
      <About />
      <Process />
    </main>
  );
}
