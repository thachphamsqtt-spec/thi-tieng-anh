import json
import re
import eng_to_ipa as ipa

# Custom dictionary for military, technical terms, hyphenated words, abbreviations, and times
CUSTOM_IPA = {
    "05:00": "oʊ faɪv ˈhʌndrəd",
    "05:30": "oʊ faɪv ˈθɜːrti",
    "06:00": "oʊ sɪks ˈhʌndrəd",
    "12:00": "twɛlv ˈhʌndrəd",
    "13:30": "ˈθɜːrtiːn ˈθɜːrti",
    "16:00–17:00": "sɪksˈtiːn ˈhʌndrəd tuː sɛvənˈtiːn ˈhʌndrəd",
    "18:00": "eɪˈtiːn ˈhʌndrəd",
    "19:00": "naɪnˈtiːn ˈhʌndrəd",
    "21:00": "ˈtwɛnti wʌn ˈhʌndrəd",
    "21:30–05:00": "ˈtwɛnti wʌn ˈθɜːrti tuː oʊ faɪv ˈhʌndrəd",
    "5k": "faɪv keɪ",
    "5K": "faɪv keɪ",
    "c4isr": "ˌsiː fɔːr aɪ ɛs ˈɑːr",
    "C4ISR": "ˌsiː fɔːr aɪ ɛs ˈɑːr",
    "defence’s": "dɪˈfɛnsɪz",
    "Defence’s": "dɪˈfɛnsɪz",
    "defences": "dɪˈfɛnsɪz",
    "flag-raising": "ˈflæɡˌreɪzɪŋ",
    "Flag-raising": "ˈflæɡˌreɪzɪŋ",
    "party-member": "ˈpɑːrtiˌmɛmbər",
    "Party-member": "ˈpɑːrtiˌmɛmbər",
    "people’s": "ˈpiːpəlz",
    "People’s": "ˈpiːpəlz",
    "peoples": "ˈpiːpəlz",
    "qr": "ˌkjuː ˈɑːr",
    "QR": "ˌkjuː ˈɑːr",
    "rfid": "ˌɑːr ɛf aɪ ˈdiː",
    "RFID": "ˌɑːr ɛf aɪ ˈdiː",
    "td-office": "ˌtiː diː ˈɒfɪs",
    "TD-Office": "ˌtiː diː ˈɒfɪs",
    "vtv1": "ˌviː tiː viː wʌn",
    "VTV1": "ˌviː tiː viː wʌn",
    "wtte": "ˌdʌbəl juː tiː tiː ˈiː",
    "WTTE": "ˌdʌbəl juː tiː tiː ˈiː",
    "work-file": "ˈwɜːrk faɪl",
    "Work-File": "ˈwɜːrk faɪl",
    "work-files": "ˈwɜːrk faɪlz",
    "combat-readiness": "ˈkɒmbæt ˈrɛdɪnəs",
    "commander’s": "kəˈmændərz",
    "commanders": "kəˈmændərz",
    "current-affairs": "ˈkʌrənt əˈfɛərz",
    "cybersecurity": "ˌsaɪbərsɪˈkjʊərɪti",
    "data-transmission": "ˈdeɪtə trænzˈmɪʃən",
    "day’s": "deɪz",
    "days": "deɪz",
    "dual-use": "ˈdjuːəl juːs",
    "e-government": "ˌiː ˈɡʌvərnmənt",
    "facial-recognition": "ˈfeɪʃəl ˌrɛkəɡˈnɪʃən",
    "half-mast": "ˈhæfˌmæst",
    "laser-based": "ˈleɪzər beɪst",
    "leader’s": "ˈliːdərz",
    "leaders": "ˈliːdərz",
    "lifelong-learning": "ˈlaɪflɒŋ ˈlɜːrnɪŋ",
    "military’s": "ˈmɪlɪtəriz",
    "reveille": "ˈrɛvəli",
    "self-review": "ˌsɛlf rɪˈvjuː",
    "smart-weapon": "ˈsmɑːrt ˈwɛpən",
    "weapon-cleaning": "ˈwɛpən ˌkliːnɪŋ",
    "smart, regular, elite unit": "smɑːrt, ˈrɛɡjələr, eɪˈliːt ˈjuːnɪt",
    "ai": "ˌeɪ ˈaɪ",
    "AI": "ˌeɪ ˈaɪ",
    "2025": "ˈtwɛnti ˈtwɛnti faɪv",
    "10": "tɛn",
    "11": "ɪˈlɛvən",
    "16": "sɪksˈtiːn",
    "3": "θriː",
    "three": "θriː",
    "four": "fɔːr",
    "5": "faɪv",
    "No.": "ˈnʌmbər",
    "no.": "ˈnʌmbər",
}

def to_ipa_sentence(text):
    tokens = re.findall(r"[\w’'–-]+|[^\w\s]", text)
    result = []
    for token in tokens:
        clean_token = token.strip()
        lower_token = clean_token.lower()
        if clean_token in CUSTOM_IPA:
            result.append(CUSTOM_IPA[clean_token])
        elif lower_token in CUSTOM_IPA:
            result.append(CUSTOM_IPA[lower_token])
        elif re.match(r"^[^\w\s]$", token):
            result.append(token)
        else:
            if '-' in clean_token:
                parts = clean_token.split('-')
                conv_parts = []
                for p in parts:
                    if p in CUSTOM_IPA:
                        conv_parts.append(CUSTOM_IPA[p])
                    elif p.lower() in CUSTOM_IPA:
                        conv_parts.append(CUSTOM_IPA[p.lower()])
                    else:
                        conv_parts.append(ipa.convert(p).rstrip('*'))
                result.append('-'.join(conv_parts))
            else:
                conv = ipa.convert(clean_token).rstrip('*')
                result.append(conv)
    
    out = ""
    for tok in result:
        if tok in ".,;?!:()[]\"'”":
            if tok in "([“":
                out += " " + tok
            else:
                out += tok
        else:
            if out and not out.endswith((" ", "(", "[", "“")):
                out += " "
            out += tok
    return out.strip()

with open('extracted_raw.json', 'r', encoding='utf-8') as f:
    lines = json.load(f)

questions = []
current_q = None
current_part = 1
part_names = {
    1: 'Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội',
    2: 'Phần 2: Chế độ ngày và tuần trong Quân đội'
}

for line in lines:
    line = line.strip()
    if not line:
        continue
    
    if 'PART 2.' in line or 'PHẦN 2.' in line:
        current_part = 2
        continue
    
    q_match = re.match(r'^Question\s+(\d+)\.\s*(.*)', line, re.IGNORECASE)
    if q_match:
        if current_q:
            questions.append(current_q)
        q_id = int(q_match.group(1))
        current_q = {
            'id': q_id,
            'part': current_part,
            'partName': part_names[current_part],
            'question_en': q_match.group(2).strip(),
            'question_vi': '',
            'answer_en': '',
            'answer_vi': '',
            'vocab': [],
            'vocab_raw': '',
            'note': ''
        }
        continue
    
    if current_q:
        if line.startswith('Tiếng Việt:'):
            current_q['question_vi'] = line.replace('Tiếng Việt:', '').strip()
        elif line.startswith('Correct answer:'):
            current_q['answer_en'] = line.replace('Correct answer:', '').strip()
        elif line.startswith('Dịch đáp án:'):
            current_q['answer_vi'] = line.replace('Dịch đáp án:', '').strip()
        elif line.startswith('Từ vựng trọng tâm:'):
            raw_v = line.replace('Từ vựng trọng tâm:', '').strip()
            current_q['vocab_raw'] = raw_v
            items = [item.strip() for item in re.split(r'[•\u2022]', raw_v) if item.strip()]
            for item in items:
                parts = re.split(r'\s+[–—\-]\s+|\s+[–—]\s*', item, maxsplit=1)
                if len(parts) == 2:
                    current_q['vocab'].append({'en': parts[0].strip(), 'vi': parts[1].strip()})
                else:
                    current_q['vocab'].append({'en': item, 'vi': ''})
        elif 'Ghi chú' in line or 'tài liệu gốc' in line:
            current_q['note'] = line

if current_q:
    questions.append(current_q)

# Enrich all questions with IPA
for q in questions:
    q['question_ipa'] = "/" + to_ipa_sentence(q['question_en']) + "/"
    q['answer_ipa'] = "/" + to_ipa_sentence(q['answer_en']) + "/"
    for v in q['vocab']:
        v['ipa'] = "/" + to_ipa_sentence(v['en']) + "/"

print(f'Successfully parsed and generated IPA for {len(questions)} questions.')

with open('questions_data.js', 'w', encoding='utf-8') as f:
    f.write('// 50 Questions & Answers dataset with IPA transcriptions\n')
    f.write('const QUESTIONS_DATA = ' + json.dumps(questions, ensure_ascii=False, indent=2) + ';\n')

with open('questions_data.json', 'w', encoding='utf-8') as f:
    json.dump(questions, f, ensure_ascii=False, indent=2)

print('Done updating questions_data.js and questions_data.json')
