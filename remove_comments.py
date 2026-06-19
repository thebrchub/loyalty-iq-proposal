import re
from pathlib import Path

EXTENSIONS = {
    ".js",
    ".jsx",
    ".ts",
    ".tsx",
    ".css",
    ".scss"
}

for file in Path("src").rglob("*"):
    if file.suffix in EXTENSIONS:

        content = file.read_text(
            encoding="utf-8",
            errors="ignore"
        )

        # Remove /* */
        content = re.sub(
            r"/\*[\s\S]*?\*/",
            "",
            content
        )

        # Remove //
        content = re.sub(
            r"^\s*//.*$",
            "",
            content,
            flags=re.MULTILINE
        )

        file.write_text(
            content,
            encoding="utf-8"
        )

print("Comments removed.")