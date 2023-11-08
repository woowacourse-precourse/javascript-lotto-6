import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

export function lottoMaker(count) {
  const lottos = [];
  for (let i = 0; i < count; i++) {
    const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    lottos.push(new Lotto(lottoNumber));
  }
  return lottos;
}
