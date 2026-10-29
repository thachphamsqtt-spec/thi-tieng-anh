import json
import eng_to_ipa as ipa

with open('questions_data.json', 'r', encoding='utf-8') as f:
    qs = json.load(f)

unknown_words = set()

for q in qs:
    q_ipa = ipa.convert(q['question_en'])
    a_ipa = ipa.convert(q['answer_en'])
    for word in (q['question_en'] + ' ' + q['answer_en']).split():
        clean = word.strip('.,;?!"()“”:')
        conv = ipa.convert(clean)
        if conv.endswith('*'):
            unknown_words.add(clean)

with open('unknown_words.json', 'w', encoding='utf-8') as f:
    json.dump(sorted(list(unknown_words)), f, ensure_ascii=False, indent=2)

print(f'Total unknown words to dictionary: {len(unknown_words)}')
