import { useMemo, useRef } from "react";
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
  const locale = i18n.language.startsWith("ar") ? "ar" : "en";
  const getLocalized = (value: any) => value?.[locale] ?? value?.en ?? "";

  const blog = useMemo(
    () => blogs.find((entry) => entry.slug === slug),
    [slug],
  );

  useGSAP(
    () => {
      if (!blog || !pageRef.current) return;

      const header = pageRef.current.querySelector(".detail-header");
      const meta = pageRef.current.querySelector(".detail-meta");
      const body = pageRef.current.querySelectorAll(".detail-body p");
      const image = pageRef.current.querySelector(".detail-image");

      gsap.fromTo(
        header,
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
      );

      gsap.fromTo(
        meta,
        { autoAlpha: 0, y: 16 },
        { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.1 },
      );

      gsap.fromTo(
        body,
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
          stagger: 0.08,
          delay: 0.15,
        },
      );

      gsap.fromTo(
        image,
        { autoAlpha: 0, scale: 0.98 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.2,
        },
      );
    },
    { scope: pageRef, dependencies: [blog] },
  );

  if (!blog) {
    return (
      <div className="pt-28">
        <Container className="py-20 text-center">
          <p className="text-xs tracking-[0.5em] uppercase text-text-muted">
            {t("blog.journal")}
          </p>
          <h1 className="mt-6 text-3xl md:text-4xl font-medium uppercase">
            {t("blog.notFoundTitle")}
          </h1>
          <p className="mt-4 text-text-muted">{t("blog.notFoundBody")}</p>
          <Link
            to="/blog"
            className="inline-flex mt-8 text-xs uppercase tracking-widest text-brand hover:text-brand-light transition-colors"
          >
            {t("blog.back")}
          </Link>
        </Container>
      </div>
    );
  }

  const title = getLocalized(blog.title);
  const content = getLocalized(blog.content);

  return (
    <div ref={pageRef} className="pt-28">
      <section className="pb-12 border-b border-white/10">
        <Container className="flex flex-col gap-8">
          <Link
            to="/blog"
            className="text-xs uppercase tracking-widest text-text-muted hover:text-brand transition-colors"
          >
            {t("blog.back")}
          </Link>
          <div className="detail-header flex flex-col gap-4">
            <p className="text-xs tracking-[0.5em] uppercase text-text-muted ">
              {t(`categories.${blog.categoryKey}`)}
            </p>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight uppercase">
              {title}
            </h1>
            <div className="detail-meta flex flex-wrap items-center gap-4 text-xs uppercase tracking-widest text-text-muted">
              <span>{blog.date}</span>
              <span>{blog.readTime}</span>
              <span>{blog.author}</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="detail-body flex flex-col gap-6 text-text-muted text-base leading-relaxed">
            {(Array.isArray(content) ? content : [content]).map(
              (paragraph, index) => (
                <p key={index} className="text-justify">
                  {paragraph}
                </p>
              ),
            )}
          </div>
          <div className="detail-image relative overflow-hidden rounded-2xl border border-text/10">
            <img
              src={blog.image}
              alt={title}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-linear-to-t from-bg/70 via-transparent to-transparent pointer-events-none" />
          </div>
        </Container>
      </section>
    </div>
  );
}
