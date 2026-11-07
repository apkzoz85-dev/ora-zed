// ZED East — page content (AR + EN). Prices: indicative, from current market listings (Nov 2026).
export type Lang = "ar" | "en";

type Row = { label: string; area?: string; price: number };

const ar = {
  dir: "rtl" as const,
  name: "زيد إيست",
  nameEn: "ZED EAST",
  meta: {
    title: "زيد إيست أورا التجمع الخامس 2026 | الأسعار وأنظمة السداد — ZED East",
    description:
      "زيد إيست من أورا للتطوير العقاري على شارع التسعين الجنوبي بالتجمع الخامس: شقق كاملة التشطيب تبدأ من 11.9 مليون جنيه، وتاون هاوس وڤيلات، ومجتمع The Emerald Collection. مقدم 5% وتقسيط حتى 10 سنوات.",
  },
  nav: [
    { href: "#offers", label: "الوحدات" },
    { href: "#prices", label: "الأسعار" },
    { href: "#plans", label: "أنظمة السداد" },
    { href: "#location", label: "الموقع" },
    { href: "#contact", label: "تواصل معنا" },
  ],
  whatsapp: "واتساب",
  call: "اتصال",
  mail: "بريد",
  otherLang: "English",
  otherHref: "/en",
  hero: {
    eyebrow: "أورا للتطوير العقاري · نهاية شارع التسعين الجنوبي، التجمع الخامس",
    title: "زيد إيست",
    sub: "مجتمع متكامل منخفض الكثافة في قلب القاهرة الجديدة، تتجاوز مساحاته الخضراء نصف مساحة المشروع، ويضم شققًا كاملة التشطيب وتاون هاوس وڤيلات مستقلة.",
    alt: "المساحات الخضراء والمباني السكنية في زيد إيست",
    facts: [
      { v: "415", u: "", l: "فدان مساحة المشروع" },
      { v: "200+", u: "", l: "فدان مساحات خضراء" },
      { v: "50", u: "", l: "فدان نادٍ رياضي" },
      { v: "5%", u: "", l: "مقدم التعاقد", accent: true },
    ],
  },
  offers: {
    title: "ثلاثة طروحات في مجتمع واحد",
    sub: "اختر الطرح الأنسب لاحتياجك: شقة كاملة التشطيب للسكن أو الاستثمار، أو منزل مستقل لعائلتك.",
    from: "تبدأ من",
    unit: "مليون جنيه",
    items: [
      {
        en: "APARTMENTS",
        title: "الشقق السكنية",
        body: "شقق كاملة التشطيب بالتكييفات في مبانٍ منخفضة الارتفاع، تطل على المساحات الخضراء، من غرفة نوم واحدة حتى دوبلكس.",
        tags: ["غرفة نوم", "غرفتا نوم", "3 غرف نوم", "دوبلكس"],
        from: "11.9",
        img: "/images/apartments.jpg",
        alt: "المباني السكنية في زيد إيست",
        cta: "أسعار الشقق",
        tab: "apartments",
      },
      {
        en: "VILLAS",
        title: "التاون هاوس والڤيلات",
        body: "تاون هاوس ميدل وكورنر وڤيلات مستقلة في الحي السكني منخفض الكثافة، بارتفاعات أسقف رحبة وحدائق خاصة.",
        tags: ["تاون هاوس ميدل", "تاون هاوس كورنر", "ڤيلا مستقلة"],
        from: "32",
        img: "/images/villas.jpg",
        alt: "ڤيلات زيد إيست",
        cta: "أسعار الڤيلات",
        tab: "villas",
      },
      {
        en: "THE EMERALD COLLECTION",
        title: "ذا إميرالد كوليكشن",
        body: "آخر مجتمع للمنازل المستقلة داخل زيد إيست: ڤيلات من 250 إلى 290 م²، وتاون هاوس وفوربلكس ودوبلكس، بتسليم 2029.",
        tags: ["ڤيلات 250 – 290 م²", "فوربلكس", "دوبلكس"],
        from: "26",
        img: "/images/emerald.jpg",
        alt: "ذا إميرالد كوليكشن في زيد إيست",
        cta: "أسعار الإطلاق",
        tab: "villas",
      },
    ],
  },
  prices: {
    title: "الأسعار",
    note: "أسعار بداية بالجنيه المصري، استرشادية وقابلة للتغيير وفقًا للمتاح",
    tabs: { apartments: "الشقق", villas: "الڤيلات" },
    sqm: "م²",
    boards: {
      apartments: {
        en: "APARTMENTS",
        rows: [
          { label: "شقة بغرفة نوم", area: "79", price: 11_900_000 },
          { label: "شقة بغرفتي نوم", area: "129", price: 19_400_000 },
          { label: "دوبلكس", price: 27_000_000 },
          { label: "شقة بثلاث غرف نوم", area: "179", price: 29_300_000 },
        ] as Row[],
      },
      villas: {
        en: "VILLAS & TOWNHOUSES",
        rows: [
          { label: "ذا إميرالد كوليكشن — سعر الإطلاق", price: 26_000_000 },
          { label: "تاون هاوس ميدل", area: "215", price: 32_000_000 },
          { label: "تاون هاوس كورنر", area: "215", price: 38_000_000 },
          { label: "ڤيلا مستقلة", area: "250", price: 47_000_000 },
        ] as Row[],
      },
    },
  },
  plans: {
    title: "أنظمة السداد",
    items: [
      {
        title: "النظام الأول",
        bars: [{ w: "5%", c: "bg-walnut" }],
        steps: [
          { v: "5%", l: "مقدم التعاقد" },
          { v: "8", l: "سنوات بأقساط متساوية" },
        ],
        note: "يُطبَّق على أغلب الوحدات المتاحة حاليًا.",
      },
      {
        title: "النظام الثاني",
        bars: [
          { w: "5%", c: "bg-walnut" },
          { w: "7.5%", c: "bg-walnut-2" },
          { w: "10%", c: "bg-walnut/60" },
        ],
        steps: [
          { v: "5%", l: "مقدم التعاقد" },
          { v: "7.5%", l: "بعد ثلاثة أشهر" },
          { v: "10%", l: "عند الاستلام" },
          { v: "10", l: "سنوات للرصيد" },
        ],
        note: "يُرسَل جدول السداد التفصيلي لكل وحدة عند التواصل مع فريق المبيعات.",
      },
    ],
  },
  gallery: {
    note: "الصور تصورات معمارية لأغراض توضيحية.",
    shots: [
      { src: "/images/g1.jpg", alt: "الحدائق في زيد إيست" },
      { src: "/images/g2.jpg", alt: "مبنى سكني" },
      { src: "/images/g3.jpg", alt: "ڤيلا مستقلة" },
      { src: "/images/g4.jpg", alt: "النادي الرياضي" },
      { src: "/images/g5.jpg", alt: "ممشى بين المباني" },
      { src: "/images/g6.jpg", alt: "تاون هاوس" },
    ],
  },
  location: {
    title: "الموقع",
    body: "يقع زيد إيست في نهاية شارع التسعين الجنوبي عند تقاطعه مع الطريق الدائري الأوسط، بجوار لافيستا سيتي وفي مواجهة هايد بارك، وعلى بُعد دقائق من الجامعة الأمريكية وطريق السويس.",
    rows: [
      ["الموقع", "نهاية التسعين الجنوبي — التجمع الخامس"],
      ["مساحة المشروع", "حوالي 415 فدان"],
      ["المساحات الخضراء", "أكثر من 200 فدان"],
      ["النادي الرياضي", "50 فدان"],
      ["الجامعة الأمريكية", "5 دقائق"],
      ["حالة المشروع", "بدأ تسليم المراحل الأولى"],
    ],
  },
  developer: {
    title: "المطوّر",
    body: "أورا للتطوير العقاري، التابعة لرجل الأعمال المهندس نجيب ساويرس. من مشروعاتها ZED في الشيخ زايد والقاهرة الجديدة، وسولانا في نيو زايد، وسولانا إيست في التجمع الخامس، وسيلڤر ساندس في الساحل الشمالي.",
    alt: "زيد إيست — أورا للتطوير العقاري",
  },
  faqTitle: "الأسئلة الشائعة",
  faqs: [
    { q: "ما أسعار زيد إيست؟", a: "تبدأ أسعار الشقق من حوالي 11,900,000 جنيه، والتاون هاوس من حوالي 32,000,000 جنيه، والڤيلات المستقلة من حوالي 47,000,000 جنيه. الأسعار استرشادية ويُعتمد السعر النهائي عند التعاقد." },
    { q: "ما أنظمة السداد المتاحة؟", a: "مقدم 5% وتقسيط على 8 سنوات، أو 5% مقدم و7.5% بعد ثلاثة أشهر و10% عند الاستلام مع تقسيط الرصيد على 10 سنوات." },
    { q: "أين يقع المشروع؟", a: "في نهاية شارع التسعين الجنوبي عند تقاطعه مع الطريق الدائري الأوسط بالتجمع الخامس، على بُعد خمس دقائق من الجامعة الأمريكية." },
    { q: "ما مستوى التشطيب؟", a: "تُسلَّم الشقق كاملة التشطيب بالتكييفات، وتتوفر الڤيلات والتاون هاوس بمستويات تشطيب مختلفة حسب المرحلة." },
    { q: "ما هو ذا إميرالد كوليكشن؟", a: "آخر مجتمع للمنازل المستقلة داخل زيد إيست، يضم ڤيلات من 250 إلى 290 م² وتاون هاوس وفوربلكس ودوبلكس، بتسليم متوقع في 2029." },
    { q: "كيف يمكنني الحجز؟", a: "تواصل مع فريق المبيعات عبر واتساب أو الهاتف أو البريد الإلكتروني، وسنوافيك بالوحدات المتاحة والأسعار وجدول السداد التفصيلي." },
  ],
  contact: {
    kicker: "تواصل مع فريق المبيعات",
    body: "للاطلاع على الوحدات المتاحة والأسعار وجدول السداد التفصيلي، تواصل معنا عبر واتساب أو الهاتف أو البريد الإلكتروني.",
    pick: "مجال الاهتمام (اختياري)",
    interests: ["شقة بغرفة نوم", "شقة بغرفتي نوم", "شقة بثلاث غرف", "تاون هاوس", "ڤيلا مستقلة", "ذا إميرالد كوليكشن"],
    wa: "التواصل عبر واتساب",
    call: "اتصال هاتفي",
    mail: "البريد الإلكتروني",
  },
  waMessage: (i?: string | null) =>
    i
      ? `مرحبًا، أرغب في الاستفسار عن ${i} في مشروع زيد إيست من أورا، والاطلاع على الأسعار والوحدات المتاحة.`
      : "مرحبًا، أرغب في الاستفسار عن مشروع زيد إيست من أورا، والاطلاع على الأسعار والوحدات المتاحة.",
  mailSubject: (i?: string | null) => `استفسار — زيد إيست${i ? ` (${i})` : ""}`,
  mailBody: "الاسم:\nرقم الهاتف:\n",
  cookie: "نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وقياس أداء الحملات.",
  ok: "موافق",
  footer: (agency: string) =>
    `${agency} — وسيط عقاري مستقل، وهذا الموقع ليس الموقع الرسمي لأورا للتطوير العقاري. الأسعار ومساحات الوحدات وأنظمة السداد استرشادية وقابلة للتغيير.`,
  links: { about: "من نحن", privacy: "سياسة الخصوصية", disclaimer: "إخلاء المسؤولية" },
};

type Dict = typeof ar;

const en: Dict = {
  dir: "ltr" as unknown as "rtl",
  name: "ZED East",
  nameEn: "ZED EAST",
  meta: {
    title: "ZED East by ORA, New Cairo 2026 | Prices & Payment Plans",
    description:
      "ZED East by ORA Developers on South 90th Street, New Cairo: fully finished apartments from EGP 11.9M, townhouses, standalone villas and The Emerald Collection. 5% down, up to 10 years.",
  },
  nav: [
    { href: "#offers", label: "Homes" },
    { href: "#prices", label: "Prices" },
    { href: "#plans", label: "Payment plans" },
    { href: "#location", label: "Location" },
    { href: "#contact", label: "Contact" },
  ],
  whatsapp: "WhatsApp",
  call: "Call",
  mail: "Email",
  otherLang: "العربية",
  otherHref: "/",
  hero: {
    eyebrow: "ORA Developers · End of South 90th Street, New Cairo",
    title: "ZED East",
    sub: "A complete, low-density community in the heart of New Cairo, where green space covers more than half the land — with fully finished apartments, townhouses and standalone villas.",
    alt: "Green spaces and residential buildings in ZED East",
    facts: [
      { v: "415", u: "", l: "Feddans" },
      { v: "200+", u: "", l: "Feddans of green space" },
      { v: "50", u: "", l: "Feddan sports club" },
      { v: "5%", u: "", l: "Down payment", accent: true },
    ],
  },
  offers: {
    title: "Three offerings, one community",
    sub: "Choose what fits you: a fully finished apartment to live in or invest, or a standalone home for your family.",
    from: "From",
    unit: "million EGP",
    items: [
      {
        en: "APARTMENTS",
        title: "Apartments",
        body: "Fully finished apartments with ACs in low-rise buildings overlooking the greenery — from one bedroom up to duplexes.",
        tags: ["1 bedroom", "2 bedrooms", "3 bedrooms", "Duplex"],
        from: "11.9",
        img: "/images/apartments.jpg",
        alt: "Residential buildings in ZED East",
        cta: "Apartment prices",
        tab: "apartments",
      },
      {
        en: "VILLAS",
        title: "Townhouses & villas",
        body: "Middle and corner townhouses and standalone villas in the low-density neighbourhood, with generous ceiling heights and private gardens.",
        tags: ["Middle townhouse", "Corner townhouse", "Standalone villa"],
        from: "32",
        img: "/images/villas.jpg",
        alt: "ZED East villas",
        cta: "Villa prices",
        tab: "villas",
      },
      {
        en: "THE EMERALD COLLECTION",
        title: "The Emerald Collection",
        body: "The final single-family community in ZED East: 250 – 290 m² villas, townhouses, fourplexes and duplexes, for 2029 delivery.",
        tags: ["Villas 250 – 290 m²", "Fourplex", "Duplex"],
        from: "26",
        img: "/images/emerald.jpg",
        alt: "The Emerald Collection in ZED East",
        cta: "Launch prices",
        tab: "villas",
      },
    ],
  },
  prices: {
    title: "Prices",
    note: "Starting prices in EGP — indicative and subject to availability",
    tabs: { apartments: "Apartments", villas: "Villas" },
    sqm: "m²",
    boards: {
      apartments: {
        en: "APARTMENTS",
        rows: [
          { label: "1-bedroom apartment", area: "79", price: 11_900_000 },
          { label: "2-bedroom apartment", area: "129", price: 19_400_000 },
          { label: "Duplex", price: 27_000_000 },
          { label: "3-bedroom apartment", area: "179", price: 29_300_000 },
        ],
      },
      villas: {
        en: "VILLAS & TOWNHOUSES",
        rows: [
          { label: "The Emerald Collection — launch price", price: 26_000_000 },
          { label: "Middle townhouse", area: "215", price: 32_000_000 },
          { label: "Corner townhouse", area: "215", price: 38_000_000 },
          { label: "Standalone villa", area: "250", price: 47_000_000 },
        ],
      },
    },
  },
  plans: {
    title: "Payment plans",
    items: [
      {
        title: "Plan one",
        bars: [{ w: "5%", c: "bg-walnut" }],
        steps: [
          { v: "5%", l: "Down payment" },
          { v: "8", l: "Years, equal installments" },
        ],
        note: "Applies to most units currently available.",
      },
      {
        title: "Plan two",
        bars: [
          { w: "5%", c: "bg-walnut" },
          { w: "7.5%", c: "bg-walnut-2" },
          { w: "10%", c: "bg-walnut/60" },
        ],
        steps: [
          { v: "5%", l: "Down payment" },
          { v: "7.5%", l: "After 3 months" },
          { v: "10%", l: "On delivery" },
          { v: "10", l: "Years for the balance" },
        ],
        note: "A detailed payment schedule for each unit is shared when you contact our sales team.",
      },
    ],
  },
  gallery: {
    note: "Images are architectural renderings for illustration only.",
    shots: [
      { src: "/images/g1.jpg", alt: "Gardens in ZED East" },
      { src: "/images/g2.jpg", alt: "Residential building" },
      { src: "/images/g3.jpg", alt: "Standalone villa" },
      { src: "/images/g4.jpg", alt: "Sports club" },
      { src: "/images/g5.jpg", alt: "Walkway between buildings" },
      { src: "/images/g6.jpg", alt: "Townhouse" },
    ],
  },
  location: {
    title: "Location",
    body: "ZED East sits at the end of South 90th Street where it meets the Middle Ring Road — next to La Vista City and facing Hyde Park, minutes from the American University in Cairo and the Suez Road.",
    rows: [
      ["Location", "End of South 90th St — New Cairo"],
      ["Project area", "Approx. 415 feddans"],
      ["Green space", "200+ feddans"],
      ["Sports club", "50 feddans"],
      ["American University", "5 minutes"],
      ["Status", "First phases being handed over"],
    ],
  },
  developer: {
    title: "The developer",
    body: "ORA Developers, founded by Eng. Naguib Sawiris. Its projects include ZED in Sheikh Zayed and New Cairo, Solana in New Zayed, Solana East in New Cairo and Silversands on the North Coast.",
    alt: "ZED East — ORA Developers",
  },
  faqTitle: "Frequently asked questions",
  faqs: [
    { q: "What are ZED East prices?", a: "Apartments start from around EGP 11,900,000, townhouses from around EGP 32,000,000 and standalone villas from around EGP 47,000,000. Prices are indicative; the final price is confirmed at contract." },
    { q: "What payment plans are available?", a: "5% down with 8 years of installments, or 5% down, 7.5% after three months and 10% on delivery with the balance over 10 years." },
    { q: "Where is the project?", a: "At the end of South 90th Street where it meets the Middle Ring Road in New Cairo, five minutes from the American University in Cairo." },
    { q: "What is the finishing level?", a: "Apartments are delivered fully finished with ACs; villas and townhouses come in different finishing levels depending on the phase." },
    { q: "What is The Emerald Collection?", a: "The final single-family community in ZED East, with 250 – 290 m² villas, townhouses, fourplexes and duplexes, expected for 2029 delivery." },
    { q: "How do I book?", a: "Contact our sales team on WhatsApp, by phone or by email, and we'll share available units, prices and a detailed payment schedule." },
  ],
  contact: {
    kicker: "Contact our sales team",
    body: "For available units, prices and a detailed payment schedule, reach us on WhatsApp, by phone or by email.",
    pick: "Interested in (optional)",
    interests: ["1-bedroom apartment", "2-bedroom apartment", "3-bedroom apartment", "Townhouse", "Standalone villa", "The Emerald Collection"],
    wa: "Contact on WhatsApp",
    call: "Call us",
    mail: "Email",
  },
  waMessage: (i?: string | null) =>
    i
      ? `Hello, I'd like to ask about ${i} in ZED East by ORA, and see prices and available units.`
      : "Hello, I'd like to ask about ZED East by ORA, and see prices and available units.",
  mailSubject: (i?: string | null) => `Enquiry — ZED East${i ? ` (${i})` : ""}`,
  mailBody: "Name:\nPhone:\n",
  cookie: "We use cookies to improve your browsing experience and measure campaign performance.",
  ok: "Accept",
  footer: (agency: string) =>
    `${agency} — an independent real estate broker. This website is not the official website of ORA Developers. Prices, unit areas and payment plans are indicative and subject to change.`,
  links: { about: "About us", privacy: "Privacy Policy", disclaimer: "Disclaimer" },
};

export const C: Record<Lang, Dict> = { ar, en };
export const href = (lang: Lang, p = "/") => (lang === "en" ? (p === "/" ? "/en" : `/en${p}`) : p);
