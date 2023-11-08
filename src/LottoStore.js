import { Random, Console } from "@woowacourse/mission-utils";

import Lotto from "./Lotto.js";

class LottoStore {
  sellLotto(money) {
    const lottoTickets = money / 1000;

    const lottos = [];
    for (let i = 0; i < lottoTickets; i++) {
      const randomNumbers = this.makeRandomNumbers();
      const lotto = new Lotto(randomNumbers);

      lottos.push(lotto);
    }

    return lottos;
  }

  makeRandomNumbers() {
    const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);

    return numbers;
  }

  printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);

    lottos.forEach((lotto) => {
      const lottoNumbers = lotto.getNumbers();
      const stringArray = this.convertToStringArray(lottoNumbers);

      Console.print(stringArray);
    });
  }

  convertToStringArray(lottoNumbers) {
    const string = lottoNumbers.join(", ");

    return `[${string}]`;
  }
}

export default LottoStore;
