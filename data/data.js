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
      },
      {
        id: "iq-31",
        skill: "도형 색상 패턴",
        title: "다음 도형 수열의 빈칸(?)에 올 도형으로 가장 알맞은 것은?\n\n[빨간색 세모] ➡️ [파란색 네모] ➡️ [빨간색 오각형] ➡️ [파란색 육각형] ➡️ [ ? ]",
        passage: "색상(빨강/파랑)이 교대로 반복되는 규칙과 도형의 변의 개수가 하나씩 증가하는 규칙을 동시에 고려해 보세요.",
        choices: ["빨간색 칠각형 (Red Heptagon)", "파란색 칠각형 (Blue Heptagon)", "빨간색 팔각형 (Red Octagon)", "초록색 칠각형 (Green Heptagon)"],
        answer: 0,
        insight: "색상은 빨강과 파랑이 교대로 반복(빨➡️파➡️빨➡️파➡️빨)되고, 변의 수는 3, 4, 5, 6 다음인 7(칠각형)이 되어야 하므로 정답은 '빨간색 칠각형'입니다."
      },
      {
        id: "iq-32",
        skill: "도형 공간 추론",
        title: "도형 A가 일정한 규칙에 따라 도형 B로 변환되었습니다. 동일한 규칙을 적용했을 때 도형 C는 어떤 도형(D)으로 변환될까요?\n\n[도형 A: 위쪽 절반이 검은색인 원] ➡️ [도형 B: 아래쪽 절반이 검은색인 원]\n[도형 C: 왼쪽 절반이 빨간색인 정사각형] ➡️ [도형 D: ?]",
        passage: "도형 A가 B로 바뀔 때 일어난 공간 변화(상하 반전 또는 180도 회전)를 정사각형 C에 대입해 보세요.",
        choices: ["오른쪽 절반이 빨간색인 정사각형", "왼쪽 절반이 빨간색인 정사각형", "아래쪽 절반이 빨간색인 정사각형", "오른쪽 절반이 파란색인 정사각형"],
        answer: 0,
        insight: "도형 A에서 B로의 변화는 180도 회전(또는 상하 반전)입니다. 왼쪽 절반이 빨간색인 정사각형 C를 180도 회전시키면 빨간색 영역이 오른쪽 절반으로 이동하므로 정답은 '오른쪽 절반이 빨간색인 정사각형'입니다."
      },
        {
          id: "iq-33",
          skill: "수리 논리",
          title: "다음 수열의 규칙은? 2, 5, 10, 17, 26, ?",
          passage: "각 항은 이전 항에 순차적으로 3,5,7,9를 더한 값이다.",
          choices: ["37", "38", "39", "40"],
          answer: 0,
          insight: "2+3=5, 5+5=10, 10+7=17, 17+9=26, 다음은 26+11=37."
        },
        {
          id: "iq-34",
          skill: "패턴 추리",
          title: "다음 도형 시퀀스 중 ?에 들어갈 것은?\n\n[□] → [△] → [○] → [?]",
          passage: "도형이 사각형, 삼각형, 원 순으로 변하고, 다음은 사각형이 반복된다.",
          choices: ["□", "△", "○", "✕"],
          answer: 0,
          insight: "사각형·삼각형·원이 반복되므로 다시 사각형(□)이 옵니다."
        },
        {
          id: "iq-35",
          skill: "수리 사고",
          title: "두 수의 평균이 12이고, 하나는 8이면 다른 수는?",
          passage: "평균 = (a+b)/2",
          choices: ["16", "20", "24", "28"],
          answer: 0,
          insight: "(8 + x)/2 = 12 → 8 + x = 24 → x = 16."
        },
        {
          id: "iq-36",
          skill: "논리 퍼즐",
          title: "모든 고양이는 털이 있다. 베베는 고양이가 아니다. 베베에게 털이 있는지 이 전제만으로 알 수 있는가?",
          passage: "베베는 '고양이' 집합에 속하지 않으므로, 고양이에 대한 규칙만으로는 판단할 수 없습니다.",
          choices: ["반드시 털이 있다", "반드시 털이 없다", "판단할 수 없다", "털이 없음이 확실하다"],
          answer: 2,
          insight: "고양이에 대한 명제는 베베에게 적용되지 않으므로 털 유무는 '판단할 수 없다'가 맞습니다."
        },
        {
          id: "iq-37",
          skill: "수학 계산",
          title: "5000원짜리 물건을 15% 할인하면 얼마가 남나요?",
          passage: "할인 후 가격 = 원가 × 0.85",
          choices: ["4250원", "4255원", "4300원", "4325원"],
          answer: 0,
          insight: "5000 × 0.85 = 4250원."
        },
        {
          id: "iq-38",
          skill: "공간 추론",
          title: "서로 만나지 않는 세 직선을 모두 포함하려면 최소 몇 개의 평면이 필요할까?",
          passage: "한 평면에 평행한 직선은 최대 2개까지 담을 수 있다고 생각해 보세요.",
          choices: ["1", "2", "3", "4"],
          answer: 2,
          insight: "서로 꼬여 있는(만나지 않는) 세 직선은 한 평면에 함께 놓을 수 없으므로 최소 3개의 평면이 필요합니다."
        },
        {
          id: "iq-39",
          skill: "자료 해석",
          title: "한 표에 4개의 열이 있고, 각 열에 6개의 항목이 있다. 총 몇 개의 셀인가?",
          passage: "셀 수 = 열 × 항목 수",
          choices: ["20", "24", "30", "36"],
          answer: 1,
          insight: "4 × 6 = 24."
        },
        {
          id: "iq-40",
          skill: "비교 사고",
          title: "A는 B보다 3배 빠르고, B는 C보다 2배 빠르면, A는 C보다 몇 배 빠른가?",
          passage: "곱셈 관계 적용.",
          choices: ["5배", "6배", "7배", "8배"],
          answer: 1,
          insight: "A = 3B, B = 2C → A = 3×2C = 6C."
        },
        {
          id: "iq-41",
          skill: "수리 논리",
          title: "다음 중 소수는?",
          passage: "소수는 1과 자기 자신만 약수인 수.",
          choices: ["21", "29", "35", "49"],
          answer: 1,
          insight: "29는 소수이며, 나머지는 합성수이다."
        },
        {
          id: "iq-42",
          skill: "패턴 인식",
          title: "AB, BC, CD, ? 다음은?",
          passage: "문자쌍이 한 글자씩 이동한다.",
          choices: ["DE", "EF", "FG", "GH"],
          answer: 0,
          insight: "AB→BC→CD처럼 두 글자가 함께 한 칸씩 밀리므로 DE가 정답입니다."
        },
        {
          id: "iq-43",
          skill: "수학 계산",
          title: "12의 3제곱은?",
          passage: "거듭제곱 연산.",
          choices: ["1728", "144", "1440", "1720"],
          answer: 0,
          insight: "12³ = 12×12×12 = 1728."
        },
        {
          id: "iq-44",
          skill: "논리 추리",
          title: "모든 참새는 날 수 있다. 토끼는 참새가 아니다. 토끼가 날 수 있는지 이 전제만으로 알 수 있는가?",
          passage: "토끼는 '참새' 집합에 속하지 않으므로, 참새에 대한 규칙만으로는 판단할 수 없습니다.",
          choices: ["반드시 날 수 있다", "반드시 날 수 없다", "판단할 수 없다", "참새이므로 날 수 있다"],
          answer: 2,
          insight: "참새에 대한 명제는 토끼에게 적용되지 않으므로 '판단할 수 없다'가 맞습니다."
        },
        {
          id: "iq-45",
          skill: "수리 사고",
          title: "5와 20의 최소공배수는?",
          passage: "LCM은 두 수의 곱을 GCD로 나눈 값.",
          choices: ["20", "25", "100", "200"],
          answer: 0,
          insight: "5와 20의 최소공배수는 20."
        },
        {
          id: "iq-46",
          skill: "패턴 추리",
          title: "다음 색상 순서는? 빨강 → 파랑 → 초록 → ?",
          passage: "색상 순환이 R, B, G, R ...",
          choices: ["빨강", "파랑", "초록", "노랑"],
          answer: 0,
          insight: "순환이 빨강으로 돌아온다."
        },
        {
          id: "iq-47",
          skill: "수리 논리",
          title: "다음 중 3의 배수가 아닌 것은?",
          passage: "3의 배수는 3으로 나누어 떨어진다.",
          choices: ["9", "12", "15", "14"],
          answer: 3,
          insight: "14는 3으로 나누어 떨어지지 않는다."
        },
        {
          id: "iq-48",
          skill: "수학 계산",
          title: "100을 8로 나누면 소수점 둘째 자리까지는?",
          passage: "나눗셈을 수행한다.",
          choices: ["12.50", "12.51", "12.52", "12.53"],
          answer: 0,
          insight: "100 ÷ 8 = 12.5, 소수점 둘째 자리까지는 12.50."
        },
        {
          id: "iq-49",
          skill: "논리 퍼즐",
          title: "A는 B보다 크고, B는 C보다 크다. 그런데 A가 C보다 작다고 하면 어떤가?",
          passage: "크기 관계를 한 줄로 이어서 생각해 보세요.",
          choices: ["모순이다", "모순이 아니다", "불명확하다", "조건이 부족하다"],
          answer: 0,
          insight: "A>B이고 B>C이면 A>C여야 하는데 A<C이면 서로 맞지 않으므로 모순입니다."
        },
        {
          id: "iq-50",
          skill: "자료 해석",
          title: "표에 5행 3열이 있다. 총 셀 수는?",
          passage: "행 × 열.",
          choices: ["10", "15", "20", "25"],
          answer: 1,
          insight: "5 × 3 = 15."
        },
        {
          id: "iq-51",
          skill: "수리 사고",
          title: "3의 제곱은?",
          passage: "거듭제곱 연산.",
          choices: ["6", "9", "12", "15"],
          answer: 1,
          insight: "3² = 9."
        },
        {
          id: "iq-52",
          skill: "패턴 인식",
          title: "다음 숫자 시퀀스: 1, 4, 9, 16, ?",
          passage: "제곱수 규칙.",
          choices: ["20", "25", "30", "36"],
          answer: 1,
          insight: "다음 제곱수는 5² = 25."
        },
        {
          id: "iq-53",
          skill: "수학 계산",
          title: "1/2 + 1/3 = ?",
          passage: "분수 덧셈.",
          choices: ["5/6", "2/5", "3/5", "7/6"],
          answer: 0,
          insight: "1/2 + 1/3 = 3/6 + 2/6 = 5/6."
        },
        {
          id: "iq-54",
          skill: "논리 추리",
          title: "모든 A는 B다. 모든 B는 C다. 따라서 모든 A는 C다?",
          passage: "삼단 논법.",
          choices: ["예", "아니오", "불명확", "조건에 따라"],
          answer: 0,
          insight: "전제들을 연쇄하면 결론이 성립한다."
        },
        {
          id: "iq-55",
          skill: "수리 논리",
          title: "짝수와 홀수 중 짝수가 아닌 것은?",
          passage: "정의에 따라.",
          choices: ["2", "4", "7", "10"],
          answer: 2,
          insight: "7은 홀수이다."
        },
        {
          id: "iq-56",
          skill: "패턴 인식",
          title: "다음 알파벳 순서는? D, F, H, J, ?",
          passage: "알파벳 사이 간격이 일정한지 보세요.",
          choices: ["K", "L", "M", "N"],
          answer: 1,
          insight: "D(4), F(6), H(8), J(10)은 2칸씩 건너뛰므로 다음은 L(12)입니다."
        },
        {
          id: "iq-57",
          skill: "수학 계산",
          title: "9 × 8 = ?",
          passage: "곱셈.",
          choices: ["71", "72", "73", "74"],
          answer: 1,
          insight: "9 × 8 = 72."
        },
        {
          id: "iq-58",
          skill: "논리 퍼즐",
          title: "비가 오면 우산을 쓴다. 오늘 우산을 쓰지 않았다. 비가 왔는지 논리만으로 확실히 말할 수 있는가?",
          passage: "실생활에서는 우산을 안 써도 비가 올 수 있습니다. 형식 논리와 구분해 보세요.",
          choices: ["반드시 비가 왔다", "반드시 비가 오지 않았다", "판단할 수 없다", "우산이 없어서 비가 왔다"],
          answer: 2,
          insight: "'비→우산'만으로는 '우산 안 씀→비 안 옴'을 확정할 수 없습니다. (우산 없이 비가 올 수도 있음)"
        },
        {
          id: "iq-59",
          skill: "수리 사고",
          title: "20% 증가 후 다시 20% 감소하면 원래와 같은가?",
          passage: "비율 변환.",
          choices: ["예", "아니오", "불명확", "조건에 따라"],
          answer: 1,
          insight: "증가 후 감소하면 원래보다 작아진다."
        },
        {
          id: "iq-60",
          skill: "수리 논리",
          title: "다음 중 2의 배수가 아닌 것은?",
          passage: "2의 배수 조건.",
          choices: ["4", "6", "8", "9"],
          answer: 3,
          insight: "9는 2의 배수가 아니다."
        },
        {
          id: "iq-61",
          skill: "수열",
          title: "다음 수열에서 빈칸에 들어갈 수는? 2, 4, 8, 16, ?",
          passage: "이전 항의 2배 규칙을 확인해 보세요.",
          choices: ["20", "24", "32", "40"],
          answer: 2,
          insight: "16의 2배이므로 다음 수는 32입니다."
        },
        {
          id: "iq-62",
          skill: "패턴 인식",
          title: "다음 도형 수열의 빈칸(?)에 들어갈 것은?\n\n◼ ➡️ ◻ ➡️ ◼ ➡️ ?",
          passage: "사각형과 원이 번갈아 나타납니다.",
          choices: ["◻", "◼", "△", "○"],
          answer: 0,
          insight: "사각형 다음에는 원(◻)이 와야 합니다."
        },
        {
          id: "iq-63",
          skill: "언어 유추",
          title: "손 : 장갑 = 발 : ?",
          passage: "발과 짝을 이루는 의류·용품을 고르세요.",
          choices: ["양말", "신발", "부츠", "슬리퍼"],
          answer: 0,
          insight: "손에 장갑을 끼우듯 발에는 양말이 대응합니다."
        },
        {
          id: "iq-64",
          skill: "공간 추론",
          title: "모든 면을 칠한 정육면체를 27개의 작은 정육면체로 자를 때, 정확히 두 면만 칠해진 조각은 몇 개일까요?",
          passage: "모서리에 위치한 작은 큐브를 생각해 보세요.",
          choices: ["6개", "12개", "8개", "0개"],
          answer: 1,
          insight: "모서리에 있는 12개의 작은 큐브만 두 면이 칠해집니다."
        },
        {
          id: "iq-65",
          skill: "수리 논리",
          title: "다음 수열의 빈칸은? 7, 10, 14, 19, ?",
          passage: "차이가 3, 4, 5처럼 1씩 커집니다.",
          choices: ["24", "25", "26", "27"],
          answer: 1,
          insight: "다음 차이는 6이므로 19+6=25입니다."
        },
        {
          id: "iq-66",
          skill: "논리 추리",
          title: "모든 장미는 꽃이다. 어떤 꽃은 빨리 시든다. 따라서 어떤 장미는 빨리 시든다?",
          passage: "논리적으로 반드시 성립하는지 판단하세요.",
          choices: ["참", "거짓", "판단할 수 없음", "둘 다"],
          answer: 2,
          insight: "주어진 전제만으로는 장미가 빨리 시든다고 결론 내릴 수 없습니다."
        },
        {
          id: "iq-67",
          skill: "패턴 인식",
          title: "다음 글자 수열의 빈칸은? A, C, F, J, ?",
          passage: "알파벳 위치의 차이를 계산해 보세요.",
          choices: ["O", "M", "N", "P"],
          answer: 0,
          insight: "차이가 +2, +3, +4이므로 다음은 +5, J(10)+5=15(O)입니다."
        },
        {
          id: "iq-68",
          skill: "언어 유추",
          title: "펜 : 쓰다 = 가위 : ?",
          passage: "도구와 그 용도의 관계를 찾으세요.",
          choices: ["자르다", "그리다", "지우다", "재다"],
          answer: 0,
          insight: "가위는 자르는 데 쓰입니다."
        },
        {
          id: "iq-69",
          skill: "공간 추론",
          title: "문자 'L'을 시계 방향으로 90° 회전하면 어떤 모양이 될까요?",
          passage: "회전 방향을 머릿속으로 그려 보세요.",
          choices: ["┘", "└", "─", "|"],
          answer: 0,
          insight: "시계 방향 90° 회전하면 L은 ┘ 모양이 됩니다."
        },
        {
          id: "iq-70",
          skill: "수리 사고",
          title: "x + 2 = 7일 때 x는?",
          passage: "간단한 일차방정식입니다.",
          choices: ["4", "5", "6", "7"],
          answer: 1,
          insight: "x = 7 - 2 = 5입니다."
        },
        {
          id: "iq-71",
          skill: "언어 유추",
          title: "새 : 하늘 = 물고기 : ?",
          passage: "서식 환경의 대응 관계입니다.",
          choices: ["물", "공기", "땅", "흙"],
          answer: 0,
          insight: "물고기는 물에서 삽니다."
        },
        {
          id: "iq-72",
          skill: "패턴 인식",
          title: "다음 중 다른 하나는? 2, 3, 5, 9, 11",
          passage: "소수·합성수 규칙을 살펴보세요.",
          choices: ["2", "3", "5", "9"],
          answer: 3,
          insight: "2, 3, 5는 소수이고 9만 합성수입니다."
        },
        {
          id: "iq-73",
          skill: "언어 유추",
          title: "개 : 짖다 = 고양이 : ?",
          passage: "동물과 대표적인 소리를 연결하세요.",
          choices: ["야옹", "골골", "쉿", "으르렁"],
          answer: 0,
          insight: "고양이의 대표적인 소리는 야옹입니다."
        },
        {
          id: "iq-74",
          skill: "수리 논리",
          title: "세 자리 수가 각 자리 숫자의 합으로 3으로 나누어떨어지면 그 수도 3으로 나누어떨어집니다. 123은 3으로 나누어떨어질까요?",
          passage: "자릿수 합을 계산하세요.",
          choices: ["예", "아니오"],
          answer: 0,
          insight: "1+2+3=6이고 6은 3으로 나누어떨어집니다."
        },
        {
          id: "iq-75",
          skill: "수학 계산",
          title: "200의 15%는?",
          passage: "백분율 계산을 적용하세요.",
          choices: ["20", "30", "40", "50"],
          answer: 1,
          insight: "200 × 0.15 = 30입니다."
        },
        {
          id: "iq-76",
          skill: "논리 추리",
          title: "모든 A는 B이고, 일부 B는 C이다. 따라서 일부 A는 C이다고 말할 수 있을까요?",
          passage: "집합의 포함 관계를 생각해 보세요.",
          choices: ["예", "아니오", "판단할 수 없음"],
          answer: 2,
          insight: "A와 C의 교집합이 반드시 있다고 보장할 수 없습니다."
        },
        {
          id: "iq-77",
          skill: "패턴 인식",
          title: "다음 글자는? M, N, P, Q, S, ?",
          passage: "건너뛰는 간격 패턴을 찾으세요.",
          choices: ["T", "U", "V", "W"],
          answer: 1,
          insight: "M-N 이후 한 글자씩 건너뛰는 패턴으로 다음은 U입니다."
        },
        {
          id: "iq-78",
          skill: "언어 유추",
          title: "차가움 : 뜨거움 = 밤 : ?",
          passage: "반대 관계를 찾으세요.",
          choices: ["낮", "새벽", "일출", "저녁"],
          answer: 0,
          insight: "밤의 반대는 낮입니다."
        },
        {
          id: "iq-79",
          skill: "공간 추론",
          title: "직사각형을 180° 회전하면 방향이 어떻게 바뀔까요?",
          passage: "회전 결과를 상상해 보세요.",
          choices: ["모양이 같아 보인다", "가로·세로가 바뀐다", "위아래가 뒤집힌다", "좌우가 뒤집힌다"],
          answer: 2,
          insight: "180° 회전은 위아래가 뒤집히지만 직사각형 모양은 동일해 보입니다."
        },
        {
          id: "iq-80",
          skill: "수학 계산",
          title: "81의 제곱근은?",
          passage: "기본 제곱근 계산입니다.",
          choices: ["7", "8", "9", "10"],
          answer: 2,
          insight: "√81 = 9입니다."
        },
        {
          id: "iq-81",
          skill: "요일 계산",
          title: "오늘이 월요일이면 45일 뒤는 무슨 요일일까요?",
          passage: "7로 나눈 나머지를 이용하세요.",
          choices: ["수요일", "목요일", "금요일", "토요일"],
          answer: 1,
          insight: "45÷7의 나머지는 3이므로 월요일에서 3일 뒤인 목요일입니다."
        },
        {
          id: "iq-82",
          skill: "패턴 인식",
          title: "다음 수는? 5, 10, 20, 40, ?",
          passage: "매 항이 2배가 됩니다.",
          choices: ["70", "80", "90", "100"],
          answer: 1,
          insight: "40의 2배이므로 다음은 80입니다."
        },
        {
          id: "iq-83",
          skill: "언어 유추",
          title: "바다 : 물고기 = 숲 : ?",
          passage: "환경과 그 안에서 사는 생물의 대응 관계입니다.",
          choices: ["사슴", "나무", "바위", "구름"],
          answer: 0,
          insight: "바다에 물고기가 사는 것처럼, 숲에는 사슴 같은 동물이 사는 환경으로 짝을 이룹니다."
        },
        {
          id: "iq-84",
          skill: "공간 추론",
          title: "삼각형의 세 각이 30°, 60°, ?일 때 빈칸은?",
          passage: "삼각형 내각의 합은 180°입니다.",
          choices: ["90°", "100°", "110°", "120°"],
          answer: 0,
          insight: "180 - 30 - 60 = 90°입니다."
        },
        {
          id: "iq-85",
          skill: "수리 사고",
          title: "기차가 2시간에 120km를 달렸을 때 평균 속도는?",
          passage: "속도 = 거리 ÷ 시간.",
          choices: ["50km/h", "60km/h", "70km/h", "80km/h"],
          answer: 1,
          insight: "120 ÷ 2 = 60km/h입니다."
        },
        {
          id: "iq-86",
          skill: "논리 추리",
          title: "모든 원은 둥글다. 어떤 둥근 물체는 빨갛다. 따라서 어떤 원은 빨갛다?",
          passage: "삼단논법의 타당성을 판단하세요.",
          choices: ["참", "거짓", "판단할 수 없음"],
          answer: 2,
          insight: "원이 반드시 빨간 둥근 물체 집합에 포함된다고 말할 수 없습니다."
        },
        {
          id: "iq-87",
          skill: "패턴 인식",
          title: "다음 도형 수열의 빈칸은? ◯, △, ◯, △, ◯, ?",
          passage: "도형이 번갈아 반복됩니다.",
          choices: ["△", "◯", "□", "★"],
          answer: 0,
          insight: "원 다음에는 삼각형(△)이 와야 합니다."
        },
        {
          id: "iq-88",
          skill: "언어 유추",
          title: "뜨거움 : 차가움 = 위 : ?",
          passage: "반대 관계를 찾으세요.",
          choices: ["아래", "왼쪽", "오른쪽", "앞"],
          answer: 0,
          insight: "위의 반대는 아래입니다."
        },
      {
        id: "iq-major-1",
        category: "major",
        targetGroups: ["engineering"],
        skill: "공학 추론",
        title: "[공대 전용] 톱니바퀴 A(톱니 10개)가 시계 방향으로 3바퀴 돌면, 맞물린 톱니바퀴 B(톱니 15개)는 어떻게 돌까요?",
        passage: "맞물린 톱니바퀴는 반대로 돌고, 회전수는 톱니 수에 반비례합니다.",
        choices: ["시계 2바퀴", "반시계 2바퀴", "시계 4.5바퀴", "반시계 4.5바퀴"],
        answer: 1,
        insight: "A가 총 30개의 톱니를 밀어내므로 B는 30/15 = 2바퀴를 반대(반시계)로 돕니다."
      },
      {
        id: "iq-job-1",
        category: "job",
        targetGroups: ["it"],
        skill: "알고리즘 사고",
        title: "[IT/개발] 정렬되지 않은 100개의 데이터 중 가장 큰 값을 찾기 위해 최소 몇 번의 비교가 필요합니까?",
        passage: "첫 번째 값을 최댓값으로 두고 나머지 99개와 차례로 비교합니다.",
        choices: ["99번", "100번", "50번", "O(log N)번"],
        answer: 0,
        insight: "순차 탐색 시 나머지 99개와 모두 비교해야 합니다."
      },
      {
        id: "iq-job-design-1",
        category: "job",
        targetGroups: ["design"],
        skill: "도형 패턴 매트릭스",
        title: "[디자인/기획] 다음 3x3 격자판의 빈칸(?)에 들어갈 도형은?\n\n[ ■ ▲ ● ]\n[ ▲ ● ■ ]\n[ ● ■ ? ]",
        passage: "가로줄과 세로줄에 각각 다른 도형이 한 번씩만 들어가는 규칙을 살펴보세요.",
        choices: ["● (원)", "▲ (삼각형)", "■ (정사각형)", "✦ (별)"],
        answer: 1,
        insight: "각 행과 열에 원(●), 삼각형(▲), 사각형(■)이 한 번씩만 등장해야 하므로 빈칸에 들어갈 도형은 삼각형(▲)입니다."
      },
      {
        id: "iq-job-design-2",
        category: "job",
        targetGroups: ["design"],
        skill: "공간 지각능력",
        title: "[디자인/기획] 정면이 '■'이고 우측면이 '●'인 주사위가 있습니다. 이 주사위를 정면 방향을 축으로 시계 방향으로 90도 회전시켰을 때, 원래 우측면에 있던 '●'은 어느 위치로 이동할까요?",
        passage: "주사위를 정면을 바라본 상태에서 시계 방향으로 돌려보며 우측면의 궤적을 3차원으로 상상해 보세요.",
        choices: ["윗면 (Top)", "아랫면 (Bottom)", "좌측면 (Left)", "뒷면 (Back)"],
        answer: 1,
        insight: "정면 축을 기준으로 시계 방향으로 90도 회전하면 우측면(●)은 아랫면(Bottom)으로 이동합니다."
      },
      {
        id: "iq-elementary-1",
        category: "age",
        targetGroups: ["elementary"],
        difficulty: 1,
        skill: "수열 규칙",
        title: "[초등] 1, 3, 5, 7, 9 다음에 올 알맞은 숫자는 무엇일까요?",
        passage: "숫자가 2씩 커지는 규칙을 생각해 보세요.",
        choices: ["10", "11", "12", "13"],
        answer: 1,
        insight: "1부터 시작해서 매번 2씩 더해지는 홀수 수열이므로 9 다음은 11입니다."
      },
      {
        id: "iq-elementary-2",
        category: "age",
        targetGroups: ["elementary"],
        difficulty: 1,
        skill: "분류 추론",
        title: "[초등] 호랑이는 동물입니다. 장미는 식물입니다. 그렇다면 수박은 무엇일까요?",
        passage: "수박이 식물과 동물 중 어디에 속하는지 생각해 보세요.",
        choices: ["동물", "식물", "광물", "바람"],
        answer: 1,
        insight: "수박은 밭에서 자라나는 초록색 줄무늬 열매를 맺는 식물입니다."
      },
      {
        id: "iq-elementary-3",
        category: "age",
        targetGroups: ["elementary"],
        difficulty: 1,
        skill: "비교 추론",
        title: "[초등] 형은 동생보다 키가 큽니다. 동생은 언니보다 키가 큽니다. 세 명 중 키가 가장 큰 사람은 누구일까요?",
        passage: "형 > 동생 > 언니 순서로 크기를 나열해 볼 수 있습니다.",
        choices: ["형", "동생", "언니", "모두 같다"],
        answer: 0,
        insight: "키의 크기가 형 > 동생 > 언니 순서이므로 형이 가장 키가 큽니다."
      },
      {
        id: "iq-mbti-nt-1",
        category: "mbti",
        targetGroups: ["nt"],
        difficulty: 4,
        skill: "논리 암호",
        title: "A(기사-참말만 함), B(거짓말쟁이-거짓말만 함), C(스파이-참/거짓 모두 가능) 세 사람이 있습니다. A: '나는 스파이다', B: 'A는 참말을 한다', C: '나는 스파이가 아니다'라고 진술했습니다. 진짜 스파이는 누구일까요?",
        passage: "만약 A가 스파이라면 모순이 발생하는지 귀류법으로 접근해 보세요.",
        choices: ["A", "B", "C", "알 수 없다"],
        answer: 1,
        insight: "B가 스파이인 경우만 모순이 생기지 않습니다. A는 거짓말쟁이(거짓말), B는 스파이(거짓말), C는 기사(참말)인 유일한 해가 도출됩니다."
      },
      {
        id: "iq-mbti-nf-1",
        category: "mbti",
        targetGroups: ["nf"],
        difficulty: 3,
        skill: "맥락 연역",
        title: "다음 네 문장 중 항상 참인 결론은 무엇일까요?\n- 민우가 기쁘면 지수도 기쁘다.\n- 지수가 기쁘면 태오도 기쁘다.\n- 태오가 기쁘지 않으면 수빈이도 기쁘지 않다.\n- 현재 수빈이는 기쁜 상태이다.",
        passage: "명제의 대우 관계를 이용해 '수빈이가 기쁘다'에서 거꾸로 연쇄 추론해 보세요.",
        choices: ["민우는 기쁘지 않다", "지수와 태오 모두 기쁜 상태이다", "민우의 기쁨 여부는 알 수 없다", "지수만 기쁘고 태오는 기쁘지 않다"],
        answer: 1,
        insight: "수빈이가 기쁘므로 태오도 기쁩니다(대우). 태오가 기쁘므로 지수도 기쁩니다. 따라서 지수와 태오 모두 기쁨이 참입니다."
      },
      {
        id: "iq-mbti-sj-1",
        category: "mbti",
        targetGroups: ["sj"],
        difficulty: 3,
        skill: "품질 검수",
        title: "규칙: 'A 등급 제품은 항상 짝수 스티커가 붙는다.' 이 규칙이 지켜졌는지 확인하기 위해 반드시 뒤집어 확인해야 하는 두 카드는 무엇일까요?\n(카드: 1번-[A 등급], 2번-[홀수 스티커], 3번-[B 등급], 4번-[짝수 스티커])",
        passage: "명제 P -> Q가 참인지 확인하려면 P(A등급)와 Not-Q(홀수)를 검사해야 합니다. (웨이슨 선택 과제)",
        choices: ["1번과 4번", "2번과 4번", "1번과 2번", "1번, 2번, 3번, 4번 모두"],
        answer: 2,
        insight: "A 등급 제품을 뒤집어 짝수인지 확인하고, 홀수 스티커 제품을 뒤집어 A 등급이 아님을 확인해야 규칙이 어긋나지 않습니다."
      },
      {
        id: "iq-mbti-sp-1",
        category: "mbti",
        targetGroups: ["sp"],
        difficulty: 2,
        skill: "상황 역학",
        title: "미로 장치 규칙: '기어가 시계 방향으로 돌면 밸브 A가 열리고, 밸브 A가 열리면 배수관 B가 닫힌다.' 현재 배수관 B가 열려 있는 상태라면, 확실한 사실은 무엇일까요?",
        passage: "역방향으로 추론하여 배수관 B가 열려 있으면 밸브 A와 기어의 상태가 어떨지 생각해보세요.",
        choices: ["밸브 A는 열려 있고 기어는 시계 방향으로 돌고 있다", "밸브 A는 닫혀 있고 기어는 시계 방향으로 돌지 않고 있다", "기어는 반드시 반시계 방향으로 돌고 있다", "기어의 방향만 확실하고 밸브의 개폐는 알 수 없다"],
        answer: 1,
        insight: "배수관 B가 열려 있다는 것은 밸브 A가 열리지 않았다(닫혔다)는 뜻이고, 밸브 A가 닫혔다는 것은 기어가 시계 방향으로 돌지 않았다는 논리가 성립합니다."
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
      },
      {
        id: "eq-31",
        skill: "공감",
        title: "휴식 시간에 동료가 조용히 개인적인 실망을 털어놓습니다. 어떻게 반응하시겠습니까?",
        passage: "부담을 주지 않으면서 지지하는 태도를 고르세요.",
        choices: [
          { text: "부드럽게 이야기하고 싶은지 물으며 들어주겠다고 말한다.", score: 4, domain: "empathy" },
          { text: "나중에 말하겠지 하고 넘긴다.", score: 1, domain: "empathy" },
          { text: "어색함을 피하려고 빨리 화제를 바꾼다.", score: 0, domain: "empathy" },
          { text: "요청하지 않았는데도 곧바로 조언한다.", score: 2, domain: "empathy" }
        ]
      },
      {
        id: "eq-32",
        skill: "자기 인식",
        title: "회의가 길어질 때 짜증이 올라오는 걸 느낍니다. 어떻게 하시겠습니까?",
        passage: "자신의 한계를 인식하고 조율하는 방식을 봅니다.",
        choices: [
          { text: "짜증을 인정하고, 다음부터는 간결한 안건을 요청하겠다고 마음먹는다.", score: 4, domain: "awareness" },
          { text: "참다가 감정만 쌓아둔다.", score: 0, domain: "awareness" },
          { text: "일정 지연은 모두 남 탓이라고 생각한다.", score: 1, domain: "awareness" },
          { text: "설명 없이 회의를 일찍 나간다.", score: 2, domain: "awareness" }
        ]
      },
      {
        id: "eq-33",
        skill: "감정 조절",
        title: "업무 중 갑작스러운 큰 소리에 놀랐습니다. 어떻게 대처하시겠습니까?",
        passage: "진정하는 방법을 선택하세요.",
        choices: [
          { text: "천천히 세 번 숨 쉬고 다시 집중한다.", score: 4, domain: "regulation" },
          { text: "소리 내어 불만을 표현한다.", score: 0, domain: "regulation" },
          { text: "느낌을 무시하고 계속 일한다.", score: 2, domain: "regulation" },
          { text: "곧바로 자리를 떠난다.", score: 1, domain: "regulation" }
        ]
      },
      {
        id: "eq-34",
        skill: "관계 판단",
        title: "단체 대화에서 누군가 불편한 농담을 합니다. 어떻게 반응하시겠습니까?",
        passage: "존중하는 대화를 유지하는 방법을 고르세요.",
        choices: [
          { text: "짧게 불편함을 알리고 중립적인 화제로 돌린다.", score: 4, domain: "social" },
          { text: "분위기를 위해 함께 웃는다.", score: 1, domain: "social" },
          { text: "무시하고 공격적으로 화제를 바꾼다.", score: 0, domain: "social" },
          { text: "공개적으로 화내며 맞선다.", score: 2, domain: "social" }
        ]
      },
      {
        id: "eq-35",
        skill: "공감",
        title: "친구가 안 좋은 소식을 듣고 멀어진 것 같습니다. 적절한 행동은?",
        passage: "부담 없이 조용히 지지하는 방법을 고르세요.",
        choices: [
          { text: "부드럽게 안부를 묻고 들어주겠다고 말한다.", score: 4, domain: "empathy" },
          { text: "당장 무슨 일인지 설명하라고 한다.", score: 0, domain: "empathy" },
          { text: "농담으로 분위기를 바꾼다.", score: 1, domain: "empathy" },
          { text: "아무것도 하지 않고 거리를 둔다.", score: 2, domain: "empathy" }
        ]
      },
      {
        id: "eq-36",
        skill: "자기 인식",
        title: "일을 과하게 맡아 번아웃을 느낍니다. 균형을 되찾으려면?",
        passage: "한계를 파악하고 경계를 세우는 방법을 고르세요.",
        choices: [
          { text: "현재 약속을 정리하고, 감당할 수 없는 새 일은 거절한다.", score: 4, domain: "awareness" },
          { text: "무조건 전부 해낸다.", score: 0, domain: "awareness" },
          { text: "시간이 없는 건 전부 외부 탓이라고 한다.", score: 1, domain: "awareness" },
          { text: "계획 없이 잠시 휴가만 간다.", score: 2, domain: "awareness" }
        ]
      },
      {
        id: "eq-37",
        skill: "감정 조절",
        title: "예상치 못한 비판을 받아 방어적으로 느껴집니다. 건설적으로 어떻게 반응하시겠습니까?",
        passage: "감정과 내용을 분리하는 방법을 고르세요.",
        choices: [
          { text: "잠시 멈추고 피드백의 타당성을 생각한 뒤 차분히 답한다.", score: 4, domain: "regulation" },
          { text: "즉시 반박한다.", score: 0, domain: "regulation" },
          { text: "비판을 완전히 무시한다.", score: 1, domain: "regulation" },
          { text: "동료에게 불만을 털어놓는다.", score: 2, domain: "regulation" }
        ]
      },
      {
        id: "eq-38",
        skill: "관계 판단",
        title: "팀원이 회의에 반복적으로 늦습니다. 가장 효과적인 대응은?",
        passage: "팀워크를 해치지 않으면서 행동을 다루는 방법을 고르세요.",
        choices: [
          { text: "개인적으로 영향을 설명하고 시작 시간에 대해 합의한다.", score: 4, domain: "social" },
          { text: "회의 중 공개적으로 지적한다.", score: 0, domain: "social" },
          { text: "늦는 것을 무시하고 넘긴다.", score: 1, domain: "social" },
          { text: "그 사람만 맞추려고 모든 회의를 미룬다.", score: 2, domain: "social" }
        ]
      },
      {
        id: "eq-39",
        skill: "공감",
        title: "워크숍에서 참가자가 자신의 아이디어를 말하기 주저합니다. 어떻게 격려하시겠습니까?",
        passage: "안전하게 발언할 수 있는 분위기를 만드는 방법을 고르세요.",
        choices: [
          { text: "부드럽게 의견을 환영한다고 말하며 말할 기회를 준다.", score: 4, domain: "empathy" },
          { text: "빨리 말하라고 재촉한다.", score: 0, domain: "empathy" },
          { text: "그 사람을 넘기고 진행한다.", score: 1, domain: "empathy" },
          { text: "침묵을 농담으로 넘긴다.", score: 2, domain: "empathy" }
        ]
      },
      {
        id: "eq-40",
        skill: "자기 인식",
        title: "줄을 설 때 참을성이 떨어지는 걸 느낍니다. 이 감정을 다루려면?",
        passage: "대처 전략을 고르세요.",
        choices: [
          { text: "마음챙김 호흡을 하고 주변을 관찰한다.", score: 4, domain: "awareness" },
          { text: "소리 내어 불만을 표현한다.", score: 0, domain: "awareness" },
          { text: "새치기하려 한다.", score: 1, domain: "awareness" },
          { text: "줄을 아예 떠난다.", score: 2, domain: "awareness" }
        ]
      },
      {
        id: "eq-job-1",
        category: "job",
        targetGroups: ["service", "sales"],
        skill: "감정 노동 조절",
        title: "[서비스/영업] 고객이 무리한 요구를 하며 화를 냅니다. 당신의 첫 반응은?",
        passage: "고객의 감정을 먼저 수용하되 무리한 요구는 조율하는 태도가 필요합니다.",
        choices: [
          { text: "화난 감정에 먼저 공감하고, 가능한 대안을 제시한다.", score: 4, domain: "regulation" },
          { text: "규정상 절대 안 된다고 단호하게 자른다.", score: 0, domain: "regulation" },
          { text: "일단 무조건 사과하고 원하는 대로 해준다.", score: 1, domain: "regulation" },
          { text: "고객의 요구를 듣는 척하며 무시한다.", score: 2, domain: "regulation" }
        ]
      },
      {
        id: "eq-elementary-1",
        category: "age",
        targetGroups: ["elementary"],
        difficulty: 1,
        skill: "또래 공감",
        title: "[초등] 학교 운동장에서 친구가 달리기를 하다가 넘어져서 울고 있습니다. 이때 당신의 행동은?",
        passage: "친구가 아파하고 있을 때 어떻게 위로하고 도와줄 수 있을지 생각해 봅니다.",
        choices: [
          { text: "친구에게 다가가 다치지 않았는지 물어보고 일으켜주거나 보건실로 데려다준다.", score: 4, domain: "empathy" },
          { text: "친구가 창피할 수 있으니 그냥 모른 척 지나간다.", score: 2, domain: "empathy" },
          { text: "친구가 넘어진 모습을 보고 웃는다.", score: 0, domain: "empathy" },
          { text: "지켜보기만 하다가 딴 곳으로 가버린다.", score: 1, domain: "empathy" }
        ]
      },
      {
        id: "eq-elementary-2",
        category: "age",
        targetGroups: ["elementary"],
        difficulty: 1,
        skill: "감정 조절",
        title: "[초등] 친구들과 재미있게 보드게임을 하다가 내가 졌습니다. 순간 화가 나고 속상할 때 어떻게 해야 할까요?",
        passage: "게임 결과에 속상하더라도 감정을 조절하고 다음을 기약하는 건강한 태도가 중요합니다.",
        choices: [
          { text: "잠깐 숨을 크게 들이쉬고 '게임은 즐거운 것이니 다음번에 이기자!'라고 생각한다.", score: 4, domain: "regulation" },
          { text: "억울하다며 게임판을 엎어버리거나 소리를 지른다.", score: 0, domain: "regulation" },
          { text: "게임에서 이긴 친구들을 미워하며 바로 집으로 간다.", score: 1, domain: "regulation" },
          { text: "졌지만 꾹 참고 그 뒤로 아무 말도 하지 않는다.", score: 2, domain: "regulation" }
        ]
      },
      {
        id: "eq-elementary-3",
        category: "age",
        targetGroups: ["elementary"],
        difficulty: 1,
        skill: "의사소통",
        title: "[초등] 짝꿍이 내가 빌려 놀고 싶어 하는 아주 재미있는 장난감을 갖고 놀고 있습니다. 어떻게 말해야 할까요?",
        passage: "상대방의 기분을 존중하면서 기분 좋게 부탁하는 말하기 방법이 중요합니다.",
        choices: [
          { text: "짝꿍에게 '그 장난감 정말 재미있겠다! 다 놀고 나서 나도 빌려줄 수 있어?'라고 예쁘게 부탁한다.", score: 4, domain: "social" },
          { text: "짝꿍이 한눈파는 사이에 몰래 장난감을 뺏어 온다.", score: 0, domain: "social" },
          { text: "장난감을 가지고 노는 짝꿍을 째려보며 심술을 부린다.", score: 1, domain: "social" },
          { text: "빌려달라고 떼를 쓰며 소리를 지른다.", score: 0, domain: "social" }
        ]
      },
      {
        id: "eq-mbti-nt-1",
        category: "mbti",
        targetGroups: ["nt"],
        difficulty: 3,
        skill: "합리적 대처",
        title: "팀 회의 중 동료가 당신의 제안서에서 치명적인 데이터 연산 오류를 지적했고, 당신도 제안서가 틀렸음을 깨달았습니다. 이때 가장 정서적으로 성숙한 대처는 무엇일까요?",
        passage: "개인적 감정을 차단하고 객관적 진실을 수렴해 프로젝트 효율을 높이는 대응을 고려해 봅니다.",
        choices: [
          { text: "오류를 즉각 인정하고 수정한 고품질 제안서를 신속히 업데이트하겠다고 발표한다.", score: 4, domain: "regulation" },
          { text: "그 오류는 중요치 않으며 제안서의 전반적인 방향성이 핵심이라고 방어한다.", score: 1, domain: "regulation" },
          { text: "자료를 제공한 다른 팀원에게 책임을 돌리며 자신의 실수가 아니라고 해명한다.", score: 0, domain: "regulation" },
          { text: "공개 지적에 수치심을 느끼고 회의장을 이탈한 후 개인적으로 항의한다.", score: 0, domain: "regulation" }
        ]
      },
      {
        id: "eq-mbti-nf-1",
        category: "mbti",
        targetGroups: ["nf"],
        difficulty: 3,
        skill: "관계 공감",
        title: "절친한 친구가 실연의 아픔으로 울면서 '내가 평생 진정한 사랑을 만날 수 있을까?'라고 좌절 섞인 질문을 합니다. 이때 가장 깊은 위로를 제공하는 대응은 무엇일까요?",
        passage: "논리적 대안이나 해결책보다는 감정의 절대적인 수용과 곁에 있어 줌(Presence)의 가치를 생각해 봅니다.",
        choices: [
          { text: "'마음이 얼마나 무너질지 감히 상상도 안 돼... 울고 싶을 때 억지로 참지 말고 마음껏 울어, 늘 옆에 있을게'라고 안아준다.", score: 4, domain: "empathy" },
          { text: "'통계적으로 실연 후 6개월 안에 새 사람을 만날 확률이 높으니 슬퍼하지 마'라고 이성적으로 조언한다.", score: 1, domain: "empathy" },
          { text: "'그 나쁜 연인은 잊어버리고 기분 전환 삼아 신나게 술이나 마시러 가자'라며 분위기 전환을 시도한다.", score: 2, domain: "empathy" },
          { text: "'네가 평소에 연애할 때 보였던 의존적 태도가 원인일 수 있으니 자아 성찰을 해봐'라고 분석한다.", score: 0, domain: "empathy" }
        ]
      },
      {
        id: "eq-mbti-sj-1",
        category: "mbti",
        targetGroups: ["sj"],
        difficulty: 3,
        skill: "사회적 규범",
        title: "당신은 아파트 입주자 대표 총무입니다. 규정상 장기 연체 세대는 즉각 단수 예고 대상이지만, 독거노인의 심각한 생활고 사정을 알게 되었습니다. 이때 가장 책임감 있는 대응은 무엇일까요?",
        passage: "규정의 형평성을 지키면서도 공동체 구성원으로서 도덕적 배려를 제도적으로 녹여낼 방안을 모색합니다.",
        choices: [
          { text: "개인 사비로 긴급 대납 조치를 취해 예고를 보류하고, 사회 복지 연계 서비스를 즉각 알아본다.", score: 4, domain: "social" },
          { text: "예외를 두는 것은 다른 입주자들에게 형평성이 어긋나므로 예고장 집행을 원칙대로 강행한다.", score: 2, domain: "social" },
          { text: "동정심에 사로잡혀 장부를 누락하고 연체 내역을 영구히 모른 척 덮어준다.", score: 0, domain: "social" },
          { text: "아파트 단지 게시판에 사정을 실명으로 공개하며 주민들의 자선 성금을 촉구한다.", score: 1, domain: "social" }
        ]
      },
      {
        id: "eq-mbti-sp-1",
        category: "mbti",
        targetGroups: ["sp"],
        difficulty: 2,
        skill: "상황 순발력",
        title: "중요한 바이어와의 야외 만찬 행사 중 기습적인 장대비가 쏟아져 행사가 엉망이 되었습니다. 바이어는 불쾌해하고 있습니다. 이때 위기를 타개할 유연한 대처는 무엇일까요?",
        passage: "예상치 못한 위기를 순발력 있고 유쾌한 이벤트로 승화하는 유연성과 관계 지향적 대처를 고려해 보세요.",
        choices: [
          { text: "즉시 바이어를 인근의 정취 있는 실내 장소로 모시며, '소중한 분과의 특별한 수중 미팅으로 기억에 남겠습니다'라며 유쾌하게 분위기를 전환한다.", score: 4, domain: "regulation" },
          { text: "기획사의 부실한 날씨 대비를 큰 소리로 탓하며 법적으로 배상 책임을 묻겠다고 분노를 공유한다.", score: 1, domain: "regulation" },
          { text: "바이어에게 그냥 우산을 씌워주며 침묵을 유지한 채 비가 그치기를 하염없이 기다린다.", score: 2, domain: "regulation" },
          { text: "비 맞은 정장을 말릴 세탁비를 현금으로 즉시 지급하겠다고 보상안을 제안한다.", score: 0, domain: "regulation" }
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
  categories: {
    age: {
      label: "연령대",
      options: [
        { id: "elementary", label: "초등학생" },
        { id: "middle", label: "중학생" },
        { id: "high", label: "고등학생" },
        { id: "college_adult", label: "대학생 및 일반성인" }
      ]
    },
    major: {
      label: "전공별",
      options: [
        { id: "engineering", label: "공학계열 (컴공/기계 등)" },
        { id: "business", label: "상경계열 (경영/경제)" },
        { id: "humanities", label: "인문/사회계열" },
        { id: "arts", label: "예체능계열" }
      ]
    },
    job: {
      label: "직업분야별",
      options: [
        { id: "it", label: "IT/개발/데이터" },
        { id: "sales", label: "영업/마케팅" },
        { id: "design", label: "디자인/기획" },
        { id: "service", label: "서비스/CS" }
      ]
    },
    mbti: {
      label: "성격 유형별 (MBTI)",
      options: [
        { id: "diagnose", label: "💡 유형 진단 후 테스트 시작 (추천)" },
        { id: "nt", label: "분석가형 (NT)" },
        { id: "nf", label: "외교관형 (NF)" },
        { id: "sj", label: "관리자형 (SJ)" },
        { id: "sp", label: "탐험가형 (SP)" }
      ]
    }
  }
};

