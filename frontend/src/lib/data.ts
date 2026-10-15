import {
  certifications,
  coursesData,
  educations,
  experiences,
  homeFaqs,
  projects,
  skillGroups,
} from "@/lib/content";
import type {
  Certification,
  Course,
  Education,
  Experience,
  FAQ,
  Project,
  SkillGroup,
} from "@/lib/types";

// Re-export identity pieces directly
export {
  identity,
  shortBio,
  shortBioEn,
  siteSettings,
  experiences,
  skillGroups,
  allSkills,
  educations,
  certifications,
  projects,
  coursesData,
  homeFaqs,
} from "@/lib/content";

// ── Accessors for the personal website ────────────────────────────────────

export function getFaqs(scope?: FAQ["scope"]): FAQ[] {
  return scope ? homeFaqs.filter((f) => f.scope === scope) : homeFaqs;
}

export function getExperiences(): Experience[] {
  return experiences;
}

export function getExperience(id: string): Experience | undefined {
  return experiences.find((e) => e.id === id);
}

export function getSkillGroups(): SkillGroup[] {
  return skillGroups;
}

export function getEducations(): Education[] {
  return educations;
}

export function getCertifications(): Certification[] {
  return certifications;
}

export function getProjects(): Project[] {
  return projects;
}

export function getCoursesData(): Course[] {
  return coursesData;
}
