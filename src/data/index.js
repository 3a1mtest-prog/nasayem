import logo1 from "../assets/logos/logo1.png";
import logo2 from "../assets/logos/logo2.png";
import logo3 from "../assets/logos/logo3.png";
import logo4 from "../assets/logos/logo4.png";
import logo5 from "../assets/logos/logo5.png";
import logo6 from "../assets/logos/logo6.png";
import logo7 from "../assets/logos/logo7.png";
import logo8 from "../assets/logos/logo8.png";
import logo9 from "../assets/logos/logo9.png";
import logo10 from "../assets/logos/logo10.png";
import logo11 from "../assets/logos/logo11.png";
import logo12 from "../assets/logos/logo12.png";
import { Compass, Hexagon, Triangle, CircleDashed } from "lucide-react";

import vibrantecsInsightImg from "../assets/projects/vibrantecs-insight.png";
import nasayemInsightImg from "../assets/projects/nasayem-insight.png";

export const navLinks = [
  { key: "philosophy", to: "/#philosophy" },
  { key: "work", to: "/#work" },
  { key: "services", to: "/#services" },
  { key: "about", to: "/#about" },
  { key: "process", to: "/#process" },
  { key: "blog", to: "/blog" },
];

export const logosArray = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
];

export const projects = [
  {
    id: 1,
    title: "AURA",
    categoryKey: "auraCategory",
    image:
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1200&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-4",
    rowSpan: "row-span-2",
    animation: {
      axis: "y",
      distance: 120,
      ease: "power2.out",
      delay: 0.35,
      duration: 0.6,
    },
  },
  {
    id: 2,
    title: "NOMAD",
    categoryKey: "nomadCategory",
    image:
      "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=1200&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-8",
    rowSpan: "row-span-1",
    animation: {
      axis: "x",
      distance: 140,
      ease: "power4.out",
      delay: 0.2,
      duration: 0.8,
    },
  },
  {
    id: 3,
    title: "VERTEX",
    categoryKey: "vertexCategory",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-4",
    rowSpan: "row-span-1",
    animation: {
      axis: "y",
      distance: 80,
      ease: "expo.out",
      delay: 0.5,
      duration: 0.4,
    },
  },
  {
    id: 4,
    title: "LUNA",
    categoryKey: "lunaCategory",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1200&auto=format&fit=crop",
    colSpan: "col-span-1 md:col-span-4",
    rowSpan: "row-span-1",
    animation: {
      axis: "y",
      distance: 80,
      ease: "back.out(1.2)",
      delay: 0.6,
      duration: 0.45,
    },
  },
];

export const services = [
  {
    id: "logo",
    titleKey: "logoTitle",
    icon: Compass,
    descKey: "logoDesc",
    link: "https://www.google.com",
  },
  {
    id: "visual",
    titleKey: "visualTitle",
    icon: Hexagon,
    descKey: "visualDesc",
    link: "#",
  },
  {
    id: "strategy",
    titleKey: "strategyTitle",
    icon: Triangle,
    descKey: "strategyDesc",
    link: "#",
  },
  {
    id: "art",
    titleKey: "artTitle",
    icon: CircleDashed,
    descKey: "artDesc",
    link: "#",
  },
];

export const steps = [
  { num: "01", titleKey: "discoveryTitle", descKey: "discoveryDesc" },
  { num: "02", titleKey: "strategyTitle", descKey: "strategyDesc" },
  { num: "03", titleKey: "creationTitle", descKey: "creationDesc" },
  { num: "04", titleKey: "implementationTitle", descKey: "implementationDesc" },
];

export const blogs = [
  {
    id: 10,
    slug: "restoring-the-soul-with-pen-and-ruler",
    categoryKey: "branding",
    date: "Apr 21, 2026",
    readTime: "4 min read",
    title: {
      en: "Narrative: Restoring the Soul with Pen and Ruler",
      ar: "رواية : ترميم الروح بالقلم والمسطرة",
    },
    excerpt: {
      en: "How Identity Engineering transforms the chaos of the void into an unbreakable visual structure, forging stability from anxiety.",
      ar: "كيف تحول هندسة الهوية فوضى الفراغ إلى هيكل بصري لا ينكسر، خالقة الاستقرار من قلب القلق.",
    },
    content: {
      en: [
        "Attacking the Void",
        "The moment I open my workspace, I don't see a silent white space; I see a battlefield. The void is my primal enemy, and the design you perceive as simple and soft is the result of a fierce struggle with the laws of physics. When the earth was shaking around me, the screen was my only realm to assert control.",
        "I wasn't just drawing lines; I was injecting energy into every corner, wrestling with the 'mass' so the identity wouldn't collapse under the weight of chaos. I was building a system that refuses to shatter, melting digital iron to forge a visual shield that protects meaning from being lost. Every pixel I placed was fighting to prove its right to remain.",
        "And when the lines begin to interconnect, the explosion I live for happens; chaos transforms into a formidable structure. Here, you realize I am not merely offering a 'drawing,' but engineering an 'entity' with its own gravity.",
        "Identity Engineering is, for me, the way I rearrange the world around me, turning anxiety into precision, and dispersion into stability. In every project, the challenge is to create a system that possesses a human soul but with an unforgiving physical power, compelling the eye to stand in respect, and proving to everyone that a system built with the truth of the mind... can never be destroyed."
      ],
      ar: [
        "الهجوم على الفراغ",
        "في اللحظة التي أفتح فيها مساحة العمل، لا أرى بياضاً صامتاً؛ أرى ســــاحة معركة. الفراغ هو عدوي الأول، والتصميم الذي تراه بسيطاً وناعماً هو نتــاج صراعٍ شرس مع قوانين الفيزياء. عندما كانت الأرض تهتز من حــــــولي، كانت الشاشة هي مكاني الوحيد لفرض السيطرة.",
        "لم أكن أرسم خطوطـــــــــــاً، كنتُ أحقنُ طاقةً في كل زاوية، وأصارع \"الكتلة\" لكي لا تنهار الهـــــــــــــــوية تحت ثقل الفوضى. كنتُ أبني نظاماً يرفض الانكسار، وأصهرُ الحديد الرقمي لأصنــــــــــع درعاً بصرياً يحمي المعنى من الضيـــــــاع. كل بكسل أضعـه، كان يقاتل ليثبت أحقيته في البقاء",
        "وعندما تبدأ الخطوط بالترابط، يحدث الانفجار الذي أعيش لأجله؛ تتحــــــــــــــول الفوضى إلى هيكلٍ جبار. هنا تدرك أنني لا أقدم لكِ مجــــــــرد \"رسمـــــــــــة\"، بل أهندس لكِ \"كياناً\" يملك جاذبية خاصة به.",
        "الـ الايدنتتي انجنيرنق بالنسبـــــة لي هي الطريقة التي أُعيد بها ترتيب العالم من حولي، محولةً القلق إلى دقـــة، والشتات إلى استقرار. في كل مشروع، التحدي هو أن أصنع نظامـــــــاً يملك روحاً بشرية لكن بقوة فيزيائية لا ترحم، يجبر العين على الوقوف احترامــــــــــاً، ويثبت للجميع أن النظام الذي يُبنى بصدق العقــــــــــل.. لا يمكن لهدمه أبداً"
      ],
    },
    image: nasayemInsightImg,
    author: "Nasaeym Studio",
  },
  {
    id: 9,
    slug: "vibrantecs-narrative-finding-frequency",
    categoryKey: "branding",
    date: "Apr 21, 2026",
    readTime: "4 min read",
    title: {
      en: "The Vibrantecs Narrative: Finding Frequency Amidst the Noise",
      ar: "رواية فايبرانتكس: البحث عن التردد وسط الضجيج",
    },
    excerpt: {
      en: "How the name 'Vibrantecs' was born amidst the chaos of war—a testament that the will of structure and design is always stronger than destruction.",
      ar: "كيف ولدت كلمة 'فايبرانتكس' وسط فوضى الحرب—كشاهد على أن إرادة النظام والتصميم أقوى دائماً من الدمار.",
    },
    content: {
      en: [
        "Sculpting the Word Under Bombardment",
        "The sky outside wouldn't stop screaming, and fear was trying to find a way to my hands to make them tremble. In those moments, I had nothing in front of me but my laptop screen; it was my only window to a system where I could control the balance, far from the chaos of the war outside.",
        "I was looking for a name for a 'technical maintenance' project, but in reality, I was searching for a 'rhythm' for life. Amidst the roar of explosions, the word 'Vibrant' was born. My choice wasn't a mere marketing coincidence; it was a personal defiance against all this death. I needed a name brimming with vibration and vitality, a name proving that energy cannot be destroyed, but only returns to work anew. I added the suffix 'tecs' to grant it a shield of precision and engineering solidity.",
        "That night, Vibrantecs wasn't just a name for a maintenance brand; it was the 'frequency' I chose to tune my mind to so it wouldn't break. The word was the first stone in building a visual system I would later engineer to bear witness that we 'design to remain.'",
        "When I consulted with the partners and the name was unanimously accepted, I felt something I hadn't experienced in a long time; I felt as if my soul had returned to me. It wasn't just a commercial approval, but an acknowledgment that the 'pulse of life' I had embedded in the letters had reached them. That was the moment fear morphed into a ruler and a pen, where I began drawing the first geometric lines, confident that the will of the system is always stronger than the chaos of destruction."
      ],
      ar: [
        "نحت الكلمة تحت القصف",
        "كانت السمـــــــــاء في الخارج لا تتوقف عن الصراخ، وكان الخوف يحاول أن يجـــــــد طريقاً ليدي ليرجفها. في تلك اللحظـــات، لم يكن أمـــــــامي إلا شاشـــة اللابتوب؛ كانت هي نافذتي الوحيدة لنظــــامٍ أتحكم في موازينه بعيـــــــداً عن فوضى الحرب بالخارج.",
        "كنت أبحث عن اسم لمشروع \"صيــــــــــــــانة تقنية\"، لكنني في الحقيقة كنت أبحث عن \"إيقاع\" للحياة. وسط دويّ الانفجارات ولدت كلمـــــة فبرانت ,لم يكن اختياري لها مجرد صدفة تسويقية؛ بل كان رداً شخصيـــــــــــاً على كل هذا المـوت. كنت أحتاج لاسمٍ يفيض بالاهتزاز والحيوية، اسمٍ يثبت أن الطـــاقة لا تفنى، بل تعود للعمل من جديد. أضفتُ إليها مقطع” تيكس”  لأمنحهـــــــــــــــا درعاً من الدقـة والصلابة الهندسية",
        "في تلك الليلة، لم يكن فايبرانتكس مجرد اسم لبراند صيــانة؛ كان هو \"التردد\" الذي اخترتُ أن أضبط عليه عقلي كي لا ينكسر. كانت الكلمة هي الحجر الأول في بنـاء نظامٍ بصري سأقوم بهندسته لاحقاً ليكون شاهداً على أننا \"نصمم لنبقى\".",
        "وعندما تشاورتُ مع الشركــــــــــــاء وتم قبول الاسم بالإجماع، شعرتُ بشيءٍ لم أختبـره منذ زمن؛ شعـــــــــــرتُ وكأن روحي قد عادت إليّ من جديد. لم تكن مجـــــــــرد موافقة تجارية، بل كانت اعترافاً بأن \"نبض الحيـــــــــــــــــــــــاة\" الذي وضعتــه في الحروف قد وصل إليهم. كانت تلك هي اللحظـة التي تحول فيها الخوف إلى مسطرة وقلم، حيث بدأتُ برسم أولى الخطوط الهندسية، واثقةً بأن إرادة النظام أقوى دائماً من فوضى الدمار"
      ],
    },
    image: vibrantecsInsightImg,
    author: "Nasaeym Studio",
  },
  {
    id: 1,
    slug: "sculpting-brands-with-light",
    categoryKey: "branding",
    date: "Mar 08, 2026",
    readTime: "6 min read",
    title: {
      en: "Sculpting Brands With Light",
      ar: "نحت العلامات بالضوء",
    },
    excerpt: {
      en: "A study in contrast, glow, and negative space-how visual systems borrow from cinematic lighting to feel alive.",
      ar: "دراسة في التباين والوهج والمساحات السلبية وكيف تستعير الأنظمة البصرية من سينمائية الضوء.",
    },
    content: {
      en: [
        "Light is one of the most expressive materials in branding. It is not just illumination; it is direction, depth, and intention. When we build a visual identity, we borrow the logic of light to decide where attention lives and where it falls away.",
        "We start by defining the brightest moment in the system. It could be a logo, a hero image, or a brand accent. That focal point shapes every other decision because contrast becomes the language of hierarchy.",
        "From there, we study shadow. The quiet spaces, the negative gaps, the muted tones. These elements give the brand room to breathe and allow the brighter elements to feel deliberate instead of loud.",
        "The result is a system that feels cinematic. It has direction, atmosphere, and a sense of presence. When light is used with restraint, the identity becomes memorable without shouting.",
      ],
      ar: [
        "الضوء من أكثر المواد تعبيرا في العلامة. ليس مجرد إضاءة، بل اتجاه وعمق ونية.",
        "نحدد أولا أكثر نقطة إشراقا في النظام. قد تكون الشعار أو مساحة رئيسية، فهي منطق التسلسل.",
        "ثم ندرس الظل: المساحات الهادئة والنغمات المطفأة التي تمنح النظام تنفسا.",
        "النتيجة نظام سينمائي له حضور واضح دون صخب.",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
    author: "Nasaeym Studio",
  },
  {
    id: 2,
    slug: "the-geometry-of-calm-interfaces",
    categoryKey: "uiux",
    date: "Feb 27, 2026",
    readTime: "5 min read",
    title: {
      en: "The Geometry of Calm Interfaces",
      ar: "هندسة الواجهات الهادئة",
    },
    excerpt: {
      en: "Why soft grids, disciplined spacing, and precise edges create digital products that feel quiet and confident.",
      ar: "لماذا تخلق الشبكات الناعمة والمسافات المنضبطة واجهات واثقة وهادئة.",
    },
    content: {
      en: [
        "Calm interfaces are built on disciplined geometry. The user should feel a quiet confidence, as if every element is exactly where it should be.",
        "We design grids as if they were architecture: columns define rhythm, margins define silence, and spacing defines tempo. This clarity removes friction and allows the content to lead.",
        "Corners and radii play a subtle role. Small changes in curvature can shift the personality from cold to warm. We treat these details like tone of voice.",
        "A calm interface is not sparse for the sake of minimalism. It is precise. The geometry does the work so the user does not have to.",
      ],
      ar: [
        "الواجهات الهادئة مبنية على هندسة منضبطة. كل عنصر في مكانه.",
        "نبني الشبكات كأنها عمارة: الأعمدة إيقاع، والهوامش صمت.",
        "الزوايا والانحناءات تغير الشخصية من باردة إلى دافئة.",
        "الهدوء هنا ليس فراغا، بل دقة تجعل المحتوى يقود.",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
    author: "Nasaeym Studio",
  },
  {
    id: 3,
    slug: "storytelling-through-typography",
    categoryKey: "typography",
    date: "Feb 12, 2026",
    readTime: "7 min read",
    title: {
      en: "Storytelling Through Typography",
      ar: "سرد الحكاية عبر الطباعة",
    },
    excerpt: {
      en: "From weight to rhythm, we decode how typographic structure shapes a brand's personality at first glance.",
      ar: "من الوزن إلى الإيقاع، نفكك كيف تشكل الطباعة شخصية العلامة من النظرة الأولى.",
    },
    content: {
      en: [
        "Typography is storytelling at first glance. Weight, spacing, and rhythm can communicate refinement, urgency, or ease before a single word is read.",
        "We look for letterforms that match the physics of the brand. A geometric sans might express precision, while a sharp serif can suggest heritage and authority.",
        "The space between lines is just as important as the characters. Tight leading feels dense and intense. Generous leading feels open and measured.",
        "In the end, typography becomes a system of motion. It guides the eye the way a soundtrack guides a scene.",
      ],
      ar: [
        "الطباعة سرد فوري. الوزن والمسافة والإيقاع يرسلون رسالة قبل القراءة.",
        "نختار الحروف وفق فيزياء العلامة: هندسية للدقة أو سيرف للهيبة.",
        "المسافة بين الأسطر بقدر أهمية الأحرف نفسها.",
        "في النهاية تصبح الطباعة نظام حركة يوجه العين.",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1400&auto=format&fit=crop",
    author: "Nasaeym Studio",
  },
  {
    id: 4,
    slug: "designing-for-scent-a-visual-ritual",
    categoryKey: "packaging",
    date: "Jan 29, 2026",
    readTime: "4 min read",
    title: {
      en: "Designing for Scent: A Visual Ritual",
      ar: "تصميم للرائحة: طقس بصري",
    },
    excerpt: {
      en: "Luxury fragrance identities balance restraint and aura. Here's the system we use to craft the feeling.",
      ar: "هويات العطور الفاخرة توازن بين الرصانة والهالة. هذه هي منهجيتنا.",
    },
    content: {
      en: [
        "Fragrance brands are built on ritual. The visual system should feel like an invitation, slow and intentional.",
        "We start by defining materials. Metallic foils, soft-touch papers, or translucent glass can communicate the aura before the product is even opened.",
        "Then we choreograph the sequence: outer box, inner casing, bottle, label. Each layer should feel like a quiet reveal.",
        "When done well, the packaging does not just contain a scent; it frames a memory.",
      ],
      ar: [
        "علامات العطور مبنية على طقس. النظام البصري يجب أن يكون دعوة هادئة.",
        "نحدد المواد أولا: رقائق معدنية أو زجاج شفاف لخلق هالة.",
        "ننسق التسلسل: علبة، غلاف، زجاجة، ملصق. كل طبقة كشف.",
        "عند الإتقان يصبح التغليف إطارا للذاكرة.",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1400&auto=format&fit=crop",
    author: "Nasaeym Studio",
  },
  {
    id: 5,
    slug: "from-moodboard-to-system",
    categoryKey: "process",
    date: "Jan 18, 2026",
    readTime: "8 min read",
    title: {
      en: "From Moodboard to System",
      ar: "من لوحة الإلهام إلى النظام",
    },
    excerpt: {
      en: "A methodical path for translating inspiration into repeatable components across a brand ecosystem.",
      ar: "مسار منهجي لتحويل الإلهام إلى مكونات قابلة للتكرار.",
    },
    content: {
      en: [
        "Moodboards capture energy, but systems capture reality. We move from inspiration to structure with a series of deliberate constraints.",
        "First we extract core signals: color temperature, texture, scale, and tone. These are translated into a small set of design variables.",
        "Next we build rules. What typefaces can never be paired? What spacing rules keep the system consistent? Constraints keep the identity stable as it scales.",
        "The final step is documentation. A system must be teachable for it to survive.",
      ],
      ar: [
        "لوحات الإلهام تلتقط الطاقة، لكن النظام يلتقط الواقع.",
        "نستخرج الإشارات الأساسية: حرارة اللون والملمس والحجم والنبرة.",
        "ثم نبني القواعد التي تحفظ الاتساق عند التوسع.",
        "والخطوة الأخيرة هي التوثيق كي يبقى النظام قابلا للتعليم.",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop",
    author: "Nasaeym Studio",
  },
  {
    id: 6,
    slug: "visual-identity-for-architecture-studios",
    categoryKey: "branding",
    date: "Jan 04, 2026",
    readTime: "6 min read",
    title: {
      en: "Visual Identity for Architecture Studios",
      ar: "هوية بصرية لاستوديوهات العمارة",
    },
    excerpt: {
      en: "Precision, proportion, and material honesty become the pillars of a brand system for the built world.",
      ar: "الدقة والنسب وصدق المادة هي أعمدة النظام البصري لعالم البناء.",
    },
    content: {
      en: [
        "Architecture brands must feel exacting without becoming sterile. We often begin with the grid because it echoes the craft itself.",
        "Material honesty becomes a visual principle. If the firm builds with stone and steel, the identity should feel grounded, not ornamental.",
        "We use proportion as a narrative device. A wide mark implies stability, a vertical mark implies ambition. These are small choices with large impact.",
        "When the system is consistent, the brand feels like an extension of the spaces it creates.",
      ],
      ar: [
        "علامات العمارة يجب أن تكون دقيقة دون جمود.",
        "صدق المواد يصبح مبدأ بصريا: حجر وفولاذ يطلبان هوية راسخة.",
        "النسب تحكي القصة: علامة عريضة للاستقرار وعمودية للطموح.",
        "الاتساق يجعل العلامة امتدادا للمساحات التي تصنعها.",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format&fit=crop",
    author: "Nasaeym Studio",
  },
  {
    id: 7,
    slug: "color-pairing-for-quiet-power",
    categoryKey: "color",
    date: "Dec 18, 2025",
    readTime: "5 min read",
    title: {
      en: "Color Pairing for Quiet Power",
      ar: "تناغم الألوان للقوة الهادئة",
    },
    excerpt: {
      en: "Subtle palettes can still feel bold. We share our framework for building confident color stories.",
      ar: "حتى اللوحات الهادئة يمكن أن تبدو جريئة حين يكون التباين مقصودا.",
    },
    content: {
      en: [
        "Quiet palettes can still feel bold when contrast is intentional. We seek pairs that feel like a whisper with a sharp edge.",
        "Start with a base tone that feels grounded. Then introduce a higher-energy accent that appears sparingly, almost like a signal.",
        "The relationship between these colors should be consistent in every application. Repetition builds recognition.",
        "The most powerful palettes are not loud; they are unmistakable.",
      ],
      ar: [
        "حتى اللوحات الهادئة يمكن أن تكون قوية إذا كان التباين مقصودا.",
        "ابدأ بلون أساس هادئ ثم أضف لمسة عالية الطاقة باعتدال.",
        "العلاقة بين الألوان يجب أن تتكرر لبناء التعرف.",
        "أقوى اللوحات ليست صاخبة بل لا تخطئها العين.",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop",
    author: "Nasaeym Studio",
  },
  {
    id: 8,
    slug: "design-systems-that-breathe",
    categoryKey: "uiux",
    date: "Dec 02, 2025",
    readTime: "7 min read",
    title: {
      en: "Design Systems That Breathe",
      ar: "أنظمة تصميم تتنفس",
    },
    excerpt: {
      en: "A design system should feel like a living organism. Here are the principles we follow to keep it fluid.",
      ar: "النظام الحيوي يتكرر ويتطور. مبادئنا لبناء نظام مرن.",
    },
    content: {
      en: [
        "A living design system has rhythm. It repeats, but it also adapts. We design for evolution, not just consistency.",
        "We define core components with strong rules, then create flexible patterns for edge cases. This keeps the system stable without becoming rigid.",
        "Micro-decisions are documented: spacing scale, radius scale, and motion cadence. These details create a sense of cohesion over time.",
        "When a system breathes, teams move faster and the brand feels present across every surface.",
      ],
      ar: [
        "النظام الحي له إيقاع. يتكرر ويتطور في الوقت نفسه.",
        "نحدد مكونات أساسية صارمة ونترك هامشا للحالات الخاصة.",
        "نوثق القرارات الدقيقة مثل المسافات والزوايا والحركة.",
        "حين يتنفس النظام تعمل الفرق أسرع وتشعر العلامة بالحضور.",
      ],
    },
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400&auto=format&fit=crop",
    author: "Nasaeym Studio",
  },
];
