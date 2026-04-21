import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CallToAction from './home/CallToAction';

export default function AppLayout() {
  const { pathname, hash } = useLocation();
  const isBlogPage = pathname.startsWith('/blog');

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return (
    <div className="min-h-screen selection:bg-rose-gold selection:text-black bg-dark-bg">
      <Navbar />
      <Outlet />
      {!isBlogPage && <CallToAction />}
      <Footer />
    </div>
  );
}