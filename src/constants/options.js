export const OPTIONS = Object.freeze({
  minNumber: 1,
  maxNumber: 45,
  length: 6,
});

export const REGEXS = Object.freeze({
  number: /^[0-9]+$/,
});

export const RANK = Object.freeze({
  fifth: 'fifth',
  fourth: 'fourth',
  third: 'third',
  second: 'second',
  first: 'first',
  losing: 'losing',
});

export const PRIZE = Object.freeze({
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
  losing: 0,
});
