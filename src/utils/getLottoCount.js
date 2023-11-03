import { lotto } from "../constants/constants.js";

export const getLottoCount = (cash) => {
  const lottoCount = cash / lotto.PRICE;
  return lottoCount;
};
