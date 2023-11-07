import { MissionUtils } from "@woowacourse/mission-utils";
const { Console, Random } = MissionUtils;
import Lotto from "./Lotto.js";

class LottoPurchaser {
  constructor(price) {
    this.countLotto = price / 1000;
    this.lottoTickets = [];
    this.lottoList();
  }

  lottoList() {
    for (let num = 0; num < this.countLotto; num++) {
      const newLotto = this.generateLottoNumbers();
      this.lottoTickets.push(newLotto);
    }
  }

  generateLottoNumbers() {
    const newNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    return new Lotto(newNumbers);
  }

  printCount() {
    Console.print(`\n${this.countLotto}개를 구매했습니다.`);
  }

  printList() {
    this.lottoTickets.forEach((lotto) => {
      lotto.printNumbers();
    });
  }
}

export default LottoPurchaser;
