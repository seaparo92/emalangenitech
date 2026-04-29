import os
from datetime import datetime

# -----------------------------
# FILTER RULES
# -----------------------------
IGNORE_DIRS = {
    'node_modules', 'dist', 'build', 'obj', 'bin', '.git', '.vs', '__pycache__'
}

IGNORE_FILE_PATTERNS = (
    '.dll', '.pdb', '.vsidx', '.wsuo',
    '.ttf', '.woff', '.png', '.jpg', '.svg', '.webp',
    '.css', '.lock', '.ico',
    'index.ts', '.test.tsx', '.Test.cs'
)

ALLOW_JSON_FILES = ('tsconfig.json', 'package.json', 'appsettings.json')

# -----------------------------
# HELPER FUNCTIONS
# -----------------------------
def should_ignore_file(file_path):
    """Return True if the file should be ignored."""
    # Ignore directories
    for d in IGNORE_DIRS:
        if d in file_path.split(os.sep):
            return True

    fname = os.path.basename(file_path)

    # Always allow some JSON files
    if fname in ALLOW_JSON_FILES:
        return False

    # Ignore by pattern
    for pat in IGNORE_FILE_PATTERNS:
        if fname.endswith(pat) or fname == pat:
            return True

    return False


def scan_directory(root_path, allowed_extensions=None):
    """Scan a directory recursively and return included files."""
    files = []
    for dirpath, dirnames, filenames in os.walk(root_path):
        for f in filenames:
            full_path = os.path.join(dirpath, f)
            if should_ignore_file(full_path):
                continue
            if allowed_extensions:
                if not any(f.endswith(ext) for ext in allowed_extensions):
                    continue
            files.append(os.path.relpath(full_path, root_path))
    return files


def summarize_domain_entities(domain_path):
    """Return summary of domain entities instead of full list."""
    if not os.path.exists(domain_path):
        return "Domain path does not exist."
    count = 0
    for dirpath, _, filenames in os.walk(domain_path):
        for f in filenames:
            if f.endswith('.cs'):
                count += 1
    return f"Domain contains ~{count} entity classes."


def create_project_map(fe_path=None, be_path=None, output_path=None):
    """
    Scan project folders and create a clean project map.
    Generic: works for any FE/BE combo.
    """
    if fe_path is None:
        fe_path = input("Enter Frontend root path (or leave blank if none): ").strip()
        if fe_path == "":
            fe_path = None

    if be_path is None:
        be_path = input("Enter Backend root path (or leave blank if none): ").strip()
        if be_path == "":
            be_path = None

    if output_path is None:
        output_path = os.path.join('.claude', 'skills', 'project_map', 'project.map.md')
        os.makedirs(os.path.dirname(output_path), exist_ok=True)

    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    map_lines = [
        "="*80,
        "PROJECT MAP",
        f"Generated: {now}",
        "="*80,
        ""
    ]

    # -----------------------------
    # Frontend
    # -----------------------------
    if fe_path:
        map_lines.append("FRONTEND FILES:")
        fe_files = scan_directory(fe_path, allowed_extensions=('.ts', '.tsx', '.json'))
        if fe_files:
            for f in fe_files:
                map_lines.append(f"- {f}")
        else:
            map_lines.append("No frontend files found.")
        map_lines.append("")

    # -----------------------------
    # Backend
    # -----------------------------
    if be_path:
        map_lines.append("BACKEND FILES:")
        be_files = scan_directory(be_path, allowed_extensions=('.cs', '.json'))
        if be_files:
            for f in be_files:
                map_lines.append(f"- {f}")
        else:
            map_lines.append("No backend files found.")
        map_lines.append("")

        # Summarize Domain/Entities
        domain_path = os.path.join(be_path, 'Domain')
        map_lines.append("DOMAIN ENTITIES SUMMARY:")
        map_lines.append(summarize_domain_entities(domain_path))
        map_lines.append("")

    # Write to file
    with open(output_path, "w", encoding="utf-8") as f:
        f.write("\n".join(map_lines))

    print(f"Project map created/updated at {output_path}.")
