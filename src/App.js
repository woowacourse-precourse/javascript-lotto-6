import { Console } from "@woowacourse/mission-utils";
import {
  Validator,
  validateBonusNumber,
  validatePayment,
  validateWinningNumber,
} from "./ValidateInput.js";
import {
  generateLottos,
  matchRank,
  paymentToLottoCount,
} from "./utils/lotto.js";
import Input from "./Input.js";
import Output from "./Output.js";

class App {
  #payment;
  #lottoCount;
  #winningNumber;
  #bonusNumber;

  constructor() {
    this.lottos = [];
    this.result = {
      fifth: { count: 3, prize: 5000, matched: 0 },
      fourth: { count: 4, prize: 50000, matched: 0 },
      third: { count: 5, bonus: false, prize: 1500000, matched: 0 },
      second: { count: 5, bonus: true, prize: 30000000, matched: 0 },
      first: { count: 6, prize: 2000000000, matched: 0 },
    };
  }

  async play() {
    await this.readPayment();
    this.lottoIssuance();
    await this.readWinningNumber();
    await this.readBonusNumber();
    this.lottoDrawing();
    this.lottoStatistics();
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

  lottoDrawing() {
    this.lottos.forEach((lotto) => {
      const lottoMatched = lotto.draw(this.#winningNumber);
      const bonusMatched = lotto.bonusDraw(this.#bonusNumber);

      matchRank(this.result, lottoMatched, bonusMatched);
    });
  }

  lottoStatistics() {
    Output.writeLottoStatics(this.result);
    Output.writeReturnRate(this.result, this.#payment);
  }
}

export default App;
