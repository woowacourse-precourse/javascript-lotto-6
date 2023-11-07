import { Random } from "@woowacourse/mission-utils";
import LOTTO from "../constant/lottoData.js";
import Lotto from "../class/Lotto.js";

export const paymentToLottoCount = (payment) => {
  return payment / LOTTO.COST;
};

export const generateLottos = (lottoCount) => {
  const lottos = [];

  Array.from({ length: lottoCount }).map((_) => {
    const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
    lotto.sort((a, b) => a - b);
    lottos.push(new Lotto(lotto));
  });

  return lottos;
};
