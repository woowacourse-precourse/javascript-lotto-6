import { deepFreeze } from '../utils/index.js';

const lottoPrizesMap = deepFreeze(
  new Map([
    ['3', { prize: 5000, description: '3개 일치' }],
    ['4', { prize: 50000, description: '4개 일치' }],
    ['5', { prize: 1500000, description: '5개 일치' }],
    ['5_bonus', { prize: 30000000, description: '5개 일치, 보너스 볼 일치' }],
    ['6', { prize: 2000000000, description: '6개 일치' }],
  ]),
);

const unit = Object.freeze({
  unit: 1000,
});

const number = Object.freeze({
  min: 1,
  max: 45,
  limit: 6,
});

const rate = Object.freeze({
  percent: 100,
});

const bonus = Object.freeze({
  count: '5',
  key: '5_bonus',
});

const string = Object.freeze({
  split: ',',
});

const regexPatterns = Object.freeze({
  numericPattern: /^(?:[1-9]\d{3,}|[1-9]\d{0,2}(,\d{3})+)$/,
  whitespace: /\s/,
});

const LOTTO = Object.freeze({
  lottoPrizesMap,
  unit,
  number,
  rate,
  bonus,
  string,
  regexPatterns,
});

export default LOTTO;
