import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { InputValidator } from "./utils/InputValidator.js";
import Output from "./Output.js";
import Input from "./Input.js";
import Compare from "./Compare.js";

class App {
  #inputMoney = 0;
  #trialNum = 0;
  #totalLotto = [];
  #winningLotto = [];
  #bonus = 0;
  #compareResult = [];

  async play() {
    this.inputAmount();
  }

  async inputAmount() {
    Console.print("구입금액을 입력해 주세요.");
    this.#inputMoney = await Console.readLineAsync("");

    const input = new Input(this.#inputMoney);

    this.#trialNum = input.inputMoney();

    this.RandomNums();
  }

  async inputWinning() {
    Console.print("당첨 번호를 입력해 주세요.");
    const input = await Console.readLineAsync("");

    const inputWinnNum = new Input(input);

    this.#winningLotto = inputWinnNum.inputWin();

    Console.print("보너스 번호를 입력해 주세요.");
    const bonus = await Console.readLineAsync("");

    const inputBonus = new Input(bonus);
    this.#bonus = inputBonus.inputBonus();

    this.compare();
  }

  RandomNums() {
    for (let i = 0; i < this.#trialNum; i++) {
      let lotto = new Output();
      const newLotto = lotto.createLotto();
      Console.print(newLotto);
      this.#totalLotto.push(newLotto);
    }
    this.inputWinning();
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
