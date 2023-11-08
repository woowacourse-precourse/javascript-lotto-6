import { Console } from "@woowacourse/mission-utils";
import Output from "./Output.js";
import Input from "./Input.js";
import Compare from "./Compare.js";
import { InputMessage } from "./Constant.js";

class App {
  #inputMoney = 0;
  #trialNum = 0;
  #totalLotto = [];
  #winningLotto = [];
  #bonus = 0;
  #compareResult = [];

  async play() {
    await this.inputMoney();
  }

  async inputMoney() {
    Console.print(InputMessage.Money);
    this.#inputMoney = await Console.readLineAsync("");

    try {
      const input = new Input(this.#inputMoney);
      this.#trialNum = input.inputMoney();
      Console.print("");
      Console.print(`${this.#trialNum}개를 구매했습니다.`);
      this.createLottos();
    } catch (error) {
      Console.print(error.message);
      await this.inputMoney();
    }
  }

  createLottos() {
    let lottos = new Output();
    this.#totalLotto = lottos.createLotto(this.#trialNum, this.#totalLotto);
    this.inputWinning();
  }

  async inputWinning() {
    Console.print("");
    Console.print(InputMessage.WinningNum);
    const input = await Console.readLineAsync("");

    try {
      const inputWinnNum = new Input(input);
      this.#winningLotto = inputWinnNum.inputWin();
    } catch (error) {
      Console.print(error.message);
      await this.inputWinning();
    }
    this.inputBonusNum();
  }

  async inputBonusNum() {
    Console.print("");
    Console.print(InputMessage.Bonus);
    const bonus = await Console.readLineAsync("");

    try {
      const inputBonus = new Input(bonus);
      this.#bonus = inputBonus.inputBonus();
    } catch (error) {
      Console.print(error.message);
      await this.inputBonusNum();
    }
    this.compareLotto();
  }

  compareLotto() {
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
    this.getResult();
  }

  getResult() {
    let result = new Output();
    result.calcLottoResult(this.#compareResult);
    const lottoResult = result.printLottoResult();
    this.printResult(lottoResult);
  }

  printResult(lottoResult) {
    Console.print("");
    Console.print("당첨 통계");
    Console.print("---");
    Console.print(`3개 일치 (5,000원) - ${lottoResult.num3}개`);
    Console.print(`4개 일치 (50,000원) - ${lottoResult.num4}개`);
    Console.print(`5개 일치 (1,500,000원) - ${lottoResult.num5notBouns}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${lottoResult.num5Bouns}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${lottoResult.num6}개`);
    const rate = (lottoResult.winMoney / this.#inputMoney) * 100;
    const resultRate = Math.round(rate * 100) / 100;
    Console.print(`총 수익률은 ${resultRate}%입니다.`);
  }
}

export default App;
