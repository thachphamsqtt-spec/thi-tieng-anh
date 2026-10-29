// 50 Questions & Answers dataset with IPA transcriptions
const QUESTIONS_DATA = [
  {
    "id": 1,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What was the Ministry of National Defence’s target for digital transformation by 2025?",
    "question_vi": "Mục tiêu chuyển đổi số của Bộ Quốc phòng đến năm 2025 là gì?",
    "answer_en": "Establishing e-government within the Ministry of National Defence, moving toward digital government.",
    "answer_vi": "Xây dựng Chính phủ điện tử trong Bộ Quốc phòng, tiến tới Chính phủ số.",
    "vocab": [
      {
        "en": "target",
        "vi": "mục tiêu",
        "ipa": "/ˈtərgət/"
      },
      {
        "en": "digital transformation",
        "vi": "chuyển đổi số",
        "ipa": "/ˈdɪʤɪtəl ˌtrænsfərˈmeɪʃən/"
      },
      {
        "en": "e-government",
        "vi": "Chính phủ điện tử",
        "ipa": "/ˌiː ˈɡʌvərnmənt/"
      },
      {
        "en": "move toward",
        "vi": "tiến tới, hướng tới",
        "ipa": "/muv təˈwɔrd/"
      }
    ],
    "vocab_raw": "target – mục tiêu  •  digital transformation – chuyển đổi số  •  e-government – Chính phủ điện tử  •  move toward – tiến tới, hướng tới",
    "note": "",
    "question_ipa": "/wət wɑz ðə ˈmɪnɪstri əv ˈnæʃənəl dɪˈfɛnsɪz ˈtərgət fər ˈdɪʤɪtəl ˌtrænsfərˈmeɪʃən baɪ ˈtwɛnti ˈtwɛnti faɪv?/",
    "answer_ipa": "/ɪˈstæblɪʃɪŋ ˌiː ˈɡʌvərnmənt wɪˈθɪn ðə ˈmɪnɪstri əv ˈnæʃənəl dɪˈfɛns, ˈmuvɪŋ təˈwɔrd ˈdɪʤɪtəl ˈgəvərnmənt./"
  },
  {
    "id": 2,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What is meant by innovation in the military?",
    "question_vi": "Đổi mới sáng tạo trong Quân đội có nghĩa là gì?",
    "answer_en": "Creating and applying new methods, approaches, initiatives, and technical improvements to enhance combat capability.",
    "answer_vi": "Tạo ra và áp dụng các phương pháp, cách tiếp cận, sáng kiến và cải tiến kỹ thuật mới nhằm nâng cao khả năng chiến đấu.",
    "vocab": [
      {
        "en": "innovation",
        "vi": "đổi mới sáng tạo",
        "ipa": "/ˌɪnəˈveɪʃən/"
      },
      {
        "en": "apply",
        "vi": "áp dụng",
        "ipa": "/əˈplaɪ/"
      },
      {
        "en": "initiative",
        "vi": "sáng kiến",
        "ipa": "/ˌɪˈnɪʃətɪv/"
      },
      {
        "en": "technical improvement",
        "vi": "cải tiến kỹ thuật",
        "ipa": "/ˈtɛknɪkəl ˌɪmˈpruvmənt/"
      },
      {
        "en": "combat capability",
        "vi": "khả năng chiến đấu",
        "ipa": "/ˈkɑmbæt ˌkeɪpəˈbɪləti/"
      }
    ],
    "vocab_raw": "innovation – đổi mới sáng tạo  •  apply – áp dụng  •  initiative – sáng kiến  •  technical improvement – cải tiến kỹ thuật  •  combat capability – khả năng chiến đấu",
    "note": "",
    "question_ipa": "/wət ɪz mɛnt baɪ ˌɪnəˈveɪʃən ɪn ðə ˈmɪlɪˌtɛri?/",
    "answer_ipa": "/kriˈeɪtɪŋ ənd əˈplaɪɪŋ nu ˈmɛθədz, əˈproʊʧɪz, ˌɪˈnɪʃətɪvz, ənd ˈtɛknɪkəl ˌɪmˈpruvmənts tɪ ɛnˈhæns ˈkɑmbæt ˌkeɪpəˈbɪləti./"
  },
  {
    "id": 3,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What are the three pillars of digital transformation in the military?",
    "question_vi": "Ba trụ cột của chuyển đổi số trong Quân đội là gì?",
    "answer_en": "Digital government, digital economy, and digital society applied in the military environment.",
    "answer_vi": "Chính phủ số, kinh tế số và xã hội số được áp dụng trong môi trường Quân đội.",
    "vocab": [
      {
        "en": "pillar",
        "vi": "trụ cột",
        "ipa": "/ˈpɪlər/"
      },
      {
        "en": "digital government",
        "vi": "Chính phủ số",
        "ipa": "/ˈdɪʤɪtəl ˈgəvərnmənt/"
      },
      {
        "en": "digital economy",
        "vi": "kinh tế số",
        "ipa": "/ˈdɪʤɪtəl ɪˈkɑnəmi/"
      },
      {
        "en": "digital society",
        "vi": "xã hội số",
        "ipa": "/ˈdɪʤɪtəl soʊˈsaɪɪti/"
      },
      {
        "en": "military environment",
        "vi": "môi trường Quân đội",
        "ipa": "/ˈmɪlɪˌtɛri ɪnˈvaɪrənmənt/"
      }
    ],
    "vocab_raw": "pillar – trụ cột  •  digital government – Chính phủ số  •  digital economy – kinh tế số  •  digital society – xã hội số  •  military environment – môi trường Quân đội",
    "note": "",
    "question_ipa": "/wət ər ðə θriː ˈpɪlərz əv ˈdɪʤɪtəl ˌtrænsfərˈmeɪʃən ɪn ðə ˈmɪlɪˌtɛri?/",
    "answer_ipa": "/ˈdɪʤɪtəl ˈgəvərnmənt, ˈdɪʤɪtəl ɪˈkɑnəmi, ənd ˈdɪʤɪtəl soʊˈsaɪɪti əˈplaɪd ɪn ðə ˈmɪlɪˌtɛri ɪnˈvaɪrənmənt./"
  },
  {
    "id": 4,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What is the short name for the military movement to promote initiatives and technical improvements?",
    "question_vi": "Tên gọi khái quát của phong trào trong Quân đội nhằm thúc đẩy sáng kiến và cải tiến kỹ thuật là gì?",
    "answer_en": "The Youth Creativity Movement and the Technical Initiative and Improvement Movement.",
    "answer_vi": "Phong trào Sáng tạo trẻ và Phong trào Sáng kiến, cải tiến kỹ thuật.",
    "vocab": [
      {
        "en": "short name",
        "vi": "tên gọi ngắn gọn",
        "ipa": "/ʃɔrt neɪm/"
      },
      {
        "en": "movement",
        "vi": "phong trào",
        "ipa": "/ˈmuvmənt/"
      },
      {
        "en": "promote",
        "vi": "thúc đẩy, phát huy",
        "ipa": "/prəˈmoʊt/"
      },
      {
        "en": "creativity",
        "vi": "sự sáng tạo",
        "ipa": "/ˌkrieɪˈtɪvəti/"
      },
      {
        "en": "improvement",
        "vi": "sự cải tiến",
        "ipa": "/ˌɪmˈpruvmənt/"
      }
    ],
    "vocab_raw": "short name – tên gọi ngắn gọn  •  movement – phong trào  •  promote – thúc đẩy, phát huy  •  creativity – sự sáng tạo  •  improvement – sự cải tiến",
    "note": "",
    "question_ipa": "/wət ɪz ðə ʃɔrt neɪm fər ðə ˈmɪlɪˌtɛri ˈmuvmənt tɪ prəˈmoʊt ˌɪˈnɪʃətɪvz ənd ˈtɛknɪkəl ˌɪmˈpruvmənts?/",
    "answer_ipa": "/ðə juθ ˌkrieɪˈtɪvəti ˈmuvmənt ənd ðə ˈtɛknɪkəl ˌɪˈnɪʃətɪv ənd ˌɪmˈpruvmənt ˈmuvmənt./"
  },
  {
    "id": 5,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "How does digital transformation help enhance the military’s combat capability?",
    "question_vi": "Chuyển đổi số giúp nâng cao khả năng chiến đấu của Quân đội như thế nào?",
    "answer_en": "Automating command, management, and operations; connecting and sharing data quickly, accurately, and securely.",
    "answer_vi": "Tự động hóa công tác chỉ huy, quản lý và điều hành; kết nối, chia sẻ dữ liệu nhanh chóng, chính xác và an toàn.",
    "vocab": [
      {
        "en": "enhance",
        "vi": "nâng cao",
        "ipa": "/ɛnˈhæns/"
      },
      {
        "en": "automate",
        "vi": "tự động hóa",
        "ipa": "/ˈɔtəˌmeɪt/"
      },
      {
        "en": "command and management",
        "vi": "chỉ huy và quản lý",
        "ipa": "/kəˈmænd ənd ˈmænɪʤmənt/"
      },
      {
        "en": "accurately",
        "vi": "một cách chính xác",
        "ipa": "/ˈækjərətli/"
      },
      {
        "en": "securely",
        "vi": "một cách an toàn, bảo mật",
        "ipa": "/sɪˈkjʊrli/"
      }
    ],
    "vocab_raw": "enhance – nâng cao  •  automate – tự động hóa  •  command and management – chỉ huy và quản lý  •  accurately – một cách chính xác  •  securely – một cách an toàn, bảo mật",
    "note": "",
    "question_ipa": "/haʊ dɪz ˈdɪʤɪtəl ˌtrænsfərˈmeɪʃən hɛlp ɛnˈhæns ðə ˈmɪlɪtəriz ˈkɑmbæt ˌkeɪpəˈbɪləti?/",
    "answer_ipa": "/ˈɔtəˌmeɪtɪŋ kəˈmænd, ˈmænɪʤmənt, ənd ˌɑpərˈeɪʃənz; kəˈnɛktɪŋ ənd ˈʃɛrɪŋ ˈdætə kˈwɪkli, ˈækjərətli, ənd sɪˈkjʊrli./"
  },
  {
    "id": 6,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What is the most important foundation for digital transformation in the military?",
    "question_vi": "Nền tảng quan trọng nhất của chuyển đổi số trong Quân đội là gì?",
    "answer_en": "Digital infrastructure, digital data, and digital personnel with firm political convictions.",
    "answer_vi": "Hạ tầng số, dữ liệu số và nhân lực số có bản lĩnh chính trị vững vàng.",
    "vocab": [
      {
        "en": "foundation",
        "vi": "nền tảng",
        "ipa": "/faʊnˈdeɪʃən/"
      },
      {
        "en": "infrastructure",
        "vi": "cơ sở hạ tầng",
        "ipa": "/ˌɪnfrəˈstrəkʧər/"
      },
      {
        "en": "personnel",
        "vi": "nhân lực, quân nhân",
        "ipa": "/ˌpərsəˈnɛl/"
      },
      {
        "en": "firm",
        "vi": "vững vàng, kiên định",
        "ipa": "/fərm/"
      },
      {
        "en": "political convictions",
        "vi": "bản lĩnh/niềm tin chính trị",
        "ipa": "/pəˈlɪtɪkəl kənˈvɪkʃənz/"
      }
    ],
    "vocab_raw": "foundation – nền tảng  •  infrastructure – cơ sở hạ tầng  •  personnel – nhân lực, quân nhân  •  firm – vững vàng, kiên định  •  political convictions – bản lĩnh/niềm tin chính trị",
    "note": "",
    "question_ipa": "/wət ɪz ðə moʊst ˌɪmˈpɔrtənt faʊnˈdeɪʃən fər ˈdɪʤɪtəl ˌtrænsfərˈmeɪʃən ɪn ðə ˈmɪlɪˌtɛri?/",
    "answer_ipa": "/ˈdɪʤɪtəl ˌɪnfrəˈstrəkʧər, ˈdɪʤɪtəl ˈdætə, ənd ˈdɪʤɪtəl ˌpərsəˈnɛl wɪθ fərm pəˈlɪtɪkəl kənˈvɪkʃənz./"
  },
  {
    "id": 7,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What is required by the “smart, regular, elite unit” model associated with digital transformation?",
    "question_vi": "Mô hình “đơn vị thông minh, chính quy, tinh nhuệ” gắn với chuyển đổi số yêu cầu điều gì?",
    "answer_en": "Managing personnel strength, weapons and equipment, training, and logistics using digital technology.",
    "answer_vi": "Quản lý quân số, vũ khí trang bị, huấn luyện và công tác hậu cần bằng công nghệ số.",
    "vocab": [
      {
        "en": "require",
        "vi": "yêu cầu, đòi hỏi",
        "ipa": "/ˌrikˈwaɪər/"
      },
      {
        "en": "personnel strength",
        "vi": "quân số",
        "ipa": "/ˌpərsəˈnɛl strɛŋθ/"
      },
      {
        "en": "weapons and equipment",
        "vi": "vũ khí, trang bị",
        "ipa": "/ˈwɛpənz ənd ɪkˈwɪpmənt/"
      },
      {
        "en": "logistics",
        "vi": "công tác hậu cần",
        "ipa": "/ləˈʤɪstɪks/"
      },
      {
        "en": "digital technology",
        "vi": "công nghệ số",
        "ipa": "/ˈdɪʤɪtəl tɛkˈnɑləʤi/"
      }
    ],
    "vocab_raw": "require – yêu cầu, đòi hỏi  •  personnel strength – quân số  •  weapons and equipment – vũ khí, trang bị  •  logistics – công tác hậu cần  •  digital technology – công nghệ số",
    "note": "",
    "question_ipa": "/wət ɪz rikˈwaɪərd baɪ ðə “smɑrt, ˈrɛgjələr, ɪˈlit ˈjunɪt” ˈmɑdəl əˈsoʊʃiˌeɪtəd wɪθ ˈdɪʤɪtəl ˌtrænsfərˈmeɪʃən?/",
    "answer_ipa": "/ˈmænəʤɪŋ ˌpərsəˈnɛl strɛŋθ, ˈwɛpənz ənd ɪkˈwɪpmənt, ˈtreɪnɪŋ, ənd ləˈʤɪstɪks ˈjuzɪŋ ˈdɪʤɪtəl tɛkˈnɑləʤi./"
  },
  {
    "id": 8,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "How are innovation and digital transformation reflected in training?",
    "question_vi": "Đổi mới sáng tạo và chuyển đổi số được thể hiện trong huấn luyện như thế nào?",
    "answer_en": "Using simulation, virtual training grounds, laser-based shooting practice, and online learning.",
    "answer_vi": "Sử dụng mô phỏng, thao trường ảo, luyện tập bắn súng bằng laser và học tập trực tuyến.",
    "vocab": [
      {
        "en": "be reflected in",
        "vi": "được thể hiện trong",
        "ipa": "/bi rɪˈflɛktɪd ɪn/"
      },
      {
        "en": "simulation",
        "vi": "mô phỏng",
        "ipa": "/ˌsɪmjəˈleɪʃən/"
      },
      {
        "en": "virtual training ground",
        "vi": "thao trường ảo",
        "ipa": "/ˈvərʧuəl ˈtreɪnɪŋ graʊnd/"
      },
      {
        "en": "shooting practice",
        "vi": "luyện tập bắn súng",
        "ipa": "/ˈʃutɪŋ ˈpræktɪs/"
      },
      {
        "en": "online learning",
        "vi": "học tập trực tuyến",
        "ipa": "/ˈɔnˌlaɪn ˈlərnɪŋ/"
      }
    ],
    "vocab_raw": "be reflected in – được thể hiện trong  •  simulation – mô phỏng  •  virtual training ground – thao trường ảo  •  shooting practice – luyện tập bắn súng  •  online learning – học tập trực tuyến",
    "note": "",
    "question_ipa": "/haʊ ər ˌɪnəˈveɪʃən ənd ˈdɪʤɪtəl ˌtrænsfərˈmeɪʃən rɪˈflɛktɪd ɪn ˈtreɪnɪŋ?/",
    "answer_ipa": "/ˈjuzɪŋ ˌsɪmjəˈleɪʃən, ˈvərʧuəl ˈtreɪnɪŋ graʊnz, ˈleɪzər beɪst ˈʃutɪŋ ˈpræktɪs, ənd ˈɔnˌlaɪn ˈlərnɪŋ./"
  },
  {
    "id": 9,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "How is information security and cybersecurity regarded in the military?",
    "question_vi": "An ninh thông tin và an ninh mạng được xem như thế nào trong Quân đội?",
    "answer_en": "A vital mission and a component of cyberspace operations.",
    "answer_vi": "Là nhiệm vụ trọng yếu và là một bộ phận của hoạt động tác chiến không gian mạng.",
    "vocab": [
      {
        "en": "information security",
        "vi": "an ninh thông tin",
        "ipa": "/ˌɪnˌfɔrˈmeɪʃən sɪˈkjʊrəti/"
      },
      {
        "en": "cybersecurity",
        "vi": "an ninh mạng",
        "ipa": "/ˌsaɪbərsɪˈkjʊərɪti/"
      },
      {
        "en": "be regarded as",
        "vi": "được xem là",
        "ipa": "/bi rɪˈgɑrdɪd ɛz/"
      },
      {
        "en": "vital",
        "vi": "trọng yếu, thiết yếu",
        "ipa": "/ˈvaɪtəl/"
      },
      {
        "en": "cyberspace operations",
        "vi": "hoạt động không gian mạng",
        "ipa": "/ˈsaɪbərˌspeɪs ˌɑpərˈeɪʃənz/"
      }
    ],
    "vocab_raw": "information security – an ninh thông tin  •  cybersecurity – an ninh mạng  •  be regarded as – được xem là  •  vital – trọng yếu, thiết yếu  •  cyberspace operations – hoạt động không gian mạng",
    "note": "",
    "question_ipa": "/haʊ ɪz ˌɪnˌfɔrˈmeɪʃən sɪˈkjʊrəti ənd ˌsaɪbərsɪˈkjʊərɪti rɪˈgɑrdɪd ɪn ðə ˈmɪlɪˌtɛri?/",
    "answer_ipa": "/ə ˈvaɪtəl ˈmɪʃən ənd ə kəmˈpoʊnənt əv ˈsaɪbərˌspeɪs ˌɑpərˈeɪʃənz./"
  },
  {
    "id": 10,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What are digital signatures and digital certificates used for in the military?",
    "question_vi": "Chữ ký số và chứng thư số được sử dụng để làm gì trong Quân đội?",
    "answer_en": "Ensuring security and authentication for electronic documents and command and control over the military data-transmission network.",
    "answer_vi": "Bảo đảm an toàn, xác thực cho văn bản điện tử và công tác chỉ huy, điều hành trên mạng truyền số liệu quân sự.",
    "vocab": [
      {
        "en": "digital signature",
        "vi": "chữ ký số",
        "ipa": "/ˈdɪʤɪtəl ˈsɪgnəʧər/"
      },
      {
        "en": "digital certificate",
        "vi": "chứng thư số",
        "ipa": "/ˈdɪʤɪtəl sərˈtɪfɪkət/"
      },
      {
        "en": "authentication",
        "vi": "xác thực",
        "ipa": "/ɔˌθɛntəˈkeɪʃən/"
      },
      {
        "en": "electronic document",
        "vi": "văn bản điện tử",
        "ipa": "/ˌɪˌlɛkˈtrɑnɪk ˈdɑkjəmɛnt/"
      },
      {
        "en": "data-transmission network",
        "vi": "mạng truyền số liệu",
        "ipa": "/ˈdeɪtə trænzˈmɪʃən ˈnɛtˌwərk/"
      }
    ],
    "vocab_raw": "digital signature – chữ ký số  •  digital certificate – chứng thư số  •  authentication – xác thực  •  electronic document – văn bản điện tử  •  data-transmission network – mạng truyền số liệu",
    "note": "",
    "question_ipa": "/wət ər ˈdɪʤɪtəl ˈsɪgnəʧərz ənd ˈdɪʤɪtəl sərˈtɪfɪkəts juzd fər ɪn ðə ˈmɪlɪˌtɛri?/",
    "answer_ipa": "/ɪnˈʃʊrɪŋ sɪˈkjʊrəti ənd ɔˌθɛntəˈkeɪʃən fər ˌɪˌlɛkˈtrɑnɪk ˈdɑkjəmənts ənd kəˈmænd ənd kənˈtroʊl ˈoʊvər ðə ˈmɪlɪˌtɛri ˈdeɪtə trænzˈmɪʃən ˈnɛtˌwərk./"
  },
  {
    "id": 11,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What principles must military digital data comply with?",
    "question_vi": "Dữ liệu số trong Quân đội phải tuân thủ những nguyên tắc nào?",
    "answer_en": "Accurate, complete, clean, live, consistent, and secure.",
    "answer_vi": "Bảo đảm chính xác, đầy đủ, sạch, sống, thống nhất và an toàn.",
    "vocab": [
      {
        "en": "principle",
        "vi": "nguyên tắc",
        "ipa": "/ˈprɪnsəpəl/"
      },
      {
        "en": "comply with",
        "vi": "tuân thủ",
        "ipa": "/kəmˈplaɪ wɪθ/"
      },
      {
        "en": "accurate",
        "vi": "chính xác",
        "ipa": "/ˈækjərət/"
      },
      {
        "en": "complete",
        "vi": "đầy đủ",
        "ipa": "/kəmˈplit/"
      },
      {
        "en": "consistent",
        "vi": "thống nhất, nhất quán",
        "ipa": "/kənˈsɪstənt/"
      },
      {
        "en": "secure",
        "vi": "an toàn, bảo mật",
        "ipa": "/sɪˈkjʊr/"
      }
    ],
    "vocab_raw": "principle – nguyên tắc  •  comply with – tuân thủ  •  accurate – chính xác  •  complete – đầy đủ  •  consistent – thống nhất, nhất quán  •  secure – an toàn, bảo mật",
    "note": "",
    "question_ipa": "/wət ˈprɪnsəpəlz məst ˈmɪlɪˌtɛri ˈdɪʤɪtəl ˈdætə kəmˈplaɪ wɪθ?/",
    "answer_ipa": "/ˈækjərət, kəmˈplit, klin, lɪv, kənˈsɪstənt, ənd sɪˈkjʊr./"
  },
  {
    "id": 12,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What are AI and Big Data used for in the military?",
    "question_vi": "AI và Dữ liệu lớn được sử dụng vào những việc gì trong Quân đội?",
    "answer_en": "Intelligence analysis, situation forecasting, support for command decisions, and management of equipment.",
    "answer_vi": "Phân tích tình báo, dự báo tình hình, hỗ trợ quyết định chỉ huy và quản lý trang bị.",
    "vocab": [
      {
        "en": "AI (artificial intelligence)",
        "vi": "trí tuệ nhân tạo",
        "ipa": "/ˌeɪ ˈaɪ (ˌɑrtəˈfɪʃəl ˌɪnˈtɛləʤəns)/"
      },
      {
        "en": "Big Data",
        "vi": "Dữ liệu lớn",
        "ipa": "/bɪg ˈdætə/"
      },
      {
        "en": "intelligence analysis",
        "vi": "phân tích tình báo",
        "ipa": "/ˌɪnˈtɛləʤəns æˈnælɪsɪs/"
      },
      {
        "en": "forecast",
        "vi": "dự báo",
        "ipa": "/ˈfɔrˌkæst/"
      },
      {
        "en": "command decision",
        "vi": "quyết định chỉ huy",
        "ipa": "/kəˈmænd dɪˈsɪʒən/"
      }
    ],
    "vocab_raw": "AI (artificial intelligence) – trí tuệ nhân tạo  •  Big Data – Dữ liệu lớn  •  intelligence analysis – phân tích tình báo  •  forecast – dự báo  •  command decision – quyết định chỉ huy",
    "note": "",
    "question_ipa": "/wət ər ˌeɪ ˈaɪ ənd bɪg ˈdætə juzd fər ɪn ðə ˈmɪlɪˌtɛri?/",
    "answer_ipa": "/ˌɪnˈtɛləʤəns æˈnælɪsɪs, ˌsɪʧuˈeɪʃən ˈfɔrˌkæstɪŋ, səˈpɔrt fər kəˈmænd dɪˈsɪʒənz, ənd ˈmænɪʤmənt əv ɪkˈwɪpmənt./"
  },
  {
    "id": 13,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What does digital transformation in the Party and political work of the military involve?",
    "question_vi": "Chuyển đổi số trong công tác Đảng, công tác chính trị của Quân đội bao gồm những gì?",
    "answer_en": "Digitizing Party-member records, managing morale through digital platforms, and conducting political education online.",
    "answer_vi": "Số hóa hồ sơ đảng viên, quản lý tư tưởng thông qua nền tảng số và tiến hành giáo dục chính trị trực tuyến.",
    "vocab": [
      {
        "en": "involve",
        "vi": "bao gồm, liên quan đến",
        "ipa": "/ˌɪnˈvɑlv/"
      },
      {
        "en": "digitize",
        "vi": "số hóa",
        "ipa": "/ˈdɪʤəˌtaɪz/"
      },
      {
        "en": "Party-member records",
        "vi": "hồ sơ đảng viên",
        "ipa": "/ˈpɑːrtiˌmɛmbər ˈrɛkərdz/"
      },
      {
        "en": "morale",
        "vi": "tinh thần, tư tưởng",
        "ipa": "/məræl/"
      },
      {
        "en": "political education",
        "vi": "giáo dục chính trị",
        "ipa": "/pəˈlɪtɪkəl ˌɛʤəˈkeɪʃən/"
      }
    ],
    "vocab_raw": "involve – bao gồm, liên quan đến  •  digitize – số hóa  •  Party-member records – hồ sơ đảng viên  •  morale – tinh thần, tư tưởng  •  political education – giáo dục chính trị",
    "note": "",
    "question_ipa": "/wət dɪz ˈdɪʤɪtəl ˌtrænsfərˈmeɪʃən ɪn ðə ˈpɑrti ənd pəˈlɪtɪkəl wərk əv ðə ˈmɪlɪˌtɛri ˌɪnˈvɑlv?/",
    "answer_ipa": "/ˈdɪʤəˌtaɪzɪŋ ˈpɑːrtiˌmɛmbər ˈrɛkərdz, ˈmænəʤɪŋ məræl θru ˈdɪʤɪtəl ˈplætˌfɔrmz, ənd kənˈdəktɪŋ pəˈlɪtɪkəl ˌɛʤəˈkeɪʃən ˈɔnˌlaɪn./"
  },
  {
    "id": 14,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What qualities must military personnel possess for successful digital transformation?",
    "question_vi": "Quân nhân cần có những phẩm chất gì để chuyển đổi số thành công?",
    "answer_en": "Being both politically sound and professionally competent, with digital knowledge, skills, and resilience.",
    "answer_vi": "Có bản lĩnh chính trị vững vàng, năng lực chuyên môn tốt, cùng kiến thức, kỹ năng số và khả năng thích ứng.",
    "vocab": [
      {
        "en": "quality",
        "vi": "phẩm chất",
        "ipa": "/kˈwɑləti/"
      },
      {
        "en": "military personnel",
        "vi": "quân nhân, nhân sự quân đội",
        "ipa": "/ˈmɪlɪˌtɛri ˌpərsəˈnɛl/"
      },
      {
        "en": "politically sound",
        "vi": "vững vàng về chính trị",
        "ipa": "/ˈplɪtɪkli saʊnd/"
      },
      {
        "en": "professionally competent",
        "vi": "có năng lực chuyên môn",
        "ipa": "/prəˈfɛʃənəli ˈkɑmpətɪnt/"
      },
      {
        "en": "resilience",
        "vi": "khả năng thích ứng, sức bền",
        "ipa": "/rɪˈzɪljəns/"
      }
    ],
    "vocab_raw": "quality – phẩm chất  •  military personnel – quân nhân, nhân sự quân đội  •  politically sound – vững vàng về chính trị  •  professionally competent – có năng lực chuyên môn  •  resilience – khả năng thích ứng, sức bền",
    "note": "",
    "question_ipa": "/wət kˈwɑlətiz məst ˈmɪlɪˌtɛri ˌpərsəˈnɛl pəˈzɛs fər səkˈsɛsfəl ˈdɪʤɪtəl ˌtrænsfərˈmeɪʃən?/",
    "answer_ipa": "/biɪŋ boʊθ ˈplɪtɪkli saʊnd ənd prəˈfɛʃənəli ˈkɑmpətɪnt, wɪθ ˈdɪʤɪtəl ˈnɑlɪʤ, skɪlz, ənd rɪˈzɪljəns./"
  },
  {
    "id": 15,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What does the Command, Control, Communications, Computers, Intelligence, Surveillance and Reconnaissance (C4ISR) system represent?",
    "question_vi": "Hệ thống Chỉ huy, Kiểm soát, Thông tin liên lạc, Máy tính, Tình báo, Giám sát và Trinh sát (C4ISR) thể hiện điều gì?",
    "answer_en": "Digital transformation at the highest level of modern warfare.",
    "answer_vi": "Chuyển đổi số ở cấp độ cao nhất của chiến tranh hiện đại.",
    "vocab": [
      {
        "en": "command",
        "vi": "chỉ huy",
        "ipa": "/kəˈmænd/"
      },
      {
        "en": "control",
        "vi": "kiểm soát",
        "ipa": "/kənˈtroʊl/"
      },
      {
        "en": "surveillance",
        "vi": "giám sát",
        "ipa": "/sərˈveɪləns/"
      },
      {
        "en": "reconnaissance",
        "vi": "trinh sát",
        "ipa": "/riˈkɑnəsəns/"
      },
      {
        "en": "modern warfare",
        "vi": "chiến tranh hiện đại",
        "ipa": "/ˈmɑdərn ˈwɔrˌfɛr/"
      }
    ],
    "vocab_raw": "command – chỉ huy  •  control – kiểm soát  •  surveillance – giám sát  •  reconnaissance – trinh sát  •  modern warfare – chiến tranh hiện đại",
    "note": "",
    "question_ipa": "/wət dɪz ðə kəˈmænd, kənˈtroʊl, kəmˌjunəˈkeɪʃənz, kəmˈpjutərz, ˌɪnˈtɛləʤəns, sərˈveɪləns ənd riˈkɑnəsəns (ˌsiː fɔːr aɪ ɛs ˈɑːr) ˈsɪstəm ˌrɛprɪˈzɛnt?/",
    "answer_ipa": "/ˈdɪʤɪtəl ˌtrænsfərˈmeɪʃən æt ðə haɪəst ˈlɛvəl əv ˈmɑdərn ˈwɔrˌfɛr./"
  },
  {
    "id": 16,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What criteria must an initiative in the military meet?",
    "question_vi": "Một sáng kiến trong Quân đội phải đáp ứng những tiêu chí nào?",
    "answer_en": "Novelty, creativity, applicability, and economic and military effectiveness.",
    "answer_vi": "Tính mới, tính sáng tạo, khả năng áp dụng và hiệu quả kinh tế, quân sự.",
    "vocab": [
      {
        "en": "criteria",
        "vi": "tiêu chí",
        "ipa": "/kraɪˈtɪriə/"
      },
      {
        "en": "initiative",
        "vi": "sáng kiến",
        "ipa": "/ˌɪˈnɪʃətɪv/"
      },
      {
        "en": "novelty",
        "vi": "tính mới",
        "ipa": "/ˈnɑvəlti/"
      },
      {
        "en": "applicability",
        "vi": "khả năng áp dụng",
        "ipa": "/ˌæpləkəˈbɪləti/"
      },
      {
        "en": "effectiveness",
        "vi": "hiệu quả",
        "ipa": "/ˈifɛktɪvnəs/"
      }
    ],
    "vocab_raw": "criteria – tiêu chí  •  initiative – sáng kiến  •  novelty – tính mới  •  applicability – khả năng áp dụng  •  effectiveness – hiệu quả",
    "note": "",
    "question_ipa": "/wət kraɪˈtɪriə məst ən ˌɪˈnɪʃətɪv ɪn ðə ˈmɪlɪˌtɛri mit?/",
    "answer_ipa": "/ˈnɑvəlti, ˌkrieɪˈtɪvəti, ˌæpləkəˈbɪləti, ənd ˌɛkəˈnɑmɪk ənd ˈmɪlɪˌtɛri ˈifɛktɪvnəs./"
  },
  {
    "id": 17,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What does digital transformation in the management of weapons and technical equipment (WTTE) involve?",
    "question_vi": "Chuyển đổi số trong quản lý vũ khí, trang bị kỹ thuật (VKTBKT) bao gồm những gì?",
    "answer_en": "Using QR codes, RFID, and software to manage the quantity, condition, and expiry dates of weapons and technical equipment.",
    "answer_vi": "Sử dụng mã QR, RFID và phần mềm để quản lý số lượng, tình trạng và hạn sử dụng của vũ khí, trang bị kỹ thuật.",
    "vocab": [
      {
        "en": "management",
        "vi": "công tác quản lý",
        "ipa": "/ˈmænɪʤmənt/"
      },
      {
        "en": "QR code",
        "vi": "mã QR",
        "ipa": "/ˌkjuː ˈɑːr koʊd/"
      },
      {
        "en": "RFID",
        "vi": "công nghệ nhận dạng bằng sóng vô tuyến",
        "ipa": "/ˌɑːr ɛf aɪ ˈdiː/"
      },
      {
        "en": "condition",
        "vi": "tình trạng",
        "ipa": "/kənˈdɪʃən/"
      },
      {
        "en": "expiry date",
        "vi": "hạn sử dụng",
        "ipa": "/ˌɛkˈspaɪri deɪt/"
      }
    ],
    "vocab_raw": "management – công tác quản lý  •  QR code – mã QR  •  RFID – công nghệ nhận dạng bằng sóng vô tuyến  •  condition – tình trạng  •  expiry date – hạn sử dụng",
    "note": "",
    "question_ipa": "/wət dɪz ˈdɪʤɪtəl ˌtrænsfərˈmeɪʃən ɪn ðə ˈmænɪʤmənt əv ˈwɛpənz ənd ˈtɛknɪkəl ɪkˈwɪpmənt (ˌdʌbəl juː tiː tiː ˈiː) ˌɪnˈvɑlv?/",
    "answer_ipa": "/ˈjuzɪŋ ˌkjuː ˈɑːr koʊdz, ˌɑːr ɛf aɪ ˈdiː, ənd ˈsɔfˌwɛr tɪ ˈmænɪʤ ðə kˈwɑntəti, kənˈdɪʃən, ənd ˌɛkˈspaɪri deɪts əv ˈwɛpənz ənd ˈtɛknɪkəl ɪkˈwɪpmənt./"
  },
  {
    "id": 18,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What is the lifelong-learning model for military personnel in the digital age?",
    "question_vi": "Mô hình học tập suốt đời của quân nhân trong thời đại số là gì?",
    "answer_en": "Learning through digital training grounds, digital academies, and digital libraries.",
    "answer_vi": "Học tập thông qua thao trường số, học viện số và thư viện số.",
    "vocab": [
      {
        "en": "lifelong learning",
        "vi": "học tập suốt đời",
        "ipa": "/ˈlaɪˈflɔŋ ˈlərnɪŋ/"
      },
      {
        "en": "digital age",
        "vi": "thời đại số",
        "ipa": "/ˈdɪʤɪtəl eɪʤ/"
      },
      {
        "en": "academy",
        "vi": "học viện",
        "ipa": "/əˈkædəmi/"
      },
      {
        "en": "library",
        "vi": "thư viện",
        "ipa": "/ˈlaɪbrɛˌri/"
      },
      {
        "en": "through",
        "vi": "thông qua",
        "ipa": "/θru/"
      }
    ],
    "vocab_raw": "lifelong learning – học tập suốt đời  •  digital age – thời đại số  •  academy – học viện  •  library – thư viện  •  through – thông qua",
    "note": "",
    "question_ipa": "/wət ɪz ðə ˈlaɪflɒŋ ˈlɜːrnɪŋ ˈmɑdəl fər ˈmɪlɪˌtɛri ˌpərsəˈnɛl ɪn ðə ˈdɪʤɪtəl eɪʤ?/",
    "answer_ipa": "/ˈlərnɪŋ θru ˈdɪʤɪtəl ˈtreɪnɪŋ graʊnz, ˈdɪʤɪtəl əˈkædəmiz, ənd ˈdɪʤɪtəl ˈlaɪbrɛˌriz./"
  },
  {
    "id": 19,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What is the principle of digital transformation in the military?",
    "question_vi": "Nguyên tắc chuyển đổi số trong Quân đội là gì?",
    "answer_en": "Putting people at the center while ensuring military secrecy and absolute safety.",
    "answer_vi": "Lấy con người làm trung tâm, đồng thời bảo đảm bí mật quân sự và an toàn tuyệt đối.",
    "vocab": [
      {
        "en": "principle",
        "vi": "nguyên tắc",
        "ipa": "/ˈprɪnsəpəl/"
      },
      {
        "en": "put ... at the center",
        "vi": "lấy ... làm trung tâm",
        "ipa": "/pʊt... æt ðə ˈsɛnər/"
      },
      {
        "en": "ensure",
        "vi": "bảo đảm",
        "ipa": "/ɪnˈʃʊr/"
      },
      {
        "en": "military secrecy",
        "vi": "bí mật quân sự",
        "ipa": "/ˈmɪlɪˌtɛri ˈsikrəsi/"
      },
      {
        "en": "absolute safety",
        "vi": "an toàn tuyệt đối",
        "ipa": "/ˈæbsəˌlut ˈseɪfti/"
      }
    ],
    "vocab_raw": "principle – nguyên tắc  •  put ... at the center – lấy ... làm trung tâm  •  ensure – bảo đảm  •  military secrecy – bí mật quân sự  •  absolute safety – an toàn tuyệt đối",
    "note": "",
    "question_ipa": "/wət ɪz ðə ˈprɪnsəpəl əv ˈdɪʤɪtəl ˌtrænsfərˈmeɪʃən ɪn ðə ˈmɪlɪˌtɛri?/",
    "answer_ipa": "/ˈpʊtɪŋ ˈpipəl æt ðə ˈsɛnər waɪl ɪnˈʃʊrɪŋ ˈmɪlɪˌtɛri ˈsikrəsi ənd ˈæbsəˌlut ˈseɪfti./"
  },
  {
    "id": 20,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "Does innovation conflict with military discipline?",
    "question_vi": "Đổi mới sáng tạo có mâu thuẫn với kỷ luật Quân đội không?",
    "answer_en": "No. Innovation must be based on voluntary, strict discipline and compliance with drill regulations.",
    "answer_vi": "Không. Đổi mới sáng tạo phải dựa trên ý thức tự giác, kỷ luật nghiêm và việc chấp hành điều lệnh.",
    "vocab": [
      {
        "en": "conflict with",
        "vi": "mâu thuẫn với",
        "ipa": "/ˈkɑnflɪkt wɪθ/"
      },
      {
        "en": "discipline",
        "vi": "kỷ luật",
        "ipa": "/ˈdɪsəplən/"
      },
      {
        "en": "voluntary",
        "vi": "tự giác, tự nguyện",
        "ipa": "/ˈvɑləntɛri/"
      },
      {
        "en": "strict",
        "vi": "nghiêm, chặt chẽ",
        "ipa": "/strɪkt/"
      },
      {
        "en": "comply with",
        "vi": "chấp hành, tuân thủ",
        "ipa": "/kəmˈplaɪ wɪθ/"
      },
      {
        "en": "drill regulations",
        "vi": "điều lệnh",
        "ipa": "/drɪl ˌrɛgjəˈleɪʃənz/"
      }
    ],
    "vocab_raw": "conflict with – mâu thuẫn với  •  discipline – kỷ luật  •  voluntary – tự giác, tự nguyện  •  strict – nghiêm, chặt chẽ  •  comply with – chấp hành, tuân thủ  •  drill regulations – điều lệnh",
    "note": "",
    "question_ipa": "/dɪz ˌɪnəˈveɪʃən ˈkɑnflɪkt wɪθ ˈmɪlɪˌtɛri ˈdɪsəplən?/",
    "answer_ipa": "/noʊ. ˌɪnəˈveɪʃən məst bi beɪst ɔn ˈvɑləntɛri, strɪkt ˈdɪsəplən ənd kəmˈplaɪəns wɪθ drɪl ˌrɛgjəˈleɪʃənz./"
  },
  {
    "id": 21,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What is the name of the document management and workflow system in the Ministry of National Defence?",
    "question_vi": "Hệ thống quản lý văn bản và điều hành trong Bộ Quốc phòng có tên là gì?",
    "answer_en": "The Document and Work-File Management System (TD-Office on the Military Data Transmission Network).",
    "answer_vi": "Hệ thống Quản lý văn bản và hồ sơ công việc (TD-Office trên Mạng truyền số liệu quân sự).",
    "vocab": [
      {
        "en": "document management",
        "vi": "quản lý văn bản",
        "ipa": "/ˈdɑkjəmɛnt ˈmænɪʤmənt/"
      },
      {
        "en": "workflow",
        "vi": "quy trình xử lý công việc",
        "ipa": "/ˈwərkˌfloʊ/"
      },
      {
        "en": "work-file",
        "vi": "hồ sơ công việc",
        "ipa": "/ˈwɜːrk faɪl/"
      },
      {
        "en": "system",
        "vi": "hệ thống",
        "ipa": "/ˈsɪstəm/"
      },
      {
        "en": "military data transmission network",
        "vi": "mạng truyền số liệu quân sự",
        "ipa": "/ˈmɪlɪˌtɛri ˈdætə trænzˈmɪʃən ˈnɛtˌwərk/"
      }
    ],
    "vocab_raw": "document management – quản lý văn bản  •  workflow – quy trình xử lý công việc  •  work-file – hồ sơ công việc  •  system – hệ thống  •  military data transmission network – mạng truyền số liệu quân sự",
    "note": "",
    "question_ipa": "/wət ɪz ðə neɪm əv ðə ˈdɑkjəmɛnt ˈmænɪʤmənt ənd ˈwərkˌfloʊ ˈsɪstəm ɪn ðə ˈmɪnɪstri əv ˈnæʃənəl dɪˈfɛns?/",
    "answer_ipa": "/ðə ˈdɑkjəmɛnt ənd ˈwɜːrk faɪl ˈmænɪʤmənt ˈsɪstəm (ˌtiː diː ˈɒfɪs ɔn ðə ˈmɪlɪˌtɛri ˈdætə trænzˈmɪʃən ˈnɛtˌwərk)./"
  },
  {
    "id": 22,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What does digital transformation in military logistics involve?",
    "question_vi": "Chuyển đổi số trong công tác hậu cần quân đội bao gồm những gì?",
    "answer_en": "Digitizing quartermaster services, military medicine, fuel management, smart kitchens, and telemedicine.",
    "answer_vi": "Số hóa công tác quân nhu, quân y, quản lý nhiên liệu, nhà bếp thông minh và khám chữa bệnh từ xa.",
    "vocab": [
      {
        "en": "logistics",
        "vi": "hậu cần",
        "ipa": "/ləˈʤɪstɪks/"
      },
      {
        "en": "digitize",
        "vi": "số hóa",
        "ipa": "/ˈdɪʤəˌtaɪz/"
      },
      {
        "en": "quartermaster services",
        "vi": "công tác quân nhu",
        "ipa": "/kˈwɔrtərˌmæstər ˈsərvɪsɪz/"
      },
      {
        "en": "fuel management",
        "vi": "quản lý nhiên liệu",
        "ipa": "/fjuəl ˈmænɪʤmənt/"
      },
      {
        "en": "telemedicine",
        "vi": "y tế từ xa",
        "ipa": "/ˌtɛlɪˈmɛdɪsən/"
      }
    ],
    "vocab_raw": "logistics – hậu cần  •  digitize – số hóa  •  quartermaster services – công tác quân nhu  •  fuel management – quản lý nhiên liệu  •  telemedicine – y tế từ xa",
    "note": "",
    "question_ipa": "/wət dɪz ˈdɪʤɪtəl ˌtrænsfərˈmeɪʃən ɪn ˈmɪlɪˌtɛri ləˈʤɪstɪks ˌɪnˈvɑlv?/",
    "answer_ipa": "/ˈdɪʤəˌtaɪzɪŋ kˈwɔrtərˌmæstər ˈsərvɪsɪz, ˈmɪlɪˌtɛri ˈmɛdəsən, fjuəl ˈmænɪʤmənt, smɑrt ˈkɪʧənz, ənd ˌtɛlɪˈmɛdɪsən./"
  },
  {
    "id": 23,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What must military personnel do to protect military digital data?",
    "question_vi": "Quân nhân phải làm gì để bảo vệ dữ liệu số quân sự?",
    "answer_en": "Not using personal devices to store classified documents, avoiding suspicious links, and following the “5K” cybersecurity practices.",
    "answer_vi": "Không dùng thiết bị cá nhân để lưu trữ tài liệu mật, tránh các liên kết đáng ngờ và tuân thủ các biện pháp an ninh mạng “5K”.",
    "vocab": [
      {
        "en": "protect",
        "vi": "bảo vệ",
        "ipa": "/prəˈtɛkt/"
      },
      {
        "en": "personal device",
        "vi": "thiết bị cá nhân",
        "ipa": "/ˈpərsɪnəl dɪˈvaɪs/"
      },
      {
        "en": "classified document",
        "vi": "tài liệu mật",
        "ipa": "/ˈklæsəˌfaɪd ˈdɑkjəmɛnt/"
      },
      {
        "en": "suspicious link",
        "vi": "liên kết đáng ngờ",
        "ipa": "/səˈspɪʃəs lɪŋk/"
      },
      {
        "en": "cybersecurity practice",
        "vi": "biện pháp/thực hành an ninh mạng",
        "ipa": "/ˌsaɪbərsɪˈkjʊərɪti ˈpræktɪs/"
      }
    ],
    "vocab_raw": "protect – bảo vệ  •  personal device – thiết bị cá nhân  •  classified document – tài liệu mật  •  suspicious link – liên kết đáng ngờ  •  cybersecurity practice – biện pháp/thực hành an ninh mạng",
    "note": "",
    "question_ipa": "/wət məst ˈmɪlɪˌtɛri ˌpərsəˈnɛl du tɪ prəˈtɛkt ˈmɪlɪˌtɛri ˈdɪʤɪtəl ˈdætə?/",
    "answer_ipa": "/nɑt ˈjuzɪŋ ˈpərsɪnəl dɪˈvaɪsɪz tɪ stɔr ˈklæsəˌfaɪd ˈdɑkjəmənts, əˈvɔɪdɪŋ səˈspɪʃəs lɪŋks, ənd ˈfɑloʊɪŋ ðə “faɪv keɪ” ˌsaɪbərsɪˈkjʊərɪti ˈpræktɪsɪz./"
  },
  {
    "id": 24,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What is the digital economy in the military associated with?",
    "question_vi": "Kinh tế số trong Quân đội gắn với những lĩnh vực nào?",
    "answer_en": "Digital defence industry, dual-use applications, and smart-weapon production.",
    "answer_vi": "Công nghiệp quốc phòng số, các ứng dụng lưỡng dụng và sản xuất vũ khí thông minh.",
    "vocab": [
      {
        "en": "be associated with",
        "vi": "gắn với, liên quan đến",
        "ipa": "/bi əˈsoʊʃiˌeɪtəd wɪθ/"
      },
      {
        "en": "defence industry",
        "vi": "công nghiệp quốc phòng",
        "ipa": "/dɪˈfɛns ˈɪndəstri/"
      },
      {
        "en": "dual-use",
        "vi": "lưỡng dụng",
        "ipa": "/ˈdjuːəl juːs/"
      },
      {
        "en": "application",
        "vi": "ứng dụng",
        "ipa": "/ˌæpləˈkeɪʃən/"
      },
      {
        "en": "production",
        "vi": "sản xuất",
        "ipa": "/pərˈdəkʃən/"
      }
    ],
    "vocab_raw": "be associated with – gắn với, liên quan đến  •  defence industry – công nghiệp quốc phòng  •  dual-use – lưỡng dụng  •  application – ứng dụng  •  production – sản xuất",
    "note": "",
    "question_ipa": "/wət ɪz ðə ˈdɪʤɪtəl ɪˈkɑnəmi ɪn ðə ˈmɪlɪˌtɛri əˈsoʊʃiˌeɪtəd wɪθ?/",
    "answer_ipa": "/ˈdɪʤɪtəl dɪˈfɛns ˈɪndəstri, ˈdjuːəl juːs ˌæpləˈkeɪʃənz, ənd ˈsmɑːrt ˈwɛpən pərˈdəkʃən./"
  },
  {
    "id": 25,
    "part": 1,
    "partName": "Phần 1: Đổi mới sáng tạo & Chuyển đổi số trong Quân đội",
    "question_en": "What is the ultimate goal of innovation and digital transformation in the Vietnam People’s Army?",
    "question_vi": "Mục tiêu cuối cùng của đổi mới sáng tạo và chuyển đổi số trong Quân đội nhân dân Việt Nam là gì?",
    "answer_en": "Building a revolutionary, regular, elite, modern People’s Army and firmly safeguarding the Fatherland.",
    "answer_vi": "Xây dựng Quân đội nhân dân cách mạng, chính quy, tinh nhuệ, hiện đại và bảo vệ vững chắc Tổ quốc.",
    "vocab": [
      {
        "en": "ultimate goal",
        "vi": "mục tiêu cuối cùng",
        "ipa": "/ˈəltəmət goʊl/"
      },
      {
        "en": "revolutionary",
        "vi": "cách mạng",
        "ipa": "/ˌrɛvəˈluʃəˌnɛri/"
      },
      {
        "en": "regular",
        "vi": "chính quy",
        "ipa": "/ˈrɛgjələr/"
      },
      {
        "en": "elite",
        "vi": "tinh nhuệ",
        "ipa": "/ɪˈlit/"
      },
      {
        "en": "safeguard",
        "vi": "bảo vệ, giữ gìn",
        "ipa": "/ˈseɪfˌgɑrd/"
      },
      {
        "en": "Fatherland",
        "vi": "Tổ quốc",
        "ipa": "/ˈfɑðərˌlænd/"
      }
    ],
    "vocab_raw": "ultimate goal – mục tiêu cuối cùng  •  revolutionary – cách mạng  •  regular – chính quy  •  elite – tinh nhuệ  •  safeguard – bảo vệ, giữ gìn  •  Fatherland – Tổ quốc",
    "note": "",
    "question_ipa": "/wət ɪz ðə ˈəltəmət goʊl əv ˌɪnəˈveɪʃən ənd ˈdɪʤɪtəl ˌtrænsfərˈmeɪʃən ɪn ðə viˌɛtˈnɑm ˈpiːpəlz ˈɑrmi?/",
    "answer_ipa": "/ˈbɪldɪŋ ə ˌrɛvəˈluʃəˌnɛri, ˈrɛgjələr, ɪˈlit, ˈmɑdərn ˈpiːpəlz ˈɑrmi ənd ˈfərmli ˈseɪfˌgɑrdɪŋ ðə ˈfɑðərˌlænd./"
  },
  {
    "id": 26,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "What are the regulations for hoisting the national flag?",
    "question_vi": "Quy định về kéo cờ Tổ quốc là gì?",
    "answer_en": "Hoist it daily at 06:00 and lower it at 18:00. Fly it at half-mast during national mourning.",
    "answer_vi": "Kéo cờ hằng ngày lúc 06:00 và hạ cờ lúc 18:00. Treo cờ rủ trong thời gian quốc tang.",
    "vocab": [
      {
        "en": "regulation",
        "vi": "quy định",
        "ipa": "/ˌrɛgjəˈleɪʃən/"
      },
      {
        "en": "hoist the flag",
        "vi": "kéo cờ",
        "ipa": "/hɔɪst ðə flæg/"
      },
      {
        "en": "lower the flag",
        "vi": "hạ cờ",
        "ipa": "/loʊər ðə flæg/"
      },
      {
        "en": "daily",
        "vi": "hằng ngày",
        "ipa": "/ˈdeɪli/"
      },
      {
        "en": "at half-mast",
        "vi": "treo cờ rủ",
        "ipa": "/æt ˈhæfˌmæst/"
      },
      {
        "en": "national mourning",
        "vi": "quốc tang",
        "ipa": "/ˈnæʃənəl ˈmɔrnɪŋ/"
      }
    ],
    "vocab_raw": "regulation – quy định  •  hoist the flag – kéo cờ  •  lower the flag – hạ cờ  •  daily – hằng ngày  •  at half-mast – treo cờ rủ  •  national mourning – quốc tang",
    "note": "",
    "question_ipa": "/wət ər ðə ˌrɛgjəˈleɪʃənz fər ˈhɔɪstɪŋ ðə ˈnæʃənəl flæg?/",
    "answer_ipa": "/hɔɪst ɪt ˈdeɪli æt 06: 00 ənd loʊər ɪt æt 18: 00. flaɪ ɪt æt ˈhæfˌmæst ˈdʊrɪŋ ˈnæʃənəl ˈmɔrnɪŋ./"
  },
  {
    "id": 27,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "What time is reveille in the military?",
    "question_vi": "Trong Quân đội, giờ báo thức là mấy giờ?",
    "answer_en": "05:00 in summer and 05:30 in winter, signaled by a whistle, bell, or other command.",
    "answer_vi": "Mùa hè 05:00, mùa đông 05:30; báo thức bằng còi, kẻng hoặc hiệu lệnh khác.",
    "vocab": [
      {
        "en": "reveille",
        "vi": "giờ báo thức/thức dậy",
        "ipa": "/ˈrɛvəli/"
      },
      {
        "en": "in summer",
        "vi": "vào mùa hè",
        "ipa": "/ɪn ˈsəmər/"
      },
      {
        "en": "in winter",
        "vi": "vào mùa đông",
        "ipa": "/ɪn ˈwɪntər/"
      },
      {
        "en": "signal",
        "vi": "ra hiệu, báo hiệu",
        "ipa": "/ˈsɪgnəl/"
      },
      {
        "en": "whistle",
        "vi": "còi",
        "ipa": "/ˈwɪsəl/"
      }
    ],
    "vocab_raw": "reveille – giờ báo thức/thức dậy  •  in summer – vào mùa hè  •  in winter – vào mùa đông  •  signal – ra hiệu, báo hiệu  •  whistle – còi",
    "note": "",
    "question_ipa": "/wət taɪm ɪz ˈrɛvəli ɪn ðə ˈmɪlɪˌtɛri?/",
    "answer_ipa": "/05: 00 ɪn ˈsəmər ənd 05: 30 ɪn ˈwɪntər, ˈsɪgnəld baɪ ə ˈwɪsəl, bɛl, ər ˈəðər kəˈmænd./"
  },
  {
    "id": 28,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "What must service members do within 10 minutes after reveille?",
    "question_vi": "Quân nhân phải làm gì trong vòng 10 phút sau giờ báo thức?",
    "answer_en": "Make the bed and fold the bedding neatly, attend to personal hygiene, and prepare for morning exercise.",
    "answer_vi": "Sắp xếp giường và gấp chăn màn gọn gàng, vệ sinh cá nhân và chuẩn bị tập thể dục buổi sáng.",
    "vocab": [
      {
        "en": "within",
        "vi": "trong vòng",
        "ipa": "/wɪˈθɪn/"
      },
      {
        "en": "make the bed",
        "vi": "sắp xếp giường ngủ",
        "ipa": "/meɪk ðə bɛd/"
      },
      {
        "en": "bedding",
        "vi": "chăn màn, đồ trải giường",
        "ipa": "/ˈbɛdɪŋ/"
      },
      {
        "en": "neatly",
        "vi": "gọn gàng, ngăn nắp",
        "ipa": "/ˈnitli/"
      },
      {
        "en": "personal hygiene",
        "vi": "vệ sinh cá nhân",
        "ipa": "/ˈpərsɪnəl ˈhaɪˌʤin/"
      }
    ],
    "vocab_raw": "within – trong vòng  •  make the bed – sắp xếp giường ngủ  •  bedding – chăn màn, đồ trải giường  •  neatly – gọn gàng, ngăn nắp  •  personal hygiene – vệ sinh cá nhân",
    "note": "",
    "question_ipa": "/wət məst ˈsərvɪs ˈmɛmbərz du wɪˈθɪn tɛn ˈmɪnəts ˈæftər ˈrɛvəli?/",
    "answer_ipa": "/meɪk ðə bɛd ənd foʊld ðə ˈbɛdɪŋ ˈnitli, əˈtɛnd tɪ ˈpərsɪnəl ˈhaɪˌʤin, ənd priˈpɛr fər ˈmɔrnɪŋ ˈɛksərˌsaɪz./"
  },
  {
    "id": 29,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "What is the purpose of morning physical training?",
    "question_vi": "Mục đích của thể dục buổi sáng là gì?",
    "answer_en": "To improve health and build momentum for the day’s study and work.",
    "answer_vi": "Nâng cao sức khỏe và tạo khí thế cho học tập, công tác trong ngày.",
    "vocab": [
      {
        "en": "purpose",
        "vi": "mục đích",
        "ipa": "/ˈpərpəs/"
      },
      {
        "en": "physical training",
        "vi": "thể dục, rèn luyện thể lực",
        "ipa": "/ˈfɪzɪkəl ˈtreɪnɪŋ/"
      },
      {
        "en": "improve health",
        "vi": "nâng cao sức khỏe",
        "ipa": "/ˌɪmˈpruv hɛlθ/"
      },
      {
        "en": "build momentum",
        "vi": "tạo đà, tạo khí thế",
        "ipa": "/bɪld moʊˈmɛntəm/"
      },
      {
        "en": "study and work",
        "vi": "học tập và công tác",
        "ipa": "/ˈstədi ənd wərk/"
      }
    ],
    "vocab_raw": "purpose – mục đích  •  physical training – thể dục, rèn luyện thể lực  •  improve health – nâng cao sức khỏe  •  build momentum – tạo đà, tạo khí thế  •  study and work – học tập và công tác",
    "note": "",
    "question_ipa": "/wət ɪz ðə ˈpərpəs əv ˈmɔrnɪŋ ˈfɪzɪkəl ˈtreɪnɪŋ?/",
    "answer_ipa": "/tɪ ˌɪmˈpruv hɛlθ ənd bɪld moʊˈmɛntəm fər ðə deɪz ˈstədi ənd wərk./"
  },
  {
    "id": 30,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "What is checked during the morning inspection?",
    "question_vi": "Những nội dung gì được kiểm tra trong giờ điểm danh, kiểm tra buổi sáng?",
    "answer_en": "Personnel strength, bearing, uniform, arrangement of personal belongings, and cleanliness.",
    "answer_vi": "Quân số, tác phong, quân phục, sắp xếp đồ dùng cá nhân và vệ sinh.",
    "vocab": [
      {
        "en": "inspection",
        "vi": "kiểm tra",
        "ipa": "/ˌɪnˈspɛkʃən/"
      },
      {
        "en": "personnel strength",
        "vi": "quân số",
        "ipa": "/ˌpərsəˈnɛl strɛŋθ/"
      },
      {
        "en": "bearing",
        "vi": "tác phong, tư thế",
        "ipa": "/ˈbɛrɪŋ/"
      },
      {
        "en": "uniform",
        "vi": "quân phục",
        "ipa": "/ˈjunəˌfɔrm/"
      },
      {
        "en": "personal belongings",
        "vi": "đồ dùng cá nhân",
        "ipa": "/ˈpərsɪnəl bɪˈlɔŋɪŋz/"
      },
      {
        "en": "cleanliness",
        "vi": "vệ sinh, sự sạch sẽ",
        "ipa": "/ˈklɛnlinɪs/"
      }
    ],
    "vocab_raw": "inspection – kiểm tra  •  personnel strength – quân số  •  bearing – tác phong, tư thế  •  uniform – quân phục  •  personal belongings – đồ dùng cá nhân  •  cleanliness – vệ sinh, sự sạch sẽ",
    "note": "",
    "question_ipa": "/wət ɪz ʧɛkt ˈdʊrɪŋ ðə ˈmɔrnɪŋ ˌɪnˈspɛkʃən?/",
    "answer_ipa": "/ˌpərsəˈnɛl strɛŋθ, ˈbɛrɪŋ, ˈjunəˌfɔrm, ərˈeɪnʤmənt əv ˈpərsɪnəl bɪˈlɔŋɪŋz, ənd ˈklɛnlinɪs./"
  },
  {
    "id": 31,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "What must military personnel comply with during study and work hours?",
    "question_vi": "Quân nhân phải chấp hành những yêu cầu gì trong giờ học tập và công tác?",
    "answer_en": "Observe the correct time, content, personnel, and position, and maintain a serious bearing.",
    "answer_vi": "Thực hiện đúng thời gian, nội dung, thành phần, địa điểm và giữ tác phong nghiêm túc.",
    "vocab": [
      {
        "en": "comply with",
        "vi": "chấp hành, tuân thủ",
        "ipa": "/kəmˈplaɪ wɪθ/"
      },
      {
        "en": "observe",
        "vi": "thực hiện, chấp hành",
        "ipa": "/əbˈzərv/"
      },
      {
        "en": "content",
        "vi": "nội dung",
        "ipa": "/ˈkɑntɛnt/"
      },
      {
        "en": "personnel",
        "vi": "thành phần người tham gia",
        "ipa": "/ˌpərsəˈnɛl/"
      },
      {
        "en": "position",
        "vi": "vị trí/địa điểm tùy ngữ cảnh",
        "ipa": "/pəˈzɪʃən/"
      },
      {
        "en": "serious bearing",
        "vi": "tác phong nghiêm túc",
        "ipa": "/ˈsɪriəs ˈbɛrɪŋ/"
      }
    ],
    "vocab_raw": "comply with – chấp hành, tuân thủ  •  observe – thực hiện, chấp hành  •  content – nội dung  •  personnel – thành phần người tham gia  •  position – vị trí/địa điểm tùy ngữ cảnh  •  serious bearing – tác phong nghiêm túc",
    "note": "",
    "question_ipa": "/wət məst ˈmɪlɪˌtɛri ˌpərsəˈnɛl kəmˈplaɪ wɪθ ˈdʊrɪŋ ˈstədi ənd wərk aʊərz?/",
    "answer_ipa": "/əbˈzərv ðə kərˈɛkt taɪm, ˈkɑntɛnt, ˌpərsəˈnɛl, ənd pəˈzɪʃən, ənd meɪnˈteɪn ə ˈsɪriəs ˈbɛrɪŋ./"
  },
  {
    "id": 32,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "What are the regulations governing meals in the military?",
    "question_vi": "Quy định về ăn uống trong Quân đội là gì?",
    "answer_en": "Eat at the prescribed time, with the designated personnel and standard portions; eat together, maintain hygiene, and avoid waste.",
    "answer_vi": "Ăn đúng giờ, đúng thành phần, đúng tiêu chuẩn định lượng; ăn tập trung, bảo đảm vệ sinh và tránh lãng phí.",
    "vocab": [
      {
        "en": "regulation",
        "vi": "quy định",
        "ipa": "/ˌrɛgjəˈleɪʃən/"
      },
      {
        "en": "prescribed time",
        "vi": "thời gian quy định",
        "ipa": "/priˈskraɪbd taɪm/"
      },
      {
        "en": "designated personnel",
        "vi": "thành phần được quy định",
        "ipa": "/ˈdɛzɪgˌneɪtɪd ˌpərsəˈnɛl/"
      },
      {
        "en": "portion",
        "vi": "suất ăn/khẩu phần",
        "ipa": "/ˈpɔrʃən/"
      },
      {
        "en": "maintain hygiene",
        "vi": "bảo đảm vệ sinh",
        "ipa": "/meɪnˈteɪn ˈhaɪˌʤin/"
      },
      {
        "en": "avoid waste",
        "vi": "tránh lãng phí",
        "ipa": "/əˈvɔɪd weɪst/"
      }
    ],
    "vocab_raw": "regulation – quy định  •  prescribed time – thời gian quy định  •  designated personnel – thành phần được quy định  •  portion – suất ăn/khẩu phần  •  maintain hygiene – bảo đảm vệ sinh  •  avoid waste – tránh lãng phí",
    "note": "",
    "question_ipa": "/wət ər ðə ˌrɛgjəˈleɪʃənz ˈgəvərnɪŋ milz ɪn ðə ˈmɪlɪˌtɛri?/",
    "answer_ipa": "/it æt ðə priˈskraɪbd taɪm, wɪθ ðə ˈdɛzɪgˌneɪtɪd ˌpərsəˈnɛl ənd ˈstændərd ˈpɔrʃənz; it təˈgɛðər, meɪnˈteɪn ˈhaɪˌʤin, ənd əˈvɔɪd weɪst./"
  },
  {
    "id": 33,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "When must weapons and equipment be cleaned and maintained?",
    "question_vi": "Vũ khí, trang bị phải được lau chùi, bảo quản khi nào?",
    "answer_en": "Every day after study and work hours and before sports; weapons must be clean, lightly oiled, and accounted for.",
    "answer_vi": "Hằng ngày sau giờ học tập, công tác và trước giờ thể thao; vũ khí phải sạch, được tra dầu mỏng và được quản lý, kiểm đếm đầy đủ.",
    "vocab": [
      {
        "en": "clean and maintain",
        "vi": "lau chùi và bảo quản",
        "ipa": "/klin ənd meɪnˈteɪn/"
      },
      {
        "en": "every day",
        "vi": "hằng ngày",
        "ipa": "/ˈɛvəri deɪ/"
      },
      {
        "en": "lightly oiled",
        "vi": "được tra dầu mỏng",
        "ipa": "/ˈlaɪtli ɔɪld/"
      },
      {
        "en": "accounted for",
        "vi": "được kiểm đếm/quản lý đầy đủ",
        "ipa": "/əˈkaʊntɪd fər/"
      },
      {
        "en": "equipment",
        "vi": "trang bị",
        "ipa": "/ɪkˈwɪpmənt/"
      }
    ],
    "vocab_raw": "clean and maintain – lau chùi và bảo quản  •  every day – hằng ngày  •  lightly oiled – được tra dầu mỏng  •  accounted for – được kiểm đếm/quản lý đầy đủ  •  equipment – trang bị",
    "note": "",
    "question_ipa": "/wɪn məst ˈwɛpənz ənd ɪkˈwɪpmənt bi klind ənd meɪnˈteɪnd?/",
    "answer_ipa": "/ˈɛvəri deɪ ˈæftər ˈstədi ənd wərk aʊərz ənd ˌbiˈfɔr spɔrts; ˈwɛpənz məst bi klin, ˈlaɪtli ɔɪld, ənd əˈkaʊntɪd fər./"
  },
  {
    "id": 34,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "Why must the weapon-cleaning routine be strictly maintained?",
    "question_vi": "Vì sao phải duy trì nghiêm chế độ lau chùi vũ khí?",
    "answer_en": "Weapons embody sweat and blood and are comrades in battle; they must remain in the best possible state of combat readiness.",
    "answer_vi": "Vũ khí thấm mồ hôi, xương máu và là người bạn đồng hành trong chiến đấu; vì vậy phải luôn ở trạng thái sẵn sàng chiến đấu tốt nhất.",
    "vocab": [
      {
        "en": "strictly maintain",
        "vi": "duy trì nghiêm",
        "ipa": "/ˈstrɪktli meɪnˈteɪn/"
      },
      {
        "en": "embody",
        "vi": "mang trong mình, kết tinh",
        "ipa": "/ɪmˈbɑdi/"
      },
      {
        "en": "sweat and blood",
        "vi": "mồ hôi và xương máu",
        "ipa": "/swɛt ənd bləd/"
      },
      {
        "en": "comrade in battle",
        "vi": "đồng đội/người bạn trong chiến đấu",
        "ipa": "/ˈkɑmˌræd ɪn ˈbætəl/"
      },
      {
        "en": "combat readiness",
        "vi": "trạng thái sẵn sàng chiến đấu",
        "ipa": "/ˈkɑmbæt ˈrɛdinəs/"
      }
    ],
    "vocab_raw": "strictly maintain – duy trì nghiêm  •  embody – mang trong mình, kết tinh  •  sweat and blood – mồ hôi và xương máu  •  comrade in battle – đồng đội/người bạn trong chiến đấu  •  combat readiness – trạng thái sẵn sàng chiến đấu",
    "note": "",
    "question_ipa": "/waɪ məst ðə ˈwɛpən ˌkliːnɪŋ ruˈtin bi ˈstrɪktli meɪnˈteɪnd?/",
    "answer_ipa": "/ˈwɛpənz ɪmˈbɑdi swɛt ənd bləd ənd ər ˈkɑmˌrædz ɪn ˈbætəl; ðeɪ məst rɪˈmeɪn ɪn ðə bɛst ˈpɑsəbəl steɪt əv ˈkɑmbæt ˈrɛdinəs./"
  },
  {
    "id": 35,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "What time is allocated for sports and production activities?",
    "question_vi": "Thời gian dành cho hoạt động thể thao và tăng gia sản xuất là khi nào?",
    "answer_en": "Usually 16:00–17:00.",
    "answer_vi": "Thông thường từ 16:00 đến 17:00.",
    "vocab": [
      {
        "en": "allocate",
        "vi": "bố trí, phân bổ",
        "ipa": "/ˈæləˌkeɪt/"
      },
      {
        "en": "usually",
        "vi": "thông thường",
        "ipa": "/ˈjuʒəwəli/"
      },
      {
        "en": "sports activities",
        "vi": "hoạt động thể thao",
        "ipa": "/spɔrts ækˈtɪvɪtiz/"
      },
      {
        "en": "production activities",
        "vi": "hoạt động tăng gia sản xuất",
        "ipa": "/pərˈdəkʃən ækˈtɪvɪtiz/"
      }
    ],
    "vocab_raw": "allocate – bố trí, phân bổ  •  usually – thông thường  •  sports activities – hoạt động thể thao  •  production activities – hoạt động tăng gia sản xuất",
    "note": "",
    "question_ipa": "/wət taɪm ɪz ˈæləˌkeɪtɪd fər spɔrts ənd pərˈdəkʃən ækˈtɪvɪtiz?/",
    "answer_ipa": "/ˈjuʒəwəli sɪksˈtiːn: 00–17: 00./"
  },
  {
    "id": 36,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "What is the purpose of reading newspapers, listening to news, and watching current-affairs programs?",
    "question_vi": "Mục đích của việc đọc báo, nghe tin và xem các chương trình thời sự là gì?",
    "answer_en": "To raise political awareness, keep up with current events, and guide thought.",
    "answer_vi": "Nâng cao nhận thức chính trị, nắm bắt tình hình thời sự và định hướng tư tưởng.",
    "vocab": [
      {
        "en": "raise awareness",
        "vi": "nâng cao nhận thức",
        "ipa": "/reɪz əˈwɛrnəs/"
      },
      {
        "en": "political awareness",
        "vi": "nhận thức chính trị",
        "ipa": "/pəˈlɪtɪkəl əˈwɛrnəs/"
      },
      {
        "en": "keep up with",
        "vi": "theo kịp, cập nhật",
        "ipa": "/kip əp wɪθ/"
      },
      {
        "en": "current events",
        "vi": "các sự kiện thời sự",
        "ipa": "/ˈkɑrənt ɪˈvɛnts/"
      },
      {
        "en": "guide thought",
        "vi": "định hướng tư tưởng",
        "ipa": "/gaɪd θɔt/"
      }
    ],
    "vocab_raw": "raise awareness – nâng cao nhận thức  •  political awareness – nhận thức chính trị  •  keep up with – theo kịp, cập nhật  •  current events – các sự kiện thời sự  •  guide thought – định hướng tư tưởng",
    "note": "",
    "question_ipa": "/wət ɪz ðə ˈpərpəs əv ˈrɛdɪŋ ˈnuzˌpeɪpərz, ˈlɪsənɪŋ tɪ nuz, ənd ˈwɑʧɪŋ ˈkʌrənt əˈfɛərz ˈproʊˌgræmz?/",
    "answer_ipa": "/tɪ reɪz pəˈlɪtɪkəl əˈwɛrnəs, kip əp wɪθ ˈkɑrənt ɪˈvɛnts, ənd gaɪd θɔt./"
  },
  {
    "id": 37,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "For which units is the 19:00 VTV1 news broadcast mandatory?",
    "question_vi": "Những đơn vị nào bắt buộc xem bản tin VTV1 lúc 19:00?",
    "answer_en": "All units, except when carrying out combat-readiness or guard duties.",
    "answer_vi": "Tất cả các đơn vị, trừ khi đang thực hiện nhiệm vụ sẵn sàng chiến đấu hoặc canh gác.",
    "vocab": [
      {
        "en": "broadcast",
        "vi": "chương trình phát sóng/bản tin",
        "ipa": "/ˈbrɔdˌkæst/"
      },
      {
        "en": "mandatory",
        "vi": "bắt buộc",
        "ipa": "/ˈmændəˌtɔri/"
      },
      {
        "en": "except when",
        "vi": "ngoại trừ khi",
        "ipa": "/ɪkˈsɛpt wɪn/"
      },
      {
        "en": "carry out",
        "vi": "thực hiện",
        "ipa": "/ˈkɛri aʊt/"
      },
      {
        "en": "guard duties",
        "vi": "nhiệm vụ canh gác",
        "ipa": "/gɑrd ˈdutiz/"
      }
    ],
    "vocab_raw": "broadcast – chương trình phát sóng/bản tin  •  mandatory – bắt buộc  •  except when – ngoại trừ khi  •  carry out – thực hiện  •  guard duties – nhiệm vụ canh gác",
    "note": "",
    "question_ipa": "/fər wɪʧ ˈjunɪts ɪz ðə 19: 00 ˌviː tiː viː wʌn nuz ˈbrɔdˌkæst ˈmændəˌtɔri?/",
    "answer_ipa": "/ɔl ˈjunɪts, ɪkˈsɛpt wɪn ˈkɛriɪŋ aʊt ˈkɒmbæt ˈrɛdɪnəs ər gɑrd ˈdutiz./"
  },
  {
    "id": 38,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "When is roll call and personnel accounting conducted?",
    "question_vi": "Việc điểm danh và kiểm tra quân số được tiến hành khi nào?",
    "answer_en": "In the evening before bedtime, usually at 21:00, to check personnel strength and remind everyone of the next day’s tasks.",
    "answer_vi": "Vào buổi tối trước giờ ngủ, thường lúc 21:00, để kiểm tra quân số và nhắc nhở nhiệm vụ ngày hôm sau.",
    "vocab": [
      {
        "en": "roll call",
        "vi": "điểm danh",
        "ipa": "/roʊl kɔl/"
      },
      {
        "en": "personnel accounting",
        "vi": "kiểm tra, quản lý quân số",
        "ipa": "/ˌpərsəˈnɛl əˈkaʊnɪŋ/"
      },
      {
        "en": "conduct",
        "vi": "tiến hành",
        "ipa": "/ˈkɑndəkt/"
      },
      {
        "en": "bedtime",
        "vi": "giờ đi ngủ",
        "ipa": "/ˈbɛdˌtaɪm/"
      },
      {
        "en": "remind",
        "vi": "nhắc nhở",
        "ipa": "/riˈmaɪnd/"
      },
      {
        "en": "task",
        "vi": "nhiệm vụ",
        "ipa": "/tæsk/"
      }
    ],
    "vocab_raw": "roll call – điểm danh  •  personnel accounting – kiểm tra, quản lý quân số  •  conduct – tiến hành  •  bedtime – giờ đi ngủ  •  remind – nhắc nhở  •  task – nhiệm vụ",
    "note": "",
    "question_ipa": "/wɪn ɪz roʊl kɔl ənd ˌpərsəˈnɛl əˈkaʊnɪŋ kənˈdəktəd?/",
    "answer_ipa": "/ɪn ðə ˈivnɪŋ ˌbiˈfɔr ˈbɛdˌtaɪm, ˈjuʒəwəli æt 21: 00, tɪ ʧɛk ˌpərsəˈnɛl strɛŋθ ənd riˈmaɪnd ˈɛvriˌwən əv ðə nɛkst deɪz tæsks./"
  },
  {
    "id": 39,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "What must absent personnel do at roll call?",
    "question_vi": "Quân nhân vắng mặt phải làm gì khi điểm danh?",
    "answer_en": "Report the reason and obtain the commander’s permission; the unit must know where personnel are and what they are doing.",
    "answer_vi": "Báo cáo lý do và được người chỉ huy cho phép; đơn vị phải nắm được quân nhân đang ở đâu và làm gì.",
    "vocab": [
      {
        "en": "absent personnel",
        "vi": "quân nhân vắng mặt",
        "ipa": "/ˈæbsənt ˌpərsəˈnɛl/"
      },
      {
        "en": "report the reason",
        "vi": "báo cáo lý do",
        "ipa": "/rɪˈpɔrt ðə ˈrizən/"
      },
      {
        "en": "obtain permission",
        "vi": "xin/được phép",
        "ipa": "/əbˈteɪn pərˈmɪʃən/"
      },
      {
        "en": "commander",
        "vi": "người chỉ huy",
        "ipa": "/kəˈmændər/"
      },
      {
        "en": "where ... are",
        "vi": "đang ở đâu",
        "ipa": "/wɛr... ər/"
      }
    ],
    "vocab_raw": "absent personnel – quân nhân vắng mặt  •  report the reason – báo cáo lý do  •  obtain permission – xin/được phép  •  commander – người chỉ huy  •  where ... are – đang ở đâu",
    "note": "",
    "question_ipa": "/wət məst ˈæbsənt ˌpərsəˈnɛl du æt roʊl kɔl?/",
    "answer_ipa": "/rɪˈpɔrt ðə ˈrizən ənd əbˈteɪn ðə kəˈmændərz pərˈmɪʃən; ðə ˈjunɪt məst noʊ wɛr ˌpərsəˈnɛl ər ənd wət ðeɪ ər duɪŋ./"
  },
  {
    "id": 40,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "What are the regulations on sleeping and resting?",
    "question_vi": "Quy định về ngủ, nghỉ là gì?",
    "answer_en": "Sleep at the prescribed time, 21:30–05:00; maintain order and quiet, and ensure guards remain vigilant.",
    "answer_vi": "Ngủ đúng giờ quy định, từ 21:30 đến 05:00; giữ trật tự, yên tĩnh và bảo đảm lực lượng gác luôn cảnh giác.",
    "vocab": [
      {
        "en": "regulation",
        "vi": "quy định",
        "ipa": "/ˌrɛgjəˈleɪʃən/"
      },
      {
        "en": "prescribed time",
        "vi": "thời gian quy định",
        "ipa": "/priˈskraɪbd taɪm/"
      },
      {
        "en": "maintain order and quiet",
        "vi": "giữ trật tự, yên tĩnh",
        "ipa": "/meɪnˈteɪn ˈɔrdər ənd kwaɪət/"
      },
      {
        "en": "ensure",
        "vi": "bảo đảm",
        "ipa": "/ɪnˈʃʊr/"
      },
      {
        "en": "vigilant",
        "vi": "cảnh giác",
        "ipa": "/ˈvɪʤələnt/"
      }
    ],
    "vocab_raw": "regulation – quy định  •  prescribed time – thời gian quy định  •  maintain order and quiet – giữ trật tự, yên tĩnh  •  ensure – bảo đảm  •  vigilant – cảnh giác",
    "note": "",
    "question_ipa": "/wət ər ðə ˌrɛgjəˈleɪʃənz ɔn sˈlipɪŋ ənd ˈrɛstɪŋ?/",
    "answer_ipa": "/slip æt ðə priˈskraɪbd taɪm, 21: 30–05: 00; meɪnˈteɪn ˈɔrdər ənd kwaɪət, ənd ɪnˈʃʊr gɑrdz rɪˈmeɪn ˈvɪʤələnt./"
  },
  {
    "id": 41,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "What are the three weekly routines in the military?",
    "question_vi": "Ba chế độ trong tuần của Quân đội là gì?",
    "answer_en": "Flag-raising and formation inspection on Monday morning; general cleaning and comprehensive equipment maintenance on Saturday afternoon; Political and Spiritual Cultural Day and Law Day activities.",
    "answer_vi": "Chào cờ và kiểm tra đội ngũ sáng thứ Hai; tổng vệ sinh và bảo quản toàn diện trang bị chiều thứ Bảy; các hoạt động Ngày Chính trị và văn hóa tinh thần, Ngày Pháp luật.",
    "vocab": [
      {
        "en": "weekly routine",
        "vi": "chế độ trong tuần",
        "ipa": "/ˈwikli ruˈtin/"
      },
      {
        "en": "flag-raising",
        "vi": "chào cờ/kéo cờ",
        "ipa": "/ˈflæɡˌreɪzɪŋ/"
      },
      {
        "en": "formation inspection",
        "vi": "kiểm tra đội ngũ",
        "ipa": "/fɔrˈmeɪʃən ˌɪnˈspɛkʃən/"
      },
      {
        "en": "general cleaning",
        "vi": "tổng vệ sinh",
        "ipa": "/ˈʤɛnərəl ˈklinɪŋ/"
      },
      {
        "en": "comprehensive maintenance",
        "vi": "bảo quản toàn diện",
        "ipa": "/ˌkɑmpriˈhɛnsɪv ˈmeɪntənəns/"
      },
      {
        "en": "Law Day",
        "vi": "Ngày Pháp luật",
        "ipa": "/lɔ deɪ/"
      }
    ],
    "vocab_raw": "weekly routine – chế độ trong tuần  •  flag-raising – chào cờ/kéo cờ  •  formation inspection – kiểm tra đội ngũ  •  general cleaning – tổng vệ sinh  •  comprehensive maintenance – bảo quản toàn diện  •  Law Day – Ngày Pháp luật",
    "note": "",
    "question_ipa": "/wət ər ðə θriː ˈwikli ruˈtinz ɪn ðə ˈmɪlɪˌtɛri?/",
    "answer_ipa": "/ˈflæɡˌreɪzɪŋ ənd fɔrˈmeɪʃən ˌɪnˈspɛkʃən ɔn ˈmənˌdeɪ ˈmɔrnɪŋ; ˈʤɛnərəl ˈklinɪŋ ənd ˌkɑmpriˈhɛnsɪv ɪkˈwɪpmənt ˈmeɪntənəns ɔn ˈsæˌtɪˌdeɪ ˌæftərˈnun; pəˈlɪtɪkəl ənd ˈspɪrɪˌʧuəl ˈkəlʧərəl deɪ ənd lɔ deɪ ækˈtɪvɪtiz./"
  },
  {
    "id": 42,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "How are violations of the 11 daily routines handled?",
    "question_vi": "Các vi phạm 11 chế độ trong ngày được xử lý như thế nào?",
    "answer_en": "Warnings, criticism, self-review, and disciplinary action in accordance with the Regulations on the Management of Troops and Circular No. 16 on disciplinary action.",
    "answer_vi": "Nhắc nhở, phê bình, kiểm điểm và xử lý kỷ luật theo Điều lệnh quản lý bộ đội và Thông tư số 16 về xử lý kỷ luật.",
    "vocab": [
      {
        "en": "violation",
        "vi": "vi phạm",
        "ipa": "/vaɪəˈleɪʃən/"
      },
      {
        "en": "warning",
        "vi": "cảnh cáo/nhắc nhở tùy ngữ cảnh",
        "ipa": "/ˈwɔrnɪŋ/"
      },
      {
        "en": "criticism",
        "vi": "phê bình",
        "ipa": "/ˈkrɪtɪˌsɪzəm/"
      },
      {
        "en": "self-review",
        "vi": "kiểm điểm",
        "ipa": "/ˌsɛlf rɪˈvjuː/"
      },
      {
        "en": "disciplinary action",
        "vi": "xử lý kỷ luật",
        "ipa": "/ˈdɪsəpləˌnɛri ˈækʃən/"
      },
      {
        "en": "in accordance with",
        "vi": "theo, phù hợp với",
        "ipa": "/ɪn əˈkɔrdəns wɪθ/"
      }
    ],
    "vocab_raw": "violation – vi phạm  •  warning – cảnh cáo/nhắc nhở tùy ngữ cảnh  •  criticism – phê bình  •  self-review – kiểm điểm  •  disciplinary action – xử lý kỷ luật  •  in accordance with – theo, phù hợp với",
    "note": "",
    "question_ipa": "/haʊ ər vaɪəˈleɪʃənz əv ðə ɪˈlɛvən ˈdeɪli ruˈtinz ˈhændəld?/",
    "answer_ipa": "/ˈwɔrnɪŋz, ˈkrɪtɪˌsɪzəm, ˌsɛlf rɪˈvjuː, ənd ˈdɪsəpləˌnɛri ˈækʃən ɪn əˈkɔrdəns wɪθ ðə ˌrɛgjəˈleɪʃənz ɔn ðə ˈmænɪʤmənt əv trups ənd ˈsərkjələr noʊ. sɪksˈtiːn ɔn ˈdɪsəpləˌnɛri ˈækʃən./"
  },
  {
    "id": 43,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "Do the 11 daily routines apply during wartime?",
    "question_vi": "Mười một chế độ trong ngày có được áp dụng trong thời chiến không?",
    "answer_en": "Yes, but they are applied flexibly according to combat conditions and combat-readiness requirements.",
    "answer_vi": "Có, nhưng được vận dụng linh hoạt theo điều kiện chiến đấu và yêu cầu sẵn sàng chiến đấu.",
    "vocab": [
      {
        "en": "apply",
        "vi": "áp dụng",
        "ipa": "/əˈplaɪ/"
      },
      {
        "en": "wartime",
        "vi": "thời chiến",
        "ipa": "/ˈwɔrˌtaɪm/"
      },
      {
        "en": "flexibly",
        "vi": "linh hoạt",
        "ipa": "/ˈflɛksəbli/"
      },
      {
        "en": "combat conditions",
        "vi": "điều kiện chiến đấu",
        "ipa": "/ˈkɑmbæt kənˈdɪʃənz/"
      },
      {
        "en": "requirements",
        "vi": "yêu cầu",
        "ipa": "/rɪkˈwaɪrmənts/"
      }
    ],
    "vocab_raw": "apply – áp dụng  •  wartime – thời chiến  •  flexibly – linh hoạt  •  combat conditions – điều kiện chiến đấu  •  requirements – yêu cầu",
    "note": "",
    "question_ipa": "/du ðə ɪˈlɛvən ˈdeɪli ruˈtinz əˈplaɪ ˈdʊrɪŋ ˈwɔrˌtaɪm?/",
    "answer_ipa": "/jɛs, bət ðeɪ ər əˈplaɪd ˈflɛksəbli əˈkɔrdɪŋ tɪ ˈkɑmbæt kənˈdɪʃənz ənd ˈkɒmbæt ˈrɛdɪnəs rɪkˈwaɪrmənts./"
  },
  {
    "id": 44,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "What is the squad leader’s role in maintaining the 11 daily routines?",
    "question_vi": "Vai trò của tiểu đội trưởng trong duy trì 11 chế độ trong ngày là gì?",
    "answer_en": "Directly urge, inspect, and maintain the routines, and set an example for soldiers.",
    "answer_vi": "Trực tiếp đôn đốc, kiểm tra, duy trì các chế độ và nêu gương cho chiến sĩ.",
    "vocab": [
      {
        "en": "squad leader",
        "vi": "tiểu đội trưởng",
        "ipa": "/skwɑd ˈlidər/"
      },
      {
        "en": "maintain",
        "vi": "duy trì",
        "ipa": "/meɪnˈteɪn/"
      },
      {
        "en": "urge",
        "vi": "đôn đốc",
        "ipa": "/ərʤ/"
      },
      {
        "en": "inspect",
        "vi": "kiểm tra",
        "ipa": "/ˌɪnˈspɛkt/"
      },
      {
        "en": "set an example",
        "vi": "nêu gương",
        "ipa": "/sɛt ən ɪgˈzæmpəl/"
      }
    ],
    "vocab_raw": "squad leader – tiểu đội trưởng  •  maintain – duy trì  •  urge – đôn đốc  •  inspect – kiểm tra  •  set an example – nêu gương",
    "note": "",
    "question_ipa": "/wət ɪz ðə skwɑd ˈliːdərz roʊl ɪn meɪnˈteɪnɪŋ ðə ɪˈlɛvən ˈdeɪli ruˈtinz?/",
    "answer_ipa": "/dɪˈrɛkli ərʤ, ˌɪnˈspɛkt, ənd meɪnˈteɪn ðə ruˈtinz, ənd sɛt ən ɪgˈzæmpəl fər ˈsoʊlʤərz./"
  },
  {
    "id": 45,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "Is the midday nap one of the 11 daily routines?",
    "question_vi": "Ngủ trưa có phải là một trong 11 chế độ trong ngày không?",
    "answer_en": "Yes. Some units count it as a routine, with quiet rest from 12:00 to 13:30.",
    "answer_vi": "Có. Một số đơn vị tính đây là một chế độ, với thời gian nghỉ trưa yên tĩnh từ 12:00 đến 13:30.",
    "vocab": [
      {
        "en": "midday nap",
        "vi": "ngủ trưa",
        "ipa": "/ˈmɪdˌdeɪ næp/"
      },
      {
        "en": "count ... as",
        "vi": "tính ... là",
        "ipa": "/kaʊnt... ɛz/"
      },
      {
        "en": "routine",
        "vi": "chế độ, nề nếp",
        "ipa": "/ruˈtin/"
      },
      {
        "en": "quiet rest",
        "vi": "nghỉ ngơi yên tĩnh",
        "ipa": "/kwaɪət rɛst/"
      }
    ],
    "vocab_raw": "midday nap – ngủ trưa  •  count ... as – tính ... là  •  routine – chế độ, nề nếp  •  quiet rest – nghỉ ngơi yên tĩnh",
    "note": "Ghi chú theo tài liệu gốc: Một số tài liệu cũ liệt kê ngủ trưa thành chế độ riêng, trong khi tài liệu mới hơn xếp nội dung này vào chế độ ngủ, nghỉ. Trên thực tế, các đơn vị có thể tiếp tục duy trì chế độ này.",
    "question_ipa": "/ɪz ðə ˈmɪdˌdeɪ næp wən əv ðə ɪˈlɛvən ˈdeɪli ruˈtinz?/",
    "answer_ipa": "/jɛs. səm ˈjunɪts kaʊnt ɪt ɛz ə ruˈtin, wɪθ kwaɪət rɛst frəm 12: 00 tɪ 13: 30./"
  },
  {
    "id": 46,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "What does innovation in maintaining the 11 daily routines involve?",
    "question_vi": "Đổi mới sáng tạo trong duy trì 11 chế độ trong ngày bao gồm những gì?",
    "answer_en": "Using smart alarms, facial-recognition roll call, software for personnel management, cameras, and electronic logs.",
    "answer_vi": "Sử dụng báo thức thông minh, điểm danh bằng nhận diện khuôn mặt, phần mềm quản lý quân số, camera và sổ nhật ký điện tử.",
    "vocab": [
      {
        "en": "smart alarm",
        "vi": "báo thức thông minh",
        "ipa": "/smɑrt əˈlɑrm/"
      },
      {
        "en": "facial recognition",
        "vi": "nhận diện khuôn mặt",
        "ipa": "/ˈfeɪʃəl ˌrɛkɪgˈnɪʃən/"
      },
      {
        "en": "personnel management",
        "vi": "quản lý quân số/nhân sự",
        "ipa": "/ˌpərsəˈnɛl ˈmænɪʤmənt/"
      },
      {
        "en": "camera",
        "vi": "camera",
        "ipa": "/ˈkæmərə/"
      },
      {
        "en": "electronic log",
        "vi": "sổ nhật ký điện tử",
        "ipa": "/ˌɪˌlɛkˈtrɑnɪk lɔg/"
      }
    ],
    "vocab_raw": "smart alarm – báo thức thông minh  •  facial recognition – nhận diện khuôn mặt  •  personnel management – quản lý quân số/nhân sự  •  camera – camera  •  electronic log – sổ nhật ký điện tử",
    "note": "",
    "question_ipa": "/wət dɪz ˌɪnəˈveɪʃən ɪn meɪnˈteɪnɪŋ ðə ɪˈlɛvən ˈdeɪli ruˈtinz ˌɪnˈvɑlv?/",
    "answer_ipa": "/ˈjuzɪŋ smɑrt əˈlɑrmz, ˈfeɪʃəl ˌrɛkəɡˈnɪʃən roʊl kɔl, ˈsɔfˌwɛr fər ˌpərsəˈnɛl ˈmænɪʤmənt, ˈkæmərəz, ənd ˌɪˌlɛkˈtrɑnɪk lɔgz./"
  },
  {
    "id": 47,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "What is the relationship between digital transformation and building regularity through the 11 daily routines?",
    "question_vi": "Mối quan hệ giữa chuyển đổi số và xây dựng chính quy thông qua 11 chế độ trong ngày là gì?",
    "answer_en": "Digital transformation enables faster, more accurate, and transparent regular management while reducing administrative procedures.",
    "answer_vi": "Chuyển đổi số giúp quản lý chính quy nhanh hơn, chính xác hơn, minh bạch hơn và giảm thủ tục hành chính.",
    "vocab": [
      {
        "en": "relationship",
        "vi": "mối quan hệ",
        "ipa": "/riˈleɪʃənˌʃɪp/"
      },
      {
        "en": "regularity",
        "vi": "tính chính quy",
        "ipa": "/ˌrɛgjəˈlɛrəti/"
      },
      {
        "en": "enable",
        "vi": "tạo điều kiện, giúp",
        "ipa": "/ɪˈneɪbəl/"
      },
      {
        "en": "transparent",
        "vi": "minh bạch",
        "ipa": "/trænˈspɛrənt/"
      },
      {
        "en": "reduce",
        "vi": "giảm",
        "ipa": "/rɪˈdus/"
      },
      {
        "en": "administrative procedures",
        "vi": "thủ tục hành chính",
        "ipa": "/ədˈmɪnɪˌstreɪtɪv prəˈsiʤərz/"
      }
    ],
    "vocab_raw": "relationship – mối quan hệ  •  regularity – tính chính quy  •  enable – tạo điều kiện, giúp  •  transparent – minh bạch  •  reduce – giảm  •  administrative procedures – thủ tục hành chính",
    "note": "",
    "question_ipa": "/wət ɪz ðə riˈleɪʃənˌʃɪp bɪtˈwin ˈdɪʤɪtəl ˌtrænsfərˈmeɪʃən ənd ˈbɪldɪŋ ˌrɛgjəˈlɛrəti θru ðə ɪˈlɛvən ˈdeɪli ruˈtinz?/",
    "answer_ipa": "/ˈdɪʤɪtəl ˌtrænsfərˈmeɪʃən ɪˈneɪbəlz ˈfæstər, mɔr ˈækjərət, ənd trænˈspɛrənt ˈrɛgjələr ˈmænɪʤmənt waɪl rɪˈdusɪŋ ədˈmɪnɪˌstreɪtɪv prəˈsiʤərz./"
  },
  {
    "id": 48,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "What happens to the 11 daily routines when the unit sounds a combat-readiness alarm?",
    "question_vi": "Điều gì xảy ra với 11 chế độ trong ngày khi đơn vị phát báo động sẵn sàng chiến đấu?",
    "answer_en": "Immediately switch to combat-readiness procedures, suspend other routines, and obey the commander’s orders.",
    "answer_vi": "Lập tức chuyển sang các quy trình sẵn sàng chiến đấu, tạm dừng các chế độ khác và chấp hành mệnh lệnh của người chỉ huy.",
    "vocab": [
      {
        "en": "sound an alarm",
        "vi": "phát báo động",
        "ipa": "/saʊnd ən əˈlɑrm/"
      },
      {
        "en": "combat-readiness",
        "vi": "sẵn sàng chiến đấu",
        "ipa": "/ˈkɒmbæt ˈrɛdɪnəs/"
      },
      {
        "en": "immediately",
        "vi": "ngay lập tức",
        "ipa": "/ˌɪˈmiˌdiətli/"
      },
      {
        "en": "switch to",
        "vi": "chuyển sang",
        "ipa": "/swɪʧ tɪ/"
      },
      {
        "en": "suspend",
        "vi": "tạm dừng",
        "ipa": "/səˈspɛnd/"
      },
      {
        "en": "obey orders",
        "vi": "chấp hành mệnh lệnh",
        "ipa": "/oʊˈbeɪ ˈɔrdərz/"
      }
    ],
    "vocab_raw": "sound an alarm – phát báo động  •  combat-readiness – sẵn sàng chiến đấu  •  immediately – ngay lập tức  •  switch to – chuyển sang  •  suspend – tạm dừng  •  obey orders – chấp hành mệnh lệnh",
    "note": "",
    "question_ipa": "/wət ˈhæpənz tɪ ðə ɪˈlɛvən ˈdeɪli ruˈtinz wɪn ðə ˈjunɪt saʊnz ə ˈkɒmbæt ˈrɛdɪnəs əˈlɑrm?/",
    "answer_ipa": "/ˌɪˈmiˌdiətli swɪʧ tɪ ˈkɒmbæt ˈrɛdɪnəs prəˈsiʤərz, səˈspɛnd ˈəðər ruˈtinz, ənd oʊˈbeɪ ðə kəˈmændərz ˈɔrdərz./"
  },
  {
    "id": 49,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "What is the greatest significance of strictly observing the 11 daily routines?",
    "question_vi": "Ý nghĩa lớn nhất của việc chấp hành nghiêm 11 chế độ trong ngày là gì?",
    "answer_en": "Building a regular, disciplined, and unified way of life; improving health and willpower; and maintaining a high level of combat readiness.",
    "answer_vi": "Xây dựng nếp sống chính quy, kỷ luật, thống nhất; nâng cao sức khỏe, ý chí và duy trì trạng thái sẵn sàng chiến đấu cao.",
    "vocab": [
      {
        "en": "significance",
        "vi": "ý nghĩa",
        "ipa": "/sɪgˈnɪfɪkəns/"
      },
      {
        "en": "strictly observe",
        "vi": "chấp hành nghiêm",
        "ipa": "/ˈstrɪktli əbˈzərv/"
      },
      {
        "en": "disciplined",
        "vi": "có kỷ luật",
        "ipa": "/ˈdɪsəplənd/"
      },
      {
        "en": "unified",
        "vi": "thống nhất",
        "ipa": "/ˈjunəˌfaɪd/"
      },
      {
        "en": "willpower",
        "vi": "ý chí",
        "ipa": "/ˈwɪlˌpaʊər/"
      },
      {
        "en": "a high level of",
        "vi": "mức độ cao",
        "ipa": "/ə haɪ ˈlɛvəl əv/"
      }
    ],
    "vocab_raw": "significance – ý nghĩa  •  strictly observe – chấp hành nghiêm  •  disciplined – có kỷ luật  •  unified – thống nhất  •  willpower – ý chí  •  a high level of – mức độ cao",
    "note": "",
    "question_ipa": "/wət ɪz ðə ˈgreɪtəst sɪgˈnɪfɪkəns əv ˈstrɪktli əbˈzərvɪŋ ðə ɪˈlɛvən ˈdeɪli ruˈtinz?/",
    "answer_ipa": "/ˈbɪldɪŋ ə ˈrɛgjələr, ˈdɪsəplənd, ənd ˈjunəˌfaɪd weɪ əv laɪf; ˌɪmˈpruvɪŋ hɛlθ ənd ˈwɪlˌpaʊər; ənd meɪnˈteɪnɪŋ ə haɪ ˈlɛvəl əv ˈkɑmbæt ˈrɛdinəs./"
  },
  {
    "id": 50,
    "part": 2,
    "partName": "Phần 2: Chế độ ngày và tuần trong Quân đội",
    "question_en": "What should a commander do to combine innovation effectively with the 11 daily routines?",
    "question_vi": "Người chỉ huy cần làm gì để kết hợp hiệu quả đổi mới sáng tạo với 11 chế độ trong ngày?",
    "answer_en": "Set an example, use creative methods to maintain routines, and apply digital technology without lowering disciplinary standards.",
    "answer_vi": "Nêu gương, sử dụng phương pháp sáng tạo để duy trì các chế độ và áp dụng công nghệ số nhưng không hạ thấp tiêu chuẩn kỷ luật.",
    "vocab": [
      {
        "en": "commander",
        "vi": "người chỉ huy",
        "ipa": "/kəˈmændər/"
      },
      {
        "en": "combine ... with",
        "vi": "kết hợp ... với",
        "ipa": "/ˈkɑmbaɪn... wɪθ/"
      },
      {
        "en": "effectively",
        "vi": "hiệu quả",
        "ipa": "/ˈifɛktɪvli/"
      },
      {
        "en": "set an example",
        "vi": "nêu gương",
        "ipa": "/sɛt ən ɪgˈzæmpəl/"
      },
      {
        "en": "lower",
        "vi": "hạ thấp",
        "ipa": "/loʊər/"
      },
      {
        "en": "disciplinary standards",
        "vi": "tiêu chuẩn kỷ luật",
        "ipa": "/ˈdɪsəpləˌnɛri ˈstændərdz/"
      }
    ],
    "vocab_raw": "commander – người chỉ huy  •  combine ... with – kết hợp ... với  •  effectively – hiệu quả  •  set an example – nêu gương  •  lower – hạ thấp  •  disciplinary standards – tiêu chuẩn kỷ luật",
    "note": "",
    "question_ipa": "/wət ʃʊd ə kəˈmændər du tɪ ˈkɑmbaɪn ˌɪnəˈveɪʃən ˈifɛktɪvli wɪθ ðə ɪˈlɛvən ˈdeɪli ruˈtinz?/",
    "answer_ipa": "/sɛt ən ɪgˈzæmpəl, juz kriˈeɪtɪv ˈmɛθədz tɪ meɪnˈteɪn ruˈtinz, ənd əˈplaɪ ˈdɪʤɪtəl tɛkˈnɑləʤi wɪˈθaʊt loʊərɪŋ ˈdɪsəpləˌnɛri ˈstændərdz./"
  }
];
