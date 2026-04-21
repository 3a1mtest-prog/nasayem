import { useTranslation } from 'react-i18next';
import Container from '../Container';
import footerWatermark from '../../assets/branding/footer-watermark.png';

export default function CallToAction() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" id="cta">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(163,138,132,0.1)_0%,transparent_55%)] pointer-events-none" />
      <img
        src={footerWatermark}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-16 left-1/2 -translate-x-1/2 w-[76%] max-w-4xl opacity-[0.08]"
      />

      <Container>
        <div className="relative z-10 flex flex-col md:flex-row gap-3 md:gap-5 items-stretch">
          <div className="flex-1 border border-[#8a948c]/25 bg-black/60 min-h-[360px] md:min-h-[540px] p-8 md:p-12 flex flex-col justify-between">
            <h2 className="text-3xl md:text-5xl font-light leading-[1.15] text-[#8e8f92] max-w-[18ch] uppercase">
              {t('cta.headingLine1')} <br />
              <strong className="font-bold text-[#a0a1a6]">{t('cta.headingLine2')}</strong> {t('cta.headingLine3')} <br />
              {t('cta.headingLine4')}
            </h2>
            <p className="text-[10px] md:text-xs text-[#666a6f] tracking-wide">
              {t('footer.rights', { year })}
            </p>
          </div>

          <div className="md:w-[40%] border border-[#8a948c]/20 bg-[#5d4b49]/90 min-h-[260px] md:min-h-[540px] p-8 md:p-10 relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
            <div className="relative z-10 h-full ">
              <h3 className="text-2xl md:text-4xl font-light tracking-wide text-[#acadaf] uppercase">
                {t('cta.button')}
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
