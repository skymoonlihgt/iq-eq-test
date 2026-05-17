const tests_en = {
  iq: {
    label: "IQ Test",
    shortLabel: "IQ",
    timeLimit: 45,
    description: "Focus on sequence, logical reasoning, calculation, and pattern recognition",
    questions: [
      { id: "iq-1", skill: "Pattern Reasoning", title: "What comes next: 2, 6, 12, 20, 30?", passage: "Compare the differences between consecutive numbers first.", choices: ["40", "42", "44", "48"], answer: 1, insight: "The differences are 4, 6, 8, 10, increasing by 2. The next difference is 12." },
      { id: "iq-2", skill: "Logical Proposition", title: "A is greater than B, and B is less than D. What can we say for sure?", passage: "Objects with no given information cannot be included in the conclusion.", choices: ["A is greater than D", "D is greater than B", "C is greater than D", "A is less than C"], answer: 1, insight: "B being less than D means D is greater than B." },
      { id: "iq-3", skill: "Day Calculation", title: "If today is Wednesday, what day will it be in 45 days?", passage: "The remainder after dividing by 7 is the key.", choices: ["Friday", "Saturday", "Sunday", "Monday"], answer: 1, insight: "45 divided by 7 leaves a remainder of 3. 3 days after Wednesday is Saturday." },
      { id: "iq-4", skill: "Sequence", title: "What is the next number: 3, 4, 7, 11, 18, 29?", passage: "There is a hidden pattern of adding the two previous numbers.", choices: ["43", "45", "47", "51"], answer: 2, insight: "7=3+4, 11=4+7, 18=7+11, 29=11+18, so the next is 47." },
      { id: "iq-5", skill: "Cryptography", title: "If PLAN becomes QMBM, what does MIND become?", passage: "Each letter moves one step forward in the alphabet.", choices: ["NJME", "NJOE", "MJOF", "OJNE"], answer: 1, insight: "M, I, N, D moved one step forward become N, J, O, E." },
      { id: "iq-6", skill: "Categorical Reasoning", title: "All Lanas are blue, and some blue things are round. What is a certain conclusion?", passage: "Distinguish between what is possible and what must be true.", choices: ["All Lanas are round", "Some Lanas are round", "There is no guarantee a Lana is round", "All round things are Lanas"], answer: 2, insight: "We cannot conclude that the set of Lanas overlaps with the set of round blue things." },
      { id: "iq-7", skill: "Comparison Strategy", title: "Out of 5 boxes, only one is heavier. What is the minimum number of weighings on a balance scale to guarantee finding it?", passage: "Think about weighing 2 against 2 first.", choices: ["1 time", "2 times", "3 times", "4 times"], answer: 1, insight: "Weigh 2 vs 2. If it tilts, weigh the heavier 2 against each other (total 2 times)." },
      { id: "iq-8", skill: "Arrangement", title: "How many ways are there to arrange 6 different books in a row?", passage: "This asks for the number of permutations of 6 distinct items.", choices: ["36", "120", "360", "720"], answer: 3, insight: "The number of ways to arrange 6 distinct items is 6! = 720." },
      { id: "iq-9", skill: "Reverse Calculation", title: "I added 4 to a number and multiplied it by 3 to get 27. What is the number?", passage: "Work backward from the final operation.", choices: ["3", "5", "7", "9"], answer: 1, insight: "27 divided by 3 is 9, and 9 minus 4 is 5." },
      { id: "iq-10", skill: "Spatial Awareness", title: "If a cube is painted on all sides and then cut into 27 smaller equal cubes, how many have exactly 3 painted faces?", passage: "The pieces with 3 painted faces were at the corners.", choices: ["4", "6", "8", "12"], answer: 2, insight: "A cube has 8 corners, so there are 8 pieces with 3 painted faces." },
      { id: "iq-11", skill: "Conditional Reasoning", title: "Minsu is faster than Jia, and Hajun is slower than Minsu. What is certain?", passage: "Check if the full order of all three can be completely determined.", choices: ["Hajun is faster than Jia", "Jia is faster than Hajun", "Minsu is faster than Hajun", "Hajun is the slowest"], answer: 2, insight: "Since Hajun is slower than Minsu, it is certain that Minsu is faster than Hajun." },
      { id: "iq-12", skill: "Ratio Calculation", title: "A price increased by 20% and then decreased by 20%. What is the final price?", passage: "Assume the initial price is 100 to calculate.", choices: ["Same as original", "4% lower", "4% higher", "20% lower"], answer: 1, insight: "100 becomes 120, and a 20% decrease from 120 is 96, which is 4% lower." },
      { id: "iq-13", skill: "Sequence", title: "What is next: 1, 4, 9, 16, 25?", passage: "Think about what number each term is a square of.", choices: ["30", "34", "36", "49"], answer: 2, insight: "1², 2², 3², 4², 5² is followed by 6², which is 36." },
      { id: "iq-14", skill: "Conditional Reasoning", title: "All betas are gammas, and no gammas are deltas. What is certain?", passage: "Check the inclusion and exclusion of the two sets simultaneously.", choices: ["All betas are deltas", "No betas are deltas", "All gammas are betas", "Some deltas are betas"], answer: 1, insight: "Betas are fully inside gammas, and gammas do not overlap with deltas, so no betas are deltas." },
      { id: "iq-15", skill: "Cryptography", title: "If ACE becomes BDF, what does GIK become?", passage: "Move each letter backward (or forward) by one space.", choices: ["HJL", "HJM", "GJL", "IKM"], answer: 0, insight: "Moving G, I, K forward by one space gives H, J, L." },
      { id: "iq-16", skill: "Calculation Reasoning", title: "If one person makes 4 parts in 6 minutes, how many parts will 3 people make in 18 minutes?", passage: "Calculate one person's 18-minute production first.", choices: ["24", "30", "36", "48"], answer: 2, insight: "One person makes 12 parts in 18 minutes, so 3 people make 36 parts." },
      { id: "iq-17", skill: "Shape Rule", title: "If a triangle has 3 sides and a square has 4, what is the sum of the sides of 4 pentagons?", passage: "Multiply based on the number of sides of a single pentagon.", choices: ["16", "18", "20", "24"], answer: 2, insight: "A pentagon has 5 sides, and for 4 of them it's 5 x 4 = 20." },
      { id: "iq-18", skill: "Pattern Reasoning", title: "What letter comes after Z, X, U, Q, L?", passage: "Look at how much the alphabetical position decreases.", choices: ["G", "F", "E", "D"], answer: 1, insight: "26, 24, 21, 17, 12 decreases by 2, 3, 4, 5. The next is 12 - 6 = 6, which is F." },
      { id: "iq-19", skill: "Probability", title: "When flipping a coin twice, what is the probability of getting exactly one head?", passage: "Think of the four possible outcomes.", choices: ["1/4", "1/3", "1/2", "3/4"], answer: 2, insight: "Heads-Tails and Tails-Heads are the two cases out of four, so 2/4 = 1/2." },
      { id: "iq-20", skill: "Task Order", title: "Task A must be done before B, C after A, and B before D. Which order is possible?", passage: "It must satisfy both A before B, and B before D.", choices: ["A-B-C-D", "A-C-B-D", "B-A-C-D", "D-A-B-C"], answer: 1, insight: "A before B, B before D, and C after A fits A-C-B-D." },
      { id: "iq-21", skill: "Sequence", title: "What comes next: 81, 27, 9, 3?", passage: "Each term is divided by the same number.", choices: ["0", "1", "2", "6"], answer: 1, insight: "Dividing by 3 each time means the next number is 1." },
      { id: "iq-22", skill: "Logical Comparison", title: "For three numbers A, B, C: A+B=10, B+C=14, A+C=16. What is B?", passage: "Add all three equations together and think.", choices: ["3", "4", "5", "6"], answer: 1, insight: "Summing them gives 2(A+B+C)=40, so A+B+C=20. B is 20-(A+C)=4." },
      { id: "iq-23", skill: "Spatial Awareness", title: "If you fold a square piece of paper in half and then in half again, how many layers are there?", passage: "Each fold doubles the number of layers.", choices: ["2 layers", "3 layers", "4 layers", "8 layers"], answer: 2, insight: "Folding once makes 2 layers, folding twice makes 4 layers." },
      { id: "iq-24", skill: "Classification", title: "Which of the following is different from the rest?", passage: "Find the one that doesn't fit with the words related to seasons.", choices: ["Spring", "Summer", "Autumn", "Monday"], answer: 3, insight: "Spring, Summer, and Autumn are seasons, while Monday is a day of the week." },
      { id: "iq-25", skill: "Distance Calculation", title: "If you travel at 60 km/h for 90 minutes, what is the distance?", passage: "90 minutes is 1.5 hours.", choices: ["60km", "75km", "90km", "120km"], answer: 2, insight: "60km/h x 1.5h = 90km." },
      { id: "iq-26", skill: "Pattern Reasoning", title: "What comes next: 2, 3, 5, 8, 12, 17?", passage: "Look at how the increment changes.", choices: ["21", "22", "23", "24"], answer: 2, insight: "The differences increase by 1, 2, 3, 4, 5, so the next is 17+6=23." },
      { id: "iq-27", skill: "Set Reasoning", title: "Out of 20 students, 12 like soccer and 9 like basketball. What is the minimum number of students who like both?", passage: "See how much the sum of the two sets exceeds the total.", choices: ["0", "1", "2", "3"], answer: 1, insight: "12+9=21, which exceeds the total of 20 by 1, so at least 1 must like both." },
      { id: "iq-28", skill: "Mental Math", title: "If a price is $85 after a 15% discount, what was the original price?", passage: "The discounted price is 85% of the original.", choices: ["$95", "$100", "$105", "$110"], answer: 1, insight: "$85 is 85% of the original price, so the original price is $100." },
      { id: "iq-29", skill: "Logical Proposition", title: "Some problems are hard, and all hard problems take a long time. What is certain?", passage: "Connect the partial existence with the universal condition.", choices: ["All problems are hard", "Some problems take a long time", "All problems that take a long time are hard", "There are no hard problems"], answer: 1, insight: "There is at least one hard problem, and all hard problems take a long time, so some problems take a long time." },
      { id: "iq-30", skill: "Complex Calculation", title: "What comes next: 3, 7, 15, 31?", passage: "Check if multiplying by 2 and adding 1 works.", choices: ["47", "55", "63", "65"], answer: 2, insight: "3x2+1=7, 7x2+1=15, 15x2+1=31, so the next is 63." }
    ]
  },
  eq: {
    label: "EQ Test",
    shortLabel: "EQ",
    timeLimit: 35,
    description: "Focus on empathy, self-awareness, emotional regulation, and social judgment",
    questions: [
      {
        id: "eq-1", skill: "Empathy", title: "A colleague says they missed a task right before the deadline. What is the closest reaction?", passage: "Choose the option that handles both emotion and task impact.",
        choices: [
          { text: "Listen to the reason first, and figure out the impact and next steps together.", score: 4, domain: "empathy" },
          { text: "Take care of it all myself and talk about it later.", score: 2, domain: "empathy" },
          { text: "Tell them to take clear responsibility and end the conversation.", score: 1, domain: "empathy" },
          { text: "Feel uncomfortable and don't respond for a few days.", score: 0, domain: "empathy" }
        ]
      },
      {
        id: "eq-2", skill: "Emotional Regulation", title: "You feel your face get hot when criticized during a meeting.", passage: "This evaluates recovery speed rather than immediate reaction.",
        choices: [
          { text: "Take a breath and politely ask for the core reasoning again.", score: 4, domain: "regulation" },
          { text: "Rebut immediately to control the atmosphere.", score: 1, domain: "regulation" },
          { text: "Stop talking and reply only after the meeting.", score: 2, domain: "regulation" },
          { text: "Assume their intentions are bad and speak defensively.", score: 0, domain: "regulation" }
        ]
      },
      {
        id: "eq-3", skill: "Self-Awareness", title: "You received feedback that you've been overly sensitive lately.", passage: "How you check your own state is important.",
        choices: [
          { text: "Review recent sleep, pressure, and emotions, and ask for specific examples of the feedback.", score: 4, domain: "awareness" },
          { text: "Assume the other person just took things too sensitively.", score: 1, domain: "awareness" },
          { text: "Accept it as feedback but put off changing anything.", score: 2, domain: "awareness" },
          { text: "Conclude that it's just your inherent personality.", score: 0, domain: "awareness" }
        ]
      },
      {
        id: "eq-4", skill: "Social Judgment", title: "A friend is unusually quiet and slow to reply.", passage: "This looks at social interpretation in uncertain situations.",
        choices: [
          { text: "Send a brief check-in so they can reply comfortably when they have time.", score: 4, domain: "social" },
          { text: "Assume they are avoiding me and distance myself first.", score: 1, domain: "social" },
          { text: "Keep messaging them to check their reaction.", score: 0, domain: "social" },
          { text: "If it persists for days, casually arrange a chance to meet.", score: 3, domain: "social" }
        ]
      },
      {
        id: "eq-5", skill: "Empathy", title: "Someone shares a worry but doesn't seem to want an immediate solution.", passage: "Choose a balance between listening and solving.",
        choices: [
          { text: "Listen thoroughly first, and check if they need advice.", score: 4, domain: "empathy" },
          { text: "Quickly offer a solution to save time.", score: 1, domain: "empathy" },
          { text: "Talk at length about a similar experience of mine.", score: 2, domain: "empathy" },
          { text: "Avoid emotional topics and change the subject.", score: 0, domain: "empathy" }
        ]
      },
      {
        id: "eq-6", skill: "Emotional Regulation", title: "You misunderstood an urgent message and sent an irritated reply.", passage: "Focuses on how you recover after a mistake.",
        choices: [
          { text: "Admit the misunderstanding, apologize briefly, and reconfirm the needed information.", score: 4, domain: "regulation" },
          { text: "Assume they also wrote it confusingly and let it go.", score: 1, domain: "regulation" },
          { text: "Feel embarrassed and delay replying.", score: 0, domain: "regulation" },
          { text: "Think about being careful next time but don't say anything.", score: 2, domain: "regulation" }
        ]
      },
      {
        id: "eq-7", skill: "Self-Awareness", title: "Your mind keeps changing right before an important decision.", passage: "Sees if you separate emotional signals from judgment criteria.",
        choices: [
          { text: "Write down anxiety, expectations, and fatigue separately to review the decision criteria.", score: 4, domain: "awareness" },
          { text: "Just pick whatever feels right at the last moment.", score: 1, domain: "awareness" },
          { text: "Wait for someone else to decide for me.", score: 0, domain: "awareness" },
          { text: "Write a pros and cons list but ignore my emotional state.", score: 2, domain: "awareness" }
        ]
      },
      {
        id: "eq-8", skill: "Social Judgment", title: "You sense an uncomfortable vibe between two people in your team.", passage: "Choose a safe approach to addressing relationships.",
        choices: [
          { text: "Listen to each person's context separately and see if there is an agenda to address together.", score: 4, domain: "social" },
          { text: "Call them both in immediately and make them resolve it publicly.", score: 1, domain: "social" },
          { text: "It's not my business, so I don't get involved.", score: 2, domain: "social" },
          { text: "Ask other people about the situation first.", score: 0, domain: "social" }
        ]
      },
      {
        id: "eq-9", skill: "Empathy", title: "A junior colleague keeps saying they're worried about making a mistake before a presentation.", passage: "Look for the option that lowers emotions and connects to preparation.",
        choices: [
          { text: "Ask what worries them and review just the first minute of the presentation together.", score: 4, domain: "empathy" },
          { text: "Just tell them everyone gets nervous and move on.", score: 1, domain: "empathy" },
          { text: "Tell them to practice instead of wasting time worrying.", score: 0, domain: "empathy" },
          { text: "Tell them in detail about my own presentation failures.", score: 2, domain: "empathy" }
        ]
      },
      {
        id: "eq-10", skill: "Emotional Regulation", title: "While focusing deeply, you get a call that the schedule has changed.", passage: "Looks at how you regulate displeasure in the moment.",
        choices: [
          { text: "Check the impact, reprioritize, and request any necessary adjustments.", score: 4, domain: "regulation" },
          { text: "Adapt to the change but harbor complaints all day.", score: 1, domain: "regulation" },
          { text: "Protest strongly immediately.", score: 0, domain: "regulation" },
          { text: "Accept it for now but complain later about how hard it was.", score: 2, domain: "regulation" }
        ]
      },
      {
        id: "eq-11", skill: "Self-Awareness", title: "You notice you repeatedly procrastinate in similar situations.", passage: "Checks if you read the emotions behind the behavior.",
        choices: [
          { text: "Record what emotion blocks the start, and make the first step smaller.", score: 4, domain: "awareness" },
          { text: "Think it's just because I have weak willpower.", score: 0, domain: "awareness" },
          { text: "Leave it, assuming I'll get it done when the deadline is near.", score: 1, domain: "awareness" },
          { text: "Rewrite my to-do list but ignore the cause.", score: 2, domain: "awareness" }
        ]
      },
      {
        id: "eq-12", skill: "Social Judgment", title: "The other person doesn't agree with your proposal but doesn't oppose it directly either.", passage: "This differentiates between superficial agreement and actual concerns.",
        choices: [
          { text: "Ask if they have hesitations and leave the door open for opposing views.", score: 4, domain: "social" },
          { text: "Take their silence as agreement and proceed.", score: 1, domain: "social" },
          { text: "Pressure them on why they won't speak clearly.", score: 0, domain: "social" },
          { text: "Just ask them to give their opinion later.", score: 2, domain: "social" }
        ]
      },
      {
        id: "eq-13", skill: "Empathy", title: "A close friend shares good news, but your own situation is bad.", passage: "Choose a reaction that handles both your feelings and their joy.",
        choices: [
          { text: "Congratulate them genuinely, and say you'll listen to the details when you have more bandwidth.", score: 4, domain: "empathy" },
          { text: "Congratulate superficially and quickly change the subject.", score: 1, domain: "empathy" },
          { text: "Make them stop talking by saying I'm having a hard time.", score: 0, domain: "empathy" },
          { text: "Congratulate them but distance myself while hiding my comparison.", score: 2, domain: "empathy" }
        ]
      },
      {
        id: "eq-14", skill: "Emotional Regulation", title: "You receive unexpected criticism and feel your voice about to raise.", passage: "See which option delays reaction and preserves conversation quality.",
        choices: [
          { text: "Ask for a moment to process, and request specific examples of the criticism.", score: 4, domain: "regulation" },
          { text: "Raise my voice to explain my stance first.", score: 0, domain: "regulation" },
          { text: "Look visibly stiff but pass without saying anything.", score: 2, domain: "regulation" },
          { text: "Retaliate by saying they've made mistakes too.", score: 1, domain: "regulation" }
        ]
      },
      {
        id: "eq-15", skill: "Self-Awareness", title: "You realize you always feel drained after talking to a specific person.", passage: "Asks how you handle recurring emotional patterns.",
        choices: [
          { text: "Note what words or situations drain my energy and set boundaries.", score: 4, domain: "awareness" },
          { text: "Conclude that the person is just a problem.", score: 1, domain: "awareness" },
          { text: "Ignore the feelings because I need to maintain the relationship.", score: 0, domain: "awareness" },
          { text: "Avoid them for a while but don't figure out why.", score: 2, domain: "awareness" }
        ]
      },
      {
        id: "eq-16", skill: "Social Judgment", title: "One person keeps interrupting others in a meeting.", passage: "Choose how to restore balance without ruining the mood.",
        choices: [
          { text: "Briefly summarize and create space to hear the interrupted person's opinion again.", score: 4, domain: "social" },
          { text: "Call them out immediately for being rude.", score: 1, domain: "social" },
          { text: "Let it go so the meeting ends faster.", score: 0, domain: "social" },
          { text: "Ask the interrupted person if they're okay only after the meeting.", score: 2, domain: "social" }
        ]
      },
      {
        id: "eq-17", skill: "Empathy", title: "Someone repeats the same story several times, saying they are struggling.", passage: "Looks at how you empathize when repetition feels tedious.",
        choices: [
          { text: "Pinpoint the core recurring emotion and ask what they need most right now.", score: 4, domain: "empathy" },
          { text: "Tell them I've already heard this story.", score: 0, domain: "empathy" },
          { text: "Summarize the solution for them one more time.", score: 2, domain: "empathy" },
          { text: "Half-listen while doing other things.", score: 1, domain: "empathy" }
        ]
      },
      {
        id: "eq-18", skill: "Emotional Regulation", title: "A person who is late for an important appointment makes excuses first.", passage: "Choose a reaction that expresses anger but doesn't ruin the relationship.",
        choices: [
          { text: "State the impact of them being late, and specifically agree on how to prevent it next time.", score: 4, domain: "regulation" },
          { text: "Get angry first and force an apology out of them.", score: 1, domain: "regulation" },
          { text: "Say it's okay but secretly hold a grudge.", score: 2, domain: "regulation" },
          { text: "Cancel the appointment on the spot.", score: 0, domain: "regulation" }
        ]
      },
      {
        id: "eq-19", skill: "Self-Awareness", title: "You feel uncomfortable and skeptical when receiving a compliment.", passage: "Looks at your attitude toward accepting positive feedback.",
        choices: [
          { text: "Notice the discomfort, and specifically write down what was praised.", score: 4, domain: "awareness" },
          { text: "Say I just got lucky.", score: 1, domain: "awareness" },
          { text: "Cut the conversation short because the compliment feels burdensome.", score: 0, domain: "awareness" },
          { text: "Say thank you but mentally dismiss it.", score: 2, domain: "awareness" }
        ]
      },
      {
        id: "eq-20", skill: "Social Judgment", title: "A new person joins the team but struggles to join conversations.", passage: "Pick a small action that builds a sense of belonging.",
        choices: [
          { text: "Naturally ask for their opinion on relevant topics during meetings and provide context.", score: 4, domain: "social" },
          { text: "Wait for them to adapt, as it's something they must do themselves.", score: 1, domain: "social" },
          { text: "Ask them in front of everyone why they are so quiet.", score: 0, domain: "social" },
          { text: "Explain things nicely privately, but don't call on them in meetings.", score: 2, domain: "social" }
        ]
      },
      {
        id: "eq-21", skill: "Empathy", title: "The other person apologized, but you still feel uncomfortable.", passage: "Sees if you separate forgiveness from emotional recovery.",
        choices: [
          { text: "Accept the apology but honestly say you need time to recover.", score: 4, domain: "empathy" },
          { text: "Say it's okay and try hard to act like everything is back to normal.", score: 2, domain: "empathy" },
          { text: "Keep pressing them, saying the apology isn't enough.", score: 1, domain: "empathy" },
          { text: "Cut off contact without saying anything.", score: 0, domain: "empathy" }
        ]
      },
      {
        id: "eq-22", skill: "Emotional Regulation", title: "Small mistakes keep happening all day, and you feel irritated with yourself.", passage: "Looks at how you regulate self-blame.",
        choices: [
          { text: "Take a short break, identify common causes for the mistakes, and fix just one.", score: 4, domain: "regulation" },
          { text: "Berate myself, asking why I'm always like this.", score: 0, domain: "regulation" },
          { text: "Think today is ruined and just give up.", score: 1, domain: "regulation" },
          { text: "Just try to change my mood without looking at the cause.", score: 2, domain: "regulation" }
        ]
      },
      {
        id: "eq-23", skill: "Self-Awareness", title: "You find it hard to say no when someone asks for a favor, and regret it later.", passage: "Checks if you recognize your needs and boundaries.",
        choices: [
          { text: "Don't reply immediately; check what's feasible and the burden level before answering.", score: 4, domain: "awareness" },
          { text: "Accept it initially because I want to look like a good person.", score: 0, domain: "awareness" },
          { text: "Give a vague answer because I feel sorry, even though I know I should say no.", score: 1, domain: "awareness" },
          { text: "Think I can just cancel later if it gets too hard.", score: 2, domain: "awareness" }
        ]
      },
      {
        id: "eq-24", skill: "Social Judgment", title: "Someone says something uncomfortable disguised as a joke.", passage: "Choose the option that calmly expresses emotions and boundaries.",
        choices: [
          { text: "Briefly say the expression makes you uncomfortable and ask them to use different words.", score: 4, domain: "social" },
          { text: "Laugh it off to avoid ruining the mood.", score: 1, domain: "social" },
          { text: "Make an equally uncomfortable joke back at them.", score: 0, domain: "social" },
          { text: "Just quietly distance myself from them after that.", score: 2, domain: "social" }
        ]
      },
      {
        id: "eq-25", skill: "Empathy", title: "The other person stops talking, on the verge of tears.", passage: "Looks at how you handle silence.",
        choices: [
          { text: "Wait for a moment, and let them know it's okay if they don't talk.", score: 4, domain: "empathy" },
          { text: "Rush them to tell you quickly.", score: 0, domain: "empathy" },
          { text: "Make a joke because the silence feels awkward.", score: 1, domain: "empathy" },
          { text: "Hand them a tissue but leave because I don't know what to say.", score: 2, domain: "empathy" }
        ]
      },
      {
        id: "eq-26", skill: "Emotional Regulation", title: "You receive a sharp, hostile comment online.", passage: "Choose the option that manages the urge to respond immediately.",
        choices: [
          { text: "Don't reply immediately; separate the core issue from emotional reactions and reply only if necessary.", score: 4, domain: "regulation" },
          { text: "Rebut immediately with the same tone.", score: 0, domain: "regulation" },
          { text: "Delete the comment but obsess over it all day.", score: 1, domain: "regulation" },
          { text: "Show it to a friend to vent my anger.", score: 2, domain: "regulation" }
        ]
      },
      {
        id: "eq-27", skill: "Self-Awareness", title: "You get curt with people around you during busy periods.", passage: "Looks at whether you proactively manage stress signals.",
        choices: [
          { text: "Acknowledge my reaction pattern during busy times and agree on communication methods/ask for understanding in advance.", score: 4, domain: "awareness" },
          { text: "Brush it off, thinking it's understandable because I'm busy.", score: 1, domain: "awareness" },
          { text: "Think the other person should just understand.", score: 0, domain: "awareness" },
          { text: "Apologize only after the work is done.", score: 2, domain: "awareness" }
        ]
      },
      {
        id: "eq-28", skill: "Social Judgment", title: "Two people remember the exact same event completely differently.", passage: "How you structure the conversation is more important than who is right.",
        choices: [
          { text: "Help separate their memories into facts, interpretations, and emotions to clarify.", score: 4, domain: "social" },
          { text: "Take the side of the person who speaks more confidently.", score: 0, domain: "social" },
          { text: "Tell them both they are being too sensitive.", score: 1, domain: "social" },
          { text: "Just tell them to apologize to each other.", score: 2, domain: "social" }
        ]
      },
      {
        id: "eq-29", skill: "Empathy", title: "The other person seems indifferent to something they should be happy about.", passage: "Pick a reaction that doesn't make assumptions about their feelings.",
        choices: [
          { text: "Ask how they're feeling right now, and leave room for them not to feel happy.", score: 4, domain: "empathy" },
          { text: "Ask why they aren't happier.", score: 0, domain: "empathy" },
          { text: "Keep saying things that should make them feel better.", score: 1, domain: "empathy" },
          { text: "Stop talking about it since they aren't reacting.", score: 2, domain: "empathy" }
        ]
      },
      {
        id: "eq-30", skill: "Emotional Regulation", title: "Tension rises right before an important conversation, making you speak faster.", passage: "Looks at how you manage physical signals and maintain your intent.",
        choices: [
          { text: "Condense your main point into three sentences, control your breathing, and then start.", score: 4, domain: "regulation" },
          { text: "Speak even faster to hide that I'm nervous.", score: 0, domain: "regulation" },
          { text: "Assume they will understand and just speak as I am.", score: 1, domain: "regulation" },
          { text: "Just wish I could postpone the conversation.", score: 2, domain: "regulation" }
        ]
      }
    ]
  }
};

const domainLabels_en = {
  empathy: "Empathy",
  regulation: "Regulation",
  awareness: "Awareness",
  social: "Social"
};

const taxonomy_en = {
  ageGroups: [
    { id: "middle", label: "Middle School" },
    { id: "high", label: "High School" },
    { id: "college", label: "College" },
    { id: "adult", label: "Adult" }
  ]
};
