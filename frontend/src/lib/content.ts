/**
 * تمام محتوای وب‌سایت شخصی — تنها منبع حقیقت (verified content)
 * فقط محتوای تأییدشده؛ هیچ عدد، نتیجه پرونده یا نظر ساختگی اضافه نشده.
 * برای تغییر متن‌ها همین فایل را ویرایش کنید.
 */

import type {
  Certification,
  Course,
  Education,
  Experience,
  FAQ,
  Project,
  SiteSetting,
  SkillGroup,
} from "@/lib/types";

// ── Identity ───────────────────────────────────────────────────────────────

export const identity = {
  name: "علیرضا افضلی",
  nameEn: "Alireza Afzali",
  title: "کارشناس حقوقی",
  titleEn: "Legal Specialist / Legal Expert",
  tagline: "دانشجوی کارشناسی ارشد حقوق جزا و جرم‌شناسی دانشگاه تهران، پذیرفته‌شده کانون وکلای اصفهان",
  taglineEn: "M.A. student in Criminal Law & Criminology, University of Tehran — Admitted to the Isfahan Bar Association",
  location: "اصفهان، ایران",
  locationEn: "Isfahan, Iran",
  email: "alirezaafzalighorasghani311@gmail.com",
  phone: "09366203966",
} as const;

export const shortBio = `علیرضا افضلی، کارشناس حقوقی با تجربه در تنظیم دادخواست، شکواییه، لایحه و قرارداد، پیگیری امور حقوقی و اجرای احکام، وصول مطالبات، و امور حقوقی کار و بیمه است. او دانش‌آموخته کارشناسی حقوق دانشگاه شاهد تهران (معدل ۱۸)، دانشجوی کارشناسی ارشد حقوق جزا و جرم‌شناسی دانشگاه تهران، و پذیرفته‌شده کانون وکلای اصفهان است. تجربه او شامل دستیاری وکیل، کار حقوقی در شرکت‌ها و وصول مطالبات است. در حال حاضر تحصیل در مقطع ارشد خللی در فعالیت حرفه‌ای او ایجاد نمی‌کند.`;

export const shortBioEn = `Alireza Afzali is a legal specialist with experience in drafting petitions, complaints, legal briefs and contracts, pursuing legal affairs and enforcement, debt recovery, and labor and insurance law. He holds a Bachelor of Laws from Shahed University of Tehran (GPA 18), is an M.A. student in Criminal Law and Criminology at the University of Tehran, and has been admitted to the Isfahan Bar Association. His experience includes legal assistant work, corporate legal affairs, and debt collection. His current master's studies do not interfere with his professional activity.`;

// ── Site settings (SEO, contact links, footer) ───────────────────────────

export const siteSettings: SiteSetting = {
  site_name: "علیرضا افضلی — کارشناس حقوقی",
  seo_title: "علیرضا افضلی | کارشناس حقوقی — حقوق جزا و جرم‌شناسی، دانشگاه تهران",
  seo_description:
    "علیرضا افضلی، کارشناس حقوقی — دانشجوی ارشد حقوق جزا و جرم‌شناسی دانشگاه تهران، پذیرفته‌شده کانون وکلای اصفهان. تجربه در تنظیم دادخواست و قرارداد، پیگیری حقوقی، وصول مطالبات و امور کار و بیمه. اصفهان.",
  primary_phone: "09366203966",
  mobile_phone: "09366203966",
  email: "alirezaafzalighorasghani311@gmail.com",
  whatsapp_url: "https://wa.me/989366203966",
  telegram_url: "",
  instagram_url: "",
  linkedin_url: "",
  footer_note: "اطلاعات این وب‌سایت جنبه معرفی دارد و مشاوره حقوقی محسوب نمی‌شود.",
  disclaimer: "اطلاعات این وب‌سایت صرفاً جهت معرفی حرفه‌ای است و مشاوره حقوقی محسوب نمی‌شود.",
};



// ── Experience (reverse chronological, Jalali) ────────────────────────────

export const experiences: Experience[] = [
  {
    id: "digipay",
    role: "کارشناس وصول مطالبات",
    organization: "دیجی‌پی (DigiPay)",
    kind: "collection",
    dateRange: "۱۴۰۴/۰۸ تا ۱۴۰۵/۰۲",
    note: "کال‌سنتر واحد وصول مطالبات",
    bullets: ["پیگیری وصول مطالبات از طریق تماس و مذاکره", "مستندسازی و پیگیری پرونده‌ها"],
  },
  {
    id: "takbaft",
    role: "کارشناس منابع انسانی",
    organization: "شرکت تک‌بافت",
    kind: "hr",
    dateRange: "۱۴۰۴/۰۸ تا ۱۴۰۵/۰۱",
    note: "کار پروژه‌محور",
    bullets: ["انجام امور منابع انسانی در قالب پروژه"],
  },
  {
    id: "ghassemi",
    role: "دستیار وکیل",
    organization: "دفتر دکتر قاسمی",
    kind: "legal",
    dateRange: "۱۴۰۳/۰۳ تا اکنون",
    bullets: [
      "مشاوره‌های اولیه با مراجعین و پاسخگویی به امور موکلین",
      "تنظیم دادخواست و اظهارنامه",
    ],
  },
  {
    id: "erfan",
    role: "کارشناس حقوقی",
    organization: "شرکت عرفان",
    kind: "legal",
    dateRange: "۱۴۰۲/۰۲ تا ۱۴۰۴/۰۴",
    bullets: [
      "قراردادنویسی، تنظیم شکواییه و لایحه‌نویسی",
      "پیگیری امور حقوقی، امور قرارداد کار و امور بیمه",
    ],
  },
  {
    id: "kabiri",
    role: "دستیار وکیل",
    organization: "دفتر دکتر کبیری شاه‌آباد",
    kind: "legal",
    dateRange: "۱۴۰۲/۰۲ تا ۱۴۰۳/۰۶",
    bullets: ["تنظیم دادخواست، شکواییه و لایحه", "پیگیری موارد مربوط به اجرای احکام"],
  },
];

// ── Skills (grouped by theme) ─────────────────────────────────────────────

export const skillGroups: SkillGroup[] = [
  {
    heading: "تنظیم و پیگیری دعاوی",
    icon: "⚖️",
    items: [
      { title: "تنظیم دادخواست، شکواییه، لایحه و قرارداد", level: "advanced" },
      { title: "توانایی تنظیم لایحه دفاعیه", level: "advanced" },
      { title: "استخراج مدارک و اسناد حقوقی", level: "advanced" },
      { title: "کسب مجوزهای قضایی", level: "advanced" },
      { title: "کار با سیستم‌های قضایی الکترونیکی", level: "professional" },
      { title: "آشنایی با اصول داوری و مددکاری", level: "intermediate" },
    ],
  },
  {
    heading: "قراردادها و حقوق کار",
    icon: "📜",
    items: [
      { title: "قراردادنویسی و تحلیل قرارداد", level: "advanced" },
      { title: "نوشتن قراردادها", level: "advanced" },
      { title: "تسلط بر قانون کار و بیمه", level: "advanced" },
      { title: "آشنایی با قوانین مالیاتی", level: "advanced" },
      { title: "آشنایی با برنامه‌های مدیریت منابع انسانی", level: "intermediate" },
    ],
  },
  {
    heading: "امور کیفری و اسناد تجاری",
    icon: "🛡️",
    items: [
      { title: "تخصص در مسائل کیفری", level: "advanced" },
      { title: "تسلط کامل به اسناد تجاری از جمله چک و راه‌های وصول آن", level: "advanced" },
    ],
  },
  {
    heading: "وصول مطالبات",
    icon: "💼",
    items: [
      { title: "پیگیری وصول مطالبات و مذاکره با بدهکاران", level: "advanced" },
      { title: "استخدام و راهنمایی کارکنان (تیم وصول)", level: "advanced" },
    ],
  },
  {
    heading: "مذاکره و مشاوره",
    icon: "🤝",
    items: [
      { title: "مذاکره و حل اختلاف", level: "advanced" },
      { title: "مذاکره و مصالحه با طرف مقابل", level: "advanced" },
      { title: "ارائه مشاوره حقوقی", level: "advanced" },
      { title: "رسیدگی به شکایت", level: "advanced" },
      { title: "مسئولیت‌پذیری و دقت در ارائه خدمات حقوقی", level: "advanced" },
    ],
  },
  {
    heading: "زبان",
    icon: "🌐",
    items: [{ title: "English — Intermediate (متوسط)", level: "intermediate" }],
  },
];

// Flat skill list for search/filter consumers
export const allSkills = skillGroups.flatMap((g) => g.items);

// ── Education ──────────────────────────────────────────────────────────────

export const educations: Education[] = [
  {
    degree: "کارشناسی ارشد",
    field: "حقوق جزا و جرم‌شناسی",
    university: "دانشگاه تهران",
    dateRange: "۱۴۰۴/۰۸ تا اکنون",
    details: "دانشجوی ارشد؛ تحصیل خللی در فعالیت حرفه‌ای ایجاد نمی‌کند.",
  },
  {
    degree: "کارشناسی",
    field: "حقوق",
    university: "دانشگاه شاهد تهران",
    dateRange: "۱۳۹۹/۰۷ تا ۱۴۰۴/۰۴",
    details: "معدل ۱۸",
  },
];

// ── Certifications & Honors ────────────────────────────────────────────────

export const certifications: Certification[] = [
  { title: "پذیرفته‌شده کانون وکلای اصفهان", issuer: "کانون وکلای دادگستری اصفهان", date: "۱۴۰۴/۰۹" },
  { title: "رتبه ۱۸ کنکور کارشناسی ارشد", issuer: "سازمان سنجش", date: "۱۴۰۴", note: "کنکور ۱۴۰۴" },
];

// ── Projects (generalized, privacy-safe) ──────────────────────────────────

export const projects: Project[] = [
  {
    id: "proteinred",
    title: "وصول مطالبات — شرکت صنایع غذایی",
    dateRange: "۱۴۰۴/۰۸ تا ۱۴۰۴/۱۱",
    summary: "پیگیری وصول مطالبات یک شرکت فعال در حوزه صنایع غذایی.",
  },
  {
    id: "torin",
    title: "پیگیری پرونده‌های حقوقی — واحد تولیدی",
    dateRange: "۱۴۰۵/۰۲ تا اکنون",
    summary: "پیگیری امور حقوقی یک واحد تولیدی (کارگاه).",
  },
  {
    id: "erfan-transport",
    title: "وصول مطالبات — شرکت پیمانکاری حمل‌ونقل",
    dateRange: "۱۴۰۳/۰۳ تا ۱۴۰۳/۱۲",
    summary: "پیگیری وصول مطالبات و حقوق یک شرکت پیمانکاری حمل‌ونقل.",
  },
];

// ── Courses & Training ─────────────────────────────────────────────────────

export const coursesData: Course[] = [
  { id: "tax", title: "دوره مالیاتی", provider: "گروه دادبانان", dateRange: "۱۴۰۳/۰۱ تا ۱۴۰۳/۰۶", category: "tax" },
  { id: "labor", title: "دوره حقوق کار", provider: "گروه دادبانان", dateRange: "۱۴۰۳/۰۱ تا ۱۴۰۳/۰۶", category: "labor" },
  { id: "contracts", title: "دوره قراردادنویسی", provider: "گروه دادبانان", dateRange: "۱۴۰۳/۰۱ تا ۱۴۰۳/۰۶", category: "contracts" },
  { id: "dad", title: "دوره دیوان عدالت اداری", provider: "دانشگاه شاهد", dateRange: "۱۴۰۴/۰۸", category: "administrative" },
];

export const homeFaqs: FAQ[] = [
  { question: "چطور می‌توانم با شما تماس بگیرم؟", answer: "از طریق صفحه تماس، شماره و ایمیل در دسترس است. برای کاهش اسپم، نمایش شماره با کلیک انجام می‌شود.", scope: "home" },
  { question: "آیا مشاوره حقوقی ارائه می‌دهید؟", answer: "اطلاعات وب‌سایت جنبه معرفی دارد و مشاوره حقوقی محسوب نمی‌شود. برای موضوعات خاص با دفتر/مؤسسه مربوطه تماس بگیرید.", scope: "home" },
];
