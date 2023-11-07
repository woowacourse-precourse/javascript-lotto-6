const VALUE = {
  notNumber: /[^0-9]/,
  range: {
    start: 1,
    end: 45,
    count: 6,
    win: 3,
    bonus: 5,
  },
  revenues: [5000, 50000, 1500000, 30000000, 2000000000],
  stats: [
    '3개 일치 (5,000원) - ',
    '4개 일치 (50,000원) - ',
    '5개 일치 (1,500,000원) - ',
    '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
    '6개 일치 (2,000,000,000원) - ',
  ],
  unit: {
    price: 1000,
  },
};

Object.freeze(VALUE.range);
Object.freeze(VALUE.revenues);
Object.freeze(VALUE.stats);
Object.freeze(VALUE.unit);
Object.freeze(VALUE);

export default VALUE;
