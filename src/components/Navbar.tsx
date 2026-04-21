import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data';
import logo from '../assets/branding/logo.svg';
import Container from './Container';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLElement | null>(null);
  const isArabic = i18n.language.startsWith('ar');

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  const toggleLanguage = () => {
    i18n.changeLanguage(isArabic ? 'en' : 'ar');
  };

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isRendered || !menuRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { autoAlpha: 0, y: -12 },
        { autoAlpha: 1, y: 0, duration: 0.3, ease: 'power2.out' },
      );
      const items = menuRef.current.querySelectorAll('a,button');
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 12 },
        { autoAlpha: 1, y: 0, duration: 0.35, stagger: 0.06, ease: 'power2.out', delay: 0.05 },
      );
    } else {
      gsap.to(menuRef.current, {
        autoAlpha: 0,
        y: -12,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => setIsRendered(false),
      });
    }
  }, [isOpen, isRendered]);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { autoAlpha: 0, y: -24 },
      { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' },
    );
  }, []);

  return (
    <nav ref={navRef} className="relative top-0 left-0 w-full z-50 text-inherit">
      <Container className="flex items-center justify-between py-5 md:py-6">
        <Link to="/" className="w-10" onClick={closeMenu}>
          <img src={logo} alt="logo" />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              to={link.to}
              className="hover:text-brand transition-colors relative before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:w-0 before:h-0.5 hover:before:bg-brand before:transition-all before:duration-300 hover:before:w-full"
            >
              {t(`nav.${link.key}`)}
            </Link>
          ))}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={t('nav.language')}
            className="border border-text/20 px-4 py-2 rounded-full text-[10px] cursor-pointer uppercase hover:border-brand hover:text-brand transition-colors"
          >
            {isArabic ? 'EN' : 'AR'}
          </button>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-text/20 transition-colors hover:border-text/40"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          {isOpen ? <X className="text-2xl" /> : <Menu className="text-2xl" />}
        </button>
      </Container>

      {isRendered && (
        <div id="mobile-nav" ref={menuRef} className="md:hidden h-screen fixed inset-0 bg-dark-bg border-t border-text/10 z-50">
          <button
            type="button"
            aria-label="Close navigation"
            className="absolute top-5 right-4 inline-flex items-center justify-center h-10 w-10 rounded-full border border-text/20 transition-colors hover:border-text/40 z-[51]"
            onClick={closeMenu}
          >
            <span className="sr-only">Close menu</span>
            <X className="text-2xl" />
          </button>
          <Container className="flex flex-col items-center justify-center gap-4 text-lg tracking-widest uppercase font-medium h-full">
            {navLinks.map((link) => (
              <Link key={link.key} to={link.to} onClick={closeMenu} className="hover:text-brand transition-colors text-inherit">
                {t(`nav.${link.key}`)}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                toggleLanguage();
                closeMenu();
              }}
              aria-label={t('nav.language')}
              className="border border-text/20 px-4 py-2 rounded-full text-xs cursor-pointer uppercase hover:border-brand hover:text-brand transition-colors"
            >
              {isArabic ? 'EN' : 'AR'}
            </button>
          </Container>
        </div>
      )}
    </nav>
  );
}
