import { MissionUtils } from "@woowacourse/mission-utils";

import PRINT from "../src/constant/print.js";
import ERROR from "../src/constant/error.js";
import Lotto from "./Lotto.js";

class App {
  lottoPrice = 1000;
  lottoTotal;
  allLottos = [];
  winResult = [];

  async askMoney() {
    const money = await MissionUtils.Console.readLineAsync(PRINT.ASK_BUY);
    return parseInt(money);
  }

  moneyTypeCheck(money) {
    if (isNaN(money)) {
      throw new Error(ERROR.NOT_NUMBER);
    }
    if (money % this.lottoPrice !== 0) {
      throw new Error(ERROR.NOT_1000N);
    }
  }

  gethowManyLotto(money) {
    this.lottoTotal = money / this.lottoPrice;
    return this.lottoTotal;
  }

  createLottos() {
    for (let l = 0; l < this.lottoTotal; l++) {
      const lotto = new Lotto(
        MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
      );
      this.allLottos.push(lotto);
    }
  }

  printAllLottos() {
    this.allLottos.forEach((lotto) => {
      MissionUtils.Console.print(lotto.getLottoNumber().sort((a, b) => a - b));
    });
  }

  async askWinNumber() {
    const input = await MissionUtils.Console.readLineAsync(
      PRINT.ASK_WIN_NUMBER
    );
    const winNumber = input.split(",");
    this.checkDuplication(winNumber);
    this.checkWinNumberError(winNumber);

    return winNumber;
  }

  checkDuplication(winNumber) {
    const checkDup = new Set(winNumber);
    if (checkDup.size !== winNumber.length) {
      throw new Error(ERROR.DUPLICATION);
    }
  }

  checkWinNumberError(winNumber) {
    if (winNumber.length !== 6) {
      throw new Error(ERROR.NOT_6);
    }
    winNumber.forEach((number) => {
      if (number === "") {
        throw new Error(ERROR.BLANK);
      }
      if (number < 1 || number > 45) {
        throw new Error(ERROR.NOT_RANGE);
      }
    });
  }

  async askBonus(winNumber) {
    const bonus = await MissionUtils.Console.readLineAsync(
      PRINT.ASK_BONUS_NUMBER
    );
    this.checkBonusError(winNumber, bonus);
    return bonus;
  }

  checkBonusError(winNumber, bonus) {
    if (bonus === "") {
      throw new Error(ERROR.BLANK);
    }
    if (bonus < 1 || bonus > 45) {
      throw new Error(ERROR.NOT_RANGE);
    }
    winNumber.forEach((win) => {
      if (win == bonus) {
        throw new Error(ERROR.DUPLICATION);
      }
    });
  }

  async play() {
    const inputMoney = await this.askMoney();
    this.moneyTypeCheck(inputMoney);

    MissionUtils.Console.print(
      this.gethowManyLotto(inputMoney) + PRINT.RESULT_BUY
    );
    this.createLottos();
    this.printAllLottos();

    const winNumber = await this.askWinNumber();
    const winBonus = await this.askBonus(winNumber);

    this.allLottos.forEach((lotto) => {
      this.winResult.push(lotto.getCorrectNumber(winNumber));
    });
    MissionUtils.Console.print(this.winResult);
  }
}

export default App;
