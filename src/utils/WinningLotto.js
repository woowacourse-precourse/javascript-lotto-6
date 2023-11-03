import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../Constants.js";
class WinningLotto {
  async getWinningLotto() {
    const mainLotto = await Console.readLineAsync(
      MESSAGE.WINNING_LOTTO_INPUT + "\n"
    );
    const mainLottoArr = mainLotto.split(",").map(Number);
    const bonusLotto = await Console.readLineAsync(
      MESSAGE.BONUS_LOTTO_INPUT + "\n"
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
