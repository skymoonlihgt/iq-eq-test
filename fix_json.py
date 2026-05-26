import re

with open('sq-test/analysis.json', 'r', encoding='utf-8') as f:
    data = f.read()

# Replace string concatenation
data = re.sub(r'"\s*\+\s*"', '', data)

# The pattern is: ", "religion": or ", "allergy": etc on the SAME LINE as a previous key's desc.
data = re.sub(r'("\s*,\s*")((?:religion|allergy|wellness|spending|prescription)":\s*\{)', r'"} ,\n    "\2', data)

with open('sq-test/analysis.json', 'w', encoding='utf-8') as f:
    f.write(data)
