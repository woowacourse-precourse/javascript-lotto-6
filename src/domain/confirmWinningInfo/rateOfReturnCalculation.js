/**
 * @module rateOfReturnCalculation
 * 구매한 로또 티켓의 수익률을 계산하는 방법을 제공하는 모듈
 */
const rateOfReturnCalculation = Object.freeze({
  constants: Object.freeze({
    percent: 100,
    decimal: 1,
  }),
  /**
   * @param {object} params - 매개 변수 객체
   * @param {number} params.purchasedLottoAmount - 구매한 로또 금액
   * @param {number} params.prize - 총 당첨 금애
   * @returns {string} 수익률
   */
  calculate({ purchasedLottoAmount, prize }) {
    const rateOfReturn = (prize / purchasedLottoAmount) * this.constants.percent;

    return Number.isInteger(rateOfReturn)
      ? rateOfReturn.toString()
      : rateOfReturn.toFixed(this.constants.decimal);
  },
});

export default rateOfReturnCalculation;
