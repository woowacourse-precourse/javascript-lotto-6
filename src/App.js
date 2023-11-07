import Inputs from "./module/view/Inputs.js";
import Operator from "./module/controller/Operator.js";
import Outputs from "./module/view/Outputs.js";
import {MissionUtils} from "@woowacourse/mission-utils";

class App {
  #inputs;
  #operators;
  #outputs;

  constructor() {
    this.#inputs = new Inputs();
    this.#operators = new Operator();
    this.#outputs = new Outputs();
  }

  async play() {
    await this.inputMoney();
    this.#outputs.printBlankLine();
    this.#outputs.printLottoList(this.#operators.lottoList);
    await this.inputWinNumber();
    this.#outputs.printScore(this.#operators.score);
  }

  // 구입금액 입력
  async inputMoney() {
    while (true) {
      try {
        const count = await this.#inputs.inputMoney();

        this.#operators.doLottoGenerator(count);

        break;
      } catch (err) {
        MissionUtils.Console.print(err);
      }
    }
  }

  // 당첨 번호 입력
  async inputWinNumber() {
    while (true) {
      try {
        const numbers = await this.#inputs.inputNumbers();

        this.#outputs.printBlankLine();

        const bonus = await this.#inputs.inputBonus();

        this.#outputs.printBlankLine();
        this.#operators.doWinnerDecider(numbers, bonus);

        break;
      } catch (err) {
        MissionUtils.Console.print(err);
      }
    }
  }
}

export default App;
