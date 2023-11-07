import { MissionUtils } from "@woowacourse/mission-utils";
import { MESSAGE } from "./Constant.js";
import Validation from "./Validation.js";

class UserInterface {
  static async getLottoPrice() {
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT_LOTTO_PRICE);
        if (Validation.validateLottoPrice(input)) {
          return Number(input);
        }
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  static displayLottos(lottos) {
    MissionUtils.Console.print(`\n${lottos.length}${MESSAGE.RESULT_LOTTO_COUNT}`);
    lottos.map((lotto) => {
      const numbers = lotto.getNumbers().join(", ");
      MissionUtils.Console.print(`[${numbers}]`);
    });
  }

  static async getWinningNumbers() {
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT_WINNING_NUMBERS);
        if (Validation.validateWinningNumbers(input)) {
          return input.split(",").map((number) => Number(number));
        }
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  static async getBonusNumber(winningNumbers) {
    while (true) {
      try {
        const input = await MissionUtils.Console.readLineAsync(MESSAGE.INPUT_BONUS_NUMBER);
        if (Validation.validateBonusNumber(input, winningNumbers)) {
          return Number(input);
        }
      } catch (error) {
        MissionUtils.Console.print(error.message);
      }
    }
  }

  static displayResult(result, profit) {
    MissionUtils.Console.print(MESSAGE.RESULT);
    MissionUtils.Console.print(`${MESSAGE.RESULT_THREE}${result[3]}개`);
    MissionUtils.Console.print(`${MESSAGE.RESULT_FOUR}${result[4]}개`);
    MissionUtils.Console.print(`${MESSAGE.RESULT_FIVE}${result[5]}개`);
    MissionUtils.Console.print(`${MESSAGE.RESULT_FIVE_BONUS}${result["5+1"]}개`);
    MissionUtils.Console.print(`${MESSAGE.RESULT_SIX}${result[6]}개`);
    MissionUtils.Console.print(`총 수익률은 ${profit.toFixed(1)}%입니다.`);
  }
}

export default UserInterface;
