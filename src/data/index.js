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
    imageCaption: {
      en: "Engineering the Soul: where the ruler's precision meets the fluidity of meaning — to reshape the boundaries of visual perception.",
      ar: "هندسة الروح: حيث تلتقي حدة المسطرة بانسيابيـــة المعنى لإعـــاد تشكيـــل حـــدود الإدراك المرني",
    },
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
    imageCaption: {
      en: "This is how Vibrantecs was born — and from it I learned that true beauty is that which is born from hardship to become a system that breathes. Since that moment, I vowed never to give my clients mere logos, but identities that possess a soul and an unbreakable gravity.",
      ar: "هكذا ولدت فـايبرانتكس ومنها تعلمت أن الجمال الحقيقي هو ذلك الذي يولد من رحم القسوة ليصبح نظاماً يتنفس. ومنذ تلك اللحظة، عاهـــدت نفسي ألا أمنح عمـــلاني مجرد شعارات، بل هويات تملك روحاً، وجاذبية لا تنكسر",
    },
    author: "Nasaeym Studio",
  },
  {
    id: 2,
    slug: "design-journey-the-beginning",
    categoryKey: "uiux",
    date: "Feb 27, 2026",
    readTime: "5 min read",
    title: {
      en: "Design Journey: The Beginning",
      ar: "رحلة التصميم: البداية",
    },
    excerpt: {
      en: "The idea didn't begin with a form — it began with a feeling. A journey through silence, questions, and the courage to decide.",
      ar: "لم تبدأ الفكرة بشكل، بل بشعور. رحلة عبر الصمت والتساؤل وشجاعة القرار.",
    },
    content: {
      en: [
        "The idea didn't begin with a form — it began with a feeling. Something unclear, but present.",
        "The Question: Before any step, there was a question — what should this design say? Not how it looks, but what it means.",
        "The Attempts: Lines began to appear and ideas began to take shape. Every attempt was close, but not quite enough. Between adding and removing, between clarity and complexity — too many options can sometimes distance us from the idea.",
        "The Turning Point: I stopped. I took a step back and looked again — what should not be here?",
        "The Decision: Everything that didn't serve the idea was removed. Only the foundation remained — no excess, no distraction.",
        "The Composition: The design began to take shape. Not because it was complete, but because it became clearer.",
        "The Result: The final form wasn't the most beautiful — it was the most appropriate. Calm, balanced, and honest to the idea.",
        "A design journey is not a search for form, but an arrival at meaning. Every small decision shapes the result.",
      ],
      ar: [
        "لم تبدأ الفكرة بشكل، بل بشعور. شيء غير واضح، لكنه موجود.",
        "السؤال: قبل أي خطوة، كان هناك سؤال — ماذا يجب أن يقول هذا التصميم؟ ليس كيف يبدو، بل ماذا يعني.",
        "المحاولات: بدأت الخطوط تظهر والأفكار تتشكل. كل محاولة كانت قريبة، لكن ليست كافية. بين الإضافة والحذف، بين الوضوح والتعقيد — كثرة الخيارات تُبعدنا عن الفكرة أحياناً.",
        "لحظة التحول: توقفت. رجعت خطوة للخلف ونظرت مرة أخرى — ما الذي لا يجب أن يكون هنا؟",
        "القرار: تم حذف كل ما لا يخدم الفكرة. بقي الأساس فقط، بلا زيادة، بلا تشتيت.",
        "التكوين: بدأ التصميم يأخذ شكله. ليس لأنه اكتمل، بل لأنه أصبح أوضح.",
        "النتيجة: الشكل النهائي لم يكن الأجمل، بل كان الأنسب — هادئ، متوازن، وصادق مع الفكرة.",
        "رحلة التصميم ليست بحثاً عن شكل، بل وصولاً لمعنى. وكل قرار صغير يصنع النتيجة.",
      ],
    },
    image:
      "https://i.top4top.io/p_3767t80k31.png",
    imageCaption: {
      en: "The Design Journey: not a search for form, but an arrival at meaning — and every small decision shapes the result.",
      ar: "رحلة التصميم: ليست بحثاً عن شكل بل وصولاً لمعنى وكل قرار صغيـر يصنع النتيجـــة",
    },
    author: "Nasaeym Studio",
  },
  {
    id: 3,
    slug: "storytelling-through-typography",
    categoryKey: "typography",
    date: "Feb 12, 2026",
    readTime: "7 min read",
    title: {
      en: "The Reason Behind Every Line (Almorgan)",
      ar: "السبب وراء كل خط (المرجان)",
    },
    excerpt: {
      en: "Behind every visual identity lies a geometric blueprint. In 'Almorgan', I didn't just design a piece; I engineered an integrated unit",
      ar: "خلف كل هوية بصرية يكمن مخطط هندسي. في 'المرجان'، لم أصمم مجرد قطعة؛ بل هندست وحدة متكاملة",
    },

    content: {
      en: [
        "Structural Layout: Behind every visual identity lies a geometric blueprint. In 'Almorgan', I didn't just design a piece; I engineered an integrated unit. I drew a path where every curve is not just an aesthetic choice, but the result of mathematical precision and studied balance.",
        "Axis Deconstruction: The fulcrum (origin point). Where balance begins. Every great work requires studied coordinates from the start to ensure absolute stability.",
        "Visual Balance: Geometry is not just numbers, but the art of achieving stability. This axis governs the distribution of visual mass to ensure harmonious weight.",
        "Visual Path: The narrative flow that connects raw geometry and elegance, guiding the eye across the identity with infinite precision.",
        "Architecture is the art of space. Visual identity is the art of precision.",
      ],
      ar: [
        "المخطط الهيكلي: خلف كل هوية بصرية يكمن مخطط هندسي. في 'المرجان'، لم أصمم مجرد قطعة؛ بل هندست وحدة متكاملة. لقد رسمتُ مساراً؛ حيث كل منحنى ليس مجرد خيار جمالي، بل هو نتاج دقة حسابية وتوازن رياضي مدروس.",
        "تفكيك المحاور: نقطة الارتكاز (نقطة الأصل). حيث يبدأ التوازن. كل عمل فني عظيم يتطلب إحداثيات بداية مدروسة لضمان الاستقرار المطلق.",
        "الاتزان البصري: الهندسة ليست مجرد أرقام، بل هي فن تحقيق الاستقرار. هذا المحور يحكم توزيع الكتلة البصرية لضمان ثقل متناغم.",
        "المسار البصري: التدفق السردي الذي يربط بين الهندسة الخام والأناقة، موجهاً العين عبر الهوية بدقة متناهية.",
        "العمارة هي فن المساحة. الهوية البصرية هي فن الدقة.",
      ],
    },
    image:
      "https://g.top4top.io/p_3767gvy1y1.png",
    imageCaption: {
      en: "Caption for blog 3 — edit this text.",
      ar: "كابشن المقال الثالث — بدّل هذا الكلام.",
    },
    author: "Nasaeym Studio",
  },
  {
    id: 15,
    slug: "storytelling-through-typography",
    categoryKey: "typography",
    date: "Feb 12, 2026",
    readTime: "7 min read",
    title: {
      en: "Structural Logic: Niwa Decoration",
      ar: "السبب وراء كل خط: نيوا للديكور",
    },
    excerpt: {
      en: "How the Golden Ratio and precision engineering transform a logo into a structural element, not just a decorative symbol.",
      ar: "كيف تحول النسبة الذهبية والهندسة الدقيقة الشعار إلى عنصر إنشائي، وليس مجرد رمز تزييني",
    },

    content: {
      en: [
        "Structural Blueprint",
        "For 'Niwa Decoration', the design language had to reflect the precision of internal construction. I didn't just design a piece; I engineered an integrated unit. Using the Golden Ratio (Phi) as the foundation for the curves and a precise calculation of the 'Interlock Clearance', I designed the logo to function as a structural element, not merely an ornamental symbol.",
        "Axis Deconstruction",
        "The foundation of the curve: the Golden Ratio. The mathematical sculpting of the identity. Using the Golden Ratio ensures that the curves appear completely natural and inherited. This creates a diagonal visual harmony.",
        "Micro-Engineering",
        "At 0.35mm. This distance is critical. It determines the actual gap between structural elements, ensuring the brand retains its sharpness at all sizes.",
        "Angular Stability",
        "By adjusting precise angles (121.5°, 121.5°), the design achieves a human balance. This reflects the strength and stability required for a decoration firm.",
      ],
      ar: [
        "المخطط الهيكلي",
        "بالنسبة لمؤسسة 'نيوا' للديكور، كان لغة التصميم يجب أن تعكس دقة البناء الداخلي. لم أصمم مجرد قطعة؛ بل هندست وحدة متكاملة. من خلال استخدام النسبة الذهبية (Phi) كأساس للمنحنيات وحساب دقيق لـ 'التعشيق (Interlock Clearance)'، صممت أن الشعار يعمل كعنصر إنشائي، وليس مجرد رمز تزييني.",
        "تفكيك المحاور",
        "أساس المنحنى: النسبة الذهبية. النحت الرياضي للهوية. استخدام النسبة الذهبية يضمن أن تبدو المنحنيات طبيعية وموروثة تماماً. مما يخلق تناغماً بصرياً قطرياً.",
        "الهندسة الدقيقة",
        "عند 0.35 مم. تُعد هذه المسافة حاسمة. فهي تحدد المساحة الفعلية بين العناصر الإنشائية، مما يضمن احتفاظ العلامة التجارية بحدتها في كل الأحجام.",
        "الاستقرار الزاوي",
        "من خلال ضبط زوايا دقيقة (121.5، 121.5)، يحقق التصميم توازناً إنسانياً. مما يعكس القوة والاستقرار المطلوبين لمؤسسة ديكور."
        ,
      ],
    },
    image:
      "https://a.top4top.io/p_3767mfayr1.png",
    imageCaption: {
      en: "Caption for blog 15 — edit this text.",
      ar: "كابشن المقال 15 — بدّل هذا الكلام.",
    },
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
    imageCaption: {
      en: "Caption for blog 4 — edit this text.",
      ar: "كابشن المقال الرابع — بدّل هذا الكلام.",
    },
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
    imageCaption: {
      en: "Caption for blog 5 — edit this text.",
      ar: "كابشن المقال الخامس — بدّل هذا الكلام.",
    },
    author: "Nasaeym Studio",
  },
  {
    id: 6,
    slug: "visual-identity-for-architecture-studios",
    categoryKey: "branding",
    date: "Jan 04, 2026",
    readTime: "6 min read",
    title: {
      en: "Designed Narratives: Sculpting Brands with Light",
      ar: "نحت العلامات بالضوء",
    },
    excerpt: {
      en: "The story of Kenan, who chose to sculpt existence with the brilliance of light rather than stone, creating immortal visual identities",
      ar: "قصة كنان الذي اختار أن ينحت الوجود ببريق الضوء بدلاً من الصخر، خالقاً هويات بصرية خالدة",
    },
    content: {
      en: [
        "Sculpting Light: A Trace That Time Cannot Erase",
        "In the city of 'Stone of Silence', where statues stood like rows of cold slaves, Kenan stood alone. He was a sculptor who spent his life battling stone, trying to extract a soul from it, but he always saw that stone, no matter how long it lasted, would eventually erode under the weight of time.",
        "One night, as the moon seeped through his studio window, Kenan noticed something he hadn't seen before. Light was falling on the edge of the table, cutting through the darkness with a sharpness no chisel could achieve. In that moment, he realized the truth that had eluded him for decades: 'Stone traps light, but it doesn't become light. As for light itself... it is the only sculpture that does not age.'",
        "Kenan decided to leave the stone. He no longer wanted to sculpt matter, but to sculpt 'nothingness' with the brilliance of existence. He didn't use a chisel or a hammer. He crafted lenses from meticulously polished glass and gathered mirrors that reflected the memories of the sun. He spent his days chasing threads of light at critical times: the first thread of light at dawn, the golden glow at sunset, and the pale moonlight at midnight.",
        "Sculpting is not about removing excess from matter, but about intensifying presence in the void.",
        "Kenan was 'sculpting' the mark by focusing intersecting beams of light at a single point suspended in the air, in the old city square. It was a luminous process that required geometric patience beyond that of stone carvers. He adjusted angles by the millimeter, 'trapping' light photons in imaginary orbits until the 'mark' was formed.",
        "The 'mark' wasn't a symbol for anyone, but a symbol for 'everyone'. When the work was complete, people didn't find a statue of marble or bronze; they found a light plate suspended in the air, vibrating like a living soul.",
        "When people passed by it, they felt a mysterious push, a longing for something they hadn't seen before. The mark Kenan sculpted with light acted like a mirror for souls; everyone who looked at it saw the most beautiful thing in their own soul.",
        "Kenan passed away, and the city's houses collapsed, and the stone statues shattered under the weight of wars and time. But the 'mark' remained. It remained because it wasn't a prisoner of the matter that perishes, but a prisoner of physics that does not die, and of beauty that doesn't need weight or volume.",
        "People still pass down 'Narratives of Light', how they protect the sacred point from the winds. They finally realized that Kenan didn't just sculpt a shape, but sculpted a 'way of seeing'.",
        "Kenan taught us that if we want to leave a trace in this world, we shouldn't look for solidity, but for 'clarity'. The mark sculpted with light doesn't leave a wound in the face of the earth, but leaves a mark in the pupils of eyes and the hearts of passersby.",
      ],
      ar: [
        "نحات النور: أثر لا يمحوه الزوال",
        "في مدينة \"حجر الصمت\"، حيث كانت التماثيل تتراص كجيش من العبيد الباردين، كان \"كنان\" يقف وحيداً. كان نحاتاً قضى عمره يصارع الصخر، يحاول أن ينتزع منه روحاً، لكنه كان يرى دائماً أن الصخر، مهما طال بقاؤه، سيتآكل تحت وطأة الزمن.",
        "ذات ليلة، بينما كان القمر يتسلل من كوة مرسمه، لاحظ كنان شيئاً لم يلحظه من قبل. كان الضوء يسقط على حافة الطاولة، يقطع الظلام بحدة لا يمكن لأي إزميل أن يحققها. في تلك اللحظة، أدرك الحقيقة التي غابت عنه عقوداً: \"الحجر يحبس الضوء، لكنه لا يصبح ضوءاً. أما الضوء نفسه.. فهو النحت الوحيد الذي لا يشيخ\".",
        "قرر كنان أن يترك الصخر. لم يعد يريد أن ينحت المادة، بل أراد أن ينحت \"العدم\" ببريق الوجود. لم يستخدم كنان إزميلاً أو مطرقة. صنع عدسات من زجاج مصقول بدقة متناهية، وجمع مرايا تعكس ذكريات الشمس. كان يمضي أيامه يطارد خيوط الضوء في أوقاتها الحرجة: خيط الضوء الأول عند الفجر، وبريق الذهب عند الغروب، وشحوب القمر في منتصف الليل.",
        "النحت ليس في إزالة الفائض من المادة، بل في تكثيف الحضور في الفراغ.",
        "كان كنان \"ينحت\" العلامة عبر تركيز حزم ضوئية متداخلة في نقطة واحدة معلقة في الهواء، في ساحة المدينة القديمة. كانت عملية مضنية تتطلب صبراً هندسياً يفوق صبر من ينحت الجرانيت. كان يضبط الزوايا بالمليمتر، \"محبساً\" فوتونات الضوء في مدارات وهمية، حتى تشكلت \"العلامة\".",
        "لم تكن \"العلامة\" رمزاً لأحد، بل كانت رمزاً \"للجميع\". حين اكتمل العمل، لم يجد الناس تمثالاً من رخام أو برونز، بل وجدوا طبقاً نورانياً معلقاً في الهواء، يرتعش كروح حية.",
        "عندما يمر الناس بجانبه، كانوا يشعرون بدفع غامض، وبحنين لشيء لم يروه من قبل. كانت العلامة التي نحتها كنان بالضوء تعمل كمرآة للنفوس؛ كل من نظر إليها، رأى فيها أجمل ما في روحه.",
        "رحل كنان، وانهارت بيوت المدينة، وتحطمت التماثيل الحجرية تحت وطأة الحروب والزمن. لكن \"العلامة\" بقيت. بقيت لأنها لم تكن ملكاً للمادة التي تفنى، بل كانت ملكاً للفيزياء التي لا تموت، وللجمال الذي لا يحتاج إلى وزن أو حجم.",
        "كان الناس يتوارثون \"روايا الضوء\"، كيف يضعون المرايا، وكيف يحمون النقطة المقدسة من الرياح. أدركوا أخيراً أن كنان لم ينحت مجرد شكل، بل نحت \"طريقة للرؤية\".",
        "لقد علمنا كنان أننا إذا أردنا أن نترك أثراً في هذا العالم، فلا يجب أن نبحث عن الصلابة، بل عن \"الوضوح\". فالعلامة التي تُنحت بالضوء لا تترك جرحاً في وجه الأرض، بل تترك بصمة في حدقات العيون وقلوب العابرين.",
      ],
    },
    image:
      "https://g.top4top.io/p_3767fwjah1.png",
    imageCaption: {
      en: "We learned from Kayan that if we want to leave a mark on this world, we should not seek hardness, but rather “clarity.” Landmarks shaped by light do not leave a scar on the face of the earth; instead, they leave their imprint in the eyes of viewers and the hearts of passersby.",
      ar: "لقد علمنا اننا اذا اردنا ان نترك اثرا في هذا العالم فلايجب ان نبحث عن الصلابة بل عن الوضوح فالمعالم التي تنحت بالضوء لا تترك جرحا في وجه الارض بل تترك بصمتها في خدمات العيون وفلوب العابرين  ",
    },
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
    imageCaption: {
      en: "Caption for blog 7 — edit this text.",
      ar: "كابشن المقال السابع — بدّل هذا الكلام.",
    },
    author: "Nasaeym Studio",
  },
  {
    id: 8,
    slug: "design-journey-from-a-point",
    categoryKey: "uiux",
    date: "Dec 02, 2025",
    readTime: "5 min read",
    title: {
      en: "Design Journey: From a Point",
      ar: "رحلة التصميم: من نقطة",
    },
    excerpt: {
      en: "There was nothing clear — no idea, no direction. Just a point. And that was everything.",
      ar: "لم يكن هناك شيء واضح — لا فكرة، لا اتجاه. فقط نقطة. وكانت كل شيء.",
    },
    content: {
      en: [
        "There was nothing clear. No idea, no direction, no sufficient reason to begin. Just a point — it seemed small, but it was everything I had.",
        "In that moment I had to decide: Do I begin... or wait for something bigger? I started moving the line — not because I was certain, but because stopping was no longer comfortable.",
        "Every attempt resembled me, then didn't. Am I over-simplifying? Or afraid of complexity? Is the problem in the idea, or in my confidence in it?",
        "I stopped — not because I was lost, but because I realized something: not everything that can be added... should be added.",
        "I chose to keep the little. To bear its simplicity rather than flee from it. Because clarity sometimes... requires courage.",
        "From the point, the path began. The design wasn't just a form — it was a decision to accept the little and trust it.",
        "The point wasn't just a beginning. It was a moment of confrontation — between me... and my choice.",
        "Simplicity is not easy... it is honest.",
      ],
      ar: [
        "لم يكن هناك شيء واضح. لا فكرة، لا اتجاه، لا سبب كافٍ للبدء. فقط نقطة — بدت صغيرة، لكنها كانت كل ما أملك.",
        "وفي تلك اللحظة كان عليّ أن أقرر: هل أبدأ... أم أنتظر شيئاً أكبر؟ بدأت أحرك الخط — ليس لأنني متأكدة، بل لأن التوقف لم يعد مريحاً.",
        "كل محاولة كانت تشبهني، ثم لا تشبهني. هل أنا أبالغ في البساطة؟ أم أخاف من التعقيد؟ هل المشكلة في الفكرة أم في ثقتي بها؟",
        "توقفت — ليس لأنني ضعت، بل لأنني أدركت شيئاً: ليس كل ما يمكن إضافته... يجب أن يُضاف.",
        "اخترت أن أُبقي القليل. أن أتحمل بساطته بدل أن أهرب منها. لأن الوضوح أحياناً... يحتاج شجاعة.",
        "من النقطة... بدأ المسار. لم يكن التصميم مجرد شكل — كان قراراً أن أقبل القليل وأثق به.",
        "لم تكن النقطة مجرد بداية. كانت لحظة مواجهة — بيني... وبين اختياري.",
        "البساطة ليست سهلة... بل صادقة.",
      ],
    },
    image:
      "https://b.top4top.io/p_3767iocqf1.png",
    imageCaption: {
      en: "Simplicity is not easy... it is honest.",
      ar: "البساطة ليست سهلة... بل صادقة",
    },
    author: "Nasaeym Studio",
  },
  {
    id: 11,
    slug: "design-journey-when-i-had-no-idea",
    categoryKey: "uiux",
    date: "May 01, 2026",
    readTime: "4 min read",
    title: {
      en: "Design Journey: When I Had No Idea",
      ar: "رحلة التصميم: عندما لم تكن لدي فكرة",
    },
    excerpt: {
      en: "I sat before the screen. Everything was ready — except the idea. A story about silence, emptiness, and what grows from within it.",
      ar: "جلست أمام الشاشة. كل شيء جاهز — إلا الفكرة. قصة عن الصمت والفراغ وما يولد منه.",
    },
    content: {
      en: [
        "Not every silence... is rest.",
        "I sat before the screen. Everything was ready — the tools, the time, even the desire. Except: the idea. There was nothing to begin with. No point, no direction. Just empty space.",
        "I tried to start with anything — lines without meaning, shapes without reason, movement just to break the silence. But everything felt... artificial. Have my ideas run out? Am I searching in the wrong place? Is creativity created, or does it wait?",
        "The more I tried, the greater the emptiness. Every idea would disappear before it was complete.",
        "I stopped — not because I found the solution, but because I was tired of searching. I left everything as it was.",
        "In this silence, something small began to appear. Not a complete idea, but a faint feeling. And it was enough. I didn't wait for a perfect idea — I began with what I had, even if it was unclear.",
        "From this feeling, the idea began to take shape — slowly, but honestly. It wasn't the best idea, but it was real.",
        "Sometimes we don't need a ready idea — we just need to allow the idea to come in its own way. Creativity is not forced... it is discovered.",
      ],
      ar: [
        "ليس كل صمت... راحة.",
        "جلست أمام الشاشة. كل شيء جاهز — الأدوات، الوقت، وحتى الرغبة. إلا الفكرة. لم يكن هناك ما أبدأ به. لا نقطة، ولا اتجاه. فقط مساحة فارغة.",
        "حاولت أن أبدأ بأي شيء — خطوط بلا معنى، أشكال بلا سبب، حركة فقط لكسر الصمت. لكن كل شيء كان يبدو مصطنعاً. هل انتهت أفكاري؟ أم أني أبحث في المكان الخطأ؟ هل الإبداع يُخلق أم يُنتظر؟",
        "كلما حاولت أكثر، زاد الفراغ. كل فكرة كانت تختفي قبل أن تكتمل.",
        "توقفت — ليس لأنني وجدت الحل، بل لأنني تعبت من البحث. تركت كل شيء كما هو.",
        "في هذا الصمت، بدأ شيء صغير يظهر. ليس فكرة كاملة، بل إحساس خفيف. وكان كافياً. لم أنتظر فكرة مثالية — بدأت بما لدي، حتى لو كان غير واضح.",
        "من هذا الإحساس بدأت الفكرة تتشكل — ببطء، لكن بصدق. لم تكن أفضل فكرة، لكنها كانت حقيقية.",
        "أحياناً لا نحتاج فكرة جاهزة — بل أن نسمح للفكرة أن تأتي بطريقتها. الإبداع لا يُجبر... بل يُكتشف.",
      ],
    },
    image:
      "https://d.top4top.io/p_3767oex6l1.png",
    imageCaption: {
      en: "Creativity is not forced... it is discovered.",
      ar: "الإبـداع لا يُجبـــر.. بل يُكتـــشف",
    },
    author: "Nasaeym Studio",
  },
];
