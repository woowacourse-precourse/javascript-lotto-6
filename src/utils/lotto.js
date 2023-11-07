import LOTTO from "../constant/lottoData";

export const paymentToLottoCount = (payment) => {
  return payment / LOTTO.COST;
};
