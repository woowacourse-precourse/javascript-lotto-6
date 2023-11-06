import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO } from "../constants/lotto.js";

export const setPurchaseLotto = (purchaseAmount) => {
  const lottoCount = purchaseAmount / LOTTO.price;
  const lottoArray = [];

  for (let i = 0; i < lottoCount; i++) {
    const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoArray.push(lottoNumber.sort((a, b) => a - b));
  }

  return lottoArray;
};
