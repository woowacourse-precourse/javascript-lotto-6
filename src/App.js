import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { InputValidator } from "./utils/InputValidator.js";
import Output from "./Output.js";
import Input from "./Input.js";
import Compare from "./Compare.js";
import { PrintLotto } from "./Constant.js";

class App {
  #inputMoney = 0;
  #trialNum = 0;
  #totalLotto = [];
  #winningLotto = [];
  #bonus = 0;
  #compareResult = [];

  async play() {
    await this.inputAmount();
  }

  async inputAmount() {
    Console.print("구입금액을 입력해 주세요.");
    this.#inputMoney = await Console.readLineAsync("");

    try {
      const input = new Input(this.#inputMoney);
      this.#trialNum = input.inputMoney();
      Console.print(`${this.#trialNum}개를 구매했습니다.`);
      this.RandomNums();
    } catch (error) {
      Console.print(error.message);
      await this.inputAmount();
      return;
    }
  }

  async RandomNums() {
    for (let i = 0; i < this.#trialNum; i++) {
      const lotto = Random.pickUniqueNumbersInRange(1, 45, 6);
      this.#totalLotto.push(lotto);
    }
    for (let lotto of this.#totalLotto) {
      const sortedLotto = lotto.sort((a, b) => a - b);
      Console.print(`[${sortedLotto.join(", ")}]`);
    }
    this.inputWinning();
  }

  async inputWinning() {
    Console.print("당첨 번호를 입력해 주세요.");
    const input = await Console.readLineAsync("");

    try {
      const inputWinnNum = new Input(input);
      this.#winningLotto = inputWinnNum.inputWin();
    } catch (error) {
      Console.print(error.message);
      await this.inputWinning();
      return;
    }
    this.inputBonusNum();
  }

  async inputBonusNum() {
    Console.print("보너스 번호를 입력해 주세요.");
    const bonus = await Console.readLineAsync("");

    try {
      const inputBonus = new Input(bonus);
      this.#bonus = inputBonus.inputBonus();
    } catch (error) {
      Console.print(error.message);
      await this.inputBonusNum();
      return;
    }

    this.compare();
  }

  compare() {
    this.#totalLotto.forEach((lotto) => {
      const result = new Compare(
        lotto,
        this.#winningLotto,
        Number(this.#bonus)
      );
      result.compareLotto();
      const same = result.getResultObject();
      this.#compareResult.push(same);
    });
    Console.print(this.#compareResult);

    this.printResult();
  }

  printResult() {
    let result = new Output();
    const lottoResult = result.calcLottoResult(
      this.#compareResult,
      this.#inputMoney
    );
  }
}

export default App;
