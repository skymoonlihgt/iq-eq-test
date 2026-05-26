import re
import glob

def fix_css_vars(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to replace var(--name, fallback) or var(--name)
    content = re.sub(r'var\(--text-color(?:,\s*#[0-9a-fA-F]+)?\)', 'var(--ink)', content)
    content = re.sub(r'var\(--bg-color(?:,\s*#[0-9a-fA-F]+)?\)', 'var(--bg-app)', content)
    content = re.sub(r'var\(--surface-color(?:,\s*#[0-9a-fA-F]+)?\)', 'var(--surface)', content)
    content = re.sub(r'var\(--panel-color.*?#1e1e24\)\)', 'var(--panel)', content)
    content = re.sub(r'var\(--border-color(?:,\s*#[0-9a-fA-F]+)?\)', 'var(--line)', content)
    content = re.sub(r'var\(--primary-color(?:,\s*#[0-9a-fA-F]+)?\)', 'var(--green)', content)
    content = re.sub(r'var\(--text-secondary(?:,\s*#[0-9a-fA-F]+)?\)', 'var(--muted)', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

for f in ['sq-test/style.css', 'sq-test/analysis.html', 'sq-test/questions.html', 'sq-test/index.html', 'mq-test/analysis.html']:
    try:
        fix_css_vars(f)
        print(f"Fixed {f}")
    except FileNotFoundError:
        pass
