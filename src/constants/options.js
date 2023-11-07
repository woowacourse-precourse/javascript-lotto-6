export const OPTIONS = Object.freeze({
  minNumber: 1,
  maxNumber: 45,
  length: 6,
});

export const REGEXS = {
  NUMBER: /^[0-9]+$/,
};

export const RANK = Object.freeze({
  first: ['first', 2000000000],
  second: ['second', 30000000],
  third: ['third', 1500000],
  fourth: ['fourth', 50000],
  fifth: ['fifth', 5000],
  losingLotto: ['losingLotto', 0],
});
