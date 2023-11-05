const VALUE = {
  notNumber: /[^0-9]/,
  range: {
    start: 1,
    end: 45,
    count: 6,
  },
  unit: {
    price: 1000,
  },
};

Object.freeze(VALUE.range);
Object.freeze(VALUE.unit);
Object.freeze(VALUE);

export default VALUE;
