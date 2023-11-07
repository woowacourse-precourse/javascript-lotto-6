import { Console } from "@woowacourse/mission-utils";
import {
  Validator,
  validateBonusNumber,
  validatePayment,
  validateWinningNumber,
} from "./ValidateInput.js";
import { generateLottos, paymentToLottoCount } from "./utils/lotto.js";
import Input from "./Input.js";
import Output from "./Output.js";

class App {
  #payment;
  #lottoCount;
  #winningNumber;
  #bonusNumber;

  constructor() {
    this.lottos = [];
  }

  async play() {
    await this.readPayment();
    this.lottoIssuance();
    await this.readWinningNumber();
    await this.readBonusNumber();
  }

  async readPayment() {
    while (true) {
      try {
        const payment = await Input.readPayment();
        validatePayment(payment);
        this.#payment = Number(payment);
        break;
      } catch (error) {
        Console.print(error);
      }
    }
  }

  lottoIssuance() {
    this.#lottoCount = paymentToLottoCount(this.#payment);
    Output.writeLottoCount(this.#lottoCount);
    this.lottos = generateLottos(this.#lottoCount);
    this.lottos.forEach((lotto) => {
      lotto.print();
    });
  }

  async readWinningNumber() {
    while (true) {
      try {
        const winningNumber = await Input.readWinningNumber();
        Validator.blank(winningNumber);
        validateWinningNumber(winningNumber.split(","));
        this.#winningNumber = winningNumber.split(",").map((number) => {
          return Number(number);
        });
        break;
      } catch (error) {
        Console.print(error);
      }
    }
  }

  async readBonusNumber() {
    while (true) {
      try {
        const bonusNumber = await Input.readBonusNumber();
        validateBonusNumber(bonusNumber, this.#winningNumber);
        this.#bonusNumber = Number(bonusNumber);
        break;
      } catch (error) {
        Console.print(error);
      }
    }
  }
}

export default App;
