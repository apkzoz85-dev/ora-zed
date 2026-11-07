// ─────────────────────────────────────────────────────────────
//  كل بيانات الصفحة من هنا. عدّل هنا فقط.
//  المصدر: ORA Availability — نوفمبر 2026
// ─────────────────────────────────────────────────────────────

export const site = {
  url: "https://orapropertiese.org/", // ← غيّرها بالدومين الفعلي
  agency: "Grandeur Spaces",
  project: "مشاريع أورا",
  projectEn: "ORA Projects",
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

export const WA_DEFAULT = "مهتم بمشاريع أورا للتطوير العقاري. برجاء إرسال الأسعار والمتاح.";

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
  {
    slug: "solana-east",
    name: "سولانا إيست",
    nameEn: "SOLANA EAST",
    area: "التجمع الخامس — شارع التسعين الجنوبي",
    intro:
      "مشروع أورا على شارع التسعين الجنوبي: شقق وڤيلات كاملة التشطيب، ومكاتب، وشقق فندقية مخدومة وعيادات ميديكا في سولانا إيست لين.",
    image: "/images/res-garden.webp",
    facts: ["على التسعين الجنوبي مباشرة", "شقق وڤيلات كاملة التشطيب", "مكاتب وعيادات"],
  },
  {
    slug: "zed-west",
    name: "زد ويست",
    nameEn: "ZED WEST",
    area: "الشيخ زايد",
    intro:
      "مشروع ZED في الشيخ زايد. المتاح: شقق Park Side Residence (PSR) كاملة التشطيب بالتكييفات والمطبخ، بدون مقدم وتقسيط 10 سنين.",
    image: "",
    facts: ["كامل التشطيب + تكييفات + مطبخ", "0% مقدم", "10 سنين تقسيط"],
  },
  {
    slug: "solana-west",
    name: "سولانا ويست",
    nameEn: "SOLANA WEST",
    area: "نيو زايد",
    intro:
      "سولانا ويست في نيو زايد: شقق وتاون هاوس وتوين هاوس وڤيلات مستقلة بتشطيب Core & Shell، بدون مقدم وتقسيط 10 سنين.",
    image: "",
    facts: ["ڤيلات تبدأ من 22.5 مليون", "0% مقدم", "10 سنين تقسيط"],
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

  // ───── SOLANA EAST ─────
  {
    slug: "solana-east",
    project: "solana-east",
    name: "سولانا إيست — شقق وڤيلات ومكاتب",
    nameEn: "SOLANA EAST",
    eyebrow: "Solana East · Residential",
    intro:
      "شقق كاملة التشطيب بالتكييفات، وتاون هاوس وتوين هاوس وڤيلات مستقلة كاملة التشطيب، ومكاتب Core & Shell على التسعين الجنوبي.",
    scarcity: "5% + 5% وتقسيط 8 سنين",
    eoi: "5%",
    dp: 10,
    dpLabel: "5% مقدم + 5% بعد 3 شهور",
    years: 8,
    plan: "5% + 5% بعد 3 شهور — 8 سنين",
    terms: [
      ["المقدم", "5%"],
      ["بعد 3 شهور", "5%"],
      ["التقسيط", "8 سنين متساوية"],
      ["التشطيب", "كامل"],
    ],
    image: "/images/res-building-cd.webp",
    highlights: ["شقق كاملة التشطيب بالتكييفات", "ڤيلات كاملة التشطيب", "مكاتب Core & Shell", "تبدأ من 13.5 مليون جنيه"],
    groups: [
      {
        title: "شقق",
        units: [
          { type: "شقة غرفة نوم", spec: "سولانا إيست", price: 13_500_000, image: "/images/res-building-a.webp", finish: FF_AC },
          { type: "شقة غرفتين", spec: "سولانا إيست", price: 20_000_000, image: "/images/res-building-cd.webp", finish: FF_AC },
          { type: "شقة 3 غرف", spec: "سولانا إيست", price: 28_000_000, image: "/images/res-building-lm.webp", finish: FF_AC },
        ],
      },
      {
        title: "ڤيلات",
        units: [
          { type: "تاون هاوس", spec: "سولانا إيست", price: 44_000_000, image: "" },
          { type: "توين هاوس", spec: "سولانا إيست", price: 54_000_000, image: "" },
          { type: "ڤيلا مستقلة", spec: "سولانا إيست", price: 119_000_000, image: "" },
        ],
      },
      {
        title: "مكاتب",
        units: [{ type: "مكتب إداري", spec: "58 م²", price: 15_000_000, image: "", finish: "Core & Shell" }],
      },
    ],
  },
  {
    slug: "serviced",
    project: "solana-east",
    name: "سولانا إيست لين — شقق فندقية مخدومة",
    nameEn: "SOLANA EAST LANE · SERVICED",
    eyebrow: "Solana East Lane",
    intro:
      "شقق فندقية بإدارة وخدمات أورا، في مباني G+3.5 وسط لاندسكيب على التسعين الجنوبي. غرفة وغرفتين و3 غرف — للسكن أو للإيجار.",
    scarcity: "طرح جديد — المتاح محدود",
    eoi: "5%",
    dp: 5,
    dpLabel: "جدية حجز 5%",
    years: 9,
    plan: "تقسيط حتى 9 سنين",
    terms: [
      ["جدية الحجز", "5%"],
      ["التقسيط", "حتى 9 سنين"],
      ["المبنى", "G+3.5"],
      ["التشطيب", "مخدومة بالكامل"],
    ],
    image: "/images/res-walkway.webp",
    highlights: ["إدارة وخدمات فندقية بالكامل", "مباني G+3.5 وسط لاندسكيب", "تبدأ من 8.9 مليون جنيه"],
    groups: [
      {
        title: "شقق فندقية",
        units: [
          { type: "شقة فندقية", spec: "غرفة نوم واحدة", price: 8_900_000, image: "/images/res-building-a.webp" },
          { type: "شقة فندقية", spec: "غرفتين نوم", price: 13_900_000, image: "/images/res-building-cd.webp" },
          { type: "شقة فندقية", spec: "3 غرف نوم", price: 18_000_000, image: "/images/res-building-lm.webp" },
        ],
      },
    ],
  },
  {
    slug: "medica",
    project: "solana-east",
    name: "ميديكا — عيادات",
    nameEn: "MEDICA CLINICS",
    eyebrow: "Solana East Lane · Medical",
    intro:
      "المبنى الطبي الوحيد في سولانا إيست لين على واجهة التسعين. عيادات من 57 لـ 155 م² متشطبة بالكامل بالحمامات، في مبنى G+3 بلوبي واستقبال مشترك.",
    scarcity: "مبنى عيادات واحد فقط",
    eoi: "5%",
    dp: 10,
    dpLabel: "5% مقدم + 5% بعد 3 شهور",
    years: 8.5,
    plan: "8.5 سنة أقساط متساوية",
    terms: [
      ["المقدم", "5%"],
      ["بعد 3 شهور", "5%"],
      ["التقسيط", "8.5 سنة"],
      ["التشطيب", "كامل بالحمامات"],
    ],
    image: "/images/medica-plaza.webp",
    highlights: ["متشطبة بالكامل بالحمامات", "لوبي وريسبشن مشترك", "تبدأ من 14 مليون جنيه"],
    groups: [
      {
        title: "عيادات",
        units: [
          { type: "عيادة", spec: "57 – 65 م²", price: 14_000_000, image: "/images/medica-clinic.webp" },
          { type: "عيادة", spec: "73 م²", price: 18_000_000, image: "/images/medica-office.webp" },
          { type: "عيادة", spec: "83 م²", price: 20_000_000, image: "/images/medica-reception.webp" },
          { type: "عيادة", spec: "93 م²", price: 23_000_000, image: "/images/medica-facade.webp" },
          { type: "عيادة", spec: "135 – 155 م²", price: 36_000_000, image: "/images/medica-street.webp" },
        ],
      },
    ],
  },

  // ───── ZED WEST ─────
  {
    slug: "zed-west-psr",
    project: "zed-west",
    name: "زد ويست — بارك سايد ريزيدنس",
    nameEn: "ZED WEST · PARK SIDE RESIDENCE",
    eyebrow: "ZED West · PSR",
    intro: "شقق Park Side Residence في زد ويست بالشيخ زايد، كاملة التشطيب بالتكييفات والمطبخ، من ستوديو لـ 3 غرف.",
    scarcity: "بدون مقدم — تقسيط 10 سنين",
    ...PLAN_0_10,
    terms: [
      ["المقدم", "0%"],
      ["التقسيط", "10 سنين"],
      ["التشطيب", "كامل + تكييفات + مطبخ"],
      ["المدينة", "الشيخ زايد"],
    ],
    image: "",
    highlights: ["0% مقدم وتقسيط 10 سنين", "تكييفات ومطبخ", "تبدأ من 10 مليون جنيه"],
    groups: [
      {
        title: "شقق",
        units: [
          { type: "ستوديو", spec: "PSR", price: 10_000_000, image: "" },
          { type: "شقة غرفة نوم", spec: "PSR", price: 11_100_000, image: "" },
          { type: "شقة غرفتين", spec: "PSR", price: 14_000_000, image: "" },
          { type: "شقة 3 غرف", spec: "PSR", price: 21_000_000, image: "" },
        ],
      },
    ],
  },

  // ───── SOLANA WEST ─────
  {
    slug: "solana-west",
    project: "solana-west",
    name: "سولانا ويست — شقق وڤيلات",
    nameEn: "SOLANA WEST",
    eyebrow: "Solana West · New Zayed",
    intro: "شقق وتاون هاوس وتوين هاوس وڤيلات مستقلة في سولانا ويست بنيو زايد، بتشطيب Core & Shell.",
    scarcity: "بدون مقدم — تقسيط 10 سنين",
    ...PLAN_0_10,
    terms: [
      ["المقدم", "0%"],
      ["التقسيط", "10 سنين"],
      ["التشطيب", "Core & Shell"],
      ["المدينة", "نيو زايد"],
    ],
    image: "",
    highlights: ["0% مقدم وتقسيط 10 سنين", "ڤيلات مستقلة من 31.5 مليون", "تبدأ من 11 مليون جنيه"],
    groups: [
      {
        title: "شقق",
        units: [
          { type: "شقة غرفتين", spec: "88 م²", price: 11_000_000, image: "" },
          { type: "شقة 3 غرف", spec: "131 م²", price: 14_100_000, image: "" },
        ],
      },
      {
        title: "ڤيلات",
        units: [
          { type: "تاون هاوس", spec: "172 م²", price: 22_500_000, image: "" },
          { type: "توين هاوس", spec: "184 م²", price: 28_000_000, image: "" },
          { type: "ڤيلا مستقلة", spec: "195 م²", price: 31_500_000, image: "" },
        ],
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
  headline: "أربعة مشاريع في شرق وغرب القاهرة",
  body:
    "مشاريع أورا موزعة بين القاهرة الجديدة غربًا وشرقًا: زد إيست وسولانا إيست في التجمع الخامس على محور التسعين الجنوبي، وزد ويست في الشيخ زايد، وسولانا ويست في نيو زايد.",
  points: [
    { name: "زد إيست", detail: "نهاية التسعين الجنوبي — التجمع الخامس" },
    { name: "سولانا إيست", detail: "شارع التسعين الجنوبي — التجمع الخامس" },
    { name: "زد ويست", detail: "الشيخ زايد" },
    { name: "سولانا ويست", detail: "نيو زايد" },
    { name: "المطور", detail: "أورا — م. نجيب ساويرس" },
  ],
};

export const infrastructure = [
  { title: "0% مقدم", body: "في كلوب سايد ريزيدنس بزد إيست، وPSR بزد ويست، وسولانا ويست." },
  { title: "حتى 10 سنين", body: "تقسيط حتى 10 سنين في أغلب الطروحات، و8 سنين متساوية في سولانا إيست." },
  { title: "كامل التشطيب", body: "شقق كاملة بالتكييفات في زد إيست وسولانا إيست، وبالمطبخ كمان في زد ويست." },
  { title: "من 8.9 مليون", body: "ستوديو مخدوم في زد إيست، وحتى ڤيلات مستقلة في سولانا إيست وإميرالد." },
];

export const investment = [
  {
    stat: "0%",
    unit: "مقدم",
    title: "دخول بدون مقدم",
    body: "شقق مخدومة في زد إيست، وشقق PSR في زد ويست، ووحدات سولانا ويست — كلها بدون مقدم وعلى 10 سنين.",
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
    body: "آخر مجتمع ڤيلات يُطرح في زد إيست — بعده مفيش منازل مستقلة جديدة من المطور في المشروع.",
  },
  {
    stat: "10",
    unit: "سنين",
    title: "تقسيط طويل",
    body: "أغلب الطروحات على 10 سنين، وده بيخلّي القسط الشهري أقل بكتير من مشاريع الـ 6 و7 سنين.",
  },
];

export const amenities = [
  { title: "نادي ZED الرياضي — 40 فدان", body: "ملاعب ومجمع مضارب وحمامات سباحة وكلوب هاوس بكافيهات، في قلب زد إيست." },
  { title: "مسارات بدون عربيات", body: "مسارات جري ومشي ودراجات حول النادي ومناطق المشروع." },
  { title: "بحيرة The Emerald", body: "منازل الإميرالد حول بحيرة ومساحات خضراء في ركن هادي من المشروع." },
  { title: "ZED Strip", body: "شريط تجاري وإداري بمطاعم وكافيهات ومحلات على مدخل زد إيست." },
  { title: "شقق مخدومة", body: "كلوب سايد ريزيدنس وسولانا إيست لين بإدارة وخدمات أورا — للسكن أو للإيجار." },
  { title: "عيادات ميديكا", body: "مبنى عيادات واحد في سولانا إيست لين على واجهة التسعين الجنوبي." },
];

// ─────────────────────────────  الأسئلة  ─────────────────────────────

export const faqs = [
  {
    q: "إيه المشاريع المتاحة من أورا؟",
    a: "زد إيست (كلوب سايد ريزيدنس، ذا إميرالد كوليكشن، زد ستريب)، وسولانا إيست (شقق وڤيلات ومكاتب، وسولانا إيست لين)، وزد ويست (Park Side Residence)، وسولانا ويست.",
  },
  {
    q: "فين الطروحات اللي من غير مقدم؟",
    a: "كلوب سايد ريزيدنس في زد إيست، وPark Side Residence في زد ويست، وسولانا ويست — كلها 0% مقدم وتقسيط 10 سنين.",
  },
  {
    q: "أسعار زد إيست بتبدأ من كام؟",
    a: "ستوديو مخدوم من 8.9 مليون، ودوبلكس الإميرالد من 26.3 مليون، وتاون هاوس من 38.2 مليون، وڤيلا مستقلة من 57.8 مليون، ووحدة إدارية في زد ستريب من 18.5 مليون.",
  },
  {
    q: "إيه نظام السداد في سولانا إيست؟",
    a: "5% مقدم و5% بعد 3 شهور، والباقي على 8 سنين أقساط متساوية. الشقق تبدأ من 13.5 مليون والڤيلات من 44 مليون.",
  },
  {
    q: "الوحدات بتستلم بأي تشطيب؟",
    a: "شقق زد إيست وسولانا إيست كاملة بالتكييفات، وزد ويست كاملة بالتكييفات والمطبخ، والإميرالد وڤيلات سولانا إيست كاملة التشطيب، وسولانا ويست ومكاتب سولانا إيست Core & Shell.",
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
