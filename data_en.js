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
      { id: "iq-30", skill: "Complex Calculation", title: "What comes next: 3, 7, 15, 31?", passage: "Check if multiplying by 2 and adding 1 works.", choices: ["47", "55", "63", "65"], answer: 2, insight: "3x2+1=7, 7x2+1=15, 15x2+1=31, so the next is 63." },
      { id: "iq-31", skill: "Shape Color Sequence", title: "Which shape and color best completes the following sequence?\n\n[Red Triangle] ➡️ [Blue Square] ➡️ [Red Pentagon] ➡️ [Blue Hexagon] ➡️ [ ? ]", passage: "Consider both the alternating color pattern (Red/Blue) and the number of edges which increases by 1.", choices: ["Red Heptagon", "Blue Heptagon", "Red Octagon", "Green Heptagon"], answer: 0, insight: "Colors alternate as Red ➡️ Blue ➡️ Red ➡️ Blue ➡️ Red. The number of edges increases as 3, 4, 5, 6, so the next must be 7 (Heptagon). Thus, the correct answer is the Red Heptagon." },
      { id: "iq-32", skill: "Geometric Translation", title: "Shape A is transformed into Shape B according to a specific rule. If you apply the same rule to Shape C, what will Shape D be?\n\n[Shape A: Circle with Top Half Black] ➡️ [Shape B: Circle with Bottom Half Black]\n[Shape C: Square with Left Half Red] ➡️ [Shape D: ?]", passage: "Observe the spatial rotation/inversion from Shape A to B, and apply the same 180-degree rotation to Shape C.", choices: ["Square with Right Half Red", "Square with Left Half Red", "Square with Bottom Half Red", "Square with Right Half Blue"], answer: 0, insight: "The transformation from A to B represents a 180-degree rotation (or vertical flip). Rotating C (left half red) by 180 degrees shifts the red area to the right half, resulting in a 'Square with Right Half Red'." },

      { id: "iq-33", skill: "Numerical Logic", title: "What comes next: 2, 5, 10, 17, 26, ?", passage: "Each term adds 3, 5, 7, 9 in sequence.", choices: ["37", "38", "39", "40"], answer: 0, insight: "26 + 11 = 37." },
      { id: "iq-34", skill: "Pattern Reasoning", title: "Which shape comes next? [Square] → [Triangle] → [Circle] → [?]", passage: "Shapes cycle square, triangle, circle.", choices: ["Square", "Triangle", "Circle", "X"], answer: 0, insight: "The pattern repeats with square." },
      { id: "iq-35", skill: "Numerical Reasoning", title: "The average of two numbers is 12 and one is 8. What is the other?", passage: "Average = (a + b) / 2.", choices: ["16", "20", "24", "28"], answer: 0, insight: "(8 + x) / 2 = 12, so x = 16." },
      { id: "iq-36", skill: "Logical Puzzle", title: "All cats have fur. Bebe is not a cat. Can we know if Bebe has fur?", passage: "If the subject is not in the premise, the conclusion may not follow.", choices: ["Yes", "No", "Cannot determine", "Definitely no"], answer: 2, insight: "The premises alone do not determine Bebe's fur." },
      { id: "iq-37", skill: "Calculation", title: "A 5,000 won item is discounted 15%. What is the sale price?", passage: "Sale price = original × 0.85.", choices: ["4,250 won", "4,255 won", "4,300 won", "4,325 won"], answer: 0, insight: "5,000 × 0.85 = 4,250 won." },
      { id: "iq-38", skill: "Spatial Reasoning", title: "Three lines never intersect. What is the minimum number of planes needed?", passage: "Consider placing lines on different planes.", choices: ["1", "2", "3", "4"], answer: 2, insight: "Three non-intersecting lines generally need three planes." },
      { id: "iq-39", skill: "Data Interpretation", title: "A table has 4 columns with 6 items each. How many cells total?", passage: "Cells = columns × items.", choices: ["20", "24", "30", "36"], answer: 1, insight: "4 × 6 = 24." },
      { id: "iq-40", skill: "Comparison", title: "A is 3× faster than B, and B is 2× faster than C. How many times faster is A than C?", passage: "Multiply the ratios.", choices: ["5×", "6×", "7×", "8×"], answer: 1, insight: "A = 3B and B = 2C, so A = 6C." },
      { id: "iq-41", skill: "Numerical Logic", title: "Which number is prime?", passage: "A prime has only 1 and itself as factors.", choices: ["21", "29", "35", "49"], answer: 1, insight: "29 is prime." },
      { id: "iq-42", skill: "Pattern Recognition", title: "AB, BC, CD, ? — what comes next?", passage: "Each pair shifts one letter forward.", choices: ["DE", "EF", "FG", "GH"], answer: 0, insight: "The next pair is DE." },
      { id: "iq-43", skill: "Calculation", title: "What is 12 cubed?", passage: "Exponentiation.", choices: ["1728", "144", "1440", "1720"], answer: 0, insight: "12³ = 1,728." },
      { id: "iq-44", skill: "Logical Reasoning", title: "All sparrows can fly. A rabbit is not a sparrow. Can we know from this alone whether a rabbit can fly?", passage: "The rabbit is not in the 'sparrow' set, so sparrow rules do not apply.", choices: ["It must fly", "It cannot fly", "Cannot determine", "It flies because it is a sparrow"], answer: 2, insight: "Premises about sparrows do not determine whether a rabbit can fly." },
      { id: "iq-45", skill: "Numerical Reasoning", title: "What is the LCM of 5 and 20?", passage: "Least common multiple.", choices: ["20", "25", "100", "200"], answer: 0, insight: "LCM(5, 20) = 20." },
      { id: "iq-46", skill: "Pattern Reasoning", title: "Color sequence: Red → Blue → Green → ?", passage: "Colors cycle R, B, G, R...", choices: ["Red", "Blue", "Green", "Yellow"], answer: 0, insight: "The cycle returns to red." },
      { id: "iq-47", skill: "Numerical Logic", title: "Which is NOT a multiple of 3?", passage: "Multiples of 3 divide evenly by 3.", choices: ["9", "12", "15", "14"], answer: 3, insight: "14 is not divisible by 3." },
      { id: "iq-48", skill: "Calculation", title: "100 ÷ 8 to two decimal places?", passage: "Perform the division.", choices: ["12.50", "12.51", "12.52", "12.53"], answer: 0, insight: "100 ÷ 8 = 12.5 → 12.50." },
      { id: "iq-49", skill: "Logical Puzzle", title: "A > B, B > C, but A < C — what follows?", passage: "Chain the size relationships.", choices: ["Contradiction", "Not a contradiction", "Unclear", "Insufficient info"], answer: 0, insight: "If A > B and B > C, then A > C, which conflicts with A < C." },
      { id: "iq-50", skill: "Data Interpretation", title: "A table has 5 rows and 3 columns. How many cells?", passage: "Rows × columns.", choices: ["10", "15", "20", "25"], answer: 1, insight: "5 × 3 = 15." },
      { id: "iq-51", skill: "Numerical Reasoning", title: "What is 3 squared?", passage: "Exponentiation.", choices: ["6", "9", "12", "15"], answer: 1, insight: "3² = 9." },
      { id: "iq-52", skill: "Pattern Recognition", title: "What comes next: 1, 4, 9, 16, ?", passage: "Perfect squares.", choices: ["20", "25", "30", "36"], answer: 1, insight: "Next is 5² = 25." },
      { id: "iq-53", skill: "Calculation", title: "1/2 + 1/3 = ?", passage: "Add fractions.", choices: ["5/6", "2/5", "3/5", "7/6"], answer: 0, insight: "1/2 + 1/3 = 5/6." },
      { id: "iq-54", skill: "Logical Reasoning", title: "All A are B. All B are C. Therefore all A are C?", passage: "Syllogism.", choices: ["Yes", "No", "Unclear", "Depends"], answer: 0, insight: "The chain of premises supports the conclusion." },
      { id: "iq-55", skill: "Numerical Logic", title: "Which is NOT even?", passage: "Even numbers are divisible by 2.", choices: ["2", "4", "7", "10"], answer: 2, insight: "7 is odd." },
      { id: "iq-56", skill: "Pattern Recognition", title: "Alphabet sequence: D, F, H, J, ?", passage: "Look at the spacing between letters.", choices: ["K", "L", "M", "N"], answer: 1, insight: "D, F, H, J skip one letter each time, so next is L." },
      { id: "iq-57", skill: "Calculation", title: "9 × 8 = ?", passage: "Multiplication.", choices: ["71", "72", "73", "74"], answer: 1, insight: "9 × 8 = 72." },
      { id: "iq-58", skill: "Logical Puzzle", title: "If it rains, I use an umbrella. Today I did not use one. Can we be sure it did not rain?", passage: "In real life, it may rain without an umbrella; distinguish from formal logic.", choices: ["It definitely rained", "It definitely did not rain", "Cannot determine", "No umbrella caused rain"], answer: 2, insight: "From 'rain → umbrella' alone we cannot conclude 'no umbrella → no rain'." },
      { id: "iq-59", skill: "Numerical Reasoning", title: "After +20% then −20%, is the value the same as before?", passage: "Percent change compounding.", choices: ["Yes", "No", "Unclear", "Depends"], answer: 1, insight: "The final value is lower than the original." },
      { id: "iq-60", skill: "Numerical Logic", title: "Which is NOT a multiple of 2?", passage: "Multiples of 2 are even.", choices: ["4", "6", "8", "9"], answer: 3, insight: "9 is not even." },
      { id: "iq-61", skill: "Sequence", title: "What comes next: 2, 4, 8, 16, ?", passage: "Each term doubles.", choices: ["20", "24", "32", "40"], answer: 2, insight: "16 × 2 = 32." },
      { id: "iq-62", skill: "Pattern Recognition", title: "Which completes the sequence? ◼ ➡️ ◻ ➡️ ◼ ➡️ ?", passage: "Square and circle alternate.", choices: ["◻", "◼", "△", "○"], answer: 0, insight: "A circle (◻) follows a square." },
      { id: "iq-63", skill: "Verbal Analogy", title: "Hand : glove = foot : ?", passage: "Match the paired item.", choices: ["sock", "shoe", "boot", "slipper"], answer: 0, insight: "Foot pairs with sock." },
      { id: "iq-64", skill: "Spatial Reasoning", title: "A painted cube is cut into 27 equal cubes. How many have exactly two painted faces?", passage: "Think about edge pieces.", choices: ["6", "12", "8", "0"], answer: 1, insight: "12 edge cubes have two painted faces." },
      { id: "iq-65", skill: "Numerical Logic", title: "What comes next: 7, 10, 14, 19, ?", passage: "Differences increase by 1.", choices: ["24", "25", "26", "27"], answer: 1, insight: "19 + 6 = 25." },
      { id: "iq-66", skill: "Logical Reasoning", title: "All roses are flowers. Some flowers fade quickly. Therefore some roses fade quickly?", passage: "Assess validity.", choices: ["True", "False", "Cannot determine", "Both"], answer: 2, insight: "Cannot deduce from the premises." },
      { id: "iq-67", skill: "Pattern Recognition", title: "Letter series: A, C, F, J, ?", passage: "Compute letter gaps.", choices: ["O", "M", "N", "P"], answer: 0, insight: "Gaps +2, +3, +4, +5 → O." },
      { id: "iq-68", skill: "Verbal Analogy", title: "Pen : write = scissors : ?", passage: "Tool and its use.", choices: ["cut", "draw", "erase", "measure"], answer: 0, insight: "Scissors are for cutting." },
      { id: "iq-69", skill: "Spatial Reasoning", title: "Rotate the letter L 90° clockwise. What shape results?", passage: "Visualize the rotation.", choices: ["┘", "└", "─", "|"], answer: 0, insight: "Clockwise 90° turns L into ┘." },
      { id: "iq-70", skill: "Numerical Reasoning", title: "If x + 2 = 7, what is x?", passage: "Simple algebra.", choices: ["4", "5", "6", "7"], answer: 1, insight: "x = 5." },
      { id: "iq-71", skill: "Verbal Analogy", title: "Bird : sky = fish : ?", passage: "Habitat pairing.", choices: ["water", "air", "land", "soil"], answer: 0, insight: "Fish live in water." },
      { id: "iq-72", skill: "Pattern Recognition", title: "Which is the odd one out: 2, 3, 5, 9, 11?", passage: "Prime vs composite.", choices: ["2", "3", "5", "9"], answer: 3, insight: "9 is not prime." },
      { id: "iq-73", skill: "Verbal Analogy", title: "Dog : bark = cat : ?", passage: "Animal and typical sound.", choices: ["meow", "purr", "hiss", "growl"], answer: 0, insight: "Cats typically meow." },
      { id: "iq-74", skill: "Numerical Logic", title: "If digit sum is divisible by 3, the number is too. Is 123 divisible by 3?", passage: "Sum the digits.", choices: ["Yes", "No"], answer: 0, insight: "1+2+3=6, divisible by 3." },
      { id: "iq-75", skill: "Calculation", title: "What is 15% of 200?", passage: "Percentage.", choices: ["20", "30", "40", "50"], answer: 1, insight: "200 × 0.15 = 30." },
      { id: "iq-76", skill: "Logical Reasoning", title: "All A are B. Some B are C. Can we conclude some A are C?", passage: "Set overlap.", choices: ["Yes", "No", "Cannot determine"], answer: 2, insight: "Overlap between A and C is not guaranteed." },
      { id: "iq-77", skill: "Pattern Recognition", title: "Next letter: M, N, P, Q, S, ?", passage: "Skipping pattern.", choices: ["T", "U", "V", "W"], answer: 1, insight: "Next is U." },
      { id: "iq-78", skill: "Verbal Analogy", title: "Cold : hot = night : ?", passage: "Opposites.", choices: ["day", "dawn", "sunrise", "evening"], answer: 0, insight: "Opposite of night is day." },
      { id: "iq-79", skill: "Spatial Reasoning", title: "A rectangle rotated 180° — what changes?", passage: "Visualize rotation.", choices: ["Looks the same", "Width/height swap", "Flips upside down", "Flips left-right"], answer: 2, insight: "180° flips it upside down." },
      { id: "iq-80", skill: "Calculation", title: "What is the square root of 81?", passage: "Basic roots.", choices: ["7", "8", "9", "10"], answer: 2, insight: "√81 = 9." },
      { id: "iq-81", skill: "Day Calculation", title: "If today is Monday, what day is it 45 days later?", passage: "Use remainder mod 7.", choices: ["Wednesday", "Thursday", "Friday", "Saturday"], answer: 1, insight: "45 mod 7 = 3 → Thursday." },
      { id: "iq-82", skill: "Pattern Recognition", title: "Next number: 5, 10, 20, 40, ?", passage: "Each term doubles.", choices: ["70", "80", "90", "100"], answer: 1, insight: "Next is 80." },
      { id: "iq-83", skill: "Verbal Analogy", title: "Sea : fish = forest : ?", passage: "Environment and creature that lives there.", choices: ["deer", "trees", "rocks", "clouds"], answer: 0, insight: "As fish live in the sea, deer live in the forest." },
      { id: "iq-84", skill: "Spatial Reasoning", title: "Triangle angles 30°, 60°, and ?", passage: "Angles sum to 180°.", choices: ["90°", "100°", "110°", "120°"], answer: 0, insight: "180 − 30 − 60 = 90°." },
      { id: "iq-85", skill: "Numerical Reasoning", title: "A train travels 120 km in 2 hours. Average speed?", passage: "Speed = distance / time.", choices: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"], answer: 1, insight: "120 / 2 = 60 km/h." },
      { id: "iq-86", skill: "Logical Reasoning", title: "All circles are round. Some round objects are red. Therefore some circles are red?", passage: "Syllogism validity.", choices: ["True", "False", "Cannot determine"], answer: 2, insight: "Cannot infer color of circles." },
      { id: "iq-87", skill: "Pattern Recognition", title: "Missing shape: ◯, △, ◯, △, ◯, ?", passage: "Alternating shapes.", choices: ["△", "◯", "□", "★"], answer: 0, insight: "Next is △." },
      { id: "iq-88", skill: "Verbal Analogy", title: "Hot : cold = up : ?", passage: "Opposites.", choices: ["down", "left", "right", "forward"], answer: 0, insight: "Opposite of up is down." },
      {
        id: "iq-major-1",
        category: "major",
        targetGroups: ["engineering"],
        skill: "Engineering Reasoning",
        title: "[Engineering] If Gear A (10 teeth) rotates clockwise 3 times, how will the meshed Gear B (15 teeth) rotate?",
        passage: "Meshed gears rotate in opposite directions, and their rotations are inversely proportional to their number of teeth.",
        choices: ["Clockwise 2 times", "Counter-clockwise 2 times", "Clockwise 4.5 times", "Counter-clockwise 4.5 times"],
        answer: 1,
        insight: "Gear A pushes 30 teeth, so Gear B rotates 30/15 = 2 times in the opposite direction (counter-clockwise)."
      },
      {
        id: "iq-job-1",
        category: "job",
        targetGroups: ["it"],
        skill: "Algorithmic Thinking",
        title: "[IT/Dev] How many comparisons are required in the worst case to find the maximum value among 100 unsorted numbers?",
        passage: "Assume the first element is the maximum and sequentially compare it with the remaining 99 elements.",
        choices: ["99 times", "100 times", "50 times", "O(log N) times"],
        answer: 0,
        insight: "In the worst case of a sequential search, you must compare the current maximum with all remaining 99 elements."
      },
      {
        id: "iq-job-design-1",
        category: "job",
        targetGroups: ["design"],
        skill: "Shape Pattern Matrix",
        title: "[Design/Planning] Which shape should replace the question mark (?) in the following 3x3 grid?\n\n[ ■ ▲ ● ]\n[ ▲ ● ■ ]\n[ ● ■ ? ]",
        passage: "Observe the Latin square rule where each unique shape (■, ▲, ●) appears exactly once in every row and column.",
        choices: ["● (Circle)", "▲ (Triangle)", "■ (Square)", "✦ (Star)"],
        answer: 1,
        insight: "Since each row and column must contain one Circle, one Triangle, and one Square, the missing shape is the Triangle (▲)."
      },
      {
        id: "iq-job-design-2",
        category: "job",
        targetGroups: ["design"],
        skill: "Spatial Reasoning",
        title: "[Design/Planning] There is a dice where the front face is '■' and the right face is '●'. If you rotate this dice 90 degrees clockwise along the front-to-back axis, to which position will the right face '●' move?",
        passage: "Visualize the dice rotating clockwise while you look directly at the front face.",
        choices: ["Top face", "Bottom face", "Left face", "Back face"],
        answer: 1,
        insight: "Rotating 90 degrees clockwise along the front-to-back axis moves the top face to the right, the right face (●) to the bottom, the bottom face to the left, and the left face to the top."
      },
      {
        id: "iq-elementary-1",
        category: "age",
        targetGroups: ["elementary"],
        difficulty: 1,
        skill: "Number Sequence",
        title: "[Elementary] What number comes next in the sequence: 1, 3, 5, 7, 9?",
        passage: "Think about the rule where the numbers increase by 2.",
        choices: ["10", "11", "12", "13"],
        answer: 1,
        insight: "It is an odd number sequence starting from 1 where each number increases by 2. So the next number after 9 is 11."
      },
      {
        id: "iq-elementary-2",
        category: "age",
        targetGroups: ["elementary"],
        difficulty: 1,
        skill: "Classification",
        title: "[Elementary] A tiger is an animal. A rose is a plant. What is a watermelon?",
        passage: "Think about whether a watermelon belongs to plants or animals.",
        choices: ["Animal", "Plant", "Mineral", "Wind"],
        answer: 1,
        insight: "A watermelon is a plant that grows on a vine in fields and bears green striped fruit."
      },
      {
        id: "iq-elementary-3",
        category: "age",
        targetGroups: ["elementary"],
        difficulty: 1,
        skill: "Comparison",
        title: "[Elementary] An older brother is taller than a younger brother. The younger brother is taller than the sister. Who is the tallest?",
        passage: "Try arranging their heights in order: Brother > Younger Brother > Sister.",
        choices: ["Brother", "Younger Brother", "Sister", "All equal"],
        answer: 0,
        insight: "Since the heights are ordered as Brother > Younger Brother > Sister, the Brother is the tallest."
      },
      {
        id: "iq-mbti-nt-1",
        category: "mbti",
        targetGroups: ["nt"],
        difficulty: 4,
        skill: "Logical Crypt",
        title: "There are three people: A (always tells the truth), B (always lies), and C (a spy who can tell truth or lie). They state:\n- A: 'I am the spy.'\n- B: 'A is telling the truth.'\n- C: 'I am not the spy.'\nWho is the real spy?",
        passage: "Use proof by contradiction to see if A being the spy leads to any inconsistency.",
        choices: ["A", "B", "C", "Cannot be determined"],
        answer: 1,
        insight: "Consistent logic only holds when B is the spy. A is the liar (lying), B is the spy (lying), and C is the truth-teller (truth)."
      },
      {
        id: "iq-mbti-nf-1",
        category: "mbti",
        targetGroups: ["nf"],
        difficulty: 3,
        skill: "Context Deduction",
        title: "Which of the following conclusions is always true?\n- If Minwoo is happy, Jisu is happy.\n- If Jisu is happy, Taeo is happy.\n- If Taeo is not happy, Subin is not happy.\n- Currently, Subin is happy.",
        passage: "Use contrapositive rules of logic to chain backwards starting from 'Subin is happy'.",
        choices: ["Minwoo is not happy", "Both Jisu and Taeo are happy", "Whether Minwoo is happy is unknown", "Only Jisu is happy and Taeo is not"],
        answer: 1,
        insight: "Since Subin is happy, Taeo is happy (contrapositive). Since Taeo is happy, Jisu is happy. Thus, both Jisu and Taeo are happy."
      },
      {
        id: "iq-mbti-sj-1",
        category: "mbti",
        targetGroups: ["sj"],
        difficulty: 3,
        skill: "Quality Check",
        title: "Rule: 'Class A products must have an even number sticker.' To verify if this rule has been followed, which two cards must you flip?\n(Cards: 1-[Class A], 2-[Odd Sticker], 3-[Class B], 4-[Even Sticker])",
        passage: "To verify if P -> Q holds, you must test P (Class A) and Not-Q (Odd sticker). (Wason Selection Task)",
        choices: ["1 and 4", "2 and 4", "1 and 2", "All of 1, 2, 3, and 4"],
        answer: 2,
        insight: "You must flip the Class A product to verify it has an even sticker, and flip the Odd sticker product to ensure it is not Class A."
      },
      {
        id: "iq-mbti-sp-1",
        category: "mbti",
        targetGroups: ["sp"],
        difficulty: 2,
        skill: "Situational Physics",
        title: "Maze device rule: 'If the gear rotates clockwise, Valve A opens. If Valve A opens, Drainage Pipe B closes.' If Drainage Pipe B is currently open, what is definitely true?",
        passage: "Trace backward: if Drainage Pipe B is open, what does that mean for Valve A and the gear?",
        choices: ["Valve A is open and gear rotates clockwise", "Valve A is closed and gear is not rotating clockwise", "The gear must be rotating counter-clockwise", "Only Valve A status is certain, gear status is unknown"],
        answer: 1,
        insight: "Since Drainage Pipe B is open, Valve A must be closed. Since Valve A is closed, the gear must not be rotating clockwise."
      }
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
      },
      {
        id: "eq-31", skill: "Empathy", title: "A colleague quietly shares personal disappointment during a break. How do you respond?", passage: "Show support without pressure.",
        choices: [
          { text: "Gently ask if they want to talk and offer to listen.", score: 4, domain: "empathy" },
          { text: "Ignore it, assuming they'll bring it up later.", score: 1, domain: "empathy" },
          { text: "Change the subject quickly to avoid awkwardness.", score: 0, domain: "empathy" },
          { text: "Offer advice immediately without being asked.", score: 2, domain: "empathy" }
        ]
      },
      {
        id: "eq-32", skill: "Self-Awareness", title: "You feel irritated when meetings run long. What should you do?", passage: "Reflect on limits and communicate.",
        choices: [
          { text: "Acknowledge the irritation and plan to request concise agendas.", score: 4, domain: "awareness" },
          { text: "Stay quiet and let irritation build.", score: 0, domain: "awareness" },
          { text: "Blame others for schedule delays.", score: 1, domain: "awareness" },
          { text: "Leave the meeting early without explanation.", score: 2, domain: "awareness" }
        ]
      },
      {
        id: "eq-33", skill: "Emotional Regulation", title: "A sudden loud noise startles you at work. How do you handle it?", passage: "Choose a calming technique.",
        choices: [
          { text: "Take three slow breaths and refocus.", score: 4, domain: "regulation" },
          { text: "Express frustration loudly.", score: 0, domain: "regulation" },
          { text: "Ignore the feeling and keep working.", score: 2, domain: "regulation" },
          { text: "Leave the workspace immediately.", score: 1, domain: "regulation" }
        ]
      },
      {
        id: "eq-34", skill: "Social Judgment", title: "Someone makes an uncomfortable joke in a group chat. How do you respond?", passage: "Keep dialogue respectful.",
        choices: [
          { text: "Briefly note the discomfort and steer to a neutral topic.", score: 4, domain: "social" },
          { text: "Laugh along to keep the mood light.", score: 1, domain: "social" },
          { text: "Ignore it and aggressively change the subject.", score: 0, domain: "social" },
          { text: "Confront them angrily in public.", score: 2, domain: "social" }
        ]
      },
      {
        id: "eq-35", skill: "Empathy", title: "A friend seems distant after bad news. What is appropriate?", passage: "Offer quiet support.",
        choices: [
          { text: "Send a gentle check-in and offer to listen.", score: 4, domain: "empathy" },
          { text: "Demand they explain immediately.", score: 0, domain: "empathy" },
          { text: "Make a joke to lighten the mood.", score: 1, domain: "empathy" },
          { text: "Give space and do nothing.", score: 2, domain: "empathy" }
        ]
      },
      {
        id: "eq-36", skill: "Self-Awareness", title: "You overcommit and feel burnt out. What helps regain balance?", passage: "Set boundaries.",
        choices: [
          { text: "Log commitments, prioritize, and decline new tasks beyond capacity.", score: 4, domain: "awareness" },
          { text: "Push through everything regardless.", score: 0, domain: "awareness" },
          { text: "Blame external factors for lack of time.", score: 1, domain: "awareness" },
          { text: "Take a vacation without planning work.", score: 2, domain: "awareness" }
        ]
      },
      {
        id: "eq-37", skill: "Emotional Regulation", title: "Unexpected criticism makes you defensive. How do you respond constructively?", passage: "Separate emotion from content.",
        choices: [
          { text: "Pause, consider the feedback, and respond calmly.", score: 4, domain: "regulation" },
          { text: "Argue back immediately.", score: 0, domain: "regulation" },
          { text: "Ignore the criticism completely.", score: 1, domain: "regulation" },
          { text: "Vent to a colleague.", score: 2, domain: "regulation" }
        ]
      },
      {
        id: "eq-38", skill: "Social Judgment", title: "A teammate is repeatedly late to meetings. Most effective response?", passage: "Address behavior while preserving teamwork.",
        choices: [
          { text: "Discuss privately and agree on start times.", score: 4, domain: "social" },
          { text: "Call them out publicly in a meeting.", score: 0, domain: "social" },
          { text: "Ignore the lateness.", score: 1, domain: "social" },
          { text: "Reschedule all meetings for them.", score: 2, domain: "social" }
        ]
      },
      {
        id: "eq-39", skill: "Empathy", title: "A workshop participant hesitates to share an idea. How do you encourage them?", passage: "Create psychological safety.",
        choices: [
          { text: "Invite them gently and say all perspectives are valued.", score: 4, domain: "empathy" },
          { text: "Press them to speak quickly.", score: 0, domain: "empathy" },
          { text: "Move on without addressing them.", score: 1, domain: "empathy" },
          { text: "Joke about their silence.", score: 2, domain: "empathy" }
        ]
      },
      {
        id: "eq-40", skill: "Self-Awareness", title: "You become impatient waiting in line. What helps?", passage: "Coping strategies.",
        choices: [
          { text: "Practice mindful breathing and observe surroundings.", score: 4, domain: "awareness" },
          { text: "Vent frustration loudly.", score: 0, domain: "awareness" },
          { text: "Try to skip the line.", score: 1, domain: "awareness" },
          { text: "Leave the queue entirely.", score: 2, domain: "awareness" }
        ]
      },
      {
        id: "eq-job-1",
        category: "job",
        targetGroups: ["service", "sales"],
        skill: "Emotional Labor Regulation",
        title: "[Service/Sales] A customer is extremely angry and making unreasonable demands. What is your first response?",
        passage: "Accept the customer's feelings first, but maintain a problem-solving approach to guide the situation.",
        choices: [
          { text: "Empathize with their anger first, then propose realistic alternatives.", score: 4, domain: "regulation" },
          { text: "Politely but firmly state that it is strictly against company policy.", score: 0, domain: "regulation" },
          { text: "Apologize profusely and do exactly as they want immediately.", score: 1, domain: "regulation" },
          { text: "Pretend to listen but ignore their actual demands.", score: 2, domain: "regulation" }
        ]
      },
      {
        id: "eq-elementary-1",
        category: "age",
        targetGroups: ["elementary"],
        difficulty: 1,
        skill: "Peer Empathy",
        title: "[Elementary] A classmate falls down and starts crying on the school playground. What do you do?",
        passage: "Think about how you can comfort and help your friend when they are hurt.",
        choices: [
          { text: "Go over to them, ask if they are okay, and help them up or take them to the nurse's office.", score: 4, domain: "empathy" },
          { text: "Pretend not to notice and pass by because they might feel embarrassed.", score: 2, domain: "empathy" },
          { text: "Laugh because they looked funny when they fell.", score: 0, domain: "empathy" },
          { text: "Just watch from a distance and then walk away to play somewhere else.", score: 1, domain: "empathy" }
        ]
      },
      {
        id: "eq-elementary-2",
        category: "age",
        targetGroups: ["elementary"],
        difficulty: 1,
        skill: "Emotional Regulation",
        title: "[Elementary] You are playing a board game with friends and you lose. You feel angry and upset. What should you do?",
        passage: "Even if you are upset about losing, controlling your anger and looking forward to the next game is important.",
        choices: [
          { text: "Take a deep breath and tell yourself, 'It's just a game, let's try to win next time!'", score: 4, domain: "regulation" },
          { text: "Scream or flip the board game over because you think it's unfair.", score: 0, domain: "regulation" },
          { text: "Feel angry at your friends who won, and go home immediately.", score: 1, domain: "regulation" },
          { text: "Hold your anger in but refuse to talk to anyone for the rest of the day.", score: 2, domain: "regulation" }
        ]
      },
      {
        id: "eq-elementary-3",
        category: "age",
        targetGroups: ["elementary"],
        difficulty: 1,
        skill: "Communication",
        title: "[Elementary] Your desk mate is playing with a very fun toy that you really want to borrow. How should you ask?",
        passage: "It is important to ask politely while respecting your friend's feelings.",
        choices: [
          { text: "Say politely, 'That toy looks so fun! Can I borrow it when you are done playing?'", score: 4, domain: "social" },
          { text: "Snatch the toy away when they are not looking.", score: 0, domain: "social" },
          { text: "Stare at your desk mate with a grumpy face to show you are unhappy.", score: 1, domain: "social" },
          { text: "Whine and throw a tantrum until they give it to you.", score: 0, domain: "social" }
        ]
      },
      {
        id: "eq-mbti-nt-1",
        category: "mbti",
        targetGroups: ["nt"],
        difficulty: 3,
        skill: "Rational Response",
        title: "During a team meeting, a colleague points out a critical data calculation error in your proposal, and you realize they are correct. What is the most emotionally mature response?",
        passage: "Disconnect personal feelings and focus on objective truth to optimize the project's efficiency.",
        choices: [
          { text: "Immediately acknowledge the error and state that you will quickly update and share the corrected high-quality proposal.", score: 4, domain: "regulation" },
          { text: "Defend that the error is minor and that the overall direction of the proposal is what truly matters.", score: 1, domain: "regulation" },
          { text: "Shift the blame to another team member who provided the base data, clarifying it is not your fault.", score: 0, domain: "regulation" },
          { text: "Feel embarrassed, walk out of the meeting room, and protest privately later.", score: 0, domain: "regulation" }
        ]
      },
      {
        id: "eq-mbti-nf-1",
        category: "mbti",
        targetGroups: ["nf"],
        difficulty: 3,
        skill: "Relational Empathy",
        title: "A close friend comes to you crying due to a painful breakup and asks in despair, 'Will I ever find true love in my life?' What is the most deeply comforting response?",
        passage: "Consider the value of absolute emotional validation and presence, rather than logical alternatives or solutions.",
        choices: [
          { text: "Hug them and say, 'I can't even imagine how broken your heart must feel... Don't try to be strong right now, just cry as much as you need to. I'm always here for you.'", score: 4, domain: "empathy" },
          { text: "Give rational advice: 'Statistically, there is a high probability of meeting someone new within 6 months after a breakup, so don't be sad.'", score: 1, domain: "empathy" },
          { text: "Try to shift the mood: 'Forget about that terrible ex, let's go grab a drink to cheer you up!'", score: 2, domain: "empathy" },
          { text: "Analyze the situation: 'Your codependent attitude in relationships might have been the cause, so take this opportunity for self-reflection.'", score: 0, domain: "empathy" }
        ]
      },
      {
        id: "eq-mbti-sj-1",
        category: "mbti",
        targetGroups: ["sj"],
        difficulty: 3,
        skill: "Social Norms",
        title: "You are the resident representative manager of an apartment. By rule, households with long-term unpaid utility bills must immediately have their water suspended. However, you learn about a senior citizen living alone who is facing severe financial hardship. What is the most responsible response?",
        passage: "Seek a way to maintain the fairness of the rule while systematically incorporating moral care as a community member.",
        choices: [
          { text: "Pay a portion of the bill out of your own pocket to temporarily delay the suspension, and immediately contact social welfare services.", score: 4, domain: "social" },
          { text: "Enforce the suspension according to the rule, as making exceptions would be unfair to other residents.", score: 2, domain: "social" },
          { text: "Let compassion take over, omit the ledger record, and permanently ignore the unpaid bills.", score: 0, domain: "social" },
          { text: "Post their situation under their real name on the apartment bulletin board to urge immediate charitable donations.", score: 1, domain: "social" }
        ]
      },
      {
        id: "eq-mbti-sp-1",
        category: "mbti",
        targetGroups: ["sp"],
        difficulty: 2,
        skill: "Situational Agility",
        title: "During an outdoor business dinner with a crucial buyer, a sudden torrential downpour ruins the event. The buyer is visibly displeased. What is the most flexible response to handle the crisis?",
        passage: "Consider a flexible and relationship-oriented response that turns an unexpected crisis into a spontaneous, pleasant event.",
        choices: [
          { text: "Immediately guide the buyer to a charming indoor venue nearby, saying cheerfully, 'This will be a memorable, special rainy-day meeting with a very precious guest.'", score: 4, domain: "regulation" },
          { text: "Loudly blame the planning company's poor weather backup and share your anger by promising legal action against them.", score: 1, domain: "regulation" },
          { text: "Simply hold an umbrella over the buyer in silence, waiting helplessly for the rain to stop.", score: 2, domain: "regulation" },
          { text: "Suggest a compensation plan, offering to immediately pay cash for dry cleaning their wet suit.", score: 0, domain: "regulation" }
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
  categories: {
    age: {
      label: "Age Group",
      options: [
        { id: "elementary", label: "Elementary School" },
        { id: "middle", label: "Middle School" },
        { id: "high", label: "High School" },
        { id: "college_adult", label: "College & Adults" }
      ]
    },
    major: {
      label: "Major",
      options: [
        { id: "engineering", label: "Engineering" },
        { id: "business", label: "Business & Econ" },
        { id: "humanities", label: "Humanities & Social" },
        { id: "arts", label: "Arts & Physical" }
      ]
    },
    job: {
      label: "Job Field",
      options: [
        { id: "it", label: "IT / Data" },
        { id: "sales", label: "Sales / Marketing" },
        { id: "design", label: "Design / Planning" },
        { id: "service", label: "Service / CS" }
      ]
    },
    mbti: {
      label: "Personality (MBTI)",
      options: [
        { id: "diagnose", label: "💡 Start after personality diagnosis (Recommended)" },
        { id: "nt", label: "Analysts (NT)" },
        { id: "nf", label: "Diplomats (NF)" },
        { id: "sj", label: "Sentinels (SJ)" },
        { id: "sp", label: "Explorers (SP)" }
      ]
    }
  }
};
