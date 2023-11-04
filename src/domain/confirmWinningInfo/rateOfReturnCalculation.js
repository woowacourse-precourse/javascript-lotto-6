const rateOfReturnCalculation = Object.freeze({
  constants: Object.freeze({
    percent: 100,
    decimal: 1,
  }),

  calculate({ purchasedLottoAmount, prize }) {
    const rateOfReturn = (prize / purchasedLottoAmount) * this.constants.percent;

    return Number.isInteger(rateOfReturn)
      ? rateOfReturn.toString()
      : rateOfReturn.toFixed(this.constants.decimal);
  },
});

export default rateOfReturnCalculation;
