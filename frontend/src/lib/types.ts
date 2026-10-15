/* Identity & Bio — single source of truth, verified from resume only */

export type Locale = "fa" | "en";
export type SkillLevel = "advanced" | "professional" | "intermediate";
export type ExperienceKind = "legal" | "hr" | "collection";
export type FaqScope = "home" | "general";
export type CourseCategory = "tax" | "labor" | "contracts" | "administrative";

/** FAQ — general purpose */
export type FAQ = { question: string; answer: string; scope: FaqScope };

/** Skill with level */
export type Skill = { title: string; level: SkillLevel };

/** Skill group for themed display */
export type SkillGroup = {
  heading: string;
  icon: string;
  items: Skill[];
};

/** Experience entry — reverse chronological */
export type Experience = {
  id: string;
  role: string;
  organization: string;
  kind: ExperienceKind;
  dateRange: string; // Jalali, e.g. "۱۴۰۴/۰۸ تا اکنون" or "۱۴۰۴/۰۸ – ۱۴۰۵/۰۲"
  location?: string;
  note?: string; // e.g. "کار پروژه‌محور", "کال‌سنتر واحد وصول مطالبات"
  bullets: string[]; // 1-3 factual bullets
};

/** Education entry */
export type Education = {
  degree: string;
  field: string;
  university: string;
  dateRange: string; // Jalali
  details?: string; // e.g. "معدل ۱۸"
};

/** Certification / Honor */
export type Certification = {
  title: string;
  issuer: string;
  date: string; // Jalali, e.g. "۱۴۰۴/۰۹"
  note?: string;
};

/** Generalized project — privacy-safe */
export type Project = {
  id: string;
  title: string;
  dateRange: string;
  summary: string;
};

/** Course & Training */
export type Course = {
  id: string;
  title: string;
  provider: string;
  dateRange: string;
  category: CourseCategory;
};

export type SiteSetting = {
  site_name: string;
  seo_title: string;
  seo_description: string;
  primary_phone: string;
  mobile_phone: string;
  email: string;
  whatsapp_url: string;
  telegram_url: string;
  instagram_url: string;
  linkedin_url: string;
  footer_note: string;
  disclaimer: string;
};
