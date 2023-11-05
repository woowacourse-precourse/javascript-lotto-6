import { lotto } from '../constants/constants';

export const getLottoCount = cash => {
  const lottoCount = cash / lotto.PRICE;
  return lottoCount;
};
