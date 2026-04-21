import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        work: "Work",
        philosophy: "Philosophy",
        services: "Services",
        about: "About",
        process: "Process",
        blog: "Blog",
        downloadResume: "download resume",
        language: "Language",
      },
      hero: {
        titleLine1: "THE PHYSICS OF",
        titleLine2: "VISUAL IDENTITY",
        cta: "Work With Me",
        sublineStrong: "Visual Identity",
        sublineRest: "design from idea to system",
        tagline: "Art meets engineering. Balance begins.",
      },
      cta: {
        headingLine1: "READY TO DEFINE YOUR",
        headingLine2: "VISUAL PHYSICS",
        headingLine3: "? LETS CREATE SOMETHING",
        headingLine4: "EXTRAORDINARY.",
        button: "START YOUR PROJECT",
      },
      home: {
        name: "Nasayem Sweidan",
        philosophyRole: "Brand Identity Engineer",
        philosophyLeadLine1: "Design is not an",
        philosophyLeadLine2: "aesthetic choice",
        philosophyBodyLine1: "IT'S HOW THINGS ARE BUILT.",
        philosophyBodyLine2a: "Identities are shaped",
        philosophyBodyLine2b: "by balance & precision",
        philosophyPrompt: "Curious about the mind behind the logic?",
        philosophyLink: "Meet Nasayem",
        yearsExp: "YEARS EXP",
        workHeading: "Structural Precision",
        workBody:
          "Every curve is a calculation; every line is a law. I don't just design; I engineer visual systems rooted in mathematical harmony.",
        workProject1Desc: "Ratio Analysis & Golden Proportions",
        workProject2Desc: "Vector Physics & Dynamic Lines",
        workProject3Desc: "Volume & Spatial Projection",
        workProject4Desc: "Spatial Presence",
        servicesIntroStrong: "Beyond aesthetics:",
        servicesIntroText:
          "building scalable identity systems rooted in structural precision.",
        aboutRole: "System Architect",
        aboutOperationalTitle: "Operational Identification",
        aboutCoreTitle: "Core Parameters",
        aboutPoint1Title: "Visual Engineering:",
        aboutPoint1Body:
          "Leveraging mathematical grid systems and the Golden Ratio for structural integrity.",
        aboutPoint2Title: "Aesthetic Physics:",
        aboutPoint2Body:
          "Balancing mass and void to ensure the brand visual gravity and stability.",
        aboutPoint3Title: "Ultra-Minimalism:",
        aboutPoint3Body:
          "Stripping elements to their core to achieve the essence of Quiet Luxury.",
      },
      intro: {
        heading: "Design is Structure",
        body:
          "I decode the elements of your brand to build visual identities that resonate on a fundamental level. Every line, every curve, is a calculated force.",
      },
      philosophy: {
        section: "The Philosophy",
        heading: "The Art of Organized Nature.",
        subheading: "Where Breezes meet Physics.",
        body:
          "Beauty is never a coincidence; it is a system. Just as Nasayem (breezes) move according to the laws of balance, I build brand identities governed by Visual Physics. I don't just draw logos; I engineer visual equilibrium using the Golden Ratio, ensuring your brand carries the weight of authority and the grace of logic.",
      },
      portfolio: {
        heading: "Selected Identities",
      },
      services: {
        heading: "Services",
        viewDetails: "VIEW DETAILS",
      },
      about: {
        heading: "About",
        body:
          "At Nasayem Studio, I believe design is the invisible force that shapes perception. It’s not just about aesthetics; it’s about creating a fundamental connection. I build brands that command presence with scientific precision",
      },
      process: {
        heading: "Process",
        ctaText:
          "The breeze is not random; it is a movement governed by nature's laws. At Nasayem Studio, I believe beauty is not a coincidence, but rather a structured physics of golden ratios; to grant your ambition the identity it deserves, and your brand a soul that attracts success and is truly unforgettable.",
        ctaButton: "Start Your Project",
        footer: "nasayemstudio.com - All rights reserved {{year}}",
      },
      footer: {
        tagline:
          "I craft identities with clarity, depth, and a quiet kind of power.",
        explore: "Explore",
        contact: "Contact",
        rights: "nasayemstudio.com - All rights reserved {{year}}",
      },
      blog: {
        journal: "Journal",
        title: "The Studio Blog",
        intro:
          "Notes on brand physics, visual systems, and the craft behind identities that feel inevitable.",
        all: "All",
        read: "Read",
        empty: "No articles yet in this category.",
        back: "Back to blog",
        notFoundTitle: "Article Not Found",
        notFoundBody: "The page you are looking for does not exist.",
      },
      categories: {
        branding: "Branding",
        uiux: "UI/UX",
        typography: "Typography",
        packaging: "Packaging",
        process: "Process",
        color: "Color",
      },
      servicesData: {
        logoTitle: "LOGO DESIGN",
        logoDesc: "Crafting iconic visual identities that define your brands essence and leave a lasting impression on your audience.",
        visualTitle: "VISUAL IDENTITY",
        visualDesc: "Developing cohesive visual systems that communicate your values across all platforms with clarity and elegance.",
        strategyTitle: "BRAND STRATEGY",
        strategyDesc: "Building powerful brand strategies that position your business for success in a competitive global landscape.",
        artTitle: "ART DIRECTION",
        artDesc: "Elevating your brand through creative direction and aesthetic excellence that speaks directly to your target market.",
      },
      steps: {
        analysisTitle: "ANALYSIS",
        analysisDesc:
          "Deconstructing brand data to analyze market forces and identify strategic focal points.",
        formulationTitle: "FORMULATION",
        formulationDesc:
          "Formulating the visual equation and strategic logic to ensure brand equilibrium and Distinction.",
        engineeringTitle: "ENGINEERING",
        engineeringDesc:
          "Constructing the visual system using geometric grids and mathematical ratios for structural integrity.",
        calibrationTitle: "CALIBRATION",
        calibrationDesc:
          "Final calibration of deliverables to ensure visual and technical stability across all touchpoints",
      },
      projects: {
        auraCategory: "LUXURY FRAGRANCE / IDENTITY",
        nomadCategory: "FASHION COLLECTIVE / BRANDING",
        vertexCategory: "ARCHITECTURE / VISUAL SYSTEM",
        lunaCategory: "CLEAN BEAUTY / PACKAGING",
      },
    },
  },
  ar: {
    translation: {
      nav: {
        work: "الأعمال",
        philosophy: "الفلسفة",
        services: "الخدمات",
        about: "من أنا",
        process: "العملية",
        blog: "المدونة",
        downloadResume: "تحميل السيرة",
        language: "اللغة",
      },
      hero: {
        titleLine1: "فيزياء",
        titleLine2: "الهوية البصرية",
        cta: "اعمل معي",
        sublineStrong: "الهوية البصرية",
        sublineRest: "تصميم يبدأ من الفكرة حتى يتحول إلى نظام متكامل",
        tagline: "حيث يلتقي الفن بالهندسة. ومن هنا يبدأ الاتزان.",
      },
      cta: {
        headingLine1: "هل أنت مستعد لتحديد",
        headingLine2: "الفيزياء البصرية",
        headingLine3: "؟ لنصنع شيئاً",
        headingLine4: "استثنائياً.",
        button: "ابدأ مشروعك",
      },
      home: {
        name: "نسايم سويدان",
        philosophyRole: "مهندسة الهوية البصرية",
        philosophyLeadLine1: "التصميم ليس مجرد",
        philosophyLeadLine2: "خيار جمالي",
        philosophyBodyLine1: "إنه الطريقة التي تُبنى بها الأشياء.",
        philosophyBodyLine2a: "تتشكل الهويات",
        philosophyBodyLine2b: "بالتوازن والدقة",
        philosophyPrompt: "تودين معرفة العقل خلف هذا المنطق؟",
        philosophyLink: "تعرف على نسايم سويدان",
        yearsExp: "سنوات خبرة",
        workHeading: "الدقة البنيوية",
        workBody:
          "كل منحنى هو حساب، وكل خط هو قانون. أنا لا أصمم فقط؛ بل أبني أنظمة بصرية متجذرة في الانسجام الرياضي.",
        workProject1Desc: "تحليل النِّسب والنسبة الذهبية",
        workProject2Desc: "فيزياء المتجهات والخطوط الديناميكية",
        workProject3Desc: "الحجم والإسقاط الفراغي",
        workProject4Desc: "الحضور المكانى",
        servicesIntroStrong: "أبعد من الجماليات:",
        servicesIntroText:
          "نبني أنظمة هوية قابلة للتوسع ومؤسَّسة على دقة بنيوية.",
        aboutRole: "معمارية النظم",
        aboutOperationalTitle: "التوصيف التشغيلي",
        aboutCoreTitle: "المعايير الأساسية",
        aboutPoint1Title: "الهندسة البصرية:",
        aboutPoint1Body:
          "توظيف الشبكات الرياضية والنسبة الذهبية لتحقيق تماسك بنيوي.",
        aboutPoint2Title: "فيزياء الجمال:",
        aboutPoint2Body:
          "موازنة الكتلة والفراغ لضمان ثبات وجاذبية العلامة بصرياً.",
        aboutPoint3Title: "التبسيط الفائق:",
        aboutPoint3Body:
          "تجريد العناصر إلى جوهرها للوصول إلى فخامة هادئة أصيلة.",
      },
      intro: {
        heading: "التصميم هو البنية",
        body:
          "نفكك عناصر علامتك لبناء هويات بصرية تتردد على مستوى أساسي. كل خط وكل مأناى قوة محسوبة.",
      },
      philosophy: {
        section: "الفلسفة",
        heading: "فن الطبيعة المنظمة.",
        subheading: "حيث تلتقي النسائم بالفيزياء.",
        body:
          "الجمال ليس صدفة أبدا؛ إنه نظام. كما تتحرك نسائم نسايم وفق قوانين التوازن، أبني هويات علامات تجارية محكومة بفيزياء بصرية. أنا لا أرسم الشعارات فقط؛ بل أهندس الاتزان البصري باستخدام النسبة الذهبية، لضمان أن تحمل علامتك وزن السلطة ورشاقة المنطق.",
      },
      portfolio: {
        heading: "هويات مختارة",
      },
      services: {
        heading: "الخدمات",
        viewDetails: "عرض التفاصيل",
      },
      about: {
        heading: "من أنا",
        body:
          "في استوديو نسائم، أؤمن بأن التصميم هو القوة الخفية التي تشكل الإدراك؛ فالأمر لا يقتصر على المظهر الجمالي فحسب، بل يمتد لخلق ارتباط جوهري. أنا أبني علامات تجارية تفرض حضورها بدقة علمية فائقة",
      },
      process: {
        heading: "العملية",
        ctaText:
          "النسيم ليس عشوائياً، بل هو حركة محكومة بقوانين الطبيعة. في نسايم ستوديو، أؤمن أن الجمال ليس صدفة، بل هو فيزياء منظمة بنسب ذهبية؛ لأمنح طموحكم الهوية التي يستحقها، وعلامتكم التجارية روحاً تجذب النجاح ولا تُنسى",
        ctaButton: "ابدأ مشروعك",
        footer: "nasayemstudio.com - جميع الحقوق محفوظة {{year}}",
      },
      footer: {
        tagline:
          "أصنع هويات بوضوح وعمق وبقوة هادئة.",
        explore: "استكشف",
        contact: "تواصل",
        rights: "nasayemstudio.com - جميع الحقوق محفوظة {{year}}",
      },
      blog: {
        journal: "اليوميات",
        title: "مدونة الاستوديو",
        intro:
          "ملاحظات حول فيزياء العلامة والأنظمة البصرية والحرفة وراء الهويات الحتمية.",
        all: "الكل",
        read: "اقرأ",
        empty: "لا توجد مقالات في هذا التصنيف بعد.",
        back: "العودة للمدونة",
        notFoundTitle: "المقال غير موجود",
        notFoundBody: "الصفحة التي تبحث عنها غير موجودة.",
      },
      categories: {
        branding: "العلامة",
        uiux: "واجهة وتجربة",
        typography: "الطباعة",
        packaging: "التغليف",
        process: "العملية",
        color: "الألوان",
      },
      servicesData: {
        logoTitle: "تصميم الشعار",
        logoDesc: "صياغة هويات بصرية أيقونية تحدد جوهر علامتك التجارية وتترك انطباعًا دائمًا لدى جمهورك.",
        visualTitle: "هوية بصرية",
        visualDesc: "تطوير أنظمة بصرية متماسكة تنقل قيمك عبر جميع المنصات بوضوح وأناقة.",
        strategyTitle: "استراتيجية العلامة",
        strategyDesc: "بناء استراتيجيات علامة تجارية قوية تضع عملك في مكانة تؤهله للنجاح في مشهد عالمي تنافسي.",
        artTitle: "الإخراج الفني",
        artDesc: "الارتقاء بعلامتك التجارية من خلال التوجيه الإبداعي والتميز الجمالي الذي يتحدث مباشرة إلى سوقك المستهدف.",
      },
      steps: {
        analysisTitle: "التحليل",
        analysisDesc: "تفكيك بيانات العلامة التجارية لتحليل قوى السوق وتحديد نقاط التركيز الاستراتيجية.",
        formulationTitle: "الصياغة",
        formulationDesc:
          "صياغة المعادلة البصرية والمنطق الاستراتيجي لضمان توازن العلامة التجارية وتميزها.",
        engineeringTitle: "الهندسة",
        engineeringDesc:
          "بناء النظام البصري باستخدام الشبكات الهندسية والنسب الرياضية لضمان السلامة البنيوية.",
        calibrationTitle: "المعايرة",
        calibrationDesc:
          "المعايرة النهائية للمخرجات لضمان الاستقرار البصري والتقني عبر جميع نقاط التفاعل.",
      },
      projects: {
        auraCategory: "عطر فاخر / هوية",
        nomadCategory: "مجموعة أزياء / علامة",
        vertexCategory: "عمارة / نظام بصري",
        lunaCategory: "جمال نظيف / تغليف",
      },
    },
  },
};

const storedLang = localStorage.getItem("app_lang");

i18n.use(initReactI18next).init({
  resources,
  lng: storedLang || "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

const setDocumentDirection = (lng) => {
  const normalized = lng.startsWith("ar") ? "ar" : "en";
  const dir = normalized === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = normalized;
  document.documentElement.dir = dir;
};

setDocumentDirection(i18n.language);
i18n.on("languageChanged", (lng) => {
  localStorage.setItem("app_lang", lng);
  setDocumentDirection(lng);
  window.location.reload();
});

export default i18n;
