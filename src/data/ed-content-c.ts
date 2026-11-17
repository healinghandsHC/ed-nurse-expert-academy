import type { Lesson, ModuleContent } from "./types";

export const ED_CONTENT_C: Record<string, ModuleContent> = {
  "ed-neurologic": {
    moduleId: "ed-neurologic",
    lessons: [
      {
        id: "ed-31",
        title: "Stroke in the ED — BE-FAST, NIHSS, Thrombolytics and Thrombectomy Windows",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "In stroke, minutes save brain. Last known well is the time the patient was last seen normal, and it is sacred in stroke care because it starts the treatment clock. Use BE-FAST (Balance, Eyes, Face, Arms, Speech, Time) to check for sudden balance loss, sudden vision change, one side of the face drooping, one arm weak, and speech that is hard to understand, then act fast. A CT scan (computed tomography), a fast picture of the brain, shows bleeding or no bleeding and guides treatment."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Ask the patient, family, and bystanders exactly when symptoms started, write that time down, say it out loud, and tell every team member. Test each BE-FAST sign simply: ask the patient to smile and look for one-sided droop, raise both arms and watch for drift, and repeat a simple phrase, then note what you found and when. Before tPA (tissue plasminogen activator), the clot-busting stroke medicine, help check blood pressure, finger-stick blood sugar, lab tests, and bleeding risk, and ask about recent surgery, recent bleeding, blood thinner use, and allergies. Get fast access, fast labs, and an accurate weight, keep the patient on the monitor, and give nothing by mouth until swallowing is cleared by the team."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Report any new weakness, speech change, vision change, or falling alertness at once, and note what you found and when you found it. The NIHSS (National Institutes of Health Stroke Scale) is a scored exam that measures how severe a stroke is, and your role is to help, watch the patient, and report any change in the score. tPA can help some patients with a clot-type stroke when given within four and a half hours from when symptoms started, and the goal for door to needle, the time from arrival to the start of the clot-busting medicine, is sixty minutes or less. Some strokes come from a large vessel clot blocking a major brain artery, and those patients may go for a procedure to remove the clot, so prepare for fast transport, keep the monitor on, and keep the family informed."
          }
        ],
        bedsideCues: [
          "One side of the face droops when the patient smiles",
          "One arm drifts down when both arms are raised",
          "Speech is slurred or hard to understand",
          "Sudden loss of balance or sudden vision change"
        ],
        assessmentSequence: [
          "1. Find last known well from the patient, family, and bystanders, and say it out loud to the team.",
          "2. Run the BE-FAST check and note each finding with the time.",
          "3. Check airway, breathing, circulation, vital signs, and finger-stick blood sugar.",
          "4. Get two points of access, labs, and an accurate weight, and keep the patient on the monitor.",
          "5. Get the patient to CT fast, keep nothing by mouth until swallowing is cleared, and recheck neuro signs often."
        ],
        safetyPoints: [
          "Give nothing by mouth until swallowing is cleared by the team.",
          "Never delay the CT scan for extra tasks.",
          "Report any worsening weakness, headache, bleeding, or falling alertness at once."
        ],
        workedExample: {
          context: "A 68-year-old woman arrives with a drooping left face and slurred speech. Her husband says she was normal at breakfast, about two hours ago.",
          action: "The nurse records last known well as two hours ago, reports it to the team, runs the BE-FAST check, checks blood sugar and blood pressure, and gets her to CT without delay.",
          outcome: "The scan shows no bleeding, the team confirms she is inside the treatment window, and she receives clot-busting medicine within the door-to-needle goal."
        },
        activity: {
          prompt: "A patient arrives weak on one side but no one knows when symptoms started. Who would you ask, what exact question would you ask, and why does that time change everything?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What is the treatment window for tPA from when stroke symptoms started?",
          options: [
            "Within 12 hours from when symptoms started",
            "Within four and a half hours from when symptoms started",
            "Within 24 hours from when symptoms started"
          ],
          answerIndex: 1,
          rationale: "tPA can help some patients with a clot-type stroke when given within four and a half hours from when symptoms started, which is why last known well matters so much."
        }
      },
      {
        id: "ed-32",
        title: "Seizures and Status Epilepticus — Protecting the Airway, Timing the Meds",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "A seizure is uncontrolled electrical activity in the brain, and your first jobs are to protect the patient, time the event, and keep the airway open. Status epilepticus means a seizure lasting five minutes or longer, or repeated seizures without waking up between them, and it is an emergency because the brain and body are under great stress. A short seizure may end on its own, while a long seizure needs medicine fast, so call for help early and keep timing. After the seizure stops, the patient may be sleepy, confused, and sore for minutes to hours, and that recovery phase is normal."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Ease the patient to the floor or make the bed safe, move objects away, loosen tight clothing, and pad the side rails per policy, then stay with the patient. Time the event from the very start, note when shaking began, how long it lasted, and what the body did, and say the time out loud for the team. Put nothing in the mouth: no food, no drink, no medicine by mouth, and no object between the teeth, because forcing the mouth open can break teeth and cause choking. Turn the patient on their side when you can, suction secretions as needed, give oxygen as ordered, and watch breathing and oxygen level closely, because breathing often slows during and after a seizure."
          },
          {
            heading: "Red Flags and Escalation",
            content: "A seizure lasting five minutes or longer, repeated seizures without waking up, or breathing that slows during or after a seizure all need help now. First-line treatment is a benzodiazepine, a calming medicine that stops seizure activity, such as lorazepam or midazolam given by vein when access is ready, so have the medicine, dose, and time double checked and document each dose clearly. If the seizure does not stop, the provider may order a second medicine that loads into the body, such as levetiracetam or fosphenytoin. Help find the cause: common triggers include missed medicine doses, low blood sugar, low sodium, infection, head injury, alcohol withdrawal, and stroke, and the team may order labs, a brain scan, and an EEG (electroencephalogram), a test of brain wave activity."
          }
        ],
        bedsideCues: [
          "Shaking that started at a clear time you can note and announce",
          "Eyes rolling back with loss of responsiveness",
          "Slow or noisy breathing during or after the shaking",
          "Sleepiness and confusion after the shaking stops"
        ],
        assessmentSequence: [
          "1. Protect the patient: clear the area, pad the rails, and stay with the patient.",
          "2. Start timing at once and note the start time out loud.",
          "3. Turn the patient on their side, suction as needed, and give oxygen as ordered.",
          "4. Check breathing, oxygen level, vital signs, and finger-stick blood sugar.",
          "5. Prepare first-line medicine, double check the dose and time, and document every dose and the recovery."
        ],
        safetyPoints: [
          "Put nothing in the mouth during a seizure: forcing the mouth open can break teeth and cause choking.",
          "Do not leave to chart or fetch supplies when someone else can bring them.",
          "Call for help early for any seizure reaching five minutes or repeated seizures without waking up."
        ],
        workedExample: {
          context: "A 54-year-old man starts shaking in the waiting room and does not respond to his name.",
          action: "The nurse eases him to the floor, clears nearby chairs, starts timing, turns him on his side, and calls for help while a colleague brings oxygen and suction.",
          outcome: "The shaking stops after two minutes, his breathing recovers, and the team checks his blood sugar and reviews his home medicines for a missed dose."
        },
        activity: {
          prompt: "Think about a seizure you might see on your first ED shift. What would you do in the first ten seconds, and what would you deliberately not do?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What defines status epilepticus?",
          options: [
            "A seizure lasting five minutes or longer, or repeated seizures without waking up between them",
            "Any seizure that happens more than once in a year",
            "A seizure that only affects one arm or leg"
          ],
          answerIndex: 0,
          rationale: "Status epilepticus means a seizure lasting five minutes or longer, or repeated seizures without waking up between them, and it is an emergency that needs medicine fast."
        }
      },
      {
        id: "ed-33",
        title: "Altered Mental Status — The AEIOU-TIPS Workup Mindset",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Altered mental status means a change in awareness, thinking, or alertness from what is normal for that patient, and it has many causes. AEIOU-TIPS is a letter tool that keeps you from missing one: Alcohol, Epilepsy/Electrolytes/Encephalopathy, Insulin, Opiates/Oxygen, Uremia, Trauma/Temperature, Infection, Psych/Poison, and Stroke/Shock. Work the letters every time, because sugar, oxygen, infection, stroke, and poison can all look the same at the bedside. Never assume a mental health cause first until medical causes are ruled out."
          },
          {
            heading: "What the ED Nurse Does",
            content: "First protect breathing and circulation, check vital signs, check blood sugar with a finger stick, and stay with the patient. Ask when the patient last drank alcohol and how much they usually drink, and watch for shaking, sweating, fast heart rate, and agitation. Check breathing rate, oxygen level, and pupil size, and ask about kidney disease, dialysis (a machine that cleans the blood), falls, temperature, cough, burning with urination, and what medicines or substances were taken, when, and how much. Keep any containers for the team, and help get cultures and labs quickly when infection is suspected."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Report slow breathing, small pupils, new weakness or speech change, very high or very low temperature, and a fast change in alertness at once. Sugar that is too low can cause confusion, sweating, and shaking fast, while sugar that is too high can cause slow confusion and deep thirst, so a finger-stick sugar check is one of the first tests. Infection in the lungs, urine, blood, or brain can cause confusion, most often in older adults. Uremia means waste products build up in the blood when the kidneys fail, and shock means blood flow to the body is too low, so check blood pressure, skin color, and face and arm signs."
          }
        ],
        bedsideCues: [
          "New confusion or sleepiness that is not normal for this patient",
          "Slow breathing with small pupils",
          "Shaking, sweating, and a fast heart rate after alcohol use",
          "Fever or a very low temperature with new confusion"
        ],
        assessmentSequence: [
          "1. Protect the airway and breathing, check vital signs, and check finger-stick blood sugar.",
          "2. Ask family what changed, when it started, and what was taken or missed.",
          "3. Work through AEIOU-TIPS and check oxygen, pupils, temperature, and the full body for injury.",
          "4. Help get labs, cultures, and a heart tracing as ordered.",
          "5. Keep rechecking alertness, breathing, and vital signs, and report every change."
        ],
        safetyPoints: [
          "Check blood sugar early on every confused patient.",
          "Never assume a mental health cause first: rule out medical causes.",
          "Protect the airway and stay with the patient until the cause is clearer."
        ],
        workedExample: {
          context: "A 72-year-old woman arrives confused and sleepy, with no fever, and her daughter says she was fine yesterday.",
          action: "The nurse checks blood sugar and oxygen first, then works through AEIOU-TIPS, finds burning with urination and a low-grade fever, and helps get urine testing, cultures, and labs.",
          outcome: "The workup points to a urinary infection as the cause of the confusion, and treatment starts before the confusion deepens."
        },
        activity: {
          prompt: "Pick two letters from AEIOU-TIPS that you find hardest to remember. Write a one-line bedside cue for each that would help you spot it in a real patient.",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "In AEIOU-TIPS, what does the letter I for Insulin point to?",
          options: [
            "Infection in the lungs or urine",
            "A head injury from a fall",
            "Blood sugar problems, too low or too high"
          ],
          answerIndex: 2,
          rationale: "I is for Insulin, which points to blood sugar problems: sugar that is too low can cause confusion, sweating, and shaking fast, and sugar that is too high can cause slow confusion and deep thirst."
        }
      },
      {
        id: "ed-34",
        title: "Headache Red Flags — Subarachnoid Hemorrhage and the Worst Headache of Their Life",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Most headaches are not deadly, but some mean bleeding or infection in or around the brain. Thunderclap means pain that reaches full strength in seconds to one minute, and a sudden worst-ever headache needs urgent evaluation every single time. SAH (subarachnoid hemorrhage), bleeding around the brain, often comes from a burst weak spot in a brain artery, with sudden severe pain, vomiting, stiff neck, light sensitivity, confusion, and loss of consciousness. Meningitis means infection and swelling of the coverings around the brain and spinal cord, with fever, headache, and a stiff neck as classic signs."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Ask exactly how fast the pain started, what the patient was doing, and if they passed out, vomited, or had a seizure. Keep the patient on the monitor, get vein access, control pain and nausea as ordered, and keep the room calm and dim when you can. The first test is a CT scan (computed tomography), a fast picture of the brain to look for blood. If the scan does not show blood but concern stays high, the provider may do a lumbar puncture, a needle test in the lower back to check the fluid around the brain and spine, so help position the patient, keep them still, label tubes, and watch after the test."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Report sudden vomiting, a seizure, a stiff neck, fever with headache, vision loss, or a patient who becomes hard to wake at once. Headache after head injury, headache in a patient on blood thinners, new headache after age fifty, and headache that is getting worse each day all need prompt provider review and clear documentation. Start droplet precautions, meaning a mask for staff and the patient during close contact, when meningitis is suspected, per policy, and place a mask on the patient for transport. In meningitis, antibiotics should not wait: help get blood cultures first when ordered, then give antibiotics as soon as possible, and note exact times for cultures, antibiotics, and fluids."
          }
        ],
        bedsideCues: [
          "Headache that peaks in seconds to one minute",
          "Worst headache of their life, with vomiting or passing out",
          "Stiff neck with fever and headache",
          "New confusion, light sensitivity, or vision loss with headache"
        ],
        assessmentSequence: [
          "1. Ask how fast the pain started, what the patient was doing, and about vomiting, passing out, or seizure.",
          "2. Check vital signs, alertness, pupils, speech, and limb strength, and use the GCS (Glasgow Coma Scale) when trained and ordered.",
          "3. Ask about sick contacts, vaccines, recent ear or sinus infections, head injury, and blood thinner use.",
          "4. Keep the patient on the monitor, get vein access, and get the CT scan fast.",
          "5. Start droplet precautions if meningitis is suspected, and help with cultures, antibiotics, or lumbar puncture as ordered."
        ],
        safetyPoints: [
          "Take every worst-ever headache seriously: think bleeding around the brain and meningitis.",
          "Do not delay antibiotics in suspected meningitis once cultures are drawn.",
          "Report sudden vomiting, a seizure, or a patient who becomes hard to wake at once."
        ],
        workedExample: {
          context: "A 41-year-old man says his headache hit like a thunderclap one minute ago while lifting a box, and he vomited once in triage.",
          action: "The nurse keeps him on the monitor, gets vein access, reports the thunderclap onset and vomiting, and gets him to CT fast while keeping the room dim and quiet.",
          outcome: "The scan is checked urgently for blood around the brain, and the team keeps him monitored while they decide on further testing."
        },
        activity: {
          prompt: "A patient says their headache is the worst of their life but looks calm and is talking normally. What three questions would you ask before you decide how urgent this is?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What does a thunderclap headache mean?",
          options: [
            "Pain that builds slowly over several days",
            "Pain that reaches full strength in seconds to one minute",
            "Pain that only happens when the patient lies down"
          ],
          answerIndex: 1,
          rationale: "Thunderclap means pain that reaches full strength in seconds to one minute, and a sudden worst-ever headache needs urgent evaluation every single time."
        }
      },
      {
        id: "ed-35",
        title: "Meningitis and CNS Infections — Isolation, Antibiotics and Lumbar Puncture Assist",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Meningitis means infection and swelling of the meninges, the protective coverings around the brain and spinal cord, and this infection can kill within hours, so your speed matters. The classic pattern is fever, headache, and neck stiffness together, and patients may hate bright light, feel sick to their stomach, or seem confused and drowsy. Confusion in a feverish patient is a danger sign, because it can mean the infection is already affecting the brain itself. Look at the skin on every feverish patient: one germ, called meningococcus, can cause a rash of tiny red or purple spots that do not fade when you press on them, which means bacteria are spreading through the blood and the patient can crash very fast."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Start droplet precautions right away, which means the patient wears a surgical mask and staff wear masks near them, because this germ spreads through coughs and close contact, and place the patient in a private room when possible while limiting visitors until the team knows the cause. Expect blood cultures, which are sterile blood samples tested for germs, drawn before antibiotics whenever that causes no delay, and if cultures cannot be drawn quickly, the antibiotics still come first. Give the ordered antibiotics as fast as possible, ideally within the first hour, and document the exact time every dose goes in. The provider may add a virus medicine when herpes infection of the brain is suspected, and sometimes a steroid medicine with the first dose."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Do frequent nervous system checks, called neuro checks, and score the GCS (Glasgow Coma Scale), a fifteen-point score that rates eye opening, speech, and movement. A falling score, unequal pupils, or a new seizure means pressure may be building inside the skull, so report it at once. Some patients need a head scan before the lumbar puncture, such as those with very low consciousness, a new seizure, or signs of high pressure in the skull, but the scan never delays antibiotics. Close contacts of a meningitis patient, like household members and staff with direct exposure to mouth secretions, may need preventive antibiotics, so note every close exposure in the chart so nobody who needs protection is missed."
          }
        ],
        bedsideCues: [
          "Fever with headache and a stiff neck that makes nodding hard",
          "Tiny red or purple spots on the skin that do not fade when pressed",
          "Hating bright light with confusion or drowsiness and fever",
          "A falling GCS score, unequal pupils, or a new seizure"
        ],
        assessmentSequence: [
          "1. Check temperature, vital signs, alertness, pupils, neck stiffness, and the skin for a rash.",
          "2. Start droplet precautions, mask the patient, and move them to a private room when possible.",
          "3. Get vein access and help draw blood cultures before antibiotics whenever that causes no delay.",
          "4. Give antibiotics as fast as possible, ideally within the first hour, and document the exact time.",
          "5. Assist the lumbar puncture: position the patient curled on their side with knees pulled up or sitting leaning forward, keep them still, label each tube in order, and send the fluid to the lab promptly."
        ],
        safetyPoints: [
          "Start isolation early: do not wait for test results to mask and isolate a suspected case.",
          "A head scan before the tap never delays antibiotics.",
          "Report a non-fading rash, a falling GCS score, unequal pupils, or a new seizure at once."
        ],
        workedExample: {
          context: "A 29-year-old woman arrives with fever, a severe headache, and a stiff neck after a week of sinus congestion, and tiny purple spots on her chest do not fade when pressed.",
          action: "The nurse starts droplet precautions, moves her to a private room, reports the classic triad and the rash to the provider, and helps draw blood cultures before the first antibiotics are given within the hour.",
          outcome: "Antibiotics start promptly, the team arranges a head scan and lumbar puncture, and her neuro signs are rechecked often while results are pending."
        },
        activity: {
          prompt: "You suspect meningitis in a patient in a busy hallway bed. What do you do first to protect other patients and staff, and what would you tell the provider in one sentence?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "When meningitis is suspected, how fast should the ordered antibiotics be given?",
          options: [
            "As fast as possible, ideally within the first hour",
            "Only after the lumbar puncture results come back",
            "After 24 hours of watching the patient"
          ],
          answerIndex: 0,
          rationale: "Antibiotics should be given as fast as possible, ideally within the first hour, because every minute of delay raises the risk of death or lasting brain damage."
        }
      }
    ]
  },
  "ed-gi-metabolic-sepsis": {
    moduleId: "ed-gi-metabolic-sepsis",
    lessons: [
      {
        id: "ed-36",
        title: "Abdominal Pain — Red Flags, Focused Assessment and Imaging Prep",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Abdominal pain can be a simple stomach ache, or a belly that needs an operation within the hour, and your job is to sort the dangerous belly from the routine one quickly and calmly. Pain that moves to the right lower side can point to appendicitis, a swollen appendix, while pain high in the middle that bores through to the back can point to the pancreas or a major blood vessel. Guarding means the belly muscles tighten on their own to protect a sore spot inside, and rebound tenderness means pain gets worse when you press in and then let go quickly, and both can signal peritonitis, irritation or infection of the lining inside the belly."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Start with the primary survey, meaning airway, breathing, and circulation first, then check vital signs: temperature, pulse, breathing rate, and blood pressure. Ask where the pain started, where it sits now, where it travels, when it began, and what makes it better or worse, including eating, vomiting, fever, diarrhea, blood in the stool, and the last normal bowel movement. In patients who can become pregnant, always ask about the last monthly period and any chance of pregnancy, every single time. Examine the belly in order: look first, listen second, and feel last, starting palpation, pressing gently with your hands, away from the pain and moving toward it, and note scars, swelling, bruising, and any bulge that could be a hernia, tissue pushing through a weak spot."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Report severe pain or pain out of proportion to the exam, fainting, vomiting blood, black or bloody stool, a rigid board-like belly, fever with shaking chills, and pain with chest pressure or shortness of breath right away. Pale skin, fast pulse, and low blood pressure can mean bleeding inside the belly long before the pain story is clear. Older adults, patients with a weak immune system, and patients on blood thinners, medicines that slow clotting, can hide a disaster, and pregnancy, heavy alcohol use, and past belly surgery also raise the stakes. A surgical abdomen means a belly problem that likely needs an operation, such as a burst appendix or a blocked or twisted bowel, so keep that patient with nothing by mouth, give fluids and pain medicine as ordered, and call the surgery team early."
          }
        ],
        bedsideCues: [
          "A rigid, board-like belly that does not soften",
          "Pain that moves to the right lower side",
          "Pale skin with a fast pulse and low blood pressure",
          "Guarding or pain that worsens when pressure is released"
        ],
        assessmentSequence: [
          "1. Do the primary survey and check vital signs.",
          "2. Ask about pain location, movement, timing, eating, vomiting, fever, diarrhea, blood in the stool, and last bowel movement.",
          "3. Ask about last monthly period and chance of pregnancy when it applies.",
          "4. Examine the belly: look, listen, then feel gently, starting away from the pain.",
          "5. Start an IV line, draw labs and a pregnancy test when ordered, keep the patient with nothing by mouth, and prepare for ultrasound or CT scan as ordered."
        ],
        safetyPoints: [
          "Keep a surgical abdomen with nothing by mouth until the team decides.",
          "Never let a quiet patient fool you: older adults and patients on blood thinners can hide a disaster.",
          "Report a rigid belly, vomiting blood, or black or bloody stool at once."
        ],
        workedExample: {
          context: "A 54-year-old man has belly pain that started around his navel and moved to the right lower side, with fever and vomiting.",
          action: "The nurse checks vital signs, asks about the pain movement and last bowel movement, examines the belly gently, finds guarding on the right lower side, and keeps him with nothing by mouth while reporting the findings.",
          outcome: "The team orders labs and a CT scan, and the surgery team is called early for suspected appendicitis."
        },
        activity: {
          prompt: "A patient with belly pain says the pain is mild, but their belly is rigid and their pulse is fast. What does that mismatch tell you, and what do you do next?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What does rebound tenderness mean?",
          options: [
            "Pain that only happens after eating",
            "Pain that goes away when the patient lies flat",
            "Pain gets worse when you press in and then let go quickly"
          ],
          answerIndex: 2,
          rationale: "Rebound tenderness means pain gets worse when you press in and then let go quickly, and together with guarding it can signal peritonitis."
        }
      },
      {
        id: "ed-37",
        title: "GI Bleeding — Upper vs Lower, Blood Products and Endoscopy Prep",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "GI (gastrointestinal) bleeding means bleeding in the stomach and intestines, and it can turn fatal fast. An upper bleed starts above the small intestine, in the food pipe, stomach, or first stretch of bowel, often from ulcers, torn veins in the food pipe, or stomach lining worn down by alcohol or pain medicines. A lower bleed starts in the colon or rectum, often from diverticulosis, small pouches in the colon wall, hemorrhoids, inflammation, or growths. Melena means black, tarry, foul-smelling stool from digested blood, usually an upper bleed, hematochezia means bright red blood per rectum, and hematemesis means vomiting blood."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Start two large-bore IV (intravenous) lines, meaning wide catheters that let blood and fluids run fast, and draw labs at the same time, including blood counts, kidney labs, and blood typing, then keep the patient on the monitor. Chart exactly what you see, save a sample if the lab needs one, and remember that a very fast upper bleed can also look bright red, so never assume the source too quickly. An NG tube (nasogastric tube), a tube through the nose into the stomach, can sample stomach contents, and bloody return supports an upper source, though a clear return never rules one out, so verify placement per policy before anything goes through it. Keep the patient with nothing by mouth, give stomach acid medicine as ordered, and ask about blood thinners, alcohol, and pain medicine use."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Watch the vital signs for hidden blood loss: a rising heart rate often shows before the blood pressure falls, and a big change in pressure lying down versus standing, when safe to check, means significant loss. Pale, cool, clammy skin and new confusion mean the bleed is outrunning the body. Transfusion means giving donor blood through a vein, and common triggers are a hemoglobin below seven in a stable patient, or ongoing bleeding with unstable vital signs at any number, where hemoglobin is the protein in red blood cells that carries oxygen. Every unit gets verified by two nurses at the bedside, in words and out loud: the patient name and band, the unit number, the blood type, and the expiration date, all matched against the paperwork."
          }
        ],
        bedsideCues: [
          "Vomiting blood or coffee-ground-like vomit",
          "Black, tarry, foul-smelling stool",
          "Bright red blood per rectum",
          "Rising heart rate with pale, cool, clammy skin"
        ],
        assessmentSequence: [
          "1. Check airway, breathing, circulation, vital signs, and mental status.",
          "2. Start two large-bore IV lines and draw blood counts, kidney labs, and blood typing.",
          "3. Note stool and vomit colour and amount exactly, and save a sample if needed.",
          "4. Send type and crossmatch, which means testing the patient blood against donor blood to confirm it is safe to give.",
          "5. Keep the patient with nothing by mouth, verify any blood unit with a second nurse, and prepare for endoscopy."
        ],
        safetyPoints: [
          "Verify every blood unit with two nurses at the bedside, out loud, before it runs.",
          "A rising heart rate often shows before the blood pressure falls: report the trend, not just one reading.",
          "Never assume the source from colour alone: a very fast upper bleed can look bright red."
        ],
        workedExample: {
          context: "A 63-year-old man vomits blood that looks like coffee grounds and passes black, tarry stool.",
          action: "The nurse starts two large-bore IV lines, draws labs and blood typing, keeps him with nothing by mouth, and reports the rising heart rate and melena to the provider.",
          outcome: "Type and crossmatch is sent, blood is prepared, and the endoscopy team is called to find and treat the bleeding spot."
        },
        activity: {
          prompt: "You see bright red blood per rectum. Why should you not immediately call it a lower bleed, and what else would you check?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What does melena mean?",
          options: [
            "Bright red blood per rectum from a lower bleed",
            "Black, tarry, foul-smelling stool from digested blood, usually an upper bleed",
            "Vomiting blood from the stomach"
          ],
          answerIndex: 1,
          rationale: "Melena means black, tarry, foul-smelling stool from digested blood, usually an upper bleed, while bright red blood per rectum is hematochezia."
        }
      },
      {
        id: "ed-38",
        title: "DKA and Glucose Emergencies — High Sugar, Low Sugar, and Insulin Safety",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "DKA (diabetic ketoacidosis) happens when the body has too little insulin, so it burns fat for fuel, and burning fat makes acids called ketones, so the blood turns acidic, breathing gets deep and fast, and the breath may smell fruity. HHS (hyperosmolar hyperglycemic state) is different: the sugar climbs extremely high, often above six hundred, but there is still some insulin, so ketones stay low, while the blood becomes thick and concentrated and pulls water out of the cells. HHS patients are profoundly dehydrated and often confused or hard to wake. Low blood sugar, called hypoglycemia, can look like confusion, sweating, shaking, or even a stroke."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Fluids come first in both DKA and HHS, before insulin: start an IV (intravenous) line and give a salt solution bolus as ordered, because fluids alone begin lowering the sugar, restore blood pressure, and protect the kidneys, and reassess lungs and breathing as the liters go in. Check potassium before starting insulin, always, because insulin pushes potassium into the cells, so blood levels fall fast, and if potassium is low, hold the insulin and replace potassium first. Once potassium is safe, insulin usually runs as a continuous IV drip on a pump, with hourly glucose checks, and the goal is a slow, steady sugar drop, never a crash. Follow the anion gap, a lab calculation showing how much acid is in the blood, as it closes, and repeat labs every few hours: sugar, potassium, kidney function, and the gap."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Report deep fast breathing, fruity breath, belly pain with nausea and vomiting, falling alertness, or one-sided weakness at once. Something triggered the crisis, often infection, missed insulin doses, a heart attack, or a new illness, so ask what changed, check the temperature, look at the urine, and listen to the lungs. HHS patients often need far more fluid than DKA patients, and their biggest dangers are dehydration, blood clots, and a falling level of alertness. For low sugar, check a glucose on every confused patient: if they can swallow, give fast sugar, and if not, the provider orders IV dextrose, which is sugar water."
          }
        ],
        bedsideCues: [
          "Deep, fast breathing with fruity-smelling breath",
          "Sugar in the six hundreds with profound dehydration",
          "Confusion, sweating, and shaking from low sugar",
          "Belly pain with nausea and vomiting in a patient with high sugar"
        ],
        assessmentSequence: [
          "1. Check vital signs, mental status, breathing pattern, and finger-stick glucose.",
          "2. Start an IV line and give fluids as ordered before insulin.",
          "3. Check potassium and other labs before starting insulin.",
          "4. Start the insulin drip on a pump when potassium is safe, with hourly glucose checks.",
          "5. Hunt for the trigger: infection, missed insulin, heart attack, or new illness, and recheck mental status often."
        ],
        safetyPoints: [
          "Fluids first, then check potassium, then insulin: never start insulin with low potassium.",
          "Aim for a slow, steady sugar drop, never a crash.",
          "When the drip stops, overlap it with the first shot under the skin so insulin never fully stops."
        ],
        workedExample: {
          context: "A 54-year-old man arrives with a sugar in the six hundreds, deep fast breathing, belly pain, and vomiting.",
          action: "The nurse starts IV fluids, checks potassium before insulin, starts the insulin drip on a pump once potassium is safe, and checks glucose every hour while the team looks for infection.",
          outcome: "His sugar falls slowly and steadily, the anion gap closes over the next hours, and he moves to shots under the skin with an overlap so coverage never gaps."
        },
        activity: {
          prompt: "A patient with DKA has a potassium of 2.9 and the insulin drip is ordered. What do you do, and why does the order of fluids, potassium, and insulin matter here?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What comes first in DKA and HHS treatment, before insulin?",
          options: [
            "IV fluids with a salt solution bolus as ordered",
            "A large dose of insulin by mouth",
            "Stopping all fluids until the sugar falls"
          ],
          answerIndex: 0,
          rationale: "Fluids come first in both conditions, before insulin: fluids alone begin lowering the sugar, restore blood pressure, and protect the kidneys."
        }
      },
      {
        id: "ed-39",
        title: "Electrolyte Emergencies — Potassium, Sodium, Calcium and Magnesium",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Electrolytes are minerals in the blood, like potassium, sodium, calcium, and magnesium, that control the heart, nerves, and muscles, and when they swing too high or too low the ED moves fast. High potassium is called hyperkalemia, and it is the most feared electrolyte problem, often from kidney failure, missed dialysis, or some blood pressure medicines. Low potassium is called hypokalemia, often from vomiting, diarrhea, and water pills. Low sodium is called hyponatremia, high sodium is hypernatremia, high calcium is hypercalcemia, and low calcium is hypocalcemia, and each has its own pattern, so treat the patient, the tracing, and the number together, never alone."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Get an ECG (electrocardiogram), a tracing of the heart electrical activity, for high potassium: it makes the T waves tall and pointed, like tents, and later the tracing widens and can melt into a wave pattern before arrest. The first treatment for a dangerous tracing is IV (intravenous) calcium, which protects the heart muscle within minutes but does not lower potassium, then insulin with glucose shifts potassium into the cells while the team removes it for good. Replace low potassium as ordered, run it slowly on a pump, and never push it fast, because it burns veins and endangers the heart. For low sodium, keep exact intake records, do neuro checks, and report every change in alertness, because sodium must be corrected slowly and raising it too fast can badly injure the brain."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Report new weakness, confusion, palpitations, meaning feeling the heart pound or skip, or rhythm changes immediately, even if the last lab looked acceptable. Low sodium brings confusion, headache, vomiting, and in severe cases seizures, and severe symptoms may get a small amount of concentrated salt solution, given carefully with frequent lab rechecks. High calcium is remembered as stones, bones, groans, and moans: kidney stones, bone pain, belly pain, and confusion, and treatment starts with generous IV fluids. Low calcium makes nerves and muscles jumpy, with tingling around the mouth and fingers, muscle cramps, and twitching when the cheek is tapped, and severe cases spasm the voice box and threaten the airway."
          }
        ],
        bedsideCues: [
          "Tall, pointed T waves on the ECG with high potassium",
          "Weakness and cramps with low potassium",
          "Confusion, headache, and vomiting with low sodium",
          "Tingling around the mouth and fingers with low calcium"
        ],
        assessmentSequence: [
          "1. Check vital signs, mental status, and the heart monitor, and get an ECG.",
          "2. Review the lab values with the tracing, not the number alone.",
          "3. Give IV calcium for a dangerous high-potassium tracing as ordered, then insulin with glucose.",
          "4. Replace low potassium slowly on a pump, and correct sodium slowly with frequent rechecks.",
          "5. Recheck labs on schedule, watch urine output, and report new weakness, confusion, or rhythm changes."
        ],
        safetyPoints: [
          "Treat the patient, the tracing, and the number together, never alone.",
          "Never push potassium fast: run it slowly on a pump.",
          "Correct sodium slowly: raising it too fast can badly injure the brain."
        ],
        workedExample: {
          context: "A 71-year-old man who missed dialysis arrives weak with a slow pulse, and his ECG shows tall, pointed T waves.",
          action: "The nurse keeps him on the monitor, reports the tracing and the high potassium at once, and prepares IV calcium as ordered while the team plans insulin with glucose and dialysis.",
          outcome: "The calcium protects his heart within minutes, potassium is shifted and then removed, and his rhythm steadies while dialysis is arranged."
        },
        activity: {
          prompt: "You see tall, pointed T waves on a monitor. What does that pattern suggest, what would you check next, and what treatment protects the heart within minutes?",
          type: "interpretation"
        },
        knowledgeCheck: {
          question: "What does IV calcium do in dangerous hyperkalemia?",
          options: [
            "It lowers the potassium level right away",
            "It replaces the potassium the body has lost",
            "It protects the heart muscle within minutes, but does not lower potassium"
          ],
          answerIndex: 2,
          rationale: "IV calcium protects the heart muscle within minutes, but it does not lower potassium, so insulin with glucose shifts potassium while the team removes it for good."
        }
      },
      {
        id: "ed-40",
        title: "Kidney and Urinary Emergencies — AKI, Retention, Stones and Testicular Torsion",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "AKI (acute kidney injury) means a sudden loss of kidney function, and when the kidneys stop working, every system feels it. Sort AKI into three groups: before the kidney, meaning low blood flow from dehydration, bleeding, or low pressure; inside the kidney, meaning damage from low flow, infections, or medicines; and after the kidney, meaning blocked urine flow from an enlarged prostate, stones, or a clogged catheter, a tube draining the bladder. Creatinine is a waste product from the muscles that healthy kidneys filter out, urea is another waste from protein breakdown, and when both climb, the kidneys are failing."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Measure urine output honestly and often: less than about thirty milliliters an hour in an adult is a warning sign, and dark, scant urine or no urine at all changes the whole plan. Kidneys starved of flow often improve with IV (intravenous) fluids, but kidneys that are already failing cannot handle extra water, so reassess after every bolus by listening to the lungs, checking oxygen level, and watching the neck veins and swelling. Protect the kidneys by flagging medicines that harm them, since the provider may hold blood pressure medicines and pain medicines like ibuprofen, which can reduce kidney blood flow. For retention, scan the bladder and help with catheter placement as ordered, and for sudden severe testicular pain, treat it as urgent and get the provider and ultrasound help fast."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Report falling urine output early, not at the end of the shift, and rising potassium is the most dangerous companion of kidney failure, because it can stop the heart without warning. The missed-dialysis patient is a classic ED emergency: extra water floods the lungs, so they cannot breathe lying flat, and potassium and acid climb, so get them sitting up, apply oxygen, draw labs, and get an ECG (electrocardiogram) right away. Dialysis access is a lifeline: a fistula is a surgically joined artery and vein, usually in the arm, that feels like a buzzing thrill, and never take blood pressure, draw blood, or start an IV in that arm. A bleeding fistula needs firm direct pressure and an urgent call, and if the buzzing thrill disappears, the access may be clotted, so tell the dialysis team immediately."
          }
        ],
        bedsideCues: [
          "Urine output below about thirty milliliters an hour",
          "A patient who cannot breathe lying flat after missed dialysis",
          "Severe flank pain with blood in the urine",
          "Sudden severe testicular pain with swelling"
        ],
        assessmentSequence: [
          "1. Check vital signs, breathing, oxygen level, and mental status, and sit a breathless dialysis patient up.",
          "2. Measure urine output honestly and trend creatinine and urea, which are waste products healthy kidneys filter out.",
          "3. Get an ECG and labs for a missed-dialysis patient, and check the fistula for its buzzing thrill.",
          "4. Reassess lungs and oxygen after every fluid bolus.",
          "5. Report falling output, rising potassium, a lost fistula thrill, or sudden testicular pain at once."
        ],
        safetyPoints: [
          "Never take blood pressure, draw blood, or start an IV in a fistula arm.",
          "Report urine output below about thirty milliliters an hour early, not at the end of the shift.",
          "Treat sudden severe testicular pain as time-critical: get help fast."
        ],
        workedExample: {
          context: "A 66-year-old man who missed dialysis arrives breathless and cannot lie flat, with swelling in his legs.",
          action: "The nurse sits him up, applies oxygen, draws labs, gets an ECG, checks his fistula arm for its thrill, and reports the breathlessness and swelling to the provider.",
          outcome: "The team treats the high potassium and fluid overload urgently and calls the kidney team for dialysis that cannot wait."
        },
        activity: {
          prompt: "A patient with kidney injury has had almost no urine for two hours. What would you recheck, what would you report, and why does that number change the plan?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What should you never do in a fistula arm?",
          options: [
            "Feel for the buzzing thrill in that arm",
            "Take blood pressure, draw blood, or start an IV in that arm",
            "Keep the arm uncovered so the team can see it"
          ],
          answerIndex: 1,
          rationale: "A fistula is a lifeline, so never take blood pressure, draw blood, or start an IV in that arm, and post a sign so nobody forgets during a busy shift."
        }
      },
      {
        id: "ed-41",
        title: "Sepsis — Recognition, Lactate, Cultures and the One-Hour Bundle",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Sepsis means the body is harming itself while fighting an infection, and it can kill a patient within hours, so the ED (emergency department) is where that fight is won. Screen every sick patient for sepsis, and remember that older adults may show only confusion or weakness, with no fever at all. Warning signs include a fast heart rate, fast breathing, low blood pressure, fever or a very low temperature, and new confusion, and the skin may feel hot and flushed, or cool and mottled, meaning patchy and discolored. Draw a lactate level early: lactate is a waste product that builds up when tissues are not getting enough oxygen, and a lactate of four or higher is a danger sign for shock, meaning the circulation is failing."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Ask about fever, chills, cough, burning with urination, wounds, and recent infections, and when the story and the vital signs do not fit, say sepsis out loud early. Draw blood cultures before antibiotics, every time: blood cultures are bottles of blood sent to the lab to grow and identify the germ, taken as two sets from two different sites, labelled carefully, and never allowed to delay antibiotics for long. Give broad-spectrum antibiotics within the first hour, meaning medicine that covers many kinds of bacteria at once before anyone knows the exact germ, and verify allergies, hang the dose on time, and document it. Start IV (intravenous) fluids right away, with a common first order of thirty milliliters per kilogram of body weight of a balanced salt solution, run wide open through a large-bore line, then reassess the lungs, blood pressure, and breathing after each liter."
          },
          {
            heading: "Red Flags and Escalation",
            content: "If blood pressure stays low after fluids, the provider orders vasopressors, medicines that squeeze blood vessels tighter to raise blood pressure, and norepinephrine is usually first, often needing a pump, frequent pressure checks, and close watching of the IV site for leaking. Hunt for the source while the bundle runs: check the lungs, urine, skin, belly, and any lines or wounds, because finding the source guides antibiotics and tells the team whether surgery or drainage is needed. Repeat the lactate to see if it is clearing, track urine output for steady flow each hour, and recheck blood pressure, breathing, oxygen level, and mental status often, because these patients can crash without warning. Some patients hide sepsis well, including older adults, people with diabetes, people with weak immune systems, and anyone with an indwelling catheter, a tube left inside the body, so trust the screening and escalate early even when the patient looks comfortable."
          }
        ],
        bedsideCues: [
          "Fast heart rate with fast breathing and low blood pressure",
          "New confusion with fever or a very low temperature",
          "Skin that is hot and flushed, or cool and mottled",
          "Lactate of four or higher"
        ],
        assessmentSequence: [
          "1. Screen every sick patient for sepsis and say it out loud early when the story and vital signs do not fit.",
          "2. Draw a lactate level and two sets of blood cultures from two different sites.",
          "3. Give broad-spectrum antibiotics within the first hour and document the exact time.",
          "4. Start IV fluids at thirty milliliters per kilogram as ordered and reassess lungs and blood pressure after each liter.",
          "5. Hunt for the source, repeat the lactate, track urine output, and recheck vital signs and mental status often."
        ],
        safetyPoints: [
          "Draw blood cultures before antibiotics, but never let cultures delay antibiotics for long.",
          "Each hour of antibiotic delay raises the risk of death: hang the dose on time.",
          "Escalate early even when the patient looks comfortable: sepsis can hide well."
        ],
        workedExample: {
          context: "A 78-year-old woman arrives confused and weak with a fast heart rate and low blood pressure, but no fever.",
          action: "The nurse screens for sepsis, draws a lactate and two sets of blood cultures, reports the findings, and gives broad-spectrum antibiotics and IV fluids within the first hour.",
          outcome: "Her lactate is high, the source is found in her urine, and her blood pressure and mental status improve as the bundle continues and the lactate is repeated."
        },
        activity: {
          prompt: "A patient weighs 70 kilograms and the sepsis fluid order is 30 milliliters per kilogram. How many milliliters is the first fluid amount, and what would you reassess after each liter?",
          type: "calculation"
        },
        knowledgeCheck: {
          question: "What does a lactate of four or higher mean in a patient with suspected sepsis?",
          options: [
            "A danger sign for shock, meaning the circulation is failing",
            "A normal finding that needs no action",
            "Proof that the infection has already cleared"
          ],
          answerIndex: 0,
          rationale: "Lactate builds up when tissues are not getting enough oxygen, and a lactate of four or higher is a danger sign for shock, so that patient moves to the front of the line."
        }
      },
      {
        id: "ed-42",
        title: "Fluids and Dehydration — IV Fluid Choices, Boluses and Reassessment",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Dehydration means the body has lost more water than it has taken in, and in the emergency department it hides behind vomiting, diarrhea, fever, and bleeding. Look for a dry mouth, thirst, dark urine, and urine output that drops hour by hour, and check the pulse and blood pressure lying down and standing, because a racing pulse with a pressure drop on standing is an early warning. Pinch the skin on the back of the hand or the chest: in dehydration it stays tented up instead of snapping back, a finding called poor skin turgor. Weigh the patient when you can, because sudden weight loss in illness is mostly lost water, not lost tissue."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Intravenous fluids, called IV fluids, come in three families: isotonic fluids match the salt level of blood and stay mainly in the blood vessels, hypotonic fluids are weaker and drift into the cells, and hypertonic fluids are stronger and pull water out of the cells. The two workhorse isotonic fluids are normal saline, which is zero point nine percent salt water, and lactated Ringer solution, which carries several body salts in balanced amounts. A bolus is a set volume given fast, often five hundred milliliters to one liter in an adult, through a large intravenous line, run wide open or on a pressure bag as ordered, and note the exact start and finish times in the chart. Reassess after every bolus before more fluid goes in: recheck the blood pressure, pulse, breathing, and oxygen levels, and listen to the lungs."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Too much fluid collects in the lungs and tissues, called fluid overload, and warning signs are crackling lung sounds, labored breathing, swelling of the legs, and oxygen levels that fall instead of rise. Patients with heart failure or kidney failure reach overload fastest, so their boluses run smaller and slower. Dehydration distorts the lab values: sodium and potassium, the key salts that run the heart and nerves, can swing high or low, and kidney tests climb when the kidneys are dry, so recheck labs after big volumes. Potassium is often added to maintenance fluids, but never start it until the patient is making urine, because failing kidneys cannot clear potassium and high levels can stop the heart, so always use an infusion pump for potassium, never push it fast, and check the rate twice."
          }
        ],
        bedsideCues: [
          "Dry mouth and thirst with dark, scant urine",
          "A racing pulse with a pressure drop on standing",
          "Skin that stays tented up after a pinch instead of snapping back",
          "New crackles, labored breathing, or swelling after fluids"
        ],
        assessmentSequence: [
          "1. Check vital signs lying down and standing, mental status, skin turgor, mucous membranes, and urine output.",
          "2. Weigh the patient when you can and draw labs as ordered.",
          "3. Start a large intravenous line and give the ordered fluid type and amount, noting start and finish times.",
          "4. Reassess blood pressure, pulse, breathing, oxygen, and lungs after every bolus.",
          "5. Report breathlessness, falling oxygen, swelling, or no urine output at once, and recheck labs after big volumes."
        ],
        safetyPoints: [
          "Reassess lungs, breathing, and oxygen after every bolus: fluids can flood the lungs.",
          "Never start potassium in fluids until the patient is making urine, and always use an infusion pump, never a fast push.",
          "Hypertonic saline, the three percent salt solution for dangerous brain swelling, is given only as ordered, through a good line, with frequent sodium and neuro checks."
        ],
        workedExample: {
          context: "A 70-year-old man arrives confused and weak after three days of vomiting and diarrhea, with low blood pressure and dark, scant urine.",
          action: "The nurse checks vital signs lying down and standing, pinches the skin and finds poor turgor, starts a large-bore IV line, gives an ordered isotonic fluid bolus, and reassesses lungs, oxygen, blood pressure, and urine output after the first liter.",
          outcome: "His blood pressure rises, his urine output improves, and his breathing stays clear, so the team continues fluids with ongoing reassessment."
        },
        activity: {
          prompt: "A one-liter bolus is ordered and you have given 500 milliliters. How many milliliters remain, and what would you reassess before giving the rest?",
          type: "calculation"
        },
        knowledgeCheck: {
          question: "Which IV fluid family matches the salt level of blood and stays mainly in the blood vessels?",
          options: [
            "Hypotonic fluids, which are weaker and drift into the cells",
            "Hypertonic fluids, which are stronger and pull water out of the cells",
            "Isotonic fluids, such as normal saline and lactated Ringer solution"
          ],
          answerIndex: 2,
          rationale: "Isotonic fluids match the salt level of blood and stay mainly in the blood vessels, which is why normal saline and lactated Ringer solution are the workhorse fluids for boluses."
        }
      }
    ]
  }
};
