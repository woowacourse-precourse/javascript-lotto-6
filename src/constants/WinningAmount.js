const WINNING_AMOUNT = Object.freeze({
  FIRST: 2000000000,
  SECOND: 30000000,
  THIRD: 1500000,
  FOURTH: 50000,
  FIFTH: 5000,
});

const WINNING_AMOUNT_STRING = Object.freeze({
  FIRST: Number(WINNING_AMOUNT.FIRST).toLocaleString(),
  SECOND: Number(WINNING_AMOUNT.SECOND).toLocaleString(),
  THIRD: Number(WINNING_AMOUNT.THIRD).toLocaleString(),
  FOURTH: Number(WINNING_AMOUNT.FOURTH).toLocaleString(),
  FIFTH: Number(WINNING_AMOUNT.FIFTH).toLocaleString(),
});

export default WINNING_AMOUNT_STRING;
