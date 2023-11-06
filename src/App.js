import { MissionUtils } from "@woowacourse/mission-utils";

import PRINT from "../src/constant/print.js";
import ERROR from "../src/constant/error.js";
import Lotto from "./Lotto.js";

class App {
  lottoPrice = 1000;
  lottoTotal;
  allLottos = [];
  userResult = [];
  winResult = [0, 0, 0, 0, 0];

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
    return parseInt(bonus);
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

  getWinResult(userResult) {
    userResult.forEach((result) => {
      switch (result.correct) {
        case 6:
          this.winResult[4]++;
          break;
        case 5:
          result.bonusCorrect ? this.winResult[3]++ : this.winResult[2]++;
          break;
        case 4:
          this.winResult[1]++;
          break;
        case 3:
          this.winResult[0]++;
      }
    });
  }

  printWinResult(winResult) {
    MissionUtils.Console.print(PRINT.RESULT_WIN);
    MissionUtils.Console.print(PRINT.RESULT_5TH + `${winResult[0]}개`);
    MissionUtils.Console.print(PRINT.RESULT_4TH + `${winResult[1]}개`);
    MissionUtils.Console.print(PRINT.RESULT_3RD + `${winResult[2]}개`);
    MissionUtils.Console.print(PRINT.RESULT_2ND + `${winResult[3]}개`);
    MissionUtils.Console.print(PRINT.RESULT_1ST + `${winResult[4]}개`);
  }

  getProfit(input) {
    const win1 = 2000000000;
    const win2 = 30000000;
    const win3 = 1500000;
    const win4 = 50000;
    const win5 = 5000;
    const profit =
      this.winResult[4] * win1 +
      this.winResult[3] * win2 +
      this.winResult[2] * win3 +
      this.winResult[1] * win4 +
      this.winResult[0] * win5;
    return (100 + ((profit - input) / input) * 100).toFixed(2);
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
      this.userResult.push(lotto.getCorrectNumber(winNumber, winBonus));
    });
    MissionUtils.Console.print(this.userResult);

    this.getWinResult(this.userResult, winBonus);
    this.printWinResult(this.winResult);

    MissionUtils.Console.print(
      `총 수익률은 ${this.getProfit(inputMoney)}% 입니다.`
    );
  }
}

export default App;
