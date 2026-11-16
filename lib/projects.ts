// ─────────────────────────────────────────────────────────────
//  باقي مشاريع أورا على نفس الدومين — كل مشروع له مسار خاص:
//    /zed-west      زد ويست (ZED الشيخ زايد)
//    /solana-west   سولانا ويست (سولانا الشيخ زايد / نيو زايد)
//    /solana-east   سولانا إيست (سولانا التجمع)
//  الأسعار: ORA Availability — نوفمبر 2026. عدّل أي سعر هنا وسيظهر
//  في الكروت والحاسبة والأسئلة الشائعة تلقائيًا (عربي + إنجليزي).
// ─────────────────────────────────────────────────────────────

import { BASE, type Dict, type Lang, type Offer } from "./content";
import { fmt } from "./site";

type B = { ar: string; en: string };
type BL = { ar: string[]; en: string[] };
const b = (ar: string, en: string): B => ({ ar, en });

type UnitSpec = { type: B; spec: B; price: number; image: string; tags: BL };
type OfferSpec = {
  slug: string;
  featured?: boolean;
  label: string;
  name: B;
  short: B;
  badge?: B;
  intro: B;
  plan: B;
  dp: number;
  years: number;
  units: UnitSpec[];
};

type Spec = {
  key: string;
  brand: string;
  name: B; // "زد ويست"
  full: B; // "زد ويست الشيخ زايد"
  wordmark: [string, string];
  featureId: string;
  mapQuery: string;
  place: { name: string; description: string; locality: string };
  media: Dict["media"];
  meta: { title: B; description: B; keywords: BL };
  hero: { pill: B; h1b: B; body: B; down: string; years: B; alt: B };
  intro: { title: B; body: B; stats: [string, B][]; badge: string; alt: B };
  feature: {
    nav: B;
    eyebrow: B;
    latin: string;
    title: B;
    body: B;
    facts: [string, B][];
    points: BL;
    servicesTitle: B;
    services: BL;
    cta: B;
    waSpec: string;
  };
  offers: OfferSpec[];
  paymentTitle: B;
  lifestyle: { title: B; sub: B; tiles: [string, B, B][]; amenities: BL };
  location: { title: B; body: B; distances: [B, B][]; near: BL };
  magnet: { title: B; sub: B };
  gallery: [string, B][];
  developerP2: B;
  /** أسئلة إضافية خاصة بالمشروع (تُضاف قبل الأسئلة المولّدة من البيانات) */
  faqExtra: { q: B; a: B }[];
  finalSub: B;
};

const P5_8 = b("مقدم 5%، ثم 5% بعد 3 أشهر، والباقي على 8 سنوات متساوية", "5% down, 5% after 3 months, balance over 8 equal years");
const NO_DP = b("بدون مقدم، وتقسيط على 10 سنوات", "0% down payment, 10 years to pay");
const img = (n: string) => `/images/${n}.webp`;

/* ═════════════════════════ ZED WEST ═════════════════════════ */
const zedWest: Spec = {
  key: "zed-west",
  brand: "ZED West",
  name: b("زد ويست", "ZED West"),
  full: b("زد ويست الشيخ زايد", "ZED West Sheikh Zayed"),
  wordmark: ["ZED WEST", "BY ORA · SHEIKH ZAYED"],
  featureId: "park-side",
  mapQuery: "ZED Sheikh Zayed ORA",
  place: {
    name: "ZED West (ZED El Sheikh Zayed) by ORA",
    description:
      "ORA Developers community on 165 feddans in the heart of Sheikh Zayed around ZED Park: Park Side Residence apartments, fully finished with ACs and kitchen, 0% down over 10 years.",
    locality: "Al Nozha Rd., Sheikh Zayed, Giza",
  },
  media: {
    og: "/images/og-zw.jpg",
    hero: img("zw-hero"),
    heroM: img("zw-hero-m"),
    intro: img("zw-card"),
    feature: [img("zw-about"), img("zw-g2"), img("zw-u-living")],
    brochureTile: img("zw-g4"),
    endTile: img("zw-g1"),
    mid: img("zw-g4"),
    magnet: img("zw-g6"),
    developer: img("zw-g3"),
    final: img("zw-g4"),
  },
  meta: {
    title: b(
      "زد ويست الشيخ زايد من أورا | ZED الشيخ زايد — من 10 مليون بدون مقدم وتقسيط 10 سنوات",
      "ZED West Sheikh Zayed by ORA | From EGP 10M, 0% Down, 10 Years to Pay",
    ),
    description: b(
      "زد ويست (ZED الشيخ زايد) من أورا: 165 فدان حول ZED Park في قلب الشيخ زايد. شقق بارك سايد ريزيدنس كاملة التشطيب بالتكييفات والمطبخ من ستوديو حتى 3 غرف، تبدأ من 10,000,000 جنيه بدون مقدم وتقسيط 10 سنوات.",
      "ZED West (ZED El Sheikh Zayed) by ORA: 165 feddans around ZED Park in the heart of Sheikh Zayed. Park Side Residence apartments, fully finished with ACs and kitchen, studio to 3 bedrooms, from EGP 10,000,000 with 0% down over 10 years.",
    ),
    keywords: {
      ar: ["زد ويست", "زد الشيخ زايد", "زيد الشيخ زايد", "زد ويست الشيخ زايد", "كمبوند زد الشيخ زايد", "اسعار زد الشيخ زايد", "زد اورا الشيخ زايد", "بارك سايد ريزيدنس", "ZED Park", "شقق الشيخ زايد بدون مقدم", "أورا للتطوير العقاري", "ZED West", "ZED Sheikh Zayed"],
      en: ["ZED West", "ZED Sheikh Zayed", "ZED El Sheikh Zayed", "ZED West ORA", "ZED West prices", "Park Side Residence", "ZED Park", "apartments Sheikh Zayed", "ORA Developers"],
    },
  },
  hero: {
    pill: b("زد ويست · قلب الشيخ زايد", "ZED West · Heart of Sheikh Zayed"),
    h1b: b("الشيخ زايد", "Sheikh Zayed"),
    body: b(
      "مجتمع أورا على 165 فدان حول ZED Park في قلب الشيخ زايد. شقق بارك سايد ريزيدنس كاملة التشطيب بالتكييفات والمطبخ، بدون مقدم وعلى 10 سنوات.",
      "ORA's community on 165 feddans around ZED Park in the heart of Sheikh Zayed. Park Side Residence apartments, fully finished with ACs and kitchen, 0% down over 10 years.",
    ),
    down: "0%",
    years: b("سنوات", "years"),
    alt: b("زد ويست الشيخ زايد — منظر علوي لـ ZED Park", "ZED West Sheikh Zayed — aerial view of ZED Park"),
  },
  intro: {
    title: b("كمبوند زد ويست الشيخ زايد من أورا", "ZED West Sheikh Zayed by ORA"),
    body: b(
      "زد ويست (ZED الشيخ زايد) مشروع أورا في قلب مدينة الشيخ زايد على 165 فدان، يحيط بحديقة ZED Park، بواجهة على طريق النزهة وبالقرب من محور 26 يوليو وطريق الإسكندرية الصحراوي. ZED Park أكبر مساحة خضراء في المنطقة، وتضم مرافق رياضية للمحترفين والهواة ومسارات جري ولياقة ويوجا وسط الخضرة.",
      "ZED West (ZED El Sheikh Zayed) is ORA's project in the heart of Sheikh Zayed on 165 feddans surrounding ZED Park, visible from Al Nozha Road and close to the 26th of July Corridor and the Alexandria Desert Road. ZED Park is the largest green space in the area, with sports facilities for professionals and amateurs and jogging, fitness and yoga within the greenery.",
    ),
    stats: [
      ["165", b("فدان", "feddans")],
      ["0%", b("مقدم", "down payment")],
      ["10", b("سنوات تقسيط", "years to pay")],
    ],
    badge: "ZED West · Sheikh Zayed",
    alt: b("مباني زد ويست الشيخ زايد حول ZED Park", "ZED West buildings around ZED Park"),
  },
  feature: {
    nav: b("بارك سايد", "Park Side"),
    eyebrow: b("المتاح حاليًا", "Available now"),
    latin: "PARK SIDE RESIDENCE — FULLY FINISHED",
    title: b("بارك سايد ريزيدنس — شقق زد ويست", "Park Side Residence — ZED West apartments"),
    body: b(
      "شقق Park Side Residence في زد ويست الشيخ زايد: من ستوديو حتى 3 غرف نوم، كاملة التشطيب بالتكييفات والمطبخ، بدون مقدم وتقسيط على 10 سنوات.",
      "Park Side Residence apartments in ZED West Sheikh Zayed: studio to 3 bedrooms, fully finished with ACs and kitchen, 0% down and 10 years to pay.",
    ),
    facts: [
      ["0%", b("بدون مقدم", "No down payment")],
      ["10", b("سنوات تقسيط", "Years to pay")],
      ["10 M", b("سعر البداية — ستوديو (مليون جنيه)", "Starting price — studio (EGP million)")],
      ["ZED Park", b("أكبر مساحة خضراء في المنطقة", "The largest green space in the area")],
    ],
    points: {
      ar: ["تسليم كامل التشطيب بالتكييفات والمطبخ", "ستوديو، غرفة، غرفتان و3 غرف نوم", "بدون مقدم وتقسيط على 10 سنوات", "مجتمع مسوّر بأمن وجراجات تحت الأرض", "كلوب هاوس وحدائق مركزية للسكان", "واجهة على طريق النزهة وقرب محور 26 يوليو"],
      en: ["Delivered fully finished with ACs and kitchen", "Studio, 1, 2 and 3-bedroom apartments", "0% down payment, 10 years to pay", "Secured gated community with underground parking", "Clubhouse and central parks for residents", "On Al Nozha Road, close to the 26th of July Corridor"],
    },
    servicesTitle: b("مرافق زد ويست", "ZED West facilities"),
    services: {
      ar: ["ZED Park", "مرافق رياضية", "كلوب هاوس", "حدائق مركزية", "جراجات تحت الأرض", "مجتمع مسوّر بأمن", "مكاتب إدارية", "منطقة ترفيهية"],
      en: ["ZED Park", "Sports facilities", "Clubhouse", "Central parks", "Underground parking", "Secured gated community", "Offices", "Amusement park"],
    },
    cta: b("احجز في بارك سايد ريزيدنس", "Reserve in Park Side Residence"),
    waSpec: "Studio – 3BR",
  },
  offers: [
    {
      slug: "zw-psr",
      featured: true,
      label: "PARK SIDE RESIDENCE",
      name: b("بارك سايد ريزيدنس", "Park Side Residence"),
      short: b("بارك سايد ريزيدنس", "Park Side Residence"),
      badge: b("بدون مقدم", "0% down"),
      intro: b("شقق كاملة التشطيب بالتكييفات والمطبخ في زد ويست الشيخ زايد، من ستوديو حتى 3 غرف نوم.", "Apartments fully finished with ACs and kitchen in ZED West Sheikh Zayed, studio to 3 bedrooms."),
      plan: NO_DP,
      dp: 0,
      years: 10,
      units: [
        { type: b("ستوديو", "Studio"), spec: b("كامل التشطيب", "Fully finished"), price: 10_000_000, image: img("zw-g6"), tags: { ar: ["بالتكييفات", "بالمطبخ"], en: ["ACs", "Kitchen"] } },
        { type: b("شقة غرفة نوم", "1-bedroom apartment"), spec: b("كاملة التشطيب", "Fully finished"), price: 11_100_000, image: img("zw-u-bed"), tags: { ar: ["بالتكييفات", "بالمطبخ"], en: ["ACs", "Kitchen"] } },
        { type: b("شقة غرفتين", "2-bedroom apartment"), spec: b("كاملة التشطيب", "Fully finished"), price: 14_000_000, image: img("zw-u-living"), tags: { ar: ["بالتكييفات", "بالمطبخ"], en: ["ACs", "Kitchen"] } },
        { type: b("شقة 3 غرف", "3-bedroom apartment"), spec: b("كاملة التشطيب", "Fully finished"), price: 21_000_000, image: img("zw-g5"), tags: { ar: ["بالتكييفات", "بالمطبخ"], en: ["ACs", "Kitchen"] } },
      ],
    },
  ],
  paymentTitle: b("زد ويست: بدون مقدم وقسّط على 10 سنوات", "ZED West: 0% down, 10 years to pay"),
  lifestyle: {
    title: b("لماذا زد ويست الشيخ زايد؟", "Why ZED West Sheikh Zayed?"),
    sub: b("حديقة ZED Park على باب بيتك، وشقق كاملة التشطيب في قلب الشيخ زايد.", "ZED Park on your doorstep, and fully finished apartments in the heart of Sheikh Zayed."),
    tiles: [
      [img("zw-hero"), b("ZED Park", "ZED Park"), b("أكبر مساحة خضراء في المنطقة بمرافق رياضية للمحترفين والهواة.", "The largest green space in the area, with sports facilities for pros and amateurs.")],
      [img("zw-g1"), b("حمامات سباحة ولاندسكيب", "Pools and landscape"), b("مساحات مفتوحة وحمامات سباحة بين المباني السكنية.", "Open spaces and swimming pools between the residential buildings.")],
      [img("zw-g3"), b("مطاعم وكافيهات", "Dining and cafés"), b("منطقة للمطاعم والخروجات داخل المشروع.", "A dining and leisure area inside the project.")],
      [img("zw-g5"), b("تشطيب كامل", "Fully finished"), b("استلام بالتكييفات والمطبخ، جاهز للسكن.", "Delivered with ACs and kitchen, ready to move in.")],
    ],
    amenities: {
      ar: ["ZED Park ومرافقه الرياضية", "حمامات سباحة", "كلوب هاوس", "مكاتب إدارية", "مسارات لياقة", "مطاعم وكافيهات", "حدائق مركزية", "مسارات جري ويوجا", "جراجات تحت الأرض"],
      en: ["ZED Park sports facilities", "Swimming pools", "Clubhouse", "Offices", "Fitness trails", "Restaurants and cafés", "Central parks", "Jogging and yoga", "Underground parking"],
    },
  },
  location: {
    title: b("موقع زد ويست في الشيخ زايد", "ZED West location in Sheikh Zayed"),
    body: b(
      "يقع زد ويست في قلب مدينة الشيخ زايد بغرب القاهرة، بواجهة على طريق النزهة، وبالقرب من محور 26 يوليو وطريق الإسكندرية الصحراوي.",
      "ZED West sits in the heart of Sheikh Zayed, West Cairo, on Al Nozha Road, close to the 26th of July Corridor and the Alexandria Desert Road.",
    ),
    distances: [
      [b("مباشرة", "Directly on"), b("طريق النزهة", "Al Nozha Road")],
      [b("قريب من", "Close to"), b("محور 26 يوليو", "26th of July Corridor")],
      [b("قريب من", "Close to"), b("طريق الإسكندرية الصحراوي", "Alexandria Desert Road")],
      [b("داخل المشروع", "On site"), b("ZED Park", "ZED Park")],
    ],
    near: {
      ar: ["ZED Park", "طريق النزهة", "محور 26 يوليو", "طريق الإسكندرية الصحراوي", "الشيخ زايد", "6 أكتوبر"],
      en: ["ZED Park", "Al Nozha Road", "26th of July Corridor", "Alexandria Desert Road", "Sheikh Zayed", "6th of October"],
    },
  },
  magnet: {
    title: b("بروشور زد ويست ونماذج الوحدات", "ZED West brochure and unit layouts"),
    sub: b("استلم بروشور زد ويست الشيخ زايد ونماذج شقق بارك سايد ريزيدنس بمقاساتها على واتساب.", "Get the ZED West Sheikh Zayed brochure and Park Side Residence layouts with dimensions on WhatsApp."),
  },
  gallery: [
    [img("zw-g1"), b("حمامات السباحة في زد ويست", "Pools at ZED West")],
    [img("zw-card"), b("مباني زد ويست السكنية", "ZED West residential buildings")],
    [img("zw-about"), b("البحيرة والنوافير في زد ويست", "The lake and fountains at ZED West")],
    [img("zw-g2"), b("سطح بحمام سباحة", "Rooftop pool deck")],
    [img("zw-g3"), b("منطقة المطاعم", "Dining area")],
    [img("zw-g5"), b("لوبي الاستقبال", "Reception lobby")],
    [img("zw-u-living"), b("غرفة المعيشة", "Living room")],
    [img("zw-u-bed"), b("غرفة النوم", "Bedroom")],
  ],
  developerP2: b(
    "ZED الشيخ زايد أول مشاريع أورا في غرب القاهرة، ويمتد على 165 فدان حول ZED Park، وخبرة أورا في إدارة المجتمعات تحافظ على قيمة الوحدة.",
    "ZED El Sheikh Zayed is ORA's first West Cairo project, spread over 165 feddans around ZED Park. ORA's community management experience protects unit value.",
  ),
  faqExtra: [],
  finalSub: b("من 10 مليون جنيه • بدون مقدم • تقسيط 10 سنوات", "From EGP 10M • 0% down • 10 years to pay"),
};

/* ═════════════════════════ SOLANA WEST ═════════════════════════ */
const CS = { ar: ["Core & Shell"], en: ["Core & Shell"] };
const solanaWest: Spec = {
  key: "solana-west",
  brand: "Solana West",
  name: b("سولانا ويست", "Solana West"),
  full: b("سولانا ويست نيو زايد", "Solana West New Zayed"),
  wordmark: ["SOLANA WEST", "BY ORA · NEW ZAYED"],
  featureId: "villas",
  mapQuery: "Solana West ORA New Zayed",
  place: {
    name: "Solana West by ORA — New Zayed",
    description:
      "ORA Developers community in New Zayed: apartments, townhouses, twin houses and standalone villas, core & shell, 0% down over 10 years.",
    locality: "New Zayed, Sheikh Zayed, Giza",
  },
  media: {
    og: "/images/og-sw.jpg",
    hero: img("sw-card"),
    heroM: img("sw-hero-m"),
    intro: img("sw-about"),
    feature: [img("sw-g3"), img("sw-g1"), img("sw-g5")],
    brochureTile: img("sw-g4"),
    endTile: img("sw-hero"),
    mid: img("sw-g1"),
    magnet: img("sw-hero"),
    developer: img("sw-g2"),
    final: img("sw-g1"),
  },
  meta: {
    title: b(
      "سولانا ويست نيو زايد من أورا | سولانا الشيخ زايد — من 11 مليون بدون مقدم وتقسيط 10 سنوات",
      "Solana West New Zayed by ORA | From EGP 11M, 0% Down, 10 Years to Pay",
    ),
    description: b(
      "سولانا ويست (سولانا الشيخ زايد) من أورا في نيو زايد: شقق غرفتين و3 غرف، تاون هاوس، توين هاوس وڤيلات مستقلة، تبدأ من 11,000,000 جنيه بدون مقدم وتقسيط 10 سنوات.",
      "Solana West by ORA in New Zayed: 2 and 3-bedroom apartments, townhouses, twin houses and standalone villas from EGP 11,000,000 with 0% down over 10 years.",
    ),
    keywords: {
      ar: ["سولانا ويست", "سولانا الشيخ زايد", "سولانا نيو زايد", "سولانا اورا", "كمبوند سولانا نيو زايد", "اسعار سولانا ويست", "اسعار سولانا الشيخ زايد", "فيلات سولانا", "تاون هاوس نيو زايد", "أورا للتطوير العقاري", "Solana West", "Solana New Zayed"],
      en: ["Solana West", "Solana New Zayed", "Solana ORA", "Solana West prices", "Solana Sheikh Zayed", "villas New Zayed", "townhouse New Zayed", "ORA Developers"],
    },
  },
  hero: {
    pill: b("سولانا ويست · نيو زايد · الشيخ زايد", "Solana West · New Zayed · Sheikh Zayed"),
    h1b: b("نيو زايد", "New Zayed"),
    body: b(
      "مشروع أورا في نيو زايد: شقق وتاون هاوس وتوين هاوس وڤيلات مستقلة، بدون مقدم وتقسيط على 10 سنوات.",
      "ORA's project in New Zayed: apartments, townhouses, twin houses and standalone villas, 0% down and 10 years to pay.",
    ),
    down: "0%",
    years: b("سنوات", "years"),
    alt: b("ڤيلا مستقلة في سولانا ويست نيو زايد", "Standalone villa in Solana West New Zayed"),
  },
  intro: {
    title: b("كمبوند سولانا ويست نيو زايد من أورا", "Solana West New Zayed by ORA"),
    body: b(
      "سولانا ويست مشروع أورا في نيو زايد، بين محور الضبعة والطريق الدائري الأوسط، وعلى بُعد نحو 15 دقيقة من محور 26 يوليو وميدان جهينة. المشروع يقدّم أنواعًا متعددة من الوحدات حول حدائق داخلية وكلوب هاوس ومنطقة تجارية.",
      "Solana West is ORA's project in New Zayed, between the Dabaa Corridor and the Middle Ring Road, about 15 minutes from the 26th of July Corridor and Juhayna Square. It offers a range of home types around internal parks, a clubhouse and a boutique mall.",
    ),
    stats: [
      ["0%", b("مقدم", "down payment")],
      ["10", b("سنوات تقسيط", "years to pay")],
      ["5", b("أنواع وحدات", "home types")],
    ],
    badge: "Solana West · New Zayed",
    alt: b("تاون هاوس سولانا ويست نيو زايد", "Solana West townhouses in New Zayed"),
  },
  feature: {
    nav: b("الڤيلات", "Villas"),
    eyebrow: b("المتاح حاليًا", "Available now"),
    latin: "SOLANA WEST — VILLAS & APARTMENTS",
    title: b("ڤيلات وشقق سولانا ويست — بدون مقدم", "Solana West villas and apartments — 0% down"),
    body: b(
      "تاون هاوس 172 م²، توين هاوس 184 م²، وڤيلات مستقلة 195 م²، ومعها شقق غرفتين و3 غرف. كل الوحدات بتشطيب Core & Shell، بدون مقدم وتقسيط على 10 سنوات.",
      "172 m² townhouses, 184 m² twin houses and 195 m² standalone villas, plus 2 and 3-bedroom apartments. All units are core & shell, with 0% down and 10 years to pay.",
    ),
    facts: [
      ["0%", b("بدون مقدم", "No down payment")],
      ["10", b("سنوات تقسيط", "Years to pay")],
      ["11 M", b("سعر البداية — شقة غرفتين (مليون جنيه)", "Starting price — 2-bedroom (EGP million)")],
      ["22.5 M", b("سعر التاون هاوس 172 م² (مليون جنيه)", "172 m² townhouse (EGP million)")],
    ],
    points: {
      ar: ["تاون هاوس، توين هاوس وڤيلات مستقلة", "شقق غرفتين 88 م² و3 غرف 131 م²", "بدون مقدم وتقسيط على 10 سنوات", "تشطيب Core & Shell", "حدائق داخلية وكلوب هاوس", "بين محور الضبعة والدائري الأوسط"],
      en: ["Townhouses, twin houses and standalone villas", "88 m² 2-bedroom and 131 m² 3-bedroom apartments", "0% down payment, 10 years to pay", "Core & shell delivery", "Internal parks and a clubhouse", "Between the Dabaa Corridor and the Middle Ring Road"],
    },
    servicesTitle: b("مرافق سولانا ويست", "Solana West facilities"),
    services: {
      ar: ["حدائق داخلية", "كلوب هاوس", "بوتيك مول", "شقق مخدومة"],
      en: ["Internal parks", "Clubhouse", "Boutique mall", "Serviced apartments"],
    },
    cta: b("احجز في سولانا ويست", "Reserve in Solana West"),
    waSpec: "88–195 m²",
  },
  offers: [
    {
      slug: "sw-villas",
      featured: true,
      label: "VILLAS",
      name: b("ڤيلات سولانا ويست", "Solana West villas"),
      short: b("الڤيلات", "Villas"),
      badge: b("بدون مقدم", "0% down"),
      intro: b("تاون هاوس وتوين هاوس وڤيلات مستقلة بتشطيب Core & Shell.", "Townhouses, twin houses and standalone villas, core & shell."),
      plan: NO_DP,
      dp: 0,
      years: 10,
      units: [
        { type: b("تاون هاوس", "Townhouse"), spec: b("172 م²", "172 m²"), price: 22_500_000, image: img("sw-u-town"), tags: CS },
        { type: b("توين هاوس", "Twin house"), spec: b("184 م²", "184 m²"), price: 28_000_000, image: img("sw-u-twin"), tags: CS },
        { type: b("ڤيلا مستقلة", "Standalone villa"), spec: b("195 م²", "195 m²"), price: 31_500_000, image: img("sw-u-villa"), tags: CS },
      ],
    },
    {
      slug: "sw-apartments",
      label: "APARTMENTS",
      name: b("شقق سولانا ويست", "Solana West apartments"),
      short: b("الشقق", "Apartments"),
      badge: b("بدون مقدم", "0% down"),
      intro: b("شقق غرفتين و3 غرف نوم بتشطيب Core & Shell.", "2 and 3-bedroom apartments, core & shell."),
      plan: NO_DP,
      dp: 0,
      years: 10,
      units: [
        { type: b("شقة غرفتين", "2-bedroom apartment"), spec: b("88 م²", "88 m²"), price: 11_000_000, image: img("sw-g5"), tags: CS },
        { type: b("شقة 3 غرف", "3-bedroom apartment"), spec: b("131 م²", "131 m²"), price: 14_100_000, image: img("sw-g6"), tags: CS },
      ],
    },
  ],
  paymentTitle: b("سولانا ويست: بدون مقدم وقسّط على 10 سنوات", "Solana West: 0% down, 10 years to pay"),
  lifestyle: {
    title: b("لماذا سولانا ويست؟", "Why Solana West?"),
    sub: b("ڤيلات بتصميم معاصر وحدائق خاصة في نيو زايد، قريبة من محاور غرب القاهرة.", "Contemporary villas with private gardens in New Zayed, close to West Cairo's main corridors."),
    tiles: [
      [img("sw-g1"), b("ڤيلات بحمامات سباحة", "Villas with pools"), b("ڤيلات مستقلة بحدائق وحمامات سباحة خاصة.", "Standalone villas with private gardens and pools.")],
      [img("sw-about"), b("تاون هاوس وتوين هاوس", "Townhouses and twin houses"), b("صفوف هادئة تطل على مساحات خضراء.", "Quiet rows overlooking green spaces.")],
      [img("sw-hero"), b("حدائق داخلية", "Internal parks"), b("مساحات خضراء وتلال لاندسكيب في قلب المشروع.", "Green spaces and landscaped hills at the heart of the project.")],
      [img("sw-g6"), b("مساحات داخلية مفتوحة", "Open interiors"), b("واجهات زجاجية وإضاءة طبيعية في كل الوحدات.", "Glass façades and natural light in every home.")],
    ],
    amenities: {
      ar: ["حدائق داخلية", "حمامات سباحة خاصة", "كلوب هاوس", "شقق مخدومة", "ڤيلات بحدائق خاصة", "بوتيك مول"],
      en: ["Internal parks", "Private pools", "Clubhouse", "Serviced apartments", "Villas with private gardens", "Boutique mall"],
    },
  },
  location: {
    title: b("موقع سولانا ويست في نيو زايد", "Solana West location in New Zayed"),
    body: b(
      "يقع سولانا ويست في نيو زايد بغرب القاهرة، بين محور الضبعة والطريق الدائري الأوسط، وبالقرب من مطار سفنكس.",
      "Solana West is in New Zayed, West Cairo, between the Dabaa Corridor and the Middle Ring Road, close to Sphinx Airport.",
    ),
    distances: [
      [b("15 دقيقة", "15 min"), b("محور 26 يوليو", "26th of July Corridor")],
      [b("15 دقيقة", "15 min"), b("ميدان جهينة", "Juhayna Square")],
      [b("20 دقيقة", "20 min"), b("ZED Park", "ZED Park")],
      [b("6 دقائق", "6 min"), b("وصلة دهشور", "Waslet Dahshour")],
    ],
    near: {
      ar: ["محور الضبعة", "الطريق الدائري الأوسط", "مطار سفنكس", "وصلة دهشور", "الشيخ زايد", "ميدان جهينة"],
      en: ["Dabaa Corridor", "Middle Ring Road", "Sphinx Airport", "Waslet Dahshour", "Sheikh Zayed", "Juhayna Square"],
    },
  },
  magnet: {
    title: b("بروشور سولانا ويست ونماذج الوحدات", "Solana West brochure and unit layouts"),
    sub: b("استلم بروشور سولانا ويست نيو زايد ونماذج الڤيلات والشقق بمقاساتها على واتساب.", "Get the Solana West New Zayed brochure and villa and apartment layouts with dimensions on WhatsApp."),
  },
  gallery: [
    [img("sw-g1"), b("ڤيلا بحمام سباحة", "Villa with pool")],
    [img("sw-card"), b("ڤيلا مستقلة في سولانا ويست", "Standalone villa at Solana West")],
    [img("sw-g2"), b("حديقة الڤيلا", "Villa garden")],
    [img("sw-g3"), b("ڤيلا بإطلالة على الحديقة", "Garden-view villa")],
    [img("sw-about"), b("تاون هاوس سولانا ويست", "Solana West townhouses")],
    [img("sw-g4"), b("فناء داخلي", "Inner courtyard")],
    [img("sw-g5"), b("غرفة المعيشة", "Living room")],
    [img("sw-g6"), b("المعيشة والمطبخ", "Living and kitchen")],
  ],
  developerP2: b(
    "سولانا مشروع أورا في نيو زايد، ويكمل وجودها في غرب القاهرة بجانب ZED الشيخ زايد.",
    "Solana is ORA's project in New Zayed, complementing its West Cairo presence alongside ZED El Sheikh Zayed.",
  ),
  faqExtra: [],
  finalSub: b("من 11 مليون جنيه • بدون مقدم • تقسيط 10 سنوات", "From EGP 11M • 0% down • 10 years to pay"),
};

/* ═════════════════════════ SOLANA EAST ═════════════════════════ */
const solanaEast: Spec = {
  key: "solana-east",
  brand: "Solana East",
  name: b("سولانا إيست", "Solana East"),
  full: b("سولانا إيست التجمع الخامس", "Solana East New Cairo"),
  wordmark: ["SOLANA EAST", "BY ORA · NEW CAIRO"],
  featureId: "east-lane",
  mapQuery: "Solana East ORA New Cairo",
  place: {
    name: "Solana East by ORA — East Lane",
    description:
      "ORA Developers project on South 90th Street, Fifth Settlement, New Cairo: East Lane serviced apartments, Medica clinics, apartments, villas and offices.",
    locality: "South 90th St., Fifth Settlement, New Cairo",
  },
  media: {
    og: "/images/og-se.jpg",
    hero: img("se-hero"),
    heroM: img("se-hero-m"),
    intro: img("se-about"),
    feature: [img("se-card"), img("se-med-plaza"), img("se-med-reception")],
    brochureTile: img("se-res-cd"),
    endTile: img("se-about"),
    mid: img("se-med-street"),
    magnet: img("se-med-facade"),
    developer: img("se-res-lm"),
    final: img("se-hero"),
  },
  meta: {
    title: b(
      "سولانا إيست التجمع الخامس من أورا | سولانا التجمع — من 8.9 مليون وتقسيط حتى 9 سنوات",
      "Solana East New Cairo by ORA | East Lane & Medica — From EGP 8.9M",
    ),
    description: b(
      "سولانا إيست (سولانا التجمع) من أورا على شارع التسعين الجنوبي: شقق فندقية إيست لين من 8,900,000 جنيه، عيادات ميديكا من 14,000,000 جنيه، وشقق وڤيلات ومكاتب بمقدم 5% وتقسيط 8 سنوات.",
      "Solana East by ORA on South 90th Street, New Cairo: East Lane serviced apartments from EGP 8,900,000, Medica clinics from EGP 14,000,000, plus apartments, villas and offices with 5% down over 8 years.",
    ),
    keywords: {
      ar: ["سولانا إيست", "سولانا ايست", "سولانا التجمع", "سولانا التجمع الخامس", "سولانا ايست اورا", "اسعار سولانا ايست", "سولانا إيست لين", "ميديكا سولانا", "عيادات التسعين الجنوبي", "شقق فندقية التجمع الخامس", "أورا للتطوير العقاري", "Solana East", "Solana East Lane"],
      en: ["Solana East", "Solana East New Cairo", "Solana East ORA", "Solana East prices", "Solana East Lane", "Medica Solana", "clinics South 90th", "serviced apartments New Cairo", "ORA Developers"],
    },
  },
  hero: {
    pill: b("سولانا إيست · التسعين الجنوبي · التجمع الخامس", "Solana East · South 90th St. · New Cairo"),
    h1b: b("التجمع الخامس", "New Cairo"),
    body: b(
      "مشروع أورا على شارع التسعين الجنوبي: شقق فندقية مخدومة في إيست لين، عيادات ميديكا المتشطبة بالكامل، وشقق وڤيلات ومكاتب.",
      "ORA's project on South 90th Street: East Lane serviced apartments, fully finished Medica clinics, plus apartments, villas and offices.",
    ),
    down: "5%",
    years: b("سنوات", "years"),
    alt: b("سولانا إيست على شارع التسعين الجنوبي — مبنى ميديكا ليلًا", "Solana East on South 90th Street — Medica building at night"),
  },
  intro: {
    title: b("كمبوند سولانا إيست التجمع الخامس من أورا", "Solana East New Cairo by ORA"),
    body: b(
      "سولانا إيست مشروع أورا على شارع التسعين الجنوبي في التجمع الخامس، ويجمع بين السكن والخدمات في مكان واحد. طرح سولانا إيست لين يمتد على 26.6 فدان على واجهة التسعين مباشرة، ويضم شققًا فندقية مخدومة في مباني G+3.5 وسط اللاندسكيب، ومبنى ميديكا: المبنى الطبي الوحيد في المشروع.",
      "Solana East is ORA's project on South 90th Street in the Fifth Settlement, combining homes and services in one place. Solana East Lane spreads over 26.6 feddans directly on South 90th, with serviced apartments in G+3.5 buildings set in landscape, and Medica: the project's only medical building.",
    ),
    stats: [
      ["26.6", b("فدان — إيست لين", "feddans — East Lane")],
      ["5%", b("مقدم", "down payment")],
      ["8–9", b("سنوات تقسيط", "years to pay")],
    ],
    badge: "Solana East · New Cairo",
    alt: b("مباني الشقق الفندقية في سولانا إيست لين", "Serviced apartment buildings at Solana East Lane"),
  },
  feature: {
    nav: b("إيست لين", "East Lane"),
    eyebrow: b("الطرح الجديد", "New launch"),
    latin: "SOLANA EAST LANE — SERVICED & MEDICA",
    title: b("سولانا إيست لين — شقق فندقية وعيادات ميديكا", "Solana East Lane — serviced apartments and Medica clinics"),
    body: b(
      "طرحان في مشروع واحد على واجهة التسعين الجنوبي: شقق فندقية مخدومة بالكامل من غرفة حتى 3 غرف، ومبنى ميديكا بعيادات من 57 إلى 155 م² متشطبة بالكامل، بردهة استقبال مشتركة.",
      "Two launches in one project on South 90th: fully serviced apartments from 1 to 3 bedrooms, and the Medica building with fully finished clinics from 57 to 155 m² and a shared reception lobby.",
    ),
    facts: [
      ["8.9 M", b("شقة فندقية غرفة نوم (مليون جنيه)", "1-bedroom serviced apartment (EGP million)")],
      ["14 M", b("عيادة ميديكا 57–65 م² (مليون جنيه)", "57–65 m² Medica clinic (EGP million)")],
      ["5%", b("جدية حجز / مقدم", "Reservation / down payment")],
      ["9", b("سنوات تقسيط للشقق الفندقية", "Years to pay on serviced apartments")],
    ],
    points: {
      ar: ["شقق فندقية مخدومة بالكامل — للسكن أو للإيجار", "مباني G+3.5 وسط اللاندسكيب", "ميديكا: المبنى الطبي الوحيد في المشروع", "عيادات متشطبة بالكامل بدورات المياه", "ردهة استقبال مشتركة لمبنى العيادات", "واجهة مباشرة على شارع التسعين الجنوبي"],
      en: ["Fully serviced apartments — to live in or rent out", "G+3.5 buildings set in landscape", "Medica: the project's only medical building", "Clinics fully finished including bathrooms", "Shared reception lobby for the clinics building", "Direct frontage on South 90th Street"],
    },
    servicesTitle: b("المتاح في سولانا إيست", "Available in Solana East"),
    services: {
      ar: ["شقق فندقية", "عيادات ميديكا", "شقق كاملة التشطيب", "تاون هاوس", "توين هاوس", "ڤيلات مستقلة", "مكاتب إدارية"],
      en: ["Serviced apartments", "Medica clinics", "Fully finished apartments", "Townhouses", "Twin houses", "Standalone villas", "Offices"],
    },
    cta: b("احجز في سولانا إيست لين", "Reserve in Solana East Lane"),
    waSpec: "East Lane",
  },
  offers: [
    {
      slug: "se-lane",
      featured: true,
      label: "EAST LANE · SERVICED",
      name: b("إيست لين — شقق فندقية", "East Lane — serviced apartments"),
      short: b("إيست لين", "East Lane"),
      badge: b("طرح جديد", "New launch"),
      intro: b("شقق فندقية مخدومة بالكامل في مباني G+3.5 وسط اللاندسكيب، غرفة وغرفتان و3 غرف — للسكن أو للإيجار.", "Fully serviced apartments in G+3.5 buildings set in landscape, 1 to 3 bedrooms — to live in or rent out."),
      plan: b("جدية حجز 5%، وتقسيط حتى 9 سنوات", "5% reservation, up to 9 years to pay"),
      dp: 5,
      years: 9,
      units: [
        { type: b("شقة فندقية غرفة", "1-bedroom serviced"), spec: b("غرفة نوم واحدة", "One bedroom"), price: 8_900_000, image: img("se-res-a"), tags: { ar: ["مخدومة بالكامل"], en: ["Fully serviced"] } },
        { type: b("شقة فندقية غرفتين", "2-bedroom serviced"), spec: b("غرفتا نوم", "Two bedrooms"), price: 13_900_000, image: img("se-res-cd"), tags: { ar: ["مخدومة بالكامل"], en: ["Fully serviced"] } },
        { type: b("شقة فندقية 3 غرف", "3-bedroom serviced"), spec: b("3 غرف نوم", "Three bedrooms"), price: 18_000_000, image: img("se-res-lm"), tags: { ar: ["مخدومة بالكامل"], en: ["Fully serviced"] } },
      ],
    },
    {
      slug: "se-medica",
      label: "MEDICA CLINICS",
      name: b("ميديكا — عيادات", "Medica — clinics"),
      short: b("ميديكا", "Medica"),
      badge: b("مبنى عيادات واحد", "One clinics building"),
      intro: b("المبنى الطبي الوحيد في سولانا إيست لين على واجهة التسعين. عيادات من 57 إلى 155 م² متشطبة بالكامل، في مبنى G+3.", "The only medical building in Solana East Lane, on South 90th. Fully finished clinics from 57 to 155 m² in a G+3 building."),
      plan: b("مقدم 5%، ثم 5% بعد 3 أشهر، والباقي على 8.5 سنة", "5% down, 5% after 3 months, balance over 8.5 years"),
      dp: 10,
      years: 8.5,
      units: [
        { type: b("عيادة 57–65 م²", "Clinic 57–65 m²"), spec: b("57 – 65 م²", "57 – 65 m²"), price: 14_000_000, image: img("se-med-clinic"), tags: { ar: ["كاملة التشطيب"], en: ["Fully finished"] } },
        { type: b("عيادة 73 م²", "Clinic 73 m²"), spec: b("73 م²", "73 m²"), price: 18_000_000, image: img("se-med-office"), tags: { ar: ["كاملة التشطيب"], en: ["Fully finished"] } },
        { type: b("عيادة 83 م²", "Clinic 83 m²"), spec: b("83 م²", "83 m²"), price: 20_000_000, image: img("se-med-reception"), tags: { ar: ["كاملة التشطيب"], en: ["Fully finished"] } },
        { type: b("عيادة 93 م²", "Clinic 93 m²"), spec: b("93 م²", "93 m²"), price: 23_000_000, image: img("se-med-facade"), tags: { ar: ["كاملة التشطيب"], en: ["Fully finished"] } },
        { type: b("عيادة 135–155 م²", "Clinic 135–155 m²"), spec: b("135 – 155 م²", "135 – 155 m²"), price: 36_000_000, image: img("se-med-street"), tags: { ar: ["كاملة التشطيب"], en: ["Fully finished"] } },
      ],
    },
    {
      slug: "se-apartments",
      label: "APARTMENTS",
      name: b("شقق سولانا إيست", "Solana East apartments"),
      short: b("الشقق", "Apartments"),
      intro: b("شقق كاملة التشطيب بالتكييفات من غرفة حتى 3 غرف نوم.", "Apartments fully finished with ACs, 1 to 3 bedrooms."),
      plan: P5_8,
      dp: 10,
      years: 8,
      units: [
        { type: b("شقة غرفة نوم", "1-bedroom apartment"), spec: b("كاملة التشطيب", "Fully finished"), price: 13_500_000, image: img("se-about"), tags: { ar: ["بالتكييفات"], en: ["ACs"] } },
        { type: b("شقة غرفتين", "2-bedroom apartment"), spec: b("كاملة التشطيب", "Fully finished"), price: 20_000_000, image: img("se-res-cd"), tags: { ar: ["بالتكييفات"], en: ["ACs"] } },
        { type: b("شقة 3 غرف", "3-bedroom apartment"), spec: b("كاملة التشطيب", "Fully finished"), price: 28_000_000, image: img("se-res-lm"), tags: { ar: ["بالتكييفات"], en: ["ACs"] } },
      ],
    },
    {
      slug: "se-villas",
      label: "VILLAS",
      name: b("ڤيلات سولانا إيست", "Solana East villas"),
      short: b("الڤيلات", "Villas"),
      intro: b("تاون هاوس وتوين هاوس وڤيلات مستقلة كاملة التشطيب.", "Fully finished townhouses, twin houses and standalone villas."),
      plan: P5_8,
      dp: 10,
      years: 8,
      units: [
        { type: b("تاون هاوس", "Townhouse"), spec: b("كامل التشطيب", "Fully finished"), price: 44_000_000, image: img("se-card"), tags: { ar: ["كامل التشطيب"], en: ["Fully finished"] } },
        { type: b("توين هاوس", "Twin house"), spec: b("كامل التشطيب", "Fully finished"), price: 54_000_000, image: img("se-about"), tags: { ar: ["كامل التشطيب"], en: ["Fully finished"] } },
        { type: b("ڤيلا مستقلة", "Standalone villa"), spec: b("كاملة التشطيب", "Fully finished"), price: 119_000_000, image: img("se-res-a"), tags: { ar: ["كاملة التشطيب"], en: ["Fully finished"] } },
      ],
    },
    {
      slug: "se-offices",
      label: "OFFICES",
      name: b("مكاتب سولانا إيست", "Solana East offices"),
      short: b("المكاتب", "Offices"),
      badge: b("إداري", "Offices"),
      intro: b("مكاتب إدارية بتشطيب Core & Shell.", "Core & shell offices."),
      plan: P5_8,
      dp: 10,
      years: 8,
      units: [{ type: b("مكتب إداري", "Office"), spec: b("58 م²", "58 m²"), price: 15_000_000, image: img("se-med-facade"), tags: { ar: ["Core & Shell", "استثمار"], en: ["Core & Shell", "Investment"] } }],
    },
  ],
  paymentTitle: b("سولانا إيست: مقدم 5% وقسّط حتى 9 سنوات", "Solana East: 5% down, up to 9 years to pay"),
  lifestyle: {
    title: b("لماذا سولانا إيست؟", "Why Solana East?"),
    sub: b("سكن مخدوم وعيادات ومكاتب على واجهة التسعين الجنوبي مباشرة.", "Serviced homes, clinics and offices directly on South 90th Street."),
    tiles: [
      [img("se-card"), b("ممشى وسط اللاندسكيب", "A landscaped walkway"), b("مباني G+3.5 حول حدائق ومسارات مشي.", "G+3.5 buildings around gardens and walking paths.")],
      [img("se-med-plaza"), b("بلازا ميديكا", "Medica plaza"), b("مبنى العيادات على واجهة التسعين بساحة ومحلات.", "The clinics building on South 90th with a plaza and retail.")],
      [img("se-med-reception"), b("استقبال مشترك", "Shared reception"), b("ردهة استقبال مجهزة لمبنى العيادات.", "A fitted reception lobby for the clinics building.")],
      [img("se-res-cd"), b("شقق فندقية مخدومة", "Serviced apartments"), b("خدمات فندقية كاملة للسكن أو للإيجار.", "Full hotel-style services, to live in or rent out.")],
    ],
    amenities: {
      ar: ["واجهة على التسعين الجنوبي", "لاندسكيب ومسارات مشي", "خدمات فندقية", "مكاتب إدارية", "عيادات ميديكا", "محلات وكافيهات"],
      en: ["South 90th frontage", "Landscape and walkways", "Hotel-style services", "Offices", "Medica clinics", "Shops and cafés"],
    },
  },
  location: {
    title: b("موقع سولانا إيست في التجمع الخامس", "Solana East location in New Cairo"),
    body: b(
      "يقع سولانا إيست على شارع التسعين الجنوبي في التجمع الخامس بالقاهرة الجديدة، بواجهة مباشرة على التسعين.",
      "Solana East is on South 90th Street in the Fifth Settlement, New Cairo, with direct frontage on South 90th.",
    ),
    distances: [
      [b("مباشرة", "Directly on"), b("شارع التسعين الجنوبي", "South 90th Street")],
      [b("قريب من", "Close to"), b("الجامعة الأمريكية", "The American University")],
      [b("قريب من", "Close to"), b("الطريق الدائري الأوسط", "Middle Ring Road")],
      [b("قريب من", "Close to"), b("زد إيست", "ZED East")],
    ],
    near: {
      ar: ["التسعين الجنوبي", "الجامعة الأمريكية", "زد إيست", "هايد بارك", "الطريق الدائري الأوسط", "العاصمة الإدارية"],
      en: ["South 90th Street", "The American University", "ZED East", "Hyde Park", "Middle Ring Road", "New Capital"],
    },
  },
  magnet: {
    title: b("بروشور سولانا إيست ونماذج الوحدات", "Solana East brochure and unit layouts"),
    sub: b("استلم بروشور سولانا إيست لين وميديكا ونماذج الوحدات بمقاساتها على واتساب.", "Get the Solana East Lane and Medica brochure and unit layouts with dimensions on WhatsApp."),
  },
  gallery: [
    [img("se-med-plaza"), b("بلازا ميديكا على التسعين", "Medica plaza on South 90th")],
    [img("se-card"), b("ممشى سولانا إيست لين", "Solana East Lane walkway")],
    [img("se-res-cd"), b("مباني الشقق الفندقية", "Serviced apartment buildings")],
    [img("se-res-a"), b("واجهة المباني السكنية", "Residential façade")],
    [img("se-med-clinic"), b("عيادة في ميديكا", "A Medica clinic")],
    [img("se-med-reception"), b("استقبال ميديكا", "Medica reception")],
    [img("se-med-street"), b("واجهة ميديكا على الشارع", "Medica street frontage")],
    [img("se-res-lm"), b("الحدائق بين المباني", "Gardens between the buildings")],
  ],
  developerP2: b(
    "سولانا إيست يكمل وجود أورا في القاهرة الجديدة بجانب زد إيست، بطرح يجمع السكن المخدوم والعيادات على واجهة التسعين.",
    "Solana East complements ORA's New Cairo presence alongside ZED East, combining serviced living and clinics on South 90th.",
  ),
  faqExtra: [
    {
      q: b("ما هو سولانا إيست لين؟", "What is Solana East Lane?"),
      a: b(
        "طرح أورا على واجهة التسعين الجنوبي على 26.6 فدان: شقق فندقية مخدومة في مباني G+3.5، ومبنى ميديكا للعيادات المتشطبة بالكامل.",
        "ORA's launch on South 90th Street over 26.6 feddans: serviced apartments in G+3.5 buildings and the Medica building of fully finished clinics.",
      ),
    },
    {
      q: b("ما مساحات وأسعار عيادات ميديكا؟", "What are the Medica clinic sizes and prices?"),
      a: b(
        "عيادات 57–65 م² من 14,000,000 جنيه، 73 م² من 18,000,000، 83 م² من 20,000,000، 93 م² من 23,000,000، و135–155 م² من 36,000,000 جنيه. السداد: مقدم 5%، ثم 5% بعد 3 أشهر، والباقي على 8.5 سنة.",
        "Clinics of 57–65 m² from EGP 14,000,000, 73 m² from 18,000,000, 83 m² from 20,000,000, 93 m² from 23,000,000, and 135–155 m² from EGP 36,000,000. Payment: 5% down, 5% after 3 months, balance over 8.5 years.",
      ),
    },
  ],
  finalSub: b("من 8.9 مليون جنيه • مقدم 5% • تقسيط حتى 9 سنوات", "From EGP 8.9M • 5% down • up to 9 years to pay"),
};

/* ═════════════════════════ Builder ═════════════════════════ */
const priceM = (n: number) => String(Number((n / 1e6).toFixed(1)));

function build(lang: Lang, s: Spec): Dict {
  const base = BASE[lang];
  const ar = lang === "ar";
  const L = (x: B) => x[lang];
  const LL = (x: BL) => x[lang];
  const name = L(s.name);
  const full = L(s.full);
  const path = `/${s.key}`;

  const offers: Offer[] = s.offers.map((o) => ({
    slug: o.slug,
    featured: o.featured,
    label: o.label,
    name: L(o.name),
    short: L(o.short),
    badge: o.badge ? L(o.badge) : undefined,
    intro: L(o.intro),
    plan: L(o.plan),
    dp: o.dp,
    years: o.years,
    units: o.units.map((u) => ({ type: L(u.type), spec: L(u.spec), price: u.price, image: u.image, tags: LL(u.tags) })),
  }));
  const minOf = (o: OfferSpec) => Math.min(...o.units.map((u) => u.price));
  const min = Math.min(...s.offers.map(minOf));
  const maxYears = Math.max(...s.offers.map((o) => o.years));
  const options = [...offers.map((o) => o.short), base.form.options[base.form.options.length - 1]];

  const faq = [
    ...s.faqExtra.map((f) => ({ q: L(f.q), a: L(f.a) })),
    {
      q: ar ? `من كم تبدأ أسعار ${name}؟` : `What do ${name} prices start from?`,
      a: s.offers
        .map((o) => (ar ? `${o.short.ar} من ${fmt(minOf(o))} جنيه` : `${o.short.en} from EGP ${fmt(minOf(o))}`))
        .join(ar ? "، " : ", ") + (ar ? ". الأسعار أسعار بداية وقابلة للتغيير." : ". These are starting prices and may change."),
    },
    {
      q: ar ? `ما أنظمة السداد في ${name}؟` : `What are the payment plans in ${name}?`,
      a: s.offers.map((o) => `${L(o.short)}: ${L(o.plan)}`).join(ar ? ". " : ". ") + ".",
    },
    {
      q: ar ? `ما الوحدات المتاحة في ${name}؟` : `Which units are available in ${name}?`,
      a: s.offers.map((o) => `${L(o.short)}: ${o.units.map((u) => `${L(u.type)}${u.spec[lang] !== u.type[lang] ? ` (${L(u.spec)})` : ""}`).join(ar ? "، " : ", ")}`).join(". ") + ".",
    },
    { q: ar ? `أين يقع ${full}؟` : `Where is ${full}?`, a: L(s.location.body) },
    {
      q: ar ? `من هو مطوّر ${name}؟` : `Who is the developer of ${name}?`,
      a: ar ? "أورا للتطوير العقاري (ORA Developers)، المملوكة لرجل الأعمال م. نجيب ساويرس." : "ORA Developers, owned by businessman Eng. Naguib Sawiris.",
    },
    base.faq.items[base.faq.items.length - 1],
  ];

  return {
    ...base,
    name,
    key: s.key,
    base: path,
    brand: s.brand,
    wordmark: s.wordmark,
    featureId: s.featureId,
    mapQuery: s.mapQuery,
    place: s.place,
    media: s.media,
    meta: { title: L(s.meta.title), description: L(s.meta.description), keywords: LL(s.meta.keywords) },
    ui: {
      ...base.ui,
      nav: [[`#${s.featureId}`, L(s.feature.nav)], ...base.ui.nav.slice(1)],
    },
    hero: {
      ...base.hero,
      pill: L(s.hero.pill),
      h1a: name,
      h1b: L(s.hero.h1b),
      body: L(s.hero.body),
      stats: [
        [base.hero.stats[0][0], priceM(min), base.hero.stats[0][2]],
        [base.hero.stats[1][0], s.hero.down, ""],
        [base.hero.stats[2][0], String(maxYears), L(s.hero.years)],
      ],
      formSub: ar
        ? `سجّل في 20 ثانية ونرسل لك أسعار ${name} والوحدات المتاحة على واتساب.`
        : `Register in 20 seconds and we'll send ${name} prices and availability on WhatsApp.`,
      alt: L(s.hero.alt),
    },
    intro: {
      ...base.intro,
      title: L(s.intro.title),
      body: L(s.intro.body),
      stats: s.intro.stats.map(([v, l]) => [v, L(l)]),
      badge: s.intro.badge,
      alt: L(s.intro.alt),
    },
    levora: {
      ...base.levora,
      eyebrow: L(s.feature.eyebrow),
      latin: s.feature.latin,
      title: L(s.feature.title),
      body: L(s.feature.body),
      facts: s.feature.facts.map(([v, l]) => [v, L(l)]),
      points: LL(s.feature.points),
      servicesTitle: L(s.feature.servicesTitle),
      services: LL(s.feature.services),
      cta: L(s.feature.cta),
      modalTitle: L(s.feature.cta),
      modalSub: ar
        ? `اترك رقمك ونرسل لك الوحدات المتاحة في ${name} وجدول السداد: ${L(s.offers[0].plan)}.`
        : `Leave your number and we'll send available units in ${name} and the payment schedule: ${L(s.offers[0].plan)}.`,
      alt1: L(s.gallery[0][1]),
      alt2: L(s.gallery[1][1]),
    },
    offers,
    units: {
      ...base.units,
      title: ar ? `أسعار ${name} والوحدات المتاحة` : `${name} prices and availability`,
      sub: ar
        ? `أسعار البداية لكل نوع وحدة في ${full} وفق آخر متاح من أورا. اختر الوحدة واطلب المتاح منها.`
        : `Starting prices for every unit type in ${full}, based on ORA's latest availability. Pick a unit and ask what's available.`,
      wa: (u: string, spec: string, o: string) =>
        ar
          ? `مرحبًا، أرغب في الاستفسار عن ${u} (${spec}) في ${o} — ${name}، وإرسال المتاح وخطة السداد.`
          : `Hello, I'd like to ask about ${u} (${spec}) in ${o} — ${name}. Please send availability and the payment plan.`,
    },
    payment: {
      ...base.payment,
      title: L(s.paymentTitle),
      body: ar
        ? `احسب المقدم والقسط التقريبي لوحدتك في ${name} قبل أن تتحدث مع أحد، ثم اطلب جدول السداد الرسمي من أورا.`
        : `Estimate the down payment and instalment for your unit in ${name} before talking to anyone, then request ORA's official payment schedule.`,
    },
    lifestyle: {
      ...base.lifestyle,
      title: L(s.lifestyle.title),
      sub: L(s.lifestyle.sub),
      tiles: s.lifestyle.tiles.map(([src, t, d]) => [src, L(t), L(d)]),
      amenities: LL(s.lifestyle.amenities),
    },
    mid: {
      ...base.mid,
      title: ar ? `تريد معرفة المتاح حاليًا في ${name}؟` : `Want to know what's available in ${name} right now?`,
      alt: L(s.gallery[0][1]),
    },
    location: {
      ...base.location,
      title: L(s.location.title),
      body: L(s.location.body),
      distances: s.location.distances.map(([t, p]) => [L(t), L(p)]),
      near: LL(s.location.near),
      modalSub: ar
        ? `اترك رقمك ونرسل لك موقع ${name} على واتساب وننسّق معك موعد الزيارة.`
        : `Leave your number and we'll send the ${name} location on WhatsApp and arrange a visit.`,
      mapTitle: ar ? `موقع ${full} على الخريطة` : `${full} on the map`,
    },
    magnet: {
      ...base.magnet,
      title: L(s.magnet.title),
      sub: L(s.magnet.sub),
      modalSub: ar ? `اكتب رقم الواتساب ونرسل لك بروشور ${name} ونماذج الوحدات.` : `Enter your WhatsApp number and we'll send the ${name} brochure and unit layouts.`,
      alt: L(s.gallery[1][1]),
    },
    gallery: {
      ...base.gallery,
      title: ar ? `صور ${full}` : `${full} gallery`,
      items: s.gallery.map(([src, a]) => [src, L(a)]),
      suffix: full,
    },
    developer: { ...base.developer, p2: L(s.developerP2), alt: ar ? `${full} من أورا` : `${full} by ORA` },
    faq: { ...base.faq, title: ar ? `كل ما تحتاج معرفته عن ${name}` : `Everything you need to know about ${name}`, items: faq },
    final: {
      ...base.final,
      title: ar ? `احجز وحدتك في ${full}` : `Reserve your unit in ${full}`,
      sub: L(s.finalSub),
      formSub: ar ? `مستشار متخصص في ${name} يجيب عن كل أسئلتك.` : `A ${name} specialist will answer all your questions.`,
      alt: L(s.gallery[0][1]),
    },
    form: {
      ...base.form,
      options,
      modalSub: ar
        ? `اترك بياناتك ويتواصل معك مستشار ${name} بالتفاصيل الكاملة والوحدات المتاحة.`
        : `Leave your details and a ${name} advisor will contact you with full details and availability.`,
      popupSub: ar
        ? `${name} ${L(s.finalSub)}. اترك رقمك ونرسل لك المتاح على واتساب.`
        : `${name}: ${L(s.finalSub)}. Leave your number and we'll send availability on WhatsApp.`,
      waFallback: (n: string, u: string, p: string) =>
        ar ? `مرحبًا، أنا ${n} ومهتم بـ ${u} في ${name}. رقمي: ${p}` : `Hello, I'm ${n}, interested in ${u} at ${name}. My number: ${p}`,
    },
    wa: ar ? `مرحبًا، أرغب في معرفة أسعار وتفاصيل ${full} من أورا.` : `Hello, I'd like prices and details for ${full} by ORA.`,
    footer: { ...base.footer, copy: ar ? `${full} — صفحة تسويقية.` : `${full} — marketing page.` },
    thanks: {
      ...base.thanks,
      body: ar
        ? `سيتواصل معك أحد مستشاري المبيعات قريبًا لإرسال الوحدات المتاحة والأسعار في ${name}. لرد أسرع تواصل معنا الآن:`
        : `A sales advisor will contact you shortly with available units and prices in ${name}. For a faster reply, reach us now:`,
      wa: ar ? `سجّلت بياناتي على الموقع وأنتظر أسعار ${name}.` : `I registered on the website and I'm waiting for ${name} prices.`,
    },
  };
}

export const EXTRA_KEYS = ["zed-west", "solana-west", "solana-east"] as const;
export type ProjectKey = "zed-east" | (typeof EXTRA_KEYS)[number];

/** كل المشاريع × اللغتين */
export const SITES: Record<ProjectKey, Record<Lang, Dict>> = {
  "zed-east": BASE,
  "zed-west": { ar: build("ar", zedWest), en: build("en", zedWest) },
  "solana-west": { ar: build("ar", solanaWest), en: build("en", solanaWest) },
  "solana-east": { ar: build("ar", solanaEast), en: build("en", solanaEast) },
};

export const isProject = (k: string): k is ProjectKey => k in SITES;
export const PROJECT_KEYS = Object.keys(SITES) as ProjectKey[];
