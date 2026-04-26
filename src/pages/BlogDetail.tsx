import { useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Container from "../components/Container";
import { blogs } from "../data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

export default function BlogDetail() {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const pageRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const locale = i18n.language.startsWith("ar") ? "ar" : "en";
  const isRtl = locale === "ar";
  const getLocalized = (value: any) => value?.[locale] ?? value?.en ?? "";
  const [revealed, setRevealed] = useState(false);

  const blog = useMemo(
    () => blogs.find((entry) => entry.slug === slug),
    [slug],
  );

  useGSAP(
    () => {
      if (!blog || !pageRef.current) return;
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(".di-title", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.6 })
        .fromTo(".di-sub", { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.45 }, "-=0.3")
        .fromTo(".di-image", { autoAlpha: 0, scale: 1.03 }, { autoAlpha: 1, scale: 1, duration: 0.9 }, "-=0.2")
        .fromTo(".di-para", { autoAlpha: 0, y: 14 }, { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.09 }, "-=0.5")
        .fromTo(".di-btn", { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.35 }, "-=0.1")
        .fromTo(".di-foot", { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.1 }, "-=0.1")
        .fromTo(".di-last", { autoAlpha: 0, y: 8 }, { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.1");
    },
    { scope: pageRef, dependencies: [blog] },
  );

  useGSAP(
    () => {
      if (!revealed || !moreRef.current) return;
      gsap.fromTo(
        moreRef.current.querySelectorAll("p"),
        { autoAlpha: 0, y: 14 },
        { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.08, ease: "power2.out" },
      );
    },
    { scope: moreRef, dependencies: [revealed] },
  );

  if (!blog) {
    return (
      <div className="pt-28 min-h-screen bg-black">
        <Container className="py-20 text-center">
          <p className="text-xs tracking-[0.5em] uppercase text-neutral-500">{t("blog.journal")}</p>
          <h1 className="mt-6 text-3xl md:text-4xl font-medium uppercase text-white">{t("blog.notFoundTitle")}</h1>
          <p className="mt-4 text-neutral-500">{t("blog.notFoundBody")}</p>
          <Link to="/blog" className="inline-flex mt-8 text-xs uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors">
            {t("blog.back")}
          </Link>
        </Container>
      </div>
    );
  }

  const title = getLocalized(blog.title);
  const content = getLocalized(blog.content);
  const paragraphs: string[] = Array.isArray(content) ? content : [content];
  const half = Math.max(1, Math.ceil(paragraphs.length / 2));
  const firstParas = paragraphs.slice(0, half);
  const secondParas = paragraphs.slice(half);

  return (
    <div
      ref={pageRef}
      className="min-h-screen bg-black text-white pt-20"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        {/* ── back link ── */}
        <Link
          to="/blog"
          className="inline-block mb-6 text-[0.6rem] tracking-[0.3em] uppercase text-neutral-600 hover:text-amber-400 transition-colors"
        >
          {t("blog.back")}
        </Link>

        {/* ══ ROW 1: empty left | title + subtitle right ══ */}
        <div className="grid grid-cols-[38%_62%] gap-x-8">
          <div /> {/* intentionally empty – image will appear below */}
          <div className="flex flex-col gap-1.5 pb-7">
            <p className="text-[0.58rem] tracking-[0.45em] uppercase text-amber-400/80">
              {t(`categories.${blog.categoryKey}`)}
            </p>
            <h1
              className="di-title text-2xl md:text-[1.65rem] font-bold leading-snug"
              style={{ fontFamily: "serif" }}
            >
              {title}
            </h1>
            <p className="di-sub text-[0.72rem] tracking-widest text-neutral-500 uppercase">
              {blog.date}&nbsp;&nbsp;·&nbsp;&nbsp;{blog.readTime}&nbsp;&nbsp;·&nbsp;&nbsp;{blog.author}
            </p>
          </div>
        </div>

        {/* ══ ROW 2: image left | paragraphs + continue right ══ */}
        <div className="grid grid-cols-[38%_62%] gap-x-8 items-start">

          {/* left – portrait image */}
          <div className="di-image relative overflow-hidden rounded-lg">
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-[0.0]"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern id="hexPat" width="56" height="48" patternUnits="userSpaceOnUse" patternTransform="rotate(8)">
                  <polygon
                    points="28,2 54,16 54,44 28,58 2,44 2,16"
                    fill="none"
                    stroke="rgba(200,160,60,0.5)"
                    strokeWidth="0.6"
                  />
                </pattern>
                <pattern id="linePat" width="36" height="36" patternUnits="userSpaceOnUse" patternTransform="rotate(25)">
                  <line x1="0" y1="18" x2="36" y2="18" stroke="rgba(200,160,60,0.18)" strokeWidth="0.4" />
                  <line x1="18" y1="0" x2="18" y2="36" stroke="rgba(200,160,60,0.18)" strokeWidth="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexPat)" />
              <rect width="100%" height="100%" fill="url(#linePat)" />
            </svg>

            <img
              src={blog.image}
              alt={title}
              className="w-full h-auto object-cover block"
            />

            {/* edge gradient toward content */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: isRtl
                  ? "linear-gradient(to left,  rgba(0,0,0,0.25) 0%, transparent 25%)"
                  : "linear-gradient(to right, rgba(0,0,0,0.25) 0%, transparent 25%)",
              }}
            />
            <div className="absolute bottom-0 inset-x-0 h-20 pointer-events-none bg-gradient-to-t from-black to-transparent" />
          </div>

          {/* right – body text */}
          <div className="flex flex-col gap-4">
            {firstParas.map((p, i) => (
              <p
                key={i}
                className="di-para text-[0.81rem] leading-[1.95] text-neutral-300 text-justify"
              >
                {p}
              </p>
            ))}

            {/* continue button */}
            {secondParas.length > 0 && !revealed && (
              <div className="di-btn flex justify-end pt-1">
                <button
                  onClick={() => setRevealed(true)}
                  className="px-5 py-1.5 text-[0.58rem] tracking-[0.35em] uppercase border border-amber-500/55 text-amber-400 hover:bg-amber-500/10 transition-colors rounded-sm"
                >
                  Continue
                </button>
              </div>
            )}

            {/* revealed paragraphs */}
            {revealed && secondParas.length > 0 && (
              <div ref={moreRef} className="flex flex-col gap-4">
                {secondParas.map((p, i) => (
                  <p
                    key={i}
                    className="text-[0.81rem] leading-[1.95] text-neutral-300 text-justify"
                  >
                    {p}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ══ ROW 3: two-column footer ══ */}
        <div className="di-foot grid grid-cols-[38%_62%] gap-x-8 mt-10 pt-7 border-t border-white/[0.09]">
          {/* left footer */}
          <div className="flex flex-col gap-1.5">
            <p className="text-[0.72rem] text-neutral-300 leading-relaxed">
              <span className="font-semibold text-white">
                {isRtl ? "رحلة التصميم:" : "The design journey:"}
              </span>{" "}
              {isRtl
                ? "رحلة التصميم ليست بحثا عن شكل بل وصولأ لمعنى وكل قرار صغير يصنع النتيجة "
                : "The design journey is not a search for form but a reach for meaning, and every small decision shapes the outcome."}
            </p>
            <p className="text-[0.62rem] text-neutral-600 leading-relaxed">
              {isRtl
                ? " "
                : " "}
            </p>
          </div>
          {/* right footer */}
          <div>
            <p className="text-[0.75rem] text-neutral-400 leading-relaxed text-justify">
              {isRtl
                ? "وعندما تبدأ الخطوط بالترابط، يحدث الانفجار الذي أعيش لأجله: تتحوّل الفوضى إلى هيكل جبار. هنا تدرك أنني لا أقدم لك مجرد رسمة؛ بل أهندس لك كياناً يملك جاذبية خاصة به، لا الابدنتش الجتبريق، بالنسبة لي هي الطريقة التي أبعد بها ترتيب العالم من حول."
                : "When the lines begin to connect, the explosion I live for happens — chaos transforms into structure. I offer not just a drawing, but an entity with its own gravity, a system that reorganises the world around it."}
            </p>
          </div>
        </div>

        {/* ══ FINAL italic line ══ */}
        <p className="di-last mt-5 pb-16 text-[0.7rem] italic text-neutral-500 leading-relaxed">
          {isRtl
            ? "وبيّنت للجميع أن النظام الذي يُبنى بصدق العقل.. لا يمكن لهذه العقل هدمه أبدأ"
            : "And it became clear to all — a system built with the mind's sincerity cannot be undone by that same mind."}
        </p>

      </div>
    </div>
  );
}
