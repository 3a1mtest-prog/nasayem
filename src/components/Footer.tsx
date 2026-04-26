import { useTranslation } from 'react-i18next';
import Container from './Container';

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 tracking-widest uppercase">
          <p>{t('footer.rights', { year })}</p>
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
            <a
              href="https://www.behance.net/nasaemmohammed1995"
              target="_blank"
              rel="noreferrer"
              className="hover:text-rose-gold transition-colors underline-offset-4 hover:underline"
            >
              BEHANCE
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&to=nasayemmohmmed@gmail.com"
              className="hover:text-rose-gold transition-colors underline-offset-4 hover:underline"
            >
              EMAIL
            </a>
            <a
              href="https://www.pinterest.com/nasayem_1/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-rose-gold transition-colors underline-offset-4 hover:underline"
            >
              PINTEREST
            </a>
            <a
              href="https://wa.me/972567588426"
              target="_blank"
              rel="noreferrer"
              className="hover:text-rose-gold transition-colors underline-offset-4 hover:underline"
            >
              WHATSAPP
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
