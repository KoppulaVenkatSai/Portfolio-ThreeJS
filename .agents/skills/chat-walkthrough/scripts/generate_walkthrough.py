#!/usr/bin/env python3
import os
import json
import re
import argparse
import glob
from datetime import datetime

def parse_user_input(content):
    m_req = re.search(r'<USER_REQUEST>(.*?)</USER_REQUEST>', content, re.DOTALL)
    req_text = m_req.group(1).strip() if m_req else ""
    
    if "Comments on artifact URI" in content:
        pre_req = content.split("<USER_REQUEST>")[0].strip()
        is_approved = "approved this document" in pre_req
        uri_match = re.search(r'Comments on artifact URI:\s*(.*?)\n', pre_req)
        filename = uri_match.group(1).strip().split("/")[-1] if uri_match else "artifact"
        
        pattern = r'Selection:\n>(.*?)\n\nComment: "(.*?)"'
        matches = re.findall(pattern, pre_req, re.DOTALL)
        
        desc = ""
        if is_approved:
            desc += f"**[Artifact Action] User approved {filename}**\n\n"
        else:
            desc += f"**[Artifact Review] Comments on {filename}:**\n\n"
            
        if matches:
            for sel, comm in matches:
                sel_clean = sel.split("  .code-block")[0].replace("\n", " ").strip()
                desc += f"- **Selected:** `{sel_clean}`\n  - **Feedback:** *\"{comm}\"*\n"
        
        if req_text:
            desc += f"\nAdditional comment:\n> {req_text}"
            
        return desc.strip()
        
    return req_text if req_text else content.strip()

def filter_response(resp):
    if not resp.strip():
        return ""
    # Filter out internal list/thought lines starting with "I will ..." or common planning sentences
    prefixes = [
        "I will list", "I will view", "I will search", "I will run", 
        "I will modify", "I will edit", "I will write", "I will create",
        "I will execute", "I will adjust", "I will update", "I will perform",
        "I will locate", "I will overwrite", "I will check", "I will inspect",
        "I will print", "I will use", "I will configure", "I will add",
        "I will retrieve", "I will test", "I will verify", "I will propose",
        "I will delete", "I will move", "I will copy", "I will clear", "I will get"
    ]
    lines_filtered = []
    for line in resp.split("\n"):
        line_strip = line.strip()
        if any(line_strip.startswith(p) for p in prefixes):
            continue
        lines_filtered.append(line)
        
    res = "\n".join(lines_filtered).strip()
    return res

def fix_truncations(text):
    return text

def generate_relevant_filename(convo_turns, convo_id=None):
    stop_words = {
        "the", "a", "an", "and", "or", "to", "in", "for", "with", "on", "at", "by",
        "from", "of", "it", "this", "that", "i", "we", "you", "my", "me", "can",
        "now", "just", "please", "update", "run", "do", "how", "what", "is", "are",
        "good", "great", "yes", "no", "not", "too", "have", "ahve", "also", "look",
        "into", "lets", "let", "set", "add", "all", "back", "more", "users", "venkat",
        "desktop", "other", "projects", "threetest", "portfolio", "threejs", "chat",
        "history", "walkthrough", "markdown", "file", "skill", "checkpoint", "relevent",
        "relevant", "remind", "work", "store", "new", "name"
    }
    
    keywords = []
    for turn in convo_turns:
        user_text = turn.get("user", "")
        # Filter out path-like tokens and mentions
        user_text = re.sub(r'/[^\s]+', ' ', user_text)
        user_text = re.sub(r'@\[[^\]]+\]', ' ', user_text)
        clean_text = re.sub(r'[^a-zA-Z\s]', ' ', user_text)
        words = [w.lower() for w in clean_text.split() if w.lower() not in stop_words and len(w) >= 3]
        keywords.extend(words)
    
    seen = set()
    selected = []
    for k in keywords:
        if k not in seen:
            seen.add(k)
            selected.append(k)
        if len(selected) >= 5:
            break
            
    slug = "_".join(selected) if selected else "session"
    base_name = f"chat_walkthrough_{slug}"
    
    filename = f"{base_name}.md"
    if os.path.exists(filename):
        time_str = datetime.now().strftime("%Y%m%d_%H%M%S")
        filename = f"{base_name}_{time_str}.md"
        
    return filename

def main():
    parser = argparse.ArgumentParser(description="Generate polished chat walkthrough markdown.")
    parser.add_argument("--transcript", help="Path to transcript.jsonl")
    parser.add_argument("--output", help="Path to write the markdown walkthrough file")
    parser.add_argument("--convo-id", help="Conversation ID to extract")
    args = parser.parse_args()

    brain_dir = "/Users/venkat/.gemini/antigravity-ide/brain"
    
    # Resolve transcript path
    transcript_path = args.transcript
    convo_id = args.convo_id
    if not transcript_path:
        if convo_id:
            transcript_path = os.path.join(brain_dir, convo_id, ".system_generated", "logs", "transcript.jsonl")
        else:
            pattern = os.path.join(brain_dir, "*", ".system_generated", "logs", "transcript.jsonl")
            candidates = glob.glob(pattern)
            if not candidates:
                print(f"Error: No transcripts found under {brain_dir}")
                return
            candidates.sort(key=os.path.getmtime, reverse=True)
            transcript_path = candidates[0]
            convo_id = transcript_path.split("/")[-4]
            print(f"Auto-detected active transcript: {transcript_path}")

    if not os.path.exists(transcript_path):
        print(f"Error: Transcript file not found at {transcript_path}")
        return

    try:
        with open(transcript_path, "r", encoding="utf-8") as f:
            lines = f.readlines()
    except Exception as e:
        print(f"Error reading transcript: {e}")
        return

    convo_turns = []
    current_user = None
    current_model_responses = []

    for line in lines:
        try:
            data = json.loads(line)
            source = data.get("source")
            type_ = data.get("type")
            content = data.get("content", "")
            
            if source == "USER_EXPLICIT" and type_ == "USER_INPUT":
                if current_user is not None:
                    final_response = ""
                    for resp in reversed(current_model_responses):
                        filtered = filter_response(resp)
                        if filtered:
                            final_response = filtered
                            break
                    convo_turns.append({
                        "user": current_user,
                        "model": final_response if final_response else "*(The model proceeded directly to tool execution and planning.)*"
                    })
                
                current_user = parse_user_input(content)
                current_model_responses = []
                
            elif source == "MODEL" and type_ == "PLANNER_RESPONSE":
                current_model_responses.append(content)
        except Exception as e:
            pass

    # Add the last turn
    if current_user is not None:
        final_response = ""
        for resp in reversed(current_model_responses):
            filtered = filter_response(resp)
            if filtered:
                final_response = filtered
                break
        convo_turns.append({
            "user": current_user,
            "model": final_response if final_response else "*(Response pending)*"
        })

    # Resolve output path dynamically
    output_path = args.output
    if not output_path:
        filename = generate_relevant_filename(convo_turns, convo_id)
        output_path = os.path.join(os.getcwd(), filename)

    # Format into Markdown
    title_slug = os.path.basename(output_path).replace(".md", "").replace("chat_walkthrough_", "").replace("_", " ").title()
    md_content = f"# Chat Walkthrough: {title_slug}\n\n"
    md_content += f">> **Conversation ID**: `{convo_id}`  \n"
    md_content += f">> **Generated**: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}  \n"
    md_content += f">> **Total Turns**: {len(convo_turns)}\n\n"
    md_content += "---\n\n"

    for idx, turn in enumerate(convo_turns, 1):
        user_text = turn["user"]
        model_text = turn["model"]
        
        model_text = fix_truncations(model_text)
        model_text = re.sub(r'\n{3,}', '\n\n', model_text)
        
        md_content += f"## Turn {idx}: User Request\n\n"
        if not user_text.startswith("**[Artifact"):
            md_content += f"> {user_text}\n\n"
        else:
            md_content += f"{user_text}\n\n"
        md_content += "### Antigravity Response\n\n"
        md_content += f"{model_text}\n\n"
        md_content += "---\n\n"

    md_content = re.sub(r'\n{3,}', '\n\n', md_content)

    try:
        with open(output_path, "w", encoding="utf-8") as f:
            f.write(md_content)
        print(f"Successfully generated chat history walkthrough at: {output_path}")
        print(f"Total turns extracted: {len(convo_turns)}")
    except Exception as e:
        print(f"Error writing output file: {e}")

if __name__ == "__main__":
    main()
