import { STATIC_NUMBER, RETURN_MONEY } from "../../static/Static.js";

const Calculator = {
  calcPurchaseQuantity(purchasePrice) {
    const purchaseQuantity =
      Number(purchasePrice) / STATIC_NUMBER.pricePerLotto;
    return purchaseQuantity;
  },

  calcRateOfReturn(winningStatistic, quantity) {
    let sumReturnMoney = 0;
    for (let rank in winningStatistic) {
      sumReturnMoney += RETURN_MONEY[rank] * winningStatistic[rank];
    }
    const rateOfReturn =
      (sumReturnMoney / (quantity * STATIC_NUMBER.pricePerLotto)) * 100;
    return rateOfReturn.toFixed(1);
  },
};

export default Calculator;
