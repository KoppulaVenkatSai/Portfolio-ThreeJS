---
name: chat-walkthrough
description: Generates a polished, chronological Markdown walkthrough of the current chat session, filtering out internal agent thoughts and restoring truncated log fragments.
license: MIT
metadata:
  version: "1.0.0"
  author: Antigravity
---

# Chat Walkthrough Skill

This skill allows the agent or user to automatically generate a detailed, chronological Markdown walkthrough of the active chat session.

## Usage

Run the Python helper script provided in the skill package to parse `transcript.jsonl`, filter out internal agent thoughts, and reconstruct any truncated text.

### Execution

```bash
python3 /Users/venkat/.gemini/antigravity-ide/skills/chat-walkthrough/scripts/generate_walkthrough.py [options]
```

### Options

- `--transcript <path>`: Path to the `transcript.jsonl` file. If omitted, the script automatically detects the most recently updated conversation transcript in the brain directory.
- `--output <path>`: Output path for the `.md` file. Defaults to `chat_history_walkthrough.md` in the current directory.
- `--convo-id <id>`: Specifies a particular Conversation ID to build.
