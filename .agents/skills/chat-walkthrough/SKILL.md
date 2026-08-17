---
name: chat-walkthrough
description: Generates a polished, chronological Markdown walkthrough of the current chat session, filtering out internal agent thoughts and creating uniquely, relevantly named markdown files automatically.
license: MIT
metadata:
  version: "1.1.0"
  author: Antigravity
---

# Chat Walkthrough Skill

This skill allows the agent or user to automatically generate a detailed, chronological Markdown walkthrough of the active chat session.

## Features

- Extracts complete chronological turns (User Requests & Antigravity Responses).
- Filters out internal agent thoughts and planning prefixes.
- Automatically generates a contextually relevant, uniquely named Markdown file (e.g. `chat_walkthrough_<topic_slug>.md`) every time.

## Usage

Run the Python helper script provided in the skill package:

```bash
python3 /Users/venkat/.gemini/antigravity-ide/skills/chat-walkthrough/scripts/generate_walkthrough.py [options]
```

### Options

- `--output <path>`: Output path for the `.md` file. If omitted, automatically generates a new uniquely named file based on the conversation topic.
- `--transcript <path>`: Path to the `transcript.jsonl` file. If omitted, automatically detects the active conversation transcript.
- `--convo-id <id>`: Specifies a particular Conversation ID to extract.
