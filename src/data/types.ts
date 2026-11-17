// Shared types for the ED Nurse Expert Academy content files.
// Mirrors the CVICU Nurse Expert Academy data model exactly.

export type Lesson = {
  id: string;
  title: string;
  durationMinutes: number;
  sections: { heading: string; content: string }[];
  bedsideCues: string[];
  assessmentSequence: string[];
  safetyPoints: string[];
  workedExample: {
    context: string;
    action: string;
    outcome: string;
  };
  activity: {
    prompt: string;
    type: "reflection" | "calculation" | "interpretation";
  };
  knowledgeCheck: {
    question: string;
    options: string[];
    answerIndex: number;
    rationale: string;
  };
};

export type ModuleContent = {
  moduleId: string;
  lessons: Lesson[];
};

export type CaseClinicalDetail = {
  history: string[];
  currentSupport: string[];
  initialAssessment: string[];
  trend: { time: string; findings: string[] }[];
  diagnostics: string[];
  decisionPoints: { prompt: string; coaching: string }[];
  calculations: { prompt: string; answer: string }[];
  escalation: string;
  fullDebrief: { heading: string; content: string }[];
};

export type CaseStudy = {
  id: string;
  acuity: "High acuity" | "Moderate acuity" | "Foundational";
  title: string;
  diagnosis: string;
  setting: string;
  summary: string;
  tags: string[];
  prompt: string;
  debrief: string[];
  detail: CaseClinicalDetail;
};
