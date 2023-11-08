import { Console } from "@woowacourse/mission-utils";
import { CONSOLE_MESSAGE } from "../Constants.js";
import Lotto from "../errors/Lotto.js";
import Bonus from "../errors/Bonus.js";
import { InputView } from "../view/inputVeiw.js";
class WinningLotto {
  async getWinningLotto() {
    let mainLotto = "";
    let mainLottoArr = [];
    while (true) {
      try {
        mainLotto = await InputView.readMainLotto();
        mainLottoArr = mainLotto.map(Number);
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
        bonusLotto = await InputView.readBonusLotto(mainLottoArr);

        break;
      } catch (error) {
        Console.print(error.message);
      }
    }

    return bonusLotto;
  }

  compareNumbers(myLottos, winningArr) {
    const [mainLotto, bonusLotto] = winningArr;
    const places = myLottos.map((lotto) => {
      const sameNumbers = lotto.filter((num) => mainLotto.includes(num));
      return sameNumbers.length === 5 && lotto.includes(bonusLotto)
        ? "bonus"
        : sameNumbers.length;
    });
    return places;
  }
}
export default WinningLotto;
