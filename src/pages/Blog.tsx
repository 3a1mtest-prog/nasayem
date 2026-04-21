import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { blogs } from "../data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t, i18n } = useTranslation();
  const pageRef = useRef<HTMLDivElement>(null);
  const locale = i18n.language.startsWith("ar") ? "ar" : "en";
  const getLocalized = (value: any) => value?.[locale] ?? value?.en ?? "";
  const categories = useMemo(() => {
    const unique = Array.from(new Set(blogs.map((blog) => blog.categoryKey)));
    return ["all", ...unique];
  }, []);

  const [activeCategory, setActiveCategory] = useState("all");

  const filteredBlogs = useMemo(() => {
    if (activeCategory === "all") return blogs;
    return blogs.filter((blog) => blog.categoryKey === activeCategory);
  }, [activeCategory]);

  useGSAP(
    () => {
      if (!pageRef.current) return;
      const header = pageRef.current.querySelector(".blog-header");
      const filters = pageRef.current.querySelectorAll(".blog-filter");
      const cards = pageRef.current.querySelectorAll(".blog-card");

      gsap.fromTo(
        header,
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );

      gsap.fromTo(
        filters,
        { autoAlpha: 0, y: 16 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.05,
          delay: 0.1,
        }
      );

      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
          delay: 0.15,
        }
      );
    },
    { scope: pageRef }
  );

  useGSAP(
    () => {
      if (!pageRef.current) return;
      const cards = pageRef.current.querySelectorAll(".blog-card");
      if (!cards.length) return;

      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
          stagger: 0.06,
        }
      );
    },
    { scope: pageRef, dependencies: [activeCategory] }
  );

  return (
    <div ref={pageRef} className="pt-28">
      <section className="pb-16 border-b border-white/10">
        <Container className="flex flex-col gap-8">
          <div className="blog-header flex flex-col gap-4">
            <p className="text-xs tracking-[0.5em] uppercase text-text-muted">
              {t("blog.journal")}
            </p>
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight uppercase">
              {t("blog.title")}
            </h1>
            <p className="text-lg text-text-muted max-w-2xl">
              {t("blog.intro")}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((categoryKey) => {
              const isActive = categoryKey === activeCategory;
              return (
                <button
                  key={categoryKey}
                  type="button"
                  onClick={() => setActiveCategory(categoryKey)}
                  className={`blog-filter cursor-pointer px-4 py-2 text-xs tracking-widest uppercase rounded-full border transition-colors ${
                    isActive
                      ? "bg-brand text-bg border-brand glow-brand"
                      : "border-white/20 text-text-muted hover:border-brand hover:text-brand"
                  }`}
                >
                  {categoryKey === "all"
                    ? t("blog.all")
                    : t(`categories.${categoryKey}`)}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => {
              const title = getLocalized(blog.title);
              const excerpt = getLocalized(blog.excerpt);
              return (
                <article
                  key={blog.id}
                  className="blog-card group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-bg/80 via-bg/20 to-transparent" />
                    <span className="absolute top-4 left-4 text-[0.6rem] tracking-[0.4em] uppercase bg-bg/70 text-brand px-3 py-1 rounded-full">
                      {t(`categories.${blog.categoryKey}`)}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between text-xs text-text-muted uppercase tracking-widest">
                      <span>{blog.date}</span>
                      <span>{blog.readTime}</span>
                    </div>
                    <h2 className="text-xl font-medium tracking-wide uppercase">
                      {title}
                    </h2>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-2 text-xs uppercase tracking-widest text-text-muted">
                      <span>{blog.author}</span>
                      <Link
                        to={`/blog/${blog.slug}`}
                        className="text-brand hover:text-brand-light transition-colors"
                      >
                        {t("blog.read")}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="mt-16 text-center text-text-muted">
              {t("blog.empty")}
            </div>
          )}
        </Container>
      </section>
    </div>
  );
}
