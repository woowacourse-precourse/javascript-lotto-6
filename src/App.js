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
    const lottoList = this.getPickedLottoList(lottoCount);
    this.printPickedLotto(lottoCount, lottoList);
    const winningNumbers = await  this.getWinningNumber();
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

  printPickedLotto(lottoCount, lottoList = []) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottoList.forEach((lotto) => Console.print(lotto.getNumber()));
  }

  async getWinningNumber() {
    const numbers = await Console.readLineAsync(
        "\n당첨 번호를 입력해 주세요.\n"
    ).split(",");
    const winningNumber = [];
    numbers.forEach((number) => {
      if (!/\d/g.test(number)) {
        throw new Error("[ERROR] 로또 번호는 숫자로 입력해야 합니다.");
      } else if (+number < 1 || +number > 45) {
        throw new Error(
            "[ERROR] 로또 번호는 1~45 사이의 숫자를 입력해야 합니다."
        );
      } else if (winningNumber.includes(+number)) {
        throw new Error("[ERROR] 중복된 숫자는 입력할 수 없습니다.");
      }
      winningNumber.push(+number);
    });
    return new Lotto(winningNumber);
  }
}

export default App;
