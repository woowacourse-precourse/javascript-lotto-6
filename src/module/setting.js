import { MissionUtils } from "@woowacourse/mission-utils";
import { LOTTO } from "../constants/lotto.js";

export const setPurchaseLotto = (amount) => {
  const lottoCount = amount / LOTTO.PRICE;
  const lottoTickets = [];

  for (let i = 0; i < lottoCount; i++) {
    const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoTickets.push(lottoNumber.sort((a, b) => a - b));
  }

  return lottoTickets;
};
