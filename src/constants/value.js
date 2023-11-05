const VALUE = {
  notNumber: /[^0-9]/,
  condition: {
    priceDivision: 1000,
  },
  range: {
    start: 1,
    end: 45,
    count: 6,
  },
};

Object.freeze(VALUE.condition);
Object.freeze(VALUE.range);
Object.freeze(VALUE);

export default VALUE;
