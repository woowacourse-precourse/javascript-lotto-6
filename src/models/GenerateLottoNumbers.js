import { Random } from "@woowacourse/mission-utils";
import Lotto from "../Lotto";

export default class GenerateLottoNumbers {
  getLottos(counts) {
    const lottos = [];
    for (let count = 0; count < counts; count++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      numbers.sort((a, b) => a - b);
      const lotto = new Lotto(numbers);
      lottos.push(lotto);
    }
    return lottos;
  }
}