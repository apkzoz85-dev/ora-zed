// ─────────────────────────────────────────────────────────────
//  كل بيانات الصفحة من هنا. عدّل هنا فقط.
//  المصدر: ORA Availability — نوفمبر 2026
// ─────────────────────────────────────────────────────────────

export const site = {
  url: "https://orapropertiese.org/", // ← غيّرها بالدومين الفعلي
  agency: "Grandeur Spaces",
  project: "زد إيست",
  projectEn: "ZED East",
  developer: "أورا للتطوير العقاري",
  developerEn: "ORA Developers",

  phone: "01030083122",
  phoneIntl: "+201030083122",
  phoneDisplay: "01030083122",
  whatsapp: "201030083122",
  email: "leads@grandeur-spaces.com",

  // ← ضع مفتاح Web3Forms هنا قبل النشر
  web3forms: "f8edb7d0-abd8-49c6-bf1c-f71073b981dc",

  // ← Google Ads: ضع الـ tag و labels قبل النشر
  gtag: "",
  conv: {
    form: "",
    whatsapp: "",
    call: "",
  },

  // ← رابط وكالة One Click (يظهر في الفوتر)
  agencyCredit: { name: "One Click", url: "https://example.com" },
} as const;

export const WA_DEFAULT = "مهتم بزد إيست من أورا. برجاء إرسال الأسعار والمتاح.";

export const waLink = (msg: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

// ─────────────────────────────  المشاريع  ─────────────────────────────

export type Project = {
  slug: string;
  name: string;
  nameEn: string;
  area: string;
  intro: string;
  image: string; // "" = placeholder
  facts: string[];
};

export const projects: Project[] = [
  {
    slug: "zed-east",
    name: "زد إيست",
    nameEn: "ZED EAST",
    area: "التجمع الخامس — نهاية التسعين الجنوبي",
    intro:
      "مجتمع متكامل منخفض الكثافة في القاهرة الجديدة، قلبه نادي ZED الرياضي على 40 فدان. المتاح حاليًا: شقق Club Side Residence المخدومة، ومنازل The Emerald Collection، ووحدات ZED Strip الإدارية.",
    image: "/images/ze-hero.webp",
    facts: ["نادي رياضي 40 فدان", "شقق مخدومة بدون مقدم", "آخر مجتمع ڤيلات — The Emerald"],
  },
];

// ─────────────────────────────  الطروحات  ─────────────────────────────

export type Unit = {
  type: string;
  spec: string;
  price: number;
  image: string; // "" = placeholder
  finish?: string; // يغطي على تشطيب الطرح
};

export type Product = {
  slug: string;
  project: string; // project slug
  name: string;
  nameEn: string;
  eyebrow: string;
  intro: string;
  scarcity: string;
  eoi: string;
  dp: number; // الحد الأدنى للمقدم في الحاسبة
  dpLabel: string;
  years: number;
  plan: string;
  terms: [string, string][];
  image: string;
  highlights: string[];
  groups: { title: string; note?: string; units: Unit[] }[];
};

const FF_AC = "كامل بالتكييفات";
const PLAN_55_10: Pick<Product, "eoi" | "dp" | "dpLabel" | "years" | "plan"> = {
  eoi: "5%",
  dp: 10,
  dpLabel: "5% مقدم + 5% بعد 3 شهور",
  years: 10,
  plan: "5% + 5% بعد 3 شهور — 10 سنين",
};
const PLAN_0_10: Pick<Product, "eoi" | "dp" | "dpLabel" | "years" | "plan"> = {
  eoi: "0%",
  dp: 0,
  dpLabel: "بدون مقدم",
  years: 10,
  plan: "0% مقدم — 10 سنين",
};

export const products: Product[] = [
  // ───── ZED EAST ─────
  {
    slug: "zed-csr",
    project: "zed-east",
    name: "كلوب سايد ريزيدنس — شقق مخدومة",
    nameEn: "CLUB SIDE RESIDENCE",
    eyebrow: "ZED East · Serviced",
    intro:
      "شقق مخدومة كاملة التشطيب بالتكييفات، تطل على نادي ZED الرياضي. من ستوديو لـ 3 غرف — للسكن أو للإيجار.",
    scarcity: "بدون مقدم — تقسيط 10 سنين",
    ...PLAN_0_10,
    terms: [
      ["المقدم", "0%"],
      ["التقسيط", "10 سنين"],
      ["التشطيب", FF_AC],
      ["النوع", "شقق مخدومة"],
    ],
    image: "/images/ze-csr-1.webp",
    highlights: ["0% مقدم وتقسيط 10 سنين", "كاملة التشطيب بالتكييفات", "إطلالة على نادي ZED الرياضي", "تبدأ من 8.9 مليون جنيه"],
    groups: [
      {
        title: "شقق مخدومة",
        units: [
          { type: "ستوديو", spec: "65 م²", price: 8_900_000, image: "/images/ze-csr-2.webp" },
          { type: "شقة غرفة نوم", spec: "86 م²", price: 11_700_000, image: "/images/ze-csr-1.webp" },
          { type: "شقة غرفتين", spec: "115 م²", price: 16_100_000, image: "/images/ze-csr-3.webp" },
          { type: "شقة 3 غرف", spec: "140 م²", price: 23_600_000, image: "/images/ze-csr-4.webp" },
        ],
      },
    ],
  },
  {
    slug: "zed-emerald",
    project: "zed-east",
    name: "ذا إميرالد كوليكشن",
    nameEn: "THE EMERALD COLLECTION",
    eyebrow: "ZED East · Final Villas",
    intro:
      "آخر مجتمع منازل مستقلة يُطرح في زد إيست، حول بحيرة ومساحات خضراء. دوبلكس وفوربلكس وتاون هاوس وڤيلات مستقلة كاملة التشطيب.",
    scarcity: "آخر طرح ڤيلات في زد إيست",
    ...PLAN_55_10,
    terms: [
      ["المقدم", "5%"],
      ["بعد 3 شهور", "5%"],
      ["التقسيط", "10 سنين"],
      ["التشطيب", "كامل"],
    ],
    image: "/images/ze-emerald.webp",
    highlights: ["آخر مجتمع ڤيلات في زد إيست", "حول بحيرة ومساحات خضراء", "كاملة التشطيب", "تبدأ من 26.3 مليون جنيه"],
    groups: [
      {
        title: "منازل",
        units: [
          { type: "دوبلكس", spec: "215 م²", price: 26_300_000, image: "/images/ze-duplex.webp" },
          { type: "فوربلكس", spec: "174 م² + جاردن 300 م²", price: 32_900_000, image: "/images/ze-fourplex.webp" },
          { type: "تاون هاوس", spec: "215 م²", price: 38_200_000, image: "/images/ze-townhouse.webp" },
          { type: "ڤيلا مستقلة", spec: "253 م²", price: 57_800_000, image: "/images/ze-villa.webp" },
        ],
      },
    ],
  },
  {
    slug: "zed-strip",
    project: "zed-east",
    name: "زد ستريب — وحدات إدارية",
    nameEn: "ZED STRIP",
    eyebrow: "ZED East · Admin",
    intro: "وحدات إدارية في ZED Strip، الشريط التجاري والإداري لزد إيست بمطاعمه ومحلاته.",
    scarcity: "طرح إداري محدود",
    ...PLAN_55_10,
    terms: [
      ["المقدم", "5%"],
      ["بعد 3 شهور", "5%"],
      ["التقسيط", "10 سنين"],
      ["النوع", "إداري"],
    ],
    image: "/images/ze-strip.webp",
    highlights: ["داخل الشريط التجاري لزد إيست", "5% + 5% وتقسيط 10 سنين", "تبدأ من 18.5 مليون جنيه"],
    groups: [
      {
        title: "إداري",
        units: [{ type: "وحدة إدارية", spec: "من 86 م²", price: 18_500_000, image: "/images/ze-strip.webp" }],
      },
    ],
  },
];

export const projectOf = (slug: string) => projects.find((p) => p.slug === slug)!;
export const productsOf = (project: string) => products.filter((p) => p.project === project);

export const allUnits = products.flatMap((p) =>
  p.groups.flatMap((g) => g.units.map((u) => ({ ...u, product: p.name, project: p.project })))
);

export const minPrice = Math.min(...allUnits.map((u) => u.price));
export const minPriceOf = (project: string) =>
  Math.min(...allUnits.filter((u) => u.project === project).map((u) => u.price));

// ─────────────────────────────  الموقع  ─────────────────────────────

export const location = {
  headline: "نهاية التسعين الجنوبي — التجمع الخامس",
  body:
    "زد إيست في التجمع الخامس بالقاهرة الجديدة، عند نهاية شارع التسعين الجنوبي وتقاطعه مع الطريق الدائري الأوسط، بجوار لافيستا سيتي وفي مواجهة هايد بارك، وعلى طريق العاصمة الإدارية.",
  points: [
    { name: "الموقع", detail: "نهاية التسعين الجنوبي — التجمع الخامس" },
    { name: "شارع التسعين", detail: "20 دقيقة" },
    { name: "العاصمة الإدارية", detail: "20 دقيقة" },
    { name: "وسط القاهرة", detail: "40 دقيقة" },
    { name: "نادي ZED الرياضي", detail: "40 فدان داخل المشروع" },
    { name: "المطور", detail: "أورا — م. نجيب ساويرس" },
  ],
};


export const infrastructure = [
  { title: "0% مقدم", body: "شقق كلوب سايد ريزيدنس المخدومة بدون مقدم وتقسيط 10 سنين." },
  { title: "10 سنين", body: "تقسيط 10 سنين في كل الطروحات المتاحة في زد إيست." },
  { title: "كامل التشطيب", body: "الشقق كاملة بالتكييفات، ومنازل الإميرالد كاملة التشطيب." },
  { title: "40 فدان", body: "نادي ZED الرياضي في قلب المشروع بملاعبه وحمامات السباحة والكلوب هاوس." },
];


export const investment = [
  {
    stat: "0%",
    unit: "مقدم",
    title: "دخول بدون مقدم",
    body: "شقق كلوب سايد ريزيدنس المخدومة — من ستوديو 65 م² لـ 3 غرف — بدون مقدم وعلى 10 سنين.",
  },
  {
    stat: "40",
    unit: "فدان",
    title: "نادي ZED الرياضي",
    body: "قلب زد إيست: ملاعب ومجمع مضارب وحمامات سباحة وكلوب هاوس، ومسارات جري ودراجات بعيد عن العربيات.",
  },
  {
    stat: "1",
    unit: "آخر طرح",
    title: "ذا إميرالد كوليكشن",
    body: "آخر مجتمع منازل مستقلة يُطرح في زد إيست — بعده مفيش ڤيلات جديدة من المطور في المشروع.",
  },
  {
    stat: "10",
    unit: "سنين",
    title: "تقسيط طويل",
    body: "كل الطروحات على 10 سنين، وده بيخلّي القسط أقل بكتير من مشاريع الـ 6 و7 سنين.",
  },
];


export const amenities = [
  { title: "نادي ZED الرياضي — 40 فدان", body: "ملاعب ومجمع مضارب وحمامات سباحة وكلوب هاوس بكافيهات، في قلب المشروع." },
  { title: "مسارات بدون عربيات", body: "مسارات جري ومشي ودراجات حول النادي ومناطق المشروع." },
  { title: "بحيرة The Emerald", body: "منازل الإميرالد حول بحيرة ومساحات خضراء في ركن هادي من المشروع." },
  { title: "ZED Strip", body: "شريط تجاري وإداري بمطاعم وكافيهات ومحلات على مدخل زد إيست." },
  { title: "شقق مخدومة", body: "كلوب سايد ريزيدنس بإدارة وخدمات أورا — للسكن أو للإيجار." },
  { title: "مساحات خضراء ممتدة", body: "مبدأ زد إيست «المساحة رفاهية»: مسافات واسعة بين المباني وخصوصية وهدوء." },
];


// ─────────────────────────────  الأسئلة  ─────────────────────────────

export const faqs = [
  {
    q: "إيه المتاح في زد إيست دلوقتي؟",
    a: "شقق كلوب سايد ريزيدنس المخدومة، ومنازل ذا إميرالد كوليكشن (دوبلكس وفوربلكس وتاون هاوس وڤيلات)، ووحدات إدارية في زد ستريب.",
  },
  {
    q: "أسعار زد إيست بتبدأ من كام؟",
    a: "ستوديو مخدوم من 8.9 مليون، ودوبلكس الإميرالد من 26.3 مليون، وتاون هاوس من 38.2 مليون، وڤيلا مستقلة من 57.8 مليون، ووحدة إدارية من 18.5 مليون.",
  },
  {
    q: "إيه نظام السداد؟",
    a: "كلوب سايد ريزيدنس بدون مقدم وعلى 10 سنين. الإميرالد وزد ستريب 5% مقدم و5% بعد 3 شهور والباقي على 10 سنين.",
  },
  {
    q: "الوحدات بتستلم بأي تشطيب؟",
    a: "شقق كلوب سايد ريزيدنس كاملة التشطيب بالتكييفات، ومنازل ذا إميرالد كاملة التشطيب.",
  },
  {
    q: "إيه هو ذا إميرالد كوليكشن؟",
    a: "آخر مجتمع منازل مستقلة يُطرح في زد إيست، حول بحيرة ومساحات خضراء، ويضم دوبلكس وفوربلكس وتاون هاوس وڤيلات مستقلة.",
  },
  {
    q: "مين المطور؟",
    a: "أورا للتطوير العقاري، المملوكة لرجل الأعمال م. نجيب ساويرس.",
  },
  {
    q: "أحجز إزاي؟",
    a: "سجل بياناتك أو ابعتلنا واتساب، وهنبعتلك المتاح والأسعار وجدول السداد الرسمي من أورا.",
  },
];


export const fmt = (n: number) => n.toLocaleString("en-US");
