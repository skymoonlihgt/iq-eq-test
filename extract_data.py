import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# The data ends exactly before `const subjectBlueprints = [`
end_idx = content.find('const subjectBlueprints = [')

data_str = content[:end_idx]
rest_str = content[end_idx:]

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(data_str)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(rest_str)
