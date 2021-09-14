const beginnerQuestions = [
  {
    id: 1,
    to: '/country/australia',
    name: '第1問',
    completionFlg: true,
  },
  {
    id: 2,
    to: '/country/brazil',
    name: '第2問',
    completionFlg: false,
  },
  {
    id: 3,
    to: '/country/colombia',
    name: '第3問',
    completionFlg: false,
  },
  {
    id: 4,
    to: '/country/denmark',
    name: '第4問',
    completionFlg: false,
  },
  {
    id: 5,
    to: '/country/eswatini',
    name: '第5問',
    completionFlg: false,
  },
  {
    id: 6,
    to: '/country/france',
    name: '第6問',
    completionFlg: false,
  },
  {
    id: 7,
    to: '/country/greece',
    name: '第7問',
    completionFlg: false,
  },
  {
    id: 8,
    to: '/country/honduras',
    name: '第8問',
    completionFlg: false,
  },
  {
    id: 9,
    to: '/country/india',
    name: '第9問',
    completionFlg: false,
  },
  {
    id: 10,
    to: '/country/japan',
    name: '第10問',
    completionFlg: false,
  },
  {
    id: 11,
    to: '/country/kazakhstan',
    name: '第11問',
    completionFlg: false,
  },
  {
    id: 12,
    to: '/country/lebanon',
    name: '第12問',
    completionFlg: false,
  },
  {
    id: 13,
    to: '/country/mandagascar',
    name: '第13問',
    completionFlg: false,
  },
  {
    id: 14,
    to: '/country/norway',
    name: '第14問',
    completionFlg: false,
  },
  {
    id: 15,
    to: '/country/oman',
    name: '第15問',
    completionFlg: false,
  },
];

const intermediateQuestions = [
  {
    id: 1,
    to: '/planet/mercury',
    name: '第1問',
  },
  {
    id: 2,
    to: '/planet/venus',
    name: '第2問',
  },
  {
    id: 3,
    to: '/planet/earth',
    name: '第3問',
  },
  {
    id: 4,
    to: '/planet/mars',
    name: '第４問',
  }
];

export function getBeginnerQuestions() {
  return beginnerQuestions;
}

export function getIntermediateQuestions() {
  return intermediateQuestions;
}