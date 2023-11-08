import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import Calculate from "./Calculate.js";
import { MAGIC_NUM } from "./constants/magicNum.js";
import { ERROR_MESSAGES } from "./constants/message.js";

class App {
  userlotterys;
  winningnumber;
  bonusNumber;

  calculateLotto() {
    let userProfitCalculator = new Calculate(
      this.userlotterys,
      this.winningnumber,
      this.bonusNumber
    );
    userProfitCalculator.start();
  }

  async getLotto() {
    while (true) {
      let getAmount = await MissionUtils.Console.readLineAsync(
        "구입금액을 입력해 주세요. : \n"
      );
      try {
        if (isNaN(Number(getAmount.trim()))) {
          throw new Error(ERROR_MESSAGES.MONEY_NOT_NUMERIC);
        }
        if (Number(getAmount.trim()) % MAGIC_NUM.LOTTERY_PRICE) {
          throw new Error(ERROR_MESSAGES.NOT_IN_1000_UNIT);
        }
        let lottoCnt = parseInt(
          Number(getAmount.trim()) / MAGIC_NUM.LOTTERY_PRICE
        );
        MissionUtils.Console.print(`${lottoCnt}개를 구매했습니다.`);
        let lottolists = Lotto.getLottoNum(lottoCnt);
        for (let lotto of lottolists) {
          MissionUtils.Console.print(`[${lotto.join(", ")}]`);
        }
        this.userlotterys = lottolists;
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  async makeLotto() {
    while (true) {
      let getWinningNumber = await MissionUtils.Console.readLineAsync(
        "당첨 번호를 입력해 주세요. : \n"
      );
      try {
        let _getWinningNumber = getWinningNumber
          .split(",")
          .map((a) => Number(a.trim()));
        // console.log(_getWinningNumber);
        let lotto = new Lotto(_getWinningNumber);
        this.winningnumber = lotto.numbers;
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }

    while (true) {
      let bonusNumber = await MissionUtils.Console.readLineAsync(
        "보너스 번호를 입력해 주세요. : \n"
      );
      try {
        if (isNaN(bonusNumber)) {
          throw new Error(ERROR_MESSAGES.ONLY_NUMBER_ONE);
        }
        if (this.winningnumber.includes(Number(bonusNumber))) {
          throw new Error(ERROR_MESSAGES.NOT_UNIQUE_BONUS_NUMBER);
        }
        this.bonusNumber = Number(bonusNumber);
        break;
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  async play() {
    await this.getLotto();
    await this.makeLotto();
    await this.calculateLotto();
  }
}

export default App;
