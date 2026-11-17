import type { Lesson, ModuleContent } from "./types";

export const ED_CONTENT_B: Record<string, ModuleContent> = {
  "ed-respiratory": {
    moduleId: "ed-respiratory",
    lessons: [
      {
        id: "ed-17",
        title: "Hypoxia and Oxygen Therapy — Devices, Targets and Titration",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Hypoxia means too little oxygen is reaching the body tissues, and it can injure the brain and heart within minutes. Pulse oximetry is the finger clip sensor that estimates oxygen saturation, the share of hemoglobin carrying oxygen, and a normal reading is 95 to 100 percent. A reading below 90 percent is a warning zone that demands action, not watching. Never treat the number alone: a cold hand, dark nail polish, or a loose sensor can give a false low reading, so always look at breathing rate, lip color, alertness, and how hard the breathing muscles are working."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Start simple and step up only as needed. A nasal cannula, the small plastic prongs in the nose, delivers about 1 to 6 liters per minute and is the right first step for mild low oxygen. A simple face mask delivers about 5 to 10 liters per minute and must run at least 5 liters per minute so the patient does not rebreathe exhaled air. A non-rebreather mask, with its bag and one-way valves, runs at 10 to 15 liters per minute and delivers the highest oxygen short of a breathing tube, so keep its bag inflated before it goes on and never let it fully collapse. Titration means adjusting the flow up or down to hold a target range: most patients target 92 to 96 percent, while patients with COPD (chronic obstructive pulmonary disease) usually target 88 to 92 percent. Change one thing at a time, wait a few minutes, then reassess oxygen level, breathing rate, and alertness, and document the device, the flow rate, and the reading together."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Call for help early when the oxygen level will not rise despite stepping up the device, when the breathing rate keeps climbing, or when the patient gets tired and quiet. Quiet is not comfort here; it can mean exhaustion, and the next steps are pressure support or a breathing tube. In COPD (chronic obstructive pulmonary disease), too much oxygen can raise carbon dioxide, the waste gas we breathe out, and make the patient sleepy, so use controlled oxygen and recheck often. A patient who looks fine but has a terrible number needs the sensor setup checked first, but a patient who looks unwell with a falling number needs the team now, not after another reading."
          }
        ],
        bedsideCues: [
          "Oxygen saturation below 90 percent on the monitor",
          "Blue or pale lips and a rising breathing rate",
          "Neck and shoulder muscles working hard with every breath",
          "A patient who was anxious and restless becoming suddenly quiet and drowsy"
        ],
        assessmentSequence: [
          "1. Look at the whole patient first: breathing rate, lip color, alertness, and work of breathing.",
          "2. Check the pulse oximetry sensor for a cold hand, loose clip, or nail polish that could falsify the reading.",
          "3. Start a nasal cannula at a low flow and watch the saturation, breathing rate, and alertness.",
          "4. Step up to a simple face mask, then a non-rebreather mask, if the target range is not reached.",
          "5. Reassess after each change, document device, flow rate, and reading together, and call early if the level will not rise."
        ],
        safetyPoints: [
          "Never run a simple face mask below 5 liters per minute, or the patient rebreathes exhaled air.",
          "Never let a non-rebreather mask bag fully collapse while the patient breathes.",
          "In COPD (chronic obstructive pulmonary disease), target 88 to 92 percent and do not blast oxygen to 100 percent."
        ],
        workedExample: {
          context: "A 54-year-old man arrives short of breath with an oxygen saturation of 88 percent on room air, breathing fast and using his neck muscles.",
          action: "The nurse checks that the finger sensor is secure, starts a nasal cannula, then steps up to a simple face mask when the reading stays low, and titrates the flow to hold 92 to 96 percent while watching his breathing rate and alertness.",
          outcome: "His saturation rises to 94 percent, his breathing rate slows, and his work of breathing eases, giving the team time to find the cause."
        },
        activity: {
          prompt: "A patient with COPD (chronic obstructive pulmonary disease) has a saturation of 86 percent on 2 liters per minute by nasal cannula. What target range should you aim for, and what would you do next if the reading does not rise after a small increase in flow?",
          type: "calculation"
        },
        knowledgeCheck: {
          question: "What is the usual oxygen saturation target for most patients who do not have COPD (chronic obstructive pulmonary disease)?",
          options: ["88 to 92 percent", "92 to 96 percent", "98 to 100 percent for every patient"],
          answerIndex: 1,
          rationale: "Most patients target 92 to 96 percent. The lower 88 to 92 percent target is for COPD (chronic obstructive pulmonary disease), and pushing everyone to 100 percent is not the goal."
        }
      },
      {
        id: "ed-18",
        title: "Airway Basics — Positioning, Suctioning, Adjuncts and Assisting With Intubation (RSI)",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Every emergency starts with the airway: if air cannot get in, nothing else matters. For a patient with no neck injury, tilt the head back and lift the chin to pull the tongue off the back of the throat. For a patient with a possible neck injury, use a jaw thrust instead, pushing the jaw forward without moving the neck. Adjuncts are simple tools that hold the airway open: a nasal airway is a soft tube through the nose for a drowsy patient who still gags, and an oral airway is a curved plastic piece in the mouth that holds the tongue forward but is only for a patient with no gag reflex."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Keep a rigid suction tip, called a Yankauer, connected and tested at the head of the bed, and suction blood, vomit, and spit in short passes of 10 to 15 seconds while watching the oxygen level, because suctioning steals oxygen. Size a nasal airway from the tip of the nose to the earlobe, and never use one with a serious facial or skull fracture. Size an oral airway from the corner of the mouth to the angle of the jaw. Before intubation, which means placing a breathing tube through the mouth into the windpipe, give 100 percent oxygen for several minutes and confirm suction, the monitor, and working IV (intravenous) access. In RSI (rapid sequence intubation), the patient gets a sedative to sleep, then a paralyzing medicine that stops all muscle movement including breathing, so the nurse draws up and labels the medicines, confirms doses and allergies, runs the monitor, and calls out the oxygen level and heart rate during the attempt."
          },
          {
            heading: "Red Flags and Escalation",
            content: "A patient who cannot protect their own airway, who is dropping in alertness, or whose airway is filling with blood or vomit needs the team and airway tools now. A nasal airway in a patient with a serious facial fracture, or an oral airway in a patient who still gags, can cause harm, so check before you place either one. Once a breathing tube is in, prove it sits in the windpipe with steady waves of carbon dioxide, the waste gas from the lungs, plus chest rise and breath sounds on both sides, then secure the tube and note the depth number at the lips. A tube can slip after every move, so recheck its position after every move and keep suction and the bag valve mask at the bedside."
          }
        ],
        bedsideCues: [
          "Noisy, gurgling, or absent breath sounds with a falling oxygen level",
          "Blood or vomit pooling in the mouth of a patient who cannot clear it",
          "A drowsy patient whose tongue falls back and blocks the airway",
          "A breathing tube with no carbon dioxide wave on the monitor after placement"
        ],
        assessmentSequence: [
          "1. Check whether the airway is open and protected, and whether a neck injury is possible.",
          "2. Position the airway: head tilt and chin lift if no neck injury, jaw thrust if a neck injury is possible.",
          "3. Suction visible blood, vomit, or spit in short 10 to 15 second passes while watching oxygen.",
          "4. Place the right adjunct: nasal airway for a drowsy patient who gags, oral airway only if there is no gag reflex.",
          "5. If a breathing tube is needed, pre-oxygenate, confirm suction, monitor, and IV (intravenous) access, then assist with RSI (rapid sequence intubation) and confirm tube placement."
        ],
        safetyPoints: [
          "Never use a nasal airway when there is a serious facial or skull fracture.",
          "Never use an oral airway in a patient who still has a gag reflex, or it can trigger vomiting.",
          "Never start RSI (rapid sequence intubation) until equipment, medicines, and backup plans are ready, because the paralyzing medicine stops breathing."
        ],
        workedExample: {
          context: "A 38-year-old woman arrives drowsy after an overdose, gurgling with each breath and with an oxygen saturation of 89 percent.",
          action: "The nurse positions her with a head tilt and chin lift, suctions vomit in short passes, places a correctly sized nasal airway, and gives 100 percent oxygen while the team prepares for intubation.",
          outcome: "Her airway clears, her oxygen level rises, and the team can place the breathing tube safely with the monitor, suction, and medicines already ready."
        },
        activity: {
          prompt: "Think through your next shift: if a patient arrives with a possible neck injury and a blocked airway, which positioning move do you use and why, and what would you have ready at the bedside before the provider arrives?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "Which airway move should you use for a patient with a possible neck injury?",
          options: ["Jaw thrust, pushing the jaw forward without moving the neck", "Head tilt and chin lift", "An oral airway placed before any positioning"],
          answerIndex: 0,
          rationale: "A jaw thrust opens the airway without moving the neck. Head tilt and chin lift is only for patients with no neck injury."
        }
      },
      {
        id: "ed-19",
        title: "Asthma and COPD Exacerbations — Nebulizers, Steroids and Magnesium",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "In asthma, the muscle around the air tubes squeezes tight, the lining swells, and thick mucus plugs the tubes. In COPD (chronic obstructive pulmonary disease), years of damage leave the air sacs floppy and the tubes chronically narrow and full of mucus. Both narrow the air tubes, so air struggles to get out and the patient works hard to breathe. Danger signs are a silent chest with little air moving, blue lips, drowsiness, and using the extra breathing muscles in the neck and shoulders with every breath. A patient who cannot finish a sentence is severe until proven otherwise, and the patient in front of you tells you more than any single number."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Give oxygen to hold the target range: for most asthma patients aim for 93 to 95 percent saturation, and for COPD (chronic obstructive pulmonary disease) aim lower, 88 to 92 percent, because too much oxygen can raise carbon dioxide and make them sleepy. Give albuterol, a bronchodilator that relaxes the muscle squeezing the air tubes, by nebulizer, a machine that turns liquid medicine into a mist the patient breathes in, and watch for a fast heart rate and shaky hands. Ipratropium is often added to the first nebulizer treatments because it blocks a different signal that tightens the tubes. Give steroids, medicines that calm swelling inside the air tubes, early, by mouth or by IV (intravenous), because they take hours to work. For severe attacks that are not opening up, the provider may order magnesium sulfate as a slow IV (intravenous) drip, and in life-threatening asthma that does not respond, epinephrine may be given as a shot into the muscle or as a drip."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Losing looks like exhaustion, confusion, a silent chest, or an oxygen level that will not hold, and those patients need the provider now and may need a breathing tube. A patient who looks better after one nebulizer still needs the steroid on board, so do not stop there. In COPD (chronic obstructive pulmonary disease), a mask device called BiPAP (bilevel positive airway pressure) can rest the tired breathing muscles and blow off waste gas without a breathing tube, and these patients often have heart disease hiding alongside the lung disease. After every treatment, go back and check breathing rate, air movement, speech, and oxygen level: winning looks like longer sentences and quieter work of breathing."
          }
        ],
        bedsideCues: [
          "Speaking only two words at a time and leaning forward to breathe",
          "Wheeze heard from the doorway, or a silent chest with almost no air moving",
          "Neck and shoulder muscles pulling in with every breath",
          "Blue lips, drowsiness, or a patient too tired to keep breathing hard"
        ],
        assessmentSequence: [
          "1. Sort severity fast: speech, air movement, lip color, alertness, and use of extra breathing muscles.",
          "2. Give oxygen to the right target: 93 to 95 percent for asthma, 88 to 92 percent for COPD (chronic obstructive pulmonary disease).",
          "3. Start nebulized albuterol, often with ipratropium in the first treatments, and watch heart rate and hands for shaking.",
          "4. Give steroids early, by mouth or by IV (intravenous), even if the patient looks better after one nebulizer.",
          "5. Reassess after every treatment: breathing rate, air movement, speech, and oxygen level, and escalate fast if the patient is tiring."
        ],
        safetyPoints: [
          "A silent chest with little air moving is a danger sign, not a sign the patient is improving.",
          "Steroids take hours to work, so give them early and do not wait to see if nebulizers alone are enough.",
          "Magnesium sulfate is run slowly as ordered, and blood pressure is watched because it can drop a little."
        ],
        workedExample: {
          context: "A 62-year-old man with COPD (chronic obstructive pulmonary disease) arrives leaning forward, speaking two words at a time, with a saturation of 86 percent.",
          action: "The nurse gives controlled oxygen to target 88 to 92 percent, starts nebulized albuterol with ipratropium, gives steroids early, and reassesses breathing rate, air movement, and speech after each treatment.",
          outcome: "He begins speaking in longer sentences, his breathing slows, and his oxygen level holds in target, so the team continues treatment without needing a breathing tube."
        },
        activity: {
          prompt: "A patient looks much better after one nebulizer and asks if the steroid can be skipped. Why does the steroid still need to be given, and how would you explain that to the patient in plain words?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "Why are steroids given early in an asthma or COPD (chronic obstructive pulmonary disease) exacerbation?",
          options: ["They open the air tubes within minutes like a nebulizer", "They relax the muscle around the air tubes instantly", "They calm swelling inside the air tubes but take hours to work, so early dosing matters"],
          answerIndex: 2,
          rationale: "Steroids calm the swelling inside the air tubes, but they take hours to work, so giving them early is what makes them useful."
        }
      },
      {
        id: "ed-20",
        title: "Reading the Monitor — Capnography, Pulse Oximetry and ABGs",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Pulse oximetry, capnography, and the ABG (arterial blood gas) each answer a different question. Pulse oximetry is the finger clip that estimates oxygen saturation using light, but it tells you only about oxygen, not about ventilation, which means moving air in and out. Capnography measures carbon dioxide, the waste gas, in every breath out and draws it as a wave, proving air is moving and showing the ETCO2 (end-tidal carbon dioxide), the amount of waste gas at the end of a breath out, normally about 35 to 45. An ABG (arterial blood gas) is a blood sample drawn from an artery, usually at the wrist, that measures the exact oxygen level, the waste gas level, and the acid level of the blood."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Learn the normal capnography wave cold: a neat rectangle with rounded corners that rises as breath leaves, flattens across the top, then drops sharply as the next breath comes in. When the air tubes are narrow, like in asthma, the wave loses its flat top and climbs in a slant, the shark fin shape, and when treatment opens the tubes the wave flattens back toward normal. Read an ABG (arterial blood gas) in a fixed order: first the pH, the acid level of the blood, where normal is 7.35 to 7.45, below that is acidosis and above it is alkalosis. Next find the cause: high carbon dioxide with a low pH means the lungs are not blowing gas off, while low bicarbonate, the blood buffer that soaks up acid, with a low pH means a body chemistry problem like shock or kidney failure."
          },
          {
            heading: "Red Flags and Escalation",
            content: "A capnography wave that suddenly disappears is an emergency: no breath is reaching the sensor, so check the patient first, then the tube, then the equipment, in that order. A rising ETCO2 (end-tidal carbon dioxide) means waste gas is building up because the patient is breathing too slowly or too shallowly, often from sedation or exhaustion. A low number can mean very fast breathing blowing gas off, or poor blood flow to the lungs, so always match the number to the patient in front of you. A patient can hold a normal finger clip reading while waste gas quietly climbs, so when the three tools disagree, go back to the patient and look with your own eyes."
          }
        ],
        bedsideCues: [
          "A capnography wave that suddenly flattens to nothing",
          "A shark fin shaped wave that slants upward instead of flattening",
          "A normal oxygen reading in a patient who is breathing very slowly and getting sleepy",
          "An ETCO2 (end-tidal carbon dioxide) number steadily rising after sedation"
        ],
        assessmentSequence: [
          "1. Check the finger clip reading, but remember it shows oxygen only, not ventilation.",
          "2. Look at the capnography wave shape and the ETCO2 (end-tidal carbon dioxide) number.",
          "3. Match the wave and the number to the patient: breathing rate, depth, alertness, and chest movement.",
          "4. Read the ABG (arterial blood gas) in order: pH first, then carbon dioxide, then bicarbonate.",
          "5. Combine all three tools, and when they disagree, reassess the patient directly before trusting any one number."
        ],
        safetyPoints: [
          "A vanished capnography wave is an emergency: check the patient first, then the tube, then the equipment.",
          "A normal pulse oximetry reading does not rule out rising carbon dioxide or failing ventilation.",
          "Capnography is the best proof a breathing tube sits in the windpipe, shown by steady carbon dioxide waves."
        ],
        workedExample: {
          context: "A 47-year-old man with asthma is on the monitor with a saturation of 96 percent, but his capnography wave has become a shark fin and his breathing is labored.",
          action: "The nurse trusts the wave over the reassuring oxygen number, reports the narrow-airway pattern, and the team gives nebulized treatment while watching the wave flatten back toward a rectangle.",
          outcome: "The wave shape improves before the patient feels much better, confirming the treatment is opening the air tubes."
        },
        activity: {
          prompt: "You see a shark fin capnography wave and an ETCO2 (end-tidal carbon dioxide) of 52 in a patient with asthma. What does the wave shape tell you, and what would you expect to see as treatment starts to work?",
          type: "interpretation"
        },
        knowledgeCheck: {
          question: "What does a normal ETCO2 (end-tidal carbon dioxide) value tell you, and what range is normal?",
          options: ["It measures oxygen in the blood, normally 95 to 100", "It is the waste gas at the end of a breath out, normally about 35 to 45", "It measures the acid level of the blood, normally 7.35 to 7.45"],
          answerIndex: 1,
          rationale: "ETCO2 (end-tidal carbon dioxide) is the amount of waste gas at the end of a breath out, normally about 35 to 45, and a rising value means waste gas is building up."
        }
      },
      {
        id: "ed-21",
        title: "Pulmonary Embolism — The Clot You Cannot Afford to Miss",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "PE (pulmonary embolism) is a blood clot that has traveled to the lungs and is blocking blood flow, and a stable patient can collapse in minutes if it is missed. The classic picture is fast, hard breathing, chest pain that gets worse when the patient breathes in, a racing heart, and sometimes coughing up blood or feeling faint and anxious. One leg may be swollen and sore, and that clue points straight toward the source. Most clots start as DVT (deep vein thrombosis), a clot forming in a deep vein of the leg, and risk rises after surgery, long trips, cancer, pregnancy, birth control pills, and long periods spent in bed without moving."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Sit the patient upright, give oxygen as ordered, keep them calm and still, and repeat vital signs often, because a rising heart rate, falling oxygen level, and growing chest pain mean the clot is winning. The workup moves fast: blood tests check heart strain and clotting markers, and an EKG (electrocardiogram), a recording of the heart rhythm, often shows a very fast rate and helps rule out a heart attack, which can look very much the same. The test that confirms the clot is a CT (computed tomography) scan of the chest taken with contrast dye, which lights up the lung arteries so the team can see exactly where the clot is blocking flow. Treatment usually starts with a blood thinner given through an IV (intravenous) line, which stops the clot from growing while the body slowly breaks it down."
          },
          {
            heading: "Red Flags and Escalation",
            content: "A patient who cannot finish a sentence and looks scared needs oxygen, a monitor, and help right now. A massive clot strains the right side of the heart until blood pressure crashes, and that patient may need a clot-busting drug, a procedure to pull the clot out, or surgery, so your job is large vein access, constant monitoring, and clear updates to the whole team. Watch closely for bleeding once a blood thinner starts, check lab values, and report new bruising, pink urine, or black stools. Document when symptoms started, leg pain or swelling, recent surgery or travel, and every vital sign trend, and ask about birth control, smoking, cancer, and past clots."
          }
        ],
        bedsideCues: [
          "Sudden shortness of breath with a racing heart and chest pain worse on breathing in",
          "One leg swollen and sore while the other looks normal",
          "Oxygen level falling while the heart rate and breathing rate climb",
          "A patient who feels faint, anxious, and cannot finish a sentence"
        ],
        assessmentSequence: [
          "1. Sit the patient upright, apply the monitor, and give oxygen as ordered.",
          "2. Check vital signs and look for fast heart rate, fast breathing, low oxygen, and falling blood pressure.",
          "3. Examine both legs for swelling, soreness, and size difference, and ask about recent surgery, travel, and clot risks.",
          "4. Help with the workup: blood tests, EKG (electrocardiogram), and preparation for a CT (computed tomography) scan with contrast dye.",
          "5. Keep watching heart rate, oxygen, and chest pain, and report any worsening trend at once."
        ],
        safetyPoints: [
          "Fast breathing, chest pain worse on breathing in, a racing heart, and one swollen leg should always make you think clot first.",
          "Once a blood thinner starts, report new bruising, pink urine, or black stools right away.",
          "A massive PE (pulmonary embolism) can crash blood pressure fast, so keep large vein access and constant monitoring ready."
        ],
        workedExample: {
          context: "A 41-year-old woman arrives short of breath with a racing heart three days after a long flight, and her left calf is swollen and sore.",
          action: "The nurse sits her upright, gives oxygen, puts her on the monitor, repeats vital signs, and reports the leg swelling and travel history so the team fast-tracks the clot workup.",
          outcome: "The CT (computed tomography) scan confirms a pulmonary embolism, a blood thinner is started promptly, and her heart rate and breathing begin to settle."
        },
        activity: {
          prompt: "A patient with sudden shortness of breath and chest pain tells you her leg has been sore since a long car trip last week. What does that history change about your thinking, and what would you do first?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "Which test confirms a pulmonary embolism by showing exactly where the clot is blocking flow?",
          options: ["A CT (computed tomography) scan of the chest with contrast dye", "An EKG (electrocardiogram) showing a fast heart rate", "A blood test for clotting markers alone"],
          answerIndex: 0,
          rationale: "The CT (computed tomography) scan with contrast dye lights up the lung arteries and shows exactly where the clot is blocking flow. The EKG (electrocardiogram) and blood tests support the workup but do not confirm the clot."
        }
      },
      {
        id: "ed-22",
        title: "Pneumothorax and Chest Tubes — Setup, Care and Emergencies",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Pneumothorax means air trapped between the lung and the chest wall, squeezing the lung down, and it can follow injury, broken ribs, lung disease, or sometimes no clear cause at all in tall young adults. The signs come on fast: sharp chest pain on one side, sudden shortness of breath, a racing heart, and one side of the chest sounding hollow or silent with a stethoscope. The deadly form is tension pneumothorax, where air keeps entering but cannot escape, pushing the heart and the good lung aside, so blood pressure falls, neck veins bulge, and the windpipe may shift. Tension pneumothorax is a clinical call, not a wait-for-imaging call, and the team acts now."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Set up before the provider starts: gather the chest tube tray, sterile gloves, the drainage system, sterile water, dressings, and tape, and fill the water seal chamber to the marked line with sterile water. Keep the system closed, upright, and below chest level at all times. Learn the three chambers: the collection chamber catches blood and fluid, the water seal chamber lets air leave but never return like a one-way door, and the suction chamber controls how hard the system pulls. Watch the water seal chamber every round: gentle rising and falling with each breath is normal and is called tidaling, while constant bubbling means an air leak somewhere in the system or the chest. Give pain medicine as ordered, help the patient sit up, coach slow deep breaths and coughing, and measure drainage each shift."
          },
          {
            heading: "Red Flags and Escalation",
            content: "In tension pneumothorax, the provider may push a large needle into the chest to let trapped air rush out, and you will hear a hiss and see breathing ease, but that needle only buys time, so have the tray, the drain, and suction ready for the chest tube that follows. If the tube falls out, cover the site at once with a sterile dressing taped on three sides and call for help. If the system breaks, place the tube end in sterile water, and never clamp a chest tube unless a provider orders it. Report a leak that will not stop, fast spreading crackling air under the skin, a swollen face, harder breathing, or a sudden large amount of blood in the drainage right away."
          }
        ],
        bedsideCues: [
          "Sharp chest pain on one side with sudden shortness of breath",
          "One side of the chest silent or hollow on listening",
          "Neck veins bulging with falling blood pressure in a breathless patient",
          "Crackling air felt under the skin around the chest tube site"
        ],
        assessmentSequence: [
          "1. Listen to both sides of the chest and compare air movement, chest rise, and pain.",
          "2. Check vital signs, oxygen level, blood pressure, and neck veins for signs of tension.",
          "3. Set up the chest tube tray, drainage system, sterile water, dressings, and tape before the provider starts.",
          "4. Fill the water seal chamber to the marked line and keep the system closed, upright, and below chest level.",
          "5. Watch the water seal for tidaling and bubbling, check the skin for crackling air, and measure drainage every round."
        ],
        safetyPoints: [
          "Never clamp a chest tube unless a provider orders it.",
          "If the tube falls out, cover the site at once with a sterile dressing taped on three sides and call for help.",
          "If the drainage system breaks, place the tube end in sterile water to keep the seal."
        ],
        workedExample: {
          context: "A 29-year-old man arrives after a fall with sharp pain on the right side of his chest, sudden shortness of breath, and almost no breath sounds on the right.",
          action: "The nurse sets up the chest tube tray and drainage system, fills the water seal chamber to the marked line, keeps the system below chest level, and watches for tidaling and bubbling once the tube is in.",
          outcome: "The lung re-expands, his breathing eases, and the water seal shows gentle tidaling with each breath, confirming the system is working."
        },
        activity: {
          prompt: "You are doing rounds and the water seal chamber is bubbling constantly instead of gently rising and falling. What does that mean, and what do you check first?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What does gentle rising and falling of the water seal chamber with each breath mean?",
          options: ["The system is blocked and needs clamping", "An air leak that will not stop", "Normal tidaling, showing the system is connected and responding to breathing"],
          answerIndex: 2,
          rationale: "Gentle rising and falling with each breath is called tidaling and is normal. Constant bubbling means an air leak, and clamping is not the answer."
        }
      },
      {
        id: "ed-23",
        title: "Anaphylaxis — Epinephrine First, Everything Else Second",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Anaphylaxis means a severe whole-body allergic reaction that can close the airway and crash the blood pressure. Spot it by systems: skin shows hives, flushing, and swelling of the lips, tongue, or face, breathing turns wheezy, tight, or hoarse, the gut may cramp and vomit, and blood pressure falls while the patient feels faint and scared. Two systems involved after a trigger means treat it now. The airway is the danger: a swelling tongue and throat can close completely in minutes, and a closed airway cannot be fixed with oxygen alone."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Give epinephrine first, into the muscle of the outer thigh, a route called IM (intramuscular), into the muscle. It opens the airway, tightens blood vessels, and supports the heart, and it can be repeated in 5 to 15 minutes if symptoms continue. Do not delay it for any other drug. Position matters: breathing trouble means sit them up, while faint or vomiting means lie them flat with legs raised, or on the side if they are pregnant or vomiting. Give oxygen for a low oxygen level, start an IV (intravenous) line, and keep the monitor on. Other drugs come second, never first: antihistamines ease skin symptoms but do not save airways, a steroid may help prevent a late return of symptoms, and breathing treatments help wheezing, but none of these replace epinephrine."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Watch for the second wave: symptoms can return 4 to 12 hours later, even after the patient looks fine, in a biphasic reaction, which means symptoms come back in a second phase, so observe for several hours, longer after severe reactions or repeated epinephrine doses. Blood pressure can stay low because vessels are wide open and fluid leaks out of them, so large IV (intravenous) fluid boluses help fill the tank again, and two good lines are better than one if you can get them. Never leave the patient alone to hunt for supplies, and call for help early. Common triggers are foods like peanuts, tree nuts, shellfish, and milk, bee and wasp stings, medicines like antibiotics, and contrast dye used for scans, so ask what was eaten, taken, or stung, and when it happened."
          }
        ],
        bedsideCues: [
          "Lips, tongue, or face swelling with a voice that is changing or hoarse",
          "Hives and flushing appearing with wheezing or tight breathing",
          "Blood pressure falling while the patient feels faint and scared",
          "Symptoms returning hours after the patient first looked better"
        ],
        assessmentSequence: [
          "1. Spot the pattern across systems: skin, breathing, gut, and blood pressure after a trigger.",
          "2. Call for help early, stay with the patient, and do not leave to hunt for supplies.",
          "3. Give epinephrine into the muscle of the outer thigh first, without delaying for other drugs.",
          "4. Position for the problem: sit up for breathing trouble, flat with legs raised for fainting, on the side if pregnant or vomiting.",
          "5. Give oxygen, start an IV (intravenous) line, keep the monitor on, and watch for a second wave for hours."
        ],
        safetyPoints: [
          "Epinephrine comes first, every time, and no other drug should ever delay it.",
          "Antihistamines ease skin symptoms but do not save an airway, so they are never a substitute for epinephrine.",
          "Symptoms can return 4 to 12 hours later, so observe for several hours even after the patient looks fine."
        ],
        workedExample: {
          context: "A 33-year-old man develops hives, lip swelling, and wheezing minutes after eating a meal containing peanuts, and his blood pressure starts to fall.",
          action: "The nurse stays with him, calls for help, gives epinephrine into the muscle of the outer thigh at once, sits him up for breathing, and starts oxygen and an IV (intravenous) line.",
          outcome: "His wheezing eases, his blood pressure rises, and he is kept for observation because a second wave can return hours later."
        },
        activity: {
          prompt: "A colleague suggests giving an antihistamine first because the hives look worst, and giving epinephrine only if that does not work. What is wrong with that plan, and what would you do instead?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What is the first drug to give in anaphylaxis, and how is it given?",
          options: ["An antihistamine by mouth to ease the hives", "Epinephrine into the muscle of the outer thigh", "A steroid by IV (intravenous) to prevent a late reaction"],
          answerIndex: 1,
          rationale: "Epinephrine into the muscle of the outer thigh opens the airway, tightens blood vessels, and supports the heart. Antihistamines and steroids come second and never replace it."
        }
      }
    ]
  },
  "ed-trauma": {
    moduleId: "ed-trauma",
    lessons: [
      {
        id: "ed-24",
        title: "The Trauma Survey — Primary and Secondary Assessment as a Team",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "The trauma survey is a set step-by-step check of a badly injured patient, and teamwork is what saves lives when ten people move at once. The primary survey hunts killers in order, using the letters ABCDE: A is airway, B is breathing, C is circulation, which means blood flow, D is disability, which means brain and nerve function, and E is exposure, which means fully uncovering the patient to find injuries. Only after the primary survey is stable does the secondary survey begin, with a full head-to-toe exam, a detailed history, and a review of every scan and lab. Nothing in the secondary survey jumps ahead of a blocked airway, bad breathing, or bleeding that is still uncontrolled."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Start with airway, always with the neck protected: look for blockage, blood, vomit, or a dropping level of alertness, suction what you see, support the jaw, and prepare airway tools. For breathing, watch the chest rise, listen to both sides, feel for air movement, and check the oxygen level. For circulation, apply firm direct pressure to any bleeding you can see, feel the pulse strength and skin color, check blood pressure, and start two large bore IV (intravenous) lines for fluids and blood. For disability, score eye opening, voice response, and movement, check pupil size and reaction, and check the blood sugar, because low sugar can mimic brain injury. For exposure, undress the patient fully and look everywhere, front, back, and skin folds, then cover them warmly at once, because cold blood does not clot well."
          },
          {
            heading: "Red Flags and Escalation",
            content: "A falling disability score is a warning bell: report it loudly and repeat the check often. Uneven chest rise, silent areas, or crackling under the skin point to chest injury and may mean a chest tube is coming fast, so report these at once. Gather history with the letters AMPLE: A means allergies, M means medicines, P means past medical history, L means last food or drink, and E means events, what actually happened. Trauma care loops and never runs once, so repeat vital signs, repeat the primary survey after every big move, and speak up when numbers change. Know your role, whether recorder, medication nurse, or runner, say it out loud, and use closed-loop communication so nothing gets missed."
          }
        ],
        bedsideCues: [
          "A blocked airway with blood or vomit in a patient who cannot protect it",
          "Uneven chest rise or one silent side of the chest",
          "Visible bleeding with a weak pulse and pale, cool skin",
          "A disability score falling on repeat checks"
        ],
        assessmentSequence: [
          "1. Airway: check for blockage and protect the neck, suction what you see, and prepare airway tools.",
          "2. Breathing: watch chest rise, listen to both sides, feel air movement, and check the oxygen level.",
          "3. Circulation: stop visible bleeding with firm pressure, check pulse and blood pressure, and start two large bore IV (intravenous) lines.",
          "4. Disability: score eye opening, voice response, and movement, check pupils, and check blood sugar.",
          "5. Exposure: uncover the patient fully, look everywhere for wounds, then cover warmly and repeat the primary survey after every big move."
        ],
        safetyPoints: [
          "Airway comes first, always with the neck protected, and a patient who cannot protect the airway needs a breathing tube.",
          "Never let the secondary survey jump ahead of a blocked airway, bad breathing, or uncontrolled bleeding.",
          "Cold blood does not clot well, so cover the patient warmly and use warm blankets and warm fluids."
        ],
        workedExample: {
          context: "A 45-year-old man arrives after a car crash, alert but pale, with bleeding from a leg wound and a chest that rises unevenly.",
          action: "The team runs the primary survey in order: the nurse suctions blood from the airway, gives oxygen, presses firmly on the leg wound, starts two large bore IV (intravenous) lines, and reports the uneven chest rise and falling disability score out loud.",
          outcome: "Bleeding is controlled, fluids and blood are running, and the chest finding is flagged early so the team can act before breathing worsens."
        },
        activity: {
          prompt: "You are assigned as recorder in a trauma survey. What would you write down during the primary survey, and how would you use closed-loop communication when a finding is called out?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What does the E in the ABCDE primary survey stand for?",
          options: ["Exposure: fully uncovering the patient to find injuries, then covering them warmly", "Events: what actually happened before arrival", "Examination: the full head-to-toe exam done after stabilization"],
          answerIndex: 0,
          rationale: "E is exposure, fully uncovering the patient to find hidden injuries, then covering them warmly because cold blood does not clot well."
        }
      },
      {
        id: "ed-25",
        title: "Hemorrhage and Shock — Bleeding Control, IV Access and Massive Transfusion",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Hemorrhage means heavy bleeding, and shock means the body is not getting enough blood flow to its organs. Learn shock before the blood pressure falls: early signs are a fast heart rate, fast breathing, pale cool skin, slow capillary refill, which means color returns slowly after you press a fingernail, and a patient who seems anxious or confused. Blood pressure often drops late, so trust the early signs. Clear fluids alone cannot carry oxygen, so a bleeding patient needs blood, given early, and balanced transfusion, which means giving red cells, plasma, and platelets together, copies what whole blood does."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Start with firm direct pressure on the bleeding point, using gauze or a cloth and the weight of your hands, and do not peek every few seconds, because lifting releases the clot that is forming. Add more gauze on top if blood soaks through and keep pressing. For heavy arm or leg bleeding that pressure cannot stop, apply a tourniquet, a tight band placed above the wound to stop blood flow to the limb, tighten until bleeding stops, and note the time out loud and on the chart. Deep wounds in the groin, armpit, or neck cannot take a tourniquet, so pack those tightly with gauze, feeding it deep into the wound, then press hard for several full minutes. Start two large bore IV (intravenous) lines in the arms when you can, and if veins fail, the team may use intraosseous access, meaning into the bone."
          },
          {
            heading: "Red Flags and Escalation",
            content: "When bleeding is huge, the team activates massive transfusion, a set protocol that delivers many units of blood products fast without waiting for each single order, and your jobs are running blood, checking labels with a second nurse, tracking totals, and reporting the running count out loud. The target mix is one to one to one, one unit of red cells to one unit of plasma to one unit of platelets, and labs guide the fine tuning, including calcium, which often falls during large transfusions. Low calcium weakens the heart and clotting, so report values and replace as ordered. Keep the patient warm with a fluid warmer for blood and fluids, because cold blood clots poorly, and if bleeding restarts or numbers worsen, say it out loud fast, because the team may move to surgery or a procedure room next."
          }
        ],
        bedsideCues: [
          "A fast heart rate with pale, cool skin and slow color return after pressing a nail",
          "A patient growing anxious or confused while bleeding is still going",
          "Blood soaking through gauze despite firm direct pressure",
          "Urine output falling while the pulse stays fast"
        ],
        assessmentSequence: [
          "1. Press firmly on the bleeding point and do not lift to peek at the clot forming underneath.",
          "2. Apply a tourniquet to an arm or leg if pressure cannot stop heavy bleeding, and note the time.",
          "3. Pack deep wounds in the groin, armpit, or neck tightly with gauze and press hard for several full minutes.",
          "4. Start two large bore IV (intravenous) lines, draw blood labs and the type and crossmatch with the first stick.",
          "5. Run blood early in a balanced mix, keep the patient warm, and reassess bleeding, pulse, skin warmth, and urine output without stopping."
        ],
        safetyPoints: [
          "Blood pressure often drops late in shock, so act on a fast heart rate, pale cool skin, and confusion first.",
          "Never loosen a tourniquet yourself, and always note the time it was applied out loud and on the chart.",
          "Never rely on clear fluids alone in heavy bleeding: the patient needs blood, given early, in a balanced mix."
        ],
        workedExample: {
          context: "A 52-year-old man arrives with heavy bleeding from a leg wound after a machinery accident, a fast heart rate, and pale, cool skin.",
          action: "The nurse presses firmly on the wound without peeking, applies a tourniquet when pressure alone cannot stop the bleeding and notes the time, starts two large bore IV (intravenous) lines, and runs blood in the one to one to one mix while keeping him warm.",
          outcome: "The bleeding slows, his pulse begins to fall, his skin warms, and his urine output rises, showing his organs are getting blood flow again."
        },
        activity: {
          prompt: "A bleeding patient has a normal blood pressure but a fast heart rate, pale cool skin, and growing confusion. Is this patient in shock, and what would you do first?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What is the target mix for balanced transfusion in massive bleeding?",
          options: ["Red cells only, until the bleeding stops", "Plasma only, because it carries the clotting factors", "One unit of red cells to one unit of plasma to one unit of platelets"],
          answerIndex: 2,
          rationale: "The target mix is one to one to one: one unit of red cells to one unit of plasma to one unit of platelets, which together copy what whole blood does."
        }
      },
      {
        id: "ed-26",
        title: "Head Injury — Neuro Checks, GCS and Warning Signs",
        durationMinutes: 3,
        sections: [
          {
            heading: "Core Concept",
            content: "A head injury can look calm and then turn deadly within minutes, so repeated checks catch the change before it becomes a disaster. A neuro check, a short bedside check of brain function, looks at level of consciousness, pupil response, movement, strength, and speech, and you compare every finding with the first set you took, because change over time matters more than one number. The GCS (Glasgow Coma Scale), the scoring system for level of consciousness, has three parts: the eye part scores whether the eyes open on their own, to voice, to pain, or not at all; the verbal part scores clear speech, confused speech, wrong words, sounds only, or no sound; and the motor part scores obeying commands, pulling away from pain, bending or straightening in an abnormal way, or no movement at all."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Check both pupils for size, equality, shape, and reaction to light, shining the light and watching for a brisk shrink, then comparing sides. One large pupil that reacts slowly, or pupils that become unequal, can signal rising pressure inside the skull. Watch vital signs closely with every neuro check: a slow pulse, rising top blood pressure number, and slow or uneven breathing together form a late warning pattern of pressure building in the brain. Repeat neuro checks as often as ordered, and more often if anything changes, and chart the exact GCS (Glasgow Coma Scale) score for each part, not just the total, plus pupil findings, vital signs, and the time."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Report right away if the GCS (Glasgow Coma Scale) drops by two points or more, if pupils change, if the patient vomits again, or if they cannot be woken as before, using clear, calm language and stating what changed and when you first noticed it. Warning signs include getting more sleepy or hard to wake, repeated vomiting, a worsening headache, clear fluid from the nose or ear, a seizure, weakness on one side, slurred speech, and confusion that grows, and any one of these means escalate now. The provider may order a CT (computed tomography) scan, a fast set of detailed X-ray pictures of the brain, so keep the patient safe for transport and keep the head of the bed raised when allowed. Avoid strong sedatives unless ordered, because they can hide the very changes you are watching for."
          }
        ],
        bedsideCues: [
          "A patient getting more sleepy or harder to wake on repeat checks",
          "One pupil larger than the other or reacting slowly to light",
          "Repeated vomiting or a headache that keeps getting worse",
          "Clear fluid leaking from the nose or ear after a head injury"
        ],
        assessmentSequence: [
          "1. Take a full baseline neuro check: consciousness, pupils, movement, strength, and speech.",
          "2. Score the GCS (Glasgow Coma Scale) by parts: eye, verbal, and motor, and chart each part separately.",
          "3. Check both pupils for size, equality, shape, and reaction to light, and compare sides.",
          "4. Check vital signs with every neuro check and watch for a slow pulse, rising blood pressure, and slow or uneven breathing.",
          "5. Repeat the checks as ordered and compare every finding with the baseline, reporting any change at once."
        ],
        safetyPoints: [
          "Report a GCS (Glasgow Coma Scale) drop of two points or more right away, and never wait and watch.",
          "A slow pulse with rising blood pressure and slow or uneven breathing is a late warning of pressure building in the brain.",
          "Do not give strong sedatives unless ordered, because they can hide the changes you are watching for."
        ],
        workedExample: {
          context: "A 28-year-old man arrives after a fall, talking clearly at first, then becomes drowsy and hard to wake an hour later, with one pupil now larger than the other.",
          action: "The nurse repeats the neuro check, scores each part of the GCS (Glasgow Coma Scale), checks pupils and vital signs, and reports the drop in score and the unequal pupils at once.",
          outcome: "The team fast-tracks a CT (computed tomography) scan of the brain, finds rising pressure early, and the patient is moved to definitive care before the injury worsens further."
        },
        activity: {
          prompt: "A patient opens eyes to voice, speaks confused words, and pulls away from pain. Score each part of the GCS (Glasgow Coma Scale) and explain what a two-point drop from this baseline would mean for your next action.",
          type: "interpretation"
        },
        knowledgeCheck: {
          question: "Which change should you report right away in a head injury patient?",
          options: ["A GCS (Glasgow Coma Scale) drop of two points or more", "A single headache that stays the same for an hour", "A pupil check that is unchanged from the baseline"],
          answerIndex: 0,
          rationale: "A GCS (Glasgow Coma Scale) drop of two points or more means the brain is worsening and must be reported at once, along with any pupil change or repeated vomiting."
        }
      },
      {
        id: "ed-27",
        title: "Chest and Abdominal Trauma — What to Watch and What to Report",
        durationMinutes: 3,
        sections: [
          {
            heading: "Core Concept",
            content: "A crash victim can smile at you while bleeding inside the chest or belly, so your job is to watch for the hidden change and report it fast. Chest trauma includes broken ribs, a bruised lung, and air or blood collecting around the lung. A pneumothorax, air trapped between the lung and the chest wall, can make breathing suddenly worse, with fast breathing, low oxygen saturation, chest pain, and one side rising less. Abdominal trauma, injury to the belly area, may damage the liver, spleen, intestines, or major blood vessels, and internal bleeding can be quiet at first, with the patient only feeling thirsty, restless, dizzy, or a little nauseated."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Ask about pain with breathing, watch how hard the patient works to breathe, and listen for breath sounds that are softer or absent on one side. Ask where the belly hurts, look for bruising, swelling, or a hard tight belly, and note any seat belt marks across the skin. Measure and chart breathing rate, oxygen saturation, pulse, blood pressure, temperature, pain score, and urine output, because falling urine output can be an early sign of poor blood flow. The team may order a CT (computed tomography) scan, detailed pictures inside the body, plus blood tests and typed blood, so make sure two large bore IV (intravenous) lines are working well. If a chest tube is placed to drain air or blood, keep the drainage system below chest level and watch for steady bubbling or a sudden large amount of blood."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Report fast breathing, dropping oxygen saturation, a windpipe shifting to one side, a belly that grows bigger or harder, vomiting blood, black or bloody stool, and any drop in consciousness, because these are not wait-and-see findings in trauma care at all. Blood collecting around the lung can cause shock, which means the body is not getting enough blood flow to its organs, and pale skin, a fast pulse, falling blood pressure, and growing breathlessness are your clues, so report them together as one urgent picture. Repeat vital signs often, because a rising pulse with a slowly falling blood pressure often appears before the patient looks truly sick. Recheck often, keep the patient warm and on the monitor, and update the provider after every meaningful change."
          }
        ],
        bedsideCues: [
          "One side of the chest rising less with softer or absent breath sounds",
          "A belly growing bigger, harder, or more tender on repeat checks",
          "Seat belt marks across the belly with rising pain",
          "Thirst, restlessness, and dizziness in a patient who still looks fairly well"
        ],
        assessmentSequence: [
          "1. Listen to both sides of the chest and watch chest rise, breathing rate, and oxygen saturation.",
          "2. Examine the belly for bruising, swelling, hardness, tenderness, and seat belt marks.",
          "3. Check vital signs and urine output often, and chart every number with its time.",
          "4. Confirm two large bore IV (intravenous) lines are working and prepare for a CT (computed tomography) scan and blood tests.",
          "5. Reassess after every meaningful change and report the trend, not just one reading, to the provider."
        ],
        safetyPoints: [
          "A rising pulse with a slowly falling blood pressure often appears before the patient looks truly sick.",
          "Never clamp a chest tube unless ordered, and report a sudden stop in drainage with worsening breathing.",
          "A belly that grows bigger or harder, vomiting blood, or black or bloody stool needs reporting at once."
        ],
        workedExample: {
          context: "A 36-year-old woman arrives after a car crash, talking and smiling, with seat belt marks across her belly and a pulse that keeps climbing.",
          action: "The nurse repeats vital signs, checks the belly for swelling and hardness, watches urine output, confirms two large bore IV (intravenous) lines, and reports the rising pulse and falling blood pressure as one urgent picture.",
          outcome: "The team fast-tracks a CT (computed tomography) scan, finds internal bleeding early, and the patient is moved to surgery before she looks critically ill."
        },
        activity: {
          prompt: "A trauma patient looks well and is chatting, but the pulse has risen on three repeat checks and the blood pressure is slowly falling. What does that trend tell you, and how would you report it to the provider?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "Which early clue can appear before a patient with internal bleeding looks truly sick?",
          options: ["A rising pulse with a slowly falling blood pressure", "A belly that is soft and pain-free", "A normal urine output with a normal pulse"],
          answerIndex: 0,
          rationale: "A rising pulse with a slowly falling blood pressure often appears before the patient looks truly sick, which is why repeat vital signs and trends matter in trauma."
        }
      },
      {
        id: "ed-28",
        title: "Fractures, Dislocations and Splinting — Neurovascular Checks",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "A broken bone is painful, but the real danger is losing blood flow to the hand or foot beyond it. A fracture means a broken bone, and it can be closed with skin intact or open with bone or wound exposed. A dislocation means a joint pushed out of its normal place, and it can stretch nerves and blood vessels and needs urgent care. Neurovascular checks, checks of nerve function and blood flow, cover six ideas in plain words: color, warmth, feeling, movement, pulse, and how fast color returns after you press a nail, often called the six Ps of limb checks. Pain is the earliest warning: pain that keeps growing despite medicine, pain when the fingers or toes are gently moved, and a limb that feels tense and tight can signal compartment syndrome, dangerous pressure building inside a muscle space."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Look at the injured limb and compare it with the other side, noting swelling, bruising, deformity, wounds, and color, and ask where it hurts most, whether they can move the fingers or toes, and whether they feel numbness, tingling, or tight pressure building inside. Feel for a pulse beyond the injury and press a fingertip nail until it turns pale, then release: color should return within about two seconds in a healthy limb. Splinting, supporting the injured limb so it cannot move, protects bone ends, nerves, and vessels, so splint the joints above and below the injury, pad bony points, keep the limb in the position found, and support it with pillows during transport. Always do neurovascular checks before splinting and again right after splinting, then chart both sets."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Report a lost or weaker pulse, a limb turning pale blue or cold, new numbness, pain racing upward, swelling that grows fast, or bleeding you cannot control, and state which limb, what changed, and when your last normal check was done and charted. A splint that is too tight can cut off flow, so if feeling, color, or warmth worsens after splinting, loosen outer wraps per policy and report at once. For an open fracture, cover the wound with a clean sterile dressing, control bleeding with firm pressure, and do not push exposed bone back inside. Raise the injured limb on pillows above the level of the heart when allowed to limit swelling, apply cold packs with a barrier on the skin per orders, and give pain medicine as ordered, then reassess pain and neurovascular checks after it takes effect."
          }
        ],
        bedsideCues: [
          "A hand or foot turning pale, blue, or cold beyond the injury",
          "Numbness or tingling in the fingers or toes that was not there before",
          "Pain growing despite medicine, or pain when the fingers or toes are gently moved",
          "A limb that feels tense and tight, with swelling that grows fast"
        ],
        assessmentSequence: [
          "1. Compare the injured limb with the other side: swelling, bruising, deformity, wounds, and color.",
          "2. Do a full neurovascular check before splinting: color, warmth, feeling, movement, pulse, and color return after pressing a nail.",
          "3. Splint the joints above and below the injury, pad bony points, and keep the limb in the position found.",
          "4. Repeat the neurovascular check right after splinting and chart both sets.",
          "5. Raise the limb on pillows, give pain medicine as ordered, then reassess pain and neurovascular checks after it takes effect."
        ],
        safetyPoints: [
          "Always check nerve function and blood flow before splinting and again right after splinting.",
          "A splint that is too tight can cut off flow, so report worsening feeling, color, or warmth at once.",
          "For an open fracture, do not push exposed bone back inside; cover it, control bleeding, and report quickly."
        ],
        workedExample: {
          context: "A 24-year-old man arrives with a swollen, deformed forearm after a fall, able to wiggle his fingers but with a weak pulse at the wrist.",
          action: "The nurse checks color, warmth, feeling, movement, pulse, and nail color return, splints the joints above and below the injury with padding, then repeats the neurovascular check and reports the weak pulse.",
          outcome: "The repeat check shows the pulse is still weak but present, the team is alerted early, and the limb is protected from further nerve and vessel injury while definitive care is arranged."
        },
        activity: {
          prompt: "After splinting, the fingers below the injury turn pale and cool and the patient reports new numbness. What do you do first, and what do you tell the provider?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What does a neurovascular check cover in a limb injury?",
          options: ["Only the pulse beyond the injury", "Only whether the patient can move the fingers or toes", "Color, warmth, feeling, movement, pulse, and how fast color returns after pressing a nail"],
          answerIndex: 2,
          rationale: "A neurovascular check covers all six: color, warmth, feeling, movement, pulse, and color return after pressing a nail, often called the six Ps of limb checks."
        }
      },
      {
        id: "ed-29",
        title: "Burns — Rule of Nines, Depth, Fluids and When to Transfer",
        durationMinutes: 3,
        sections: [
          {
            heading: "Core Concept",
            content: "A burn that looks small can steal fluid, invite infection, and close an airway within hours, so the first hour of care shapes the whole recovery. Burn depth describes how far the injury goes: a surface burn is red and painful with no blisters, a partial thickness burn blisters and weeps, and a full thickness burn can look white, brown, or leathery and may hurt less because nerves are damaged. The rule of nines estimates burn size as a percent of total body surface area, the whole outside surface of the body. In adults, the head is 9 percent, each arm is 9 percent, the front of the trunk is 18 percent, the back of the trunk is 18 percent, each leg is 18 percent, and the private area is 1 percent, and only partial thickness and full thickness burns count toward the total for fluid planning."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Always think airway first with burns: soot around the mouth or nose, singed nose hairs, a hoarse voice, or burns from a closed-space fire warn that the airway may swell shut, so report these findings early, before breathing becomes a true emergency. Large burns leak fluid fast, so the team gives large amounts of IV (intravenous) fluid, and a common starting guide, often called the Parkland formula, uses the burn percent, the patient weight, and time from the injury to plan the rate, giving most of the first day fluid in the first 8 hours from the time of the burn, not from arrival. Tell the team the exact injury time whenever you know it. Urine output tells you if fluids are enough, and the team often aims for about 30 to 50 milliliters per hour in adults, so report output that falls, turns very dark, or stops completely."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Transfer to a burn center is likely for large burns, full thickness burns, burns of the face, hands, feet, joints, or private area, electrical or chemical burns, breathing injury, or burns in very young, old, or chronically ill patients, so prepare records early. Burn pain can be severe, so give pain medicine as ordered and reassess often. Cover burns with clean dry sheets or sterile dressings as directed, keep the patient warm, and avoid ice or cold soaking, which can drop body temperature dangerously low. Burned skin cannot block germs, so use careful hand cleaning and sterile technique for every dressing change, and watch for growing redness, pus, foul smell, fever, or rising pain, because infection in a burn wound spreads very fast."
          }
        ],
        bedsideCues: [
          "Soot around the mouth or nose, singed nose hairs, or a hoarse voice after a fire",
          "A burn that looks white, brown, or leathery and hurts less than expected",
          "Urine output falling, turning very dark, or stopping after a large burn",
          "Growing redness, pus, foul smell, or fever around a burn wound"
        ],
        assessmentSequence: [
          "1. Check the airway first for soot, singed nose hairs, hoarseness, or a closed-space fire history.",
          "2. Judge burn depth: red and painful with no blisters, blistering and weeping, or white, brown, or leathery.",
          "3. Estimate burn size with the rule of nines, counting only partial thickness and full thickness burns.",
          "4. Note the exact injury time, start IV (intravenous) fluids as ordered, and measure urine output every hour.",
          "5. Cover burns with clean dry sheets or sterile dressings, keep the patient warm, give pain medicine as ordered, and prepare for burn center transfer if criteria are met."
        ],
        safetyPoints: [
          "Airway swelling can close a burn patient's airway within hours, so report soot, singed hairs, or hoarseness early.",
          "Never use ice or cold soaking on burns, because it can drop body temperature dangerously low.",
          "The Parkland formula counts the first 8 hours from the time of the burn, not from arrival, so the exact injury time matters."
        ],
        workedExample: {
          context: "A 40-year-old man arrives with burns to the front of his trunk and one whole arm after a house fire, with soot around his mouth and a hoarse voice.",
          action: "The nurse reports the airway warning signs at once, estimates the burn size with the rule of nines, notes the exact injury time, starts IV (intravenous) fluids as ordered, and measures urine output every hour.",
          outcome: "The team secures the airway before swelling closes it, fluids are guided by urine output, and records are prepared early for transfer to a burn center."
        },
        activity: {
          prompt: "An adult patient has burns to the front of the trunk and one whole leg. Use the rule of nines to estimate the percent of total body surface area burned, and explain why only partial thickness and full thickness burns count toward that total.",
          type: "calculation"
        },
        knowledgeCheck: {
          question: "Using the rule of nines in an adult, what percent is the front of the trunk?",
          options: ["9 percent", "18 percent", "36 percent"],
          answerIndex: 1,
          rationale: "In adults, the front of the trunk is 18 percent, the back of the trunk is also 18 percent, each arm is 9 percent, and each leg is 18 percent."
        }
      },
      {
        id: "ed-30",
        title: "Wound Care in the ED — Irrigation, Dressings, Sutures Assist and Tetanus",
        durationMinutes: 3,
        sections: [
          {
            heading: "Core Concept",
            content: "Almost every shift brings a cut that needs cleaning, closing, and the right protection, and done well, wound care prevents infection and helps skin heal cleanly. Start with a careful first look: ask how it happened, when it happened, and whether dirt, glass, wood, or metal may still be inside. Check movement, feeling, and blood flow beyond the wound, and note bleeding, swelling, redness, and the wound edges. Irrigation, washing the wound with a steady stream of clean fluid, is the most important step to prevent infection, so use the ordered fluid and pressure, wash from the cleanest area outward, and keep going until the wound looks clean throughout."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Wash or sanitize your hands, put on the right gloves, set up a clean field, and gather irrigation fluid, dressings, tape, and a basin before you start, so you never leave mid-procedure to hunt supplies. The provider may use a local anesthetic, medicine that numbs a small area of skin, before cleaning or closing, so warn the patient about a brief sting, stay close, and watch for allergy signs. A dressing, the clean covering placed over a wound, keeps germs out and absorbs drainage, so choose the type ordered, cover the whole wound with a small margin of clean skin, and secure it without pulling tight. For sutures, stitches that hold wound edges together, set up the sterile tray, keep your hands outside the sterile field, pass tools as asked, hold a light steady, and help keep the patient still and comforted."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Tetanus, a serious infection that causes painful muscle stiffness and can enter through a wound, is prevented by vaccine, so ask when the patient last had a tetanus shot. Many adults need a booster if more than 10 years have passed since the last one, and for dirty or high-risk wounds a booster may be needed sooner, often if more than 5 years have passed. If the patient never completed the first vaccine series, the team may also give tetanus immune globulin, a ready-made antibody protection shot. After closing, recheck feeling, movement, and blood flow, and teach the patient to return for fever, spreading redness, pus, opening edges, or pain that grows instead of slowly getting better each day."
          }
        ],
        bedsideCues: [
          "Dirt, glass, wood, or metal that may still be inside the wound",
          "Loss of feeling, movement, or blood flow beyond the wound",
          "Spreading redness, pus, or pain that grows instead of slowly improving",
          "A wound with edges that open after closing"
        ],
        assessmentSequence: [
          "1. Ask how and when the injury happened and whether foreign material may still be inside.",
          "2. Check movement, feeling, and blood flow beyond the wound, and note bleeding, swelling, and redness.",
          "3. Clean your hands, set up a clean field, and gather irrigation fluid, dressings, tape, and a basin.",
          "4. Irrigate from the cleanest area outward until the wound looks clean throughout.",
          "5. Assist with closing, recheck feeling, movement, and blood flow, apply the dressing, check tetanus status, and teach home care."
        ],
        safetyPoints: [
          "Irrigation is the most important step to prevent infection, so keep washing until the wound looks clean throughout.",
          "Ask about tetanus status for every wound, and flag dirty wounds where a booster may be due sooner than 10 years.",
          "After closing, always recheck feeling, movement, and blood flow beyond the wound."
        ],
        workedExample: {
          context: "A 31-year-old woman arrives with a deep cut on her hand from broken glass, unsure whether any glass is still inside, and her last tetanus shot was 12 years ago.",
          action: "The nurse checks movement, feeling, and blood flow beyond the wound, irrigates from the cleanest area outward until the wound looks clean, assists with sutures while keeping hands outside the sterile field, and flags the tetanus booster as due.",
          outcome: "The wound is clean and closed, feeling and blood flow are intact, the tetanus booster is given, and she leaves knowing how to keep the dressing dry and when to return."
        },
        activity: {
          prompt: "A patient with a dirty wound says their last tetanus shot was 7 years ago. What do you need to check, and how would you explain to the patient why a booster may be needed sooner for this kind of wound?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "When do many adults need a tetanus booster after a wound?",
          options: ["If more than 10 years have passed since the last shot, or more than 5 years for a dirty or high-risk wound", "Only if they have never had any tetanus shot at all", "Only after a wound that needed stitches"],
          answerIndex: 0,
          rationale: "Many adults need a booster if more than 10 years have passed since the last shot, and for dirty or high-risk wounds a booster may be needed sooner, often if more than 5 years have passed."
        }
      }
    ]
  }
};
