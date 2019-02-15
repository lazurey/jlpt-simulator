export enum TEST_TIME {
  QUICK = 'quick',
  MEDIUM = 'medium',
  FULL = 'full',
}

export enum TEST_LEVEL {
  N1 = 'n1',
  N2 = 'n2',
  N3 = 'n3',
}

export const TEST_SIZE_OPTIONS = [{
  value: TEST_TIME.QUICK,
  displayText: 'Quick / 15 mins',
}, {
  value: TEST_TIME.MEDIUM,
  displayText: 'Practice / 60 mins',
}, {
  value: TEST_TIME.FULL,
  displayText: 'Real / 90 mins',
}];

export const TEST_LEVEL_OPTIONS = [{
  value: TEST_LEVEL.N2,
  displayText: 'N2',
}, {
  value: TEST_LEVEL.N3,
  displayText: 'N3',
}, {
  value: TEST_LEVEL.N1,
  displayText: 'N1',
},
// , {
//   value: 'random',
//   displayText: 'N1 ~ N3',
// }
];

export enum QUESTION_TYPE {
  Word = 'word',
  Volcabulary = 'volcabulary',
  Grammar = 'grammar',
}

export const QUESTION_TYPE_JP = {
  [QUESTION_TYPE.Word]: '文字',
  [QUESTION_TYPE.Volcabulary]: '語彙',
  [QUESTION_TYPE.Grammar]: '文法',
};

export interface ITestSetConfig {
  word: number;
  volcabulary: number;
  grammar: number;
}

export const TEST_TIME_CONFIG = {
  [TEST_TIME.QUICK]: {
    word: 3,
    volcabulary: 3,
    grammar: 3,
  },
  [TEST_TIME.MEDIUM]: {
    word: 5,
    volcabulary: 5,
    grammar: 5,
  },
  [TEST_TIME.FULL]: {
    word: 10,
    volcabulary: 10,
    grammar: 10,
  },
};
