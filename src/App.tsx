import { useEffect, useMemo, useState } from 'react';
import { Activity, ArrowLeft, ArrowRight, BookOpen, Bookmark, BrainCircuit, Check, ChevronDown, ChevronRight, ChevronUp, CircleHelp, Clock3, Crosshair, ExternalLink, FlaskConical, HeartPulse, Library, LockKeyhole, Menu, MonitorCog, Network, Pause, Play, Search, ShieldCheck, SlidersHorizontal, Sparkles, Stethoscope, Target, TrendingUp, UserRound, X, Zap } from 'lucide-react';
import { Link, Route, Router as WouterRouter, Switch, useLocation, useParams } from 'wouter';
import { MODULE_CONTENTS } from './data/module-content';

type Module = { id: string; number: string; title: string; phase: string; description: string; lessons: number; minutes: number; progress: number; status: 'complete' | 'active' | 'locked'; accent: string; objectives: string[] };
type Question = { id: string; domain: string; difficulty: 'Foundational' | 'Intermediate' | 'Advanced'; stem: string; choices: string[]; answer: number; rationale: string };
type CaseClinicalDetail = {
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
type CaseStudy = { id: string; acuity: 'High acuity' | 'Moderate acuity' | 'Foundational'; title: string; diagnosis: string; setting: string; summary: string; tags: string[]; prompt: string; debrief: string[]; detail: CaseClinicalDetail };
type Resource = { id: string; name: string; category: string; type: 'Medication / drip' | 'Equipment'; snapshot: string; details: string[]; caution: string };
type ProgressState = { completedModules: string[]; dailyDone: boolean; answers: { questionId: string; domain: string; correct: boolean; difficulty: string }[] };

const MODULES: Module[] = [
  { id: 'ed-foundations', number: '01', title: 'Foundations of Emergency Nursing', phase: 'Foundations', description: 'Learn the ED nurse\'s role, EMTALA, triage and the Emergency Severity Index, the ABCDE primary survey, ED flow, focused assessment, documentation, and communication.', lessons: 8, minutes: 36, progress: 0, status: 'active', accent: 'teal', objectives: ['Sort patients by acuity with the Emergency Severity Index', 'Run the ABCDE primary survey in the first five minutes', 'Hand off with SBAR and closed-loop communication'] },
  { id: 'ed-cardiac', number: '02', title: 'Cardiac Emergencies', phase: 'Cardiac, respiratory & trauma', description: 'Chest pain, heart attack care and STEMI, EKG essentials, dangerous rhythms, cardiac arrest, post-ROSC care, hypertensive emergencies, and heart failure.', lessons: 8, minutes: 32, progress: 0, status: 'locked', accent: 'coral', objectives: ['Get a 12-lead EKG within 10 minutes for chest pain', 'Recognize STEMI and activate the cath lab early', 'Know your role in the code and after ROSC'] },
  { id: 'ed-respiratory', number: '03', title: 'Respiratory Emergencies and Airway', phase: 'Cardiac, respiratory & trauma', description: 'Hypoxia and oxygen therapy, airway basics and assisting with intubation, asthma and COPD, capnography and ABGs, pulmonary embolism, chest tubes, and anaphylaxis.', lessons: 7, minutes: 28, progress: 0, status: 'locked', accent: 'sky', objectives: ['Titrate oxygen to target and recognize rising work of breathing', 'Assist with airway management and rapid sequence intubation', 'Give epinephrine first in anaphylaxis'] },
  { id: 'ed-trauma', number: '04', title: 'Trauma', phase: 'Cardiac, respiratory & trauma', description: 'The trauma survey, hemorrhage and shock, head injury, chest and abdominal trauma, fractures and splinting, burns, and wound care.', lessons: 7, minutes: 24, progress: 0, status: 'locked', accent: 'gold', objectives: ['Run the primary and secondary trauma survey as a team', 'Control bleeding and recognize shock early', 'Perform neurovascular checks after every fracture and splint'] },
  { id: 'ed-neurologic', number: '05', title: 'Neurologic Emergencies', phase: 'Neurologic, medical & toxicology', description: 'Stroke and BE-FAST, seizures and status epilepticus, altered mental status, headache red flags, and meningitis.', lessons: 5, minutes: 20, progress: 0, status: 'locked', accent: 'violet', objectives: ['Act on stroke within the thrombolytic window', 'Protect the airway during a seizure and time the meds', 'Work up altered mental status with AEIOU-TIPS'] },
  { id: 'ed-gi-metabolic-sepsis', number: '06', title: 'GI, GU and Metabolic Emergencies; Sepsis', phase: 'Neurologic, medical & toxicology', description: 'Abdominal pain red flags, GI bleeding, DKA and glucose emergencies, electrolyte emergencies, kidney and urinary emergencies, sepsis, and IV fluids.', lessons: 7, minutes: 28, progress: 0, status: 'locked', accent: 'teal', objectives: ['Recognize sepsis and start the one-hour bundle', 'Manage DKA and dangerous potassium shifts safely', 'Choose IV fluids and reassess after every bolus'] },
  { id: 'ed-toxicology', number: '07', title: 'Toxicology and Environmental Emergencies', phase: 'Neurologic, medical & toxicology', description: 'Overdose and toxidromes, acetaminophen and salicylate poisoning, alcohol withdrawal, heat stroke and hypothermia, and bites and stings.', lessons: 5, minutes: 20, progress: 0, status: 'locked', accent: 'coral', objectives: ['Recognize toxidromes and give naloxone for opioid overdose', 'Time antidotes to levels and ingestion time', 'Score alcohol withdrawal and watch for seizures'] },
  { id: 'ed-ob-peds', number: '08', title: 'OB/GYN and Pediatric Emergencies', phase: 'Special populations & core skills', description: 'Pregnancy emergencies, imminent delivery, sexual assault care, the Pediatric Assessment Triangle, pediatric fever and common emergencies, and weight-based dosing.', lessons: 6, minutes: 27, progress: 0, status: 'locked', accent: 'sky', objectives: ['Recognize ectopic pregnancy and preeclampsia red flags', 'Assess a sick child in ten seconds with the Pediatric Assessment Triangle', 'Dose everything by weight and double-check'] },
  { id: 'ed-behavioral', number: '09', title: 'Behavioral Health and Safety in the ED', phase: 'Special populations & core skills', description: 'Verbal de-escalation for the agitated patient, suicide risk screening and safety, and restraints and workplace violence.', lessons: 3, minutes: 12, progress: 0, status: 'locked', accent: 'gold', objectives: ['De-escalate before reaching for medication or restraints', 'Screen for suicide risk and keep the patient safe', 'Use restraints only as a last resort, with an order and monitoring'] },
  { id: 'ed-core-skills', number: '10', title: 'Core ED Skills and Professional Practice', phase: 'Special populations & core skills', description: 'Vascular access and labs, medication safety and procedural sedation, blood transfusion, and disaster triage, death notification, and surviving your first year.', lessons: 4, minutes: 25, progress: 0, status: 'locked', accent: 'violet', objectives: ['Get access and cultures right the first time', 'Handle high-alert meds and sedation monitoring safely', 'Triage a mass casualty and deliver a death notification with care'] },
];

const ALL_MODULE_CONTENTS = MODULE_CONTENTS;

const BASE_QUESTIONS: Question[] = [
  { id: 'q1', domain: 'Foundations', difficulty: 'Foundational', stem: 'A man with crushing chest pain and sweating is triaged ESI 2 (Emergency Severity Index level 2, emergent). A woman with a sprained ankle is triaged ESI 5 (nonurgent). One bed opens. Who gets it?', choices: ['The ankle sprain, because she arrived first', 'The chest-pain patient, because ESI 2 is higher acuity than ESI 5', 'Whoever the charge nurse likes more', 'Split the bed between them'], answer: 1, rationale: 'Lower ESI numbers mean higher acuity. ESI 2 needs rapid evaluation; ESI 5 can safely wait.' },
  { id: 'q2', domain: 'Cardiac', difficulty: 'Foundational', stem: 'A patient arrives with crushing chest pain. What must happen within 10 minutes of arrival?', choices: ['A troponin result', 'A 12-lead EKG (electrocardiogram)', 'A chest X-ray', 'A cardiology consult'], answer: 1, rationale: 'The 12-lead EKG within 10 minutes decides whether this is a STEMI and whether the cath lab activates. Troponin takes longer and must not delay the EKG.' },
  { id: 'q3', domain: 'Cardiac', difficulty: 'Intermediate', stem: 'A patient with an inferior STEMI (ST-elevation heart attack) is hypotensive with clear lungs and a high jugular venous pressure. Why is nitroglycerin risky here?', choices: ['It raises the heart rate too much', 'It drops preload, and a right ventricular infarct depends on preload to fill', 'It thins the blood too quickly', 'It causes a severe allergic reaction'], answer: 1, rationale: 'Nitroglycerin reduces preload. In right ventricular infarction the ventricle needs filling pressure to pump; dropping preload can crash the blood pressure.' },
  { id: 'q4', domain: 'Respiratory', difficulty: 'Foundational', stem: 'A patient’s lips are swelling, voice is changing, and breathing is becoming noisy minutes after a bee sting. What is the first medication?', choices: ['Diphenhydramine (Benadryl)', 'Epinephrine (adrenaline) intramuscular', 'Albuterol nebulizer', 'Methylprednisolone (steroid)'], answer: 1, rationale: 'Anaphylaxis is a severe whole-body allergic reaction. Epinephrine comes first — antihistamines and steroids are slower and never replace it.' },
  { id: 'q5', domain: 'Neurologic', difficulty: 'Intermediate', stem: 'A patient has sudden left-sided weakness and slurred speech. Last known well was 90 minutes ago. What single fact most affects whether thrombolytics can be given?', choices: ['The patient’s age', 'The exact last-known-well time', 'Whether the patient ate breakfast', 'The patient’s insurance status'], answer: 1, rationale: 'Thrombolytic eligibility depends on time from last known well. Ninety minutes is inside the window, but the clock keeps running — do not delay the CT scan.' },
  { id: 'q6', domain: 'Sepsis', difficulty: 'Intermediate', stem: 'A patient meets sepsis criteria with a lactate of 4.2 mmol/L. What is the correct order for the first hour?', choices: ['Antibiotics first, then cultures whenever convenient', 'Blood cultures first, then broad-spectrum antibiotics, plus lactate, fluids, and reassessment', 'IV fluids only, then reassess tomorrow', 'Wait for the blood culture result before antibiotics'], answer: 1, rationale: 'Cultures come before antibiotics so the infection can be identified, but antibiotics must not wait long. The one-hour bundle pairs cultures, antibiotics, lactate, fluids, and reassessment.' },
  { id: 'q7', domain: 'Trauma', difficulty: 'Foundational', stem: 'A trauma patient is bleeding heavily from a leg wound. What is the first bleeding-control step?', choices: ['Start a large-bore IV before touching the wound', 'Apply direct pressure to the wound', 'Give a blood transfusion immediately', 'Order a CT scan'], answer: 1, rationale: 'Direct pressure stops external bleeding while access and transfusion are prepared. Bleeding control comes before imaging.' },
  { id: 'q8', domain: 'Pediatric', difficulty: 'Foundational', stem: 'The Pediatric Assessment Triangle judges a sick child in ten seconds using three parts. Which three?', choices: ['Temperature, heart rate, and blood pressure', 'Appearance, work of breathing, and circulation to the skin', 'Weight, height, and age', 'Pain score, oxygen saturation, and glucose'], answer: 1, rationale: 'Appearance, work of breathing, and circulation to the skin (color, mottling) tell you sick versus not sick before you touch the child.' },
  { id: 'q9', domain: 'Toxicology', difficulty: 'Intermediate', stem: 'A patient is found barely breathing with pinpoint pupils after an opioid overdose. You give naloxone and breathing improves, then slows again after 30 minutes. What is the most likely reason?', choices: ['The naloxone dose was too large', 'Naloxone wears off sooner than most opioids, so the overdose returns', 'The patient developed an allergy to naloxone', 'The opioid was fully reversed permanently'], answer: 1, rationale: 'Naloxone lasts 30 to 90 minutes while many opioids last longer. Watch breathing continuously and be ready to repeat the dose.' },
  { id: 'q10', domain: 'Behavioral', difficulty: 'Foundational', stem: 'A patient is shouting, pacing, and clenching fists in the waiting room. What is the best first response?', choices: ['Apply restraints immediately', 'Use calm verbal de-escalation: lower your voice, give space, offer choices', 'Leave the patient alone in a locked room', 'Give a sedative by injection right away'], answer: 1, rationale: 'Verbal de-escalation comes first. Restraints and forced medication are last resorts for imminent danger, never for being loud.' },
];

const questionContexts = [
  'During morning assessment',
  'Following bedside handoff',
  'After a change in the monitor trend',
  'While preparing an SBAR escalation',
  'During reassessment after an intervention',
  'In the first hour after transfer',
  'While reviewing the overnight trend',
  'During a focused safety check',
];

const difficultyLevels: Question['difficulty'][] = ['Foundational', 'Intermediate', 'Advanced'];

const QUESTIONS: Question[] = Array.from({ length: 400 }, (_, index) => {
  const source = BASE_QUESTIONS[index % BASE_QUESTIONS.length];
  const context = questionContexts[Math.floor(index / BASE_QUESTIONS.length) % questionContexts.length];
  const difficulty = difficultyLevels[index % difficultyLevels.length];
  return {
    ...source,
    id: `q-${String(index + 1).padStart(3, '0')}`,
    difficulty,
    stem: `${context}, ${source.stem.charAt(0).toLowerCase()}${source.stem.slice(1)}`,
  };
});

import { BASE_CASES, CASE_DETAILS } from './data/ed-cases';



const caseContexts = [
  { age: 44, timing: 'during admission stabilization' },
  { age: 52, timing: 'after a change in vasoactive support' },
  { age: 61, timing: 'during the first focused reassessment' },
  { age: 67, timing: 'following interdisciplinary rounds' },
  { age: 73, timing: 'after bedside handoff' },
  { age: 79, timing: 'during overnight surveillance' },
  { age: 56, timing: 'while preparing for mobility' },
  { age: 70, timing: 'after a new laboratory result' },
];

const CASES: CaseStudy[] = Array.from({ length: 200 }, (_, index) => {
  const source = BASE_CASES[index % BASE_CASES.length];
  const context = caseContexts[Math.floor(index / BASE_CASES.length) % caseContexts.length];
  return {
    ...source,
    detail: CASE_DETAILS[source.id],
    id: `case-${String(index + 1).padStart(3, '0')}`,
    title: `${source.title} · ${String(index + 1).padStart(3, '0')}`,
    summary: `A ${context.age}-year-old ${source.summary.replace(/^A \d+-year-old /, '')} The change is recognized ${context.timing}.`,
  };
});

const BASE_RESOURCES: Resource[] = [
  { id: 'r1', name: 'Epinephrine', category: 'Anaphylaxis / cardiac arrest', type: 'Medication / drip', snapshot: 'First-line drug for anaphylaxis and a core cardiac arrest medication.', details: ['Give intramuscularly in the lateral thigh for anaphylaxis; do not delay for IV access.', 'In cardiac arrest, give 1 mg IV every 3 to 5 minutes per ACLS.', 'Expect tachycardia and hypertension; monitor rhythm and blood pressure.'], caution: 'Never delay epinephrine in anaphylaxis to gather antihistamines or steroids.' },
  { id: 'r2', name: 'Naloxone', category: 'Opioid reversal', type: 'Medication / drip', snapshot: 'Reverses opioid overdose by blocking opioid receptors.', details: ['Give intranasally or IV; repeat doses are often needed.', 'Naloxone wears off in 30 to 90 minutes — keep watching breathing.', 'Titrate to breathing, not full wakefulness, to avoid sudden withdrawal.'], caution: 'A patient who wakes up can become agitated and can re-overdose as naloxone wears off.' },
  { id: 'r3', name: 'Aspirin', category: 'Antiplatelet', type: 'Medication / drip', snapshot: 'Chewable aspirin for suspected acute coronary syndrome.', details: ['Give 325 mg chewed as ordered, unless allergic or actively bleeding.', 'Document the time given; the cath lab team needs it.', 'Ask about prior aspirin use and bleeding risk.'], caution: 'Do not give if the patient has a true aspirin allergy or active major bleeding.' },
  { id: 'r4', name: 'Nitroglycerin', category: 'Vasodilator', type: 'Medication / drip', snapshot: 'Reduces preload and chest pain in selected cardiac patients.', details: ['Check blood pressure before every dose; hold if hypotensive.', 'Ask about Viagra or Cialis use in the last 24 to 48 hours.', 'Recheck pain and pressure after each dose.'], caution: 'Dangerous in hypotension, inferior MI with right ventricular involvement, and after recent PDE-5 inhibitor use.' },
  { id: 'r5', name: 'Albuterol', category: 'Bronchodilator', type: 'Medication / drip', snapshot: 'Opens airways in asthma and COPD exacerbations.', details: ['Give by nebulizer or metered-dose inhaler with a spacer.', 'Expect a faster heart rate and shaking hands.', 'Reassess work of breathing and oxygen after each treatment.'], caution: 'A quiet chest in a struggling asthmatic can mean almost no air movement — escalate, do not wait.' },
  { id: 'r6', name: 'Methylprednisolone', category: 'Steroid', type: 'Medication / drip', snapshot: 'Reduces airway inflammation in asthma and COPD.', details: ['Give early; steroids take hours to work.', 'Check blood sugar — steroids raise glucose.', 'Confirm the ordered dose and route.'], caution: 'Steroids help over hours, not minutes — they never replace a bronchodilator or oxygen.' },
  { id: 'r7', name: 'Magnesium sulfate', category: 'Electrolyte / bronchodilator', type: 'Medication / drip', snapshot: 'Used for severe asthma and dangerous magnesium or potassium shifts.', details: ['Give IV over the ordered time with a pump.', 'Watch blood pressure, reflexes, and breathing.', 'Recheck the level and the rhythm after the dose.'], caution: 'Too fast or too much can drop blood pressure and breathing — follow the ordered rate.' },
  { id: 'r8', name: 'Etomidate', category: 'RSI induction', type: 'Medication / drip', snapshot: 'Induction agent for rapid sequence intubation.', details: ['Works in seconds; the patient needs a paralytic and a ventilator plan right after.', 'Have suction, oxygen, and a backup airway ready.', 'Expect a brief blood pressure dip in some patients.'], caution: 'Only the airway team gives induction agents — the ED nurse prepares, monitors, and speaks up about falling oxygen.' },
];

const RESOURCES: Resource[] = [
  ...BASE_RESOURCES,
  { id: 'r9', name: 'Rocuronium', category: 'RSI paralytic', type: 'Medication / drip', snapshot: 'Paralyzes for intubation when the airway team orders it.', details: ['Onset in about a minute; the patient cannot breathe on their own after it.', 'Confirm the airway plan and backup equipment before it is given.', 'Monitor the patient continuously until the airway is secured.'], caution: 'Never give a paralytic without a working airway plan and someone able to intubate.' },
  { id: 'r10', name: 'Tranexamic acid (TXA)', category: 'Antifibrinolytic', type: 'Medication / drip', snapshot: 'Helps blood clot in major trauma bleeding.', details: ['Most effective when given within 3 hours of injury.', 'Give by IV infusion per the trauma protocol.', 'Document the injury time and the dose time.'], caution: 'Late TXA may not help — the clock starts at injury, not arrival.' },
  { id: 'r11', name: 'Calcium gluconate', category: 'Hyperkalemia', type: 'Medication / drip', snapshot: 'Stabilizes the heart in severe hyperkalemia.', details: ['Give IV slowly with a pump and continuous ECG monitoring.', 'It protects the heart but does not lower potassium.', 'Recheck the ECG and potassium after the dose.'], caution: 'Do not mix with bicarbonate in the same line; extravasation injures tissue.' },
  { id: 'r12', name: 'Insulin and dextrose', category: 'Hyperkalemia', type: 'Medication / drip', snapshot: 'Shifts potassium into cells to lower the blood level.', details: ['Give regular insulin IV with dextrose to prevent low sugar.', 'Check glucose before and after, and keep watching for hypoglycemia.', 'Recheck potassium at the ordered time.'], caution: 'Hypoglycemia can follow hours later — keep glucose checks going.' },
  { id: 'r13', name: 'Atropine', category: 'Bradycardia', type: 'Medication / drip', snapshot: 'First drug for symptomatic bradycardia in ACLS.', details: ['Give 1 mg IV every 3 to 5 minutes up to 3 mg.', 'It treats a slow rate, not the cause — keep looking for it.', 'Watch for a faster heart rate and dry mouth.'], caution: 'Atropine may not work in a transplanted heart or high-grade block — prepare for pacing.' },
  { id: 'r14', name: 'Adenosine', category: 'SVT', type: 'Medication / drip', snapshot: 'Resets supraventricular tachycardia to sinus rhythm.', details: ['Give as a rapid IV push followed immediately by a saline flush.', 'Warn the patient about brief chest pressure and a strange feeling.', 'Record the rhythm strip during the push.'], caution: 'The drug lasts seconds — a slow push or a long line wastes the dose.' },
  { id: 'r15', name: 'Alteplase', category: 'Thrombolytic', type: 'Medication / drip', snapshot: 'Clot-busting drug for selected stroke and STEMI care.', details: ['Eligibility depends on last-known-well time and bleeding risk.', 'Two nurses verify the dose and the infusion plan.', 'Watch for bleeding and sudden neurologic change.'], caution: 'Never give without confirming the time window, weight, and contraindications with the team.' },
  { id: 'r16', name: 'Ketamine', category: 'Sedation / analgesia', type: 'Medication / drip', snapshot: 'Dissociative sedative for painful procedures and agitation.', details: ['Monitor airway, breathing, oxygen, and capnography continuously.', 'Have suction and a dedicated monitor nurse.', 'Expect a fast heart rate and higher blood pressure.'], caution: 'Sedation can deepen fast — never leave the patient unmonitored.' },
  { id: 'r17', name: 'Defibrillator', category: 'Emergency rhythm support', type: 'Equipment', snapshot: 'Delivers shocks and pacing for arrest rhythms.', details: ['Know the unit location, pads, and self-test status.', 'Confirm the rhythm and pulse before shock or pacing.', 'Use closed-loop communication during a code.'], caution: 'Follow current ACLS guidance — a shockable rhythm needs a shock, not a drug first.' },
  { id: 'r18', name: '12-lead ECG', category: 'Diagnostic monitoring', type: 'Equipment', snapshot: 'Captures the heart’s electrical tracing for ischemia and rhythm.', details: ['Obtain within 10 minutes for chest pain.', 'Confirm lead placement and note symptoms at capture.', 'Compare with prior ECGs and report the change.'], caution: 'A normal EKG does not rule out an evolving heart attack.' },
  { id: 'r19', name: 'Bag-valve-mask', category: 'Airway / ventilation', type: 'Equipment', snapshot: 'Hand-ventilates a patient who cannot breathe adequately.', details: ['Use the right mask size and a tight seal.', 'Squeeze slowly — about one breath every 6 seconds in adults.', 'Attach oxygen and watch chest rise and capnography.'], caution: 'Over-ventilation raises chest pressure and drops blood return to the heart.' },
  { id: 'r20', name: 'Suction unit', category: 'Airway', type: 'Equipment', snapshot: 'Clears blood, vomit, and secretions from the airway.', details: ['Test it at the bedside before you need it.', 'Suction only as far as you can see in the mouth.', 'Keep the Yankauer tip within reach during every airway case.'], caution: 'Suctioning can trigger vomiting and low oxygen — keep it brief and re-oxygenate.' },
  { id: 'r21', name: 'Video laryngoscope', category: 'Airway', type: 'Equipment', snapshot: 'Lets the airway team see the vocal cords on a screen during intubation.', details: ['Check the light, camera, and blade before the attempt.', 'Have a backup plan and backup equipment ready.', 'Call out oxygen saturation during the attempt.'], caution: 'A screen view does not guarantee a tube in the trachea — confirm with capnography.' },
  { id: 'r22', name: 'Capnography monitor', category: 'Monitoring', type: 'Equipment', snapshot: 'Shows exhaled carbon dioxide with every breath.', details: ['A flat line can mean a tube in the esophagus — act immediately.', 'Trend the waveform during CPR and after intubation.', 'Report a falling number with falling perfusion.'], caution: 'Never accept a tube placement without a capnography waveform.' },
  { id: 'r23', name: 'Broselow tape', category: 'Pediatrics', type: 'Equipment', snapshot: 'Length-based tape that estimates a child’s weight for dosing.', details: ['Lay it beside the child from head to heel.', 'Read the color zone for doses and equipment sizes.', 'Weigh the child in kilograms when possible and confirm.'], caution: 'An estimate is a backup — a real measured weight beats the tape.' },
  { id: 'r24', name: 'IO driver (EZ-IO)', category: 'Vascular access', type: 'Equipment', snapshot: 'Drills a needle into bone for fluids and drugs when IV access fails.', details: ['Use it in a critical patient when IV access fails fast.', 'Confirm placement by aspiration and easy flush.', 'Secure it and monitor the limb for swelling.'], caution: 'Never delay resuscitation waiting for a peripheral IV in a crashing patient.' },
  { id: 'r25', name: 'Pelvic binder', category: 'Trauma', type: 'Equipment', snapshot: 'Compresses a broken pelvis to slow internal bleeding.', details: ['Apply at the level of the greater trochanters.', 'Check skin and distal pulses after applying.', 'Document the time applied and tell the trauma team.'], caution: 'A binder placed too high on the belly does not compress the pelvis.' },
  { id: 'r26', name: 'Tourniquet', category: 'Hemorrhage control', type: 'Equipment', snapshot: 'Stops life-threatening limb bleeding by compressing the artery.', details: ['Place high on the limb and tighten until bleeding stops.', 'Write the application time on the tourniquet.', 'Do not loosen it in the field or the ED without a plan.'], caution: 'A loose tourniquet makes bleeding worse — tighten until it stops.' },
];

const DEFAULT_PROGRESS: ProgressState = { completedModules: [], dailyDone: false, answers: [] };
const phases = ['Foundations', 'Cardiac, respiratory & trauma', 'Neurologic, medical & toxicology', 'Special populations & core skills'];
const navItems = [
  { href: '/', label: 'Overview', icon: Activity, testId: 'link-overview' },
  { href: '/learn', label: 'Learn', icon: BookOpen, testId: 'link-learn' },
  { href: '/library', label: 'Reference library', icon: Library, testId: 'link-library' },
  { href: '/cases', label: 'Case studies', icon: BrainCircuit, testId: 'link-cases' },
  { href: '/practice', label: 'Practice', icon: Target, testId: 'link-practice' },
  { href: '/progress', label: 'My progress', icon: TrendingUp, testId: 'link-progress' },
];

function cn(...values: (string | false | undefined)[]) { return values.filter(Boolean).join(' '); }
function readProgress(): ProgressState {
  try { return JSON.parse(localStorage.getItem('ed-progress') || JSON.stringify(DEFAULT_PROGRESS)); } catch { return DEFAULT_PROGRESS; }
}
function saveProgress(next: ProgressState) { localStorage.setItem('ed-progress', JSON.stringify(next)); }

function Badge({ children, tone = 'neutral' }: { children: string; tone?: 'neutral' | 'teal' | 'coral' | 'gold' | 'sky' | 'violet' }) {
  return <span className={cn('inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold tracking-[.04em]', tone === 'teal' && 'bg-teal-50 text-teal-800', tone === 'coral' && 'bg-orange-50 text-orange-800', tone === 'gold' && 'bg-amber-50 text-amber-800', tone === 'sky' && 'bg-sky-50 text-sky-800', tone === 'violet' && 'bg-violet-50 text-violet-800', tone === 'neutral' && 'bg-slate-100 text-slate-600')}>{children}</span>;
}

function Button({ children, variant = 'primary', className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'outline' | 'quiet' | 'coral' }) {
  return <button {...props} className={cn('inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold transition-transform duration-200 active:scale-[.98] disabled:cursor-not-allowed disabled:opacity-45', variant === 'primary' && 'bg-[hsl(var(--primary))] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[hsl(174_55%_26%)]', variant === 'outline' && 'border border-[hsl(var(--border))] bg-white text-[hsl(var(--foreground))] hover:-translate-y-0.5 hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))]', variant === 'quiet' && 'text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))] hover:text-[hsl(var(--foreground))]', variant === 'coral' && 'bg-[hsl(var(--accent))] text-white shadow-sm hover:-translate-y-0.5', className)}>{children}</button>;
}

function ProgressRing({ value, size = 62 }: { value: number; size?: number }) {
  return <div className="relative shrink-0" style={{ width: size, height: size }} aria-label={`${value}% complete`} data-testid={`progress-ring-${value}`}>
    <div className="absolute inset-0 rounded-full" style={{ background: `conic-gradient(hsl(var(--primary)) ${value * 3.6}deg, hsl(var(--muted)) 0deg)` }} />
    <div className="absolute inset-[5px] flex items-center justify-center rounded-full bg-white"><span className="font-mono-clinical text-[11px] font-bold text-[hsl(var(--primary))]">{value}%</span></div>
  </div>;
}

function BrandMark() {
  return <div className="flex items-center gap-3" data-testid="brand-mark">
    <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[hsl(var(--sidebar-primary))] text-[hsl(var(--sidebar-primary-foreground))]">
      <HeartPulse size={22} strokeWidth={2.5} />
      <span className="absolute bottom-1 left-2 right-2 h-px bg-current opacity-30" />
    </div>
    <div><p className="font-display text-[15px] font-bold tracking-[-.02em] text-white">ED Academy</p><p className="font-mono-clinical text-[9px] uppercase tracking-[.16em] text-slate-400">Nurse expert pathway</p></div>
  </div>;
}

function Sidebar({ mobileOpen, setMobileOpen }: { mobileOpen: boolean; setMobileOpen: (value: boolean) => void }) {
  const [location] = useLocation();
  return <aside className={cn('fixed inset-y-0 left-0 z-40 flex w-[264px] flex-col bg-[hsl(var(--sidebar))] px-4 py-5 text-[hsl(var(--sidebar-foreground))] transition-transform duration-300 lg:translate-x-0', mobileOpen ? 'translate-x-0' : '-translate-x-full')} data-testid="navigation-sidebar">
    <div className="mb-9 flex items-center justify-between px-2"><Link href="/" onClick={() => setMobileOpen(false)} data-testid="link-brand"><BrandMark /></Link><button className="rounded-md p-1 text-slate-400 lg:hidden" onClick={() => setMobileOpen(false)} aria-label="Close navigation" data-testid="button-close-navigation"><X size={18} /></button></div>
    <div className="mb-3 px-3 font-mono-clinical text-[9px] font-bold uppercase tracking-[.2em] text-slate-500">Your workspace</div>
    <nav className="space-y-1" aria-label="Primary navigation">
      {navItems.map(({ href, label, icon: Icon, testId }) => {
        const active = href === '/' ? location === '/' : location === href || location.startsWith(`${href}/`);
        return <Link key={href} href={href} onClick={() => setMobileOpen(false)} data-testid={testId} className={cn('group flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors', active ? 'bg-[hsl(var(--sidebar-accent))] text-white' : 'text-slate-400 hover:bg-[hsl(var(--sidebar-accent))] hover:text-white')}><Icon size={17} className={active ? 'text-[hsl(var(--sidebar-primary))]' : 'text-slate-500 group-hover:text-slate-300'} /><span>{label}</span>{active && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-[hsl(var(--sidebar-primary))]" />}</Link>;
      })}
    </nav>
    <div className="mt-auto space-y-4">
      <div className="rounded-xl border border-[hsl(var(--sidebar-border))] bg-[hsl(215_31%_20%/.6)] p-4">
        <div className="mb-3 flex items-center gap-2 text-[hsl(var(--sidebar-primary))]"><ShieldCheck size={16} /><span className="text-[11px] font-bold uppercase tracking-[.08em]">Clinical standard</span></div>
        <p className="text-xs leading-5 text-slate-400">Built for deliberate practice, supervised learning, and safer handoffs.</p>
      </div>
      <div className="flex items-center gap-3 border-t border-[hsl(var(--sidebar-border))] px-2 pt-4"><div className="flex h-9 w-9 items-center justify-center rounded-full bg-[hsl(var(--sidebar-accent))] text-sm font-bold text-[hsl(var(--sidebar-primary))]">DC</div><div><p className="text-sm font-bold text-slate-200">Derrick Collins, RN</p><p className="font-mono-clinical text-[9px] uppercase tracking-[.12em] text-slate-500">New to the ED</p></div><button className="ml-auto text-slate-500 hover:text-white" aria-label="Profile options" data-testid="button-profile-options"><UserRound size={15} /></button></div>
    </div>
  </aside>;
}

function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const titles: Record<string, string> = { '/': 'Overview', '/learn': 'Learning pathway', '/library': 'Reference library', '/cases': 'Case study bank', '/practice': 'Adaptive practice', '/progress': 'My progress' };
  const detail = location.startsWith('/learn/') ? 'Module detail' : location.startsWith('/cases/') ? 'Case debrief' : '';
  return <div className="app-shell min-h-[100dvh] bg-[hsl(var(--background))]"><Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} /><div className="lg:pl-[264px]"><header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-[hsl(var(--border))] bg-[hsl(210_30%_97%/.92)] px-5 backdrop-blur-md sm:px-8"><div className="flex items-center gap-3"><button className="rounded-lg border border-[hsl(var(--border))] bg-white p-2 lg:hidden" onClick={() => setMobileOpen(true)} aria-label="Open navigation" data-testid="button-open-navigation"><Menu size={18} /></button><div><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">ED Academy / <span className="text-[hsl(var(--primary))]">{detail || titles[location] || 'Workspace'}</span></p><div className="mt-1 hidden items-center gap-2 text-[11px] text-[hsl(var(--muted-foreground))] sm:flex"><span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />Local learning workspace</div></div></div><div className="flex items-center gap-3"><div className="hidden items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-white px-3 py-1.5 text-[11px] font-bold text-[hsl(var(--muted-foreground))] sm:flex"><div className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--primary))]" />Shift study mode</div><button className="rounded-lg p-2 text-[hsl(var(--muted-foreground))] hover:bg-white hover:text-[hsl(var(--foreground))]" aria-label="Notifications" data-testid="button-notifications"><CircleHelp size={19} /></button></div></header><main className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8 lg:px-10">{children}</main><SafetyNotice /></div></div>;
}

function SafetyNotice() { return <div className="mx-auto max-w-[1440px] px-5 pb-8 sm:px-8 lg:px-10"><div className="flex gap-3 rounded-xl border border-[hsl(42_81%_54%/.28)] bg-[hsl(42_81%_54%/.09)] p-4 text-[11px] leading-5 text-[hsl(35_37%_31%)]"><ShieldCheck className="mt-0.5 shrink-0 text-[hsl(42_81%_42%)]" size={16} /><p><strong>Educational supplement.</strong> ED Academy does not replace institutional protocols, current guidelines, credentialing requirements, or preceptor and faculty oversight. Clinical decisions must follow the resources and escalation pathways in your practice setting.</p></div></div>; }

function PageIntro({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action?: React.ReactNode }) {
  return <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="mb-2 font-mono-clinical text-[10px] font-bold uppercase tracking-[.18em] text-[hsl(var(--primary))]">{eyebrow}</p><h1 className="font-display text-3xl font-bold tracking-[-.04em] text-[hsl(var(--foreground))] sm:text-4xl">{title}</h1><p className="mt-2 max-w-2xl text-sm leading-6 text-[hsl(var(--muted-foreground))]">{description}</p></div>{action}</div>;
}

function StatCard({ label, value, detail, icon: Icon, tone = 'teal' }: { label: string; value: string; detail: string; icon: typeof Activity; tone?: 'teal' | 'coral' | 'sky' | 'gold' }) {
  return <div className="rounded-xl border border-[hsl(var(--card-border))] bg-white p-5 shadow-[var(--shadow-sm)]" data-testid={`stat-card-${label.toLowerCase().replaceAll(' ', '-')}`}><div className="mb-5 flex items-start justify-between"><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">{label}</p><div className={cn('rounded-lg p-2', tone === 'teal' && 'bg-teal-50 text-teal-700', tone === 'coral' && 'bg-orange-50 text-orange-700', tone === 'sky' && 'bg-sky-50 text-sky-700', tone === 'gold' && 'bg-amber-50 text-amber-700')}><Icon size={16} /></div></div><p className="font-display text-3xl font-bold tracking-[-.05em]">{value}</p><p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">{detail}</p></div>;
}

function DashboardPage() {
  const [progress, setProgress] = useState(readProgress);
  const completeCount = progress.completedModules.length;
  const overall = Math.round((completeCount / MODULES.length) * 100);
  const activeModule = MODULES.find((module) => module.status === 'active') || MODULES[1];
  const toggleDaily = () => { const next = { ...progress, dailyDone: !progress.dailyDone }; setProgress(next); saveProgress(next); };
  return <div className="animate-enter-up"><PageIntro eyebrow="Emergency Department · New to the ED" title="Good morning, Derrick." description="A focused study plan for your first year in the emergency department." action={<Link href="/practice" data-testid="link-dashboard-practice" className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--accent))] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-transform hover:-translate-y-0.5">Start a practice set <ArrowRight size={16} /></Link>} />
    <div className="mb-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><StatCard label="Pathway progress" value={`${overall}%`} detail={`${completeCount} of ${MODULES.length} modules underway`} icon={TrendingUp} /><StatCard label="Practice accuracy" value={progress.answers.length ? `${Math.round(progress.answers.filter((a) => a.correct).length / progress.answers.length * 100)}%` : '—'} detail={progress.answers.length ? `${progress.answers.length} answered locally` : 'Complete your first set'} icon={Crosshair} tone="coral" /><StatCard label="Case studies" value="200" detail="Representative cases in bank" icon={BrainCircuit} tone="sky" /><StatCard label="Question capacity" value="400" detail="Adaptive questions available" icon={Zap} tone="gold" /></div>
    <div className="grid gap-6 xl:grid-cols-[1.35fr_.65fr]"><section className="rounded-2xl bg-[hsl(var(--sidebar))] p-6 text-white shadow-[var(--shadow-md)] sm:p-8" data-testid="card-daily-plan"><div className="mb-8 flex items-start justify-between gap-4"><div><div className="mb-3 flex items-center gap-2 text-[hsl(var(--sidebar-primary))]"><Activity size={18} /><span className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.18em]">Today’s study plan</span></div><h2 className="font-display text-2xl font-bold tracking-[-.04em] sm:text-3xl">Sick or not sick?<br /><span className="text-[hsl(var(--sidebar-primary))]">Decide in the first ten seconds.</span></h2></div><div className="hidden h-16 w-28 overflow-hidden opacity-70 sm:block"><svg viewBox="0 0 120 60" className="h-full w-full"><path d="M0 34h18l6-19 8 39 8-26 8 10h14l6-18 8 24 8-10h22" fill="none" stroke="hsl(174 55% 54%)" strokeWidth="2" className="animate-pulse-line" /></svg></div></div><div className="space-y-2">{[{ title: `Continue: ${activeModule.title}`, meta: 'Foundations of emergency nursing · 36 min', icon: Play, href: `/learn/${activeModule.id}`, done: false }, { title: 'One case, one escalation', meta: 'The ten minutes that matter · 12 min', icon: BrainCircuit, href: '/cases/case-01', done: false }, { title: 'Close with 10 questions', meta: 'Adaptive practice · 8 min', icon: Target, href: '/practice', done: progress.dailyDone }].map((item, index) => <Link key={item.title} href={item.href} data-testid={`link-daily-item-${index}`} className={cn('group flex items-center gap-4 rounded-xl border px-4 py-4 transition-colors', item.done ? 'border-[hsl(var(--sidebar-primary)/.28)] bg-[hsl(var(--sidebar-primary)/.1)]' : 'border-[hsl(var(--sidebar-border))] hover:bg-[hsl(var(--sidebar-accent))]')}><div className={cn('flex h-9 w-9 shrink-0 items-center justify-center rounded-full', item.done ? 'bg-[hsl(var(--sidebar-primary))] text-[hsl(var(--sidebar-primary-foreground))]' : 'bg-[hsl(var(--sidebar-accent))] text-[hsl(var(--sidebar-primary))]')}>{item.done ? <Check size={16} /> : <item.icon size={16} />}</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{item.title}</p><p className="mt-1 truncate text-xs text-slate-400">{item.meta}</p></div><ChevronRight size={17} className="text-slate-500 transition-transform group-hover:translate-x-1" /></Link>)}</div><button onClick={toggleDaily} data-testid="button-toggle-daily-plan" className="mt-5 text-xs font-bold text-[hsl(var(--sidebar-primary))] hover:underline">{progress.dailyDone ? 'Mark plan as open again' : 'Mark today’s plan complete'}</button></section>
      <section className="space-y-6"><div className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)]" data-testid="card-pathway-progress"><div className="mb-5 flex items-center justify-between"><div><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Your pathway</p><h2 className="mt-1 font-display text-xl font-bold">A measured climb</h2></div><ProgressRing value={overall} /></div><div className="space-y-4">{phases.map((phase, index) => { const phaseModules = MODULES.filter((m) => m.phase === phase); const done = phaseModules.filter((m) => progress.completedModules.includes(m.id)).length; return <div key={phase}><div className="mb-2 flex justify-between text-xs"><span className={cn('font-bold', index === 0 ? 'text-[hsl(var(--primary))]' : 'text-[hsl(var(--muted-foreground))')}>{phase}</span><span className="font-mono-clinical text-[10px] text-[hsl(var(--muted-foreground))]">{done}/{phaseModules.length}</span></div><div className="h-1.5 overflow-hidden rounded-full bg-[hsl(var(--muted))]"><div className={cn('h-full rounded-full transition-all', index === 0 ? 'bg-[hsl(var(--primary))]' : 'bg-[hsl(var(--border))]')} style={{ width: `${(done / phaseModules.length) * 100}%` }} /></div></div>; })}</div><Link href="/learn" data-testid="link-view-pathway" className="mt-6 flex items-center justify-between border-t border-[hsl(var(--border))] pt-4 text-xs font-bold text-[hsl(var(--primary))]">View full learning pathway <ArrowRight size={14} /></Link></div><div className="rounded-2xl border border-[hsl(174_55%_31%/.2)] bg-[hsl(174_55%_31%/.07)] p-6" data-testid="card-return-note"><div className="mb-3 flex items-center gap-2 text-[hsl(var(--primary))]"><Bookmark size={16} /><span className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em]">A note to carry</span></div><p className="font-display text-lg font-semibold leading-7 text-[hsl(var(--foreground))]">“The first five minutes decide the next five hours.”</p><p className="mt-3 text-xs leading-5 text-[hsl(var(--muted-foreground))]">Your next shift will reward the habit of asking what changed, what matters, and what you need to do next.</p></div></section></div>
  </div>;
}

function LearnPage() {
  const [progress] = useState(readProgress);
  const totalMinutes = MODULES.reduce((sum, module) => sum + module.minutes, 0);
  return <div className="animate-enter-up"><PageIntro eyebrow="The pathway" title="Build the whole picture." description="Ten modules move from ED foundations to the core skills that carry your first year. Each step is structured for focused study and review." action={<div className="flex items-center gap-2 rounded-lg border border-[hsl(var(--border))] bg-white px-3 py-2 text-xs font-bold"><BookOpen size={15} className="text-[hsl(var(--primary))]" />{MODULES.length} modules · {(totalMinutes / 60).toFixed(1)} hours</div>} /><div className="mb-8 flex flex-wrap gap-2">{phases.map((phase, index) => <div key={phase} className="flex items-center gap-2 text-xs font-bold text-[hsl(var(--muted-foreground))]"><span className={cn('flex h-6 w-6 items-center justify-center rounded-full font-mono-clinical text-[10px]', index === 0 ? 'bg-[hsl(var(--primary))] text-white' : 'bg-[hsl(var(--muted))]')}>{String(index + 1).padStart(2, '0')}</span>{phase}{index < phases.length - 1 && <ChevronRight size={14} className="text-[hsl(var(--border))]" />}</div>)}</div><div className="space-y-8">{phases.map((phase, phaseIndex) => <section key={phase} data-testid={`section-phase-${phaseIndex}`}><div className="mb-3 flex items-end justify-between"><div><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Phase 0{phaseIndex + 1}</p><h2 className="mt-1 font-display text-xl font-bold">{phase}</h2></div><span className="text-xs text-[hsl(var(--muted-foreground))]">{MODULES.filter((m) => m.phase === phase).length} modules</span></div><div className="grid gap-3">{MODULES.filter((m) => m.phase === phase).map((module) => { const isDone = progress.completedModules.includes(module.id); const isLocked = module.status === 'locked' && !isDone; return <Link key={module.id} href={`/learn/${module.id}`} data-testid={`card-module-${module.id}`} className={cn('group grid gap-4 rounded-xl border bg-white p-5 shadow-[var(--shadow-sm)] transition-all md:grid-cols-[56px_1fr_auto] md:items-center', isLocked ? 'opacity-65 hover:-translate-y-0.5 hover:border-[hsl(var(--primary)/.45)]' : 'hover:-translate-y-0.5 hover:border-[hsl(var(--primary)/.45)]')} ><div className={cn('flex h-12 w-12 items-center justify-center rounded-xl font-mono-clinical text-xs font-bold', module.accent === 'teal' && 'bg-teal-50 text-teal-700', module.accent === 'coral' && 'bg-orange-50 text-orange-700', module.accent === 'sky' && 'bg-sky-50 text-sky-700', module.accent === 'gold' && 'bg-amber-50 text-amber-800', module.accent === 'violet' && 'bg-violet-50 text-violet-700')}>{module.number}</div><div className="min-w-0"><div className="mb-1 flex flex-wrap items-center gap-2"><h3 className="font-display text-base font-bold group-hover:text-[hsl(var(--primary))]">{module.title}</h3>{isDone && <Badge tone="teal">Complete</Badge>}{isLocked && <LockKeyhole size={13} className="text-[hsl(var(--muted-foreground))]" />}</div><p className="max-w-2xl text-sm leading-5 text-[hsl(var(--muted-foreground))]">{module.description}</p><div className="mt-3 flex gap-4 text-[11px] font-medium text-[hsl(var(--muted-foreground))]"><span className="flex items-center gap-1"><BookOpen size={13} />{module.lessons} lessons</span><span className="flex items-center gap-1"><Clock3 size={13} />{module.minutes} min</span></div></div><div className="flex items-center gap-4 md:flex-col md:items-end"><ProgressRing value={isDone ? 100 : module.progress} size={52} /><span className="flex items-center gap-1 text-xs font-bold text-[hsl(var(--primary))]">{isDone ? 'Review' : isLocked ? 'Preview' : 'Open module'} <ArrowRight size={13} /></span></div></Link>; })}</div></section>)}</div></div>;
}

function ModuleDetailPage() {
  const { id } = useParams<{ id: string }>();
  const module = MODULES.find((item) => item.id === id) || MODULES[0];
  const moduleData = ALL_MODULE_CONTENTS[module.id];
  const lessons = moduleData?.lessons || [];
  
  const [progress, setProgress] = useState(readProgress);
  const [lesson, setLesson] = useState(0);
  
  // Lesson state
  const [showExample, setShowExample] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  useEffect(() => {
    setLesson(0);
    setShowExample(false);
    setShowCheck(false);
    setSelectedAnswer(null);
  }, [module.id]);

  useEffect(() => {
    setShowExample(false);
    setShowCheck(false);
    setSelectedAnswer(null);
  }, [lesson]);

  const done = progress.completedModules.includes(module.id);
  const current = lessons[lesson] || { title: 'Loading...', durationMinutes: 0, sections: [], bedsideCues: [], assessmentSequence: [], safetyPoints: [], workedExample: { context: '', action: '', outcome: '' }, activity: { prompt: '', type: 'reflection' }, knowledgeCheck: { question: '', options: [], answerIndex: 0, rationale: '' } };
  
  const complete = () => { 
    const next = progress.completedModules.includes(module.id) ? progress : { ...progress, completedModules: [...progress.completedModules, module.id] }; 
    setProgress(next); 
    saveProgress(next); 
  };
  
  return <div className="animate-enter-up">
    <Link href="/learn" data-testid="link-back-to-learn" className="mb-6 inline-flex items-center gap-2 text-xs font-bold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]">
      <ArrowLeft size={14} /> Back to pathway
    </Link>
    
    <div className="grid gap-7 xl:grid-cols-[1fr_320px]">
      <article className="overflow-hidden rounded-2xl border border-[hsl(var(--card-border))] bg-white shadow-[var(--shadow-sm)]">
        <div className="relative overflow-hidden bg-[hsl(var(--sidebar))] px-6 py-8 text-white sm:px-10 sm:py-12">
          <div className="absolute right-8 top-8 opacity-25">
            <svg width="180" height="85" viewBox="0 0 180 85"><path d="M0 45h26l8-24 11 47 12-31 12 16h28l8-19 10 27 12-16h51" fill="none" stroke="hsl(174 55% 54%)" strokeWidth="2" /></svg>
          </div>
          <Badge tone="teal">{module.phase}</Badge>
          <p className="mt-4 font-mono-clinical text-[10px] uppercase tracking-[.18em] text-slate-400">Module {module.number} · {module.lessons} lessons · {module.minutes}m</p>
          <h1 className="relative mt-2 max-w-xl font-display text-3xl font-bold tracking-[-.04em] sm:text-4xl">{module.title}</h1>
          <p className="relative mt-4 max-w-xl text-sm leading-6 text-slate-300">{module.description}</p>
        </div>
        
        <div className="p-6 sm:p-10">
          <div className="mb-7 flex items-center justify-between border-b border-[hsl(var(--border))] pb-6">
            <div>
              <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.15em] text-[hsl(var(--primary))]">Lesson {lesson + 1} of {lessons.length}</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-balance">{current.title}</h2>
            </div>
            <div className="text-right">
              <span className="flex items-center gap-1 font-mono-clinical text-xs text-[hsl(var(--muted-foreground))]">
                <Clock3 size={13} /> {current.durationMinutes} min
              </span>
            </div>
          </div>
          
          <div className="prose prose-slate max-w-none text-base leading-8 text-[hsl(var(--muted-foreground))]">
            {current.sections.map((section: any, i: number) => (
              <div key={i} className="mb-8">
                <h3 className="mb-3 font-display text-lg font-bold text-[hsl(var(--foreground))]">{section.heading}</h3>
                <p>{section.content}</p>
              </div>
            ))}
            
            <div className="my-8 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--muted)/.5)] p-6">
              <h4 className="mb-4 flex items-center gap-2 font-mono-clinical text-xs font-bold uppercase tracking-[.1em] text-[hsl(var(--foreground))]">
                <Target size={16} className="text-[hsl(var(--primary))]" /> Bedside Assessment Sequence
              </h4>
              <ul className="space-y-2">
                {current.assessmentSequence.map((seq: string, i: number) => (
                  <li key={i} className="flex gap-3 text-sm leading-6">
                    <span className="font-bold text-[hsl(var(--primary))]">{i + 1}.</span>
                    <span>{seq.replace(/^\d+\.\s*/, '')}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-mono-clinical text-[10px] font-bold uppercase tracking-[.1em] text-[hsl(var(--accent))]">
                  <MonitorCog size={14} /> Key Bedside Cues
                </h4>
                <ul className="list-inside list-disc space-y-1 text-sm leading-6">
                  {current.bedsideCues.map((cue: string, i: number) => (
                    <li key={i}>{cue}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mb-3 flex items-center gap-2 font-mono-clinical text-[10px] font-bold uppercase tracking-[.1em] text-[hsl(var(--primary))]">
                  <ShieldCheck size={14} /> Safety & Escalation
                </h4>
                <ul className="list-inside list-disc space-y-1 text-sm leading-6">
                  {current.safetyPoints.map((pt: string, i: number) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="my-8 rounded-xl border border-[hsl(var(--card-border))] bg-white shadow-sm">
            <button 
              onClick={() => setShowExample(!showExample)} 
              data-testid="button-toggle-example"
              className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-[hsl(var(--muted)/.5)] rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(var(--primary)/.1)] text-[hsl(var(--primary))]">
                  <FlaskConical size={16} />
                </div>
                <div>
                  <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.1em] text-[hsl(var(--primary))]">Clinical Context</p>
                  <p className="font-bold text-[hsl(var(--foreground))]">Worked Example</p>
                </div>
              </div>
              {showExample ? <ChevronUp size={20} className="text-[hsl(var(--muted-foreground))]" /> : <ChevronDown size={20} className="text-[hsl(var(--muted-foreground))]" />}
            </button>
            {showExample && (
              <div className="border-t border-[hsl(var(--border))] p-5 pb-6 text-sm leading-6" data-testid="container-worked-example">
                <p className="mb-3"><span className="font-bold text-[hsl(var(--foreground))]">Context:</span> {current.workedExample.context}</p>
                <p className="mb-3"><span className="font-bold text-[hsl(var(--foreground))]">Action:</span> {current.workedExample.action}</p>
                <p><span className="font-bold text-[hsl(var(--foreground))]">Outcome:</span> {current.workedExample.outcome}</p>
              </div>
            )}
          </div>
          
          <div className="my-8 rounded-xl border border-[hsl(var(--card-border))] bg-white shadow-sm">
            <button 
              onClick={() => setShowCheck(!showCheck)} 
              data-testid="button-toggle-knowledge-check"
              className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-[hsl(var(--muted)/.5)] rounded-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(var(--accent)/.1)] text-[hsl(var(--accent))]">
                  <BrainCircuit size={16} />
                </div>
                <div>
                  <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.1em] text-[hsl(var(--accent))]">Knowledge Check</p>
                  <p className="font-bold text-[hsl(var(--foreground))]">Test your understanding</p>
                </div>
              </div>
              {showCheck ? <ChevronUp size={20} className="text-[hsl(var(--muted-foreground))]" /> : <ChevronDown size={20} className="text-[hsl(var(--muted-foreground))]" />}
            </button>
            {showCheck && (
              <div className="border-t border-[hsl(var(--border))] p-5 pb-6" data-testid="container-knowledge-check">
                <p className="mb-5 text-base font-medium leading-6 text-[hsl(var(--foreground))]">{current.knowledgeCheck.question}</p>
                <div className="space-y-3">
                  {current.knowledgeCheck.options.map((opt: string, i: number) => {
                    const isSelected = selectedAnswer === i;
                    const isCorrect = i === current.knowledgeCheck.answerIndex;
                    const showResult = selectedAnswer !== null;
                    
                    let buttonClass = 'border-[hsl(var(--border))] bg-white text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--primary)/.5)]';
                    if (showResult) {
                      if (isCorrect) {
                        buttonClass = 'border-teal-500 bg-teal-50 text-teal-900';
                      } else if (isSelected) {
                        buttonClass = 'border-red-300 bg-red-50 text-red-900 opacity-60';
                      } else {
                        buttonClass = 'border-[hsl(var(--border))] bg-[hsl(var(--muted)/.3)] opacity-60 text-[hsl(var(--muted-foreground))]';
                      }
                    } else if (isSelected) {
                      buttonClass = 'border-[hsl(var(--primary))] bg-[hsl(var(--primary)/.05)] text-[hsl(var(--primary))]';
                    }
                    
                    return (
                      <button 
                        key={i} 
                        onClick={() => setSelectedAnswer(i)}
                        disabled={showResult}
                        data-testid={`button-kc-option-${i}`}
                        className={`w-full rounded-lg border p-4 text-left text-sm transition-colors ${buttonClass}`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold ${showResult && isCorrect ? 'border-teal-500 bg-teal-500 text-white' : showResult && isSelected ? 'border-red-400 bg-red-400 text-white' : 'border-[hsl(var(--border))]'}`}>
                            {showResult && isCorrect ? <Check size={12} /> : showResult && isSelected ? <X size={12} /> : String.fromCharCode(65 + i)}
                          </div>
                          <span className="leading-5">{opt}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {selectedAnswer !== null && (
                  <div className="mt-5 rounded-lg bg-[hsl(var(--sidebar))] p-5 text-white animate-enter-up" data-testid="container-kc-rationale">
                    <p className="mb-2 font-mono-clinical text-[10px] font-bold uppercase tracking-[.1em] text-[hsl(var(--sidebar-primary))]">Rationale</p>
                    <p className="text-sm leading-6 text-slate-300">{current.knowledgeCheck.rationale}</p>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <div className="mb-8 rounded-xl bg-[hsl(var(--muted)/.5)] p-6">
            <h4 className="mb-2 flex items-center gap-2 font-mono-clinical text-[10px] font-bold uppercase tracking-[.1em] text-[hsl(var(--foreground))]">
              <Activity size={14} className="text-[hsl(var(--primary))]" /> {current.activity.type === 'reflection' ? 'Reflective Practice' : 'Clinical Activity'}
            </h4>
            <p className="text-sm italic leading-6 text-[hsl(var(--muted-foreground))]">"{current.activity.prompt}"</p>
          </div>

          <div className="flex items-center justify-between border-t border-[hsl(var(--border))] pt-6">
            <Button variant="quiet" onClick={() => setLesson(Math.max(0, lesson - 1))} disabled={lesson === 0} data-testid="button-previous-lesson">
              <ArrowLeft size={15} /> Previous
            </Button>
            {lesson < lessons.length - 1 ? (
              <Button onClick={() => setLesson(lesson + 1)} data-testid="button-next-lesson">
                Next lesson <ArrowRight size={15} />
              </Button>
            ) : (
              <Button variant={done ? 'outline' : 'primary'} onClick={complete} data-testid="button-complete-module">
                {done ? <><Check size={15} /> Completed</> : <><Check size={15} /> Mark module complete</>}
              </Button>
            )}
          </div>
        </div>
      </article>
      
      <aside className="space-y-4">
        <div className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-5 shadow-[var(--shadow-sm)]">
          <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Module map</p>
          <div className="mt-4 space-y-2 max-h-[400px] overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin' }}>
            {lessons.map((item: any, index: number) => (
              <button 
                key={item.id} 
                onClick={() => setLesson(index)} 
                data-testid={`button-lesson-${index}`} 
                className={cn('flex w-full items-start gap-3 rounded-lg p-3 text-left transition-colors', lesson === index ? 'bg-[hsl(var(--primary)/.1)] text-[hsl(var(--primary))]' : 'hover:bg-[hsl(var(--muted))]')}
              >
                <span className={cn('mt-0.5 shrink-0 font-mono-clinical text-[10px] font-bold', lesson > index && 'text-[hsl(var(--primary))]')}>
                  {lesson > index ? '✓' : `0${index + 1}`}
                </span>
                <span className={cn('text-xs font-bold leading-4', lesson === index ? 'text-[hsl(var(--primary))]' : 'text-[hsl(var(--foreground))]')}>{item.title}</span>
              </button>
            ))}
          </div>
        </div>
        
        <div className="rounded-2xl border border-[hsl(var(--border))] p-5">
          <p className="text-sm font-bold">Need a clinical example?</p>
          <p className="mt-2 text-xs leading-5 text-[hsl(var(--muted-foreground))]">Test this concept against a case study before your next practice set.</p>
          <Link href="/cases/case-01" data-testid="link-module-case" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[hsl(var(--primary))]">Open a case <ArrowRight size={13} /></Link>
        </div>
      </aside>
    </div>
  </div>;
}
function LibraryPage() {
  const [tab, setTab] = useState<Resource['type']>('Medication / drip');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Resource | null>(null);
  const filtered = useMemo(() => RESOURCES.filter((resource) => resource.type === tab && `${resource.name} ${resource.category} ${resource.snapshot}`.toLowerCase().includes(query.toLowerCase())), [tab, query]);
  return <div className="animate-enter-up"><PageIntro eyebrow="Reference, not replacement" title="Keep the essentials close." description="A concise, searchable bedside refresher for common ED medications, infusions, and equipment. Always confirm against current local references." action={<div className="flex items-center gap-2 font-mono-clinical text-[10px] font-bold uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]"><MonitorCog size={16} /> {RESOURCES.length} core entries</div>} /><div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div className="flex gap-1 rounded-lg bg-[hsl(var(--muted))] p-1"><button onClick={() => setTab('Medication / drip')} data-testid="button-library-medications" className={cn('rounded-md px-4 py-2 text-xs font-bold', tab === 'Medication / drip' ? 'bg-white text-[hsl(var(--primary))] shadow-sm' : 'text-[hsl(var(--muted-foreground))]')}>Medication / drip</button><button onClick={() => setTab('Equipment')} data-testid="button-library-equipment" className={cn('rounded-md px-4 py-2 text-xs font-bold', tab === 'Equipment' ? 'bg-white text-[hsl(var(--primary))] shadow-sm' : 'text-[hsl(var(--muted-foreground))]')}>Equipment</button></div><label className="flex items-center gap-2 rounded-lg border border-[hsl(var(--border))] bg-white px-3 py-2.5 sm:w-72"><Search size={16} className="text-[hsl(var(--muted-foreground))]" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search the library" data-testid="input-library-search" className="w-full bg-transparent text-sm outline-none placeholder:text-[hsl(var(--muted-foreground))]" /></label></div><div className="grid gap-3 lg:grid-cols-2">{filtered.map((resource) => <button key={resource.id} onClick={() => setSelected(resource)} data-testid={`card-resource-${resource.id}`} className="group rounded-xl border border-[hsl(var(--card-border))] bg-white p-5 text-left shadow-[var(--shadow-sm)] transition-all hover:-translate-y-0.5 hover:border-[hsl(var(--primary)/.45)]"><div className="mb-4 flex items-start justify-between"><div className={cn('flex h-10 w-10 items-center justify-center rounded-lg', resource.type === 'Equipment' ? 'bg-sky-50 text-sky-700' : 'bg-teal-50 text-teal-700')}>{resource.type === 'Equipment' ? <MonitorCog size={18} /> : <FlaskConical size={18} />}</div><ExternalLink size={15} className="text-[hsl(var(--muted-foreground))] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div><div className="flex items-center gap-2"><h2 className="font-display text-lg font-bold">{resource.name}</h2><Badge tone={resource.type === 'Equipment' ? 'sky' : 'teal'}>{resource.category}</Badge></div><p className="mt-2 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{resource.snapshot}</p><p className="mt-4 text-xs font-bold text-[hsl(var(--primary))]">Open clinical notes <ArrowRight size={13} className="ml-1 inline" /></p></button>)}</div>{filtered.length === 0 && <div className="rounded-xl border border-dashed border-[hsl(var(--border))] p-12 text-center"><Search className="mx-auto mb-3 text-[hsl(var(--muted-foreground))]" /><p className="font-bold">No reference matches that search.</p><p className="mt-1 text-sm text-[hsl(var(--muted-foreground))]">Try the generic name or switch views.</p></div>}{selected && <div className="fixed inset-0 z-50 flex items-end justify-center bg-[hsl(215_40%_16%/.45)] p-4 sm:items-center" role="dialog" aria-modal="true" data-testid="dialog-resource"><div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-[var(--shadow-md)] sm:p-8"><div className="flex items-start justify-between"><div><Badge tone={selected.type === 'Equipment' ? 'sky' : 'teal'}>{selected.category}</Badge><h2 className="mt-3 font-display text-2xl font-bold">{selected.name}</h2></div><button onClick={() => setSelected(null)} className="rounded-lg p-1 text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))]" aria-label="Close resource" data-testid="button-close-resource"><X size={18} /></button></div><p className="mt-3 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{selected.snapshot}</p><ul className="mt-6 space-y-3">{selected.details.map((detail) => <li key={detail} className="flex gap-2 text-sm leading-6"><Check size={15} className="mt-1 shrink-0 text-[hsl(var(--primary))]" />{detail}</li>)}</ul><div className="mt-6 rounded-lg bg-amber-50 p-4 text-xs leading-5 text-amber-900"><strong>Safety note:</strong> {selected.caution}</div><Button variant="outline" className="mt-6 w-full" onClick={() => setSelected(null)} data-testid="button-done-resource">Close reference</Button></div></div>}</div>;
}

function CasesPage() {
  const [filter, setFilter] = useState<'All' | CaseStudy['acuity']>('All');
  const filtered = CASES.filter((item) => filter === 'All' || item.acuity === filter);
  return <div className="animate-enter-up"><PageIntro eyebrow="Think in sequences" title="Cases that ask more of you." description="Practice the moment before the call: recognize a changing patient, organize the signal, and choose the safest next question." action={<div className="rounded-lg border border-[hsl(var(--border))] bg-white px-3 py-2 text-xs font-bold"><span className="font-mono-clinical text-[hsl(var(--primary))]">200</span> case-study capacity</div>} /><div className="mb-6 flex flex-wrap gap-2">{(['All', 'High acuity', 'Moderate acuity', 'Foundational'] as const).map((value) => <button key={value} onClick={() => setFilter(value)} data-testid={`button-case-filter-${value.toLowerCase().replaceAll(' ', '-')}`} className={cn('rounded-full border px-3 py-2 text-xs font-bold transition-colors', filter === value ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-white' : 'border-[hsl(var(--border))] bg-white text-[hsl(var(--muted-foreground))] hover:border-[hsl(var(--primary))]')}>{value}</button>)}</div><div className="grid gap-4 md:grid-cols-2">{filtered.map((item, index) => <Link href={`/cases/${item.id}`} key={item.id} data-testid={`card-case-${item.id}`} className={cn('group relative overflow-hidden rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] transition-all hover:-translate-y-1', index === 0 && 'md:col-span-2 md:grid md:grid-cols-[1fr_1fr] md:gap-8 md:bg-[hsl(var(--sidebar))] md:text-white')}><div className={cn('absolute right-0 top-0 h-28 w-28 rounded-bl-full bg-[hsl(var(--primary)/.07)]', index === 0 && 'md:bg-[hsl(var(--sidebar-primary)/.08)]')} /><div className="relative"><div className="mb-5 flex items-center justify-between"><Badge tone={item.acuity === 'High acuity' ? 'coral' : item.acuity === 'Moderate acuity' ? 'gold' : 'teal'}>{item.acuity}</Badge><span className={cn('font-mono-clinical text-[10px]', index === 0 ? 'text-slate-400' : 'text-[hsl(var(--muted-foreground))]')}>CASE {item.id.slice(-2)}</span></div><h2 className="font-display text-2xl font-bold tracking-[-.03em]">{item.title}</h2><p className={cn('mt-1 text-sm font-bold', index === 0 ? 'text-[hsl(var(--sidebar-primary))]' : 'text-[hsl(var(--primary))]')}>{item.diagnosis}</p></div><div className="relative mt-5 md:mt-0"><p className={cn('text-sm leading-6', index === 0 ? 'text-slate-300' : 'text-[hsl(var(--muted-foreground))]')}>{item.summary}</p><div className="mt-5 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className={cn('rounded-full px-2 py-1 text-[10px] font-bold', index === 0 ? 'bg-[hsl(var(--sidebar-accent))] text-slate-300' : 'bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]')}>{tag}</span>)}</div><span className={cn('mt-6 inline-flex items-center gap-1 text-xs font-bold', index === 0 ? 'text-[hsl(var(--sidebar-primary))]' : 'text-[hsl(var(--primary))]')}>Open case <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span></div></Link>)}</div></div>;
}

export function LegacyCaseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = CASES.find((item) => item.id === id) || CASES[0];
  const [revealed, setRevealed] = useState(false);
  return <div className="animate-enter-up"><Link href="/cases" data-testid="link-back-to-cases" className="mb-6 inline-flex items-center gap-2 text-xs font-bold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]"><ArrowLeft size={14} /> Back to case bank</Link><div className="grid gap-7 xl:grid-cols-[1fr_310px]"><article className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-10"><div className="flex flex-wrap items-center justify-between gap-3"><Badge tone={caseStudy.acuity === 'High acuity' ? 'coral' : 'teal'}>{caseStudy.acuity}</Badge><span className="font-mono-clinical text-[10px] uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">{caseStudy.setting}</span></div><h1 className="mt-5 font-display text-3xl font-bold tracking-[-.04em] sm:text-4xl">{caseStudy.title}</h1><p className="mt-2 text-base font-bold text-[hsl(var(--primary))]">{caseStudy.diagnosis}</p><div className="my-8 rounded-xl bg-[hsl(var(--background))] p-6"><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Situation</p><p className="mt-3 text-base leading-8">{caseStudy.summary}</p></div><div className="border-l-4 border-[hsl(var(--accent))] pl-5"><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--accent))]">Critical-thinking prompt</p><p className="mt-2 text-lg font-semibold leading-8">{caseStudy.prompt}</p></div><Button onClick={() => setRevealed(!revealed)} variant={revealed ? 'outline' : 'primary'} className="mt-8" data-testid="button-reveal-debrief">{revealed ? 'Hide debrief' : 'Reveal debrief'} <ArrowRight size={15} /></Button>{revealed && <div className="mt-7 animate-enter-up rounded-xl border border-[hsl(var(--primary)/.2)] bg-[hsl(var(--primary)/.06)] p-6" data-testid="section-case-debrief"><div className="mb-4 flex items-center gap-2 text-[hsl(var(--primary))]"><ShieldCheck size={17} /><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em]">A safe reasoning sequence</p></div><ol className="space-y-4">{caseStudy.debrief.map((item, index) => <li key={item} className="flex gap-3 text-sm leading-6"><span className="font-mono-clinical text-xs font-bold text-[hsl(var(--primary))]">0{index + 1}</span>{item}</li>)}</ol></div>}</article><aside className="space-y-4"><div className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)]"><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Case lens</p><div className="mt-5 space-y-4"><div><p className="text-xs text-[hsl(var(--muted-foreground))]">Primary domain</p><p className="mt-1 text-sm font-bold">{caseStudy.tags[0]}</p></div><div><p className="text-xs text-[hsl(var(--muted-foreground))]">Decision habit</p><p className="mt-1 text-sm font-bold">Trend · assess · escalate</p></div><div><p className="text-xs text-[hsl(var(--muted-foreground))]">Suggested time</p><p className="mt-1 flex items-center gap-1 text-sm font-bold"><Clock3 size={14} /> 12 minutes</p></div></div></div><Link href="/practice" data-testid="link-case-practice" className="flex items-center justify-between rounded-2xl bg-[hsl(var(--sidebar))] p-6 text-white transition-transform hover:-translate-y-0.5"><div><p className="font-display font-bold">Pressure-test your reasoning</p><p className="mt-1 text-xs text-slate-400">Build a short adaptive set</p></div><ArrowRight size={18} className="text-[hsl(var(--sidebar-primary))]" /></Link></aside></div></div>;
}

function CaseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const caseStudy = CASES.find((item) => item.id === id) || CASES[0];
  const detail = caseStudy.detail;
  const [debriefOpen, setDebriefOpen] = useState(false);
  const [revealedDecision, setRevealedDecision] = useState<number | null>(null);

  return <div className="animate-enter-up">
    <Link href="/cases" data-testid="link-back-to-cases" className="mb-6 inline-flex items-center gap-2 text-xs font-bold text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))]"><ArrowLeft size={14} /> Back to case bank</Link>
    <div className="grid gap-7 xl:grid-cols-[minmax(0,1fr)_310px]">
      <article className="space-y-6">
        <section className="rounded-2xl bg-[hsl(var(--sidebar))] p-7 text-white shadow-[var(--shadow-sm)] sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3"><Badge tone={caseStudy.acuity === 'High acuity' ? 'coral' : caseStudy.acuity === 'Moderate acuity' ? 'gold' : 'teal'}>{caseStudy.acuity}</Badge><span className="font-mono-clinical text-[10px] uppercase tracking-[.14em] text-slate-400">{caseStudy.setting}</span></div>
          <h1 className="mt-5 font-display text-3xl font-bold tracking-[-.04em] sm:text-4xl">{caseStudy.title}</h1>
          <p className="mt-2 text-base font-bold text-[hsl(var(--sidebar-primary))]">{caseStudy.diagnosis}</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">{caseStudy.summary}</p>
        </section>

        <div className="grid gap-5 md:grid-cols-2">
          <CaseInfoPanel title="History and context" items={detail.history} testId="case-history" />
          <CaseInfoPanel title="Current support" items={detail.currentSupport} testId="case-support" />
        </div>

        <section className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-8" data-testid="section-initial-assessment">
          <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--primary))]">Baseline assessment</p>
          <h2 className="mt-2 font-display text-2xl font-bold">Before the condition changes</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">{detail.initialAssessment.map((item) => <div key={item} className="rounded-xl bg-[hsl(var(--background))] p-4 text-sm leading-6">{item}</div>)}</div>
        </section>

        <section className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-8" data-testid="section-case-timeline">
          <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--accent))]">Condition change</p>
          <h2 className="mt-2 font-display text-2xl font-bold">Read the trend, not one number</h2>
          <div className="mt-7 space-y-0">
            {detail.trend.map((event, index) => <div key={event.time} className="relative grid gap-3 border-l-2 border-[hsl(var(--border))] pb-7 pl-6 sm:grid-cols-[90px_1fr]" data-testid={`timeline-event-${index}`}>
              <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-white bg-[hsl(var(--primary))]" />
              <p className="font-mono-clinical text-xs font-bold text-[hsl(var(--primary))]">{event.time}</p>
              <ul className="space-y-2">{event.findings.map((finding) => <li key={finding} className="text-sm leading-6 text-[hsl(var(--muted-foreground))]">{finding}</li>)}</ul>
            </div>)}
          </div>
        </section>

        <section className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-8" data-testid="section-diagnostics">
          <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Diagnostics and corroborating data</p>
          <div className="mt-5 grid gap-3">{detail.diagnostics.map((item) => <div key={item} className="flex gap-3 rounded-xl border border-[hsl(var(--border))] p-4 text-sm leading-6"><FlaskConical size={16} className="mt-1 shrink-0 text-[hsl(var(--primary))]" />{item}</div>)}</div>
        </section>

        <section className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-8" data-testid="section-decision-points">
          <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--primary))]">Critical-thinking checkpoints</p>
          <h2 className="mt-2 font-display text-2xl font-bold">Commit to your reasoning before revealing guidance</h2>
          <div className="mt-6 space-y-4">{detail.decisionPoints.map((point, index) => <div key={point.prompt} className="rounded-xl border border-[hsl(var(--border))] p-5">
            <p className="font-semibold leading-7">{index + 1}. {point.prompt}</p>
            <Button variant="outline" className="mt-4" onClick={() => setRevealedDecision(revealedDecision === index ? null : index)} data-testid={`button-reveal-decision-${index}`}>{revealedDecision === index ? 'Hide coaching' : 'Reveal coaching'}</Button>
            {revealedDecision === index && <p className="mt-4 rounded-lg bg-[hsl(var(--primary)/.07)] p-4 text-sm leading-6 text-[hsl(var(--muted-foreground))]" data-testid={`text-decision-coaching-${index}`}>{point.coaching}</p>}
          </div>)}</div>
        </section>

        <section className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-8" data-testid="section-case-calculations">
          <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Interpretation activity</p>
          <h2 className="mt-2 font-display text-xl font-bold">Calculate, then explain what it means</h2>
          <div className="mt-5 space-y-4">{detail.calculations.map((item) => <details key={item.prompt} className="group rounded-xl bg-[hsl(var(--background))] p-5">
            <summary className="cursor-pointer list-none text-sm font-bold" data-testid="summary-case-calculation">{item.prompt}<span className="float-right text-[hsl(var(--primary))]">Reveal answer</span></summary>
            <p className="mt-4 border-t border-[hsl(var(--border))] pt-4 text-sm leading-6 text-[hsl(var(--muted-foreground))]">{item.answer}</p>
          </details>)}</div>
        </section>

        <section className="rounded-2xl border-l-4 border-[hsl(var(--accent))] bg-[hsl(8_76%_61%/.07)] p-6 sm:p-8" data-testid="section-sbar-example">
          <p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--accent))]">Escalation practice</p>
          <h2 className="mt-2 font-display text-xl font-bold">Example urgent SBAR</h2>
          <p className="mt-4 text-sm font-semibold leading-7">{detail.escalation}</p>
        </section>

        <section className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-8">
          <Button onClick={() => setDebriefOpen(!debriefOpen)} variant={debriefOpen ? 'outline' : 'primary'} data-testid="button-reveal-full-debrief">{debriefOpen ? 'Hide full debrief' : 'Reveal full clinical debrief'} <ArrowRight size={15} /></Button>
          {debriefOpen && <div className="mt-7 space-y-6 animate-enter-up" data-testid="section-full-case-debrief">{detail.fullDebrief.map((item, index) => <div key={item.heading} className="grid gap-2 border-t border-[hsl(var(--border))] pt-5 sm:grid-cols-[42px_1fr]"><span className="font-mono-clinical text-xs font-bold text-[hsl(var(--primary))]">0{index + 1}</span><div><h3 className="font-display text-lg font-bold">{item.heading}</h3><p className="mt-2 text-sm leading-7 text-[hsl(var(--muted-foreground))]">{item.content}</p></div></div>)}</div>}
        </section>
      </article>

      <aside className="space-y-4 xl:sticky xl:top-24 xl:self-start">
        <div className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)]"><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Case lens</p><div className="mt-5 space-y-4"><div><p className="text-xs text-[hsl(var(--muted-foreground))]">Primary domain</p><p className="mt-1 text-sm font-bold">{caseStudy.tags[0]}</p></div><div><p className="text-xs text-[hsl(var(--muted-foreground))]">Decision habit</p><p className="mt-1 text-sm font-bold">Trend · verify · interpret · escalate</p></div><div><p className="text-xs text-[hsl(var(--muted-foreground))]">Suggested time</p><p className="mt-1 flex items-center gap-1 text-sm font-bold"><Clock3 size={14} /> 20–30 minutes</p></div></div></div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-xs leading-5 text-amber-950"><strong>Educational simulation.</strong> Values and responses are for clinical-reasoning practice. Follow current orders, institutional policy, device instructions, and the treating team in patient care.</div>
        <Link href="/practice" data-testid="link-case-practice" className="flex items-center justify-between rounded-2xl bg-[hsl(var(--sidebar))] p-6 text-white transition-transform hover:-translate-y-0.5"><div><p className="font-display font-bold">Pressure-test your reasoning</p><p className="mt-1 text-xs text-slate-400">Build a short adaptive set</p></div><ArrowRight size={18} className="text-[hsl(var(--sidebar-primary))]" /></Link>
      </aside>
    </div>
  </div>;
}

function CaseInfoPanel({ title, items, testId }: { title: string; items: string[]; testId: string }) {
  return <section className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)]" data-testid={testId}><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">{title}</p><ul className="mt-5 space-y-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-6"><Check size={15} className="mt-1 shrink-0 text-[hsl(var(--primary))]" />{item}</li>)}</ul></section>;
}

function PracticePage() {
  const [mode, setMode] = useState<'setup' | 'taking' | 'feedback'>('setup');
  const [length, setLength] = useState(10);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [sessionAnswers, setSessionAnswers] = useState<{ questionId: string; domain: string; correct: boolean; difficulty: string }[]>([]);
  const [streak, setStreak] = useState(0);
  const [difficulty, setDifficulty] = useState<Question['difficulty']>('Foundational');
  const [progress, setProgress] = useState(readProgress);
  const question = useMemo(() => {
    const answeredIds = new Set(sessionAnswers.map((item) => item.questionId));
    const matching = QUESTIONS.filter((item) => item.difficulty === difficulty && !answeredIds.has(item.id));
    const remaining = matching.length ? matching : QUESTIONS.filter((item) => !answeredIds.has(item.id));
    return remaining[questionIndex % remaining.length] || QUESTIONS[0];
  }, [difficulty, questionIndex, sessionAnswers]);
  const score = sessionAnswers.length ? Math.round(sessionAnswers.filter((item) => item.correct).length / sessionAnswers.length * 100) : 0;
  const begin = () => { setMode('taking'); setQuestionIndex(0); setSelected(null); setSessionAnswers([]); setStreak(0); setDifficulty('Foundational'); };
  const answer = () => {
    if (selected === null) return;
    const correct = selected === question.answer;
    const current = { questionId: question.id, domain: question.domain, correct, difficulty: question.difficulty };
    const nextAnswers = [...sessionAnswers, current];
    const nextStreak = correct ? streak + 1 : 0;
    setSessionAnswers(nextAnswers);
    setStreak(nextStreak);
    setDifficulty(correct ? (nextStreak >= 4 ? 'Advanced' : nextStreak >= 2 ? 'Intermediate' : difficulty) : 'Foundational');
    if (nextAnswers.length >= length) { const next = { ...progress, answers: [...progress.answers, ...nextAnswers] }; setProgress(next); saveProgress(next); setMode('feedback'); } else { setQuestionIndex(questionIndex + 1); setSelected(null); }
  };
  if (mode === 'feedback') {
    const domainCounts = sessionAnswers.reduce<Record<string, { total: number; correct: number }>>((acc, item) => { acc[item.domain] = acc[item.domain] || { total: 0, correct: 0 }; acc[item.domain].total += 1; if (item.correct) acc[item.domain].correct += 1; return acc; }, {});
    const weak = Object.entries(domainCounts).filter(([, value]) => value.correct / value.total < .7).map(([key]) => key);
    return <div className="animate-enter-up"><PageIntro eyebrow="Session complete" title="Your feedback sheet." description="Use this as a study signal, not a verdict. The strongest next step is the one you can return to consistently." action={<Button variant="outline" onClick={() => setMode('setup')} data-testid="button-new-practice">New practice set <ArrowRight size={15} /></Button>} /><div className="grid gap-6 lg:grid-cols-[280px_1fr]"><div className="rounded-2xl bg-[hsl(var(--sidebar))] p-7 text-white"><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">Session score</p><p className="mt-4 font-display text-6xl font-bold text-[hsl(var(--sidebar-primary))]">{score}%</p><p className="mt-2 text-sm text-slate-300">{sessionAnswers.filter((item) => item.correct).length} correct of {sessionAnswers.length}</p><div className="mt-8 border-t border-[hsl(var(--sidebar-border))] pt-5"><p className="text-xs font-bold text-slate-300">Difficulty reached</p><p className="mt-1 font-display text-lg font-bold">{difficulty}</p></div></div><div className="space-y-4"><div className="grid gap-4 md:grid-cols-2"><div className="rounded-xl border border-[hsl(var(--card-border))] bg-white p-5" data-testid="card-practice-strengths"><div className="mb-3 flex items-center gap-2 text-[hsl(var(--primary))]"><TrendingUp size={16} /><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em]">What you did well</p></div><p className="text-sm leading-6">{score >= 70 ? 'You kept the patient context in view while moving through the set. Keep building speed without dropping the assessment sequence.' : 'You completed the full set and surfaced clear signals about where to focus next. That is useful practice data.'}</p></div><div className="rounded-xl border border-[hsl(var(--card-border))] bg-white p-5" data-testid="card-practice-weaknesses"><div className="mb-3 flex items-center gap-2 text-[hsl(var(--accent))]"><Crosshair size={16} /><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em]">Weak domains</p></div><p className="text-sm leading-6">{weak.length ? weak.join(' · ') : 'No domain fell below the focus threshold in this set.'}</p></div></div><div className="rounded-xl border border-[hsl(var(--card-border))] bg-white p-5"><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Recommended next modules</p><div className="mt-4 grid gap-3 sm:grid-cols-2">{(weak.length ? MODULES.filter((module) => weak.some((domain) => module.title.toLowerCase().includes(domain.toLowerCase().split(' ')[0]))).slice(0, 2) : MODULES.slice(1, 3)).map((module) => <Link href={`/learn/${module.id}`} key={module.id} data-testid={`link-recommended-${module.id}`} className="flex items-center justify-between rounded-lg bg-[hsl(var(--background))] p-3 text-sm font-bold hover:text-[hsl(var(--primary))]"><span>{module.title}</span><ArrowRight size={14} /></Link>)}</div></div></div></div></div>;
  }
  if (mode === 'taking') return <div className="mx-auto max-w-3xl animate-enter-up"><div className="mb-7 flex items-center justify-between"><div><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--primary))]">Adaptive practice · {difficulty}</p><p className="mt-2 font-display text-xl font-bold">Question {sessionAnswers.length + 1} <span className="text-[hsl(var(--muted-foreground))]">of {length}</span></p></div><button onClick={() => setMode('setup')} className="rounded-lg p-2 text-[hsl(var(--muted-foreground))] hover:bg-[hsl(var(--muted))]" aria-label="Exit practice" data-testid="button-exit-practice"><X size={18} /></button></div><div className="mb-7 h-2 overflow-hidden rounded-full bg-[hsl(var(--muted))]"><div className="h-full rounded-full bg-[hsl(var(--primary))] transition-all" style={{ width: `${sessionAnswers.length / length * 100}%` }} /></div><div className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-10"><div className="mb-8 flex items-center justify-between"><Badge tone="teal">{question.domain}</Badge><span className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.14em] text-[hsl(var(--muted-foreground))]">{question.difficulty}</span></div><h1 className="font-display text-2xl font-bold leading-9 tracking-[-.025em] sm:text-3xl">{question.stem}</h1><div className="mt-8 space-y-3">{question.choices.map((choice, index) => <button key={choice} onClick={() => setSelected(index)} data-testid={`button-answer-${index}`} className={cn('flex w-full items-start gap-3 rounded-xl border p-4 text-left text-sm leading-6 transition-all', selected === index ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary)/.08)] text-[hsl(var(--primary))]' : 'border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/.55)]')}><span className={cn('flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono-clinical text-[10px] font-bold', selected === index ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary))] text-white' : 'border-[hsl(var(--border))]')}>{String.fromCharCode(65 + index)}</span>{choice}</button>)}</div><div className="mt-8 flex items-center justify-between border-t border-[hsl(var(--border))] pt-6"><p className="text-xs text-[hsl(var(--muted-foreground))]">{streak > 0 ? `${streak} consecutive correct · next item may increase in difficulty` : 'Select the best answer to continue'}</p><Button onClick={answer} disabled={selected === null} data-testid="button-submit-answer">{sessionAnswers.length + 1 === length ? 'Finish set' : 'Submit answer'} <ArrowRight size={15} /></Button></div></div></div>;
  return <div className="animate-enter-up"><PageIntro eyebrow="Deliberate practice" title="Make the next call clearer." description="Choose a set length and the engine will shift difficulty as your reasoning stays consistent. Every answer is saved locally to your workspace." /><div className="grid gap-7 lg:grid-cols-[1fr_340px]"><section className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-9"><div className="mb-8 flex items-start gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[hsl(var(--primary)/.1)] text-[hsl(var(--primary))]"><Target size={22} /></div><div><h2 className="font-display text-xl font-bold">Build an adaptive set</h2><p className="mt-1 text-sm leading-6 text-[hsl(var(--muted-foreground))]">Start at foundational difficulty. Two consecutive correct answers move the set up; an incorrect answer returns it to a foundational concept.</p></div></div><p className="mb-3 font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">How much time do you have?</p><div className="grid grid-cols-2 gap-3 sm:grid-cols-5">{[10, 25, 50, 100, 200].map((value) => <button key={value} onClick={() => setLength(value)} data-testid={`button-practice-length-${value}`} className={cn('rounded-xl border p-4 text-left transition-all', length === value ? 'border-[hsl(var(--primary))] bg-[hsl(var(--primary)/.08)]' : 'border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/.45)]')}><p className="font-display text-xl font-bold">{value}</p><p className="mt-1 text-[11px] text-[hsl(var(--muted-foreground))]">{value <= 10 ? '8 min' : value <= 25 ? '18 min' : value <= 50 ? '35 min' : value <= 100 ? '70 min' : '2+ hrs'}</p></button>)}</div><Button className="mt-8 w-full sm:w-auto" onClick={begin} data-testid="button-start-practice">Start adaptive set <ArrowRight size={16} /></Button></section><aside className="rounded-2xl bg-[hsl(var(--sidebar))] p-7 text-white"><div className="mb-5 flex items-center gap-2 text-[hsl(var(--sidebar-primary))]"><SlidersHorizontal size={17} /><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em]">What changes</p></div><ul className="space-y-5">{['Difficulty follows your consecutive answers', 'Domain signals feed your feedback sheet', 'Answers and progress stay on this device'].map((text, index) => <li key={text} className="flex gap-3 text-sm leading-6 text-slate-300"><span className="font-mono-clinical text-xs text-[hsl(var(--sidebar-primary))]">0{index + 1}</span>{text}</li>)}</ul><div className="mt-8 border-t border-[hsl(var(--sidebar-border))] pt-5"><p className="text-xs text-slate-400">Question capacity</p><p className="mt-1 font-display text-2xl font-bold text-white">400</p><p className="text-xs text-slate-400">Seeded topics across the pathway</p></div></aside></div></div>;
}

function ProgressPage() {
  const [progress] = useState(readProgress);
  const total = progress.answers.length;
  const correct = progress.answers.filter((answer) => answer.correct).length;
  const byDomain = Object.entries(progress.answers.reduce<Record<string, { total: number; correct: number }>>((acc, item) => { acc[item.domain] = acc[item.domain] || { total: 0, correct: 0 }; acc[item.domain].total += 1; if (item.correct) acc[item.domain].correct += 1; return acc; }, {}));
  return <div className="animate-enter-up"><PageIntro eyebrow="Your signal over time" title="Progress you can act on." description="This is a local snapshot of your learning rhythm. Use the pattern to choose what to revisit before your next supervised shift." action={<Link href="/practice" data-testid="link-progress-practice" className="inline-flex items-center gap-2 rounded-lg bg-[hsl(var(--primary))] px-4 py-2.5 text-sm font-bold text-white shadow-sm hover:-translate-y-0.5">Practice now <ArrowRight size={15} /></Link>} /><div className="grid gap-4 sm:grid-cols-3"><StatCard label="Modules complete" value={`${progress.completedModules.length}/${MODULES.length}`} detail="Keep one concept moving forward" icon={BookOpen} /><StatCard label="Questions answered" value={String(total)} detail={total ? `${Math.round(correct / total * 100)}% overall accuracy` : 'Your first signal is waiting'} icon={Crosshair} tone="coral" /><StatCard label="Study rhythm" value={progress.dailyDone ? 'On plan' : 'Open'} detail={progress.dailyDone ? 'Today’s plan is logged' : 'Complete today’s plan'} icon={Activity} tone="sky" /></div><div className="mt-6 grid gap-6 xl:grid-cols-[1.1fr_.9fr]"><section className="rounded-2xl border border-[hsl(var(--card-border))] bg-white p-6 shadow-[var(--shadow-sm)] sm:p-8" data-testid="card-domain-performance"><div className="mb-7 flex items-center justify-between"><div><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em] text-[hsl(var(--muted-foreground))]">Domain performance</p><h2 className="mt-1 font-display text-xl font-bold">Where to place your next hour</h2></div><Network size={19} className="text-[hsl(var(--primary))]" /></div>{byDomain.length ? <div className="space-y-5">{byDomain.map(([domain, result]) => { const value = Math.round(result.correct / result.total * 100); return <div key={domain} data-testid={`row-domain-${domain.toLowerCase().replaceAll(' ', '-')}`}><div className="mb-2 flex items-center justify-between text-xs"><span className="font-bold">{domain}</span><span className={cn('font-mono-clinical text-[10px]', value < 70 ? 'text-[hsl(var(--accent))]' : 'text-[hsl(var(--primary))')}>{value}% · {result.total} answered</span></div><div className="h-2 overflow-hidden rounded-full bg-[hsl(var(--muted))]"><div className={cn('h-full rounded-full', value < 70 ? 'bg-[hsl(var(--accent))]' : 'bg-[hsl(var(--primary))')} style={{ width: `${value}%` }} /></div></div>; })}</div> : <div className="rounded-xl border border-dashed border-[hsl(var(--border))] p-8 text-center"><Crosshair className="mx-auto mb-3 text-[hsl(var(--muted-foreground))]" size={24} /><p className="text-sm font-bold">No domain signal yet</p><p className="mt-1 text-xs text-[hsl(var(--muted-foreground))]">Complete a 10-question set to see strengths and focus areas.</p><Link href="/practice" data-testid="link-empty-progress-practice" className="mt-4 inline-flex text-xs font-bold text-[hsl(var(--primary))]">Start your first set <ArrowRight size={13} className="ml-1" /></Link></div>}</section><section className="rounded-2xl bg-[hsl(var(--sidebar))] p-6 text-white shadow-[var(--shadow-md)] sm:p-8"><div className="mb-7 flex items-center gap-2 text-[hsl(var(--sidebar-primary))]"><Sparkles size={17} /><p className="font-mono-clinical text-[10px] font-bold uppercase tracking-[.16em]">Actionable feedback</p></div><h2 className="font-display text-2xl font-bold leading-8">Small repetitions become calm decisions.</h2><div className="mt-7 space-y-4">{[progress.completedModules.length < 2 ? 'Finish the foundations module, then return to cardiac emergencies.' : 'Revisit the module where your last two answers missed.', total === 0 ? 'Start with 10 questions to reveal a baseline.' : 'Review the rationale after every miss before starting another set.', 'Use one case study to rehearse your escalation language.'].map((item, index) => <div key={item} className="flex gap-3 border-t border-[hsl(var(--sidebar-border))] pt-4"><span className="font-mono-clinical text-xs text-[hsl(var(--sidebar-primary))]">0{index + 1}</span><p className="text-sm leading-6 text-slate-300">{item}</p></div>)}</div><Link href="/learn" data-testid="link-progress-learning" className="mt-8 inline-flex items-center gap-2 text-xs font-bold text-[hsl(var(--sidebar-primary))]">Return to the pathway <ArrowRight size={14} /></Link></section></div></div>;
}

function NotFoundPage() { return <div className="flex min-h-[55vh] flex-col items-center justify-center text-center"><div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[hsl(var(--primary)/.1)] text-[hsl(var(--primary))]"><Activity /></div><h1 className="font-display text-3xl font-bold">That page is off the monitor.</h1><p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]">Return to your workspace and pick up where you left off.</p><Link href="/" data-testid="link-not-found-home" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[hsl(var(--primary))]">Back to overview <ArrowRight size={15} /></Link></div>; }

function Router() {
  return <AppShell><Switch><Route path="/" component={DashboardPage} /><Route path="/learn" component={LearnPage} /><Route path="/learn/:id" component={ModuleDetailPage} /><Route path="/library" component={LibraryPage} /><Route path="/cases" component={CasesPage} /><Route path="/cases/:id" component={CaseDetailPage} /><Route path="/practice" component={PracticePage} /><Route path="/progress" component={ProgressPage} /><Route component={NotFoundPage} /></Switch></AppShell>;
}

function App() { return <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}><Router /></WouterRouter>; }

export default App;