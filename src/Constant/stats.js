const MATCHED = Object.freeze({
  NUMBER_COUNT: {
    3: '3개 일치 (5,000원)',
    4: '4개 일치 (50,000원)',
    5: '5개 일치 (1,500,000원)',
    '2nd': '5개 일치, 보너스 볼 일치 (30,000,000원)',
    6: '6개 일치 (2,000,000,000원)',
  },
  NUMBER_RESULT: {
    '3개 일치 (5,000원)': 0,
    '4개 일치 (50,000원)': 0,
    '5개 일치 (1,500,000원)': 0,
    '6개 일치 (2,000,000,000원)': 0,
    '5개 일치, 보너스 볼 일치 (30,000,000원)': 0,
  },
});

const NUMBER = Object.freeze({
  LOTTERY_PRICE: 1000,
  MIN: 1,
  MAX: 45,
  COUNT: 6,
  PERCENTAGE: 100,
  DECIMAL: 10,
  TWO_DECIMAL_POINT: 2,
});

export { MATCHED, NUMBER };
