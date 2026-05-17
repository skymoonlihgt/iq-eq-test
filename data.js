const tests_ko = {
  iq: {
    label: "IQ 테스트",
    shortLabel: "IQ",
    timeLimit: 45,
    description: "수열, 조건 추론, 계산, 패턴 인식 중심",
    questions: [
      {
        id: "iq-1",
        skill: "패턴 추론",
        title: "2, 6, 12, 20, 30 다음에 올 수는?",
        passage: "연속된 차이를 먼저 비교해 보세요.",
        choices: ["40", "42", "44", "48"],
        answer: 1,
        insight: "차이가 4, 6, 8, 10으로 2씩 증가하므로 다음 차이는 12입니다."
      },
      {
        id: "iq-2",
        skill: "논리 명제",
        title: "A가 B보다 크고, B는 D보다 작습니다. 확실히 말할 수 있는 것은?",
        passage: "정보가 없는 대상은 결론에 넣을 수 없습니다.",
        choices: ["A는 D보다 크다", "D는 B보다 크다", "C는 D보다 크다", "A는 C보다 작다"],
        answer: 1,
        insight: "B가 D보다 작다는 말은 D가 B보다 크다는 뜻입니다."
      },
      {
        id: "iq-3",
        skill: "요일 계산",
        title: "오늘이 수요일이라면 45일 뒤는 무슨 요일일까요?",
        passage: "7일 단위로 나눈 나머지가 핵심입니다.",
        choices: ["금요일", "토요일", "일요일", "월요일"],
        answer: 1,
        insight: "45를 7로 나누면 나머지는 3입니다. 수요일에서 3일 뒤는 토요일입니다."
      },
      {
        id: "iq-4",
        skill: "수열",
        title: "3, 4, 7, 11, 18, 29 다음 숫자는?",
        passage: "앞의 두 수를 더하는 흐름이 숨어 있습니다.",
        choices: ["43", "45", "47", "51"],
        answer: 2,
        insight: "7=3+4, 11=4+7, 18=7+11, 29=11+18이므로 다음은 47입니다."
      },
      {
        id: "iq-5",
        skill: "암호 해독",
        title: "PLAN이 QMBM으로 바뀐다면 MIND는 무엇으로 바뀔까요?",
        passage: "각 글자가 알파벳 순서에서 한 칸씩 이동합니다.",
        choices: ["NJME", "NJOE", "MJOF", "OJNE"],
        answer: 1,
        insight: "M, I, N, D가 각각 한 칸 이동하면 N, J, O, E가 됩니다."
      },
      {
        id: "iq-6",
        skill: "분류 추론",
        title: "모든 라나는 파란색이고 몇몇 파란색은 둥글다. 확실한 결론은?",
        passage: "가능한 말과 반드시 참인 말을 구분해 보세요.",
        choices: [
          "모든 라나는 둥글다",
          "몇몇 라나는 둥글다",
          "라나가 둥글다는 보장은 없다",
          "둥근 것은 모두 라나다"
        ],
        answer: 2,
        insight: "라나가 둥근 파란색 집합과 겹친다고 단정할 수 없습니다."
      },
      {
        id: "iq-7",
        skill: "비교 전략",
        title: "상자 5개 중 하나만 더 무겁습니다. 양팔저울로 반드시 찾는 최소 횟수는?",
        passage: "처음에 2개와 2개를 비교하는 경우를 떠올려 보세요.",
        choices: ["1회", "2회", "3회", "4회"],
        answer: 1,
        insight: "2개 대 2개를 재고, 기울면 무거운 쪽 2개를 한 번 더 비교합니다."
      },
      {
        id: "iq-8",
        skill: "배열",
        title: "서로 다른 책 6권을 한 줄로 꽂는 순서는 몇 가지일까요?",
        passage: "서로 다른 6개의 배열 수를 묻는 문제입니다.",
        choices: ["36", "120", "360", "720"],
        answer: 3,
        insight: "서로 다른 6개를 배열하는 경우의 수는 6! = 720입니다."
      },
      {
        id: "iq-9",
        skill: "역산",
        title: "어떤 수에 4를 더한 뒤 3배했더니 27이 되었습니다. 어떤 수일까요?",
        passage: "마지막 연산부터 거꾸로 풀어 보세요.",
        choices: ["3", "5", "7", "9"],
        answer: 1,
        insight: "27을 3으로 나누면 9이고, 9에서 4를 빼면 5입니다."
      },
      {
        id: "iq-10",
        skill: "공간 감각",
        title: "정육면체의 모든 면을 칠한 뒤 27개의 작은 정육면체로 나누면, 3면이 칠해진 조각은?",
        passage: "3면이 칠해진 조각은 꼭짓점에 있던 조각입니다.",
        choices: ["4개", "6개", "8개", "12개"],
        answer: 2,
        insight: "정육면체의 꼭짓점은 8개이므로 3면이 칠해진 조각도 8개입니다."
      },
      {
        id: "iq-11",
        skill: "조건 추론",
        title: "민수는 지아보다 빠르고, 하준은 민수보다 느립니다. 확실한 것은?",
        passage: "세 사람의 전체 순서가 완전히 정해지는지 확인하세요.",
        choices: [
          "하준은 지아보다 빠르다",
          "지아는 하준보다 빠르다",
          "민수는 하준보다 빠르다",
          "하준이 가장 느리다"
        ],
        answer: 2,
        insight: "하준은 민수보다 느리므로 민수가 하준보다 빠른 것은 확실합니다."
      },
      {
        id: "iq-12",
        skill: "비율 계산",
        title: "어떤 가격이 20% 오른 뒤 다시 20% 내렸습니다. 최종 가격은?",
        passage: "처음 가격을 100으로 두고 계산해 보세요.",
        choices: ["처음과 같다", "4% 낮다", "4% 높다", "20% 낮다"],
        answer: 1,
        insight: "100이 120이 되고, 120의 20%를 내리면 96이므로 처음보다 4% 낮습니다."
      },
      {
        id: "iq-13",
        skill: "수열",
        title: "1, 4, 9, 16, 25 다음 숫자는?",
        passage: "각 항이 어떤 수의 제곱인지 떠올려 보세요.",
        choices: ["30", "34", "36", "49"],
        answer: 2,
        insight: "1², 2², 3², 4², 5² 다음은 6²이므로 36입니다."
      },
      {
        id: "iq-14",
        skill: "조건 추론",
        title: "모든 베타는 감마이고, 어떤 감마도 델타가 아닙니다. 확실한 것은?",
        passage: "두 집합의 포함과 배제를 동시에 확인하세요.",
        choices: [
          "모든 베타는 델타다",
          "어떤 베타도 델타가 아니다",
          "모든 감마는 베타다",
          "몇몇 델타는 베타다"
        ],
        answer: 1,
        insight: "베타는 모두 감마 안에 있고 감마는 델타가 아니므로 베타도 델타가 아닙니다."
      },
      {
        id: "iq-15",
        skill: "암호 해독",
        title: "ACE가 BDF로 바뀐다면 GIK는 무엇으로 바뀔까요?",
        passage: "각 글자를 한 칸씩 뒤로 옮깁니다.",
        choices: ["HJL", "HJM", "GJL", "IKM"],
        answer: 0,
        insight: "G, I, K를 각각 한 칸씩 이동하면 H, J, L입니다."
      },
      {
        id: "iq-16",
        skill: "계산 추론",
        title: "한 사람이 6분에 부품 4개를 만들면 3명이 18분 동안 만드는 부품 수는?",
        passage: "한 사람의 18분 생산량을 먼저 계산해 보세요.",
        choices: ["24개", "30개", "36개", "48개"],
        answer: 2,
        insight: "한 사람은 18분에 12개를 만들고, 3명은 36개를 만듭니다."
      },
      {
        id: "iq-17",
        skill: "도형 규칙",
        title: "삼각형의 변이 3개, 사각형의 변이 4개라면 오각형 4개의 변 합은?",
        passage: "오각형 하나의 변 수를 기준으로 곱하세요.",
        choices: ["16", "18", "20", "24"],
        answer: 2,
        insight: "오각형은 변이 5개이고 4개면 5 x 4 = 20입니다."
      },
      {
        id: "iq-18",
        skill: "패턴 추론",
        title: "Z, X, U, Q, L 다음 글자는?",
        passage: "알파벳 위치가 얼마나씩 줄어드는지 보세요.",
        choices: ["G", "F", "E", "D"],
        answer: 1,
        insight: "26, 24, 21, 17, 12로 2, 3, 4, 5씩 줄어듭니다. 다음은 6을 뺀 F입니다."
      },
      {
        id: "iq-19",
        skill: "확률",
        title: "동전을 두 번 던질 때 앞면이 정확히 한 번 나올 확률은?",
        passage: "가능한 결과 네 가지를 떠올려 보세요.",
        choices: ["1/4", "1/3", "1/2", "3/4"],
        answer: 2,
        insight: "앞뒤, 뒤앞 두 경우가 해당하므로 2/4 = 1/2입니다."
      },
      {
        id: "iq-20",
        skill: "작업 순서",
        title: "A 작업은 B보다 먼저, C는 A보다 나중, B는 D보다 먼저 해야 합니다. 가능한 순서는?",
        passage: "A와 B의 순서, B와 D의 순서를 모두 만족해야 합니다.",
        choices: ["A-B-C-D", "A-C-B-D", "B-A-C-D", "D-A-B-C"],
        answer: 1,
        insight: "A가 B보다 먼저이고, B가 D보다 먼저이며, C는 A보다 나중인 A-C-B-D가 가능합니다."
      },
      {
        id: "iq-21",
        skill: "수열",
        title: "81, 27, 9, 3 다음 숫자는?",
        passage: "각 항이 같은 수로 나누어지고 있습니다.",
        choices: ["0", "1", "2", "6"],
        answer: 1,
        insight: "매번 3으로 나누므로 3 다음은 1입니다."
      },
      {
        id: "iq-22",
        skill: "논리 비교",
        title: "세 수 A, B, C가 있습니다. A+B=10, B+C=14, A+C=16이면 B는?",
        passage: "세 식을 모두 더한 뒤 생각해 보세요.",
        choices: ["3", "4", "5", "6"],
        answer: 1,
        insight: "세 식의 합은 40이고 A+B+C=20입니다. B는 20-(A+C)=4입니다."
      },
      {
        id: "iq-23",
        skill: "공간 감각",
        title: "정사각형 종이를 반으로 접고 다시 반으로 접으면 겹친 층은 몇 겹일까요?",
        passage: "접을 때마다 층 수가 두 배가 됩니다.",
        choices: ["2겹", "3겹", "4겹", "8겹"],
        answer: 2,
        insight: "한 번 접으면 2겹, 두 번 접으면 4겹입니다."
      },
      {
        id: "iq-24",
        skill: "분류",
        title: "다음 중 나머지와 성격이 다른 것은?",
        passage: "계절과 관련된 단어 사이에서 하나를 찾아보세요.",
        choices: ["봄", "여름", "가을", "월요일"],
        answer: 3,
        insight: "봄, 여름, 가을은 계절이고 월요일은 요일입니다."
      },
      {
        id: "iq-25",
        skill: "거리 계산",
        title: "시속 60km로 90분 이동하면 거리는?",
        passage: "90분은 1.5시간입니다.",
        choices: ["60km", "75km", "90km", "120km"],
        answer: 2,
        insight: "60km/h x 1.5h = 90km입니다."
      },
      {
        id: "iq-26",
        skill: "패턴 추론",
        title: "2, 3, 5, 8, 12, 17 다음 숫자는?",
        passage: "증가량이 어떻게 변하는지 보세요.",
        choices: ["21", "22", "23", "24"],
        answer: 2,
        insight: "차이가 1, 2, 3, 4, 5로 증가하므로 다음은 17+6=23입니다."
      },
      {
        id: "iq-27",
        skill: "집합 추론",
        title: "반 학생 20명 중 12명은 축구, 9명은 농구를 좋아합니다. 둘 다 좋아하는 학생이 최소 몇 명일까요?",
        passage: "두 집합의 합이 전체보다 얼마나 넘는지 보세요.",
        choices: ["0명", "1명", "2명", "3명"],
        answer: 1,
        insight: "12+9=21로 전체 20명을 1명 초과하므로 최소 1명은 둘 다 좋아합니다."
      },
      {
        id: "iq-28",
        skill: "암산",
        title: "15% 할인 후 가격이 85,000원이라면 원래 가격은?",
        passage: "할인 후 가격은 원래 가격의 85%입니다.",
        choices: ["95,000원", "100,000원", "105,000원", "110,000원"],
        answer: 1,
        insight: "85,000원이 원래 가격의 85%이므로 원래 가격은 100,000원입니다."
      },
      {
        id: "iq-29",
        skill: "논리 명제",
        title: "어떤 문제는 어렵고, 모든 어려운 문제는 시간이 오래 걸립니다. 확실한 것은?",
        passage: "일부 존재와 전체 조건을 연결하세요.",
        choices: [
          "모든 문제는 어렵다",
          "어떤 문제는 시간이 오래 걸린다",
          "시간이 오래 걸리는 문제는 모두 어렵다",
          "어려운 문제는 없다"
        ],
        answer: 1,
        insight: "어려운 문제가 적어도 하나 있고, 어려운 문제는 모두 시간이 오래 걸리므로 어떤 문제는 시간이 오래 걸립니다."
      },
      {
        id: "iq-30",
        skill: "복합 계산",
        title: "3, 7, 15, 31 다음 숫자는?",
        passage: "이전 수에 2를 곱한 뒤 1을 더하는지 확인해 보세요.",
        choices: ["47", "55", "63", "65"],
        answer: 2,
        insight: "3x2+1=7, 7x2+1=15, 15x2+1=31이므로 다음은 63입니다."
      }
    ]
  },
  eq: {
    label: "EQ 테스트",
    shortLabel: "EQ",
    timeLimit: 35,
    description: "공감, 자기 인식, 감정 조절, 관계 판단 중심",
    questions: [
      {
        id: "eq-1",
        skill: "공감",
        title: "동료가 마감 직전에 작업을 놓쳤다고 말합니다. 가장 가까운 반응은?",
        passage: "감정과 업무 영향을 동시에 다루는 선택지를 고르세요.",
        choices: [
          { text: "일단 이유를 듣고, 영향 범위와 다음 조치를 함께 정한다.", score: 4, domain: "empathy" },
          { text: "내가 전부 처리한 뒤 나중에 이야기한다.", score: 2, domain: "empathy" },
          { text: "책임을 분명히 하라고 말하고 대화를 끝낸다.", score: 1, domain: "empathy" },
          { text: "상황이 불편해서 며칠 동안 답하지 않는다.", score: 0, domain: "empathy" }
        ]
      },
      {
        id: "eq-2",
        skill: "감정 조절",
        title: "회의 중 비판을 들었을 때 얼굴이 뜨거워지는 걸 느낍니다.",
        passage: "즉각 반응보다 회복 속도를 보는 문항입니다.",
        choices: [
          { text: "잠깐 호흡을 고르고 핵심 근거를 다시 물어본다.", score: 4, domain: "regulation" },
          { text: "바로 반박해서 분위기를 주도한다.", score: 1, domain: "regulation" },
          { text: "말을 멈추고 회의 후에만 답한다.", score: 2, domain: "regulation" },
          { text: "상대의 의도를 단정하고 방어적으로 말한다.", score: 0, domain: "regulation" }
        ]
      },
      {
        id: "eq-3",
        skill: "자기 인식",
        title: "요즘 사소한 말에도 예민해졌다는 피드백을 받았습니다.",
        passage: "자신의 상태를 점검하는 방식이 중요합니다.",
        choices: [
          { text: "최근 수면, 압박감, 반복되는 감정을 점검하고 피드백 사례를 묻는다.", score: 4, domain: "awareness" },
          { text: "상대가 예민하게 받아들인 것이라 생각한다.", score: 1, domain: "awareness" },
          { text: "피드백으로 받아들이지만 뭘 바꿀지는 미룬다.", score: 2, domain: "awareness" },
          { text: "내 성격이 원래 그렇다고 정리한다.", score: 0, domain: "awareness" }
        ]
      },
      {
        id: "eq-4",
        skill: "관계 판단",
        title: "친구가 평소보다 말수가 적고 답장이 늦습니다.",
        passage: "확신하기 어려운 상황에서의 사회적 해석을 봅니다.",
        choices: [
          { text: "상대가 여유 있을 때 편히 답할 수 있게 짧게 안부를 묻는다.", score: 4, domain: "social" },
          { text: "나를 피한다고 보고 먼저 거리를 둔다.", score: 1, domain: "social" },
          { text: "계속 메시지를 보내 반응을 확인한다.", score: 0, domain: "social" },
          { text: "며칠 지나도 같으면 가볍게 만날 기회를 만든다.", score: 3, domain: "social" }
        ]
      },
      {
        id: "eq-5",
        skill: "공감",
        title: "상대가 고민을 털어놓는데 해결책을 바로 원하지 않는 듯합니다.",
        passage: "듣기와 해결의 균형을 선택하세요.",
        choices: [
          { text: "먼저 충분히 듣고, 조언이 필요한지 확인한다.", score: 4, domain: "empathy" },
          { text: "빨리 해결책을 제시해 시간을 아낀다.", score: 1, domain: "empathy" },
          { text: "비슷한 내 경험을 길게 이야기한다.", score: 2, domain: "empathy" },
          { text: "감정 이야기는 피하고 주제를 바꾼다.", score: 0, domain: "empathy" }
        ]
      },
      {
        id: "eq-6",
        skill: "감정 조절",
        title: "급한 메시지를 잘못 이해해 짜증 섞인 답을 보냈습니다.",
        passage: "실수 이후 복구 방식에 초점을 둡니다.",
        choices: [
          { text: "오해를 인정하고 짧게 사과한 뒤 필요한 정보를 다시 확인한다.", score: 4, domain: "regulation" },
          { text: "상대도 헷갈리게 썼으니 그냥 넘어간다.", score: 1, domain: "regulation" },
          { text: "민망해서 답장을 늦춘다.", score: 0, domain: "regulation" },
          { text: "다음부터 조심하겠다고 생각하지만 말하지 않는다.", score: 2, domain: "regulation" }
        ]
      },
      {
        id: "eq-7",
        skill: "자기 인식",
        title: "중요한 결정을 앞두고 마음이 계속 바뀝니다.",
        passage: "감정 신호와 판단 기준을 분리하는지를 봅니다.",
        choices: [
          { text: "불안, 기대, 피로를 나누어 적고 결정 기준을 다시 확인한다.", score: 4, domain: "awareness" },
          { text: "마지막에 끌리는 쪽으로 정한다.", score: 1, domain: "awareness" },
          { text: "누군가 대신 정해주길 기다린다.", score: 0, domain: "awareness" },
          { text: "장단점 표를 쓰지만 감정 상태는 보지 않는다.", score: 2, domain: "awareness" }
        ]
      },
      {
        id: "eq-8",
        skill: "관계 판단",
        title: "팀 안에서 두 사람이 서로 불편해하는 기류가 보입니다.",
        passage: "관계를 건드릴 때의 안전한 접근을 고르세요.",
        choices: [
          { text: "각자에게 따로 맥락을 듣고, 함께 다룰 의제가 있는지 확인한다.", score: 4, domain: "social" },
          { text: "둘을 바로 같은 자리로 불러 공개적으로 풀게 한다.", score: 1, domain: "social" },
          { text: "내 일이 아니니 관여하지 않는다.", score: 2, domain: "social" },
          { text: "다른 사람들에게 먼저 상황을 물어본다.", score: 0, domain: "social" }
        ]
      },
      {
        id: "eq-9",
        skill: "공감",
        title: "후배가 발표 전부터 계속 실수할까 봐 걱정된다고 말합니다.",
        passage: "상대의 감정을 낮추면서 준비 행동으로 연결하는 선택지를 보세요.",
        choices: [
          { text: "걱정되는 지점을 묻고, 발표 첫 1분만 같이 점검한다.", score: 4, domain: "empathy" },
          { text: "다들 긴장한다고 말하고 넘긴다.", score: 1, domain: "empathy" },
          { text: "걱정할 시간에 연습하라고 말한다.", score: 0, domain: "empathy" },
          { text: "내 발표 실패 경험을 자세히 들려준다.", score: 2, domain: "empathy" }
        ]
      },
      {
        id: "eq-10",
        skill: "감정 조절",
        title: "집중해서 일하는 중 갑자기 일정이 바뀌었다는 연락을 받았습니다.",
        passage: "불쾌감이 올라오는 순간의 조절 방식을 봅니다.",
        choices: [
          { text: "영향을 확인하고 우선순위를 다시 잡은 뒤 필요한 조정을 요청한다.", score: 4, domain: "regulation" },
          { text: "바뀐 일정에 맞추지만 하루 종일 불만을 품는다.", score: 1, domain: "regulation" },
          { text: "바로 강하게 항의한다.", score: 0, domain: "regulation" },
          { text: "일단 받아들이고 나중에 힘들었다고 말한다.", score: 2, domain: "regulation" }
        ]
      },
      {
        id: "eq-11",
        skill: "자기 인식",
        title: "비슷한 상황에서 반복적으로 미루는 자신을 발견했습니다.",
        passage: "행동 뒤의 감정을 읽는지를 확인합니다.",
        choices: [
          { text: "어떤 감정이 시작을 막는지 기록하고 첫 단계를 작게 줄인다.", score: 4, domain: "awareness" },
          { text: "의지가 약해서 그렇다고 생각한다.", score: 0, domain: "awareness" },
          { text: "마감이 가까워지면 알아서 하게 된다고 둔다.", score: 1, domain: "awareness" },
          { text: "할 일 목록을 다시 쓰지만 원인은 보지 않는다.", score: 2, domain: "awareness" }
        ]
      },
      {
        id: "eq-12",
        skill: "관계 판단",
        title: "상대가 내 제안에 동의하지 않지만 직접 반대하지도 않습니다.",
        passage: "표면적 동의와 실제 우려를 구분하는 문항입니다.",
        choices: [
          { text: "망설이는 지점이 있는지 묻고, 반대 의견을 말해도 괜찮다고 열어 둔다.", score: 4, domain: "social" },
          { text: "침묵을 동의로 보고 그대로 진행한다.", score: 1, domain: "social" },
          { text: "왜 확실히 말하지 않느냐고 압박한다.", score: 0, domain: "social" },
          { text: "나중에 따로 의견을 달라고만 한다.", score: 2, domain: "social" }
        ]
      },
      {
        id: "eq-13",
        skill: "공감",
        title: "친한 사람이 좋은 소식을 전했지만 내 상황은 좋지 않습니다.",
        passage: "내 감정과 상대의 기쁨을 함께 다루는 반응을 고르세요.",
        choices: [
          { text: "내 상태와 별개로 축하를 전하고, 자세한 이야기는 여유 있을 때 듣겠다고 말한다.", score: 4, domain: "empathy" },
          { text: "겉으로만 축하하고 바로 주제를 바꾼다.", score: 1, domain: "empathy" },
          { text: "내가 힘든 상황이라며 상대의 이야기를 멈추게 한다.", score: 0, domain: "empathy" },
          { text: "축하는 하지만 비교되는 마음을 숨긴 채 거리를 둔다.", score: 2, domain: "empathy" }
        ]
      },
      {
        id: "eq-14",
        skill: "감정 조절",
        title: "예상치 못한 지적을 받고 목소리가 커지려는 순간입니다.",
        passage: "반응을 늦추고 대화의 질을 지키는 선택지를 보세요.",
        choices: [
          { text: "잠시 정리할 시간을 요청하고, 지적의 구체적 사례를 확인한다.", score: 4, domain: "regulation" },
          { text: "목소리를 높여 내 입장을 먼저 설명한다.", score: 0, domain: "regulation" },
          { text: "표정은 굳지만 아무 말 없이 넘어간다.", score: 2, domain: "regulation" },
          { text: "상대도 실수한 적이 있다고 맞받아친다.", score: 1, domain: "regulation" }
        ]
      },
      {
        id: "eq-15",
        skill: "자기 인식",
        title: "특정 사람과 대화한 뒤 항상 기운이 빠진다는 걸 알게 됐습니다.",
        passage: "반복되는 감정 패턴을 어떻게 다룰지 묻는 문항입니다.",
        choices: [
          { text: "어떤 말이나 상황에서 에너지가 떨어지는지 기록하고 경계를 정한다.", score: 4, domain: "awareness" },
          { text: "그 사람이 문제라고 단정한다.", score: 1, domain: "awareness" },
          { text: "관계를 유지해야 하니 느끼는 감정을 무시한다.", score: 0, domain: "awareness" },
          { text: "당분간 피하지만 이유는 정리하지 않는다.", score: 2, domain: "awareness" }
        ]
      },
      {
        id: "eq-16",
        skill: "관계 판단",
        title: "회의에서 한 사람이 계속 말을 끊고 있습니다.",
        passage: "분위기를 해치지 않으면서 발언 균형을 회복하는 방법을 고르세요.",
        choices: [
          { text: "잠깐 정리하며 끊긴 사람의 의견을 다시 들을 시간을 만든다.", score: 4, domain: "social" },
          { text: "그 사람에게 바로 무례하다고 지적한다.", score: 1, domain: "social" },
          { text: "회의가 빨리 끝나도록 그냥 둔다.", score: 0, domain: "social" },
          { text: "회의 후 끊긴 사람에게만 괜찮냐고 묻는다.", score: 2, domain: "social" }
        ]
      },
      {
        id: "eq-17",
        skill: "공감",
        title: "상대가 같은 이야기를 여러 번 반복하며 힘들다고 말합니다.",
        passage: "반복이 지루하게 느껴질 때의 공감 방식을 봅니다.",
        choices: [
          { text: "반복되는 핵심 감정을 짚고 지금 가장 필요한 것이 무엇인지 묻는다.", score: 4, domain: "empathy" },
          { text: "이미 들은 이야기라고 말한다.", score: 0, domain: "empathy" },
          { text: "해결책을 다시 한번 정리해 준다.", score: 2, domain: "empathy" },
          { text: "대충 맞장구치며 다른 일을 한다.", score: 1, domain: "empathy" }
        ]
      },
      {
        id: "eq-18",
        skill: "감정 조절",
        title: "중요한 약속에 늦은 사람이 변명부터 합니다.",
        passage: "분노를 표현하되 관계를 망치지 않는 반응을 고르세요.",
        choices: [
          { text: "늦어서 생긴 영향을 말하고, 다음에는 어떻게 맞출지 구체적으로 정한다.", score: 4, domain: "regulation" },
          { text: "일단 화를 내고 사과를 받아낸다.", score: 1, domain: "regulation" },
          { text: "괜찮다고 말하지만 속으로 계속 쌓아 둔다.", score: 2, domain: "regulation" },
          { text: "그 자리에서 약속을 취소한다.", score: 0, domain: "regulation" }
        ]
      },
      {
        id: "eq-19",
        skill: "자기 인식",
        title: "칭찬을 들어도 쉽게 믿기지 않고 불편합니다.",
        passage: "긍정 피드백을 받아들이는 태도를 봅니다.",
        choices: [
          { text: "불편함을 알아차리고, 어떤 부분이 인정받았는지 구체적으로 받아 적는다.", score: 4, domain: "awareness" },
          { text: "그냥 운이 좋았다고 말한다.", score: 1, domain: "awareness" },
          { text: "칭찬이 부담스러워 대화를 끊는다.", score: 0, domain: "awareness" },
          { text: "고맙다고 하지만 마음으로는 넘긴다.", score: 2, domain: "awareness" }
        ]
      },
      {
        id: "eq-20",
        skill: "관계 판단",
        title: "새로운 사람이 팀에 합류했는데 대화에 잘 끼지 못합니다.",
        passage: "소속감을 만드는 작은 행동을 고르세요.",
        choices: [
          { text: "회의 중 관련된 주제에서 자연스럽게 의견을 물어보고 맥락을 보충한다.", score: 4, domain: "social" },
          { text: "적응은 스스로 해야 하니 기다린다.", score: 1, domain: "social" },
          { text: "모두 앞에서 왜 조용한지 묻는다.", score: 0, domain: "social" },
          { text: "따로 친절하게 설명하지만 회의에서는 부르지 않는다.", score: 2, domain: "social" }
        ]
      },
      {
        id: "eq-21",
        skill: "공감",
        title: "상대가 사과했지만 아직 불편한 마음이 남아 있습니다.",
        passage: "용서와 감정 회복을 분리해서 다루는지 봅니다.",
        choices: [
          { text: "사과는 받되 회복에 시간이 필요하다고 솔직히 말한다.", score: 4, domain: "empathy" },
          { text: "괜찮다고 말하고 바로 예전처럼 행동하려 애쓴다.", score: 2, domain: "empathy" },
          { text: "사과가 부족하다고 계속 몰아붙인다.", score: 1, domain: "empathy" },
          { text: "아무 말 없이 연락을 끊는다.", score: 0, domain: "empathy" }
        ]
      },
      {
        id: "eq-22",
        skill: "감정 조절",
        title: "하루 종일 작은 실수가 이어져 스스로에게 짜증이 납니다.",
        passage: "자기비난을 조절하는 방식을 봅니다.",
        choices: [
          { text: "잠깐 쉬고 실수의 공통 원인을 확인한 뒤 하나만 바로잡는다.", score: 4, domain: "regulation" },
          { text: "나는 왜 늘 이러냐고 몰아붙인다.", score: 0, domain: "regulation" },
          { text: "오늘은 망했다고 생각하고 손을 놓는다.", score: 1, domain: "regulation" },
          { text: "기분 전환만 하고 원인은 보지 않는다.", score: 2, domain: "regulation" }
        ]
      },
      {
        id: "eq-23",
        skill: "자기 인식",
        title: "누군가 부탁하면 거절하기 어렵고 나중에 후회합니다.",
        passage: "욕구와 경계선을 인식하는지 확인합니다.",
        choices: [
          { text: "바로 답하지 않고 가능한 범위와 부담 정도를 확인한 뒤 답한다.", score: 4, domain: "awareness" },
          { text: "좋은 사람으로 보이고 싶어 일단 수락한다.", score: 0, domain: "awareness" },
          { text: "거절해야 할 것 같지만 미안해서 애매하게 답한다.", score: 1, domain: "awareness" },
          { text: "나중에 힘들면 취소하면 된다고 생각한다.", score: 2, domain: "awareness" }
        ]
      },
      {
        id: "eq-24",
        skill: "관계 판단",
        title: "대화 중 상대가 농담처럼 불편한 말을 했습니다.",
        passage: "감정과 경계를 차분히 표현하는 선택지를 고르세요.",
        choices: [
          { text: "그 표현은 불편하다고 짧게 말하고 다른 표현을 요청한다.", score: 4, domain: "social" },
          { text: "분위기를 망치기 싫어 웃고 넘긴다.", score: 1, domain: "social" },
          { text: "상대에게 똑같이 불편한 농담을 한다.", score: 0, domain: "social" },
          { text: "그 후로만 조용히 거리를 둔다.", score: 2, domain: "social" }
        ]
      },
      {
        id: "eq-25",
        skill: "공감",
        title: "상대가 울먹이며 말을 멈췄습니다.",
        passage: "침묵을 다루는 방식을 봅니다.",
        choices: [
          { text: "잠시 기다려 주고, 말하지 않아도 괜찮다고 알려 준다.", score: 4, domain: "empathy" },
          { text: "빨리 말해 달라고 재촉한다.", score: 0, domain: "empathy" },
          { text: "분위기가 어색해 농담을 한다.", score: 1, domain: "empathy" },
          { text: "휴지를 건네지만 무슨 말을 해야 할지 몰라 자리를 피한다.", score: 2, domain: "empathy" }
        ]
      },
      {
        id: "eq-26",
        skill: "감정 조절",
        title: "온라인 댓글에서 날 선 반응을 받았습니다.",
        passage: "즉각 대응 충동을 관리하는 선택지를 고르세요.",
        choices: [
          { text: "바로 답하지 않고 핵심 쟁점과 감정 반응을 분리한 뒤 필요할 때만 답한다.", score: 4, domain: "regulation" },
          { text: "즉시 같은 톤으로 반박한다.", score: 0, domain: "regulation" },
          { text: "댓글을 지우고 하루 종일 신경 쓴다.", score: 1, domain: "regulation" },
          { text: "친구에게 보여 주며 화를 푼다.", score: 2, domain: "regulation" }
        ]
      },
      {
        id: "eq-27",
        skill: "자기 인식",
        title: "바쁜 시기마다 주변 사람에게 말이 짧아집니다.",
        passage: "스트레스 신호를 사전에 관리하는지 봅니다.",
        choices: [
          { text: "바쁜 시기의 내 반응 패턴을 인정하고 미리 양해와 소통 방식을 정한다.", score: 4, domain: "awareness" },
          { text: "바쁘면 그럴 수도 있다고 넘긴다.", score: 1, domain: "awareness" },
          { text: "상대가 이해해야 한다고 생각한다.", score: 0, domain: "awareness" },
          { text: "일이 끝난 뒤에만 사과한다.", score: 2, domain: "awareness" }
        ]
      },
      {
        id: "eq-28",
        skill: "관계 판단",
        title: "두 사람이 같은 사건을 전혀 다르게 기억하고 있습니다.",
        passage: "누가 맞는지보다 대화 구조를 만드는 방식이 중요합니다.",
        choices: [
          { text: "각자의 기억을 사실, 해석, 감정으로 나누어 확인한다.", score: 4, domain: "social" },
          { text: "더 확신 있게 말하는 사람 편을 든다.", score: 0, domain: "social" },
          { text: "둘 다 예민하다고 말한다.", score: 1, domain: "social" },
          { text: "서로 사과하라고만 한다.", score: 2, domain: "social" }
        ]
      },
      {
        id: "eq-29",
        skill: "공감",
        title: "상대가 기뻐해야 할 일인데도 무덤덤해 보입니다.",
        passage: "감정을 단정하지 않는 반응을 고르세요.",
        choices: [
          { text: "지금 어떤 마음인지 묻고, 꼭 기뻐하지 않아도 된다고 열어 둔다.", score: 4, domain: "empathy" },
          { text: "왜 더 좋아하지 않느냐고 묻는다.", score: 0, domain: "empathy" },
          { text: "기분이 좋아질 만한 말을 계속한다.", score: 1, domain: "empathy" },
          { text: "반응이 없으니 더 이야기하지 않는다.", score: 2, domain: "empathy" }
        ]
      },
      {
        id: "eq-30",
        skill: "감정 조절",
        title: "중요한 대화 직전에 긴장이 올라와 말이 빨라집니다.",
        passage: "신체 신호를 조절하고 의도를 유지하는 방식을 봅니다.",
        choices: [
          { text: "말할 핵심을 세 문장으로 줄이고 호흡을 맞춘 뒤 시작한다.", score: 4, domain: "regulation" },
          { text: "긴장한 티를 숨기려고 더 빠르게 말한다.", score: 0, domain: "regulation" },
          { text: "상대가 이해하겠지 생각하고 그대로 말한다.", score: 1, domain: "regulation" },
          { text: "대화를 미루고 싶다고만 생각한다.", score: 2, domain: "regulation" }
        ]
      }
    ]
  }
};

const domainLabels_ko = {
  empathy: "공감",
  regulation: "조절",
  awareness: "인식",
  social: "관계"
};

const taxonomy_ko = {
  ageGroups: [
    { id: "middle", label: "중학생" },
    { id: "high", label: "고등학생" },
    { id: "college", label: "대학생" },
    { id: "adult", label: "성인" }
  ],
  fields: [
    { id: "general", label: "공통/진로" },
    { id: "engineering", label: "공학" },
    { id: "business", label: "경영경제" },
    { id: "humanities", label: "인문사회" },
    { id: "health", label: "보건의료" },
    { id: "arts", label: "예체능" }
  ],
  majors: [
    {
      id: "common",
      field: "general",
      label: "공통 사고/관계",
      subjects: [
        { id: "common", label: "공통 과목" },
        { id: "career", label: "진로 탐색" },
        { id: "learning", label: "학습 전략" }
      ]
    },
    {
      id: "computer-science",
      field: "engineering",
      label: "컴퓨터공학",
      subjects: [
        { id: "data-structures", label: "자료구조" },
        { id: "algorithms", label: "알고리즘" },
        { id: "databases", label: "데이터베이스" }
      ]
    },
    {
      id: "mechanical-engineering",
      field: "engineering",
      label: "기계공학",
      subjects: [
        { id: "mechanics", label: "역학" },
        { id: "design", label: "기계설계" },
        { id: "thermal-fluids", label: "열유체" }
      ]
    },
    {
      id: "business-admin",
      field: "business",
      label: "경영학",
      subjects: [
        { id: "organizational-behavior", label: "조직행동" },
        { id: "marketing", label: "마케팅" },
        { id: "finance", label: "재무관리" }
      ]
    },
    {
      id: "economics",
      field: "business",
      label: "경제학",
      subjects: [
        { id: "microeconomics", label: "미시경제" },
        { id: "macroeconomics", label: "거시경제" },
        { id: "statistics", label: "경제통계" }
      ]
    },
    {
      id: "psychology",
      field: "humanities",
      label: "심리학",
      subjects: [
        { id: "cognitive-psychology", label: "인지심리" },
        { id: "counseling", label: "상담심리" },
        { id: "social-psychology", label: "사회심리" }
      ]
    },
    {
      id: "education",
      field: "humanities",
      label: "교육학",
      subjects: [
        { id: "educational-psychology", label: "교육심리" },
        { id: "teaching-methods", label: "교수법" },
        { id: "assessment", label: "교육평가" }
      ]
    },
    {
      id: "nursing",
      field: "health",
      label: "간호학",
      subjects: [
        { id: "clinical-judgment", label: "임상판단" },
        { id: "communication", label: "환자 의사소통" },
        { id: "health-ethics", label: "보건윤리" }
      ]
    },
    {
      id: "public-health",
      field: "health",
      label: "보건학",
      subjects: [
        { id: "epidemiology", label: "역학" },
        { id: "health-promotion", label: "건강증진" },
        { id: "health-policy", label: "보건정책" }
      ]
    },
    {
      id: "design-major",
      field: "arts",
      label: "디자인",
      subjects: [
        { id: "ux-design", label: "UX 디자인" },
        { id: "visual-form", label: "색채/조형" },
        { id: "design-research", label: "디자인 리서치" }
      ]
    },
    {
      id: "music",
      field: "arts",
      label: "음악",
      subjects: [
        { id: "music-theory", label: "음악이론" },
        { id: "performance", label: "공연협업" },
        { id: "composition", label: "창작" }
      ]
    }
  ]
};

