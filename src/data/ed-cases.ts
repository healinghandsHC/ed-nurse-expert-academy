import type { CaseStudy, CaseClinicalDetail } from "./types";

export const BASE_CASES: CaseStudy[] = [
  {
    id: "case-01",
    acuity: "High acuity",
    title: "The ten minutes that matter",
    diagnosis: "STEMI (ST-elevation myocardial infarction)",
    setting: "ED · triage to resuscitation bay",
    summary: "A 58-year-old man arrives with crushing chest pain and sweating. His EKG (electrocardiogram) shows ST elevation, which means a complete blockage heart attack.",
    tags: ["Cardiac", "STEMI", "Escalation"],
    prompt: "What do you do in the first ten minutes, and what do you tell the cath lab (cardiac catheterization laboratory) team?",
    debrief: [
      "Get the 12-lead EKG (electrocardiogram) within 10 minutes of arrival and hand it to the provider at once.",
      "Keep the patient still, on the monitor, with two IV (intravenous) lines, and give ordered medicines without slowing transport.",
      "Activate the cath lab (cardiac catheterization laboratory) early. Door-to-balloon time, the minutes from arrival to opening the artery, must be under 90 minutes.",
    ],
    detail: {} as CaseClinicalDetail,
  },
  {
    id: "case-02",
    acuity: "High acuity",
    title: "Fever, confusion, and a rising lactate",
    diagnosis: "Sepsis with hypotension",
    setting: "ED · resuscitation bay",
    summary: "A 74-year-old woman is febrile, confused, and hypotensive, with a rising lactate, which means a blood marker of poor tissue blood flow.",
    tags: ["Sepsis", "Lactate", "Bundle"],
    prompt: "What belongs in the first hour, and in what order?",
    debrief: [
      "Draw blood cultures before antibiotics, then give broad-spectrum antibiotics within the first hour. Cultures first, antibiotics second, never the other way around.",
      "Draw a lactate early and repeat it. A lactate of 4 or higher is a danger sign for shock, which means the circulation is failing. A rising lactate means the patient is getting worse.",
      "Give IV (intravenous) fluids right away and recheck blood pressure, mental status, and urine output after each liter. A blood pressure that stays low after fluids means vasopressors, medicines that tighten blood vessels, and an urgent provider call.",
    ],
    detail: {} as CaseClinicalDetail,
  },
  {
    id: "case-03",
    acuity: "High acuity",
    title: "Last known well was 90 minutes ago",
    diagnosis: "Acute ischemic stroke",
    setting: "ED · stroke alert",
    tags: ["Stroke", "BE-FAST", "Time"],
    summary: "A 67-year-old man has sudden left-sided weakness and slurred speech. His last known well, the time he was last seen normal, was 90 minutes ago.",
    prompt: "What do you assess first, what must not delay the CT (computed tomography) scan, and what do you report?",
    debrief: [
      "Last known well is sacred. Write it down, say it out loud, and tell every team member.",
      "Do the BE-FAST (Balance, Eyes, Face, Arms, Speech, Time) check, then get the CT (computed tomography) scan fast. Nothing routine delays the scan.",
      "Keep the patient with nothing by mouth until swallowing is cleared, and protect the treatment window.",
    ],
    detail: {} as CaseClinicalDetail,
  },
  {
    id: "case-04",
    acuity: "Moderate acuity",
    title: "He cannot finish a sentence",
    diagnosis: "Severe asthma exacerbation",
    setting: "ED · monitored bed",
    tags: ["Respiratory", "Asthma", "Work of breathing"],
    summary: "A 26-year-old man with asthma is sitting in the tripod position, speaking in single words, with a falling peak flow, which measures how fast he can breathe out.",
    prompt: "How do you judge severity, and what is the treatment sequence?",
    debrief: [
      "Judge severity by the patient, not just the numbers: speech, work of breathing, air movement, and oxygen level together.",
      "Give oxygen to target, nebulized bronchodilators, which open the air tubes, and steroids early. Steroids take hours to work.",
      "A patient who is getting tired, quiet, or confused is getting worse, even if the wheeze fades. Call the provider now.",
    ],
    detail: {} as CaseClinicalDetail,
  },
  {
    id: "case-05",
    acuity: "High acuity",
    title: "Bleeding faster than you can replace it",
    diagnosis: "Hemorrhagic shock from blunt trauma",
    setting: "ED · trauma bay",
    tags: ["Trauma", "Hemorrhage", "Transfusion"],
    summary: "A 34-year-old man after a car crash is pale, tachycardic, and hypotensive, with a positive FAST (focused assessment with sonography for trauma) exam, which means free fluid, likely blood, in the belly.",
    prompt: "What is the bleeding-control and transfusion sequence, and when do you activate massive transfusion?",
    debrief: [
      "Bleeding control comes first: direct pressure, packing, or a tourniquet, which is a tight band that stops blood flow to a limb.",
      "Start two large-bore IV (intravenous) lines, draw type and crossmatch blood early, and keep the patient warm.",
      "Give blood early in a balanced mix of red cells, plasma, and platelets, about 1 to 1 to 1, and activate massive transfusion before the patient crashes.",
    ],
    detail: {} as CaseClinicalDetail,
  },
];

export const CASE_DETAILS: Record<string, CaseClinicalDetail> = {
  "case-01": {
    history: [
      "A 58-year-old man with crushing substernal chest pain for 45 minutes. The pain radiates to his left arm and jaw. He is sweating and nauseated.",
      "Past history: high blood pressure and high cholesterol. He smokes about a pack a day. His father had a heart attack at age 60.",
      "No aspirin taken at home. No known drug allergies. He has not taken any erectile dysfunction medicine in the past 48 hours.",
    ],
    currentSupport: [
      "Cardiac monitor with continuous heart rhythm, blood pressure, and oxygen monitoring. Defibrillator pads are at the bedside.",
      "Two large-bore IV (intravenous) lines in place. Oxygen saturation is 94 percent on room air, so no extra oxygen is needed right now.",
      "The patient is lying still in the resuscitation bay. He is not walking to the bathroom alone.",
    ],
    initialAssessment: [
      "Pain 9 out of 10, crushing and constant. Blood pressure 152 over 92, heart rate 104, breathing rate 22, oxygen saturation 94 percent on room air.",
      "Skin is pale and sweaty. Lungs are clear. No swelling in the legs. He is alert and anxious.",
      "12-lead EKG (electrocardiogram) at 10 minutes after arrival shows ST elevation in leads V2, V3, and V4, which points to an anterior STEMI (ST-elevation myocardial infarction).",
      "Troponin, a blood protein that rises when heart muscle is injured, is drawn and pending. A repeat EKG (electrocardiogram) is planned if pain or rhythm changes.",
    ],
    trend: [
      {
        time: "T+0min",
        findings: [
          "Pain 9 out of 10, blood pressure 152 over 92, heart rate 104, oxygen saturation 94 percent on room air.",
          "ST elevation in leads V2 to V4. The patient is sweaty and restless.",
        ],
      },
      {
        time: "T+10min",
        findings: [
          "Pain 6 out of 10 after aspirin and nitroglycerin as ordered. Blood pressure 138 over 84, heart rate 96.",
          "Cath lab (cardiac catheterization laboratory) activated. Second antiplatelet medicine and heparin, a blood thinning medicine, given as ordered.",
        ],
      },
      {
        time: "T+45min",
        findings: [
          "Pain 3 out of 10. Blood pressure 128 over 78, heart rate 88, oxygen saturation 96 percent on room air.",
          "In the cath lab (cardiac catheterization laboratory) for PCI (percutaneous coronary intervention), opening the artery from inside with a balloon.",
        ],
      },
    ],
    diagnostics: [
      "12-lead EKG (electrocardiogram) within 10 minutes of arrival, repeated if pain or rhythm changes.",
      "Troponin at arrival and repeated over time. One normal result does not clear the patient. The trend tells the real story.",
      "Blood tests: complete blood count, basic metabolic panel, and clotting studies, drawn from the IV (intravenous) line.",
      "Chest X-ray and continuous cardiac monitoring to watch for dangerous rhythms, falling blood pressure, and lung crackles.",
    ],
    decisionPoints: [
      {
        prompt: "The EKG (electrocardiogram) shows ST elevation. What do you do first?",
        coaching: "Hand the tracing to the provider at once and call for the STEMI (ST-elevation myocardial infarction) activation. Do not wait for the troponin result. The EKG (electrocardiogram) is the trigger.",
      },
      {
        prompt: "The provider orders aspirin, a second antiplatelet medicine, and heparin. What do you check before giving them?",
        coaching: "Confirm allergies, confirm no aspirin was already taken at home, and check for bleeding risk and recent surgery. Give the medicines without slowing transport to the cath lab (cardiac catheterization laboratory).",
      },
      {
        prompt: "The patient asks to walk to the bathroom. What do you say?",
        coaching: "Say no, and keep him still and on the monitor. Exertion raises heart demand, and a patient who looks stable can change without much warning.",
      },
    ],
    calculations: [
      {
        prompt: "Arrival was 14:02. The artery was opened at 15:20. What was the door-to-balloon time, and was it under the 90-minute goal?",
        answer: "15:20 minus 14:02 is 78 minutes. Yes, 78 minutes is under the 90-minute goal.",
      },
      {
        prompt: "Blood pressure is 152 over 92. Calculate the MAP (mean arterial pressure) using MAP equals (systolic blood pressure plus 2 times diastolic blood pressure) divided by 3.",
        answer: "MAP equals (152 plus 2 times 92) divided by 3, which is (152 plus 184) divided by 3, which is 336 divided by 3, which is 112 mmHg (millimeters of mercury).",
      },
    ],
    escalation: "\"S: This is the ED (emergency department) nurse calling about a 58-year-old man with an anterior STEMI (ST-elevation myocardial infarction). B: He arrived at 14:02 with 45 minutes of crushing chest pain radiating to his left arm and jaw. His EKG (electrocardiogram) at 14:12 shows ST elevation in leads V2 to V4. A: Right now his pain is 6 out of 10, blood pressure 138 over 84, heart rate 96, oxygen saturation 94 percent on room air. He has had aspirin, nitroglycerin, a second antiplatelet medicine, and heparin as ordered. He has two IV (intravenous) lines and is on the monitor with defibrillator pads at the bedside. R: The cath lab (cardiac catheterization laboratory) team is activated. We need transport now, with the monitor, oxygen, and the EKG (electrocardiogram) tracing. Please confirm you are ready to receive him.\"",
    fullDebrief: [
      {
        heading: "The first ten minutes",
        content: "Monitor, EKG (electrocardiogram), history, IV (intravenous) access, and reassessment, in that order. Get the 12-lead EKG (electrocardiogram) within 10 minutes of arrival and hand it to the provider at once. Ask when the pain began, where it is, what it feels like, where it travels, and what brings it on or eases it. Ask about shortness of breath, sweating, nausea, fainting, prior heart disease, diabetes, smoking, and family history.",
      },
      {
        heading: "Medicines without delay",
        content: "Aspirin helps stop a growing clot by making platelets, the blood cells that start clots, less sticky. Give it early when ordered and not allergic, and confirm the patient has not already taken a full dose at home. Nitroglycerin widens blood vessels and can ease heart pain. Check blood pressure first, ask about erectile dysfunction medicines taken recently, and recheck pain and pressure after each dose. Oxygen is a drug. Most patients with normal oxygen levels do not need extra oxygen.",
      },
      {
        heading: "Door-to-balloon is a team sport",
        content: "Door-to-balloon time means the minutes from hospital arrival to opening the blocked artery with a small balloon. The national goal is 90 minutes or less. Delays hide in small places: a missing consent, an empty oxygen tank, a slow elevator, or a repeat blood draw. Prepare the chart, the lines, the monitor, and the patient in parallel. Speak up the moment anything stalls. After the artery opens, watch the access site, often the wrist or groin, for bleeding or swelling, repeat the EKG (electrocardiogram), and keep watching the rhythm closely.",
      },
    ],
  },
  "case-02": {
    history: [
      "A 74-year-old woman brought in by her daughter for fever and new confusion for one day. She has burning when she passes urine and has passed very little urine today.",
      "Past history: type 2 diabetes and high blood pressure. She takes metformin and lisinopril at home. She lives with her daughter, who says she was normal yesterday.",
      "No known drug allergies. No recent surgery. No recent antibiotics. Her daughter reports she has been drinking very little fluid.",
    ],
    currentSupport: [
      "Cardiac monitor and continuous oxygen monitoring in the resuscitation bay. Oxygen saturation is 93 percent on room air.",
      "Two large-bore IV (intravenous) lines in place. Lactate and blood cultures are drawn on arrival, and broad-spectrum antibiotics are being prepared.",
      "Urinary catheter placed to measure urine output hour by hour. She is kept warm with blankets.",
    ],
    initialAssessment: [
      "Temperature 38.9 degrees Celsius, blood pressure 88 over 54, heart rate 118, breathing rate 24, oxygen saturation 93 percent on room air.",
      "She is confused, opens her eyes to voice, and answers slowly. Skin is warm, flushed, and dry. Her mouth is dry.",
      "Lactate is 4.2 mmol per liter (millimoles per liter), which is 4 or higher, a danger sign for shock, which means the circulation is failing. White blood cell count is high.",
      "Urinalysis shows signs of a urinary infection. The likely source is the urinary tract, but the team is still looking for other sources.",
    ],
    trend: [
      {
        time: "T+0min",
        findings: [
          "Blood pressure 88 over 54, heart rate 118, breathing rate 24, lactate 4.2 mmol per liter (millimoles per liter). Confused and slow to answer.",
          "Temperature 38.9 degrees Celsius. Urine output is very low.",
        ],
      },
      {
        time: "T+30min",
        findings: [
          "Blood pressure 82 over 50, heart rate 126, breathing rate 26, lactate 4.9 mmol per liter (millimoles per liter). More drowsy than on arrival.",
          "Blood cultures drawn before antibiotics. Broad-spectrum antibiotics given. First fluid bolus running.",
        ],
      },
      {
        time: "T+60min",
        findings: [
          "Blood pressure 78 over 46, heart rate 134, breathing rate 28, oxygen saturation 91 percent on room air, lactate 5.6 mmol per liter (millimoles per liter). Barely opens her eyes to voice.",
          "Urine output has almost stopped. Norepinephrine, a vasopressor medicine that squeezes blood vessels tighter to raise blood pressure, is started on a pump as ordered, and the intensive care team is called.",
        ],
      },
    ],
    diagnostics: [
      "Lactate at arrival and repeated often. A rising lactate means tissue blood flow is getting worse. A falling lactate means treatment is working.",
      "Two sets of blood cultures drawn before antibiotics, plus a urine culture. Cultures first, antibiotics second, and never let cultures delay antibiotics for long.",
      "Blood tests: complete blood count, basic metabolic panel, liver tests, and clotting studies. Blood sugar checked, because she has diabetes.",
      "Chest X-ray and urinalysis to look for the source of infection. The team also checks the belly, skin, and IV (intravenous) sites for other sources.",
    ],
    decisionPoints: [
      {
        prompt: "Her blood pressure is 88 over 54 and her lactate is 4.2 and rising. What belongs in the first hour, and in what order?",
        coaching: "Screen early, draw lactate and cultures, give broad-spectrum antibiotics within the first hour, run fluids, and support the pressure. Cultures before antibiotics, then antibiotics fast. Do not delay antibiotics to wait for culture results. Reassess blood pressure, mental status, and urine output after fluids.",
      },
      {
        prompt: "Her blood pressure falls to 82 over 50 after the first fluids, then to 78 over 46. What do you do?",
        coaching: "Tell the provider at once and keep giving fluids as ordered. A blood pressure that stays low after fluids means vasopressors, medicines that tighten blood vessels, are needed. Norepinephrine is usually first. These medicines often need a pump, frequent pressure checks, and close watching of the IV (intravenous) site for leaking.",
      },
      {
        prompt: "Her daughter asks why you took blood cultures before the antibiotics. What do you say?",
        coaching: "Say it plainly: cultures taken before antibiotics are more likely to grow the germ and show the team which antibiotic works best. Giving antibiotics first can hide the germ. The antibiotics still go in fast, right after the cultures.",
      },
    ],
    calculations: [
      {
        prompt: "Blood pressure is 88 over 54. Calculate the MAP (mean arterial pressure) using MAP equals (systolic blood pressure plus 2 times diastolic blood pressure) divided by 3.",
        answer: "MAP equals (88 plus 2 times 54) divided by 3, which is (88 plus 108) divided by 3, which is 196 divided by 3, which is about 65 mmHg (millimeters of mercury). A MAP (mean arterial pressure) under 65 mmHg (millimeters of mercury) is too low to feed the organs well.",
      },
      {
        prompt: "She weighs 80 kilograms. The sepsis fluid dose is 30 milliliters per kilogram. How much fluid is that in total?",
        answer: "30 times 80 equals 2,400 milliliters, which is 2.4 liters. Give it as ordered and reassess blood pressure, breathing, and lung sounds during the fluids.",
      },
    ],
    escalation: "\"S: This is the ED (emergency department) nurse calling about a 74-year-old woman with sepsis and low blood pressure. B: She arrived at 14:00 febrile and confused, with burning urination and very low urine output today. Her daughter says she was normal yesterday. She has diabetes and high blood pressure. A: Right now, at 15:00, her temperature is 38.9 degrees Celsius, blood pressure 78 over 46, heart rate 134, breathing rate 28, oxygen saturation 91 percent on room air. Her lactate rose from 4.2 to 4.9 to 5.6 mmol per liter (millimoles per liter). Her MAP (mean arterial pressure) is about 57 mmHg (millimeters of mercury). Blood cultures were drawn before antibiotics, broad-spectrum antibiotics are given, and fluids are running. Norepinephrine, a vasopressor medicine that squeezes blood vessels tighter to raise blood pressure, is started on a pump as ordered. Her urine output has almost stopped and she barely opens her eyes to voice. R: Her blood pressure is still falling after fluids and her lactate is still rising. I need you at the bedside now, and I need the intensive care team here now to review her for ongoing vasopressor care.\"",
    fullDebrief: [
      {
        heading: "The one-hour bundle",
        content: "In sepsis, the first hour holds five jobs: measure the lactate, draw blood cultures before antibiotics, give broad-spectrum antibiotics, give fluids, and start vasopressors, medicines that tighten blood vessels, if the blood pressure stays low after fluids. The order matters. Cultures first, antibiotics second, and never delay antibiotics to wait for culture results. A common first fluid order is 30 milliliters per kilogram of body weight of a balanced salt solution, run wide open through a large-bore line, then reassess the lungs, blood pressure, and breathing after each liter.",
      },
      {
        heading: "Read the lactate like a trend",
        content: "Lactate is a waste product that builds up when tissues are not getting enough oxygen. A lactate of 4 or higher is a danger sign for shock, which means the circulation is failing. One high value is a warning. A rising value means the patient is getting worse, even if the blood pressure has not fallen yet. A falling value after fluids and antibiotics means treatment is working. Recheck it often, and report the trend, not just one number.",
      },
      {
        heading: "Confusion is a vital sign",
        content: "New confusion in an older adult with fever is a red flag, not just old age. Older adults may show only confusion or weakness, with no fever at all, so trust the screening and the lactate and escalate early even when the patient looks comfortable. Watch alertness, speech, urine output, skin color, and breathing rate together. A patient who is getting more drowsy, passing less urine, or breathing faster is getting worse. Call the provider early, before the blood pressure crashes.",
      },
    ],
  },
  "case-03": {
    history: [
      "A 67-year-old man with sudden left-sided weakness and slurred speech. His wife saw him normal at breakfast and found him weak 90 minutes ago.",
      "Last known well, the time he was last seen normal, was 13:30. He arrived at 15:00. Past history: high blood pressure and high cholesterol.",
      "No blood thinner use. No recent surgery or bleeding. No known drug allergies. He has never had a stroke before.",
    ],
    currentSupport: [
      "Cardiac monitor and continuous oxygen monitoring in the stroke bay. Oxygen saturation is 97 percent on room air.",
      "One large-bore IV (intravenous) line in place. A second line is being placed for labs and treatment.",
      "Nothing by mouth. He is kept still on a stretcher with the head of the bed flat unless the team orders it raised.",
    ],
    initialAssessment: [
      "BE-FAST (Balance, Eyes, Face, Arms, Speech, Time) check is positive: left face droop, left arm drift, and slurred speech. Balance and vision are hard to test because he is weak.",
      "Blood pressure 178 over 96, heart rate 88, breathing rate 18, oxygen saturation 97 percent on room air. Blood sugar is 142 milligrams per deciliter.",
      "NIHSS (National Institutes of Health Stroke Scale), a scored exam that measures how severe a stroke is, is 12, which means a moderate to severe stroke.",
      "He is alert and follows commands, but his speech is hard to understand. His left leg is weaker than his right leg.",
    ],
    trend: [
      {
        time: "T+0min",
        findings: [
          "Arrival at 15:00, 90 minutes after last known well at 13:30. NIHSS (National Institutes of Health Stroke Scale) is 12.",
          "Blood pressure 178 over 96, heart rate 88. Left face droop, left arm drift, slurred speech.",
        ],
      },
      {
        time: "T+25min",
        findings: [
          "CT (computed tomography) scan of the brain shows no bleeding. NIHSS (National Institutes of Health Stroke Scale) is still 12.",
          "Blood pressure 172 over 92. Labs are back. No bleeding risk found. The team confirms he is a candidate for tPA (tissue plasminogen activator), the clot busting stroke medicine.",
        ],
      },
      {
        time: "T+60min",
        findings: [
          "tPA (tissue plasminogen activator) started at 15:52, 52 minutes after arrival. NIHSS (National Institutes of Health Stroke Scale) is 9.",
          "Blood pressure 168 over 90, heart rate 84. Speech is a little clearer. Left arm strength is slightly better.",
        ],
      },
    ],
    diagnostics: [
      "Non-contrast CT (computed tomography) scan of the brain right away. The scan shows bleeding or no bleeding and guides treatment. Nothing routine delays the scan.",
      "Finger-stick blood sugar at once, plus blood tests: complete blood count, basic metabolic panel, and clotting studies.",
      "12-lead EKG (electrocardiogram) to look for an irregular rhythm that can cause a stroke.",
      "NIHSS (National Institutes of Health Stroke Scale) scored by trained staff, then repeated often to catch any change.",
    ],
    decisionPoints: [
      {
        prompt: "His wife says he was fine at breakfast, then weak. What is the single most important time question?",
        coaching: "Ask exactly when he was last seen normal. That is the last known well time. Write it down, say it out loud, and tell every team member. It decides whether clot busting treatment is still possible.",
      },
      {
        prompt: "The team wants a CT (computed tomography) scan, but the patient needs a urine test and a second IV (intravenous) line. What goes first?",
        coaching: "The CT (computed tomography) scan goes first. Do not delay the scan for extra tasks. Labs and lines can happen in parallel or right after, but the scan must not wait.",
      },
      {
        prompt: "Before tPA (tissue plasminogen activator), what must the team check?",
        coaching: "Blood pressure, blood sugar, lab tests, and bleeding risk. Ask about recent surgery, recent bleeding, and blood thinner use. Check for allergies. Give nothing by mouth until swallowing is cleared by the team.",
      },
    ],
    calculations: [
      {
        prompt: "Last known well was 13:30. tPA (tissue plasminogen activator) can be given within 4.5 hours of symptom start. When does that window close, and how much time was left when he arrived at 15:00?",
        answer: "13:30 plus 4.5 hours is 18:00. He arrived at 15:00, so 3 hours were left in the window at arrival.",
      },
      {
        prompt: "He arrived at 15:00 and tPA (tissue plasminogen activator) started at 15:52. What was the door-to-needle time, and was it under the 60-minute goal?",
        answer: "15:52 minus 15:00 is 52 minutes. Yes, 52 minutes is under the 60-minute goal.",
      },
    ],
    escalation: "\"S: This is the ED (emergency department) nurse calling a stroke alert for a 67-year-old man. B: His last known well was 13:30, 90 minutes before his 15:00 arrival. His wife saw him normal at breakfast. He has high blood pressure and high cholesterol, no blood thinner use, and no recent surgery or bleeding. A: His BE-FAST (Balance, Eyes, Face, Arms, Speech, Time) check is positive for left face droop, left arm drift, and slurred speech. His NIHSS (National Institutes of Health Stroke Scale) is 12. Blood pressure is 178 over 96, heart rate 88, oxygen saturation 97 percent on room air, blood sugar 142 milligrams per deciliter. His CT (computed tomography) scan shows no bleeding. R: He is a candidate for tPA (tissue plasminogen activator), the clot busting stroke medicine, and we need the stroke team at the bedside now to confirm treatment and protect the window, which closes at 18:00.\"",
    fullDebrief: [
      {
        heading: "Last known well is sacred",
        content: "Last known well is the time the patient was last seen normal. Ask the patient, family, and bystanders exactly when symptoms started. Write that time down, say it out loud, and tell every team member. tPA (tissue plasminogen activator), the clot busting stroke medicine, can help some patients with a clot type stroke when given within 4.5 hours from when symptoms started. Late arrival can close the window.",
      },
      {
        heading: "BE-FAST, then scan",
        content: "Use BE-FAST (Balance, Eyes, Face, Arms, Speech, Time): Balance means sudden loss of balance. Eyes means sudden vision change. Face means one side drooping. Arms means one arm is weak. Speech means words are hard to understand. Time means call for help fast. Test each sign simply: ask the patient to smile, raise both arms, and repeat a simple phrase. Then get the CT (computed tomography) scan fast and do not delay it for extra tasks.",
      },
      {
        heading: "After treatment, keep watching",
        content: "After treatment, recheck neuro signs often. Neuro means brain and nerve function checks like speech, strength, and alertness. Watch for bleeding, worsening weakness, headache, or falling alertness. Raise the head of the bed only as ordered, and report changes at once. Door-to-needle means the time from arrival to the start of the clot busting medicine. The goal is 60 minutes or less for patients who qualify.",
      },
    ],
  },
  "case-04": {
    history: [
      "A 26-year-old man with asthma since childhood. He has had a cold for three days and his rescue inhaler has not helped today.",
      "He used his inhaler six times today with little relief. He has been to the ED (emergency department) twice before for asthma, but never needed a breathing tube.",
      "No known drug allergies. He does not smoke. His personal best peak flow, the fastest he can breathe out, is 500 liters per minute.",
    ],
    currentSupport: [
      "Oxygen by nasal cannula to hold oxygen saturation at 93 to 95 percent. He is on a cardiac monitor in a monitored bed.",
      "Continuous nebulized albuterol, a bronchodilator medicine that relaxes the muscle squeezing the air tubes, plus ipratropium in the first treatments.",
      "Steroids given early by mouth to calm swelling inside the air tubes. He is sitting upright in the tripod position, leaning forward with his hands on his knees.",
    ],
    initialAssessment: [
      "Breathing rate 32, heart rate 122, blood pressure 128 over 78, oxygen saturation 91 percent on room air. Temperature is normal.",
      "He speaks in single words and cannot finish a sentence. He is using the extra breathing muscles in his neck and shoulders with every breath.",
      "Wheeze is heard throughout both lungs, with a long exhale. Air movement is reduced. His lips are not blue and he is still alert.",
      "Peak flow is 150 liters per minute, which is 30 percent of his personal best of 500. That is severe. A patient who cannot finish a sentence is severe until proven otherwise.",
    ],
    trend: [
      {
        time: "T+0min",
        findings: [
          "Peak flow 150 liters per minute, 30 percent of personal best. Oxygen saturation 91 percent on room air, breathing rate 32.",
          "Speaking in single words. Wheeze throughout both lungs, with hard work of breathing.",
        ],
      },
      {
        time: "T+20min",
        findings: [
          "Peak flow 210 liters per minute. Oxygen saturation 94 percent on oxygen, breathing rate 26, heart rate 112.",
          "Speaking in short phrases of three to four words. Wheeze is still present but air movement is better.",
        ],
      },
      {
        time: "T+60min",
        findings: [
          "Peak flow 280 liters per minute. Oxygen saturation 96 percent on oxygen, breathing rate 20, heart rate 98.",
          "Speaking in full sentences. Work of breathing is much quieter. Magnesium sulfate was given as an IV (intravenous) drip as ordered because he was slow to open up.",
        ],
      },
    ],
    diagnostics: [
      "Peak flow measured at arrival and repeated after treatments. Compare each result to his personal best, not just to a normal range.",
      "Oxygen saturation monitored continuously, with a target of 93 to 95 percent for asthma.",
      "Blood gas or venous blood gas if he is tiring, to check carbon dioxide, the waste gas, and acid levels in the blood.",
      "Chest X-ray only if the team suspects pneumonia, a collapsed lung, or another cause. A chest X-ray does not diagnose asthma severity.",
    ],
    decisionPoints: [
      {
        prompt: "He can only speak in single words and his peak flow is 30 percent of his best. How severe is this?",
        coaching: "This is severe. Danger signs are a silent chest with little air moving, blue lips, drowsiness, and using the extra breathing muscles with every breath. Peak flow numbers help, but the patient tells you more. Treat him as severe now.",
      },
      {
        prompt: "He looks a little better after one nebulizer. Do you still give the steroid?",
        coaching: "Yes. Give steroids early. They calm swelling inside the air tubes, but they take hours to work, so give them early even when the patient looks better after one nebulizer.",
      },
      {
        prompt: "His wheeze fades, but he is getting drowsy and his breathing is slowing. What does that mean?",
        coaching: "That is worse, not better. A fading wheeze with exhaustion or confusion can mean very little air is moving. Call the provider now. He may need help breathing, including BiPAP (bilevel positive airway pressure), a mask device that rests the breathing muscles, or a breathing tube.",
      },
    ],
    calculations: [
      {
        prompt: "His personal best peak flow is 500 liters per minute. His peak flow now is 150 liters per minute. What percent of his personal best is that?",
        answer: "150 divided by 500 equals 0.30, which is 30 percent. Under 50 percent of personal best is severe.",
      },
      {
        prompt: "His peak flow rose from 150 to 280 liters per minute after treatment. By how many liters per minute did it rise, and what percent of his personal best is 280?",
        answer: "280 minus 150 equals a rise of 130 liters per minute. 280 divided by 500 equals 0.56, which is 56 percent of his personal best. He is improving, but he is not back to normal yet.",
      },
    ],
    escalation: "\"S: This is the ED (emergency department) nurse calling about a 26-year-old man with a severe asthma exacerbation. B: He has had asthma since childhood and a cold for three days. His rescue inhaler did not help today, and he used it six times. His personal best peak flow is 500 liters per minute. A: On arrival he was speaking in single words, breathing 32 times a minute, heart rate 122, oxygen saturation 91 percent on room air, with a peak flow of 150 liters per minute, which is 30 percent of his best. After nebulized albuterol and ipratropium, steroids, and magnesium sulfate as ordered, his peak flow is now 280 liters per minute, oxygen saturation 96 percent, breathing rate 20, and he speaks in full sentences. R: He is improving but still well below his best, and he needed magnesium sulfate to open up. I need you to reassess him now and advise on ongoing nebulizers and admission.\"",
    fullDebrief: [
      {
        heading: "Judge severity by the patient",
        content: "Sort severity fast. A patient who cannot finish a sentence is severe until proven otherwise. Danger signs are a silent chest with little air moving, blue lips, drowsiness, and using the extra breathing muscles in the neck and shoulders with every breath. Peak flow numbers help, but the patient tells you more. After every treatment, go back: breathing rate, air movement, speech, and oxygen level. Winning looks like longer sentences and quieter work of breathing.",
      },
      {
        heading: "The treatment sequence",
        content: "Give oxygen to hold the target range. For most asthma patients, aim for 93 to 95 percent saturation. The first medicine is a bronchodilator, a drug that relaxes the muscle squeezing the air tubes. Albuterol is given by nebulizer, a machine that turns liquid medicine into a mist the patient breathes in. Ipratropium is often added to the first nebulizer treatments. Steroids, medicines that calm swelling inside the air tubes, are the backbone of treatment, but they take hours to work, so give them early. For severe attacks that are not opening up, the provider may order magnesium sulfate as an IV (intravenous) drip.",
      },
      {
        heading: "Losing looks like exhaustion",
        content: "Losing looks like exhaustion, confusion, or an oxygen level that will not hold. In life threatening asthma that is not responding, epinephrine, the hormone also called adrenaline, may be given as a shot into the muscle or as a drip, as a provider led escalation. Your role is fast preparation and close monitoring of heart rate and rhythm. Losing patients need the provider now, and may need a breathing tube.",
      },
    ],
  },
  "case-05": {
    history: [
      "A 34-year-old man after a high-speed car crash. He was the driver, wearing a seat belt. Paramedics found him pale and confused at the scene.",
      "He has no known medical problems and takes no regular medicines. No known drug allergies. He has had no blood transfusion before.",
      "He complains of belly pain. He has no obvious bleeding outside the body. His belly is tender and swollen.",
    ],
    currentSupport: [
      "Two large-bore IV (intravenous) lines in the arms. Blood is running through a fluid warmer. He is covered with warm blankets and the room is warm.",
      "Cardiac monitor with blood pressure checked every few minutes. Oxygen by face mask, with oxygen saturation 94 percent.",
      "Massive transfusion protocol activated. Type and crossmatch blood was drawn with the first IV (intravenous) stick.",
    ],
    initialAssessment: [
      "Blood pressure 82 over 50, heart rate 128, breathing rate 26, oxygen saturation 94 percent on oxygen. Temperature 35.8 degrees Celsius, which is low.",
      "Skin is pale, cool, and sweaty. Capillary refill, the time for color to return after you press a fingernail, is slow at 4 seconds.",
      "FAST (focused assessment with sonography for trauma) exam is positive for free fluid in the belly, which likely means internal bleeding. Belly is tender and firm.",
      "He is drowsy but opens his eyes to voice. Glasgow Coma Scale, a score of alertness, is 14 out of 15. Urine output is very low.",
    ],
    trend: [
      {
        time: "T+0min",
        findings: [
          "Blood pressure 92 over 58, heart rate 118. Hemoglobin 11.2 grams per deciliter. Lactate 4.2 mmol per liter (millimoles per liter).",
          "Pale and anxious. FAST (focused assessment with sonography for trauma) exam is positive for free fluid in the belly.",
        ],
      },
      {
        time: "T+15min",
        findings: [
          "Blood pressure 82 over 50, heart rate 132. Hemoglobin 9.4 grams per deciliter. Lactate 5.1 mmol per liter (millimoles per liter).",
          "More drowsy and more pale. Massive transfusion protocol activated. First units of blood are running.",
        ],
      },
      {
        time: "T+45min",
        findings: [
          "Blood pressure 104 over 66, heart rate 108. Hemoglobin 10.1 grams per deciliter. Lactate 3.4 mmol per liter (millimoles per liter).",
          "More alert, skin is warmer, urine output is starting to rise. The surgery team is preparing for the operating room.",
        ],
      },
    ],
    diagnostics: [
      "FAST (focused assessment with sonography for trauma) exam at the bedside to look for free fluid, likely blood, in the belly.",
      "Blood tests: complete blood count, type and crossmatch, lactate, calcium, clotting studies, and blood gas, drawn with the first IV (intravenous) stick.",
      "CT (computed tomography) scan only when the patient is stable enough to travel safely. An unstable bleeding patient goes to the operating room, not the scanner.",
      "Chest and pelvis X-rays in the trauma bay, plus continuous vital signs every few minutes and strict tracking of blood given and urine made.",
    ],
    decisionPoints: [
      {
        prompt: "He has no bleeding you can see, but his blood pressure is falling and his FAST (focused assessment with sonography for trauma) exam is positive. What is bleeding, and what comes first?",
        coaching: "He is bleeding inside, most likely in the belly. Bleeding control comes before almost everything else. Keep pressure on any outside bleeding, get fast access, draw type and crossmatch blood, and tell the trauma team at once.",
      },
      {
        prompt: "His blood pressure keeps falling despite fluids. When do you activate massive transfusion?",
        coaching: "Activate it early, before he crashes. Massive transfusion means a set protocol that delivers many units of blood products fast, without waiting for each single order. Your jobs are running blood, checking labels with a second nurse, tracking totals, and reporting the running count out loud.",
      },
      {
        prompt: "He is cold, with a temperature of 35.8 degrees Celsius. Why does warming matter?",
        coaching: "Cold blood clots poorly and makes every part of shock worse. Use a fluid warmer for blood and fluids, cover the patient, and raise the room heat. Keep the patient warm from the start, not after he is already cold.",
      },
    ],
    calculations: [
      {
        prompt: "Blood pressure is 82 over 50. Calculate the MAP (mean arterial pressure) using MAP equals (systolic blood pressure plus 2 times diastolic blood pressure) divided by 3.",
        answer: "MAP equals (82 plus 2 times 50) divided by 3, which is (82 plus 100) divided by 3, which is 182 divided by 3, which is about 61 mmHg (millimeters of mercury). A MAP (mean arterial pressure) under 65 mmHg (millimeters of mercury) is too low to feed the organs well.",
      },
      {
        prompt: "Heart rate is 128 and systolic blood pressure is 82. Calculate the shock index, which is heart rate divided by systolic blood pressure. A shock index above 0.9 suggests serious bleeding.",
        answer: "128 divided by 82 equals about 1.56. A shock index of 1.56 is well above 0.9, which fits serious bleeding and shock.",
      },
    ],
    escalation: "\"S: This is the ED (emergency department) nurse calling a trauma activation for a 34-year-old man after a high-speed car crash. B: He was the driver, wearing a seat belt, with belly pain and no obvious outside bleeding. He has no known medical problems and no known drug allergies. A: Right now his blood pressure is 82 over 50, heart rate 132, breathing rate 26, oxygen saturation 94 percent on oxygen. His MAP (mean arterial pressure) is about 61 mmHg (millimeters of mercury) and his shock index is 1.56. His FAST (focused assessment with sonography for trauma) exam is positive for free fluid in the belly. Hemoglobin fell from 11.2 to 9.4 grams per deciliter and lactate rose from 4.2 to 5.1 mmol per liter (millimoles per liter). He has two large-bore IV (intravenous) lines, blood is running through a fluid warmer, and massive transfusion is activated. R: He is bleeding inside and getting worse. We need the trauma surgery team at the bedside now and the operating room ready.\"",
    fullDebrief: [
      {
        heading: "Learn shock before the blood pressure falls",
        content: "Early signs are a fast heart rate, fast breathing, pale cool skin, slow capillary refill, which means color returns slowly after you press a fingernail, and a patient who seems anxious or confused. Blood pressure often drops late, so trust the early signs. Reassess without stopping: is bleeding truly controlled, is the pulse slowing, is the skin warming, is the mind clearing? Urine output rising means the kidneys are getting flow again.",
      },
      {
        heading: "Balanced blood, early and warm",
        content: "Clear fluids alone cannot carry oxygen. A bleeding patient needs blood, given early. Balanced transfusion means giving red cells, plasma, and platelets together, which copies what whole blood does. The target mix is 1 to 1 to 1: one unit of red cells to one unit of plasma to one unit of platelets. Labs guide the fine tuning, including calcium, which often falls during large transfusions. Low calcium weakens the heart and clotting, so report values and replace as ordered.",
      },
      {
        heading: "Bleeding control and the next room",
        content: "Start with firm direct pressure on the bleeding point, using gauze and the weight of your hands. Press hard and do not peek every few seconds, because lifting releases the clot that is forming. For heavy arm or leg bleeding that pressure cannot stop, apply a tourniquet, a tight band placed above the wound, tighten until bleeding stops, note the time out loud and on the chart, and never loosen it yourself. Deep wounds in the groin, armpit, or neck cannot take a tourniquet, so pack them tightly with gauze and press hard. If bleeding restarts or numbers worsen, say it out loud fast. The team may move to surgery or a procedure room next.",
      },
    ],
  },
};
