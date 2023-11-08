import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from "../Constants.js";
import Lotto from "../errors/Lotto.js";
import Bonus from "../errors/Bonus.js";
class WinningLotto {
  async getWinningLotto() {
    let mainLotto = "";
    let mainLottoArr = [];
    while (true) {
      try {
        mainLotto = await Console.readLineAsync(
          CONSOLE_MESSAGE.WINNING_LOTTO_INPUT + "\n"
        );
        const testArr = mainLotto.split(",");
        new Lotto(testArr);
        mainLottoArr = testArr.map(Number);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }
    return mainLottoArr;
  }

  async getBonusLotto(mainLottoArr) {
    let bonusLotto = "";
    while (true) {
      try {
        bonusLotto = await Console.readLineAsync(
          CONSOLE_MESSAGE.BONUS_LOTTO_INPUT + "\n"
        );
        new Bonus([mainLottoArr, bonusLotto]);
        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return Number(bonusLotto);
  }

  compareNumbers(myLottos, winningArr) {
    const mainLotto = winningArr[0];
    const bonusLotto = winningArr[1];
    let places = [];
    myLottos.map((lotto) => {
      const sameNumbers = lotto.filter((num) => mainLotto.includes(num));
      sameNumbers === 5 && lotto.includes(bonusLotto)
        ? places.push("bonus")
        : places.push(sameNumbers.length);
    });
    return places;
  }
}
export default WinningLotto;
