import LOTTO from "../constant/lottoData.js";

export const paymentToLottoCount = (payment) => {
  return payment / LOTTO.COST;
};
