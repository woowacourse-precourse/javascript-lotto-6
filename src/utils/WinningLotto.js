import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE, ERROR_MESSAGE } from "../Constants.js";
import Lotto from "../Lotto.js";
class WinningLotto {
  async getWinningLotto() {
    let mainLotto = "";
    let mainLottoArr = [];
    while (true) {
      try {
        mainLotto = await Console.readLineAsync(
          CONSOLE_MESSAGE.WINNING_LOTTO_INPUT + "\n"
        );
        mainLottoArr = mainLotto.split(",").map(Number);
        new Lotto(mainLottoArr);
        break;
      } catch (error) {
        Console.print(ERROR_MESSAGE.NOT_VALID_MAIN_LOTTO);
      }
    }
    const bonusLotto = await Console.readLineAsync(
      CONSOLE_MESSAGE.BONUS_LOTTO_INPUT + "\n"
    );
    return [mainLottoArr, Number(bonusLotto)];
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
