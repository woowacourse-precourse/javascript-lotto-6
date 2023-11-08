import Lotto from "./Lotto.js";
import { Random, Console } from "@woowacourse/mission-utils";

class App {
  async play() {
    const amount = await Console.readLineAsync("로또 구입 금액을 입력해주세요.");
    const lottoCount = this.validateAmount(amount);
    const lottos = this.generateLottos(lottoCount);
    this.printLottos(lottos);

    const winningNumbers = await this.getWinningNumbers();
    const bonusNumber = await this.getBonusNumber();
    this.printResult(lottos, winningNumbers, bonusNumber, amount);
  }

  validateAmount(amount) {
    if (amount % 1000 !== 0) {
      throw new Error("[ERROR] 로또 구입 금액은 1,000원 단위로 입력해야 합니다.");
    }
    return amount / 1000;
  }

  generateLottos(count) {
    const lottos = [];
    for (let i = 0; i < count; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      lottos.push(new Lotto(numbers));
    }
    return lottos;
  }

  printLottos(lottos) {
    Console.print(`${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => Console.print(lotto.toString()));
  }

  async getWinningNumbers() {
    const input = await Console.readLineAsync("당첨 번호를 입력해주세요.");
    return input.split(",").map(Number);
  }

  async getBonusNumber() {
    const input = await Console.readLineAsync("보너스 번호를 입력해주세요.");
    return Number(input);
  }

  printResult(lottos, winningNumbers, bonusNumber, amount) {
    const result = this.calculateResult(lottos, winningNumbers, bonusNumber);
    this.printPrizes(result);
    this.printProfitRate(result, amount);
  }

  calculateResult(lottos, winningNumbers, bonusNumber) {
    // TODO: 당첨 결과 계산 로직 구현
  }

  printPrizes(result) {
    // TODO: 당첨 결과 출력 로직 구현
  }

  printProfitRate(result, amount) {
    // TODO: 수익률 출력 로직 구현
  }
}

export default App;

