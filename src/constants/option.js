const read = Object.freeze({
  inputSeparator: ',',
});

const lotto = Object.freeze({
  minLottoNumber: 1,
  maxLottoNumber: 45,
  lottoLength: 6,
  amountUnit: 1000,
});

const prize = Object.freeze({
  firstPrizeAmount: 2000000000,
  secondPrizeAmount: 30000000,
  thirdPrizeAmount: 1500000,
  fourthPrizeAmount: 50000,
  fifthPrizeAmount: 5000,
});

const OPTION = Object.freeze({ read, lotto, prize });

export default OPTION;
