import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";

class App {
  LOTTO_UNIT = 1000;
  LOTTO_REWARD = [0, 2000000, 30000, 1500, 50, 5];
  LOTTO_LENGTH = 6;

  async play() {
    const rankCount = Array.from(6).fill(0);
    const payment = await this.getPayment();
    const lottoCount = parseInt(payment / this.LOTTO_UNIT);
    const lottoList = this.getPickedLottoList(lottoCount)
    this.printPickedLotto(lottoCount, lottoList)
  }

  async getPayment() {
    const payment = await Console.readLineAsync("구입금액을 입력해 주세요.\n");
    this.validatePayment(payment);
    return +payment;
  }

  validatePayment(payment) {
    if (!/^\d$/g.test(payment)) {
      throw new Error("[ERROR] 구입 금액은 숫자로 입력하셔야 합니다.");
    } else if (+payment <= 0) {
      throw new Error("[ERROR] 구입 금액은 0원 이상 입력하셔야 합니다.");
    } else if (+payment % this.LOTTO_UNIT !== 0) {
      throw new Error("[ERROR] 구입 금액은 1000원으로 나누어져야 합니다.");
    }
  }

  pickLotto() {
    const pickNumbers = [];
    while (numbers.length < this.LOTTO_LENGTH) {
      const number = Random.pickNumberInRange(1, 45);
      if (!pickNumbers.includes(number)) {
        pickNumbers.push(number);
      }
    }
    return new Lotto(pickNumbers.sort((a, b) => a - b));
  }

  getPickedLottoList(lottoCount) {
    const pickedLottoList = [];
    for (let i = 0; i < lottoCount; i++) {
      const pickedLotto = this.pickLotto();
      pickedLottoList.push(pickedLotto);
    }
    return pickedLottoList;
  }

  printPickedLotto(lottoCount, lottoList = []){
    Console.print(`${lottoCount}개를 구매했습니다.`);
    lottoList.forEach(lotto => Console.print(lotto.getNumber()))
  }
}

export default App;
