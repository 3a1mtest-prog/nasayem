import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Container from '../Container';
import footerWatermark from '../../assets/branding/footer-watermark.png';

export default function CallToAction() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

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
          {/* المربع الأيسر (النص وحقوق النشر) */}
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

          {/* المربع الأيمن (نموذج تواصل) */}
          <div className="md:w-[40%] border border-[#8a948c]/20 bg-[#5d4b49]/90 backdrop-blur-sm min-h-[260px] md:min-h-[540px] p-6 md:p-8 relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/55 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />

            <div className="relative z-10 h-full flex flex-col">
              <h3 className="text-xl md:text-2xl font-light tracking-wide text-[#acadaf] uppercase mb-6">
                {t('cta.button', 'Send a Message')}
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-1">
                <input type="hidden" name="access_key" value="fa12bc8d-7e7a-47a1-9064-ef5e0121f49f" />
                <input type="hidden" name="subject" value="رسالة جديدة من الموقع" />
                {/* حقل الاسم - border كامل rounded-lg */}
                <div className="group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={t('form.name', 'Your Name')}
                    className="w-full bg-white/5 border border-white/20 rounded-lg py-2.5 px-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-rose-gold transition-all duration-300 text-sm"
                  />
                </div>
                {/* حقل البريد - border كامل rounded-lg */}
                <div className="group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder={t('form.email', 'Your Email')}
                    className="w-full bg-white/5 border border-white/20 rounded-lg py-2.5 px-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-rose-gold transition-all duration-300 text-sm"
                  />
                </div>
                {/* حقل الرسالة - نفس الحواف */}
                <div className="group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder={t('form.message', 'Your Message')}
                    className="w-full bg-white/5 border border-white/20 rounded-lg py-2.5 px-3 text-white placeholder:text-gray-400 focus:outline-none focus:border-rose-gold transition-all duration-300 text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 relative overflow-hidden group/btn bg-rose-gold/20 border border-rose-gold/50 rounded-full py-2.5 px-6 text-rose-gold text-sm tracking-wider uppercase font-medium hover:bg-rose-gold hover:text-black transition-all duration-300"
                >
                  <span className="relative z-10">{t('form.send', 'Send Message')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-gold to-gold opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                </button>
                {isSubmitted && (
                  <p className="text-rose-gold text-xs text-center mt-2 animate-pulse">
                    {t('form.thankyou', 'Thank you! I’ll get back soon.')}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
