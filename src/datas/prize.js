export const FIRST = 'first';
export const SECOND = 'second';
export const THIRD = 'third';
export const FOURTH = 'fourth';
export const FIFTH = 'fifth';

export const prize = {
  first: {
    money: 2000000000,
    standard: '6개 일치',
  },
  second: {
    money: 30000000,
    standard: '5개 일치, 보너스 볼 일치',
  },
  third: {
    money: 1500000,
    standard: '5개 일치',
  },
  fourth: {
    money: 50000,
    standard: '4개 일치',
  },
  fifth: {
    money: 5000,
    standard: '3개 일치',
  },
};

export const rank = [FIRST, SECOND, THIRD, FOURTH, FIFTH];

const prizeConditionArr = [
  { key: { mathNumber: 6, isMatchBonus: false }, value: FIRST },
  { key: { mathNumber: 5, isMatchBonus: true }, value: SECOND },
  { key: { mathNumber: 5, isMatchBonus: false }, value: THIRD },
  { key: { mathNumber: 4, isMatchBonus: false }, value: FOURTH },
  { key: { mathNumber: 4, isMatchBonus: true }, value: FOURTH },
  { key: { mathNumber: 3, isMatchBonus: false }, value: FIFTH },
  { key: { mathNumber: 3, isMatchBonus: true }, value: FIFTH },
];

export const conditionMap = new Map();
prizeConditionArr.forEach((elem) => conditionMap.set(JSON.stringify(elem.key), elem.value));
