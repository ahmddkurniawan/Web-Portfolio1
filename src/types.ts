export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  startDate: string;
  endDate: string;
  summary: string;
  responsibilities: string[];
  keySkillTags: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  grade: string;
  year: string;
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'office' | 'excel' | 'analytics';
}

export interface SkillCategory {
  categoryName: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g., 'Mastered', 'Advanced', 'Proficient'
    description?: string;
  }[];
}

export interface WorkHighlight {
  id: string;
  title: string;
  company: string;
  category: string;
  description: string;
  outcomes: string[];
  toolsUsed: string[];
}

export interface WhyWorkPoint {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
}
