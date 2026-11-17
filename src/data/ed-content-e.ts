import type { Lesson, ModuleContent } from "./types";

export const ED_CONTENT_E: Record<string, ModuleContent> = {
  "ed-behavioral": {
    moduleId: "ed-behavioral",
    lessons: [
      {
        id: "ed-54",
        title: "The Agitated Patient — Verbal De-escalation and Safe Medication Options",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "In the emergency department (ED), which is the hospital unit that treats urgent illness and injury, anger usually builds in stages, not all at once. Watch for pacing, clenched jaws, loud demands, and personal insults. Long waits, pain, fear, and bad news feed the fire. De-escalation means calming an upset person with words and body language, and catching the early signs gives you time to act before things explode."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Start with yourself: slow your breathing, lower your voice, and relax your hands and shoulders. Stand at an angle, not square in front of the person, and keep a safe distance of about two arm lengths. Use one calm voice for the whole team, introduce yourself, use the person name, and name the feeling you see, such as saying, I can see you are frustrated, and I want to help. Listen more than you talk, repeat their concern back, set clear respectful limits, and offer real choices like a quieter space, a glass of water, or an update time. Choices give back a sense of control."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Words have limits. Threats with a weapon, spitting, hitting, or blocking care mean the situation has changed. Follow your hospital policy, which may include a security response, physical holds by trained staff, or medication ordered by the provider to calm severe agitation. Never let an agitated person stand between you and the door, and never turn your back to walk away into a corner. Keep furniture between you when you can. If the room feels wrong, trust that feeling, step out, and get help before things explode."
          }
        ],
        bedsideCues: [
          "Pacing back and forth near the nurses station",
          "Clenched fists or a clenched jaw",
          "Voice rising in volume with loud demands",
          "Personal insults aimed at staff"
        ],
        assessmentSequence: [
          "1. Check yourself first: slow your breathing, lower your voice, and relax your hands and shoulders.",
          "2. Position safely: stand at an angle about two arm lengths away, with a clear path to the exit.",
          "3. Introduce yourself, use the person name, and name the feeling you see.",
          "4. Listen more than you talk and repeat their concern back to show you heard it.",
          "5. Set a clear limit, offer real choices, and alert security and nearby staff early and quietly."
        ],
        safetyPoints: [
          "Never let an agitated person stand between you and the door, and never turn your back into a corner.",
          "One person talks while others stand by at a safe distance, ready to help or call for more support.",
          "Report every threat or assault, even if nobody was hurt, and document exact words and actions, not opinions."
        ],
        workedExample: {
          context: "A shouting visitor storms toward the nurses station, fists clenched, voice rising, after a long wait.",
          action: "The nurse steps to an angle about two arm lengths away, keeps the exit clear, and says in a low voice, I can see you are frustrated, and I want to help. She listens, repeats back the concern about the wait, gives a realistic update time, and offers water and a quieter chair while quietly alerting security to stand by.",
          outcome: "The visitor lowers his voice, accepts the chair and water, and waits for the update time without further escalation."
        },
        activity: {
          prompt: "Think about a time you faced an angry patient, visitor, or coworker. What did you do that helped, and what would you do differently now using the steps in this lesson?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What is the safest way to position yourself when talking with an agitated person?",
          options: [
            "Stand square in front of them, close up, so they know you are serious.",
            "Stand at an angle about two arm lengths away, with a clear path to the exit.",
            "Turn your back and walk away until they calm down on their own."
          ],
          answerIndex: 1,
          rationale: "Standing at an angle two arm lengths away with an exit behind you keeps you safe while a calm, single voice de-escalates the situation."
        }
      },
      {
        id: "ed-55",
        title: "Suicide Risk — Screening, Safety, Holds and One-to-One Observation",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "A psychiatric emergency is a real emergency, as real as chest pain or a broken bone. Suicide risk screening means asking a short set of questions to find out whether a patient is thinking about harming themselves. Many departments screen every patient, not only those who arrive for mental health reasons. Pain, illness, and bad news can all raise risk in a medical patient too."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Ask directly, in plain words: have you had thoughts of harming yourself, and have you thought about how you would do it. Asking directly does not plant the idea. Research and practice both show that direct questions open the door to honest answers, and honest answers are what keep patients safe. Listen for risk factors, which are things that raise the chance of harm: a past attempt, a specific plan, access to a weapon or stockpiled pills, heavy alcohol or drug use, recent loss, and feeling hopeless or trapped. No single factor decides risk. The whole picture matters. Also ask what keeps the patient going. Protective factors, which are things that lower the chance of harm, include close family or friends, faith or cultural beliefs, children or pets at home, and a reason to stay alive that the patient names themselves. These strengths belong in the chart and in the care plan. Screening tools sort answers into levels such as low, moderate, or high risk. A higher level means closer watching, a fuller evaluation by a mental health professional, and a safer room. Never let a low score override your own concern. If a patient worries you, escalate, document, and keep watching."
          },
          {
            heading: "Making the Room Safe and Watching With Purpose",
            content: "Make the environment safe right away. Remove belts, cords, sharp items, and personal belongings following unit policy, and place them in secure storage. Use a room cleared of loose equipment when one is available. Check the room again after visitors leave, because safety can change during a long stay. One-to-one observation, which means a trained staff member stays with the patient at all times, within arm reach for the highest risk, is a core safety order. The observer watches hands, mood, and behavior, and stays during toileting and sleep checks per policy. Observation is active care, not just sitting nearby."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Medical work still matters. Check vital signs, blood sugar, and labs as ordered, and ask about overdoses, head injury, and infections that can change thinking. Medical clearance means the medical causes have been reasonably checked before the psychiatric evaluation finishes. A confused patient may have a medical problem driving the behavior. Some patients are placed on a legal hold, which means they must stay for evaluation even if they ask to leave, under the law of that state. Explain the hold in plain, respectful words. A hold limits freedom for safety, but the patient keeps the right to dignity, information, and humane treatment. Hand off risk clearly at every change of staff. State the screening result, the plan or means the patient described, what was removed from the room, and the observation level. Never assume the next nurse already knows. Repeat the safety details out loud and confirm they were heard and understood."
          }
        ],
        bedsideCues: [
          "Patient says they have had thoughts of harming themselves",
          "A specific plan, or access to a weapon or stockpiled pills",
          "A past attempt, recent loss, or feeling hopeless or trapped",
          "Heavy alcohol or drug use on top of a low mood"
        ],
        assessmentSequence: [
          "1. Screen every patient, not only those who arrive for mental health reasons.",
          "2. Ask directly, in plain words, about thoughts of harming themselves and how they would do it.",
          "3. Ask about risk factors and about protective factors, the things that keep the patient going.",
          "4. Make the room safe: remove belts, cords, sharp items, and belongings per policy, and recheck the room after visitors leave.",
          "5. Start one-to-one observation at the ordered level, check vital signs, blood sugar, and labs as ordered, and hand off the screening result, the plan or means, what was removed, and the observation level."
        ],
        safetyPoints: [
          "Asking directly about suicide does not plant the idea; it opens the door to honest answers.",
          "Never let a low screening score override your own concern. If a patient worries you, escalate, document, and keep watching.",
          "Check the room again after visitors leave, because safety can change during a long stay."
        ],
        workedExample: {
          context: "A 29-year-old woman arrives with abdominal pain and bad news about a test result, and the screening questions show she has been thinking about harming herself and has pills saved at home.",
          action: "The nurse asks directly about her thoughts and her plan, and asks what keeps her going. She learns the patient has a close sister and a dog at home. The nurse moves her to a room cleared of loose equipment, removes her belt and cords per policy into secure storage, starts one-to-one observation, and hands off the screening result, the plan, what was removed, and the observation level out loud.",
          outcome: "The patient stays safe under continuous observation, the mental health professional evaluates her the same shift, and her protective factors, her sister and her dog, are written in the chart and in the care plan."
        },
        activity: {
          prompt: "Why do you think many nurses hesitate to ask a patient directly about suicide? What plain words would you use to ask the question for the first time?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What does the evidence say about asking a patient directly whether they have thought about harming themselves?",
          options: [
            "Asking directly plants the idea and should be avoided.",
            "Asking directly opens the door to honest answers and keeps patients safe.",
            "Asking directly only helps if the patient arrived for a mental health reason."
          ],
          answerIndex: 1,
          rationale: "Direct questions do not plant the idea. Research and practice both show they open the door to honest answers, and honest answers are what keep patients safe."
        }
      },
      {
        id: "ed-56",
        title: "Restraints and Workplace Violence — Last Resorts, Law and Protecting Yourself",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Least restrictive care means you use the safest option that limits freedom the least and still keeps everyone safe. Start with calm words, a quiet space, and offered choices. Only move to stronger steps when softer steps fail and danger is real and present. A behavioral health hold means a person is kept for evaluation because they may harm themselves, may harm others, or cannot care for themselves safely. Hold laws, names, and time limits vary by state, so learn your state law and your hospital policy well."
          },
          {
            heading: "What the ED Nurse Does",
            content: "A restraint means any method that limits movement, including a device, a medication used only to control behavior, or staff holding a patient still. Restraints are a last resort for imminent danger, never for punishment, convenience, staffing problems, or a patient simply being loud. Restraints need a provider order that is time limited, states the reason, and states the type to use. Standing orders and as needed orders are not allowed for restraints. If danger ends early, release the restraint early and document why you released it. Check restrained patients often and document every check per policy. Watch breathing, skin color, circulation, and pain. Offer fluids, food, toileting, and range of motion when safe. Never leave a restrained patient alone behind a closed door without the required observation in place."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Watch for injury, breathing problems, choking, vomiting, and exhaustion during any hold or restraint. Chemical sedation, which means medication given to calm severe agitation, needs close monitoring of breathing and blood pressure. Call for help early if the patient struggles longer or harder. De-escalation means calming a person with words, space, and respect before force is ever used. Speak slowly, keep your hands visible, avoid crowding, and offer water, food, a blanket, or a quieter room. One calm voice leading the talk works better than many voices. One-to-one observation means a trained staff member stays within sight and reach at all times. That watcher protects the patient, removes risky items, and reports changes fast. Observation is care, not punishment, and it often prevents restraints from ever being needed at all."
          },
          {
            heading: "Documenting and Releasing",
            content: "Document what happened before restraints, what softer steps you tried, why danger was present, the order, the start and stop times, every check, and how the patient responded. Chart facts you saw and heard, not opinions. Good records protect the patient and the whole team. Release restraints as soon as the patient is calm and safe, one step at a time while you watch the response. Afterward, talk with the patient and the team about what helped and what to change next time. Debriefing means reviewing the event together to learn."
          }
        ],
        bedsideCues: [
          "A patient screaming, pacing, and trying to leave while unsafe",
          "Softer steps failing while danger is real and present",
          "Breathing problems, choking, vomiting, or exhaustion during a hold or restraint",
          "A patient struggling longer or harder than before"
        ],
        assessmentSequence: [
          "1. Start with the least restrictive step: calm words, a quiet space, and offered choices.",
          "2. Use de-escalation: speak slowly, keep your hands visible, avoid crowding, and offer water, food, a blanket, or a quieter room.",
          "3. If danger is real and present and softer steps have failed, get a time-limited provider order that states the reason and the type of restraint.",
          "4. Check breathing, skin color, circulation, and pain often, document every check, and offer fluids, food, toileting, and range of motion when safe.",
          "5. Release as soon as the patient is calm and safe, one step at a time, document the stop time and the response, and debrief with the patient and the team."
        ],
        safetyPoints: [
          "Restraints are a last resort for imminent danger, never for punishment, convenience, staffing problems, or a patient simply being loud.",
          "Standing orders and as needed orders are not allowed for restraints; the order must be time limited and state the reason and the type.",
          "Never leave a restrained patient alone behind a closed door without the required observation in place."
        ],
        workedExample: {
          context: "A 41-year-old man in the emergency department (ED) is screaming, pacing, and trying to leave while unsafe, and he starts throwing objects.",
          action: "One nurse leads with a calm voice, speaks slowly, keeps her hands visible, and offers a quieter room and water. When he keeps throwing objects and danger is real and present, the team gets a time-limited provider order stating the reason and the type. A trained team applies the restraint, checks his breathing, skin color, circulation, and pain, and documents what happened before, what softer steps were tried, the order, and every check.",
          outcome: "The patient is kept safe, no staff member is hurt, and the restraint is released early, one step at a time, as soon as he is calm and safe, with the release and his response documented."
        },
        activity: {
          prompt: "A patient is loud and rude but is not a danger to anyone. Which steps from this lesson apply, and why would restraints be the wrong answer here?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What kind of provider order is required for restraints?",
          options: [
            "A standing order that can be used whenever the patient is loud.",
            "A time-limited order that states the reason and the type to use.",
            "An as needed order written in advance for the whole shift."
          ],
          answerIndex: 1,
          rationale: "Restraints need a provider order that is time limited, states the reason, and states the type to use. Standing orders and as needed orders are not allowed."
        }
      }
    ]
  },
  "ed-core-skills": {
    moduleId: "ed-core-skills",
    lessons: [
      {
        id: "ed-57",
        title: "Vascular Access and Labs — IV Starts, IO Access, Blood Cultures Done Right",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "One wrong medicine, one missed check, or one rushed blood check can harm a patient fast. This lesson covers IV (intravenous) therapy, which means fluids and medicines given into a vein, plus safe blood giving and high alert medicine habits. IV (intravenous) means into a vein."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Start every IV (intravenous) line with clean hands and clean technique. Check the order, the patient identity, allergies, and the vein choice. Explain the steps, gather supplies first, and keep the site clean from start to finish without touching key parts. Before you connect anything, scrub the hub, which means cleaning the access port with an antiseptic wipe for the full time your policy sets, then let it dry. This simple habit lowers the risk of germs entering the line and reaching the blood. Assess the site every shift and before every use. Look for redness, swelling, leaking, pain, or a cool feeling that means fluid is going into tissue instead of the vein. Confirm the line flushes easily and blood returns when your policy expects it. Use the infusion pump, which means a machine that controls how fast fluid or medicine flows, for most medicines and for all high risk infusions. Program the dose in the pump drug library, confirm the rate with the order, and recheck after any change."
          },
          {
            heading: "High-Alert Medicines and the Five Rights",
            content: "High alert medications are medicines that can cause serious harm if an error happens, such as insulin, heparin, and strong pain or sedation medicines. Use two nurse checks where policy requires them, read labels out loud, and never let anyone rush your check. Before giving any medicine, confirm the right patient, medicine, dose, route, and time, plus the reason and the response you expect. Route means how the medicine enters the body. Scan the wristband and the medicine label, and stop if anything does not match."
          },
          {
            heading: "Blood Administration, IO Access, and Blood Cultures",
            content: "Blood administration means giving donated blood or blood parts through a vein. Before blood leaves the blood bank, confirm the order, consent, and a working large bore line. Labs, which means blood tests, must show the blood type was checked the right way. Two nurses verify blood together at the bedside. Read out loud the patient name, wristband number, blood unit number, blood type, and expiry time, and match every item to the paperwork. If even one detail does not match, stop and call the blood bank. Stay with the patient for the first minutes of the transfusion, which means the giving of blood, and start slowly as policy directs. Check vital signs before, during, and after. Vital signs means temperature, pulse, breathing rate, and blood pressure measured and recorded. A transfusion reaction means the body reacts badly to the blood. Warning signs include fever, chills, back pain, itching, low blood pressure, or dark urine. Stop the blood, keep the line open with new saline tubing, notify the provider and blood bank, and monitor closely. IO (intraosseous) access goes into the bone marrow and is used when an IV (intravenous) line cannot be placed quickly in a critically ill patient, rather than poking again and again. Blood cultures are bottles of blood sent to the lab to grow and identify the germ causing an infection. Draw two sets of blood cultures from two different sites, before antibiotics when possible, and never let cultures delay antibiotics for long."
          }
        ],
        bedsideCues: [
          "Redness, swelling, leaking, pain, or a cool feeling at an IV site",
          "A line that will not flush easily or has no blood return",
          "Two failed IV attempts in a critically ill patient",
          "Fever, chills, back pain, itching, low blood pressure, or dark urine during a transfusion"
        ],
        assessmentSequence: [
          "1. Check the order, the patient identity, allergies, and the vein choice, and gather supplies first.",
          "2. Place the IV with clean hands and clean technique, scrub the hub for the full time your policy sets, and let it dry.",
          "3. Assess the site every shift and before every use, and confirm the line flushes easily and blood returns when your policy expects it.",
          "4. If IV access cannot be placed quickly in a critically ill patient, move to IO access rather than repeated attempts.",
          "5. Draw two sets of blood cultures from two different sites before antibiotics when possible, and verify blood with a second nurse at the bedside before any transfusion."
        ],
        safetyPoints: [
          "Stop if anything does not match: scan the wristband and the medicine label, and never let anyone rush a high-alert medicine check.",
          "If even one blood detail does not match the paperwork, stop and call the blood bank.",
          "At the first sign of a transfusion reaction, stop the blood, keep the line open with new saline tubing, and notify the provider and blood bank."
        ],
        workedExample: {
          context: "A 67-year-old woman arrives with a fever, shaking chills, and low blood pressure, and the provider orders blood cultures, antibiotics, and a unit of blood.",
          action: "The nurse places a large-bore IV with clean technique, scrubs the hub, and checks that the line flushes and blood returns. She draws two sets of blood cultures from two different sites before the antibiotics are given. Before the blood, she and a second nurse read out loud the patient name, wristband number, blood unit number, blood type, and expiry time and match every item to the paperwork. She stays with the patient for the first minutes of the transfusion and checks vital signs before, during, and after.",
          outcome: "Both culture sets are drawn correctly before antibiotics, the blood matches on every check, and the transfusion runs without a reaction."
        },
        activity: {
          prompt: "An IV site feels cool and swollen, and the line will not flush. What does that pattern mean, and what do you do first?",
          type: "interpretation"
        },
        knowledgeCheck: {
          question: "During a blood transfusion, the patient develops a fever, chills, and back pain. What do you do?",
          options: [
            "Speed up the blood to finish it faster.",
            "Stop the blood, keep the line open with new saline tubing, and notify the provider and blood bank.",
            "Give the next medicine through the blood tubing and keep the transfusion running."
          ],
          answerIndex: 1,
          rationale: "Fever, chills, and back pain are warning signs of a transfusion reaction. Stop the blood, keep the line open with new saline tubing, and notify the provider and blood bank."
        }
      },
      {
        id: "ed-58",
        title: "Medication Safety in the ED — High-Alert Meds, Push Meds and Procedural Sedation Monitoring",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "The patient needs a painful shoulder put back in place, and sedation will make it bearable. Procedural sedation means using medicines to make a patient sleepy and comfortable during a procedure while the team guards breathing. Your monitoring role keeps that patient safe. Sedation depth runs from mild calm to deep sleep where the patient may not protect the airway. The deeper the level, the closer the watching must be. One nurse is assigned only to monitoring, with no other tasks, during moderate and deep sedation."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Before any medicine, confirm consent, allergies, last food and drink, health history, and airway features. Fasting means the time since the patient last ate or drank. A hard airway history changes the whole plan, so share concerns with the provider before anyone starts. Airway readiness comes before the first dose. Test suction, set out oxygen, a bag valve mask, which means a hand squeezed bag that pushes air into the lungs, airway tools, and reversal medicines. Place a working IV (intravenous), which means into a vein. Common sedation medicines include propofol, ketamine, and pairs like fentanyl with midazolam. Each can lower breathing and blood pressure, which means the force of blood against artery walls. Know onset and peak times, give medicines slowly, and titrate, which means adjust in small steps."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Watch breathing first, not the clock. Count the breathing rate, watch chest rise, listen for snoring or silence, and note color. Slow shallow breathing is the earliest warning that sedation is too deep. Call it out early, while a small fix still works. Capnography means measuring carbon dioxide in the breath, the gas we breathe out, shown as a wave on the monitor. It shows breathing trouble before oxygen levels fall. Oxygen saturation means the percent of blood carrying oxygen, measured by the finger probe. Watch both. If breathing slows, act in order: stimulate the patient, reposition the head and jaw, suction if needed, give oxygen, and assist breaths with the bag valve mask. Pause more medicine, call for help early, and use reversal medicines only as ordered and trained. Stay at the bedside the whole time. Record vital signs, sedation depth, oxygen, and capnography readings at the set times your policy requires. Vital signs means temperature, pulse, breathing rate, and blood pressure."
          },
          {
            heading: "Recovery and Discharge",
            content: "Recovery scoring means rating how awake, moving, breathing, and stable the patient is before leaving the monitored area. A common tool scores activity, breathing, circulation, consciousness, and oxygen. The patient must meet the score your policy sets, not just look mostly awake. Before discharge the patient should be awake near their normal level, breathing well on room air, and steady when walking with help. A responsible adult must drive and stay with them. Give written warnings about sleepiness, falls, and when to call for help."
          }
        ],
        bedsideCues: [
          "Slow, shallow breathing during sedation",
          "Snoring that turns into silence",
          "Falling oxygen saturation on the finger probe",
          "Dropping blood pressure after a sedation medicine"
        ],
        assessmentSequence: [
          "1. Confirm consent, allergies, last food and drink, health history, and airway features before any medicine.",
          "2. Test suction, set out oxygen, the bag valve mask, airway tools, and reversal medicines, and place a working IV.",
          "3. Assign one nurse to monitoring only, with no other tasks, during moderate and deep sedation.",
          "4. Give medicines slowly and watch breathing, chest rise, capnography, and oxygen saturation without pause.",
          "5. Score recovery using activity, breathing, circulation, consciousness, and oxygen, and discharge only when the patient meets the policy score with a responsible adult to drive."
        ],
        safetyPoints: [
          "Stay at the bedside the whole time during sedation and hand off only to a nurse who can keep watching closely.",
          "Slow, shallow breathing is the earliest warning of sedation that is too deep; act on it at once.",
          "Record vital signs, sedation depth, oxygen, and capnography readings at the times your policy requires."
        ],
        workedExample: {
          context: "A 54-year-old man needs a painful shoulder put back in place, and the provider orders procedural sedation.",
          action: "The nurse confirms consent, allergies, and fasting, tests suction, sets out oxygen and the bag valve mask, and places a working IV. During the procedure she watches only the patient, notes slow shallow breathing and a flattening capnography wave, and calls it out. The team pauses the medicine, repositions his jaw, and gives oxygen.",
          outcome: "His breathing recovers quickly without needing assisted breaths, the shoulder is reduced safely, and he meets the recovery score before discharge with his wife driving him home."
        },
        activity: {
          prompt: "Picture yourself as the monitoring nurse during a sedation. What would you watch first, and what small change would make you speak up before the numbers fall?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "Why is capnography monitored during procedural sedation?",
          options: [
            "It replaces the need to watch the patient breathing at all.",
            "It only matters after the patient is fully awake and ready for discharge.",
            "It shows breathing trouble before oxygen levels fall."
          ],
          answerIndex: 2,
          rationale: "Capnography measures carbon dioxide in the breath, so a fading wave warns of trouble earlier than the oxygen saturation number."
        }
      },
      {
        id: "ed-59",
        title: "Blood Transfusion in the ED — Type and Cross, Reactions and Documentation",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "A blood transfusion gives a patient donated red blood cells when bleeding or severe anemia has left them too low. A type and screen checks the patient blood type and looks for antibodies, while a type and crossmatch reserves units that are tested as compatible with that patient. Giving the wrong blood can kill, so checking the right patient, the right unit, and the right paperwork is the whole job, not a formality."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Confirm the order and the patient consent, check the blood type and crossmatch result, and take baseline vital signs, meaning temperature, pulse, breathing rate, and blood pressure. At the bedside, two staff members check the patient identification band against the blood unit label, including the patient name, medical record number, unit number, blood type, and expiration date. Prime the tubing with normal saline only, start the transfusion slowly, stay close for the first 15 minutes, and document the unit number, start and stop times, vital signs, and the patient response."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Most reactions start in the first 15 minutes. Fever, chills, back or flank pain, shortness of breath, hives, or a falling blood pressure during a transfusion are all stop signs. Stop the transfusion at once, keep the IV (intravenous) line open with normal saline, and notify the provider and the blood bank right away. Save the blood bag and tubing for testing, recheck vital signs, and document exactly what happened and when. Never add medicines to the blood tubing and never restart a unit that caused a reaction."
          }
        ],
        bedsideCues: [
          "Fever or shaking chills soon after the transfusion starts",
          "New back or flank pain during the transfusion",
          "Shortness of breath or a sudden drop in blood pressure",
          "Hives or itching spreading across the skin"
        ],
        assessmentSequence: [
          "1. Verify the order, consent, blood type, and crossmatch result, and take baseline vital signs.",
          "2. Perform a two-person bedside check of the patient band against the blood unit label.",
          "3. Prime with normal saline only and start the transfusion slowly.",
          "4. Stay close and recheck vital signs often during the first 15 minutes.",
          "5. Monitor through the transfusion and document the unit number, times, vital signs, and response."
        ],
        safetyPoints: [
          "Never give blood without a two-person bedside check of the patient band against the unit label.",
          "At the first sign of a reaction, stop the transfusion, keep the IV open with normal saline, and call the provider and blood bank.",
          "Never add medicines to blood tubing and never restart a unit that caused a reaction."
        ],
        workedExample: {
          context: "A 72-year-old woman with heavy bleeding receives her first unit of red blood cells, and ten minutes in she develops a fever, chills, and back pain.",
          action: "The nurse stops the transfusion immediately, keeps the IV open with normal saline, rechecks vital signs, and notifies the provider and the blood bank. She saves the blood bag and tubing for testing and documents the exact time, symptoms, and vital signs.",
          outcome: "The reaction is caught early, the patient is stabilized, and the blood bank investigates the unit while the team switches to a different plan for her bleeding."
        },
        activity: {
          prompt: "A patient develops a fever and back pain ten minutes into a transfusion. What does that pattern suggest, and what is the very first thing you do?",
          type: "interpretation"
        },
        knowledgeCheck: {
          question: "A patient develops a fever, chills, and back pain during a blood transfusion. What do you do first?",
          options: [
            "Stop the transfusion, keep the IV open with normal saline, and notify the provider and blood bank.",
            "Slow the transfusion down and wait to see if the symptoms pass on their own.",
            "Give an antihistamine through the blood tubing and keep the transfusion running."
          ],
          answerIndex: 0,
          rationale: "Stopping the transfusion at the first sign of a reaction limits harm, and the blood bank needs the bag and tubing to find the cause."
        }
      },
      {
        id: "ed-60",
        title: "Disaster, Death and Lasting — Mass Casualty Triage, Death Notification and Surviving Your First Year",
        durationMinutes: 13,
        sections: [
          {
            heading: "Core Concept",
            content: "A mass casualty event means an incident with more patients than normal resources can handle, so a simple triage system decides who gets care first. START, which means Simple Triage and Rapid Treatment, sorts each patient in about 30 seconds using breathing, blood flow, and the ability to follow commands. In the same way, caring for a dying patient and their family, and protecting yourself from burnout, which means deep exhaustion and numbness from long stress, are skills that carry your whole career."
          },
          {
            heading: "What the ED Nurse Does in a Surge",
            content: "In a surge, first tell everyone who can walk to move to a marked safe area; those who walk get a green tag for minor injuries. For each patient who cannot walk, check breathing first, then perfusion, which means blood flow, by feeling a radial pulse at the wrist or pressing a fingernail bed, then mental status with a simple command such as squeeze my hand. If the airway is blocked, open it with a head tilt. If the patient still is not breathing after that, the tag is black. If breathing is very fast, the tag is red. No pulse, or color that returns slowly, means poor flow. Control major bleeding, then tag that patient red. A patient who breathes well, has good blood flow, and follows commands gets a yellow tag. A patient who cannot follow commands gets a red tag. Red means immediate, yellow means delayed, green means minor, and black means expectant or deceased. Your hospital activates an incident command system, a clear chain of leaders who assign every job, so do the job you are given, wear your role vest, and stay in your area. Use plain words, repeat assignments back, and report tag counts early and often. Keep families in one information area, away from treatment spaces. Document tags, times, and where each patient went."
          },
          {
            heading: "Death, Comfort, and Family Support",
            content: "When cure is no longer possible, comfort becomes the goal. Ask what matters most now. Lower the alarms, dim the lights, and clear away clutter. Watch for pain, restlessness, and hard breathing, the most common sources of suffering near death. Give ordered pain and anxiety medicines on time, not just when the family asks. Raise the head of the bed, fan the face gently, and keep the mouth moist with swabs and small sips. Invite family to the bedside early, including during resuscitation, which means the team effort to restart the heart and breathing, when your hospital allows it. A staff member should stay with the family, explain what is happening in plain words, and never leave them guessing alone in a hallway. Families need honest updates in simple language. Say dying when death is near, instead of soft words that confuse. Explain what they may see, like slower breathing, cool hands, and less response. Offer time, privacy, tissues, water, and a phone charger. Ask about faith leaders or rituals they want. After death, slow everything down. Give the family unhurried time with their loved one before the body is moved. Clean the patient gently, close the eyes, and remove tubes only as policy allows. Ask before touching belongings, return every item with care, and explain the next steps clearly. Some patients meet criteria for brain death, which means the complete and permanent loss of all brain function, confirmed by strict medical testing. The patient is legally dead, even though machines keep the chest rising. Organ donation means giving organs, like the heart, liver, and kidneys, after death to save other lives. The donation talk belongs to a trained requestor from the organ procurement organization, which is the nonprofit group that coordinates organ donation in your region. Your job is early referral, meaning you notify that team quickly when a patient may qualify. Never rule a patient out on your own. Beliefs about death and donation vary widely across cultures and faiths, and every family deserves respect, not pressure. Use a trained medical interpreter when language differs, and document the family wishes so every shift honors them the same way."
          },
          {
            heading: "Red Flags and Lasting in the ED",
            content: "A yellow patient can slip into red, so recheck them often instead of forgetting them once they are tagged. Tagging black is painful, but spending everything on one patient can cost many others. Green means minor, the walking wounded, who may help watch others once they are treated. Growth in the emergency department (ED) comes from steady reps, not luck. Volunteer for new skills, ask questions after every hard case, and keep a small notebook of lessons learned, one page per shift. Find mentors early and ask one of them to guide your growth. The best-known badge is the CEN, which means Certified Emergency Nurse, a national credential that proves broad emergency knowledge. It is run by the Board of Certification for Emergency Nursing. Most nurses test after about two years of emergency experience. Two course certifications matter early: TNCC, which means Trauma Nursing Core Course, and ENPC, which means Emergency Nursing Pediatric Course. Both come from the Emergency Nurses Association. A preceptor, which means an experienced nurse who teaches and supervises a new nurse at the bedside, is a milestone role. Set one clear goal per shift, let your orientee try skills while you watch closely, and give feedback that is kind, specific, and fast. Praise in public, correct in private, and document progress honestly. Burnout ends more careers than any hard shift. Sleep on a schedule, eat real meals, move your body, and keep friends outside of work. Asking for help early is strength, not weakness. End-of-life care weighs on nurses too. It is normal to feel grief, especially after deaths of children or patients your own age. Debrief with your team, step away for water and air, and use your hospital support programs."
          }
        ],
        bedsideCues: [
          "A patient who cannot walk after a mass casualty event",
          "Very fast breathing or no breathing after opening the airway",
          "No radial pulse or slow color return in a nail bed",
          "A dying patient with slower breathing, cool hands, and less response"
        ],
        assessmentSequence: [
          "1. Direct everyone who can walk to the marked safe area and tag them green.",
          "2. For each patient who cannot walk, spend about 30 seconds: check breathing first, then perfusion, then mental status.",
          "3. Tag red for immediate, yellow for delayed, green for minor, and black for expectant or deceased, and move red patients first.",
          "4. Recheck yellow patients often, report tag counts early and often, and keep families in one information area.",
          "5. For dying patients, comfort well, invite family to the bedside, give honest plain updates, and debrief with your team afterward."
        ],
        safetyPoints: [
          "Know where the tags, vests, and surge supplies live on your unit, and take every drill seriously.",
          "Use plain words, repeat assignments back, and document tags, times, and where each patient went.",
          "Debrief after hard shifts and use your hospital support programs; caring for yourself keeps you able to care for the next family."
        ],
        workedExample: {
          context: "A bus crash sends twenty patients to the emergency department (ED) at once, and the nurse is assigned to triage.",
          action: "She sends everyone who can walk to the green area, then works through the patients on the ground in about 30 seconds each, checking breathing, radial pulse, and whether they can squeeze her hand. She tags red patients first, reports her tag counts to the incident commander, and rechecks her yellow patients while waiting for more help.",
          outcome: "The sickest patients reach treatment first, no patient is missed in the chaos, and the team stays organized through the surge."
        },
        activity: {
          prompt: "Your first year in the ED will include hard shifts, deaths, and days you feel exhausted. What habits will you protect from day one so you are still standing, and still caring, ten years from now?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "In START triage, which patient gets a yellow tag?",
          options: [
            "A patient who can walk to the safe area on their own.",
            "A patient who breathes well, has good blood flow, and follows commands, but has a serious injury.",
            "A patient who cannot follow commands and has poor blood flow."
          ],
          answerIndex: 1,
          rationale: "Yellow means delayed: the injury is serious, but breathing and blood flow are stable for now, so the patient can wait while red patients are treated first."
        }
      }
    ]
  }
};
