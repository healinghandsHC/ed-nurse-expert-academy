import type { Lesson, ModuleContent } from "./types";

export const ED_CONTENT_D: Record<string, ModuleContent> = {
  "ed-toxicology": {
    moduleId: "ed-toxicology",
    lessons: [
      {
        id: "ed-43",
        title: "The Overdose Patient — Toxidromes, Naloxone and Safe Monitoring",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "An overdose patient can look sleepy and stable, then stop breathing in the next minute. Your first job is never the drug name. Your first job is breathing, circulation, and safety, in that order, every time. A toxidrome (a pattern of signs that points to a class of poison) helps you name the problem before lab results return. Pupil size, skin moisture, bowel sounds, temperature, pulse, and mental state form the pattern, so read the whole pattern, not one sign alone."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Check responsiveness first, then look at breathing rate and depth, because slow, shallow breathing is the killer in most overdoses. Open the airway, give oxygen as ordered, and be ready to breathe for the patient with a bag valve mask (a hand-squeezed bag that pushes air into the lungs). Put the patient on a heart monitor, check blood sugar early with a finger stick test, and repeat vital signs often, since low blood sugar can mimic an overdose. Ask what was taken, how much, when, and whether alcohol or other drugs were mixed in, in a plain, kind tone, and check for patches, pill bottles, and belongings following unit policy. Call Poison Control, the national expert service that advises on poisonings by phone, early and for every significant exposure, and give them the substance, the amount, the time, the patient age and weight, and the current symptoms."
          },
          {
            heading: "Red Flags and Escalation",
            content: "The opioid toxidrome is a classic triad, which means three signs together: pinpoint pupils (pupils squeezed down to tiny dots), slowed or stopped breathing, and a lowered level of consciousness, meaning the patient is hard to wake. Naloxone is the antidote (a medicine that reverses another medicine) for opioids, and it can be given into a vein, into a muscle, or as a spray in the nose. Titration (giving small doses and adjusting by response) aims for good breathing, not a fully wide-awake patient. Naloxone often wears off faster than the opioid does, so a patient who wakes up can slide back into slow breathing, and you must be ready to repeat doses or start a drip as ordered. Never leave a reversed patient alone and unmonitored."
          }
        ],
        bedsideCues: [
          "Pinpoint pupils with slow, shallow breathing and a patient who is hard to wake",
          "Racing pulse, high temperature, sweating, and agitation in a stimulant pattern",
          "Heavy drooling, tearing, and diarrhea in a cholinergic pattern",
          "Sleepiness and slurred speech in a sedative pattern"
        ],
        assessmentSequence: [
          "1. Check responsiveness, then breathing rate and depth, before asking about the drug.",
          "2. Open the airway, apply oxygen as ordered, and keep a bag valve mask within reach.",
          "3. Put the patient on the heart monitor and check blood sugar with a finger stick test.",
          "4. Read the full toxidrome: pupils, skin moisture, bowel sounds, temperature, pulse, and mental state.",
          "5. Get the history of what, how much, and when, then call Poison Control with those details."
        ],
        safetyPoints: [
          "Never leave a patient reversed with naloxone alone and unmonitored, because naloxone can wear off before the opioid does.",
          "Titrate naloxone to good breathing, not to fully awake, and keep watching breathing and alertness after every dose.",
          "Call Poison Control early for every significant exposure and follow their guidance on labs, observation time, and antidotes."
        ],
        workedExample: {
          context: "A patient is brought in barely responsive, breathing slowly and shallowly, with pinpoint pupils and a pill bottle beside the bed.",
          action: "The nurse opens the airway, gives oxygen, puts the patient on the monitor, checks blood sugar, and gives small titrated doses of naloxone until breathing rate and depth recover, then stays at the bedside watching breathing and alertness.",
          outcome: "Breathing improves and the patient becomes more responsive, and because monitoring continues, a dip in breathing later is caught early and treated before it becomes an arrest."
        },
        activity: {
          prompt: "Picture a patient with pinpoint pupils, slow breathing, and drowsiness. What is the first thing you do, and why does the drug name come second?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "A patient has pinpoint pupils, breathing that is slow and shallow, and is hard to wake. What is the priority?",
          options: [
            "Ask the family for the exact pill count before doing anything else",
            "Protect breathing and give titrated naloxone to restore good breathing",
            "Give one large dose of naloxone to wake the patient fully right away"
          ],
          answerIndex: 1,
          rationale: "Slow breathing is the killer in opioid overdose, and naloxone is titrated in small doses to good breathing, not to fully awake."
        }
      },
      {
        id: "ed-44",
        title: "Acetaminophen and Salicylate Poisoning — Levels, Timing and Antidotes",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Acetaminophen, sold as Tylenol and hidden inside dozens of combination cold and pain products, is the overdose that whispers. The patient often feels fine at first while the drug quietly injures the liver. Your timeline questions and one well-timed blood level drive the whole case. The acetaminophen level is drawn at least four hours after the pills were swallowed, because earlier levels cannot be judged fairly, and the result is plotted on a standard treatment chart that compares level against hours since ingestion. Salicylate poisoning means too much aspirin or a similar drug, and its early clues are ringing in the ears, nausea and vomiting, sweating, fever, and breathing that is fast and deep."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Ask exactly what was taken, how much, and at what time, including every other medicine in the house, and bring the bottles to the bedside. A staggered overdose, spread over many hours, and an overdose mixed with alcohol both change the risk, so document the story carefully. Draw the acetaminophen level at least four hours after ingestion and follow the liver blood tests and a clotting time test, because together they show how well the liver is still working. The antidote is N-acetylcysteine, called NAC, given by vein or by mouth, and it works best within eight hours but still helps later, so never skip it for lateness alone. For salicylate poisoning, treatment uses intravenous fluids with sodium bicarbonate, a base that makes the urine more alkaline so the kidneys can trap the aspirin and flush it out, and potassium must be replaced for this to work. Repeat salicylate levels every few hours until they clearly fall, because coated pills can dissolve slowly and push the level up late."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Rising liver numbers with worsening clotting over the first two days mark a liver in real trouble, so report that trend at once and let the team plan ahead. For salicylate poisoning, the fast breathing blows off carbon dioxide and makes the blood too alkaline at first, and later the poison itself builds acid in the blood and the balance flips, so a blood gas test, which measures oxygen, carbon dioxide, and acidity, is repeated often to track which way the patient is heading. Report any new confusion or slowing of the breathing right away, and watch breathing, temperature, and mental status between draws. Severe salicylate poisoning is treated with hemodialysis, where a machine filters the blood outside the body, and very high levels, confusion, kidney failure, or fluid in the lungs are the triggers, so prepare the patient and family early. Call Poison Control early for both poisonings, and arrange a suicide risk screening whenever the overdose may have been on purpose."
          }
        ],
        bedsideCues: [
          "A patient who feels fine but reports a large acetaminophen dose taken hours ago",
          "Ringing in the ears with fast, deep breathing after an aspirin overdose",
          "Nausea, vomiting, sweating, and fever that worsen over hours",
          "New confusion or slowing breathing in a patient who was breathing fast and talking earlier"
        ],
        assessmentSequence: [
          "1. Get the exact products, amounts, and time of ingestion, including combination products and alcohol.",
          "2. Record the ingestion time clearly so the acetaminophen level is drawn at least four hours after swallowing.",
          "3. Draw ordered labs, including the acetaminophen level, liver tests, clotting time, and blood gas when ordered.",
          "4. Watch breathing pattern, alertness, vomiting, temperature, and hearing changes, and repeat the assessment often.",
          "5. Call Poison Control with the substance, amount, time, age, weight, and symptoms, and confirm the repeat-level and observation plan."
        ],
        safetyPoints: [
          "Never reassure based on how well the patient looks: acetaminophen injures the liver silently, and salicylate levels can keep rising.",
          "Time every level from the ingestion time, not from arrival, and repeat salicylate levels until they clearly fall.",
          "Escalate at once for new confusion, slowing breathing, or worsening liver and clotting tests."
        ],
        workedExample: {
          context: "A patient says a large number of acetaminophen tablets were taken about two hours ago and feels fine.",
          action: "The nurse records the exact time and amount, checks all the products taken, draws labs as ordered, makes sure the acetaminophen level is timed from ingestion at four hours, and calls Poison Control.",
          outcome: "The level comes back in the range that needs treatment, N-acetylcysteine is started as ordered, and the liver injury is treated before symptoms ever appear."
        },
        activity: {
          prompt: "A patient swallowed acetaminophen one hour ago and the level drawn now is low. What does that result tell you, and what do you do next?",
          type: "interpretation"
        },
        knowledgeCheck: {
          question: "Why is the exact time of an acetaminophen ingestion so important?",
          options: [
            "Because the treatment level is timed from ingestion, with the key level drawn at least four hours after swallowing",
            "Because acetaminophen stops being dangerous after four hours no matter the amount",
            "Because the level is only accurate if drawn within the first thirty minutes"
          ],
          answerIndex: 0,
          rationale: "The acetaminophen blood level is interpreted against time since ingestion, and the four-hour level guides whether antidote treatment is needed."
        }
      },
      {
        id: "ed-45",
        title: "Alcohol — Intoxication, Withdrawal and CIWA Scoring",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Alcohol withdrawal is one of the few withdrawal syndromes that can kill a patient who looked fine at triage. The brain adapts to daily alcohol, which acts like a brake. When drinking stops suddenly, that brake lifts and the brain speeds up too far, and the result is an overactive nervous system. Tremor, sweating, fast pulse, and rising blood pressure are the body running without its usual brake. Mild symptoms can start within hours of the last drink, seizures, which are sudden bursts of uncontrolled electrical activity in the brain, most often appear in the first two days, and the most dangerous stage tends to come later, so a calm first hour never clears a heavy daily drinker."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Score withdrawal with the CIWA (Clinical Institute Withdrawal Assessment for Alcohol), a scoring tool that turns symptoms into a number. You rate ten items, add the scores, and use the total to guide treatment, and the same nurse scoring the same way each time keeps the trend honest. The scale rates nausea, tremor, sweating, anxiety, and agitation, plus headache, disturbed touch, disturbed hearing, and disturbed vision, and the last item is orientation, which means whether the patient knows who they are, where they are, and what day it is. Symptom-triggered care means medicine is given when the score crosses a set level, then the patient is rescored, and this approach treats the patient in front of you instead of giving fixed doses on a clock. The main medicines are benzodiazepines, which are calming medicines that slow an overactive brain in a way similar to alcohol, but safer and controlled, given as ordered and tapered as scores fall. Give thiamine, which is vitamin B1, to protect the brain before sugar-containing fluids, as ordered, and correct fluids and salts guided by blood work that checks salts, sugar, and the liver."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Low scores mean mild withdrawal and close watching, middle-range scores mean treatment is usually needed now, and high scores mean severe withdrawal and a real risk of seizures and delirium, which means severe confusion with agitation and disorientation. Scores are a trend, not a snapshot, so repeat the scale on the schedule your orders set. The most severe form is delirium tremens, which means a dangerous state of confusion, shaking, fever, and a racing heart that can appear days after the last drink. These patients need a monitored bed, large and frequent medicine doses as ordered, and a search for infection or other hidden causes. Watch breathing and level of consciousness closely after every benzodiazepine dose, keep the room calm with lights low, reorient the patient often, and escalate fast for a seizure, worsening confusion, fever, or a rapidly rising heart rate."
          }
        ],
        bedsideCues: [
          "Shaking hands, sweating, and a fast pulse hours after the last drink",
          "Rising anxiety and agitation with a climbing CIWA score over repeat checks",
          "Nausea, headache, and seeing or hearing things that are not there",
          "Fever, severe confusion, and a racing heart days after drinking stopped"
        ],
        assessmentSequence: [
          "1. Ask when the last drink was, how much the patient drinks daily, and whether withdrawal or seizures happened before.",
          "2. Do a full CIWA score, rating all ten items the same way each time, and record the total.",
          "3. Check vital signs, blood sugar, and ordered labs for salts, sugar, and liver function.",
          "4. Give ordered medicines by the score, including thiamine before sugar-containing fluids, and watch breathing and alertness after every dose.",
          "5. Repeat the CIWA on schedule, track the trend, and escalate for rising scores, seizure, or delirium."
        ],
        safetyPoints: [
          "A calm first hour never clears a heavy daily drinker: seizures peak in the first two days and delirium tremens can come later.",
          "Score, treat by the score, then score again: scores are a trend, not a snapshot.",
          "Watch breathing and consciousness closely after every benzodiazepine dose, and keep the room calm with lights low."
        ],
        workedExample: {
          context: "A patient who drinks daily arrives shaky and sweating, eight hours after the last drink, with a rising pulse and blood pressure.",
          action: "The nurse scores the patient with the CIWA, finds a middle-range score, gives the ordered benzodiazepine, gives thiamine before sugar-containing fluids, and repeats the CIWA on schedule.",
          outcome: "Tremor and agitation settle, scores fall over the next hours, and no seizure occurs because treatment followed the trend instead of waiting for the patient to look worse."
        },
        activity: {
          prompt: "Your patient scores low on the CIWA at triage but drinks a large amount every day. What do you watch for over the next two days, and why do you keep rescoring?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What does the CIWA score guide in alcohol withdrawal care?",
          options: [
            "It replaces the need to check vital signs or blood sugar",
            "It proves the patient is safe to leave once the score is low at triage",
            "It turns ten withdrawal symptoms into a number that guides when to treat and when to rescore"
          ],
          answerIndex: 2,
          rationale: "The CIWA rates ten items, and symptom-triggered care uses the total to decide treatment, then rescoring tracks the trend."
        }
      },
      {
        id: "ed-46",
        title: "Heat Stroke, Hypothermia and Drowning — Environmental Emergencies",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "The environment itself can be the emergency. A body that gets too hot, too cold, or goes under water can fail fast, and minutes decide the outcome. Heat illness runs on a spectrum. Heat cramps are painful muscle spasms after sweating in the heat. Heat exhaustion means heavy sweating, weakness, nausea, and a normal or mildly raised temperature, and both are warnings that the body can slide toward the life-threatening end of the spectrum. Heat stroke is the dangerous end: the core temperature, which means the temperature deep inside the body, rises very high, often above 105 degrees Fahrenheit, the skin may be hot and dry, and the key sign is confusion or collapse. Hypothermia means a core temperature below 95 degrees Fahrenheit, and drowning means breathing is impaired by being under water, with lack of oxygen as the core problem."
          },
          {
            heading: "What the ED Nurse Does",
            content: "For heat stroke, the rule is cool first, transport and testing second, because cooling within the first minutes protects the brain and organs. The fastest method is cold water immersion, which means placing the body in cold water up to the neck, and wetting the whole body with fanning also works when immersion is not possible. Measure temperature with a core probe, often placed in the rectum, because skin and mouth readings lag behind, and keep cooling until the core temperature falls to about 102 degrees Fahrenheit, then ease off to avoid overshooting into cold. Give fluids through an intravenous line, called an IV line, as ordered. For hypothermia, remove wet clothing, dry the skin, cover the patient with warm blankets, and give warmed intravenous fluids and warm moist oxygen. For drowning, rescue breaths and oxygen come first, then airway support, warming, and checks for injuries to the neck and spine when the story involves diving, falls, or a crash."
          },
          {
            heading: "Red Flags and Escalation",
            content: "A hot patient who is not thinking clearly has heat stroke until proven otherwise, so report confusion or collapse in a hot patient at once. The cold heart is irritable, meaning rough handling can trigger a deadly rhythm, so move hypothermic patients gently and keep them lying flat. A very cold patient may look lifeless yet still be revivable once warmed in the hospital, so do not give up early. A drowning patient who looks well still needs watching, because water in the lungs can cause breathing trouble hours later, as fluid leaks into the air sacs and oxygen levels fall. Monitor breathing rate, oxygen levels, and mental state, get a chest picture as ordered, and report any new cough, foam, or fast breathing. Document the exposure: how long the patient was in the heat, the cold, or the water, what the scene temperature was, and what bystanders did before arrival."
          }
        ],
        bedsideCues: [
          "Hot, dry skin with confusion or collapse after heat exposure",
          "Heavy sweating, weakness, and nausea with a normal or mildly raised temperature",
          "A cold, still patient who looks lifeless after cold water or exposure",
          "A drowning patient who looks well at first, then develops cough, foam, or fast breathing hours later"
        ],
        assessmentSequence: [
          "1. Check airway, breathing, and responsiveness first, and give oxygen or rescue breaths for drowning.",
          "2. Get a core temperature with a core probe and record the method used.",
          "3. Start cooling at once for heat stroke, or gentle warming for hypothermia, and give intravenous fluids as ordered.",
          "4. Record the exposure: how long in the heat, cold, or water, the scene temperature, and what bystanders did.",
          "5. Reassess temperature, breathing rate, oxygen levels, and mental state often, and report any new cough, foam, or fast breathing."
        ],
        safetyPoints: [
          "Cool heat stroke first and fast, and keep cooling until the core temperature falls to about 102 degrees Fahrenheit.",
          "Handle a hypothermic patient gently and keep them flat: the cold heart is irritable and rough handling can trigger a deadly rhythm.",
          "A drowning patient who looks well still needs hours of watching, because breathing trouble can appear late."
        ],
        workedExample: {
          context: "A roofer is carried in confused with hot, dry skin after working all afternoon in extreme heat.",
          action: "The nurse gets a core temperature, starts cold water immersion right away, gives intravenous fluids as ordered, and keeps cooling until the core temperature falls to about 102 degrees Fahrenheit.",
          outcome: "Confusion clears as the temperature falls, and early cooling protects the brain and organs from lasting damage."
        },
        activity: {
          prompt: "A patient pulled from a pool is awake, talking, and breathing comfortably. Why does this patient still need monitoring, and what three changes would make you escalate?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What is the priority action for a confused patient with a core temperature above 105 degrees Fahrenheit?",
          options: [
            "Finish all blood tests and imaging before starting any cooling",
            "Cool first and fast, using cold water immersion when possible",
            "Give only oral fluids and wait to see if the confusion clears on its own"
          ],
          answerIndex: 1,
          rationale: "Cooling within the first minutes protects the brain and organs in heat stroke, so cooling comes before transport and testing."
        }
      },
      {
        id: "ed-47",
        title: "Bites and Stings — Dogs, Snakes, Spiders and Rabies Decisions",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Bites and stings walk in looking small and can turn serious fast. Dog teeth, cat teeth, snake fangs, and insect stingers each carry a different danger, from infection to venom to rabies. Your first questions sort which danger this patient actually faces in the next hours. Rabies is a virus carried in animal saliva that travels along nerves to the brain. Once symptoms begin it is almost always fatal, yet after a bite it is fully preventable, and that is why every bite from a wild animal, bat, or unknown dog starts the rabies conversation immediately."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Start with the wound itself. Wash bites with plenty of soap and clean running water, and irrigate, which means flushing with a steady stream of fluid, to wash germs out. Control bleeding with direct pressure, check movement and feeling, and ask when the last tetanus shot was given. Dog bites tear and crush tissue, and larger dogs can fracture bone or injure joints, especially in children, and most dog bite wounds are left open rather than stitched at first, because closing traps germs inside, while face wounds are the exception and are often closed for appearance after thorough cleaning. Cat bites look tiny and are treacherous, because thin sharp teeth puncture deep and seed germs beside tendons and joints, and hands are the classic site, so cat bites and hand bites usually get preventive antibiotics. Treat human bites with suspicion, especially the fight bite, where a fist strikes teeth and the wound over the knuckle looks harmless but seeds the joint with mouth germs, so report them early and keep the hand elevated. For a snake bite, keep the patient still and calm, hold the limb at heart level, and remove rings and tight clothing before swelling starts. Mark the edge of the swelling with a pen and write the time beside it, because spreading swelling guides the antivenom decision."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Unlearn the movie first aid: never apply a tourniquet, never cut the wound or suck out venom, never pack the bite in ice, and never give alcohol, because each of these harms tissue or delays real care. A photo of the snake from a safe distance helps identification. Most spider bites cause only local soreness, but the black widow can bring spreading muscle cramps and belly pain, while the brown recluse can leave a skin wound that darkens and widens over days. Bee and wasp stings kill through allergy, so watch every sting patient for a closing airway. Anaphylaxis, which means a severe whole-body allergic reaction, is treated with epinephrine first, injected into the thigh muscle, before antihistamines or steroids, so hives, swelling of the lips or tongue, wheezing, or falling blood pressure after a sting means act now and keep watching, because reactions can return hours later. Post-exposure protection means treatment after the bite, and a patient never vaccinated gets a series of rabies vaccine shots plus rabies immune globulin, an antibody medicine placed into and around the wound, so report the bite to animal control and record the animal description and owner details in the chart."
          }
        ],
        bedsideCues: [
          "A dog bite with torn, crushed tissue and bleeding, especially in a child",
          "A tiny cat bite puncture on the hand that is already swelling and stiff",
          "A snake bite with swelling that keeps spreading past the pen mark over time",
          "Hives, lip or tongue swelling, and wheezing after a bee or wasp sting"
        ],
        assessmentSequence: [
          "1. Check airway, breathing, and circulation first, and treat anaphylaxis with epinephrine as ordered before anything else.",
          "2. Wash and irrigate the wound, control bleeding with direct pressure, and check movement and feeling.",
          "3. Get the exposure history: what animal or insect, when it happened, known or stray, and tetanus status.",
          "4. For a snake bite, keep the limb still at heart level, remove rings and tight clothing, and mark the swelling edge with the time.",
          "5. Start the rabies conversation at once for wild animal, bat, or unknown dog bites, and report the bite to animal control."
        ],
        safetyPoints: [
          "Never apply a tourniquet, cut the wound, suck out venom, pack the bite in ice, or give alcohol after a snake bite.",
          "Treat lip, tongue, or throat swelling after a sting as anaphylaxis and give epinephrine first into the thigh muscle.",
          "Never dismiss a bat or wild animal bite: rabies prevention must be decided urgently, because rabies is fatal once symptoms appear."
        ],
        workedExample: {
          context: "A hiker arrives with a swollen, painful calf after a snake bite on a trail, with swelling spreading up the leg.",
          action: "The nurse keeps the leg still at heart level, removes the shoe and watch band before swelling worsens, marks the swelling edge with the pen and time, puts the patient on the monitor, and gets the provider involved for the antivenom decision.",
          outcome: "The spreading swelling is tracked clearly, antivenom is given as ordered, and the leg is monitored closely without any harmful first-aid measures."
        },
        activity: {
          prompt: "A patient says a bat flew into the bedroom overnight and they are not sure if it bit them. Why is this urgent, and what questions and notifications come first?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What is the correct first aid for a snake bite while waiting for the provider?",
          options: [
            "Keep the limb still at heart level, remove tight items, and mark the swelling edge with the time",
            "Apply a tight tourniquet above the bite and cut the wound to drain the venom",
            "Suck the venom out of the wound and then pack the bite in ice"
          ],
          answerIndex: 0,
          rationale: "Keeping the limb still at heart level slows venom spread, and marking swelling tracks progression, while tourniquets, cutting, suction, and ice cause harm."
        }
      }
    ]
  },
  "ed-ob-peds": {
    moduleId: "ed-ob-peds",
    lessons: [
      {
        id: "ed-48",
        title: "Pregnancy Emergencies — Ectopic Pregnancy, Bleeding and Preeclampsia",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Bleeding in early pregnancy is an emergency until a dangerous cause is ruled out. An ectopic pregnancy means the pregnancy has implanted outside the uterus (the womb), most often in a fallopian tube (the tube that carries the egg to the uterus), and if it ruptures (bursts), it can cause life-threatening internal bleeding. Later in pregnancy, preeclampsia is a dangerous condition with high blood pressure and signs that organs are under stress, usually appearing after 20 weeks of pregnancy and sometimes days after birth. Both conditions can turn a stable-looking patient into a critical one quickly, so pain, bleeding amount, and blood pressure all matter."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Ask the date of the last menstrual period, the amount and color of bleeding, the location and severity of pain, and whether there is dizziness, fainting, or shoulder-tip pain, which can signal internal bleeding. Put the patient on the monitor, check vital signs and blood pressure often, get intravenous access, and draw labs as ordered, including a pregnancy hormone test (beta-hCG, human chorionic gonadotropin), blood type, and blood count. Prepare the patient for an ultrasound (a scan that uses sound waves to show the pregnancy) as ordered, and keep the patient resting with nothing by mouth if surgery is possible. For preeclampsia, check blood pressure often, watch for headache, vision changes, and pain high in the belly, and give magnesium sulfate (a medicine that prevents seizures in preeclampsia) only as ordered."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Report severe one-sided abdominal pain, shoulder-tip pain, dizziness, fainting, or a falling blood pressure at once, because these can mean a ruptured ectopic pregnancy with internal bleeding. Learn the preeclampsia danger signs cold: a severe headache, vision changes, pain high in the belly, sudden swelling, shortness of breath, and very high blood pressure all warn that the mother could seize, so report them at once and keep checking them often. Watch closely for magnesium toxicity (too much magnesium in the body) when magnesium sulfate is running, with warning signs of weak reflexes, slow breathing, low blood pressure, and feeling very flushed or weak. Keep the room seizure ready with an intravenous line, oxygen and suction at the bedside, padded rails, dim lights, and the mother on her side if she seizes."
          }
        ],
        bedsideCues: [
          "Vaginal bleeding with severe one-sided abdominal pain in early pregnancy",
          "Shoulder-tip pain, dizziness, or fainting with a positive pregnancy test",
          "A severe headache, vision changes, and very high blood pressure after 20 weeks",
          "Sudden swelling, pain high in the belly, and shortness of breath in a pregnant patient"
        ],
        assessmentSequence: [
          "1. Check vital signs and blood pressure at once, put the patient on the monitor, and get intravenous access.",
          "2. Ask the last menstrual period, bleeding amount, pain location, and whether there is dizziness, fainting, or shoulder-tip pain.",
          "3. Draw ordered labs, including the pregnancy hormone test, blood type, and blood count.",
          "4. Prepare for ultrasound as ordered and keep the patient resting with nothing by mouth if surgery is possible.",
          "5. Reassess blood pressure, pain, bleeding, and preeclampsia warning signs often, and report changes immediately."
        ],
        safetyPoints: [
          "Treat vaginal bleeding with severe one-sided pain as a possible ruptured ectopic pregnancy until proven otherwise.",
          "Report preeclampsia warning signs at once: severe headache, vision changes, upper belly pain, sudden swelling, or shortness of breath.",
          "When magnesium sulfate is running, watch reflexes, breathing, and blood pressure closely for toxicity."
        ],
        workedExample: {
          context: "A woman at 7 weeks of pregnancy arrives with vaginal bleeding, severe pain on one side of her belly, and dizziness when she stands.",
          action: "The nurse puts her on the monitor, gets intravenous access, draws the pregnancy hormone test, blood type, and blood count, prepares her for ultrasound, and reports the one-sided pain and dizziness to the provider at once.",
          outcome: "The ultrasound shows an ectopic pregnancy, the team acts before rupture, and the patient is stabilized with the right treatment plan in place."
        },
        activity: {
          prompt: "A pregnant patient has a severe headache, blurred vision, and a very high blood pressure. What do you report first, and how do you make the room seizure ready?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "A patient in early pregnancy has vaginal bleeding, severe one-sided abdominal pain, and shoulder-tip pain. What does this suggest?",
          options: [
            "A normal early pregnancy that only needs reassurance",
            "A urinary infection that can wait for routine care",
            "A possible ectopic pregnancy with internal bleeding that needs urgent action"
          ],
          answerIndex: 2,
          rationale: "Severe one-sided pain with bleeding and shoulder-tip pain can mean a ruptured ectopic pregnancy, which causes life-threatening internal bleeding."
        }
      },
      {
        id: "ed-49",
        title: "Imminent Delivery in the ED — Precipitous Birth Basics and Newborn First Steps",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Imminent delivery means birth is about to happen, and there is no time to move the mother upstairs. A precipitous birth is a very fast birth, and your job is to stay calm, call for help, and support a safe birth in the room you are in. Two patients are in that room at once, the mother and the baby, so assign one nurse to the mother and one nurse to the baby. Most newborns breathe well with drying and warmth alone, but a limp or non-breathing baby needs help at once. Preeclampsia and heavy bleeding after birth can also appear in this same room, so keep watching the mother after the baby is born."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Call for help early and ask for the provider, extra nurses, and the obstetric team (the pregnancy and birth specialists). Bring the delivery kit and the newborn warmer to the bedside. Signs that birth is near include strong close contractions, an urge to push, pressure in the rectum, and crowning (the baby's head stays visible at the opening). Stay calm, keep the mother on the bed, and never try to hold the baby back. Support the birth as the provider guides the head and body out slowly, note the exact time of birth, place the baby skin to skin on the mother's chest, dry and warm the baby, and watch breathing, color, and muscle tone right away. Keep the baby level with the mother until the cord is clamped and cut by the provider."
          },
          {
            heading: "Red Flags and Escalation",
            content: "If the baby is limp or not breathing, call for newborn help and start the steps you were trained in, because minutes matter. Watch the mother for preeclampsia danger signs: a severe headache, vision changes, pain high in the belly, sudden swelling, shortness of breath, and very high blood pressure all warn that she could seize, so report them at once. Magnesium sulfate is a medicine given to prevent seizures in preeclampsia, and warning signs of too much magnesium are weak reflexes, slow breathing, low blood pressure, and feeling very flushed or weak, so report them fast. Postpartum bleeding means heavy blood loss after birth, and it can turn into shock quickly, so call for help, start fundal massage (rubbing the top of the uterus until it feels firm), weigh pads and linens to measure blood loss, keep the bladder empty, give fluids and ordered medicines, and draw labs (blood tests). Reassess blood pressure and pulse often."
          }
        ],
        bedsideCues: [
          "Strong close contractions with an urge to push and pressure in the rectum",
          "Crowning, with the baby's head staying visible at the opening",
          "A newborn who is limp, blue, or not breathing after birth",
          "Heavy bleeding after birth with a soft uterus that does not squeeze down"
        ],
        assessmentSequence: [
          "1. Call for help early: provider, extra nurses, and the obstetric team, and bring the delivery kit and newborn warmer to the bedside.",
          "2. Assign one nurse to the mother and one nurse to the baby before the birth happens.",
          "3. Support the birth as the provider guides the head and body out slowly, and note the exact time of birth.",
          "4. Place the baby skin to skin, dry and warm the baby, and check breathing, color, and muscle tone right away.",
          "5. Watch the mother for heavy bleeding and preeclampsia signs, check the uterus for firmness, and weigh pads and linens to measure blood loss."
        ],
        safetyPoints: [
          "Never try to hold the baby back, and never move a crowning mother to another unit.",
          "If the baby is limp or not breathing, call for newborn help at once and start your trained newborn steps.",
          "Watch for heavy bleeding after birth: a soft uterus, falling blood pressure, and rising pulse need help now."
        ],
        workedExample: {
          context: "A woman arrives gripping the stretcher and bearing down with every contraction, and the baby's head is visible at the opening.",
          action: "The nurse calls for the provider and the obstetric team, brings the delivery kit and newborn warmer to the bedside, assigns one nurse to the mother and one to the baby, and supports the birth as the provider guides the baby out.",
          outcome: "The baby is born in the ED, placed skin to skin, dried and warmed, and begins breathing well, while the mother is watched closely for bleeding."
        },
        activity: {
          prompt: "Birth is imminent and the obstetric team is five minutes away. What do you bring to the bedside, who do you assign to the baby, and what do you never do?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "A mother is crowning in the ED and the obstetric team is on the way. What should the nurse do?",
          options: [
            "Try to hold the baby back and rush the mother upstairs",
            "Keep the mother on the bed, call for help, bring the delivery kit and warmer, and support the birth",
            "Leave the room to find the obstetric team and return alone"
          ],
          answerIndex: 1,
          rationale: "Birth is imminent, so the mother stays on the bed, help and equipment come to her, and the birth is supported, never held back."
        }
      },
      {
        id: "ed-50",
        title: "Sexual Assault Care — SANE Exams, Evidence, Consent and Compassion",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "A patient arrives after a sexual assault, which means sexual contact without consent. Your first job is not evidence. Your first job is safety, dignity, and choice. Trauma-informed care means care that protects control, trust, and emotional safety, and the patient leads every decision. Believe the patient, move slowly, and explain each step before it happens, because control was taken from them and your care should give it back."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Move the patient to a private, quiet room right away, introduce yourself, explain your role, and ask what they need most right now. Keep visitors and staff to the smallest number possible, and treat injuries and pain first, because medical care always comes before evidence collection. Ask permission before every step, every touch, and every exam, and explain what will happen, why it helps, and what choices the patient has. Call the SANE (Sexual Assault Nurse Examiner), a nurse with special training in assault care and evidence collection, and offer a trained advocate to stay and support the patient. Take the history gently and only as detailed as care requires, asking about the time of the assault, injuries, pain, medicines, allergies, and last period, and use the patient's own words in your notes, staying neutral and never asking questions that sound like blame."
          },
          {
            heading: "Red Flags and Escalation",
            content: "The patient may accept, pause, or decline any part of care at any time, and a clear no always stops the step, including during the exam itself. During the exam the examiner checks the whole body for injury, collects swabs, and photographs injuries only with consent, and the patient can have a support person nearby and can stop the exam at any point for any reason. Evidence is collected in a special sealed kit: each item is dried if needed, placed in paper packaging, labeled, and sealed, and wet items are never sealed in plastic because moisture can damage DNA (deoxyribonucleic acid, the genetic material in cells). Chain of custody means the signed record of every person who holds the evidence, from collection to police handoff, so the kit stays sealed, locked, and accounted for at all times, and any break in that record can weaken the case. Offer prevention care with clear explanations and consent, including medicines that lower the risk of sexually transmitted infections (infections passed through sexual contact), plus pregnancy prevention when it fits the timing, and protection against HIV (human immunodeficiency virus). Before discharge, build a safety plan with the patient, connect them with an advocate, follow-up care, counseling, and a safe place to go, and remember that reporting to police is the patient's choice in most adult cases, except where state law requires it."
          }
        ],
        bedsideCues: [
          "A patient who is quiet, shaking, or unable to say what they need right now",
          "Injuries or pain that need medical care before any evidence collection",
          "Clothing worn during the assault that may hold evidence",
          "A patient who says stop or no during any step of care or the exam"
        ],
        assessmentSequence: [
          "1. Move the patient to a private, quiet room, introduce yourself, and ask what they need most right now.",
          "2. Treat injuries and pain first, keeping staff and visitors to the smallest number possible.",
          "3. Ask permission before every step and touch, explain each choice, and call the SANE and offer an advocate.",
          "4. Take a gentle history using the patient's own words, asking only what care requires, and record it neutrally.",
          "5. Collect and protect evidence with consent, keep the chain of custody intact, and build a safety plan before discharge."
        ],
        safetyPoints: [
          "A clear no always stops the step: the patient may accept, pause, or decline any part of care at any time.",
          "Medical care comes before evidence collection, and wet items are never sealed in plastic because moisture damages DNA.",
          "Guard the chain of custody: the sealed kit stays locked and accounted for, with every transfer documented."
        ],
        workedExample: {
          context: "A patient arrives after a sexual assault, frightened and unsure whether an exam is wanted.",
          action: "The nurse moves the patient to a private room, treats injuries first, explains the SANE exam and the choices available without pressure, calls the SANE and offers an advocate, and asks permission before every step.",
          outcome: "The patient chooses to have the exam at a comfortable pace, evidence is collected and sealed correctly, and the patient leaves with a safety plan, follow-up care, and an advocate's contact."
        },
        activity: {
          prompt: "A patient says yes to the exam, then halfway through says stop. What do you do in that moment, and what do you say?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What comes first when caring for a patient after a sexual assault?",
          options: [
            "Safety, dignity, and choice, with medical care before evidence collection",
            "Collecting evidence as fast as possible before anything else",
            "Asking for a full detailed account of what happened before offering care"
          ],
          answerIndex: 0,
          rationale: "Trauma-informed care puts safety, dignity, and choice first, treats injuries before evidence, and lets the patient lead every step."
        }
      },
      {
        id: "ed-51",
        title: "The Pediatric Assessment Triangle — Sick vs Not Sick in Ten Seconds",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "A child can look fine and crash minutes later. The PAT (Pediatric Assessment Triangle), which means appearance, work of breathing, and circulation to the skin, is a fast across-the-room check. It needs no equipment and takes seconds, and it tells you sick or not sick before you ever touch the child. Appearance means tone, alertness, eye contact, cry, and how the child responds to a parent. A limp, glassy-eyed child who does not react is in danger even with normal numbers, while a playful child who tracks you and cries strongly is reassuring."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Look first from the doorway, before undressing or handling the child, because handling can upset the child and change the picture. Judge work of breathing by how hard the child works for each breath: look for retractions (skin pulling in with breaths), nasal flaring, grunting, and abnormal sounds, and listen from the doorway first. Judge circulation to the skin by color and pattern: pale, mottled (blotchy), or blue skin suggests poor blood flow, while warm pink skin is reassuring. Combine all three sides of the triangle, because two or three abnormal sides mean act now and get help fast. Then move to hands-on vital signs and the rest of the assessment, knowing the triangle has already set your urgency."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Children compensate well, which means the body holds blood pressure steady by speeding the heart and tightening vessels, until it suddenly cannot. A normal blood pressure can hide serious shock in a child, so a fast heart rate, cool skin, and slow refill are earlier warnings than blood pressure. Escalate fast for a limp or unresponsive appearance, severe retractions, grunting, poor color, or exhaustion. A quiet chest with little air movement is an emergency, not an improvement, so call for help and stay with the child."
          }
        ],
        bedsideCues: [
          "A limp, glassy-eyed child who does not react to a parent",
          "Skin pulling in around the ribs and neck with each breath",
          "Pale, mottled, or blue skin instead of warm pink",
          "A fast heart rate with cool skin and slow refill despite a normal blood pressure"
        ],
        assessmentSequence: [
          "1. Pause at the doorway and look before touching: judge appearance, work of breathing, and skin circulation.",
          "2. Check appearance: tone, alertness, eye contact, cry, and response to a parent.",
          "3. Check work of breathing: retractions, nasal flaring, grunting, and abnormal sounds.",
          "4. Check circulation to the skin: color, mottling, and warmth.",
          "5. Act on the whole triangle: two or three abnormal sides mean help now, then move to hands-on vital signs."
        ],
        safetyPoints: [
          "Never trust a normal blood pressure alone in a child: fast heart rate, cool skin, and slow refill warn of shock earlier.",
          "Two or three abnormal sides of the triangle mean act now and get help fast.",
          "Look before you touch: handling a child first can change the picture you need to see."
        ],
        workedExample: {
          context: "A two-year-old is carried in with a fever, and the numbers at triage look acceptable, but the child is limp, glassy-eyed, and does not react to the parent.",
          action: "The nurse reads the triangle from the doorway: abnormal appearance, fast breathing with retractions, and mottled skin, and calls for help and moves the child to a monitored bed right away.",
          outcome: "The team treats the child as sick from the first minute, and the early escalation gives care before blood pressure ever falls."
        },
        activity: {
          prompt: "You see a child who is playful, tracking you, and crying strongly, but the heart rate is a little fast. How does the triangle change what you worry about, and what do you do next?",
          type: "reflection"
        },
        knowledgeCheck: {
          question: "What are the three sides of the Pediatric Assessment Triangle?",
          options: [
            "Temperature, blood pressure, and oxygen level",
            "Height, weight, and age",
            "Appearance, work of breathing, and circulation to the skin"
          ],
          answerIndex: 2,
          rationale: "The triangle is appearance, work of breathing, and circulation to the skin, judged across the room in seconds."
        }
      },
      {
        id: "ed-52",
        title: "Pediatric Fever and Common Emergencies — Croup, Bronchiolitis and Dehydration",
        durationMinutes: 7,
        sections: [
          {
            heading: "Core Concept",
            content: "Fever means a body temperature of 100.4 degrees Fahrenheit or higher, measured rectally in young babies, which means in the rectum. Fever is a sign, not a disease, and the age of the child and how the child looks matter most. Babies 28 days old and younger with fever need a full workup right away, every time, because newborn immune systems (the body defenses against germs) are still immature, and a young baby can have a serious bacterial infection (illness from bacteria) and still look only mildly sick. Croup means swelling of the upper airway, usually from a virus, in toddlers and preschool children. Bronchiolitis means inflammation of the tiny airways in the lungs, most often in babies under two years old, and it is commonly caused by RSV (respiratory syncytial virus), a common winter virus that spreads through coughs, hands, and shared surfaces."
          },
          {
            heading: "What the ED Nurse Does",
            content: "For a febrile baby 28 days old or younger, prepare for a full workup: blood tests, urine tests, and often a lumbar puncture (a spinal tap to test fluid around the spine for infection). For babies one month to three months old, help with careful risk review with the provider, since blood and urine tests are common and a lumbar puncture may still be needed, and how the baby feeds, wakes, and responds helps guide but never replaces the testing plan. For older infants and children who look well, help find the source by checking ears, throat, lungs, and urine, since a urine test matters in young girls and uncircumcised boys with no clear source. Ask how much the child drank, how many wet diapers or bathroom trips happened, and when the last wet diaper was, because poor feeding, vomiting, and sunken soft spots on the head in babies all raise concern. Get blood and urine cultures (samples grown in the lab to find germs) before antibiotics when the plan calls for them, unless that delays treatment in a sick child, and label samples carefully, noting the fever medicine given and the time and temperature."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Red flags at any age include trouble breathing, blue or mottled skin, a rash that does not blanch (does not fade when pressed), hard to wake, inconsolable crying, stiff neck, seizure, and signs of dehydration like no tears or dry diapers. For croup, keep the child calm and upright on a parent's lap, because crying worsens swelling and distress, and treatment may include nebulized epinephrine (epinephrine breathed in as a mist) and a steroid (a medicine that lowers airway swelling). After nebulized epinephrine, watch the child closely for a few hours, because the effect wears off and symptoms can return, and discharge only when breathing stays calm. For bronchiolitis, suction the nose gently before feeds, because babies breathe mostly through the nose, use small frequent feeds with close watching, and support breathing with oxygen when the oxygen level stays low. Antibiotics (medicines that treat bacteria) do not help a viral illness like bronchiolitis. Escalate fast for apnea (pauses in breathing), severe retractions, grunting, poor color, exhaustion, or a baby too tired to feed, because young infants can tire suddenly. Teach parents what to watch at home, when to return, and how to check temperature the right way, and explain that fever height alone does not tell how sick a child is."
          }
        ],
        bedsideCues: [
          "A baby under 28 days old with a rectal temperature of 100.4 degrees Fahrenheit or higher",
          "A barking cough that sounds like a seal, with a harsh noise on breathing in, worse at night",
          "A wheezing baby under two years old who feeds poorly and works hard to breathe",
          "No tears, dry diapers, poor feeding, or a sunken soft spot on a baby's head"
        ],
        assessmentSequence: [
          "1. Check the temperature the right way for the age, look at how the child looks, and flag any red flags at once.",
          "2. For a baby 28 days old or younger with fever, prepare for a full workup: blood tests, urine tests, and often a lumbar puncture.",
          "3. Ask about drinking, wet diapers, last wet diaper, feeding, and vomiting, and report intake and output clearly.",
          "4. Listen for the bark of croup or the wheeze of bronchiolitis, and watch for retractions, flaring, grunting, and color change.",
          "5. Keep the child calm and upright on a parent's lap, suction the nose gently before feeds, and reassess breathing effort, color, and oxygen level often."
        ],
        safetyPoints: [
          "Under 28 days with fever means a full workup, every time, even if the baby looks only mildly sick.",
          "After nebulized epinephrine for croup, watch for a few hours, because symptoms can return as the effect wears off.",
          "A quiet chest with little air movement is an emergency, not an improvement, so call for help."
        ],
        workedExample: {
          context: "A 20-day-old baby arrives feeling warm, and the parents are terrified, while the baby looks only mildly sick.",
          action: "The nurse takes a rectal temperature, finds it above 100.4 degrees Fahrenheit, tells the provider at once, and prepares for a full workup with blood tests, urine tests, and a lumbar puncture, while asking about feeding and wet diapers.",
          outcome: "The workup finds a serious bacterial infection early, treatment starts before the baby looks worse, and the parents learn the return warnings before discharge."
        },
        activity: {
          prompt: "A 20-day-old baby has a rectal temperature of 100.6 degrees Fahrenheit and looks only mildly ill. What does this finding mean for your next steps, and why does age matter more than how the baby looks?",
          type: "interpretation"
        },
        knowledgeCheck: {
          question: "A baby is 20 days old with a fever of 100.6 degrees Fahrenheit measured rectally. What is required?",
          options: [
            "Reassurance and discharge, since the baby looks only mildly sick",
            "A full workup right away, including blood tests, urine tests, and often a lumbar puncture",
            "A urine test only, because fever in a newborn is never a bacterial infection"
          ],
          answerIndex: 1,
          rationale: "Babies 28 days old and younger with fever need a full workup every time, because a serious bacterial infection can look mild at this age."
        }
      },
      {
        id: "ed-53",
        title: "Weight-Based Everything — Broselow, Pediatric Dosing and Safe Med Checks",
        durationMinutes: 4,
        sections: [
          {
            heading: "Core Concept",
            content: "Almost every medicine and fluid amount in pediatrics (child care) is based on weight. Weigh every child in kilograms (the metric unit used for dosing) on arrival. Guessing weight invites dosing errors, so measure it and document it clearly every time. When a scale is impossible, a Broselow tape (a length-based tape that estimates a child's weight for dosing) estimates weight from height and gives drug doses and equipment sizes. Keep the tape where everyone can reach it, still confirm with a real weight as soon as you can, and tell the team which method you used."
          },
          {
            heading: "What the ED Nurse Does",
            content: "Weigh the child in kilograms on arrival and document the weight clearly, and use the Broselow tape only when a scale is impossible. Double-check every pediatric dose with a second nurse and the provider order, because children have small safety margins and a decimal point error can mean ten times too much medicine. Verify the dose per kilogram, the total dose, the route, and the child identity. Intravenous (into a vein) fluid boluses in children are ordered by weight, commonly 20 milliliters per kilogram per order, so reassess breathing, heart rate, and skin after each bolus, because fluids help shock but too much fluid can overload small lungs quickly. Airway tools, blood pressure cuffs, and catheters all come in child sizes, and the wrong size fails when seconds matter, so use the Broselow tape or your unit size chart at the bedside and set up the right sizes before procedures so you never hunt mid-crisis."
          },
          {
            heading: "Red Flags and Escalation",
            content: "Children compensate well, which means the body holds blood pressure steady by speeding the heart and tightening vessels, until it suddenly cannot, so a normal blood pressure can hide serious shock in a child. A fast heart rate, cool skin, and slow refill are earlier warnings, so report them even when the blood pressure looks normal. Stop and recheck before giving any pediatric dose that looks wrong, and speak up at once if the calculated dose, the ordered dose, and the Broselow tape do not agree. After each fluid bolus, reassess breathing, heart rate, and skin, and report new work of breathing, falling oxygen levels, or swelling, because too much fluid can overload small lungs quickly."
          }
        ],
        bedsideCues: [
          "A child whose weight was guessed instead of measured in kilograms",
          "A calculated dose that does not match the provider order or the Broselow tape",
          "A fast heart rate with cool skin and slow refill despite a normal blood pressure",
          "New work of breathing or falling oxygen levels after a fluid bolus"
        ],
        assessmentSequence: [
          "1. Weigh the child in kilograms on arrival and document the weight clearly.",
          "2. If a scale is impossible, use the Broselow tape to estimate weight, and tell the team which method was used.",
          "3. Calculate the dose per kilogram, check the total dose, route, and child identity, and double-check with a second nurse.",
          "4. Set up the right child-sized airway tools, blood pressure cuff, and catheters before procedures.",
          "5. After each weight-based fluid bolus, reassess breathing, heart rate, and skin before giving more."
        ],
        safetyPoints: [
          "Never guess a child's weight for dosing: weigh in kilograms, or use the Broselow tape and confirm with a real weight as soon as possible.",
          "Double-check every pediatric dose with a second nurse, because a decimal point error can mean ten times too much medicine.",
          "Reassess breathing, heart rate, and skin after each fluid bolus, because too much fluid can overload small lungs."
        ],
        workedExample: {
          context: "A child arrives in shock and no scale is available at the bedside.",
          action: "The nurse measures the child with the Broselow tape, gets the estimated weight and the matching drug doses and equipment sizes, tells the team the weight was estimated, and double-checks the first calculated dose with a second nurse.",
          outcome: "The child gets the right weight-based dose and the right-sized equipment without delay, and a real weight is taken as soon as possible to confirm the estimate."
        },
        activity: {
          prompt: "A child weighs 10 kilograms and the order is for one intravenous fluid bolus of 20 milliliters per kilogram. How many milliliters is one bolus, and what do you reassess right after giving it?",
          type: "calculation"
        },
        knowledgeCheck: {
          question: "Why must every pediatric dose be double-checked with a second nurse?",
          options: [
            "Because children have small safety margins and a decimal point error can mean ten times too much medicine",
            "Because the Broselow tape always gives the wrong weight",
            "Because pediatric doses are never based on weight"
          ],
          answerIndex: 0,
          rationale: "Children have small safety margins, so verifying the dose per kilogram, total dose, route, and identity with a second nurse prevents tenfold errors."
        }
      }
    ]
  }
};
