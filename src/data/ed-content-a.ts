import type { Lesson, ModuleContent } from "./types";

export const ED_CONTENT_A: Record<string, ModuleContent> = {
  "ed-foundations": {
    moduleId: "ed-foundations",
    lessons: [
      {
        id: "ed-01",
        title: "Welcome to the Emergency Department — The ED Nurse's Role, Mindset and Scope",
        durationMinutes: 5,
        sections: [
          {
            heading: "Core Concept",
            content: "The emergency department (ED) is the front door of the hospital, open 24 hours a day. Patients arrive undifferentiated, which means nobody has sorted out what is wrong yet. A stomachache can be gas, or it can be a rupturing aneurysm. Your job starts with one question: what could kill this person first? Emergency nursing runs on worst-first thinking: rule out the deadly causes before the comfortable ones. Chest pain is a heart attack until proven otherwise, and a headache is a brain bleed until the scan says no."
          },
          {
            heading: "What the ED Nurse Does",
            content: "As a registered nurse (RN) in the ED, you rotate through several roles: triage, carrying a pod of rooms as the primary nurse, joining the trauma team, or covering the code team. Most departments use standing orders and nurse-driven protocols, which are pre-approved order sets that let you start electrocardiograms (EKGs), labs, intravenous (IV) access, and oxygen before a provider ever sees the patient. Know your protocol book cold, because acting inside it is both your power and your protection. You never work alone: providers direct the medical plan, respiratory therapists own the airway equipment, techs run EKGs and splints, and the charge nurse steers the whole department."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Forget first come, first served: emergency care is sickest first, always. A quiet pale patient in the corner can be far sicker than the loud one demanding attention. An ED patient is a moving target: the belly pain that was a four becomes a rigid abdomen, and the talkative patient goes quiet. Reassessment is the heartbeat of this specialty, so repeat vitals and exams after every intervention. Anyone on the team can upgrade a patient who is slipping, so speak up early rather than late."
          }
        ],
        bedsideCues: [
          "A quiet, pale patient sitting alone while louder patients demand attention",
          "Belly pain that was rated a four now presenting as a rigid abdomen",
          "A talkative patient who suddenly goes quiet",
          "A patient whose vitals or appearance changed since the last check"
        ],
        assessmentSequence: [
          "1. Ask yourself what could kill this patient first before anything else.",
          "2. Check your standing orders and nurse-driven protocols to see what you can start now.",
          "3. Start the EKG, labs, IV access, or oxygen the protocol allows.",
          "4. Reassess vitals and the exam after every intervention.",
          "5. Escalate early to the charge nurse or provider when the patient changes."
        ],
        safetyPoints: [
          "Pause before pushing medications and use two patient identifiers every time.",
          "Close the loop on every verbal order by repeating it back.",
          "Protect high-risk moments: interruptions are where errors hide, so slow is smooth and smooth is fast."
        ],
        workedExample: {
          context: "A 54-year-old man walks in holding his stomach and says the pain is a four out of ten, but he looks pale and quiet.",
          action: "The nurse uses worst-first thinking, checks the standing protocol, starts an EKG and IV access, and keeps reassessing instead of sending him back to the waiting room.",
          outcome: "When the pain becomes rigid and his heart rate climbs, the nurse escalates early and the team catches a surgical emergency before it becomes a crisis."
        },
        activity: {
          prompt: "Think about your last shift on the floor. How would worst-first thinking have changed the order you assessed your patients? Write down one habit you will need to change in the ED.",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What is the first question an ED nurse should ask about every new patient?",
          options: [
            "What insurance does this patient have?",
            "What could kill this person first?",
            "What is this patient's full medical history?"
          ],
          answerIndex: 1,
          rationale: "Worst-first thinking means ruling out the deadly causes before the comfortable ones, so the first question is always what could kill this person first."
        }
      },
      {
        id: "ed-02",
        title: "EMTALA — The Law Every ED Nurse Must Know (Screening, Stabilization, Transfers)",
        durationMinutes: 5,
        sections: [
          {
            heading: "Core Concept",
            content: "EMTALA (Emergency Medical Treatment and Active Labor Act) is a federal law passed in 1986 that applies to hospitals that take Medicare and run an emergency department. Its promise is simple: anyone who comes to the ED gets examined and stabilized, regardless of money, insurance, or citizenship. The first duty is the medical screening examination, a real clinical exam by a qualified provider to find out whether an emergency medical condition exists. Triage is not the screening exam: triage only sets the order patients are seen."
          },
          {
            heading: "What the ED Nurse Does",
            content: "You may never delay the screening exam or stabilizing treatment to ask about insurance or payment. Registration can collect information only if it does not slow care down. If the exam finds an emergency medical condition, the hospital must stabilize the patient within its capability, meaning the treatment reasonably needed so the patient is not likely to get worse during transfer or discharge. A woman in active labor counts too: she must be stabilized, which usually means delivering the baby and the placenta. For transfers, confirm the receiving hospital agrees, the provider certifies the benefits outweigh the risks in writing, and a qualified team travels with the right equipment."
          },
          {
            heading: "Red Flags and Escalation",
            content: "An emergency medical condition means symptoms severe enough that not treating right away could seriously harm health, organs, or body function. Severe pain counts, psychiatric emergencies count, and a suicidal patient who wants to leave is an emergency condition the department must evaluate, protect, and stabilize. Watch for the classic violation: asking a chest pain patient to finish insurance forms before the EKG. If something feels off, escalate to the charge nurse or provider, and report suspected violations through the hospital's compliance channels instead of staying quiet."
          }
        ],
        bedsideCues: [
          "Registration asking a chest pain patient about payment before the EKG",
          "A patient with no insurance waiting longer for a screening exam",
          "A suicidal patient asking to leave before being evaluated",
          "A transfer being prepared without written provider certification"
        ],
        assessmentSequence: [
          "1. Make sure every person who asks for care receives a medical screening exam.",
          "2. Never let insurance or payment questions delay the screening or stabilizing treatment.",
          "3. Document arrival time, screening times, the patient's own words, and every notification you made.",
          "4. If a transfer is needed, confirm the receiving provider by name and send copies of records and imaging.",
          "5. Escalate to the charge nurse or provider and report suspected violations through compliance channels."
        ],
        safetyPoints: [
          "Never turn anyone away for payment reasons, and never chart that a patient was turned away for payment.",
          "Document refusals and what was offered, including the risks explained, when a patient leaves before the screening exam.",
          "EMTALA binds the on-call roster too: document times, names, and who said what when a specialist is called."
        ],
        workedExample: {
          context: "A 40-year-old man with no insurance and crushing chest pain walks up to the triage desk, and registration starts asking about payment.",
          action: "The nurse stops the payment questions, gets the patient an EKG and a medical screening exam first, and documents the arrival and screening times.",
          outcome: "The screening finds an emergency medical condition, the patient is stabilized, and the hospital stays inside the law."
        },
        activity: {
          prompt: "Imagine a patient in your waiting room says they have no insurance and asks if they will be charged before they can be seen. What do you say to them, and what do you do next?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "Under EMTALA, what must happen before anyone asks a patient about insurance or payment?",
          options: [
            "The medical screening exam and any stabilizing treatment must not be delayed by payment questions.",
            "The patient must complete registration forms and show an insurance card.",
            "The charge nurse must approve the patient for charity care."
          ],
          answerIndex: 0,
          rationale: "EMTALA forbids delaying the screening exam or stabilizing treatment to ask about insurance or payment; registration may only collect information if it does not slow care down."
        }
      },
      {
        id: "ed-03",
        title: "Triage and the Emergency Severity Index (ESI) — Sorting Who Is Seen First",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Triage is the rapid sorting of patients by how sick they are and how long they can safely wait. It is not first come, first served, and it is not a full assessment. A good triage takes two to five minutes: the chief complaint in the patient's words, vital signs, allergies, and a fast look for anything that cannot wait. The Emergency Severity Index (ESI) runs from level 1, the most urgent, down to level 5, the least urgent. Levels 1 and 2 are about acuity, meaning how sick the patient is right now, while levels 3, 4, and 5 are sorted by resources, meaning how many different kinds of care the patient will likely need."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Level 1 means the patient will die without care right now: no pulse, not breathing, unresponsive, or severe breathing failure. These patients never wait, and resuscitation starts while someone else finishes the paperwork later. Level 2 is the patient who should not wait: high-risk situations, new confusion, extreme distress, or severe pain, usually seven out of ten or higher. Level 3 patients are stable but need two or more resources, such as labs, IV fluids or medications, imaging like computed tomography (CT) scans, nebulizer treatments, specialty consults, or complex procedures. Level 4 needs exactly one resource, and level 5 needs none."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Vitals can move a patient up: if a level 3 patient has danger-zone vitals, meaning a very fast heart rate, fast breathing, or a low oxygen level for their age, the ESI system tells you to consider upgrading to level 2. Numbers matter, but so does your gut: a patient who looks wrong gets escalated. Triage does not end when the number is assigned, so re-check waiting patients on a schedule, repeat vitals, and upgrade anyone who worsens. Document your re-triage every time, because the most dangerous sentence in the department is that the patient was fine an hour ago."
          }
        ],
        bedsideCues: [
          "A quiet patient in the waiting room who looks pale and sweaty",
          "New confusion in a patient who was alert at arrival",
          "A level 3 patient whose heart rate and breathing rate are climbing",
          "A child whose work of breathing or skin color has changed while waiting"
        ],
        assessmentSequence: [
          "1. Get the chief complaint in the patient's own words, plus vital signs and allergies.",
          "2. Decide ESI level 1 or 2 by acuity, or levels 3 to 5 by how many resources are needed.",
          "3. Check vitals against danger-zone thresholds and upgrade the level if they are in the danger zone.",
          "4. Assign the level, document it, and place the patient in the right area.",
          "5. Re-triage waiting patients on a schedule and upgrade anyone who worsens."
        ],
        safetyPoints: [
          "Chest pain, a possible stroke, a baby with a high fever, and a suicidal patient are classic level 2 patients who should not wait.",
          "Oral medications, a simple EKG alone, a urine sample by itself, a prescription refill, crutch fitting, and simple wound care do not count as resources.",
          "Children need extra triage care: a fever means very different things in a three-week-old than in a three-year-old, and every pediatric dose depends on an accurate weight."
        ],
        workedExample: {
          context: "A 62-year-old woman arrives with belly pain and looks stable, but her heart rate is very fast and her breathing rate is climbing.",
          action: "The triage nurse assigns level 3 for the labs, IV fluids, and CT scan she will need, then sees the danger-zone vitals and upgrades her to level 2.",
          outcome: "She gets the next available monitored bed within about ten minutes instead of waiting, and the team catches her deterioration early."
        },
        activity: {
          prompt: "A stable patient needs labs, IV fluids, and a CT scan. A second patient needs only an X-ray for a twisted ankle. Assign each an ESI level and explain your reasoning.",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "A stable patient needs labs, IV fluids, and a CT scan. What ESI level is this?",
          options: [
            "Level 2, because the patient needs three things",
            "Level 4, because the patient is stable",
            "Level 3, because the patient is stable but needs two or more resources"
          ],
          answerIndex: 2,
          rationale: "Level 3 is for stable patients who need two or more resources, and labs, IV fluids, and a CT scan are three resources."
        }
      },
      {
        id: "ed-04",
        title: "The Primary Survey — ABCDE Assessment in the First Five Minutes",
        durationMinutes: 5,
        sections: [
          {
            heading: "Core Concept",
            content: "The primary survey is the ABCDE assessment that finds and fixes life threats in order, every single time. A is airway, B is breathing, C is circulation, D is disability, and E is exposure and environmental control. The golden rule is to treat each life threat the moment you find it, before moving to the next letter. A blocked airway is fixed at A, not after E. If the patient crashes mid-survey, you go straight back to A, and the sequence loops as many times as the patient needs it to."
          },
          {
            heading: "What the ED Nurse Does",
            content: "At A, ask the patient a question: a clear answer means the airway is open and the brain is getting oxygen. Suction the mouth, use a jaw thrust when the neck may be injured, and place an oral or nasal airway adjunct, a simple plastic device that holds the tongue forward. At B, count the respiratory rate yourself for a full 30 seconds, watch chest rise, listen to both lungs, and give oxygen to keep levels in the target range. At C, feel the pulse, check skin color and temperature, control bleeding with direct pressure or a tourniquet, and start two large-bore IV lines. At D, score responsiveness with AVPU (alert, responds to voice, responds to pain, or unresponsive) and the Glasgow Coma Scale (GCS) when you need detail, check the pupils, and always check a blood sugar, because low sugar mimics stroke and sedation. At E, remove clothing and look at the whole patient, log-roll trauma patients with the team, then cover and warm the patient."
          },
          {
            heading: "Red Flags and Escalation",
            content: "A weak fast pulse with cool skin means shock until proven otherwise, so call it out and act. Snoring or gurgling, blood or vomit in the airway, or a patient who cannot protect the airway means the team should prepare for a breathing tube. A silent side of the chest, a falling oxygen level, or a GCS that is dropping all need immediate escalation. Say your findings out loud so the whole team hears them, and accept correction gracefully: closed-loop callouts are how a room full of people becomes one brain."
          }
        ],
        bedsideCues: [
          "A patient who cannot answer a question clearly or is gurgling",
          "One side of the chest that sounds silent or does not rise",
          "A weak, fast pulse with cool, pale skin",
          "A patient who was alert and is now only responding to pain"
        ],
        assessmentSequence: [
          "1. A: check the airway by asking a question and looking for obstruction.",
          "2. B: count respirations for 30 seconds, watch chest rise, listen to both lungs, and check oxygen.",
          "3. C: feel the pulse, check skin, control bleeding, and start two large-bore IV lines.",
          "4. D: score AVPU and the Glasgow Coma Scale, check pupils, and check a blood sugar.",
          "5. E: expose the whole patient, log-roll with the team if trauma, then cover and warm."
        ],
        safetyPoints: [
          "Treat each life threat the moment you find it, before moving to the next letter.",
          "In trauma, protect the neck with a cervical collar while you open the airway.",
          "Monitors never replace your hands and eyes: attach the cardiac monitor, blood pressure cuff, and pulse oximeter as adjuncts, but keep assessing yourself."
        ],
        workedExample: {
          context: "A 38-year-old man arrives after a car crash, grey and sweaty, barely breathing, with blood in his mouth.",
          action: "The nurse starts at A, suctions the mouth and uses a jaw thrust while the team protects the neck, then moves to B and finds one side of the chest silent.",
          outcome: "The airway is cleared and the breathing problem is found and treated in the first five minutes, before the team moves on to the secondary survey."
        },
        activity: {
          prompt: "Walk through ABCDE in your head for a patient who arrives unresponsive after a fall. What would you check at each letter, and what would make you stop and treat before moving on?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "During the primary survey you find a blocked airway at step A. What do you do next?",
          options: [
            "Finish the full ABCDE survey first, then come back to the airway",
            "Fix the airway at A before moving to B",
            "Skip to C to check circulation, since the heart matters more"
          ],
          answerIndex: 1,
          rationale: "The golden rule is to treat each life threat the moment you find it, before moving to the next letter, so a blocked airway is fixed at A."
        }
      },
      {
        id: "ed-05",
        title: "ED Flow — Arrival to Disposition, Boarding, and Throughput",
        durationMinutes: 5,
        sections: [
          {
            heading: "Core Concept",
            content: "ED flow is how patients move from arrival to disposition, which means the decision on where the patient goes next: admitted to the hospital, discharged home, transferred to another facility, or held for observation. Patients arrive two ways: walking in, or by ambulance through emergency medical services (EMS). Ambulance crews call ahead with a pre-arrival report, so the charge nurse can ready a room, a team, or the trauma bay. Walk-ins start at triage, and either way the first minutes decide how smooth the next hours will be."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Smart departments split the flow: vertical patients, meaning those who can sit upright in a chair, get quick exams, swabs, and simple treatments without ever taking a bed, and fast-track areas handle the level 4 and 5 patients. This protects monitored beds for the patients who truly need cardiac monitoring and frequent reassessment. In the middle of the visit, your flow job is anticipation: draw the blood before the order prints when protocols allow, hang the fluids, pre-medicate for the CT scanner trip, and keep the patient informed so waits feel shorter. Turn rooms over fast after discharge, restock as you go, batch your trips, and tell the charge nurse the moment a room is truly ready."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Boarding means admitted patients stay in the ED because no inpatient bed is ready upstairs, and heavy boarding is the number one cause of ED crowding. Treat boarders like the inpatients they are: give scheduled meds on time, round on them as deliberately as your emergencies, and remember a quiet boarder can deteriorate unnoticed behind a curtain. A patient leaving without being seen, known as LWBS (left without being seen), is a safety and legal risk. Reduce it with honest wait-time updates, quick re-triage, and pain control in the waiting room when protocols allow, and if someone insists on leaving, involve the provider and document the conversation and the risks explained."
          }
        ],
        bedsideCues: [
          "A waiting room that is packed with no open rooms and ambulances still arriving",
          "A quiet boarder behind a curtain who has not been rounded on in hours",
          "A patient in the waiting room who says they are leaving",
          "A monitored bed holding a finished patient while a sick patient waits"
        ],
        assessmentSequence: [
          "1. Identify how the patient arrived: walk-in through triage or ambulance with a pre-arrival report.",
          "2. Sort vertical and fast-track patients away from monitored beds when they are stable.",
          "3. Anticipate the workup: draw blood, hang fluids, and prep for imaging before delays stack up.",
          "4. Surface barriers early, like a missing test result or an unreturned consult, so disposition does not stall.",
          "5. Complete discharge teaching, confirm the patient can repeat the plan back, and turn the room over fast."
        ],
        safetyPoints: [
          "Discharge is a clinical procedure, not a checkout line: teach the diagnosis in plain words, review every medication change, and state return precautions clearly.",
          "Never let a patient leave without being seen without involving the provider and documenting the risks explained.",
          "Boarders still need full nursing care: medications, meals, turning, and reassessment, all inside a department built for speed."
        ],
        workedExample: {
          context: "A 47-year-old woman is admitted but boarding in the ED for six hours because no inpatient bed is ready, and the department is busy with new arrivals.",
          action: "The nurse gives her scheduled medications on time, rounds on her deliberately, rechecks her vitals, and keeps her informed about the wait.",
          outcome: "When her breathing changes behind the curtain, the nurse catches it early because she was rounding like the patient was already an inpatient."
        },
        activity: {
          prompt: "Think of three small flow habits you can control on your next shift, such as restocking as you go or telling the charge nurse the moment a room is ready. Which one will you start with?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What does boarding mean in the ED?",
          options: [
            "Admitted patients staying in the ED because no inpatient bed is ready upstairs",
            "Patients waiting in the waiting room before triage",
            "Patients held in the ED for observation after a procedure"
          ],
          answerIndex: 0,
          rationale: "Boarding means admitted patients stay in the ED because no inpatient bed is ready upstairs, and heavy boarding is the number one cause of ED crowding."
        }
      },
      {
        id: "ed-06",
        title: "The Focused ED Assessment — Vitals, Red Flags and Reassessment",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "A focused assessment is not a full review: it aims at the complaint and its dangers. Start with the story in the patient's words: what started, when it started, what makes it better or worse, and what changed today. Then match the story to the body system involved. Vital signs are heart rate, blood pressure, breathing rate, temperature, and oxygen saturation, which means how much oxygen the blood carries. Take them yourself when you can, because a rushed or wrong number can hide shock, which means the body is not getting enough blood flow."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Count breathing for a full minute if it looks slow, fast, or uneven, and watch chest rise, listen for wheezing or crackles, and check oxygen saturation with a pulse oximeter, a small sensor that reads oxygen through the skin. Feel the pulse for rate, strength, and rhythm, not just the number on the screen, and compare blood pressure with the patient's usual range when known. Ask where pain is, what it feels like, how strong it is, and where it travels, using the scale your unit uses and recording the answer in the patient's words when helpful. Shape the exam around the complaint: chest pain needs heart and lung checks, belly pain needs a belly exam and bowel history, and a head injury needs level of alertness checks."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Red flags include chest pain, severe breathing trouble, blue lips, confusion, weakness on one side, uncontrolled bleeding, and signs of shock. Also report a sudden drop in urine, which can signal the kidneys are struggling, and fever with confusion, a stiff neck, or a new rash. Do not file these away for later: escalate now and keep escalating. One number rarely tells the story, but trends do: a heart rate climbing visit after visit, a blood pressure slowly falling, or oxygen needs rising all warn you before a crash, so chart the trend and tell the provider what direction the patient is heading."
          }
        ],
        bedsideCues: [
          "Pale, cool, sweaty skin with a fast weak pulse even before blood pressure falls",
          "Fever with confusion, a stiff neck, or a new rash",
          "Work of breathing that looks like a struggle, with wheezing or crackles",
          "A heart rate climbing or oxygen needs rising across repeat checks"
        ],
        assessmentSequence: [
          "1. Get the story in the patient's words: onset, timing, what helps, what worsens, and what changed today.",
          "2. Take vital signs yourself, including a full-minute respiratory count when breathing looks off.",
          "3. Examine the body system tied to the complaint and check pain location, quality, strength, and radiation.",
          "4. Compare findings to arrival values and look for trends, not just single numbers.",
          "5. Reassess after every treatment and report the trend and whether anything improved."
        ],
        safetyPoints: [
          "Pale, cool, sweaty skin with a fast weak pulse can mean shock even before the blood pressure falls, so trust the whole picture.",
          "New severe pain, pain out of proportion to the exam, or pain with fainting needs urgent attention.",
          "A pain medicine, a fluid bolus, or oxygen should change something: if nothing improves, say so early."
        ],
        workedExample: {
          context: "A 60-year-old man comes in with belly pain, and his first heart rate is 98, then 112, then 124 over three checks while his blood pressure slowly falls.",
          action: "The nurse charts the trend, compares it with arrival values, and tells the provider the direction the patient is heading instead of reporting only the latest number.",
          outcome: "The provider acts on the trend before the blood pressure crashes, and the patient gets treated for shock early."
        },
        activity: {
          prompt: "Think of a time a single vital sign looked normal but the trend told a different story. What would you chart and say to the provider so the trend is heard?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "Why does the ED nurse repeat vital signs after a treatment like a fluid bolus or oxygen?",
          options: [
            "To fill in the chart for the next shift",
            "To prove the patient was seen on time",
            "To check whether the treatment changed anything and catch a patient who is not improving"
          ],
          answerIndex: 2,
          rationale: "Reassessment means checking again after any treatment, and if nothing improves after a pain medicine, a fluid bolus, or oxygen, the nurse should say so early."
        }
      },
      {
        id: "ed-07",
        title: "ED Documentation — Charting That Protects the Patient and the Nurse",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "In the ED, documentation is care. One note can guide the next nurse, defend a good decision, or expose a careless one. Chart what you saw, heard, measured, and did. Write that the patient states chest pressure began at home, not that the patient is dramatic or drug seeking. Quotes help when words matter. Facts stay professional, fair, and useful, while opinions age badly and can bias every clinician who reads them later. Times tell the story of the visit, so record arrival, triage, first vital signs, provider notice, medicines, and reassessment using the real time the event happened, not the time you sat down."
          },
          {
            heading: "What the ED Nurse Does",
            content: "A strong triage note covers the chief complaint in the patient's words, when symptoms began, allergies, current medicines, and key history, plus vital signs and the ESI (Emergency Severity Index) level. Chart the assessment you actually performed, system by system as it relates to the complaint, and note normal findings too, because they show what you ruled out. For every medicine, chart the name, dose, route, time, and the patient response, and record allergies with the reaction, not just the drug name, so the MAR (medication administration record) matches your note. For procedures, chart consent when required, who performed it, how the patient tolerated it, and any problems."
          },
          {
            heading: "Red Flags and Escalation",
            content: "A treatment without a reassessment note looks unfinished: after pain medicine, chart the new pain score, and after fluids, chart breathing, blood pressure, and urine output. If the patient did not improve, chart that too, plus who you told and when, because silence in the chart reads like nothing was done. Never copy a prior note forward without checking it yourself: a copied error becomes your error the moment your name signs it. If you made an error in the chart, follow policy for a late entry or correction, date and time it honestly, and never delete or backdate."
          }
        ],
        bedsideCues: [
          "A triage note missing the onset time or the patient's own words",
          "A medication given with no response charted afterward",
          "A reassessment that was done but never written down",
          "A copied-forward note that no longer matches the patient in front of you"
        ],
        assessmentSequence: [
          "1. Chart the chief complaint in the patient's words, onset, allergies, medicines, and key history.",
          "2. Record vital signs, the ESI level, and the assessment you actually performed, including normal findings.",
          "3. For every medicine, chart name, dose, route, time, and response, with allergies and reactions.",
          "4. After every treatment, chart the reassessment: pain score, breathing, blood pressure, and urine output.",
          "5. Close the note so the next nurse can pick up care: pending tests, lines and drains, safety risks, and what to watch next."
        ],
        safetyPoints: [
          "Use the real time the event happened, not the time you sat down to chart, because gaps in time raise hard questions later.",
          "Never copy a prior note forward without checking it yourself.",
          "Chart refusals, education given, and follow-up instructions too: if it mattered to safety, it belongs in the record."
        ],
        workedExample: {
          context: "A 45-year-old woman receives pain medicine for a kidney stone, and an hour later her pain is unchanged.",
          action: "The nurse charts the new pain score, notes that the patient did not improve, and records who she told and when.",
          outcome: "The provider sees the documented lack of improvement, re-evaluates the patient, and changes the plan instead of assuming the medicine worked."
        },
        activity: {
          prompt: "Look at a note you charted recently. Does it let a nurse who has never met the patient pick up care without hunting? What is missing?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "A patient gets pain medicine and the pain does not improve. What must the chart show?",
          options: [
            "Only the dose and time of the medicine",
            "The new pain score, that the patient did not improve, and who you told and when",
            "A copy of the previous shift's note saying the patient was comfortable"
          ],
          answerIndex: 1,
          rationale: "A treatment without a reassessment note looks unfinished, and if the patient did not improve, the chart must show that plus who you told and when."
        }
      },
      {
        id: "ed-08",
        title: "Communication in the ED — SBAR, Handoffs, Closed-Loop and Calling the Provider",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "A missed message in the ED can cost a life. Clear communication is a clinical skill, not a personality trait. SBAR (Situation, Background, Assessment, Recommendation) gives your message a clear order. Situation says what is happening now. Background gives the short history. Assessment shares what you found and what you think it means. Recommendation states what you need. Practice it until it feels natural. Closed-loop communication means the receiver repeats the message back and the sender confirms it is right, which catches wrong doses, wrong patients, and wrong rooms before harm happens."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Open with the situation in one or two sentences: who the patient is, where they are, and the urgent problem, such as a patient in room twelve with new chest pressure and a falling blood pressure. Background is the short, useful history, not the whole chart: when symptoms began, key past conditions, allergies, recent medicines, and treatments already tried. Assessment means your own clinical judgment built on findings, so share vital signs, exam changes, and what worries you most, and never hide worry to sound calm. Close with a recommendation, stating exactly what you need, such as asking the provider to come to the bedside now or to give an ordered fluid bolus."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Before you call, gather your facts: the complaint, vital signs, key history, allergies, what you have tried, and what you want, and write it down if you need to. Call early when trends worry you, because providers would rather hear about a problem early than meet it during a crash. If your concern is brushed aside, stay calm and restate the data, using clear safety language such as saying you need the provider to see this patient now. If worry remains, use your chain of command, which means going to the charge nurse, then leadership, step by step. Advocacy is your duty."
          }
        ],
        bedsideCues: [
          "A provider order you heard but are not sure you heard correctly",
          "A handoff that skipped pending results or what to watch next",
          "A patient whose trend worries you even though the numbers are not yet critical",
          "A family that needs an interpreter for medical details, not a child"
        ],
        assessmentSequence: [
          "1. Gather your facts before you call: complaint, vitals, history, allergies, what you tried, and what you want.",
          "2. Open with the Situation in one or two sentences.",
          "3. Give a tight Background, then your Assessment with the data and what worries you.",
          "4. Close with a clear Recommendation stating exactly what you need.",
          "5. Use closed-loop communication: have the receiver repeat it back and confirm it is right."
        ],
        safetyPoints: [
          "Use names, not just hey you, and when the task is done, the receiver reports back to close the loop fully.",
          "Give handoffs at the bedside when policy allows, include the patient, and cover diagnosis, current status, pending results, risks, and what to do if things change.",
          "Use a trained interpreter when language differs, never a child or family member for medical details."
        ],
        workedExample: {
          context: "A 58-year-old man in room twelve develops new chest pressure and his blood pressure is falling.",
          action: "The nurse calls the provider with SBAR: the situation in one sentence, a tight background, the vital signs and her concern for shock, and a clear ask for the provider to come to the bedside now.",
          outcome: "The provider comes immediately, the team acts on the falling pressure, and nothing is lost in a vague message."
        },
        activity: {
          prompt: "Write out a 30-second SBAR for a patient whose heart rate has climbed from 98 to 124 and whose blood pressure is slowly falling. What is your recommendation?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What does the R in SBAR stand for, and what should it contain?",
          options: [
            "Recommendation: a clear statement of exactly what you need",
            "Response: a summary of how the patient responded to treatment",
            "Report: a full reading of the patient's chart"
          ],
          answerIndex: 0,
          rationale: "Recommendation is the final part of SBAR, and it must state exactly what you need, such as asking the provider to come to the bedside now."
        }
      }
    ]
  },
  "ed-cardiac": {
    moduleId: "ed-cardiac",
    lessons: [
      {
        id: "ed-09",
        title: "Chest Pain in the ED — The First Ten Minutes",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Chest pain walks in calm and can crash in minutes. The first ten minutes in the ED decide the outcome. In the first two minutes, greet the patient, note how they look, and get them on a cardiac monitor, a machine that tracks heart rhythm, blood pressure, and oxygen. Ask if pain is happening now, sit them down, keep them still, and do not send chest pain back to the waiting room. Get the EKG (electrocardiogram) within ten minutes of arrival: it is a painless test that records the electrical activity of the heart through stickers on the chest."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Place the EKG leads, keep the patient still, and hand the tracing to the provider right away, repeating it if pain changes or returns. Ask when pain began, where it is, what it feels like, and where it travels, plus what brings it on and what eases it, and ask about shortness of breath, sweating, nausea, and fainting. Start an IV (intravenous line) and draw blood work as ordered, including troponin, a blood protein that rises when heart muscle is injured. One normal result does not clear the patient, because trends over time tell the real story. Give aspirin early when ordered and not allergic, and confirm the patient has not already taken a full dose at home."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Not all chest pain is the heart: a torn aorta, the main artery leaving the heart, a collapsed lung, or a blood clot in the lung can all kill fast. Tearing pain to the back, one-sided absent breath sounds, or sudden severe breathlessness should raise your alarm immediately. Watch for dangerous rhythms, pale or sweaty skin, and pain that will not settle, and keep the patient from walking to the bathroom alone, because exertion raises heart demand. Oxygen is a drug, so give it with purpose: most chest pain patients with normal oxygen saturation do not need extra oxygen, but when levels are low or breathing is hard, give oxygen and reassess."
          }
        ],
        bedsideCues: [
          "Tearing chest pain that travels to the back",
          "One side of the chest with absent breath sounds",
          "Pale, sweaty skin with pain that will not settle",
          "A patient with chest pain asking to walk to the bathroom alone"
        ],
        assessmentSequence: [
          "1. Greet the patient, note how they look, and get them on the cardiac monitor within the first two minutes.",
          "2. Get the EKG within ten minutes of arrival and hand the tracing to the provider right away.",
          "3. Ask about pain onset, location, quality, radiation, triggers, and associated symptoms like sweating and nausea.",
          "4. Start an IV, draw blood including troponin, and give ordered aspirin after checking allergies and home doses.",
          "5. Keep the patient monitored, repeat vitals often, and reassess pain after every intervention."
        ],
        safetyPoints: [
          "Do not send chest pain back to the waiting room.",
          "For nitroglycerin, check blood pressure first, ask about erection medicines taken recently, and recheck pain and pressure after each dose.",
          "Report a dropping blood pressure or worsening pain after nitroglycerin at once."
        ],
        workedExample: {
          context: "A 54-year-old man arrives with crushing chest pain that started 30 minutes ago, sweating and short of breath.",
          action: "The nurse puts him on the monitor, gets the EKG within ten minutes, starts an IV, draws troponin, and gives ordered aspirin after confirming no allergy and no dose already taken at home.",
          outcome: "The EKG reaches the provider immediately, the heart attack is recognized fast, and the patient is on the treatment pathway within minutes of arrival."
        },
        activity: {
          prompt: "A patient tells you the chest pain started an hour ago and feels like pressure with sweating. List the five questions you would ask next, in order, and why each one matters.",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "How soon should a chest pain patient get an EKG after arrival?",
          options: [
            "Within 30 minutes, after registration is complete",
            "Within 10 minutes of arrival",
            "Only after the first troponin result comes back"
          ],
          answerIndex: 1,
          rationale: "The EKG must be done within ten minutes of arrival, because it shows whether the heart muscle is dying in real time and drives the next decisions."
        }
      },
      {
        id: "ed-10",
        title: "Acute Coronary Syndrome and STEMI — Heart Attack Care Door-to-Balloon",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "ACS (acute coronary syndrome) is the group of conditions caused by sudden reduced blood flow to the heart, usually from a clot forming on a cracked plaque, a fatty buildup inside an artery. It ranges from unstable chest pain to a full heart attack. STEMI (ST-elevation myocardial infarction) is a complete blockage heart attack: on the EKG (electrocardiogram), a raised segment shows heart muscle dying in real time. This is a time emergency, and the blocked artery must be opened as fast as safely possible. Door-to-balloon time means the minutes from hospital arrival to opening the blocked artery with a small balloon, and the national goal is 90 minutes or less."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Get a 12-lead EKG, a tracing recorded from twelve views of the heart, within ten minutes, hand it to the provider at once, and repeat it when pain or rhythm changes. The balloon procedure happens in the cath lab (cardiac catheterization laboratory), a special suite where doctors thread a thin tube to the heart, and that treatment is PCI (percutaneous coronary intervention), opening the artery from inside. One clear activation call starts the whole team moving. Before transfer, give ordered medicines without slowing transport, which may include aspirin, a second antiplatelet medicine that stops platelets from clumping, and heparin, a blood thinning medicine. Confirm allergies, start two IV lines, and keep the patient on the monitor."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Delays hide in small places: a missing consent, an empty oxygen tank, a slow elevator, or a repeat blood draw can all burn minutes, so prepare the chart, the lines, the monitor, and the patient in parallel and speak up the moment anything stalls. A dying heart can misfire, so watch for dangerous rhythms, falling blood pressure, lung crackles, and confusion, and keep defibrillator pads close, meaning sticky pads that let the team deliver a shock if the heart rhythm becomes lethal. If PCI is not available in time, the team may give a clot dissolving medicine when ordered and safe, and the nurse screens for bleeding risks, recent surgery, and prior stroke, then watches closely for bleeding afterward."
          }
        ],
        bedsideCues: [
          "An EKG with a raised ST segment in a patient with chest pain",
          "New lung crackles or confusion while waiting for the cath lab",
          "A falling blood pressure or a dangerous rhythm during transport prep",
          "Bleeding or swelling at the wrist or groin access site after the artery is opened"
        ],
        assessmentSequence: [
          "1. Get the 12-lead EKG within ten minutes and hand it to the provider at once.",
          "2. Activate the cath lab with one clear call when STEMI is recognized.",
          "3. Give ordered medicines without slowing transport, confirm allergies, and start two IV lines.",
          "4. Prepare the chart, lines, monitor, and patient in parallel and speak up the moment anything stalls.",
          "5. After the artery opens, watch the access site, repeat the EKG, recheck pain, and monitor rhythm closely."
        ],
        safetyPoints: [
          "Treat the clock like a vital sign: the national door-to-balloon goal is 90 minutes or less, and every delay costs heart muscle.",
          "Keep defibrillator pads close during transport prep, and report changes before the patient crashes.",
          "After the artery opens, the heart can still develop failure or rhythm problems in the first hours, so careful watching after the rescue is part of the rescue."
        ],
        workedExample: {
          context: "A 61-year-old woman arrives with crushing chest pain, and her EKG shows a raised ST segment.",
          action: "The nurse hands the EKG to the provider immediately, the cath lab is activated with one call, and while the team prepares she gives ordered medicines, starts two IV lines, and keeps the patient on the monitor.",
          outcome: "The blocked artery is opened within the 90-minute door-to-balloon goal, and the patient is watched closely afterward for bleeding at the access site and new rhythm problems."
        },
        activity: {
          prompt: "List four small delays that can burn door-to-balloon minutes on your unit, such as a missing consent or an empty oxygen tank. What would you do in advance to prevent each one?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What is the national door-to-balloon goal for a STEMI patient?",
          options: [
            "90 minutes or less from hospital arrival to opening the blocked artery",
            "Within 10 minutes of arrival",
            "Within 4 hours, as long as medicines are given first"
          ],
          answerIndex: 0,
          rationale: "Door-to-balloon time is measured from hospital arrival to opening the blocked artery, and the national goal is 90 minutes or less because every delay costs heart muscle."
        }
      },
      {
        id: "ed-11",
        title: "EKG Essentials for the ED Nurse — Leads, Rhythm Strips and What to Report",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "An EKG (electrocardiogram) is the tracing of the heart's electrical activity. Think of leads as different camera views of the same heart: a lead is one view made by stickers called electrodes placed on the skin, which pick up tiny electrical signals and send them to the monitor. Good tracings start with good skin contact, so dry sweaty skin, shave thick chest hair where the sticker will sit, and press each electrode down firmly. Loose stickers create wandering lines and false alarms, so take ten extra seconds now to save ten confused minutes later."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Place the limb electrodes on the right arm, left arm, right leg, and left leg, matching the colors and labels on your cables, because swapped arm stickers flip the tracing upside down in some views. Chest electrodes go in a set order across the ribs, counting the spaces between the ribs from the top of the chest, and one space too low changes the whole picture and can hide a heart attack, so count out loud and use the same landmarks every single time. A rhythm strip is a longer tracing from one lead that shows the heart rhythm over time, so print the strip, label it with the time, and keep it with the chart for the provider to review. Artifact means noise on the tracing that is not from the heart, like shivering, talking, or a loose wire, so ask the patient to lie still and breathe normally, warm cold hands, and recheck loose stickers."
          },
          {
            heading: "Red Flags and Escalation",
            content: "First ask two questions: how fast is the heart beating, and is the pattern regular or irregular? Bradycardia means a slow heart rate, and tachycardia means a fast heart rate, so state the rate in beats per minute and describe the pattern in plain words when you report. Each beat has parts: the P wave is the small bump before the main spike, the QRS complex is the tall sharp spike, the T wave is the rounded bump after it, and the ST segment is the flat part just after the spike. Report right away if the ST segment sits high above the baseline, if the rhythm turns irregular and fast, or if the patient has chest pain, shortness of breath, or fainting."
          }
        ],
        bedsideCues: [
          "A wandering baseline on the tracing from a loose electrode",
          "A tracing that looks upside down in some views from swapped arm stickers",
          "An ST segment sitting high above the baseline",
          "A rhythm that turns suddenly irregular and fast on the monitor"
        ],
        assessmentSequence: [
          "1. Prepare the skin: dry sweat, shave thick chest hair where stickers will sit, and press each electrode down firmly.",
          "2. Place limb electrodes on the right arm, left arm, right leg, and left leg, checking left and right before you print.",
          "3. Place chest electrodes in set order, counting rib spaces from the top of the chest out loud.",
          "4. Fix artifact first: ask the patient to lie still, warm cold hands, and recheck loose stickers.",
          "5. Print a labeled rhythm strip, state the rate and whether the pattern is regular or irregular, and report danger findings at once."
        ],
        safetyPoints: [
          "One tracing is a snapshot, so repeat it when pain changes or symptoms return and compare the new tracing with the old one side by side.",
          "Troponin, a heart muscle protein measured in a blood test, helps confirm injury, but the tracing comes first.",
          "You do not need to name every rhythm on day one: you need clean stickers, correct placement, a labeled strip, and a clear, fast report."
        ],
        workedExample: {
          context: "A 49-year-old man with chest pain has an EKG that looks strange, with a wandering baseline and odd shapes in some views.",
          action: "The nurse checks the stickers, finds two loose electrodes and swapped arm leads, fixes the skin contact and placement, and repeats the tracing.",
          outcome: "The clean tracing clearly shows the problem, the provider can read it with confidence, and the patient gets the right treatment without delay."
        },
        activity: {
          prompt: "You print a rhythm strip and the rate is 140 beats per minute and irregular. Write the exact words you would say when you hand it to the provider, including the rate, the pattern, and what the patient feels.",
          type: "interpretation"
        },
        knowledgeCheck: {
          question: "What should you do first if the EKG tracing is noisy with artifact from shivering or a loose wire?",
          options: [
            "Print it anyway and let the provider sort it out",
            "Fix the noise first: ask the patient to lie still, warm cold hands, and recheck loose stickers",
            "Move the chest electrodes one space lower and repeat"
          ],
          answerIndex: 1,
          rationale: "Artifact is noise that is not from the heart, and a clean tracing is a safe tracing, so you fix the noise before you call the tracing done."
        }
      },
      {
        id: "ed-12",
        title: "Dangerous Rhythms — Recognizing the Dysrhythmias That Kill",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "A dysrhythmia is an abnormal heart rhythm that can stop blood flow without warning. Always check the patient before the monitor: a loose sticker can fake a deadly rhythm on a person who is awake and talking, so touch the patient, check for a pulse, and ask how they feel before you shout. V-fib (ventricular fibrillation) is a chaotic quiver of the lower heart chambers with no real beat and no pulse, and the tracing looks like wild scribble. V-tach (ventricular tachycardia) is a very fast rhythm from the lower chambers that looks like wide, regular spikes marching fast."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Sort every bad rhythm into two groups: shockable means V-fib and pulseless V-tach, where a shock can reset the heart, and non-shockable means asystole and PEA (pulseless electrical activity), where compressions and medicine matter most. Say the group out loud so the whole team moves together. Asystole means a flat tracing with no electrical activity and no pulse, and you cannot shock it, while PEA shows a rhythm on screen but the patient has no pulse. Both need strong compressions and epinephrine, which is adrenaline medicine, while the team hunts the cause. While help comes, call out the rhythm change, check the pulse, attach the defibrillator pads, start an IV, and bring the crash cart close."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Unstable means the rhythm is causing harm right now, like low blood pressure, chest pain, confusion, or trouble breathing, while stable means the patient is tolerating the rhythm while you monitor closely. The patient, not just the screen, decides how fast the team treats, so reassess every few minutes. Bradycardia means a slow heart rate and tachycardia means a fast heart rate, and either one can drop blood pressure dangerously, so if the patient looks pale, dizzy, or short of breath, call for help and prepare the pacing pads. Heart block means the electrical signal from the top chambers gets delayed or blocked before it reaches the lower chambers, so beats drop: report dropped beats, a very slow rate, and any fainting right away."
          }
        ],
        bedsideCues: [
          "A tracing that looks like wild scribble in a patient who is unresponsive",
          "Wide, regular spikes marching very fast on the monitor",
          "A rhythm on screen but no pulse when you check the patient",
          "Dropped beats with a very slow rate and a patient who feels faint"
        ],
        assessmentSequence: [
          "1. Check the patient before the monitor: touch them, check for a pulse, and ask how they feel.",
          "2. Name the rhythm and sort it into shockable or non-shockable out loud.",
          "3. Decide stable or unstable by what the rhythm is doing to the patient right now.",
          "4. Call for help, attach the defibrillator pads, start an IV, and bring the crash cart close.",
          "5. Reassess every few minutes and report the rate, the pattern, and how the patient feels."
        ],
        safetyPoints: [
          "V-fib and pulseless V-tach get a shock; asystole and PEA do not get a shock and need compressions and medicine.",
          "A-fib (atrial fibrillation) is an irregular rhythm with no clear pattern before each main spike, often fast, and SVT (supraventricular tachycardia) is a very fast regular rhythm that starts above the lower chambers: report the rate, the pattern, and how the patient feels.",
          "With a pulse but a sick patient in V-tach, the team may shock with sedation first, so keep the patient in bed and call for help fast."
        ],
        workedExample: {
          context: "A 66-year-old man on the monitor suddenly shows a tracing that looks like wild scribble, and he is unresponsive.",
          action: "The nurse checks for a pulse, finds none, calls out V-fib as shockable, starts compressions, and has the team attach the defibrillator pads.",
          outcome: "The team delivers a shock within minutes, and the clear call-out keeps everyone moving together instead of guessing."
        },
        activity: {
          prompt: "You see a strip with wide, regular spikes marching very fast, and the patient has a pulse but a blood pressure that is falling. Is this shockable or not, stable or unstable, and what do you do first?",
          type: "interpretation"
        },
        knowledgeCheck: {
          question: "Which rhythms are shockable?",
          options: [
            "Asystole and PEA (pulseless electrical activity)",
            "Bradycardia and heart block",
            "V-fib (ventricular fibrillation) and pulseless V-tach (ventricular tachycardia)"
          ],
          answerIndex: 2,
          rationale: "Shockable means V-fib and pulseless V-tach, where a shock can reset the heart, while asystole and PEA are non-shockable and need compressions and medicine."
        }
      },
      {
        id: "ed-13",
        title: "Cardiac Arrest — Your Role in the Code (ACLS Team Roles)",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "A code means a cardiac arrest, where the heart has stopped beating well enough to move blood. ACLS (Advanced Cardiovascular Life Support) is the shared system the team uses to treat cardiac arrest, and CPR (cardiopulmonary resuscitation) is the cycle of chest compressions and breaths that moves blood by hand. Every pause in compressions drops the pressure that keeps blood moving to the brain, so keep pauses under ten seconds for rhythm checks and shocks, charge the machine while compressions continue, and hover hands over the chest during the shock so compressions restart the instant the leader says clear."
          },
          {
            heading: "What the ED Nurse Does",
            content: "The compressor pushes hard and fast in the center of the chest and lets the chest rise fully between pushes, switching out every two minutes because compressions tire people quickly. The airway person keeps the airway open and gives breaths with a bag and mask, watching the chest rise with each breath, and too many breaths can hurt, so breaths are given at the calm rate the leader sets. The monitor and defibrillator person attaches the pads, watches the rhythm, and charges the defibrillator when the leader calls for a shock. The medications person starts an IV or helps with access, then draws up and gives the ordered medicines, and epinephrine, the adrenaline medicine used in arrest, is given every three to five minutes with each dose called out loud. The recorder writes the time of each shock, each medicine, and each rhythm check, and calls out when two minutes have passed."
          },
          {
            heading: "Red Flags and Escalation",
            content: "The team leader stands where the whole patient is visible, names the rhythm, orders medicines and shocks, and thinks about causes, using closed-loop communication, which means the order is repeated back and confirmed when done. Shockable rhythms are V-fib (ventricular fibrillation), a chaotic quiver with no pulse, and pulseless V-tach (ventricular tachycardia without a pulse), and these get a shock. Asystole and PEA (pulseless electrical activity) do not get a shock and need compressions and medicine. Codes are team work, so rotate roles as people tire and speak up if you see a missed step, a loose pad, or a medicine that is due: any nurse can remind the team respectfully."
          }
        ],
        bedsideCues: [
          "A compressor whose push depth is fading after two minutes on the chest",
          "A defibrillator pad that has come loose during compressions",
          "A medicine dose that is due but has not been called out",
          "A pause in compressions stretching past ten seconds for a rhythm check"
        ],
        assessmentSequence: [
          "1. Take your assigned role: compressor, airway, monitor and defibrillator, medications, recorder, or leader.",
          "2. Start compressions hard and fast with full chest recoil, and switch the compressor every two minutes.",
          "3. Attach the defibrillator pads, name the rhythm, and sort it into shockable or non-shockable.",
          "4. Give epinephrine every three to five minutes, calling each dose out loud, and record every time and action.",
          "5. Keep pauses under ten seconds, charge while compressions continue, and restart compressions the instant the leader says clear."
        ],
        safetyPoints: [
          "If compressions are your role, count out loud and call for your switch early, before your quality fades.",
          "Too many breaths can hurt, so the airway person gives breaths at the calm rate the leader sets and speaks up if the chest is not rising well.",
          "A quiet room with shared focus protects the patient better than noise and rushing."
        ],
        workedExample: {
          context: "A 70-year-old man collapses in the ED and has no pulse, and the team rushes in for a code.",
          action: "The nurse takes the recorder role, writes the time of each shock, medicine, and rhythm check, calls out when two minutes have passed, and reminds the team when epinephrine is due.",
          outcome: "The timing stays exact, medicines stay on schedule, and the leader stays free to think instead of counting."
        },
        activity: {
          prompt: "Which code role do you feel least ready for, and what is one thing you can practice in your next drill to get ready for it?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "How often is epinephrine given during a cardiac arrest, and how often should the compressor switch out?",
          options: [
            "Epinephrine every 10 minutes, compressor switches every 5 minutes",
            "Epinephrine every three to five minutes, compressor switches every two minutes",
            "Epinephrine once at the start, compressor switches only when tired"
          ],
          answerIndex: 1,
          rationale: "Epinephrine is given every three to five minutes with each dose called out loud, and the compressor switches every two minutes because compressions tire people quickly."
        }
      },
      {
        id: "ed-14",
        title: "After the Code — Post-ROSC Care and Family Presence",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "ROSC (return of spontaneous circulation) is the moment the heart starts beating on its own again, and it starts a fragile hour where close nursing care protects the brain. The code is over, but the danger is not: patients can arrest again quickly, so keep the defibrillator pads on and the team close until things settle. In the first minutes after ROSC, confirm the pulse, check blood pressure, and watch the rhythm without leaving the bedside. Brain protection guides post-arrest care: keep oxygen and blood pressure in target range, treat fever, and watch for seizures, which are abnormal electrical storms in the brain that cause shaking or staring."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Protect the airway first: many post-arrest patients cannot protect their own airway, so the team may place a breathing tube, and you watch chest rise, listen to breath sounds, and track the oxygen level, aiming for the target the provider sets. Low blood pressure after arrest starves the brain and heart of flow, so the team often gives IV fluids and medicines that raise pressure, and you recheck pressure often, report a falling trend early, and note urine output as a sign of flow. The team hunts for what caused the arrest: an EKG (electrocardiogram) checks for a heart attack, blood tests check salts, sugar, and oxygen, and you send labs fast and report critical results the moment they return. Fever after arrest harms the recovering brain, so measure temperature often and follow the ordered cooling plan exactly, including targeted temperature management, which means keeping body temperature in a set range on purpose."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Report eye responses, movement, and any shaking right away, and keep the room calm and quiet. Many patients need a CT scan (computed tomography scan), a detailed picture made with X-rays, to look for causes like bleeding or a clot, and then the patient moves to the ICU (intensive care unit) with a full handoff on rhythm, medicines, and events. Family presence means offering loved ones the choice to be near during resuscitation and after, with a staff member beside them to explain and support. After the code, speak with the family in plain, honest words: say what happened, what the team did, and what is known and not yet known, and avoid promises about outcomes."
          }
        ],
        bedsideCues: [
          "A blood pressure that is falling after ROSC",
          "New shaking, staring, or a change in eye responses",
          "A temperature that is rising in the hours after the arrest",
          "A family member standing alone in the hallway with no one explaining what happened"
        ],
        assessmentSequence: [
          "1. Confirm the pulse, check blood pressure, and watch the rhythm without leaving the bedside.",
          "2. Protect the airway: watch chest rise, listen to breath sounds, and track the oxygen level.",
          "3. Recheck blood pressure often, report a falling trend early, and note urine output.",
          "4. Send labs fast, get the EKG, report critical results at once, and measure temperature on schedule.",
          "5. Prepare for CT and the ICU handoff, and support the family with plain, honest words."
        ],
        safetyPoints: [
          "Keep the defibrillator pads on and the team close after ROSC, because patients can arrest again quickly.",
          "Never promise the family an outcome: say what is known and not yet known, and offer a quiet space, a chair, water, and time for questions.",
          "Finish the record while memory is fresh, restock the cart, and debrief with the team before the next patient arrives."
        ],
        workedExample: {
          context: "A 63-year-old woman has ROSC after a code, and her family is waiting in the hallway while her blood pressure starts to fall.",
          action: "The nurse stays at the bedside, rechecks the pressure often, reports the falling trend early, and a staff member sits with the family to explain what happened in plain words.",
          outcome: "The team starts pressure-raising treatment before the brain is starved of flow, and the family understands what is happening without false promises."
        },
        activity: {
          prompt: "Imagine you are the nurse who sits with a family right after a code. What would you say in plain words, and what would you avoid saying?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What is the nurse's first priority in the minutes after ROSC?",
          options: [
            "Confirm the pulse, check blood pressure, and watch the rhythm without leaving the bedside",
            "Remove the defibrillator pads and send the patient to the ward",
            "Start the family meeting before checking the patient"
          ],
          answerIndex: 0,
          rationale: "In the first minutes after ROSC the nurse confirms the pulse, checks blood pressure, and watches the rhythm without leaving the bedside, because patients can arrest again quickly."
        }
      },
      {
        id: "ed-15",
        title: "Hypertensive Emergencies — When High Blood Pressure Damages Organs",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Learn the key split: hypertensive emergency means very high blood pressure with active organ damage happening now, while hypertensive urgency means very high blood pressure without that active damage. The numbers can look similar, so the damage, not the number alone, decides how fast and how the team treats. The brain shows damage early: watch for confusion, weakness on one side, slurred speech, vision changes, seizures, or the worst headache of their life. High pressure strains the heart and lungs, and chest pain can mean the heart muscle is starving or the aorta, the largest artery in the body, is tearing."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Measure it right before you react: use the correct cuff size, support the arm at heart level, and repeat the reading in both arms after the patient rests, because pain, fear, and a full bladder raise readings. Ask directly about vision and urination, because patients often do not connect these symptoms with blood pressure, and watch urine output drop or report blood in the urine or no urine at all. Emergency treatment usually uses an IV drip, intravenous medicine flowing steadily through a line into a vein on a pump, which lets the team adjust the dose minute by minute. Your job is frequent pressure checks, watching the drip, and reporting symptoms as the pressure falls. Labs and tracings find the damage: blood tests check kidney function and heart strain, urine tests check for blood and protein, and an EKG (electrocardiogram) checks the heart."
          },
          {
            heading: "Red Flags and Escalation",
            content: "The golden rule is to lower pressure slowly and in a controlled way, not all at once, because dropping too fast can starve the brain, heart, and kidneys of flow. The team lowers pressure by a careful portion in the first hour, using a plan set for the damaged organ involved. Some cases follow special rules: in pregnancy, very high pressure with seizures may be eclampsia, a dangerous pregnancy complication with high pressure and seizures that needs magnesium and urgent delivery planning, and with a tearing aorta, pressure and heart rate control come before anything else. Always tell the leader your suspicion early. Do not send a patient with organ damage signs to the waiting room, do not give extra home pressure pills to crash the number down, and do not leave them unmonitored."
          }
        ],
        bedsideCues: [
          "New confusion, weakness on one side, or slurred speech with very high blood pressure",
          "Shortness of breath with pink frothy coughing",
          "Urine output dropping, blood in the urine, or no urine at all",
          "Sudden vision loss or blurry vision the patient did not mention on their own"
        ],
        assessmentSequence: [
          "1. Measure blood pressure correctly: right cuff size, arm supported at heart level, repeat in both arms after rest.",
          "2. Ask about brain, heart, kidney, and eye symptoms: confusion, chest pain, breathing, vision, and urination.",
          "3. Keep the patient on the monitor, in bed, with frequent checks until the plan is set.",
          "4. Support the IV drip treatment with frequent pressure checks and report symptoms as the pressure falls.",
          "5. Send labs and the EKG to find the damage, and tell the leader early if you suspect eclampsia or a tearing aorta."
        ],
        safetyPoints: [
          "Lower pressure slowly and in a controlled way: dropping too fast can starve the brain, heart, and kidneys of flow.",
          "Do not send a patient with organ damage signs to the waiting room.",
          "Do not give extra home pressure pills to crash the number down."
        ],
        workedExample: {
          context: "A 57-year-old man arrives with a pounding headache, blurry vision, and the highest blood pressure the nurse has ever seen.",
          action: "The nurse measures the pressure correctly in both arms, asks about vision and urination, keeps him on the monitor in bed, and reports the vision changes and headache at once.",
          outcome: "The team recognizes a hypertensive emergency with organ damage, starts a controlled IV drip, and lowers the pressure slowly instead of crashing it."
        },
        activity: {
          prompt: "A patient has very high blood pressure but no organ damage symptoms. Another has the same reading with new confusion and blurry vision. How does your urgency and your next step change between the two?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What is the difference between a hypertensive emergency and hypertensive urgency?",
          options: [
            "Emergency means very high blood pressure with active organ damage happening now; urgency means very high blood pressure without that active damage",
            "Emergency means a higher blood pressure number than urgency",
            "Urgency means the patient needs surgery, while emergency means the patient needs medicine"
          ],
          answerIndex: 0,
          rationale: "The numbers can look similar, so the damage, not the number alone, decides: emergency means active organ damage is happening now, while urgency means there is no active damage."
        }
      },
      {
        id: "ed-16",
        title: "Heart Failure in the ED — The Patient Who Cannot Breathe Lying Flat",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Heart failure means the heart cannot pump blood forward well enough to meet the body's needs. Blood backs up into the lungs, fluid leaks into the air spaces, and oxygen cannot cross into the blood, so the patient feels like they are drowning in their own fluid. The classic picture is a patient sitting bolt upright, gasping, and begging you not to lay them down, and that is heart failure until proven otherwise. Ask about pillows: needing three pillows to sleep, or waking up gasping, points strongly to heart failure."
          },
          {
            heading: "What the ED Nurse Does",
            content: "First move: sit the patient fully upright with the legs hanging down if you can, because sitting up pulls fluid down away from the lungs and makes breathing easier within minutes. Never force this patient flat for a blood draw or a picture, because position is treatment here. Put on oxygen and aim for an oxygen saturation, the share of blood carrying oxygen, of 90 to 94 percent for most patients. Get two large-bore IV lines and place the patient on the cardiac monitor right away. Listen to the lungs: wet crackling sounds tell you fluid is in the air spaces, and look for swollen legs, a swollen neck vein, and pink frothy spit."
          },
          {
            heading: "Red Flags and Escalation",
            content: "The classic drug is a nitrate, most often nitroglycerin, which opens blood vessels so the heart pumps against less pressure and less fluid backs into the lungs. It can be given under the tongue, as a paste, or as a drip, and you watch the blood pressure closely with every dose. A water pill, most often furosemide, tells the kidneys to release salt and water as urine, pulling fluid out of the lungs over the next hours, so place a urine catheter if ordered so you can measure output exactly. If oxygen and drugs are not enough, the provider may order CPAP (continuous positive airway pressure), a tight mask that pushes air in to hold the air spaces open and push fluid back out, and you stay at the bedside because the mask feels frightening at first. A patient who gets sleepier, bluer, or too tired to breathe needs the provider now and may need a breathing tube."
          }
        ],
        bedsideCues: [
          "A patient sitting bolt upright, gasping, and refusing to lie flat",
          "Wet crackling sounds in the lungs with swollen legs and a swollen neck vein",
          "Pink frothy spit",
          "A patient who needs three pillows to sleep or wakes up gasping"
        ],
        assessmentSequence: [
          "1. Sit the patient fully upright with the legs hanging down, and never force them flat.",
          "2. Put on oxygen aiming for 90 to 94 percent saturation, get two large-bore IV lines, and place the patient on the monitor.",
          "3. Listen to the lungs, check for leg swelling and a swollen neck vein, and ask about pillows and waking up gasping.",
          "4. Send labs early, including BNP (B-type natriuretic peptide), heart injury markers, kidney tests, and a chest X-ray.",
          "5. Support nitroglycerin and furosemide treatment, measure urine output exactly, and reassess breathing, oxygen, and blood pressure often."
        ],
        safetyPoints: [
          "Always ask what set this off: common triggers are missed water pills, a salty meal, a new fast or slow heart rhythm, a heart attack, or blood pressure that ran high for days.",
          "Strict intake and output charting is nursing gold here: a urine catheter, if ordered, lets you measure output exactly.",
          "A patient who gets sleepier, bluer, or too tired to breathe needs the provider now and may need a breathing tube, so speak up early and clearly."
        ],
        workedExample: {
          context: "A 68-year-old man arrives sitting bolt upright, gasping, and begging the nurse not to lay him down, with wet crackles in his lungs and swollen legs.",
          action: "The nurse sits him fully upright with his legs hanging down, puts on oxygen, starts two IV lines, puts him on the monitor, and sends BNP and a chest X-ray.",
          outcome: "His breathing eases within minutes from position alone, and the team confirms heart failure, starts nitroglycerin and furosemide, and tracks his urine output to measure the fluid coming off."
        },
        activity: {
          prompt: "A patient with heart failure tells you they stopped taking their water pills last week and had a salty meal yesterday. How does finding the trigger change your teaching before discharge?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What is the first move for a heart failure patient who cannot breathe lying flat?",
          options: [
            "Lay the patient flat for a chest X-ray right away",
            "Sit the patient fully upright with the legs hanging down",
            "Give the water pill first and wait for the urine output"
          ],
          answerIndex: 1,
          rationale: "Sitting up pulls fluid down away from the lungs and makes breathing easier within minutes, and position is treatment here, so the patient is never forced flat."
        }
      }
    ]
  }
};
