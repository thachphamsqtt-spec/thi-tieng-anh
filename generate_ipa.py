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
    "VTV1": "ˌviː tiː viː wʌn",
    "RFID": "ˌɑːr ɛf aɪ ˈdiː",
    "C4ISR": "ˌsiː fɔːr aɪ ɛs ˈɑːr",
    "QR": "ˌkjuː ˈɑːr",
    "WTTE": "ˌdʌbəl juː tiː tiː ˈiː",
    "TD-Office": "ˌtiː diː ˈɒfɪs",
}

def to_ipa_sentence(text):
    # Split into words keeping punctuation
    tokens = re.findall(r"[\w’'–-]+|[^\w\s]", text)
    result = []
    for token in tokens:
        # Check custom
        clean_token = token.strip()
        lower_token = clean_token.lower()
        if clean_token in CUSTOM_IPA:
            result.append(CUSTOM_IPA[clean_token])
        elif lower_token in CUSTOM_IPA:
            result.append(CUSTOM_IPA[lower_token])
        elif re.match(r"^[^\w\s]$", token):
            # punctuation
            result.append(token)
        else:
            # handle hyphenated words
            if '-' in clean_token:
                parts = clean_token.split('-')
                conv_parts = []
                for p in parts:
                    if p in CUSTOM_IPA:
                        conv_parts.append(CUSTOM_IPA[p])
                    elif p.lower() in CUSTOM_IPA:
                        conv_parts.append(CUSTOM_IPA[p.lower()])
                    else:
                        c = ipa.convert(p).rstrip('*')
                        conv_parts.append(c)
                result.append('-'.join(conv_parts))
            else:
                conv = ipa.convert(clean_token).rstrip('*')
                result.append(conv)
    
    # Reassemble with proper punctuation spacing
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

with open('questions_data.json', 'r', encoding='utf-8') as f:
    qs = json.load(f)

for q in qs:
    q['question_ipa'] = "/" + to_ipa_sentence(q['question_en']) + "/"
    q['answer_ipa'] = "/" + to_ipa_sentence(q['answer_en']) + "/"
    # Also add IPA for each vocab item
    for v in q['vocab']:
        v['ipa'] = "/" + to_ipa_sentence(v['en']) + "/"

with open('questions_data.json', 'w', encoding='utf-8') as f:
    json.dump(qs, f, ensure_ascii=False, indent=2)

with open('questions_data.js', 'w', encoding='utf-8') as f:
    f.write('// 50 Questions & Answers dataset with IPA transcriptions\n')
    f.write('const QUESTIONS_DATA = ' + json.dumps(qs, ensure_ascii=False, indent=2) + ';\n')

print("Successfully generated IPA transcriptions for all 50 questions!")
